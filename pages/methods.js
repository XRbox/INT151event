import { 
    createPageTitle, 
    createExplanationPanel, 
    createCodePanel,
    createDemoContainer,
    createEventConsole,
    logEvent
} from '../js/components/ui.js';

export function renderPreventDefault() {
    let html = '';
    html += createPageTitle('preventDefault()', 'หยุดพฤติกรรมเริ่มต้นของ Browser');

    // 1. Link Demo
    html += `<section class="lesson-section">`;
    html += createExplanationPanel(
        'พฤติกรรมเริ่มต้นของลิงก์ (Link)', 
        `<p><strong>คืออะไร?</strong> Browser มีพฤติกรรมเริ่มต้นบางอย่างเมื่อเกิด Event เช่น คลิกลิงก์แล้วเปลี่ยนหน้า</p>
         <p><strong>ลองทำ:</strong> ลองติ๊กเปิดใช้งานด้านล่างแล้วคลิกลิงก์ สังเกตว่าเมื่อเรียก <code>event.preventDefault()</code> การเปลี่ยนหน้าจะถูกยกเลิก แต่โค้ด JavaScript ของคุณ <strong>ยังคงทำงานต่อไป</strong></p>`
    );

    html += `<div class="lab-grid" style="margin-bottom: 40px;">`;
    html += `<div class="lab-column">`;
    const linkCode = `const link = document.getElementById('demo-link');
const toggle = document.getElementById('pd-toggle');

link.addEventListener('click', (event) => {
    if (toggle.checked) {
        event.preventDefault(); // Default action cancelled!
    }
    
    // JS execution always continues
    console.log('Handler executed \\u2713');
});`;
    html += createCodePanel(linkCode, 'javascript');
    html += `</div>`;
    
    html += `<div class="lab-column">`;
    html += createDemoContainer(`
        <div style="text-align: center; width: 100%;">
            <div style="margin-bottom: 20px;">
                <label style="cursor: pointer; font-weight: bold; padding: 10px; border-radius: 4px; background: var(--bg-primary); border: 1px solid var(--border-color);">
                    <input type="checkbox" id="pd-toggle" style="margin-right: 10px; transform: scale(1.2);"> Enable preventDefault()
                </label>
            </div>
            <a href="https://example.com" target="_blank" id="demo-link" style="display: inline-block; padding: 15px 30px; font-size: 1.2rem; cursor: pointer; border-radius: 4px; border: 3px solid var(--accent-color); background-color: rgba(51, 154, 240, 0.1); color: var(--accent-color); font-weight: bold; text-decoration: none;">
                ไปยังหน้าตัวอย่าง
            </a>
            <div id="link-handler-msg" style="margin-top: 15px; min-height: 24px; font-weight: bold; color: var(--success-color);"></div>
        </div>
    `);
    html += createEventConsole('pd-console');
    html += `</div>`;
    html += `</div></section>`;

    // 2. Form Demo
    html += `<section class="lesson-section">`;
    html += createExplanationPanel(
        'พฤติกรรมเริ่มต้นของ Form', 
        `<p>อีกตัวอย่างที่พบบ่อยคือการส่ง Form (Submit) ซึ่งปกติแล้ว Browser จะรีเฟรชหน้าเว็บ</p>
         <p><strong>ลองทำ:</strong> ลองกดส่ง Form แบบปกติ (จะเปิดหน้าใหม่) จากนั้นติ๊กเปิด <code>preventDefault()</code> เพื่อหยุด Browser ไม่ให้ส่ง Form และให้ JavaScript จัดการข้อมูลแทน</p>`
    );

    html += `<div class="lab-grid" style="margin-bottom: 40px;">`;
    html += `<div class="lab-column">`;
    const formCode = `const form = document.getElementById('demo-form');
const pdFormToggle = document.getElementById('pd-form-toggle');

form.addEventListener('submit', (event) => {
    if (pdFormToggle.checked) {
        event.preventDefault();
        // Browser submission cancelled
        // JavaScript handles the data
    }
});`;
    html += createCodePanel(formCode, 'javascript');
    html += `</div>`;
    
    html += `<div class="lab-column">`;
    html += createDemoContainer(`
        <div style="text-align: center; width: 100%;">
            <div style="margin-bottom: 20px;">
                <label style="cursor: pointer; font-weight: bold; padding: 10px; border-radius: 4px; background: var(--bg-primary); border: 1px solid var(--border-color);">
                    <input type="checkbox" id="pd-form-toggle" style="margin-right: 10px; transform: scale(1.2);"> Enable preventDefault()
                </label>
            </div>
            <form id="demo-form" action="https://example.com" target="_blank" style="padding: 20px; border: 2px dashed var(--border-color); border-radius: 8px;">
                <input type="text" placeholder="Search..." required style="padding: 10px; font-size: 1rem; border-radius: 4px; border: 1px solid var(--border-color); background: var(--bg-primary); color: var(--text-primary);">
                <button type="submit" style="padding: 10px 20px; font-size: 1rem; cursor: pointer; border-radius: 4px; border: none; background-color: var(--accent-color); color: white; font-weight: bold;">Submit</button>
            </form>
            <div id="form-handler-msg" style="margin-top: 15px; min-height: 24px; font-weight: bold; color: var(--success-color);"></div>
        </div>
    `);
    html += createEventConsole('form-console');
    html += `</div>`;
    html += `</div></section>`;

    return html;
}

