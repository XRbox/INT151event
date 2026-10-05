import { createPageTitle } from '../js/components/ui.js';
import { getProgressStats, saveProgressStats, renderProgressBar, updateProgressUI } from './quiz.js';

const challengesData = [
    {
        id: 'c1',
        title: 'โจทย์ที่ 1: หยุดพฤติกรรมเริ่มต้น',
        description: 'คุณมีลิงก์ <code>&lt;a href="https://google.com"&gt;</code> คุณต้องการให้ฟังก์ชัน JavaScript ทำงานเมื่อคลิก แต่คุณ <strong>ไม่ต้องการ</strong> ให้ Browser เปลี่ยนหน้าเว็บไปที่ Google',
        codePrefix: `link.addEventListener('click', (event) => {\n    // หยุดการเปลี่ยนหน้าเว็บ\n    `,
        codeSuffix: `;\n    \n    console.log("โค้ด JS ทำงานแทน!");\n});`,
        answer: 'event.preventDefault()',
        explanation: '<code>event.preventDefault()</code> จะสั่งให้ Browser หยุดการกระทำตามพฤติกรรมเริ่มต้น (Native Behavior) ของ Event นั้นๆ'
    },
    {
        id: 'c2',
        title: 'โจทย์ที่ 2: หยุดการ Bubbling',
        description: 'คุณมีการ์ด `DIV` ขนาดใหญ่ที่คลิกได้ และมีปุ่ม `BUTTON` อยู่ข้างใน การคลิกที่ปุ่มจะต้อง <strong>ไม่ไปเรียก</strong> Listener ของการ์ด',
        codePrefix: `button.addEventListener('click', (event) => {\n    // หยุด Event ไม่ให้ลอยไปหา DIV ด้านนอก\n    `,
        codeSuffix: `;\n});`,
        answer: 'event.stopPropagation()',
        explanation: '<code>event.stopPropagation()</code> ใช้เพื่อหยุดการส่งต่อ (Propagating) Event ขึ้นหรือลงใน DOM Tree'
    },
    {
        id: 'c3',
        title: 'โจทย์ที่ 3: จัดการกับ Element แบบไดนามิก',
        description: 'คุณมีตะกร้าสินค้าที่มีสินค้าอยู่ 100 ชิ้น แทนที่คุณจะผูก Listener เข้ากับปุ่มลบสินค้าทั้ง 100 ปุ่มแยกกัน คุณเลือกที่จะผูก Listener ไว้ที่แม่ของพวกมัน <code>&lt;ul id="cart"&gt;</code> เพียง <strong>ตัวเดียว</strong> รูปแบบหรือเทคนิคนี้เรียกว่าอะไร?',
        codePrefix: `// รูปแบบนี้ถูกเรียกว่าอะไร?\nconst patternName = "`,
        codeSuffix: `";`,
        answer: 'Event Delegation',
        explanation: 'Event Delegation ใช้ประโยชน์จาก Bubbling เพื่อจัดการกับ Event ในระดับที่สูงกว่าใน DOM Tree ซึ่งช่วยประหยัด Memory และรองรับ Element ที่ถูกเพิ่มเข้ามาใหม่ภายหลังได้ทันที'
    }
];

