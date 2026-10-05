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

export function renderEventObject() {
    let html = '';
    html += createPageTitle('Event Object', 'เจาะลึกข้อมูลต่างๆ ที่ถูกส่งมาพร้อมกับ Event');

    // 1. Target vs CurrentTarget
    html += `<section class="lesson-section" id="section-target">`;
    html += createExplanationPanel(
        'target vs currentTarget', 
        `<p><strong>คืออะไร?</strong> Property สองตัวที่บอกว่า Event เกิดขึ้นที่ไหน เทียบกับ Event ถูกจัดการที่ไหน</p>
         <ul style="margin-top: 10px; margin-bottom: 10px; padding-left: 20px;">
            <li style="margin-bottom: 8px;"><strong>target:</strong> Element ต้นเหตุที่สร้าง Event ขึ้นมาจริงๆ</li>
            <li><strong>currentTarget:</strong> Element ที่ Event Listener กำลังถูกเรียกใช้งานอยู่ (ผูก Listener ไว้ที่ไหน)</li>
         </ul>
         <p><strong>ลองทำ:</strong> คลิกปุ่ม "OK" ที่อยู่ข้างในกล่อง DIV สังเกตว่าเราผูก Listener ไว้ที่ DIV ข้างนอก แต่ Event มีจุดกำเนิดจาก BUTTON ข้างใน</p>`
    );

    const targetCode = `const outerDiv = document.getElementById('box');
const innerButton = document.getElementById('ok');

outerDiv.addEventListener('click', (event) => {
    console.log(event.target);        // Element ที่ถูกคลิก (ปุ่มข้างใน)
    console.log(event.currentTarget); // Element ที่ผูก Listener ไว้ (กล่องข้างนอก)
});`;

    html += `<div class="lab-grid" style="margin-bottom: 40px;">`;
    html += `<div class="lab-column">`;
    html += createCodePanel(targetCode, 'javascript');
    
    html += createExplanationPanel(
        'สถานะของ Event',
        `<p>ข้อมูลอื่นๆ ใน Event Object ที่น่าสนใจ:</p>
         <ul style="margin-top: 10px; padding-left: 20px;">
            <li style="margin-bottom: 8px;"><strong>eventPhase:</strong> บอกว่า Event อยู่ในขั้นตอนไหน (1 Capturing, 2 Target, 3 Bubbling)</li>
            <li style="margin-bottom: 8px;"><strong>bubbles:</strong> Event นี้สามารถลอยขึ้นไปหา Element แม่ (Bubbling) ได้หรือไม่</li>
            <li style="margin-bottom: 8px;"><strong>cancelable:</strong> Event นี้สามารถถูกยกเลิกด้วย <code>preventDefault()</code> ได้หรือไม่</li>
            <li><strong>defaultPrevented:</strong> Event นี้ถูกเรียก <code>preventDefault()</code> ไปแล้วหรือยัง</li>
         </ul>`
    );
    html += `</div>`;
    
    html += `<div class="lab-column">`;
    html += createDemoContainer(`
        <div id="box" style="width: 100%; padding: 40px 20px; border: 4px solid var(--border-color); border-radius: 8px; background-color: var(--bg-secondary); text-align: center; position: relative; cursor: pointer; transition: all 0.3s;">
            <div style="position: absolute; top: 10px; left: 10px; font-family: monospace; font-weight: bold; color: var(--text-muted);">DIV#box</div>
            <button id="ok" style="padding: 15px 40px; font-size: 1.2rem; cursor: pointer; border-radius: 4px; border: 4px solid var(--border-color); background-color: var(--bg-tertiary); color: var(--text-primary); transition: all 0.3s; font-weight: bold;">BUTTON#ok</button>
        </div>
    `);
    
    html += createEventInspector('eo-inspector');
    html += createEventConsole('eo-console');
    html += `</div>`;
    html += `</div></section>`;
    
    return html;
}

export function initEventObject() {
    const box = document.getElementById('box');
    const okBtn = document.getElementById('ok');
    
    if (box && okBtn) {
        box.addEventListener('click', (e) => {
            logEvent('eo-console', 'click');
            updateInspector('eo-inspector', e);
            
            // Visual Highlighting Logic
            box.style.borderColor = 'var(--border-color)';
            box.style.backgroundColor = 'var(--bg-secondary)';
            okBtn.style.borderColor = 'var(--border-color)';
            okBtn.style.backgroundColor = 'var(--bg-tertiary)';
            
            // Highlight currentTarget (the outer DIV running the listener)
            box.style.borderColor = 'var(--accent-color)';
            box.style.backgroundColor = 'rgba(51, 154, 240, 0.1)';
            
            // Highlight target (the element that was clicked)
            if (e.target === okBtn) {
                okBtn.style.borderColor = 'var(--success-color)';
                okBtn.style.backgroundColor = 'rgba(64, 192, 87, 0.1)';
            } else if (e.target === box) {
                // If they clicked directly on the div, the div is both target & currentTarget
                box.style.borderColor = 'var(--success-color)';
                box.style.backgroundColor = 'rgba(64, 192, 87, 0.2)';
            }
            
            // Fade out the highlight after a delay
            setTimeout(() => {
                box.style.borderColor = 'var(--border-color)';
                box.style.backgroundColor = 'var(--bg-secondary)';
                okBtn.style.borderColor = 'var(--border-color)';
                okBtn.style.backgroundColor = 'var(--bg-tertiary)';
            }, 1200);
        });
    }
}