export function renderStopPropagation() {
    let html = '';
    html += createPageTitle('stopPropagation()', 'หยุดการเดินทางของ Event ไม่ให้ส่งต่อใน DOM Tree');

    // 1. DIV > BUTTON Demo
    html += `<section class="lesson-section">`;
    html += createExplanationPanel(
        'หยุดการส่งต่อ Event', 
        `<p><strong>คืออะไร?</strong> ใช้หยุดการเดินทางของ Event ไปยัง Element อื่นใน Event Propagation</p>
         <p><strong>ลองทำ:</strong> คลิกปุ่มด้านในแล้วดูว่า Event ลอยไปหา DIV ด้านนอก (Bubbling) หรือไม่ จากนั้นลองเปิด <code>stopPropagation()</code> จะพบว่า Event ถูกหยุดไว้แค่นั้น</p>`
    );

    html += `<div class="lab-grid" style="margin-bottom: 40px;">`;
    html += `<div class="lab-column">`;
    const spCode = `const outerDiv = document.getElementById('sp-box');
const innerBtn = document.getElementById('sp-btn');
const toggle = document.getElementById('sp-toggle');

outerDiv.addEventListener('click', (event) => {
    console.log('คลิกโดน Box');
});

innerBtn.addEventListener('click', (event) => {
    console.log('คลิกโดน Button');
    if (toggle.checked) {
        event.stopPropagation();
        // Box does not receive the event
    }
});`;
    html += createCodePanel(spCode, 'javascript');
    html += `</div>`;
    
    html += `<div class="lab-column">`;
    html += createDemoContainer(`
        <div style="text-align: center; width: 100%;">
            <div style="margin-bottom: 20px;">
                <label style="cursor: pointer; font-weight: bold; padding: 10px; border-radius: 4px; background: var(--bg-primary); border: 1px solid var(--border-color);">
                    <input type="checkbox" id="sp-toggle" style="margin-right: 10px; transform: scale(1.2);"> Enable stopPropagation()
                </label>
            </div>
            
            <div id="sp-box" class="prop-box" data-name="DIV" style="padding: 40px; border: 2px solid var(--border-color); background-color: var(--bg-primary); border-radius: 8px; position: relative; transition: all 0.3s;">
                <span style="position: absolute; top: 10px; left: 10px; font-size: 0.75rem; font-family: monospace; font-weight: bold; color: var(--text-muted);">DIV</span>
                <div style="position: absolute; top: 10px; right: 10px; font-size: 0.8rem; font-weight: bold; color: var(--danger-color); display: none; padding: 4px 8px; background: rgba(250, 82, 82, 0.1); border: 1px solid var(--danger-color); border-radius: 4px;" id="sp-indicator">🛑 การส่งต่อ Event ถูกหยุด</div>
                <button id="sp-btn" class="prop-box" data-name="BUTTON" style="padding: 15px 40px; font-size: 1.2rem; cursor: pointer; border-radius: 4px; border: 3px solid var(--border-color); background-color: var(--text-secondary); color: white; font-weight: bold; transition: all 0.3s;">
                    OK
                </button>
            </div>
        </div>
    `);
    html += createEventConsole('sp-console');
    html += `</div>`;
    html += `</div></section>`;

    // 2. Comparison Card
    html += `<section class="lesson-section">`;
    html += `<div class="lab-grid" style="margin-bottom: 40px;">`;
    html += `<div class="lab-column">`;
    html += createExplanationPanel(
        'ข้อแตกต่างที่สำคัญ', 
        `<div style="font-size: 1.1rem; line-height: 1.8;">
            <p><strong>preventDefault()</strong><br>
            <span style="color: var(--accent-color); font-weight: bold;">= ยกเลิกพฤติกรรมเริ่มต้นของ Browser</span></p>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <p><strong>stopPropagation()</strong><br>
            <span style="color: var(--danger-color); font-weight: bold;">= หยุดการส่งต่อ Event ไปยัง Element อื่นๆ</span></p>
        </div>`
    );
    html += `
        <div class="card event-inspector">
            <h3 class="card-title" style="color: var(--danger-color);">อย่าจำสลับกันเด็ดขาด!</h3>
            <ul style="padding-left: 20px; color: var(--text-primary); line-height: 1.8;">
                <li style="margin-bottom: 10px;"><code>preventDefault</code> <strong>ไม่ได้</strong> สั่งหยุด Propagation</li>
                <li><code>stopPropagation</code> <strong>ไม่ได้</strong> ยกเลิกพฤติกรรมเริ่มต้นของ Browser</li>
            </ul>
        </div>
    `;
    html += `</div>`;
    
    // ทดลองเปรียบเทียบ Demo
    html += `<div class="lab-column">`;
    html += createExplanationPanel(
        'Interactive Comparison',
        `<p>ลองเปิด-ปิด ตัวเลือกทั้งสองแยกกัน แล้วคลิกที่ Checkbox ด้านล่าง สังเกตว่าพฤติกรรมการติ๊กถูก (Default Action) และการกระจายไปยัง DIV (Bubbling) นั้นแยกขาดจากกัน</p>`
    );
    html += createDemoContainer(`
        <div style="text-align: center; width: 100%;">
            <div id="comp-box" style="padding: 30px; border: 2px dashed var(--border-color); border-radius: 8px; background-color: var(--bg-tertiary); position: relative; transition: all 0.3s;">
                <span style="position: absolute; top: 10px; left: 10px; font-size: 0.75rem; font-family: monospace; font-weight: bold; color: var(--text-muted);">DIV</span>
                
                <div style="margin-bottom: 15px; display: flex; gap: 15px; justify-content: center;">
                    <label style="cursor: pointer; background: var(--bg-primary); padding: 5px 10px; border-radius: 4px; font-family: monospace; font-size: 0.9rem; border: 1px solid var(--border-color);">
                        <input type="checkbox" id="opt-pd"> preventDefault
                    </label>
                    <label style="cursor: pointer; background: var(--bg-primary); padding: 5px 10px; border-radius: 4px; font-family: monospace; font-size: 0.9rem; border: 1px solid var(--border-color);">
                        <input type="checkbox" id="opt-sp"> stopPropagation
                    </label>
                </div>
                
                <label style="display: block; cursor: pointer; font-weight: bold; font-size: 1.2rem; background: var(--bg-primary); padding: 20px; border-radius: 8px; border: 2px solid var(--border-color);">
                    <input type="checkbox" id="comp-check" style="transform: scale(1.5); margin-right: 15px;"> CLICK ME
                </label>
            </div>
        </div>
    `);
    html += createEventConsole('comp-console');
    html += `</div>`;
    
    html += `</div></section>`;

    return html;
}

