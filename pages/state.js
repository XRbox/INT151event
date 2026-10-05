import { 
    createPageTitle, 
    createExplanationPanel, 
    createCodePanel,
    createDemoContainer,
    createEventConsole,
    logEvent
} from '../js/components/ui.js';

export function renderStateEvents() {
    let html = '';
    html += createPageTitle('State Change Events', 'Event ที่ทำงานเมื่อสถานะของหน้าเว็บหรือเบราว์เซอร์เปลี่ยนไป');

    html += `<section class="lesson-section">`;
    html += createExplanationPanel(
        'Window & Document Events',
        `<p>Event กลุ่มนี้ช่วยให้เราติดตามได้ว่าหน้าเว็บโหลดเสร็จหรือยัง ทรัพยากรต่าง ๆ พร้อมใช้งานไหม หรือผู้ใช้กำลังเลื่อนหน้าจอ/ปรับขนาดหน้าต่างอยู่หรือเปล่า</p>
         <ul style="margin-top: 10px; padding-left: 20px;">
            <li><code>DOMContentLoaded</code>: HTML ถูกโหลดและอ่านครบแล้ว (แต่ยังไม่รอรูปภาพ)</li>
            <li><code>load</code>: ทุกอย่างในหน้าเว็บ (รวมถึงรูปภาพและ CSS) ถูกโหลดเสร็จสมบูรณ์</li>
            <li><code>resize</code>: ผู้ใช้เปลี่ยนขนาดหน้าต่างเบราว์เซอร์</li>
            <li><code>scroll</code>: ผู้ใช้เลื่อน (Scroll) หน้าเว็บ หรือ Element ภายใน</li>
         </ul>`
    );

    html += `<div class="lab-grid" style="margin-bottom: 30px;">
        <div class="lab-column">
            ${createCodePanel(`// หน้าเว็บพร้อมใช้งาน
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM พร้อมแล้ว!');
});

// หน้าต่างถูกปรับขนาด
window.addEventListener('resize', (e) => {
  console.log(window.innerWidth, window.innerHeight);
});

// เลื่อนหน้าจอ
scrollBox.addEventListener('scroll', (e) => {
  console.log('กำลังเลื่อน...', e.target.scrollTop);
});`, 'javascript')}
        </div>
        
        <div class="lab-column">
            ${createDemoContainer(`
                <div style="margin-bottom: 15px; font-weight: bold; color: var(--accent-color);">
                    ลองปรับขนาดหน้าต่างเบราว์เซอร์ดูสิ!
                </div>
                
                <div id="scroll-box" style="height: 120px; overflow-y: scroll; border: 2px solid var(--border-color); border-radius: 4px; padding: 10px; background: var(--bg-tertiary);">
                    <div style="height: 400px; background: linear-gradient(var(--bg-primary), var(--bg-tertiary)); padding: 10px; text-align: center;">
                        <span style="font-weight: bold; color: var(--text-muted);">ลองเลื่อนลงไปข้างล่าง 👇</span>
                    </div>
                </div>
            `)}
            ${createEventConsole('state-console')}
        </div>
    </div></section>`;

    return html;
}

export function initStateEvents() {
    // Note: DOMContentLoaded and load have already fired for this SPA environment,
    // so we simulate the log to explain it logically without breaking SPA architecture.
    logEvent('state-console', 'DOMContentLoaded fired (simulated for SPA)');
    logEvent('state-console', 'load fired (simulated for SPA)');

    // Scroll
    const scrollBox = document.getElementById('scroll-box');
    let scrollTimeout;
    if (scrollBox) {
        scrollBox.addEventListener('scroll', (e) => {
            // throttle logs
            if (!scrollTimeout) {
                scrollTimeout = setTimeout(() => {
                    logEvent('state-console', `scroll | scrollTop: ${Math.round(e.target.scrollTop)}px`);
                    scrollTimeout = null;
                }, 100);
            }
        });
    }

    // Resize (Bind to window, but we need to unbind it later if we leave the page)
    // To handle this cleanly in the SPA, we define the handler and add it.
    // However, the prompt asks us to focus on performance: "Do not create unnecessary event listeners."
    // We will attach a resize listener only if the state page is active.
    
    // In our SPA, we don't have a robust "destroy" hook for pages, 
    // but we can check if the scrollBox still exists in the DOM.
    const resizeHandler = () => {
        if (!document.getElementById('scroll-box')) {
            window.removeEventListener('resize', resizeHandler); // Cleanup
            return;
        }
        
        // Debounce resize
        if (!window.resizeTimeoutState) {
            window.resizeTimeoutState = setTimeout(() => {
                logEvent('state-console', `resize | window: ${window.innerWidth}x${window.innerHeight}`);
                window.resizeTimeoutState = null;
            }, 200);
        }
    };
    
    window.addEventListener('resize', resizeHandler);
}
