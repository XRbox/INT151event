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

export function renderMouseEvents() {
    let html = '';
    
    html += createPageTitle('Mouse Events', 'เรียนรู้วิธีจัดการ Event ที่เกิดจากเมาส์ (Mouse)');

    // 1. CLICK EVENT
    html += `<section class="lesson-section" id="section-click">`;
    html += createExplanationPanel(
        'click', 
        `<p><strong>หมวดหมู่:</strong> Mouse</p>
         <p><strong>คืออะไร?</strong> เกิดขึ้นเมื่อผู้ใช้กดและปล่อยปุ่มเมาส์ (มักจะเป็นปุ่มซ้าย) บน Element</p>
         <p><strong>ลองทำ:</strong> คลิกปุ่มด้านล่าง และสังเกตลำดับการเกิด Event: <code>mousedown</code> &rarr; <code>mouseup</code> &rarr; <code>click</code></p>`
    );

    html += `<div class="lab-grid" style="margin-bottom: 40px;">`;
    html += `<div class="lab-column">`;
    const clickCode = `const clickBtn = document.getElementById('click-demo-btn');

clickBtn.addEventListener('mousedown', (event) => {
    // Log mousedown
});

clickBtn.addEventListener('mouseup', (event) => {
    // Log mouseup
});

clickBtn.addEventListener('click', (event) => {
    // Log click
    // Update inspector with event properties
});`;
    html += createCodePanel(clickCode, 'javascript');
    html += createExplanationPanel('', '<p><code>click</code> คือ Event ที่จะเกิดขึ้นก็ต่อเมื่อ <code>mousedown</code> และ <code>mouseup</code> ทำงานจนจบกระบวนการบน Element เดียวกัน</p>');
    html += `</div>`;
    
    html += `<div class="lab-column">`;
    html += createDemoContainer(`<button id="click-demo-btn" class="btn" style="padding: 15px 30px; font-size: 1.2rem; cursor: pointer; border-radius: 4px; border: none; background-color: var(--accent-color); color: white; transition: transform 0.1s;">คลิกเลย</button>`);
    html += createEventConsole('click-console');
    html += createEventInspector('click-inspector');
    html += `</div>`;
    html += `</div></section>`;


    // 2. MOUSEDOWN EVENT
    html += `<section class="lesson-section" id="section-mousedown">`;
    html += createExplanationPanel(
        'mousedown', 
        `<p><strong>หมวดหมู่:</strong> Mouse</p>
         <p><strong>คืออะไร?</strong> เกิดขึ้นเมื่อผู้ใช้กดปุ่มเมาส์ลงบน Element (ยังไม่ได้ปล่อย)</p>
         <p><strong>ลองทำ:</strong> กดเมาส์ค้างไว้ที่พื้นที่ด้านล่าง แล้วสังเกต Event ที่เกิดขึ้นก่อนปล่อยเมาส์</p>`
    );

    html += `<div class="lab-grid" style="margin-bottom: 40px;">`;
    html += `<div class="lab-column">`;
    const mousedownCode = `const downArea = document.getElementById('mousedown-demo');

downArea.addEventListener('mousedown', (event) => {
    downArea.textContent = 'mousedown \\u2713';
    downArea.style.backgroundColor = 'var(--success-color)';
    downArea.style.color = 'white';
});`;
    html += createCodePanel(mousedownCode, 'javascript');
    html += createExplanationPanel('', '<p><code>mousedown</code> เกิดขึ้นทันทีที่คุณกดเมาส์ลงไป โดยไม่ต้องรอให้คุณปล่อยเมาส์</p>');
    html += `</div>`;
    
    html += `<div class="lab-column">`;
    html += createDemoContainer(`<div id="mousedown-demo" style="width: 100%; height: 100px; display: flex; align-items: center; justify-content: center; background-color: var(--bg-secondary); border: 2px dashed var(--border-color); border-radius: 8px; cursor: pointer; font-weight: bold; user-select: none;">กดค้างไว้ที่นี่</div>`);
    html += createEventConsole('mousedown-console');
    html += createEventInspector('mousedown-inspector');
    html += `</div>`;
    html += `</div></section>`;


    // 3. MOUSEUP EVENT
    html += `<section class="lesson-section" id="section-mouseup">`;
    html += createExplanationPanel(
        'mouseup', 
        `<p><strong>หมวดหมู่:</strong> Mouse</p>
         <p><strong>คืออะไร?</strong> เกิดขึ้นเมื่อผู้ใช้ปล่อยปุ่มเมาส์บน Element</p>
         <p><strong>ลองทำ:</strong> ปล่อยเมาส์ในพื้นที่ด้านล่าง</p>`
    );

    html += `<div class="lab-grid" style="margin-bottom: 40px;">`;
    html += `<div class="lab-column">`;
    const mouseupCode = `const upArea = document.getElementById('mouseup-demo');

upArea.addEventListener('mouseup', (event) => {
    upArea.textContent = 'mouseup \\u2713';
    upArea.style.backgroundColor = 'var(--accent-color)';
    upArea.style.color = 'white';
});`;
    html += createCodePanel(mouseupCode, 'javascript');
    html += createExplanationPanel('', '<p><code>mouseup</code> ทำงานคู่กับ <code>mousedown</code> เพื่อบอกว่าการกดปุ่มเมาส์ได้สิ้นสุดลงแล้ว</p>');
    html += `</div>`;
    
    html += `<div class="lab-column">`;
    html += createDemoContainer(`<div id="mouseup-demo" style="width: 100%; height: 100px; display: flex; align-items: center; justify-content: center; background-color: var(--bg-secondary); border: 2px dashed var(--border-color); border-radius: 8px; cursor: pointer; font-weight: bold; user-select: none;">ปล่อยเมาส์ที่นี่</div>`);
    html += createEventConsole('mouseup-console');
    html += createEventInspector('mouseup-inspector');
    html += `</div>`;
    html += `</div></section>`;


    // 4. MOUSEOVER EVENT
    html += `<section class="lesson-section" id="section-mouseover">`;
    html += createExplanationPanel(
        'mouseover', 
        `<p><strong>หมวดหมู่:</strong> Mouse</p>
         <p><strong>คืออะไร?</strong> เกิดขึ้นเมื่อผู้ใช้เลื่อนเมาส์เข้าไปในพื้นที่ของ Element หรือ Element ลูกของมัน</p>
         <p><strong>ลองทำ:</strong> เลื่อนเมาส์จากด้านนอกเข้ามาในกรอบด้านล่าง</p>`
    );

    html += `<div class="lab-grid" style="margin-bottom: 40px;">`;
    html += `<div class="lab-column">`;
    const mouseoverCode = `const overArea = document.getElementById('mouseover-demo');

overArea.addEventListener('mouseover', (event) => {
    overArea.style.backgroundColor = 'var(--accent-color)';
    overArea.style.color = 'white';
    overArea.textContent = 'ตรวจพบ mouseover';
});`;
    html += createCodePanel(mouseoverCode, 'javascript');
    html += createExplanationPanel('', '<p>คุณจะเห็นว่า <code>mouseover</code> จะทำงานทันทีเมื่อเคอร์เซอร์เมาส์เข้ามาในเขตของ Element</p>');
    html += `</div>`;
    
    html += `<div class="lab-column">`;
    html += createDemoContainer(`<div id="mouseover-demo" style="width: 100%; height: 150px; display: flex; align-items: center; justify-content: center; background-color: var(--bg-secondary); border: 2px solid var(--border-color); border-radius: 8px; cursor: crosshair; font-weight: bold; transition: all 0.2s;">เลื่อนเมาส์มาที่นี่</div>`);
    html += createEventConsole('mouseover-console');
    html += createEventInspector('mouseover-inspector');
    html += `</div>`;
    html += `</div></section>`;


    // 5. MOUSEOUT EVENT
    html += `<section class="lesson-section" id="section-mouseout">`;
    html += createExplanationPanel(
        'mouseout', 
        `<p><strong>หมวดหมู่:</strong> Mouse</p>
         <p><strong>คืออะไร?</strong> เกิดขึ้นเมื่อผู้ใช้เลื่อนเมาส์ออกจากพื้นที่ของ Element</p>
         <p><strong>ลองทำ:</strong> เลื่อนเมาส์เข้ามาในกรอบ แล้วเลื่อนออกไปด้านนอก</p>`
    );

    html += `<div class="lab-grid" style="margin-bottom: 40px;">`;
    html += `<div class="lab-column">`;
    const mouseoutCode = `const outArea = document.getElementById('mouseout-demo');

outArea.addEventListener('mouseover', (event) => {
    // visually indicate inside
});

outArea.addEventListener('mouseout', (event) => {
    // visually indicate outside
});`;
    html += createCodePanel(mouseoutCode, 'javascript');
    html += createExplanationPanel('', '<p><code>mouseout</code> จะเกิดขึ้นทันทีเมื่อเคอร์เซอร์ขยับออกจากเขตของ Element</p>');
    html += `</div>`;
    
    html += `<div class="lab-column">`;
    html += createDemoContainer(`<div id="mouseout-demo" style="width: 100%; height: 150px; display: flex; align-items: center; justify-content: center; background-color: var(--bg-secondary); border: 2px solid var(--border-color); border-radius: 8px; cursor: crosshair; font-weight: bold; transition: all 0.2s;">เลื่อนเข้าแล้วเลื่อนออก</div>`);
    html += createEventConsole('mouseout-console');
    html += createEventInspector('mouseout-inspector');
    html += `</div>`;
    html += `</div></section>`;


    // 6. MOUSEMOVE EVENT
    html += `<section class="lesson-section" id="section-mousemove">`;
    html += createExplanationPanel(
        'mousemove', 
        `<p><strong>หมวดหมู่:</strong> Mouse</p>
         <p><strong>คืออะไร?</strong> เกิดขึ้นอย่างต่อเนื่องตราบใดที่เมาส์กำลังขยับอยู่บน Element</p>
         <p><strong>ลองทำ:</strong> ขยับเมาส์ไปมาภายในพื้นที่ด้านล่าง</p>`
    );

    html += `<div class="lab-grid" style="margin-bottom: 40px;">`;
    html += `<div class="lab-column">`;
    const mousemoveCode = `const moveArea = document.getElementById('mousemove-demo');
const textX = document.getElementById('mouse-x');
const textY = document.getElementById('mouse-y');

moveArea.addEventListener('mousemove', (event) => {
    textX.textContent = event.clientX;
    textY.textContent = event.clientY;
});`;
    html += createCodePanel(mousemoveCode, 'javascript');
    html += createExplanationPanel('', '<p><code>mousemove</code> จะถูกเรียกซ้ำๆ หลายครั้งมาก ตราบใดที่เมาส์มีการเคลื่อนที่</p>');
    html += `</div>`;
    
    html += `<div class="lab-column">`;
    html += createDemoContainer(`
        <div id="mousemove-demo" style="width: 100%; height: 200px; display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: var(--bg-secondary); border: 2px dashed var(--border-color); border-radius: 8px; cursor: crosshair; font-family: monospace; font-size: 1.2rem;">
            <div>Mouse X: <span id="mouse-x">___</span></div>
            <div>Mouse Y: <span id="mouse-y">___</span></div>
        </div>
    `);
    html += createEventConsole('mousemove-console');
    html += createEventInspector('mousemove-inspector');
    html += `</div>`;
    html += `</div></section>`;


    // 7. COMPARISON SECTION
    html += `<section class="lesson-section" id="section-comparison">`;
    html += createExplanationPanel(
        'เปรียบเทียบ Mouse Events', 
        `<div style="overflow-x: auto;">
        <table class="inspector-table" style="width: 100%; border-collapse: collapse; min-width: 600px;">
            <thead>
                <tr>
                    <th style="border-bottom: 2px solid var(--border-color); padding: 10px;">Event</th>
                    <th style="border-bottom: 2px solid var(--border-color); padding: 10px;">เกิดขึ้นเมื่อไหร่?</th>
                    <th style="border-bottom: 2px solid var(--border-color); padding: 10px;">คีย์บอร์ดเรียกได้ไหม?</th>
                    <th style="border-bottom: 2px solid var(--border-color); padding: 10px;">ผู้ใช้ต้องทำอะไร?</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; font-weight: bold; color: var(--accent-color);">click</td>
                    <td style="padding: 10px;">หลังจาก mousedown และ mouseup จบลง</td>
                    <td style="padding: 10px; color: var(--success-color);">ได้ (Enter/Space)</td>
                    <td style="padding: 10px;">กดและปล่อยปุ่มหลักโดยไม่เลื่อนเมาส์ออก</td>
                </tr>
                <tr>
                    <td style="padding: 10px; font-weight: bold; color: var(--accent-color);">mousedown</td>
                    <td style="padding: 10px;">ทันทีที่กดปุ่ม</td>
                    <td style="padding: 10px; color: var(--danger-color);">ไม่ได้</td>
                    <td style="padding: 10px;">กดปุ่มเมาส์</td>
                </tr>
                <tr>
                    <td style="padding: 10px; font-weight: bold; color: var(--accent-color);">mouseup</td>
                    <td style="padding: 10px;">ทันทีที่ปล่อยปุ่ม</td>
                    <td style="padding: 10px; color: var(--danger-color);">No</td>
                    <td style="padding: 10px;">ปล่อยปุ่มเมาส์ที่กดไว้</td>
                </tr>
                <tr>
                    <td style="padding: 10px; font-weight: bold; color: var(--accent-color);">mouseover</td>
                    <td style="padding: 10px;">เมื่อเมาส์เข้ามาในเขต Element</td>
                    <td style="padding: 10px; color: var(--danger-color);">No</td>
                    <td style="padding: 10px;">เลื่อนเมาส์จากข้างนอกเข้ามาข้างใน</td>
                </tr>
                <tr>
                    <td style="padding: 10px; font-weight: bold; color: var(--accent-color);">mouseout</td>
                    <td style="padding: 10px;">เมื่อเมาส์ออกจากเขต Element</td>
                    <td style="padding: 10px; color: var(--danger-color);">No</td>
                    <td style="padding: 10px;">เลื่อนเมาส์จากข้างในออกไปข้างนอก</td>
                </tr>
                <tr>
                    <td style="padding: 10px; font-weight: bold; color: var(--accent-color);">mousemove</td>
                    <td style="padding: 10px;">เกิดต่อเนื่องระหว่างขยับเมาส์</td>
                    <td style="padding: 10px; color: var(--danger-color);">No</td>
                    <td style="padding: 10px;">ขยับเมาส์ไปมาบน Element</td>
                </tr>
            </tbody>
        </table>
        </div>`
    );
    html += `</section>`;

    return html;
}

