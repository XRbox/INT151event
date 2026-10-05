import { createPageTitle } from '../js/components/ui.js';

export function renderHome() {
    let html = '';
    
    html += `
    <div style="text-align: center; padding: 40px 20px; background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%); border-radius: 8px; border: 1px solid var(--border-color); margin-bottom: 40px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
        <h1 style="font-size: 2.5rem; color: var(--accent-color); margin-bottom: 10px;">EVENT LAB</h1>
        <h2 style="font-size: 1.5rem; font-weight: normal; margin-bottom: 20px; color: var(--text-primary);">เรียนรู้ JavaScript Events แบบลงมือทำจริง</h2>
        <p style="font-size: 1.1rem; color: var(--text-muted); max-width: 600px; margin: 0 auto 30px auto; line-height: 1.6;">
            Event Lab คือเว็บไซต์สำหรับเรียนรู้ JavaScript DOM Events ผ่านการทดลองจริง<br><br>
            แทนที่จะอ่านทฤษฎีอย่างเดียว คุณสามารถลองกดปุ่ม เลื่อนเมาส์ พิมพ์ข้อความ เปิด-ปิดเมนู และดูได้ทันทีว่า Event เกิดขึ้นอย่างไร
        </p>
        <button id="start-learning-btn" style="padding: 15px 30px; font-size: 1.2rem; background: var(--accent-color); color: white; border: none; border-radius: 30px; cursor: pointer; font-weight: bold; transition: transform 0.2s, box-shadow 0.2s; box-shadow: 0 4px 15px rgba(51, 154, 240, 0.4);">
            เริ่มเรียนรู้กันเลย
        </button>
    </div>
    `;

    html += `<h3 style="text-align: center; margin-bottom: 30px; font-size: 1.5rem; color: var(--text-primary);">สิ่งที่คุณจะได้เรียนรู้</h3>`;

    html += `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 50px;">
        <!-- Card 1 -->
        <div class="home-card" data-target="mouse" style="cursor: pointer; background: var(--bg-secondary); border: 2px solid var(--border-color); border-radius: 8px; padding: 25px; transition: all 0.3s; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <div style="font-size: 2rem; margin-bottom: 15px;">🖱</div>
            <h4 style="font-size: 1.2rem; color: var(--accent-color); margin-bottom: 15px;">Mouse Events</h4>
            <div style="font-family: monospace; font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">
                click<br>mousedown<br>mouseup<br>mouseover<br>mouseout<br>mousemove
            </div>
        </div>
        
        <!-- Card 2 -->
        <div class="home-card" data-target="keyboard" style="cursor: pointer; background: var(--bg-secondary); border: 2px solid var(--border-color); border-radius: 8px; padding: 25px; transition: all 0.3s; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <div style="font-size: 2rem; margin-bottom: 15px;">⌨</div>
            <h4 style="font-size: 1.2rem; color: var(--accent-color); margin-bottom: 15px;">Keyboard Events</h4>
            <div style="font-family: monospace; font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">
                keydown<br>keyup<br>keypress
            </div>
        </div>

        <!-- Card 3 -->
        <div class="home-card" data-target="event-object" style="cursor: pointer; background: var(--bg-secondary); border: 2px solid var(--border-color); border-radius: 8px; padding: 25px; transition: all 0.3s; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <div style="font-size: 2rem; margin-bottom: 15px;">🎯</div>
            <h4 style="font-size: 1.2rem; color: var(--accent-color); margin-bottom: 15px;">Event Object</h4>
            <div style="font-family: monospace; font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">
                type<br>target<br>currentTarget<br>eventPhase
            </div>
        </div>

        <!-- Card 4 -->
        <div class="home-card" data-target="capturing" style="cursor: pointer; background: var(--bg-secondary); border: 2px solid var(--border-color); border-radius: 8px; padding: 25px; transition: all 0.3s; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <div style="font-size: 2rem; margin-bottom: 15px;">🔄</div>
            <h4 style="font-size: 1.2rem; color: var(--accent-color); margin-bottom: 15px;">Event Propagation</h4>
            <div style="font-family: monospace; font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">
                Capturing<br>Target<br>Bubbling
            </div>
        </div>

        <!-- Card 5 -->
        <div class="home-card" data-target="prevent-default" style="cursor: pointer; background: var(--bg-secondary); border: 2px solid var(--border-color); border-radius: 8px; padding: 25px; transition: all 0.3s; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <div style="font-size: 2rem; margin-bottom: 15px;">🛑</div>
            <h4 style="font-size: 1.2rem; color: var(--accent-color); margin-bottom: 15px;">Event Control</h4>
            <div style="font-family: monospace; font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">
                preventDefault()<br>stopPropagation()
            </div>
        </div>

        <!-- Card 6 -->
        <div class="home-card" data-target="event-delegation" style="cursor: pointer; background: var(--bg-secondary); border: 2px solid var(--border-color); border-radius: 8px; padding: 25px; transition: all 0.3s; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <div style="font-size: 2rem; margin-bottom: 15px;">🚀</div>
            <h4 style="font-size: 1.2rem; color: var(--accent-color); margin-bottom: 15px;">Event Delegation</h4>
            <div style="font-family: monospace; font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">
                One parent listener<br>Many child elements
            </div>
        </div>
    </div>
    `;

    html += `
    <div style="background: var(--bg-secondary); padding: 40px; border-radius: 8px; border: 1px solid var(--border-color); text-align: center;">
        <h3 style="margin-bottom: 25px; font-size: 1.5rem;">วิธีการใช้งานเว็บไซต์นี้</h3>
        <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
            <div style="background: var(--bg-primary); padding: 15px 25px; border-radius: 30px; font-weight: bold; border: 1px solid var(--border-color); color: var(--accent-color);">1. เรียนรู้</div>
            <div style="background: var(--bg-primary); padding: 15px 25px; border-radius: 30px; font-weight: bold; border: 1px solid var(--border-color); color: var(--success-color);">2. ลองทำ</div>
            <div style="background: var(--bg-primary); padding: 15px 25px; border-radius: 30px; font-weight: bold; border: 1px solid var(--border-color); color: var(--danger-color);">3. สังเกต</div>
            <div style="background: var(--bg-primary); padding: 15px 25px; border-radius: 30px; font-weight: bold; border: 1px solid var(--border-color); color: var(--accent-color);">4. ตรวจสอบ</div>
            <div style="background: var(--bg-primary); padding: 15px 25px; border-radius: 30px; font-weight: bold; border: 1px solid var(--border-color); color: var(--success-color);">5. เข้าใจ</div>
        </div>
    </div>
    `;

    // Add styles for hover effects
    html += `
    <style>
        .home-card:hover {
            transform: translateY(-5px);
            border-color: var(--accent-color) !important;
            box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
        }
        #start-learning-btn:hover {
            transform: scale(1.05);
            background: #228be6; /* slightly darker blue */
        }
    </style>
    `;

    return html;
}

export function initHome() {
    const startBtn = document.getElementById('start-learning-btn');
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            document.querySelector('a[data-id="event"]')?.click();
        });
    }

    const cards = document.querySelectorAll('.home-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const targetId = card.getAttribute('data-target');
            document.querySelector(`a[data-id="${targetId}"]`)?.click();
        });
    });
}