export function renderChallenges() {
    let html = '';
    html += createPageTitle('Code Challenges', 'ประยุกต์ใช้ความรู้ของคุณโดยเติมโค้ดลงในช่องว่าง');
    html += renderProgressBar();

    html += `<div style="display: flex; flex-direction: column; gap: 30px;">`;
    
    challengesData.forEach((c) => {
        html += `
        <div class="card" id="challenge-card-${c.id}" style="padding: 20px; border: 2px solid var(--border-color); border-radius: 8px;">
            <h3 style="margin-bottom: 10px; color: var(--accent-color);">${c.title}</h3>
            <p style="margin-bottom: 20px; line-height: 1.6;">${c.description}</p>
            
            <div style="background: var(--bg-tertiary); padding: 20px; border-radius: 8px; font-family: monospace; font-size: 1.1rem; line-height: 1.5; overflow-x: auto;">
                <span style="color: var(--text-primary); white-space: pre;">${c.codePrefix}</span>
                <input type="text" id="input-${c.id}" autocomplete="off" spellcheck="false" style="background: var(--bg-primary); color: var(--accent-color); border: 2px solid var(--border-color); padding: 5px 10px; font-family: monospace; font-size: 1.1rem; width: 250px; border-radius: 4px; font-weight: bold; outline: none;">
                <span style="color: var(--text-primary); white-space: pre;">${c.codeSuffix}</span>
            </div>
            
            <div style="margin-top: 15px; display: flex; gap: 10px; align-items: center;">
                <button class="submit-chal-btn" data-cid="${c.id}" style="padding: 10px 20px; background: var(--accent-color); color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">ส่งคำตอบ</button>
                <div id="msg-${c.id}" style="font-weight: bold;"></div>
            </div>
            
            <div id="feedback-${c.id}" style="display: none; margin-top: 20px; padding: 15px; border-radius: 8px; background: rgba(64, 192, 87, 0.1); color: var(--success-color);">
                <div style="font-weight: bold; margin-bottom: 10px;">Correct ?</div>
                <div style="color: var(--text-primary);">${c.explanation}</div>
            </div>
        </div>`;
    });
    
    html += `</div>`;
    return html;
}

export function initChallenges() {
    updateProgressUI();
    const stats = getProgressStats();
    
    // Mark completed
    stats.challengesComplete.forEach(cid => {
        const card = document.getElementById(`challenge-card-${cid}`);
        if (card) {
            card.style.borderColor = 'var(--success-color)';
            const input = document.getElementById(`input-${cid}`);
            const btn = document.querySelector(`.submit-chal-btn[data-cid="${cid}"]`);
            const fb = document.getElementById(`feedback-${cid}`);
            
            const c = challengesData.find(x => x.id === cid);
            input.value = c.answer;
            input.disabled = true;
            input.style.borderColor = 'var(--success-color)';
            btn.style.display = 'none';
            fb.style.display = 'block';
        }
    });

    document.querySelectorAll('.submit-chal-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const cid = btn.getAttribute('data-cid');
            const input = document.getElementById(`input-${cid}`);
            const msg = document.getElementById(`msg-${cid}`);
            const c = challengesData.find(x => x.id === cid);
            
            // normalize answers (ignore spaces, case insensitive for text names)
            const studentAns = input.value.trim().toLowerCase().replace(/\\s+/g, '');
            const expectedAns = c.answer.toLowerCase().replace(/\\s+/g, '');
            
            if (studentAns === expectedAns) {
                input.disabled = true;
                input.style.borderColor = 'var(--success-color)';
                btn.style.display = 'none';
                msg.textContent = '';
                
                const fb = document.getElementById(`feedback-${cid}`);
                fb.style.display = 'block';
                
                const card = document.getElementById(`challenge-card-${cid}`);
                card.style.borderColor = 'var(--success-color)';
                
                let s = getProgressStats();
                if (!s.challengesComplete.includes(cid)) {
                    s.challengesComplete.push(cid);
                    saveProgressStats(s);
                }
            } else {
                input.style.borderColor = 'var(--danger-color)';
                msg.textContent = 'ยังไม่ถูกต้อง ลองอีกครั้ง!';
                msg.style.color = 'var(--danger-color)';
                
                // jiggle animation
                input.style.transform = 'translateX(5px)';
                setTimeout(() => input.style.transform = 'translateX(-5px)', 100);
                setTimeout(() => input.style.transform = 'translateX(5px)', 200);
                setTimeout(() => input.style.transform = 'translateX(0)', 300);
            }
        });
    });
}
