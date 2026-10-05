import { 
    createPageTitle, 
    createCodePanel,
    createEventConsole,
    createEventInspector
} from '../js/components/ui.js';

export function renderPlayground() {
    let html = '';
    html += createPageTitle('Event Playground', 'ห้องทดลองแบบอิสระสำหรับทดสอบและทำความเข้าใจ JavaScript DOM Events');

    html += `<section class="lesson-section">`;
    html += `<div class="lab-grid" style="margin-bottom: 40px; grid-template-columns: 1fr 1fr;">`;
    
    // Left Column: Configuration & Visual DOM
    html += `<div class="lab-column">`;
    
    html += `<div class="card" style="padding: 20px; margin-bottom: 20px; background: var(--bg-secondary); border: 2px solid var(--border-color);">
        <h3 class="card-title" style="margin-bottom: 15px;">การตั้งค่า (CONFIGURATION)</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div>
                <label style="display: block; font-weight: bold; margin-bottom: 5px;">ประเภท Event:</label>
                <select id="pg-event" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid var(--border-color); background: var(--bg-primary); color: var(--text-primary); font-family: monospace;">
                    <option value="click">click</option>
                    <option value="mousedown">mousedown</option>
                    <option value="mouseup">mouseup</option>
                    <option value="mouseover">mouseover</option>
                    <option value="mouseout">mouseout</option>
                    <option value="mousemove">mousemove</option>
                    <option value="keydown">keydown</option>
                    <option value="keyup">keyup</option>
                    <option value="input">input</option>
                    <option value="focus">focus</option>
                    <option value="blur">blur</option>
                </select>
            </div>
            
            <div>
                <label style="display: block; font-weight: bold; margin-bottom: 5px;">ระยะ (Phases):</label>
                <label style="display: block; cursor: pointer;"><input type="checkbox" id="pg-cap" checked> Capturing</label>
                <label style="display: block; cursor: pointer;"><input type="checkbox" id="pg-bub" checked> Bubbling</label>
            </div>
            
            <div style="grid-column: span 2; border-top: 1px dashed var(--border-color); padding-top: 15px;">
                <label style="display: block; font-weight: bold; margin-bottom: 5px;">เมธอด (ทำงานกับทุก Handler):</label>
                <label style="display: inline-block; cursor: pointer; margin-right: 20px;"><input type="checkbox" id="pg-pd"> preventDefault()</label>
                <label style="display: inline-block; cursor: pointer;"><input type="checkbox" id="pg-sp"> stopPropagation()</label>
            </div>
        </div>
        
        <div style="margin-top: 20px; text-align: center;">
            <button id="pg-reset" style="padding: 8px 20px; background: var(--danger-color); color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">รีเซ็ต Playground</button>
        </div>
    </div>`;

    // Visual DOM Tree
    html += `<div style="width: 100%; margin-bottom: 20px;">
        <div id="pg-doc" class="prop-box pg-node" data-name="Document" style="padding: 20px; border: 2px solid var(--border-color); background-color: var(--bg-primary); border-radius: 8px; position: relative;">
            <span class="prop-label" style="position: absolute; top: 5px; left: 10px; font-size: 0.75rem; font-family: monospace; color: var(--text-muted); font-weight: bold;">Document</span>
            <div id="pg-html" class="prop-box pg-node" data-name="HTML" style="padding: 20px; border: 2px solid var(--border-color); background-color: var(--bg-secondary); border-radius: 8px; margin-top: 15px; position: relative;">
                <span class="prop-label" style="position: absolute; top: 5px; left: 10px; font-size: 0.75rem; font-family: monospace; color: var(--text-muted); font-weight: bold;">HTML</span>
                <div id="pg-body" class="prop-box pg-node" data-name="BODY" style="padding: 20px; border: 2px solid var(--border-color); background-color: var(--bg-tertiary); border-radius: 8px; margin-top: 15px; position: relative;">
                    <span class="prop-label" style="position: absolute; top: 5px; left: 10px; font-size: 0.75rem; font-family: monospace; color: var(--text-muted); font-weight: bold;">BODY</span>
                    <div id="pg-div" class="prop-box pg-node" data-name="DIV" style="padding: 20px; border: 2px solid var(--border-color); background-color: var(--bg-primary); border-radius: 8px; margin-top: 15px; position: relative;">
                        <span class="prop-label" style="position: absolute; top: 5px; left: 10px; font-size: 0.75rem; font-family: monospace; color: var(--text-muted); font-weight: bold;">DIV</span>
                        <div style="text-align: center; margin-top: 25px; display: flex; justify-content: center; gap: 20px;">
                            <button id="pg-btn-a" class="prop-box pg-node" data-name="BUTTON A" tabindex="0" style="padding: 15px 30px; font-size: 1.1rem; cursor: pointer; border-radius: 4px; border: 3px solid var(--border-color); background-color: var(--accent-color); color: white; font-weight: bold; position: relative; flex: 1;">
                                BUTTON A
                            </button>
                            <input id="pg-btn-b" class="prop-box pg-node" data-name="BUTTON B (Input)" placeholder="พิมพ์ที่นี่ (INPUT B)" style="padding: 15px; font-size: 1.1rem; border-radius: 4px; border: 3px solid var(--border-color); background-color: var(--bg-tertiary); color: var(--text-primary); font-weight: bold; position: relative; flex: 1; text-align: center;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

    html += `<div id="pg-code-container"></div>`;

    html += `</div>`;
    
    // Right Column: Output
    html += `<div class="lab-column">`;
    html += createEventInspector('pg-inspector');
    
    html += `<div class="card event-console" style="margin-top: 20px; height: auto; min-height: 400px; max-height: 600px; display: flex; flex-direction: column;">
        <div class="console-header">
            <span>EVENT CONSOLE (บันทึกลำดับการเกิด)</span>
            <button class="clear-log-btn" id="clear-pg-log">ล้างข้อมูล</button>
        </div>
        <div class="console-logs" id="pg-logs" style="font-family: monospace; overflow-y: auto; flex: 1;">
            <!-- Logs populated via JS -->
        </div>
    </div>`;
    
    html += `</div>`;
    html += `</div></section>`;
    
    const styles = `
    <style>
        .pg-node { transition: all 0.2s; }
        .hl-cap {
            background-color: rgba(51, 154, 240, 0.2) !important;
            border-color: var(--accent-color) !important;
            box-shadow: 0 0 10px rgba(51, 154, 240, 0.5);
        }
        .hl-target {
            background-color: rgba(64, 192, 87, 0.6) !important;
            border-color: var(--success-color) !important;
            box-shadow: 0 0 20px rgba(64, 192, 87, 0.8);
            transform: scale(1.05);
            color: white !important;
        }
        .hl-bub {
            background-color: rgba(250, 82, 82, 0.2) !important;
            border-color: var(--danger-color) !important;
            box-shadow: 0 0 10px rgba(250, 82, 82, 0.5);
        }
    </style>
    `;

    return styles + html;
}

export function initPlayground() {
    const nodes = {
        'doc': document.getElementById('pg-doc'),
        'html': document.getElementById('pg-html'),
        'body': document.getElementById('pg-body'),
        'div': document.getElementById('pg-div'),
        'btnA': document.getElementById('pg-btn-a'),
        'btnB': document.getElementById('pg-btn-b')
    };
    
    const ui = {
        evtType: document.getElementById('pg-event'),
        cap: document.getElementById('pg-cap'),
        bub: document.getElementById('pg-bub'),
        pd: document.getElementById('pg-pd'),
        sp: document.getElementById('pg-sp'),
        reset: document.getElementById('pg-reset'),
        logs: document.getElementById('pg-logs'),
        clearLog: document.getElementById('clear-pg-log'),
        code: document.getElementById('pg-code-container')
    };
    
    let activeListeners = [];
    let eventQueue = [];
    let isAnimating = false;
    let playbackTimeout = null;
    
    function logToConsole(entryHtml) {
        const entry = document.createElement('div');
        entry.style.cssText = "margin-bottom: 10px; padding: 10px; border-bottom: 1px solid var(--border-color); background: rgba(0,0,0,0.1); border-radius: 4px;";
        entry.innerHTML = entryHtml;
        ui.logs.prepend(entry);
    }
    
    ui.clearLog.addEventListener('click', () => { ui.logs.innerHTML = ''; });
    
    function generateCode() {
        const type = ui.evtType.value;
        const cap = ui.cap.checked;
        const bub = ui.bub.checked;
        const pd = ui.pd.checked;
        const sp = ui.sp.checked;
        
        let code = `// Current Playground Configuration
const nodes = [document, html, body, div, btnA, btnB];

nodes.forEach(node => {
${cap ? `  node.addEventListener('${type}', handler, true);  // Capturing\n` : ''}${bub ? `  node.addEventListener('${type}', handler, false); // Bubbling\n` : ''}});

function handler(event) {
${pd ? `  event.preventDefault();\n` : ''}${sp ? `  event.stopPropagation();\n` : ''}  console.log('type:', event.type);
  console.log('target:', event.target);
  console.log('currentTarget:', event.currentTarget);
}`;
        
        ui.code.innerHTML = `
            <div class="code-panel" style="margin-top: 20px;">
                <div class="code-panel-header">
                    <span class="language-label">JAVASCRIPT</span>
                </div>
                <div class="code-content" style="max-height: 300px; overflow-y: auto;">
                    <pre><code>${code}</code></pre>
                </div>
            </div>
        `;
    }
    
    function removeAllListeners() {
        activeListeners.forEach(({ node, type, fn, capture }) => {
            node.removeEventListener(type, fn, capture);
        });
        activeListeners = [];
    }
    
    function attachListeners() {
        removeAllListeners();
        generateCode();
        
        const type = ui.evtType.value;
        const cap = ui.cap.checked;
        const bub = ui.bub.checked;
        const pd = ui.pd.checked;
        const sp = ui.sp.checked;
        
        const createHandler = (phaseLabel) => {
            return function(e) {
                // Ignore internal UI clicks if event is click
                if (type === 'click' && !Object.values(nodes).some(n => n === e.target || n.contains(e.target))) {
                    return;
                }
                
                if (pd) e.preventDefault();
                if (sp) e.stopPropagation();
                
                if (isAnimating) return; // Prevent queue flood during animation
                
                eventQueue.push({
                    node: this,
                    phaseLabel: phaseLabel,
                    nodeName: this.getAttribute('data-name'),
                    type: e.type,
                    targetName: e.target.getAttribute('data-name') || e.target.tagName,
                    currentName: e.currentTarget.getAttribute('data-name') || e.currentTarget.tagName,
                    bubbles: e.bubbles,
                    cancelable: e.cancelable,
                    defaultPrevented: e.defaultPrevented,
                    eventPhase: e.eventPhase
                });
                
                if (!playbackTimeout) {
                    playbackTimeout = setTimeout(playAnimation, 100);
                }
            };
        };
        
        Object.values(nodes).forEach(node => {
            if (cap) {
                const fn = createHandler('capturing');
                node.addEventListener(type, fn, true);
                activeListeners.push({ node, type, fn, capture: true });
            }
            if (bub) {
                const fn = createHandler('bubbling');
                node.addEventListener(type, fn, false);
                activeListeners.push({ node, type, fn, capture: false });
            }
        });
    }
    
    function playAnimation() {
        if (eventQueue.length === 0) return;
        isAnimating = true;
        playbackTimeout = null;
        
        // Take a snapshot of the queue to process, clear it for the next round
        const queue = [...eventQueue];
        eventQueue = [];
        
        Object.values(nodes).forEach(n => {
            n.classList.remove('hl-cap', 'hl-target', 'hl-bub');
        });
        
        let index = 0;
        
        function nextFrame() {
            if (index > 0) {
                const prev = queue[index - 1];
                prev.node.classList.remove('hl-cap', 'hl-target', 'hl-bub');
            }
            
            if (index >= queue.length) {
                isAnimating = false;
                return;
            }
            
            const curr = queue[index];
            
            // Highlight node visually
            let cssClass = curr.eventPhase === 1 ? 'hl-cap' : curr.eventPhase === 2 ? 'hl-target' : 'hl-bub';
            curr.node.classList.add(cssClass);
            
            // Log to console
            logToConsole(`
                <div style="font-weight: bold; color: var(--accent-color); margin-bottom: 5px;">${curr.type}</div>
                <div><span style="color: var(--text-muted);">target:</span> ${curr.targetName}</div>
                <div><span style="color: var(--text-muted);">currentTarget:</span> ${curr.currentName}</div>
                <div><span style="color: var(--text-muted);">phase:</span> ${curr.eventPhase} (${curr.phaseLabel})</div>
            `);
            
            // Update inspector
            const inspectorEl = document.getElementById('pg-inspector-wrapper');
            if (inspectorEl) {
                inspectorEl.querySelector('.val-type').textContent = curr.type;
                inspectorEl.querySelector('.val-target').textContent = curr.targetName;
                inspectorEl.querySelector('.val-currentTarget').textContent = curr.currentName;
                
                // Update bools
                const setBool = (sel, val) => {
                    const badge = inspectorEl.querySelector(sel);
                    if (badge) {
                        badge.textContent = val ? 'true' : 'false';
                        badge.style.backgroundColor = val ? 'rgba(64, 192, 87, 0.2)' : 'rgba(250, 82, 82, 0.2)';
                        badge.style.color = val ? 'var(--success-color)' : 'var(--danger-color)';
                        badge.style.border = 'none';
                    }
                };
                setBool('.val-bubbles', curr.bubbles);
                setBool('.val-cancelable', curr.cancelable);
                setBool('.val-defaultPrevented', curr.defaultPrevented);
                
                // Update Phase Pills
                const phaseBadges = inspectorEl.querySelectorAll('.phase-badge');
                phaseBadges.forEach(badge => {
                    if (parseInt(badge.getAttribute('data-phase')) === curr.eventPhase) {
                        badge.style.backgroundColor = 'var(--accent-color)';
                        badge.style.color = 'white';
                        badge.style.borderColor = 'var(--accent-color)';
                        badge.style.fontWeight = 'bold';
                    } else {
                        badge.style.backgroundColor = 'var(--bg-tertiary)';
                        badge.style.color = 'var(--text-muted)';
                        badge.style.borderColor = 'var(--border-color)';
                        badge.style.fontWeight = 'normal';
                    }
                });
            }
            
            index++;
            setTimeout(nextFrame, 800);
        }
        
        nextFrame();
    }
    
    // Bind UI changes
    [ui.evtType, ui.cap, ui.bub, ui.pd, ui.sp].forEach(el => {
        el.addEventListener('change', attachListeners);
    });
    
    ui.reset.addEventListener('click', () => {
        ui.evtType.value = 'click';
        ui.cap.checked = true;
        ui.bub.checked = true;
        ui.pd.checked = false;
        ui.sp.checked = false;
        ui.logs.innerHTML = '';
        attachListeners();
    });
    
    // Init
    attachListeners();
}
