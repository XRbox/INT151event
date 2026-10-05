import { 
    createPageTitle, 
    createExplanationPanel, 
    createCodePanel,
    createDemoContainer
} from '../js/components/ui.js';

export function renderPropagationEvents() {
    let html = '';
    html += createPageTitle('Event Propagation', 'เห็นภาพการทำงานของ Capturing, Target และ Bubbling');

    html += `<section class="lesson-section">`;
    html += `<div class="lab-grid" style="margin-bottom: 40px;">`;
    
    // LEFT COLUMN
    html += `<div class="lab-column">`;
    html += createExplanationPanel(
        '3 ขั้นตอนการเดินทางของ Event', 
        `<p>เมื่อ Event เกิดขึ้นใน DOM มันจะเดินทางผ่าน 3 ขั้นตอน (Phases) เสมอ:</p>
         <ol style="margin-top: 10px; margin-bottom: 10px; padding-left: 20px;">
            <li style="margin-bottom: 8px;"><strong>Capturing Phase:</strong> Event เดินทางจากด้านนอก (Document) ทะลุลงไปหา Element ที่ถูกกระทำ</li>
            <li style="margin-bottom: 8px;"><strong>Target Phase:</strong> Event เดินทางไปถึง Element ที่เป็นต้นเหตุ (Target)</li>
            <li><strong>Bubbling Phase:</strong> Event เดินทางจาก Element ต้นเหตุ ย้อนกลับขึ้นไปหาด้านนอก (Document)</li>
         </ol>`
    );
    
    html += createExplanationPanel(
        'แผงควบคุม Listener',
        `<p>ลองเปิด-ปิด Event Listener ของแต่ละ Element เพื่อดูว่าโค้ดบรรทัดไหนจะถูกเรียกบ้าง</p>
         <div style="display: grid; grid-template-columns: 100px 1fr 1fr; gap: 10px; align-items: center; text-align: center; font-family: monospace; font-size: 0.9rem; margin-top: 15px;">
            <div style="font-weight: bold; text-align: left;">Node</div>
            <div style="font-weight: bold; color: var(--accent-color);">Capturing</div>
            <div style="font-weight: bold; color: var(--danger-color);">Bubbling</div>
            
            <div style="text-align: left;">Document</div>
            <div><input type="checkbox" id="chk-doc-cap" checked></div>
            <div><input type="checkbox" id="chk-doc-bub" checked></div>
            
            <div style="text-align: left;">HTML</div>
            <div><input type="checkbox" id="chk-html-cap" checked></div>
            <div><input type="checkbox" id="chk-html-bub" checked></div>
            
            <div style="text-align: left;">BODY</div>
            <div><input type="checkbox" id="chk-body-cap" checked></div>
            <div><input type="checkbox" id="chk-body-bub" checked></div>
            
            <div style="text-align: left;">DIV</div>
            <div><input type="checkbox" id="chk-div-cap" checked></div>
            <div><input type="checkbox" id="chk-div-bub" checked></div>
            
            <div style="text-align: left;">BUTTON</div>
            <div style="grid-column: span 2;">
                <input type="checkbox" id="chk-btn-target" checked> Target Phase
            </div>
         </div>
         
         <div style="display: flex; gap: 10px; margin-top: 20px;">
            <button id="preset-cap" class="btn" style="flex: 1; padding: 10px; background: rgba(51, 154, 240, 0.1); color: var(--accent-color); border: 2px solid var(--accent-color); border-radius: 4px; cursor: pointer; font-weight: bold;">ทดสอบเฉพาะ Capturing</button>
            <button id="preset-bub" class="btn" style="flex: 1; padding: 10px; background: rgba(250, 82, 82, 0.1); color: var(--danger-color); border: 2px solid var(--danger-color); border-radius: 4px; cursor: pointer; font-weight: bold;">ทดสอบเฉพาะ Bubbling</button>
         </div>`
    );
    html += `</div>`;
    
    // RIGHT COLUMN
    html += `<div class="lab-column">`;
    html += createDemoContainer(`
        <div style="width: 100%;">
            <!-- Simulated DOM Tree -->
            <div id="sim-document" class="prop-box" data-name="Document" style="padding: 20px; border: 2px solid var(--border-color); background-color: var(--bg-primary); border-radius: 8px; position: relative;">
                <span class="prop-label">Document</span>
                <div id="sim-html" class="prop-box" data-name="HTML" style="padding: 20px; border: 2px solid var(--border-color); background-color: var(--bg-secondary); border-radius: 8px; margin-top: 15px; position: relative;">
                    <span class="prop-label">HTML</span>
                    <div id="sim-body" class="prop-box" data-name="BODY" style="padding: 20px; border: 2px solid var(--border-color); background-color: var(--bg-tertiary); border-radius: 8px; margin-top: 15px; position: relative;">
                        <span class="prop-label">BODY</span>
                        <div id="sim-div" class="prop-box" data-name="DIV" style="padding: 20px; border: 2px solid var(--border-color); background-color: var(--bg-primary); border-radius: 8px; margin-top: 15px; position: relative;">
                            <span class="prop-label">DIV</span>
                            <div style="text-align: center; margin-top: 25px;">
                                <button id="sim-button" class="prop-box" data-name="BUTTON" style="padding: 15px 30px; font-size: 1.1rem; cursor: pointer; border-radius: 4px; border: 3px solid var(--border-color); background-color: var(--text-secondary); color: white; font-weight: bold; position: relative;">
                                    BUTTON
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `);
    
    // Custom Live Event Timeline
    html += `
        <div class="card event-console" style="margin-top: 20px; height: auto; min-height: 250px;">
            <div class="console-header">
                <span>ลำดับการเกิด Event จริง (TIMELINE)</span>
                <button class="clear-log-btn" id="clear-prop-log">ล้างข้อมูล</button>
            </div>
            <div class="console-logs" id="prop-logs" style="font-family: monospace; max-height: 300px; overflow-y: auto;">
                <!-- Logs populated via JS -->
            </div>
        </div>
    `;
    html += `</div>`;
    html += `</div></section>`;
    
    // Add custom CSS to document for the animation styles
    const styles = `
    <style>
        .prop-label {
            position: absolute;
            top: 5px;
            left: 10px;
            font-size: 0.75rem;
            font-family: monospace;
            color: var(--text-muted);
            font-weight: bold;
        }
        .prop-box {
            transition: all 0.3s;
        }
        .prop-box.highlight-cap {
            background-color: rgba(51, 154, 240, 0.2) !important;
            border-color: var(--accent-color) !important;
            box-shadow: 0 0 10px rgba(51, 154, 240, 0.5);
        }
        .prop-box.highlight-target {
            background-color: rgba(64, 192, 87, 0.6) !important;
            border-color: var(--success-color) !important;
            box-shadow: 0 0 20px rgba(64, 192, 87, 0.8);
            transform: scale(1.05);
            color: white !important;
        }
        .prop-box.highlight-target::after {
            content: "TARGET";
            position: absolute;
            top: -15px;
            right: -15px;
            background: var(--success-color);
            color: white;
            font-size: 0.7rem;
            padding: 4px 8px;
            border-radius: 12px;
            font-weight: bold;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .prop-box.highlight-bub {
            background-color: rgba(250, 82, 82, 0.2) !important;
            border-color: var(--danger-color) !important;
            box-shadow: 0 0 10px rgba(250, 82, 82, 0.5);
        }
        .timeline-section {
            margin-top: 10px;
            margin-bottom: 5px;
            font-weight: bold;
            color: var(--text-secondary);
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 3px;
            letter-spacing: 0.05em;
        }
        .timeline-entry {
            display: flex;
            padding: 4px 10px;
            gap: 15px;
            border-radius: 4px;
            transition: background-color 0.2s;
        }
        .timeline-entry .num {
            color: var(--accent-color);
            font-weight: bold;
            width: 20px;
        }
        .timeline-entry .node {
            color: var(--text-primary);
        }
    </style>
    `;
    
    return styles + html;
}

