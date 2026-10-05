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

export function renderKeyboardEvents() {
    let html = '';
    html += createPageTitle('Keyboard Events', 'เรียนรู้วิธีรับค่าจากการกดคีย์บอร์ด');

    html += `<section class="lesson-section">`;
    html += createExplanationPanel(
        'Keyboard Timeline', 
        `<p><strong>หมวดหมู่:</strong> Keyboard</p>
         <p><strong>คืออะไร?</strong> ลำดับการเกิด Event เมื่อกดปุ่มบนคีย์บอร์ดคือ <code>keydown</code> &rarr; <code style="text-decoration: line-through;">keypress</code> (ล้าสมัยแล้ว) &rarr; <code>keyup</code></p>
         <p><strong>คำแนะนำ:</strong> ให้ใช้ <code>keydown</code> เสมอ ไม่ควรใช้ <code>keypress</code> เพราะ <code>keypress</code> ถูกประกาศว่าล้าสมัย (deprecated) และไม่ทำงานกับปุ่มบางประเภท เช่น Arrow keys, Alt, Ctrl</p>`
    );

    const code = `const area = document.getElementById('keyboard-area');

area.addEventListener('keydown', (e) => {
    console.log('keydown', e.key, e.code);
});

area.addEventListener('keypress', (e) => {
    // Deprecated!
    console.log('keypress', e.key, e.code);
});

area.addEventListener('keyup', (e) => {
    console.log('keyup', e.key, e.code);
});`;

    html += `<div class="lab-grid" style="margin-bottom: 40px;">`;
    html += `<div class="lab-column">`;
    html += createCodePanel(code, 'javascript');
    
    // Custom Key Inspector Panel
    html += `
        <div class="card event-inspector" style="margin-top: 20px;">
            <h3 class="card-title">ทดสอบปุ่มคีย์บอร์ด</h3>
            <div style="font-size: 1.5rem; text-align: center; padding: 20px 0;">
                <div style="margin-bottom: 10px;">event.key: <strong id="live-key" style="color: var(--accent-color);">-</strong></div>
                <div>event.code: <strong id="live-code" style="color: var(--success-color);">-</strong></div>
            </div>
            <p style="text-align: center; color: var(--text-muted); font-size: 0.9rem;">ลองกดปุ่มต่างๆ เช่น A, Shift+A, Enter, Space, Tab, Escape, Backspace, Delete, หรือปุ่มลูกศร</p>
        </div>
    `;
    
    html += `</div>`;
    
    html += `<div class="lab-column">`;
    html += createDemoContainer(`<div id="keyboard-area" tabindex="0" style="width: 100%; height: 150px; display: flex; align-items: center; justify-content: center; background-color: var(--bg-secondary); border: 2px solid var(--accent-color); border-radius: 8px; font-weight: bold; font-size: 1.2rem; cursor: text; outline: none; box-shadow: 0 0 0 3px rgba(51, 154, 240, 0.2);">ลองกดปุ่มคีย์บอร์ดในกรอบนี้</div>`);
    html += createEventConsole('keyboard-console');
    html += createEventInspector('keyboard-inspector');
    html += `</div>`;
    html += `</div></section>`;
    
    return html;
}

export function initKeyboardEvents() {
    const area = document.getElementById('keyboard-area');
    const liveKey = document.getElementById('live-key');
    const liveCode = document.getElementById('live-code');
    
    if (area) {
        area.focus(); // focus immediately
        
        area.addEventListener('keydown', (e) => {
            logEvent('keyboard-console', 'keydown');
            updateInspector('keyboard-inspector', e);
            liveKey.textContent = e.key === ' ' ? 'Space' : e.key;
            liveCode.textContent = e.code;
        });

        area.addEventListener('keypress', (e) => {
            logEvent('keyboard-console', 'keypress (ล้าสมัยแล้ว)');
            updateInspector('keyboard-inspector', e);
        });

        area.addEventListener('keyup', (e) => {
            logEvent('keyboard-console', 'keyup');
            updateInspector('keyboard-inspector', e);
        });
        
        // Prevent default scrolling for Space, Arrow keys, etc. when testing
        area.addEventListener('keydown', (e) => {
            if(['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
                e.preventDefault();
            }
        });
    }
}
