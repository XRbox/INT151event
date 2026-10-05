import { 
    createPageTitle, 
    createExplanationPanel, 
    createCodePanel,
    createDemoContainer,
    createEventConsole,
    logEvent
} from '../js/components/ui.js';

export function renderBasics(pageId) {
    let html = '';
    
    if (pageId === 'event') {
        html += createPageTitle('Event คืออะไร?', 'Event คือเหตุการณ์หรือการกระทำที่เกิดขึ้นในระบบ');
        html += `<section class="lesson-section">`;
        html += createExplanationPanel(
            'แนวคิดของ Event',
            `<p>Event คือสัญญาณที่บอกว่ามีบางอย่างเกิดขึ้น ใน Browser นั้น Event จะเกิดขึ้นภายในหน้าต่าง (Window) และมักจะผูกติดกับ Element ใด Element หนึ่ง</p>
             <ul style="margin-top: 10px; padding-left: 20px;">
                <li>ผู้ใช้คลิกเมาส์</li>
                <li>ผู้ใช้กดปุ่มบนคีย์บอร์ด</li>
                <li>หน้าเว็บโหลดเสร็จ</li>
                <li>ฟอร์มถูกส่ง (Submit)</li>
             </ul>`
        );
        html += `<div class="lab-grid">
            <div class="lab-column">
                ${createCodePanel(`// Event เป็นแค่สัญญาณ\n// เราต้องมีวิธี "ดักรอ" ฟังมัน\nbutton.addEventListener('click', () => {\n  console.log('เกิด Event ขึ้นแล้ว!');\n});`, 'javascript')}
            </div>
            <div class="lab-column">
                ${createDemoContainer(`<button id="basic-btn" class="btn" style="padding: 10px 20px; font-size: 1rem; cursor: pointer; border-radius: 4px; border: none; background-color: var(--accent-color); color: white;">คลิกสร้าง Event</button>`)}
                ${createEventConsole('basic-console')}
            </div>
        </div></section>`;
    } else if (pageId === 'event-handler') {
        html += createPageTitle('Event Handler (วิธีเก่า)', 'การผูก Event แบบเก่าโดยใช้ Property ของ DOM');
        html += `<section class="lesson-section">`;
        html += createExplanationPanel(
            'ข้อจำกัด: ผูกได้แค่ตัวเดียว',
            `<p>Event Handler คือการกำหนด Property ให้กับ DOM Element เช่น <code>onclick</code> หรือ <code>onmouseover</code> ข้อเสียหลักคือ <strong>คุณสามารถมี Handler ได้แค่ 1 ตัวต่อ 1 Event เท่านั้น</strong></p>
             <p>หากคุณกำหนดฟังก์ชันใหม่ให้กับ <code>onclick</code> มันจะไปเขียนทับ (Overwrite) ฟังก์ชันเก่าทันที!</p>`
        );
        html += `<div class="lab-grid">
            <div class="lab-column">
                ${createCodePanel(`const btn = document.getElementById('handler-btn');\n\n// 1. ผูก Handler ตัวแรก\nbtn.onclick = () => {\n  console.log('งาน A');\n};\n\n// 2. ผูก Handler ตัวที่สอง (มันจะเขียนทับงาน A!)\nbtn.onclick = () => {\n  console.log('งาน B');\n};`, 'javascript')}
            </div>
            <div class="lab-column">
                ${createDemoContainer(`<button id="handler-btn" class="btn" style="padding: 10px 20px; font-size: 1rem; cursor: pointer; border-radius: 4px; border: none; background-color: var(--danger-color); color: white;">ทดสอบ Handler</button>`)}
                ${createEventConsole('handler-console')}
            </div>
        </div></section>`;
    } else if (pageId === 'event-listener') {
        html += createPageTitle('Event Listener (วิธีมาตรฐาน)', 'วิธีสมัยใหม่ที่อนุญาตให้ผูก Event ได้หลายตัว');
        html += `<section class="lesson-section">`;
        html += createExplanationPanel(
            'addEventListener()',
            `<p><code>addEventListener</code> คือมาตรฐานในปัจจุบัน มันอนุญาตให้คุณผูก Listener <strong>หลายตัว</strong> เข้ากับ Event ประเภทเดียวกันได้ โดยไม่ไปเขียนทับกัน</p>`
        );
        html += `<div class="lab-grid">
            <div class="lab-column">
                ${createCodePanel(`const btn = document.getElementById('listener-btn');\n\n// 1. เพิ่ม Listener ตัวแรก\nbtn.addEventListener('click', () => {\n  console.log('งาน A ทำงาน!');\n});\n\n// 2. เพิ่ม Listener ตัวที่สอง (ทำงานร่วมกับงาน A ได้!)\nbtn.addEventListener('click', () => {\n  console.log('งาน B ทำงาน!');\n});`, 'javascript')}
            </div>
            <div class="lab-column">
                ${createDemoContainer(`<button id="listener-btn" class="btn" style="padding: 10px 20px; font-size: 1rem; cursor: pointer; border-radius: 4px; border: none; background-color: var(--success-color); color: white;">ทดสอบ Listener</button>`)}
                ${createEventConsole('listener-console')}
            </div>
        </div></section>`;
    }
    return html;
}

export function initBasics(pageId) {
    if (pageId === 'event') {
        const btn = document.getElementById('basic-btn');
        if (btn) btn.addEventListener('click', (e) => {
            logEvent('basic-console', `Fired: ${e.type}`);
        });
    } else if (pageId === 'event-handler') {
        const btn = document.getElementById('handler-btn');
        if (btn) {
            btn.onclick = () => logEvent('handler-console', 'Task A (This should get overwritten!)');
            btn.onclick = () => logEvent('handler-console', 'Task B Executed! (Task A was overwritten)');
        }
    } else if (pageId === 'event-listener') {
        const btn = document.getElementById('listener-btn');
        if (btn) {
            btn.addEventListener('click', () => logEvent('listener-console', 'Task A Executed!'));
            btn.addEventListener('click', () => logEvent('listener-console', 'Task B Executed!'));
        }
    }
}