export function initPropagationEvents() {
    const nodes = {
        'doc': document.getElementById('sim-document'),
        'html': document.getElementById('sim-html'),
        'body': document.getElementById('sim-body'),
        'div': document.getElementById('sim-div'),
        'btn': document.getElementById('sim-button')
    };
    
    const logsContainer = document.getElementById('prop-logs');
    const clearBtn = document.getElementById('clear-prop-log');
    
    const chk = {
        'doc': { cap: document.getElementById('chk-doc-cap'), bub: document.getElementById('chk-doc-bub') },
        'html': { cap: document.getElementById('chk-html-cap'), bub: document.getElementById('chk-html-bub') },
        'body': { cap: document.getElementById('chk-body-cap'), bub: document.getElementById('chk-body-bub') },
        'div': { cap: document.getElementById('chk-div-cap'), bub: document.getElementById('chk-div-bub') },
        'btn': { target: document.getElementById('chk-btn-target') }
    };
    
    let eventQueue = [];
    let isAnimating = false;
    let stepCount = 0;
    
    clearBtn.addEventListener('click', () => {
        logsContainer.innerHTML = '';
        stepCount = 0;
    });
    
    // Attach REAL event listeners to the nested structure
    Object.keys(nodes).forEach(key => {
        const node = nodes[key];
        
        // CAPTURING Phase Listeners (useCapture = true)
        node.addEventListener('click', (e) => {
            if (e.target !== nodes['btn']) return; // ignore clicks on outer boxes
            if (key !== 'btn' && chk[key].cap.checked) {
                eventQueue.push({ node: node, phase: 'capturing', name: node.getAttribute('data-name') });
            }
        }, true);
        
        // TARGET Phase Listener (attached to the button itself)
        if (key === 'btn') {
            node.addEventListener('click', (e) => {
                if (chk['btn'].target.checked) {
                    eventQueue.push({ node: node, phase: 'target', name: node.getAttribute('data-name') });
                }
            });
        }
        
        // BUBBLING Phase Listeners (useCapture = false)
        node.addEventListener('click', (e) => {
            if (e.target !== nodes['btn']) return;
            if (key !== 'btn' && chk[key].bub.checked) {
                eventQueue.push({ node: node, phase: 'bubbling', name: node.getAttribute('data-name') });
            }
        }, false);
    });
    
    // Intercept click on button to playback the real collected events visually
    nodes['btn'].addEventListener('click', (e) => {
        if (isAnimating) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        
        setTimeout(() => {
            playAnimation();
        }, 50);
    });
    
    function playAnimation() {
        if (eventQueue.length === 0) return;
        isAnimating = true;
        
        // Clear old highlights
        Object.values(nodes).forEach(n => {
            n.classList.remove('highlight-cap', 'highlight-target', 'highlight-bub');
        });
        
        const logBlock = document.createElement('div');
        logBlock.style.marginBottom = '20px';
        logsContainer.prepend(logBlock);
        
        let currentPhase = null;
        let index = 0;
        
        function nextFrame() {
            if (index > 0) {
                const prev = eventQueue[index - 1];
                prev.node.classList.remove(`highlight-${prev.phase === 'capturing' ? 'cap' : prev.phase === 'bubbling' ? 'bub' : 'target'}`);
            }
            
            if (index >= eventQueue.length) {
                isAnimating = false;
                eventQueue = [];
                return;
            }
            
            const curr = eventQueue[index];
            const phaseClass = curr.phase === 'capturing' ? 'cap' : curr.phase === 'bubbling' ? 'bub' : 'target';
            
            curr.node.classList.add(`highlight-${phaseClass}`);
            
            if (currentPhase !== curr.phase) {
                currentPhase = curr.phase;
                const header = document.createElement('div');
                header.className = 'timeline-section';
                header.textContent = curr.phase.toUpperCase();
                logBlock.appendChild(header);
            }
            
            stepCount++;
            const entry = document.createElement('div');
            entry.className = 'timeline-entry';
            entry.innerHTML = `<span class="num">${stepCount}</span><span class="node">${curr.name.toLowerCase()}</span>`;
            
            // visually highlight the log entry as well
            entry.style.backgroundColor = curr.phase === 'capturing' ? 'rgba(51, 154, 240, 0.1)' : curr.phase === 'target' ? 'rgba(64, 192, 87, 0.2)' : 'rgba(250, 82, 82, 0.1)';
            
            logBlock.appendChild(entry);
            
            index++;
            setTimeout(nextFrame, 800); // 800ms between node jumps so student can clearly observe the sequence
        }
        
        nextFrame();
    }
    
    // Preset Control Handlers
    document.getElementById('preset-cap').addEventListener('click', () => {
        Object.keys(chk).forEach(k => {
            if (chk[k].cap) chk[k].cap.checked = true;
            if (chk[k].bub) chk[k].bub.checked = false;
        });
        chk['btn'].target.checked = true;
        
        if (!isAnimating) nodes['btn'].click();
    });
    
    document.getElementById('preset-bub').addEventListener('click', () => {
        Object.keys(chk).forEach(k => {
            if (chk[k].cap) chk[k].cap.checked = false;
            if (chk[k].bub) chk[k].bub.checked = true;
        });
        chk['btn'].target.checked = true;
        
        if (!isAnimating) nodes['btn'].click();
    });
}
