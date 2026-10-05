import { createPageTitle, createExplanationPanel } from '../js/components/ui.js';

const quizData = [
    {
        id: 'q1',
        category: 'Event Object',
        question: 'มีปุ่ม (button) อยู่ในกล่อง (div) และเราผูก click listener ไว้ที่กล่อง div. เมื่อผู้ใช้คลิกที่ปุ่ม, event.target จะมีค่าเป็นอะไร?',
        options: ['document', 'div', 'button', 'window'],
        answer: 2,
        explanation: '<code>event.target</code> จะชี้ไปที่ Element ในสุดที่เป็นต้นกำเนิดของ Event เสมอ (ในที่นี้คือปุ่ม button) ส่วน <code>div</code> จะเป็น <code>event.currentTarget</code>',
        visual: `
            <div style="padding: 15px; border: 2px dashed var(--border-color); background: var(--bg-tertiary); text-align: center; border-radius: 4px; margin-top: 15px;">
                <div style="padding: 15px; background: var(--bg-primary); border: 2px solid var(--border-color); display: inline-block; border-radius: 4px;">
                    <div style="color: var(--text-muted); font-size: 0.8rem; margin-bottom: 5px; font-weight: bold;">DIV (currentTarget)</div>
                    <button style="padding: 10px 20px; background: rgba(64, 192, 87, 0.2); border: 2px solid var(--success-color); color: var(--success-color); font-weight: bold; border-radius: 4px; pointer-events: none;">BUTTON ← target</button>
                </div>
            </div>
        `
    },
    {
        id: 'q2',
        category: 'Propagation',
        question: 'ลำดับการทำงานที่ถูกต้องในขั้นตอน BUBBLING เมื่อปุ่ม BUTTON ที่อยู่ใน DIV ถูกคลิก คือข้อใด?',
        options: [
            'Document → HTML → BODY → DIV → BUTTON',
            'BUTTON → DIV → BODY → HTML → Document',
            'เฉพาะ BUTTON',
            'เฉพาะ Document'
        ],
        answer: 1,
        explanation: 'Bubbling จะไหลขึ้นด้านบน (UPWARDS) จากเป้าหมาย (Target Element) ทะลุขึ้นไปจนถึง Document',
        visual: `
            <div style="display: flex; flex-direction: column; align-items: center; gap: 5px; font-family: monospace; font-weight: bold; margin-top: 15px; background: var(--bg-tertiary); padding: 15px; border-radius: 8px;">
                <div style="color: var(--text-muted);">Document</div>
                <div style="color: var(--danger-color);">↑</div>
                <div style="color: var(--text-muted);">HTML</div>
                <div style="color: var(--danger-color);">↑</div>
                <div style="color: var(--text-muted);">BODY</div>
                <div style="color: var(--danger-color);">↑</div>
                <div style="color: var(--text-muted);">DIV</div>
                <div style="color: var(--danger-color);">↑</div>
                <div style="color: var(--success-color); padding: 4px 8px; border: 1px solid var(--success-color); border-radius: 4px; background: rgba(64,192,87,0.1);">BUTTON (Target)</div>
            </div>
        `
    },
    {
        id: 'q3',
        category: 'Propagation',
        question: 'ลำดับของ Event Flow (Phases) ใน DOM ที่ถูกต้องคือข้อใด?',
        options: [
            'Target → Capturing → Bubbling',
            'Capturing → Target → Bubbling',
            'Bubbling → Target → Capturing',
            'Capturing → Bubbling → Target'
        ],
        answer: 1,
        explanation: 'Event จะเดินทางลง (Capturing) ไปหา Element เป้าหมาย (Target) แล้วจึงเดินทางกลับขึ้นด้านบน (Bubbling)',
        visual: `
            <div style="display: flex; gap: 10px; justify-content: center; margin-top: 15px;">
                <span style="padding: 5px 10px; background: rgba(51, 154, 240, 0.2); border: 1px solid var(--accent-color); border-radius: 4px; font-weight: bold; color: var(--accent-color);">1 Capturing ↓</span>
                <span style="padding: 5px 10px; background: rgba(64, 192, 87, 0.2); border: 1px solid var(--success-color); border-radius: 4px; font-weight: bold; color: var(--success-color);">2 Target ⊚</span>
                <span style="padding: 5px 10px; background: rgba(250, 82, 82, 0.2); border: 1px solid var(--danger-color); border-radius: 4px; font-weight: bold; color: var(--danger-color);">3 Bubbling ↑</span>
            </div>
        `
    },
    {
        id: 'q4',
        category: 'Event Types',
        question: 'Event ในข้อใดต่อไปนี้ที่ไม่มีพฤติกรรม Bubbling โดยธรรมชาติ?',
        options: ['click', 'keydown', 'focus', 'input'],
        answer: 2,
        explanation: '<code>focus</code> และ <code>blur</code> ไม่มีการ Bubbling โดยธรรมชาติ (หากต้องการใช้แบบ Bubbling ต้องใช้ <code>focusin</code> และ <code>focusout</code> แทน)',
        visual: ''
    }
];