export function initPreventDefault() {
    const link = document.getElementById('demo-link');
    const pdToggle = document.getElementById('pd-toggle');
    const linkMsg = document.getElementById('link-handler-msg');
    
    if (link) {
        link.addEventListener('click', (e) => {
            logEvent('pd-console', 'click event เริ่มทำงาน');
            
            if (pdToggle.checked) {
                e.preventDefault();
                logEvent('pd-console', 'เรียก event.preventDefault()');
                logEvent('pd-console', 'พฤติกรรมเริ่มต้นถูกยกเลิก');
                linkMsg.textContent = 'Handler executed \\u2713 (Navigation Blocked)';
            } else {
                logEvent('pd-console', 'Browser ทำพฤติกรรมเริ่มต้น');
                linkMsg.textContent = 'Handler executed \\u2713 (Opening Tab...)';
            }
            
            setTimeout(() => { linkMsg.textContent = ''; }, 2500);
        });
    }

    const form = document.getElementById('demo-form');
    const pdFormToggle = document.getElementById('pd-form-toggle');
    const formMsg = document.getElementById('form-handler-msg');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            logEvent('form-console', 'submit event เริ่มทำงาน');
            
            if (pdFormToggle.checked) {
                e.preventDefault();
                logEvent('form-console', 'event.preventDefault() executed');
                logEvent('form-console', 'การส่ง Form ของ Browser ถูกยกเลิก');
                logEvent('form-console', 'JavaScript เป็นคนจัดการข้อมูลแทน');
                formMsg.textContent = 'JavaScript handles the data \\u2713';
            } else {
                logEvent('form-console', 'Browser ทำพฤติกรรมเริ่มต้นส่ง Form');
                formMsg.textContent = 'ส่ง Form สำเร็จ! (กำลังเปิดหน้าใหม่)';
            }
            
            setTimeout(() => { formMsg.textContent = ''; }, 2500);
        });
    }
}

