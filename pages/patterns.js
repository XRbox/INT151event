import { 
    createPageTitle, 
    createExplanationPanel, 
    createCodePanel,
    createDemoContainer,
    createEventConsole,
    logEvent
} from '../js/components/ui.js';

export function renderPatterns() {
    let html = '';
    html += createPageTitle('Real-world Event Patterns', 'ประยุกต์ใช้ความรู้เรื่อง Event เพื่อแก้ปัญหาจริงที่พบบ่อยในการทำ UI');

    // 1. Dropdown Menu Demo
    html += `<section class="lesson-section">`;
    html += createExplanationPanel(
        'ปัญหาของ Dropdown Menu', 
        `<p><strong>โจทย์:</strong> คุณต้องการให้เมนู Dropdown เปิดเมื่อคลิกปุ่ม และปิดเมื่อคลิกที่อื่นๆ บนหน้าจอ</p>
         <p><strong>ลองทำ:</strong> ลองเปิดเมนูด้านล่าง สังเกตว่าในเวอร์ชั่นที่มีบั๊ก เมนูจะปิดทันทีที่เปิด เพราะ Event ลอยขึ้นไปถึง Document! ลองติ๊กเปิดใช้งาน <code>stopPropagation()</code> เพื่อแก้ปัญหานี้</p>`
    );

    html += `<div class="lab-grid" style="margin-bottom: 40px;">`;
    html += `<div class="lab-column">`;
    const dropdownCode = `const menuBtn = document.getElementById('menu-btn');
const dropdown = document.getElementById('dropdown');

// 1. Open/Close when button is clicked
menuBtn.addEventListener('click', (event) => {
    dropdown.classList.toggle('open');
    
    if (useFix) {
        event.stopPropagation(); // FIXED!
    }
});

// 2. Close when clicking anywhere else
document.addEventListener('click', () => {
    dropdown.classList.remove('open');
});`;
    html += createCodePanel(dropdownCode, 'javascript');
    html += `</div>`;
    
    html += `<div class="lab-column">`;
    html += createDemoContainer(`
        <div id="dropdown-sandbox" style="min-height: 250px; padding: 20px; border: 2px dashed var(--border-color); border-radius: 8px; background-color: var(--bg-tertiary); position: relative;">
            <div style="margin-bottom: 20px; display: flex; justify-content: center;">
                <label style="cursor: pointer; background: var(--bg-primary); padding: 10px; border-radius: 4px; font-weight: bold; border: 1px solid var(--border-color);">
                    <input type="checkbox" id="dropdown-fix-toggle"> Use stopPropagation()
                </label>
            </div>
            
            <div style="position: relative; display: inline-block;">
                <button id="dd-btn" style="padding: 10px 20px; font-size: 1.1rem; cursor: pointer; border-radius: 4px; border: none; background-color: var(--accent-color); color: white; font-weight: bold;">
                    Menu ▾
                </button>
                <div id="dd-menu" style="display: none; position: absolute; top: 100%; left: 0; background: var(--bg-primary); border: 1px solid var(--border-color); border-radius: 4px; width: 150px; margin-top: 5px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); z-index: 10;">
                    <div style="padding: 10px; border-bottom: 1px solid var(--border-color); cursor: pointer;">โปรไฟล์</div>
                    <div style="padding: 10px; cursor: pointer;">ตั้งค่า</div>
                </div>
            </div>
        </div>
    `);
    html += createEventConsole('dd-console');
    html += `</div>`;
    html += `</div></section>`;

    // 2. Modal Dialog Demo
    html += `<section class="lesson-section">`;
    html += createExplanationPanel(
        'ป๊อปอัป (Modal Dialog)', 
        `<p><strong>โจทย์:</strong> ป๊อปอัปควรจะปิดตัวลงเมื่อคลิกที่พื้นหลังสีดำ แต่มันต้อง <strong>ไม่ปิด</strong> เมื่อคลิกภายในกรอบเนื้อหาสีขาว</p>
         <p><strong>วิธีแก้:</strong> ใช้ <code>stopPropagation()</code> ที่เนื้อหาของ Modal (กล่องสีขาว) เพื่อกันไม่ให้คลิกทะลุไปถึงพื้นหลัง</p>`
    );
    html += `<div class="lab-grid" style="margin-bottom: 40px;">`;
    html += `<div class="lab-column">`;
    html += createDemoContainer(`
        <div style="text-align: center; width: 100%;">
            <button id="open-modal-btn" style="padding: 10px 20px; background: var(--accent-color); color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">เปิด Modal</button>
            
            <div id="modal-overlay" style="display: none; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); justify-content: center; align-items: center; z-index: 100;">
                <div id="modal-content" style="background: var(--bg-primary); padding: 30px; border-radius: 8px; width: 80%; text-align: center; box-shadow: 0 10px 25px rgba(0,0,0,0.5);">
                    <h3 style="margin-bottom: 15px;">เนื้อหา Modal</h3>
                    <p style="margin-bottom: 10px;">คลิกตรงนี้จะไม่มีอะไรเกิดขึ้น</p>
                    <p style="margin-bottom: 20px; font-weight: bold; color: var(--accent-color);">คลิกที่พื้นหลังสีดำเพื่อปิด Modal</p>
                    <button id="close-modal-btn" style="padding: 5px 15px; background: var(--bg-tertiary); border: 1px solid var(--border-color); border-radius: 4px; cursor: pointer;">ปิด</button>
                </div>
            </div>
        </div>
    `);
    html += `</div>`;
    html += `<div class="lab-column">`;
    html += createEventConsole('modal-console');
    html += `</div>`;
    html += `</div></section>`;

    // 3. Button inside clickable card
    html += `<section class="lesson-section">`;
    html += createExplanationPanel(
        'ปุ่มกดซ้อนในการ์ดที่คลิกได้', 
        `<p><strong>โจทย์:</strong> คุณมีการ์ดบทความที่สามารถคลิกเพื่อไปยังหน้าบทความนั้นได้ แต่ภายในการ์ดก็มีปุ่ม "Like" ด้วย ซึ่งเวลากด Like ควรจะแค่กดถูกใจ ไม่ควรพาผู้ใช้เปลี่ยนหน้า</p>
         <p><strong>วิธีแก้:</strong> ผสมกันทั้ง <code>stopPropagation()</code> (ไม่ให้ส่ง Event ให้การ์ด) และ <code>preventDefault()</code> (หยุดการกระทำของปุ่มหรือลิงก์)</p>`
    );
    html += `<div class="lab-grid" style="margin-bottom: 40px;">`;
    html += `<div class="lab-column">`;
    html += createDemoContainer(`
        <a href="#article" id="card-link" style="display: block; text-decoration: none; color: inherit; padding: 20px; border: 2px solid var(--border-color); border-radius: 8px; background: var(--bg-secondary); cursor: pointer; transition: transform 0.2s;">
            <h3 style="margin-bottom: 10px; color: var(--accent-color);">บทความสุดเจ๋ง</h3>
            <p style="margin-bottom: 15px;">การคลิกที่ใดๆ บนการ์ดนี้ จะพาคุณไปยังหน้าบทความ</p>
            <div style="display: flex; justify-content: flex-end;">
                <button id="like-btn" style="padding: 8px 15px; background: transparent; border: 2px solid var(--danger-color); color: var(--danger-color); border-radius: 20px; cursor: pointer; font-weight: bold; transition: all 0.2s;">
                    ♥ Like
                </button>
            </div>
        </a>
    `);
    html += `</div>`;
    html += `<div class="lab-column">`;
    html += createEventConsole('card-console');
    html += `</div>`;
    html += `</div></section>`;

    // 4. Form validation
    html += `<section class="lesson-section">`;
    html += createExplanationPanel(
        'การตรวจสอบข้อมูลฟอร์ม (Validation)', 
        `<p><strong>โจทย์:</strong> คุณต้องการตรวจสอบก่อนว่าชื่อผู้ใช้นี้ซ้ำหรือไม่ ก่อนที่จะยอมให้ Form ถูกส่งออกไป</p>
         <p><strong>วิธีแก้:</strong> ตรวจสอบข้อมูลก่อน ถ้าไม่ผ่านให้เรียก <code>preventDefault()</code> เพื่อหยุดไม่ให้ Browser ส่ง Form</p>`
    );
    html += `<div class="lab-grid" style="margin-bottom: 40px;">`;
    html += `<div class="lab-column">`;
    html += createDemoContainer(`
        <form id="val-form" style="width: 100%; padding: 20px; border: 2px solid var(--border-color); border-radius: 8px; background: var(--bg-secondary);">
            <div style="margin-bottom: 15px;">
                <label style="display: block; margin-bottom: 5px; font-weight: bold;">ชื่อผู้ใช้</label>
                <input type="text" id="val-input" placeholder="ลองพิมพ์ 'admin' เพื่อดูผลลัพธ์การตรวจสอบ" style="width: 100%; padding: 10px; border-radius: 4px; border: 1px solid var(--border-color); background: var(--bg-primary); color: var(--text-primary);">
                <div id="val-error" style="color: var(--danger-color); font-size: 0.85rem; margin-top: 5px; display: none;">ข้อผิดพลาด: ชื่อ 'admin' ถูกใช้งานไปแล้ว!</div>
            </div>
            <button type="submit" style="padding: 10px 20px; background: var(--accent-color); color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">สร้างบัญชี</button>
        </form>
    `);
    html += `</div>`;
    html += `<div class="lab-column">`;
    html += createEventConsole('val-console');
    html += `</div>`;
    html += `</div></section>`;


    return html;
}

