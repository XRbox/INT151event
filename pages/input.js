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

export function renderInputEvents() {
    let html = '';
    html += createPageTitle('Input Event', 'เรียนรู้วิธีตรวจจับการเปลี่ยนแปลงของข้อมูลในฟอร์มแบบเรียลไทม์');

    html += `<section class="lesson-section">`;
    html += createExplanationPanel(
        'input', 
        `<p><strong>หมวดหมู่:</strong> Form / Input</p>
         <p><strong>คืออะไร?</strong> เกิดขึ้นทันทีเมื่อค่าของ <code>&lt;input&gt;</code>, <code>&lt;select&gt;</code>, หรือ <code>&lt;textarea&gt;</code> เปลี่ยนแปลง (เช่น ตอนกำลังพิมพ์)</p>
         <p><strong>ลองทำ:</strong> พิมพ์ข้อความในช่องพิมพ์ด้านล่าง เพื่อดูพรีวิวแบบสดๆ และ Event ที่เกิดขึ้น</p>`
    );

    const code = `const inputField = document.getElementById('demo-input');
const preview = document.getElementById('demo-preview');

inputField.addEventListener('input', (event) => {
    // Update live preview
    preview.textContent = event.target.value;
    
    // Log event and update inspector
});`;

    html += `<div class="lab-grid" style="margin-bottom: 40px;">`;
    html += `<div class="lab-column">`;
    html += createCodePanel(code, 'javascript');
    
    html += `
        <div class="card event-inspector" style="margin-top: 20px;">
            <h3 class="card-title">พรีวิวข้อความ</h3>
            <div style="font-size: 1.5rem; padding: 20px 0; min-height: 80px; word-break: break-all;" id="demo-preview">
                <!-- Preview updates here -->
            </div>
            <div style="font-size: 0.9rem; color: var(--text-muted);">event.target.value</div>
        </div>
    `;
    html += `</div>`;
    
    html += `<div class="lab-column">`;
    html += createDemoContainer(`
        <div style="width: 100%; max-width: 300px;">
            <label style="display: block; margin-bottom: 8px; font-weight: bold;">Input:</label>
            <input type="text" id="demo-input" placeholder="พิมพ์อะไรบางอย่าง..." style="width: 100%; padding: 10px; font-size: 1rem; border: 1px solid var(--border-color); border-radius: 4px; background-color: var(--bg-primary); color: var(--text-primary);">
        </div>
    `);
    html += createEventConsole('input-console');
    html += createEventInspector('input-inspector');
    html += `</div>`;
    html += `</div></section>`;
    
    return html;
}

export function initInputEvents() {
    const inputField = document.getElementById('demo-input');
    const preview = document.getElementById('demo-preview');
    
    if (inputField && preview) {
        inputField.addEventListener('input', (e) => {
            preview.textContent = e.target.value || '\u00A0'; // Use non-breaking space if empty
            logEvent('input-console', 'input');
            updateInspector('input-inspector', e);
        });
    }
}