export function getProgressStats() {
    const saved = localStorage.getItem('eventLabProgress');
    if (saved) return JSON.parse(saved);
    return { quizComplete: [], challengesComplete: [] };
}

export function saveProgressStats(stats) {
    localStorage.setItem('eventLabProgress', JSON.stringify(stats));
    updateProgressUI();
}

export function renderProgressBar() {
    return `<div id="global-progress-bar" style="margin-bottom: 30px; font-family: monospace; font-size: 1.1rem; background: var(--bg-secondary); padding: 15px; border-radius: 8px; border: 1px solid var(--border-color); display: flex; align-items: center; gap: 15px;">
        <strong>ความคืบหน้า:</strong> <span id="progress-visual" style="color: var(--accent-color); letter-spacing: 2px;"></span> <span id="progress-text" style="font-weight: bold;"></span>
    </div>`;
}

export function updateProgressUI() {
    const visual = document.getElementById('progress-visual');
    const text = document.getElementById('progress-text');
    if (!visual || !text) return;
    
    const stats = getProgressStats();
    // Total items = 4 quiz questions + 3 challenges
    const total = 7; 
    const completed = stats.quizComplete.length + stats.challengesComplete.length;
    
    const percentage = Math.round((completed / total) * 100);
    const blocks = Math.round(completed / total * 10);
    
    let bar = '';
    for(let i=0; i<10; i++) {
        bar += i < blocks ? '█' : '░';
    }
    
    visual.textContent = bar;
    text.textContent = `${percentage}%`;
}

export function renderQuiz() {
    let html = '';
    html += createPageTitle('Knowledge Quiz', 'ทดสอบความเข้าใจของคุณเกี่ยวกับ DOM Events');
    html += renderProgressBar();

    html += `<div style="display: flex; flex-direction: column; gap: 20px;">`;
    
    quizData.forEach((q, index) => {
        html += `
        <div class="card" id="quiz-card-${q.id}" style="padding: 20px; border: 2px solid var(--border-color);">
            <div style="font-size: 0.8rem; font-weight: bold; color: var(--accent-color); margin-bottom: 10px; text-transform: uppercase;">หมวดหมู่: ${q.category}</div>
            <h3 style="margin-bottom: 20px; font-size: 1.2rem;">${index + 1}. ${q.question}</h3>
            
            <div class="options-container" id="options-${q.id}" style="display: flex; flex-direction: column; gap: 10px;">
                ${q.options.map((opt, i) => `
                    <button class="quiz-opt-btn" data-qid="${q.id}" data-idx="${i}" style="text-align: left; padding: 15px; border: 1px solid var(--border-color); background: var(--bg-primary); color: var(--text-primary); border-radius: 4px; cursor: pointer; font-size: 1rem; transition: all 0.2s;">
                        ${String.fromCharCode(65 + i)}. ${opt}
                    </button>
                `).join('')}
            </div>
            
            <div id="feedback-${q.id}" style="display: none; margin-top: 20px; padding: 15px; border-radius: 8px;">
                <div class="feedback-title" style="font-weight: bold; font-size: 1.1rem; margin-bottom: 10px;"></div>
                <div class="feedback-explanation" style="line-height: 1.6;">${q.explanation}</div>
                <div class="feedback-visual">${q.visual}</div>
            </div>
        </div>`;
    });
    
    html += `</div>`;
    return html;
}