export function initStopPropagation() {
    // 1. SP DEMO
    const box = document.getElementById('sp-box');
    const btn = document.getElementById('sp-btn');
    const spToggle = document.getElementById('sp-toggle');
    const indicator = document.getElementById('sp-indicator');
    
    if (box && btn) {
        box.addEventListener('click', (e) => {
            logEvent('sp-console', 'Box clicked');
            box.style.borderColor = 'var(--success-color)';
            box.style.backgroundColor = 'rgba(64, 192, 87, 0.1)';
            setTimeout(() => {
                box.style.borderColor = 'var(--border-color)';
                box.style.backgroundColor = 'var(--bg-primary)';
            }, 500);
        });

        btn.addEventListener('click', (e) => {
            logEvent('sp-console', 'Button clicked');
            indicator.style.display = 'none';
            
            if (spToggle.checked) {
                e.stopPropagation();
                logEvent('sp-console', 'เรียก event.stopPropagation()');
                logEvent('sp-console', 'Box จะไม่ได้รับ Event นี้');
                indicator.style.display = 'block';
            }
        });
        
        spToggle.addEventListener('change', () => {
            if (!spToggle.checked) indicator.style.display = 'none';
        });
    }

    // 2. COMP DEMO
    const compBox = document.getElementById('comp-box');
    const compCheck = document.getElementById('comp-check');
    const optPd = document.getElementById('opt-pd');
    const optSp = document.getElementById('opt-sp');
    
    if (compBox && compCheck) {
        compBox.addEventListener('click', (e) => {
            // Ignore clicks directly on the option checkboxes
            if (e.target === optPd || e.target === optSp) return;
            
            logEvent('comp-console', 'DIV ได้รับ Event (จากการ Bubbling)');
            compBox.style.borderColor = 'var(--success-color)';
            setTimeout(() => { compBox.style.borderColor = 'var(--border-color)'; }, 500);
        });

        compCheck.addEventListener('click', (e) => {
            logEvent('comp-console', 'คลิกที่ Checkbox');
            
            if (optPd.checked) {
                e.preventDefault();
                logEvent('comp-console', 'preventDefault: ช่อง Checkbox ไม่ถูกสลับค่า');
            } else {
                logEvent('comp-console', 'Default action: ช่อง Checkbox ถูกสลับค่า');
            }
            
            if (optSp.checked) {
                e.stopPropagation();
                logEvent('comp-console', 'stopPropagation: การ Bubbling ถูกหยุด');
            }
        });
    }
}