export function initMouseEvents() {
    // 1. CLICK
    const clickBtn = document.getElementById('click-demo-btn');
    if (clickBtn) {
        clickBtn.addEventListener('mousedown', (e) => {
            clickBtn.style.transform = 'scale(0.95)';
            logEvent('click-console', 'mousedown');
            updateInspector('click-inspector', e);
        });
        clickBtn.addEventListener('mouseup', (e) => {
            clickBtn.style.transform = 'scale(1)';
            logEvent('click-console', 'mouseup');
            updateInspector('click-inspector', e);
        });
        clickBtn.addEventListener('click', (e) => {
            logEvent('click-console', 'click');
            updateInspector('click-inspector', e);
        });
    }

    // 2. MOUSEDOWN
    const mousedownDemo = document.getElementById('mousedown-demo');
    if (mousedownDemo) {
        mousedownDemo.addEventListener('mousedown', (e) => {
            mousedownDemo.textContent = 'mousedown \\u2713';
            mousedownDemo.style.backgroundColor = 'var(--success-color)';
            mousedownDemo.style.color = 'white';
            logEvent('mousedown-console', 'mousedown');
            updateInspector('mousedown-inspector', e);
        });
        
        // Reset state for multiple tries
        mousedownDemo.addEventListener('mouseup', () => {
            setTimeout(() => {
                mousedownDemo.textContent = 'กดค้างไว้ที่นี่';
                mousedownDemo.style.backgroundColor = 'var(--bg-secondary)';
                mousedownDemo.style.color = 'var(--text-primary)';
            }, 1000);
        });
        mousedownDemo.addEventListener('mouseleave', () => {
            mousedownDemo.textContent = 'กดค้างไว้ที่นี่';
            mousedownDemo.style.backgroundColor = 'var(--bg-secondary)';
            mousedownDemo.style.color = 'var(--text-primary)';
        });
    }

    // 3. MOUSEUP
    const mouseupDemo = document.getElementById('mouseup-demo');
    if (mouseupDemo) {
        mouseupDemo.addEventListener('mouseup', (e) => {
            mouseupDemo.textContent = 'mouseup \\u2713';
            mouseupDemo.style.backgroundColor = 'var(--accent-color)';
            mouseupDemo.style.color = 'white';
            logEvent('mouseup-console', 'mouseup');
            updateInspector('mouseup-inspector', e);
        });

        // Reset state
        mouseupDemo.addEventListener('mousedown', () => {
            mouseupDemo.textContent = 'ปล่อยเมาส์ที่นี่';
            mouseupDemo.style.backgroundColor = 'var(--bg-secondary)';
            mouseupDemo.style.color = 'var(--text-primary)';
        });
    }

    // 4. MOUSEOVER
    const mouseoverDemo = document.getElementById('mouseover-demo');
    if (mouseoverDemo) {
        mouseoverDemo.addEventListener('mouseover', (e) => {
            mouseoverDemo.style.backgroundColor = 'var(--accent-color)';
            mouseoverDemo.style.color = 'white';
            mouseoverDemo.textContent = 'ตรวจพบ mouseover';
            logEvent('mouseover-console', 'mouseover');
            updateInspector('mouseover-inspector', e);
        });
        
        mouseoverDemo.addEventListener('mouseout', (e) => {
            mouseoverDemo.style.backgroundColor = 'var(--bg-secondary)';
            mouseoverDemo.style.color = 'var(--text-primary)';
            mouseoverDemo.textContent = 'เลื่อนเมาส์มาที่นี่';
        });
    }

    // 5. MOUSEOUT
    const mouseoutDemo = document.getElementById('mouseout-demo');
    if (mouseoutDemo) {
        mouseoutDemo.addEventListener('mouseover', (e) => {
            mouseoutDemo.style.backgroundColor = 'var(--success-color)';
            mouseoutDemo.style.color = 'white';
            mouseoutDemo.textContent = 'mouseover \\u2192 inside';
            logEvent('mouseout-console', 'mouseover');
            updateInspector('mouseout-inspector', e);
        });
        
        mouseoutDemo.addEventListener('mouseout', (e) => {
            mouseoutDemo.style.backgroundColor = 'var(--bg-secondary)';
            mouseoutDemo.style.color = 'var(--text-primary)';
            mouseoutDemo.textContent = 'mouseout \\u2192 outside';
            logEvent('mouseout-console', 'mouseout');
            updateInspector('mouseout-inspector', e);
        });
    }

    // 6. MOUSEMOVE
    const mousemoveDemo = document.getElementById('mousemove-demo');
    const textX = document.getElementById('mouse-x');
    const textY = document.getElementById('mouse-y');
    if (mousemoveDemo) {
        let lastLogTime = 0;
        mousemoveDemo.addEventListener('mousemove', (e) => {
            textX.textContent = e.clientX;
            textY.textContent = e.clientY;
            
            // Throttle logging to avoid completely flooding the console
            const now = Date.now();
            if (now - lastLogTime > 200) {
                logEvent('mousemove-console', 'mousemove');
                lastLogTime = now;
            }
            updateInspector('mousemove-inspector', e);
        });
    }
}