export function initPatterns() {
    // 1. Dropdown
    const sandbox = document.getElementById('dropdown-sandbox');
    const ddBtn = document.getElementById('dd-btn');
    const ddMenu = document.getElementById('dd-menu');
    const fixToggle = document.getElementById('dropdown-fix-toggle');
    
    if (sandbox) {
        ddBtn.addEventListener('click', (e) => {
            logEvent('dd-console', '1. คลิกที่ปุ่ม Menu');
            logEvent('dd-console', '2. โค้ดของ Menu เริ่มทำงาน');
            
            const isClosing = ddMenu.style.display === 'block';
            ddMenu.style.display = isClosing ? 'none' : 'block';
            
            if (!isClosing) {
                logEvent('dd-console', '3. เมนูถูกเปิด');
            }
            
            if (fixToggle.checked) {
                e.stopPropagation();
                logEvent('dd-console', '4. มีการเรียก stopPropagation()');
                logEvent('dd-console', '5. Event ลอยไปไม่ถึง Document');
            } else {
                logEvent('dd-console', '4. Event ลอยขึ้นไป (Bubbling)...');
            }
        });
        
        // Document listener (bound to the sandbox specifically so it doesn't break outside)
        sandbox.addEventListener('click', (e) => {
            // ignore clicks on the toggle so they don't get logged confusingly
            if (e.target === fixToggle || fixToggle.contains(e.target)) return;
            
            if (e.target === ddBtn && !fixToggle.checked) {
                logEvent('dd-console', '5. โค้ดของ Document ทำงาน');
                ddMenu.style.display = 'none';
                logEvent('dd-console', '6. เมนูปิดลง');
            } else if (e.target !== ddBtn) {
                // Clicked elsewhere in the sandbox
                if (ddMenu.style.display === 'block') {
                    logEvent('dd-console', 'คลิกบริเวณอื่นนอกจากเมนู');
                    logEvent('dd-console', 'โค้ดของ Document ทำงาน');
                    ddMenu.style.display = 'none';
                    logEvent('dd-console', 'เมนูปิดลง');
                }
            }
        });
    }

    // 2. Modal
    const modalBtn = document.getElementById('open-modal-btn');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContent = document.getElementById('modal-content');
    const closeBtn = document.getElementById('close-modal-btn');
    
    if (modalBtn) {
        modalBtn.addEventListener('click', () => {
            modalOverlay.style.display = 'flex';
            logEvent('modal-console', 'Modal ถูกเปิด');
        });
        
        closeBtn.addEventListener('click', () => {
            modalOverlay.style.display = 'none';
            logEvent('modal-console', 'คลิกที่ปุ่มปิด -> Modal ปิดลง');
        });
        
        modalContent.addEventListener('click', (e) => {
            e.stopPropagation();
            logEvent('modal-console', 'คลิกที่เนื้อหา -> มีการเรียก stopPropagation()');
            logEvent('modal-console', 'กรอบพื้นหลังสีดำจะไม่ถูกปิด');
        });
        
        modalOverlay.addEventListener('click', () => {
            modalOverlay.style.display = 'none';
            logEvent('modal-console', 'คลิกที่กรอบพื้นหลังสีดำ -> Modal ปิดลง');
        });
    }

    // 3. Card
    const cardLink = document.getElementById('card-link');
    const likeBtn = document.getElementById('like-btn');
    
    if (cardLink) {
        cardLink.addEventListener('click', (e) => {
            e.preventDefault(); // Stop actually navigating for the demo
            logEvent('card-console', 'คลิกที่การ์ด -> กำลังนำทางไปหน้าบทความ!');
        });
        
        likeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const isLiked = likeBtn.style.backgroundColor === 'var(--danger-color)';
            if (isLiked) {
                likeBtn.style.backgroundColor = 'transparent';
                likeBtn.style.color = 'var(--danger-color)';
            } else {
                likeBtn.style.backgroundColor = 'var(--danger-color)';
                likeBtn.style.color = 'white';
            }
            
            logEvent('card-console', 'คลิกปุ่ม Like -> มีการเรียก stopPropagation()');
            logEvent('card-console', 'การคลิกนี้จะไม่ถูกส่งไปยังตัวการ์ด');
        });
    }

    // 4. Form
    const valForm = document.getElementById('val-form');
    const valInput = document.getElementById('val-input');
    const valError = document.getElementById('val-error');
    
    if (valForm) {
        valForm.addEventListener('submit', (e) => {
            if (valInput.value.toLowerCase() === 'admin') {
                e.preventDefault();
                valError.style.display = 'block';
                logEvent('val-console', 'การตรวจสอบล้มเหลว: admin ถูกใช้งานไปแล้ว');
                logEvent('val-console', 'เรียก preventDefault() -> การส่ง Form ถูกหยุด');
            } else {
                e.preventDefault(); // Just for demo so it doesn't reload page
                valError.style.display = 'none';
                logEvent('val-console', 'การตรวจสอบผ่าน!');
                logEvent('val-console', 'ปกติแล้ว Form จะถูกส่งตรงนี้');
            }
        });
        
        valInput.addEventListener('input', () => {
            valError.style.display = 'none';
        });
    }
}