export function initQuiz() {
    updateProgressUI();
    const stats = getProgressStats();
    
    // Mark already completed questions visually
    stats.quizComplete.forEach(qid => {
        const card = document.getElementById(`quiz-card-${qid}`);
        if (card) {
            card.style.borderColor = 'var(--success-color)';
            card.style.opacity = '0.8';
            const fb = document.getElementById(`feedback-${qid}`);
            fb.style.display = 'block';
            fb.style.background = 'rgba(64, 192, 87, 0.1)';
            fb.querySelector('.feedback-title').innerHTML = 'ถูกต้อง ✓';
            fb.querySelector('.feedback-title').style.color = 'var(--success-color)';
            
            // disable buttons
            const btns = document.querySelectorAll(`#options-${qid} .quiz-opt-btn`);
            btns.forEach(b => {
                b.disabled = true;
                b.style.cursor = 'default';
                const q = quizData.find(x => x.id === qid);
                if (parseInt(b.getAttribute('data-idx')) === q.answer) {
                    b.style.background = 'var(--success-color)';
                    b.style.color = 'white';
                }
            });
        }
    });

    document.querySelectorAll('.quiz-opt-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const qid = btn.getAttribute('data-qid');
            const idx = parseInt(btn.getAttribute('data-idx'));
            const q = quizData.find(x => x.id === qid);
            
            const isCorrect = (idx === q.answer);
            const feedback = document.getElementById(`feedback-${qid}`);
            const title = feedback.querySelector('.feedback-title');
            
            // Highlight buttons
            const allBtns = document.querySelectorAll(`#options-${qid} .quiz-opt-btn`);
            allBtns.forEach(b => {
                b.style.background = 'var(--bg-primary)';
                b.style.color = 'var(--text-primary)';
                b.style.borderColor = 'var(--border-color)';
            });
            
            if (isCorrect) {
                btn.style.background = 'var(--success-color)';
                btn.style.color = 'white';
                btn.style.borderColor = 'var(--success-color)';
                
                feedback.style.display = 'block';
                feedback.style.background = 'rgba(64, 192, 87, 0.1)';
                title.innerHTML = 'Correct ?';
                title.style.color = 'var(--success-color)';
                
                const card = document.getElementById(`quiz-card-${qid}`);
                card.style.borderColor = 'var(--success-color)';
                
                let s = getProgressStats();
                if (!s.quizComplete.includes(qid)) {
                    s.quizComplete.push(qid);
                    saveProgressStats(s);
                }
            } else {
                btn.style.background = 'var(--danger-color)';
                btn.style.color = 'white';
                btn.style.borderColor = 'var(--danger-color)';
                
                // Show correct one too
                const correctBtn = document.querySelector(`#options-${qid} .quiz-opt-btn[data-idx="${q.answer}"]`);
                if (correctBtn) {
                    correctBtn.style.border = '2px solid var(--success-color)';
                }
                
                feedback.style.display = 'block';
                feedback.style.background = 'rgba(250, 82, 82, 0.1)';
                title.innerHTML = 'ไม่ถูกต้อง ✗';
                title.style.color = 'var(--danger-color)';
                
                const card = document.getElementById(`quiz-card-${qid}`);
                card.style.borderColor = 'var(--danger-color)';
            }
        });
    });
}
