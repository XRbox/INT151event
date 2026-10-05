import { 
    createPageTitle, 
    createExplanationPanel, 
    createCodePanel,
    createDemoContainer,
    createEventConsole,
    logEvent
} from '../js/components/ui.js';

export function renderDelegation() {
    let html = '';
    html += createPageTitle('Event Delegation', 'เทคนิคทรงพลังในการจัดการ Event อย่างมีประสิทธิภาพโดยใช้ Bubbling');

    html += `<section class="lesson-section">`;
    html += createExplanationPanel(
        'แนวคิดหลัก (Core Concept)', 
        `<p>แทนที่จะเขียนผูก Event Listener ให้กับ Element ลูกทีละตัว เราจะผูก Listener แค่ <strong>ตัวเดียว</strong> ไว้ที่ Element แม่ของพวกมันแทน! เนื่องจากเวลาเกิด Event มันจะลอยขึ้นมาหาแม่ (Bubbling) แม่จึงสามารถดักฟังและใช้ <code>event.target</code> ตรวจสอบได้ว่าลูกตัวไหนกันแน่ที่ถูกคลิก</p>
         <ul style="margin-top: 10px; margin-bottom: 10px; padding-left: 20px;">
            <li style="margin-bottom: 5px;"><strong>ประหยัดหน่วยความจำ:</strong> ใช้ Listener แค่ 1 ตัว แทนที่จะเป็น 100 ตัว</li>
            <li><strong>รองรับ Element ใหม่:</strong> ถ้ามี Element ลูกถูกสร้างเพิ่มเข้ามาใหม่ มันจะใช้งานได้ทันทีโดยไม่ต้องไปเขียนผูก Event เพิ่ม!</li>
         </ul>`
    );

    html += `<div class="lab-grid" style="margin-bottom: 40px;">`;
    
    // Left Column: Code and Visualizer
    html += `<div class="lab-column">`;
    
    html += `<div class="card event-inspector" style="margin-bottom: 20px; font-family: monospace; font-size: 0.95rem;">
        <h3 class="card-title">โครงสร้าง LISTENER</h3>
        <div id="arch-individual" style="text-align: center; display: none;">
            <p style="color: var(--danger-color); font-weight: bold; margin-bottom: 15px;">ไม่ดี: ผูก Listener แบบรายตัว</p>
            <div style="background: var(--bg-tertiary); padding: 15px; border-radius: 4px; display: inline-block; text-align: left;">
                <div>button <span style="color: var(--accent-color);">→ listener (memory)</span></div>
                <div>button <span style="color: var(--accent-color);">→ listener (memory)</span></div>
                <div>button <span style="color: var(--accent-color);">→ listener (memory)</span></div>
                <div>button <span style="color: var(--accent-color);">→ listener (memory)</span></div>
                <div style="color: var(--text-muted); margin-top: 15px; text-align: center;">* ปุ่มใหม่ที่เพิ่มเข้ามาจะไม่ทำงาน *</div>
            </div>
        </div>
        <div id="arch-delegation" style="text-align: center; display: block;">
            <p style="color: var(--success-color); font-weight: bold; margin-bottom: 15px;">ดีมาก: Event Delegation</p>
            <div style="background: var(--bg-tertiary); padding: 15px; border-radius: 4px; display: inline-block; text-align: center;">
                <div style="font-weight: bold; color: var(--accent-color);">productList → 1 listener</div>
                <div style="margin: 5px 0; color: var(--text-muted);">│</div>
                <div style="color: var(--text-muted);">┌───┼────┬────┐</div>
                <div style="color: var(--text-muted);">↓   ↓    ↓    ↓</div>
                <div>btn btn  btn  btn</div>
                <div style="color: var(--text-muted); margin-top: 15px;">* ดักจับปุ่มที่เพิ่งเพิ่มเข้ามาใหม่ได้อัตโนมัติ *</div>
            </div>
        </div>
    </div>`;

    html += createCodePanel(`// ผูก Listener ทีละตัว (ไม่ดี)
const buttons = document.querySelectorAll('.delete-btn');
buttons.forEach(btn => {
    btn.addEventListener('click', () => btn.closest('li').remove());
});
// ❌ พังทันทีถ้ามีการเพิ่มปุ่มใหม่เข้ามาทีหลัง

// ใช้ Event Delegation (ดี)
const list = document.getElementById('product-list');
list.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        event.target.closest('li').remove();
    }
});
// ✅ ปุ่มใหม่ทำงานได้อัตโนมัติ!`, 'javascript');

    html += `</div>`;
    
    // Right Column: Demo
    html += `<div class="lab-column">`;
    html += createDemoContainer(`
        <div style="width: 100%; margin-bottom: 15px; display: flex; justify-content: center; gap: 10px;">
            <label style="cursor: pointer; background: var(--bg-primary); padding: 10px; border-radius: 4px; font-weight: bold; border: 2px solid var(--border-color);">
                <input type="radio" name="mode" id="mode-ind" value="individual" style="margin-right: 5px;"> Individual Listeners
            </label>
            <label style="cursor: pointer; background: var(--bg-primary); padding: 10px; border-radius: 4px; font-weight: bold; border: 2px solid var(--accent-color); color: var(--accent-color);">
                <input type="radio" name="mode" id="mode-del" value="delegation" checked style="margin-right: 5px;"> Event Delegation
            </label>
        </div>

        <div style="padding: 20px; background: var(--bg-secondary); border: 2px solid var(--border-color); border-radius: 8px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <h3 style="margin: 0;">รายการสินค้า</h3>
                <button id="add-product-btn" style="padding: 8px 12px; background: var(--success-color); color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">+ เพิ่มสินค้า</button>
            </div>
            
            <ul id="product-list" style="list-style: none; padding: 0; margin: 0; border: 2px dashed var(--border-color); border-radius: 4px; min-height: 100px;">
                <!-- Populated via JS -->
            </ul>
        </div>
    `);
    
    html += createEventConsole('del-console');
    html += `</div>`;
    html += `</div></section>`;

    return html;
}

