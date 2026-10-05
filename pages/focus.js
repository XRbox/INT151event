import { 
    createPageTitle, 
    createExplanationPanel, 
    createCodePanel,
    createDemoContainer,
    createEventConsole,
    createEventInspector,
    logEvent,
    updateInspector
} from '../js/components/ui.js';

export function renderFocusEvents() {
    let html = '';
    html += createPageTitle('Focus & Blur Events', 'เรียนรู้วิธีตรวจจับเมื่อ Element ถูกเลือก (Focus) หรือถูกยกเลิกการเลือก (Blur)');

    html += `<section class="lesson-section">`;
    html += createExplanationPanel(
        'focus & blur', 
        `<p><strong>หมวดหมู่:</strong> Focus</p>
         <p><strong>คืออะไร?</strong> <code>focus</code> จะทำงานเมื่อ Element ถูกเลือก (เช่น การคลิกหรือกดปุ่ม Tab มาที่ช่องนั้น) ส่วน <code>blur</code> จะทำงานเมื่อ Element นั้นสูญเสียการ Focus (เช่น คลิกไปที่อื่น)</p>
         <p><strong>ลองทำ:</strong> คลิกในช่องพิมพ์ด้านล่าง แล้วคลิกออกไปที่อื่น (หรือกดปุ่ม Tab) และลองปล่อยช่องว่างไว้เพื่อดูการแจ้งเตือนเมื่อเกิด blur</p>`
    );

    const code = `const fnInput = document.getElementById('first-name');
const lnInput = document.getElementById('last-name');
const msg = document.getElementById('focus-msg');

function handleFocus(event) {
    // Log focus
    event.target.style.borderColor = 'blue';
}

function handleBlur(event) {
    // Log blur
    event.target.style.borderColor = '';
    
    // Empty field demonstration
    if (event.target.value.trim() === '') {
        const fieldName = event.target.getAttribute('placeholder');
        msg.textContent = \`your \${fieldName} is empty\`;
    } else {
        msg.textContent = '';
    }
}

fnInput.addEventListener('focus', handleFocus);
fnInput.addEventListener('blur', handleBlur);
// same for last name`;

    html += `<div class="lab-grid" style="margin-bottom: 40px;">`;
    html += `<div class="lab-column">`;
    html += createCodePanel(code, 'javascript');
    
    html += `
        <div class="card event-inspector" style="margin-top: 20px; text-align: center;">
            <h3 class="card-title">ข้อความแจ้งเตือน</h3>
            <div id="focus-msg" style="color: var(--danger-color); font-weight: bold; min-height: 24px; margin-top: 10px;"></div>
        </div>
    `;
    html += `</div>`;
    
    html += `<div class="lab-column">`;
    html += createDemoContainer(`
        <div style="width: 100%; max-width: 300px; display: flex; flex-direction: column; gap: 15px;">
            <div>
                <label style="display: block; margin-bottom: 8px; font-weight: bold;">ชื่อแรก</label>
                <input type="text" id="first-name" placeholder="ชื่อแรก" style="width: 100%; padding: 10px; font-size: 1rem; border: 2px solid var(--border-color); border-radius: 4px; background-color: var(--bg-primary); color: var(--text-primary); outline: none; transition: border-color 0.2s;">
            </div>
            <div>
                <label style="display: block; margin-bottom: 8px; font-weight: bold;">นามสกุล</label>
                <input type="text" id="last-name" placeholder="นามสกุล" style="width: 100%; padding: 10px; font-size: 1rem; border: 2px solid var(--border-color); border-radius: 4px; background-color: var(--bg-primary); color: var(--text-primary); outline: none; transition: border-color 0.2s;">
            </div>
        </div>
    `);
    html += createEventConsole('focus-console');
    html += createEventInspector('focus-inspector');
    html += `</div>`;
    html += `</div></section>`;
    
    return html;
}

export function initFocusEvents() {
    const fnInput = document.getElementById('first-name');
    const lnInput = document.getElementById('last-name');
    const msg = document.getElementById('focus-msg');
    
    function handleFocus(e) {
        e.target.style.borderColor = 'var(--accent-color)';
        logEvent('focus-console', 'focus \u2713');
        updateInspector('focus-inspector', e);
    }
    
    function handleBlur(e) {
        e.target.style.borderColor = 'var(--border-color)';
        logEvent('focus-console', 'blur \u2713');
        updateInspector('focus-inspector', e);
        
        if (e.target.value.trim() === '') {
            const fieldName = e.target.getAttribute('placeholder');
            msg.textContent = `คุณยังไม่ได้กรอก ${fieldName}`;
        } else {
            msg.textContent = '';
        }
    }
    
    if (fnInput && lnInput) {
        fnInput.addEventListener('focus', handleFocus);
        fnInput.addEventListener('blur', handleBlur);
        
        lnInput.addEventListener('focus', handleFocus);
        lnInput.addEventListener('blur', handleBlur);
    }
}