export function initDelegation() {
    const list = document.getElementById('product-list');
    const addBtn = document.getElementById('add-product-btn');
    const modeInd = document.getElementById('mode-ind');
    const modeDel = document.getElementById('mode-del');
    
    const archInd = document.getElementById('arch-individual');
    const archDel = document.getElementById('arch-delegation');
    
    // Manage listener state securely to swap between demos
    let individualListeners = []; 
    let delegationListener = null;

    const initialProducts = ['เสื้อยืด', 'หมวก', 'รองเท้า', 'กระเป๋า'];
    let productCount = 4;

    function renderList() {
        list.innerHTML = '';
        initialProducts.forEach(name => {
            const li = document.createElement('li');
            li.style.cssText = 'padding: 15px; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; background: var(--bg-primary);';
            li.innerHTML = `
                <span style="font-weight: bold;">${name}</span>
                <button class="delete-btn" style="padding: 5px 15px; background: var(--danger-color); color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">ลบ</button>
            `;
            list.appendChild(li);
        });
        
        // Ensure last item doesn't have border bottom
        if (list.lastChild) {
            list.lastChild.style.borderBottom = 'none';
        }
    }

    function removeIndividualListeners() {
        individualListeners.forEach(({ btn, fn }) => {
            btn.removeEventListener('click', fn);
        });
        individualListeners = [];
    }

    function removeDelegationListener() {
        if (delegationListener) {
            list.removeEventListener('click', delegationListener);
            delegationListener = null;
        }
    }

    function setupIndividualListeners() {
        removeDelegationListener();
        removeIndividualListeners();
        
        logEvent('del-console', 'โหมด: ผูก Listener 1 ตัว ต่อ 1 ปุ่มที่มีอยู่');
        
        const btns = list.querySelectorAll('.delete-btn');
        btns.forEach(btn => {
            const fn = (e) => {
                const name = e.target.closest('li').querySelector('span').textContent;
                e.target.closest('li').remove();
                logEvent('del-console', `ลบ ${name} (แบบรายตัว)`);
            };
            btn.addEventListener('click', fn);
            individualListeners.push({ btn, fn });
        });
        
        // Update styling
        modeInd.parentElement.style.borderColor = 'var(--accent-color)';
        modeInd.parentElement.style.color = 'var(--accent-color)';
        modeDel.parentElement.style.borderColor = 'var(--border-color)';
        modeDel.parentElement.style.color = 'inherit';
        archInd.style.display = 'block';
        archDel.style.display = 'none';
    }

    function setupDelegationListener() {
        removeIndividualListeners();
        removeDelegationListener();
        
        logEvent('del-console', 'โหมด: ผูก Listener แค่ 1 ตัวไว้ที่ UL');
        
        delegationListener = (e) => {
            if (e.target.classList.contains('delete-btn')) {
                const name = e.target.closest('li').querySelector('span').textContent;
                e.target.closest('li').remove();
                logEvent('del-console', `ลบ ${name.replace(' (ใหม่)', '')} โดยใช้ event.target`);
            }
        };
        
        list.addEventListener('click', delegationListener);
        
        // Update styling
        modeDel.parentElement.style.borderColor = 'var(--accent-color)';
        modeDel.parentElement.style.color = 'var(--accent-color)';
        modeInd.parentElement.style.borderColor = 'var(--border-color)';
        modeInd.parentElement.style.color = 'inherit';
        archDel.style.display = 'block';
        archInd.style.display = 'none';
    }

    // Add Product
    addBtn.addEventListener('click', () => {
        productCount++;
        const name = `สินค้า #${productCount}`;
        const li = document.createElement('li');
        li.style.cssText = 'padding: 15px; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; background: rgba(64, 192, 87, 0.1);';
        li.innerHTML = `
            <span style="font-weight: bold; color: var(--success-color);">${name} <small>(New)</small></span>
            <button class="delete-btn" style="padding: 5px 15px; background: var(--danger-color); color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">Delete</button>
        `;
        list.appendChild(li);
        
        logEvent('del-console', `เพิ่ม ${name}`);
        
        if (modeInd.checked) {
            logEvent('del-console', `คำเตือน: ปุ่มใหม่ไม่มี Listener ผูกอยู่!`);
        } else {
            logEvent('del-console', `พร้อมทำงาน: การ Bubbling จะช่วยดักจับให้`);
        }
    });

    // Handle Radio Changes
    modeInd.addEventListener('change', () => {
        if (modeInd.checked) {
            renderList(); // Reset list so we can bind to fresh initial elements cleanly
            setupIndividualListeners();
        }
    });
    
    modeDel.addEventListener('change', () => {
        if (modeDel.checked) {
            renderList();
            setupDelegationListener();
        }
    });

    // Initialize
    renderList();
    setupDelegationListener(); // Default mode
}
