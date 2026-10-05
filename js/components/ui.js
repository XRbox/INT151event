export function createPageTitle(title, description = '') {
    return `
        <div class="page-header">
            <h2 class="page-title">${title}</h2>
            ${description ? `<p class="page-description">${description}</p>` : ''}
        </div>
    `;
}

export function createExplanationPanel(title, content) {
    return `
        <div class="card explanation-panel">
            ${title ? `<h3 class="card-title">${title}</h3>` : ''}
            <div class="card-content">
                ${content}
            </div>
        </div>
    `;
}

export function createCodePanel(code, language = 'html') {
    const id = 'code-' + Math.random().toString(36).substr(2, 9);
    const escapedCode = code
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
        
    return `
        <div class="code-panel">
            <div class="code-panel-header">
                <span class="language-label">${language.toUpperCase()}</span>
                <button class="copy-btn" onclick="navigator.clipboard.writeText(document.getElementById('${id}').textContent)">คัดลอก (Copy)</button>
            </div>
            <div class="code-content">
                <pre><code id="${id}">${escapedCode}</code></pre>
            </div>
        </div>
    `;
}

export function createDemoContainer(content) {
    return `
        <div class="demo-container">
            ${content}
        </div>
    `;
}

export function createEventConsole(id = 'console') {
    return `
        <div class="event-console" id="${id}-wrapper">
            <div class="console-header">
                <span>บันทึกเหตุการณ์ (EVENT LOG)</span>
                <button class="clear-log-btn" onclick="document.getElementById('${id}-logs').innerHTML = ''">ล้างข้อมูล (Clear)</button>
            </div>
            <div class="console-logs" id="${id}-logs">
            </div>
        </div>
    `;
}

export function createEventInspector(id = 'inspector', props = {}) {
    const {
        type = '-',
        target = '-',
        currentTarget = '-',
        eventPhase = '-',
        bubbles = '-',
        cancelable = '-',
        defaultPrevented = '-'
    } = props;

    return `
        <div class="card event-inspector" id="${id}-wrapper" style="font-family: monospace;">
            <h3 class="card-title">ข้อมูลของ EVENT (Event Object)</h3>
            <table class="inspector-table">
                <tbody>
                    <tr>
                        <th>type</th>
                        <td style="color: var(--accent-color);">"<span class="val-type">${type}</span>"</td>
                    </tr>
                    <tr>
                        <th>target</th>
                        <td style="color: var(--success-color);" class="val-target">${target}</td>
                    </tr>
                    <tr>
                        <th>currentTarget</th>
                        <td style="color: var(--success-color);" class="val-currentTarget">${currentTarget}</td>
                    </tr>
                    <tr>
                        <th>eventPhase</th>
                        <td>
                            <div class="phase-indicator" style="display: flex; gap: 5px; font-size: 0.75rem; margin-top: 2px;">
                                <span class="phase-badge phase-1" data-phase="1" style="padding: 2px 6px; border-radius: 4px; background: var(--bg-tertiary); color: var(--text-muted); border: 1px solid var(--border-color);">1 capturing</span>
                                <span class="phase-badge phase-2" data-phase="2" style="padding: 2px 6px; border-radius: 4px; background: var(--bg-tertiary); color: var(--text-muted); border: 1px solid var(--border-color);">2 target</span>
                                <span class="phase-badge phase-3" data-phase="3" style="padding: 2px 6px; border-radius: 4px; background: var(--bg-tertiary); color: var(--text-muted); border: 1px solid var(--border-color);">3 bubbling</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>bubbles</th>
                        <td><span class="bool-badge val-bubbles" style="display: inline-block; padding: 2px 8px; border-radius: 12px; font-size: 0.8rem; font-weight: bold; background: var(--bg-tertiary); color: var(--text-muted);">${bubbles}</span></td>
                    </tr>
                    <tr>
                        <th>cancelable</th>
                        <td><span class="bool-badge val-cancelable" style="display: inline-block; padding: 2px 8px; border-radius: 12px; font-size: 0.8rem; font-weight: bold; background: var(--bg-tertiary); color: var(--text-muted);">${cancelable}</span></td>
                    </tr>
                    <tr>
                        <th>defaultPrevented</th>
                        <td><span class="bool-badge val-defaultPrevented" style="display: inline-block; padding: 2px 8px; border-radius: 12px; font-size: 0.8rem; font-weight: bold; background: var(--bg-tertiary); color: var(--text-muted);">${defaultPrevented}</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
}

export function logEvent(consoleId, eventName) {
    const logsContainer = document.getElementById(`${consoleId}-logs`);
    if (!logsContainer) return;
    
    const now = new Date();
    const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
    
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.innerHTML = `
        <span class="log-time">${timeStr}</span>
        <span class="log-event">${eventName}</span>
    `;
    
    logsContainer.prepend(entry);
}

export function updateInspector(inspectorId, event) {
    const el = document.getElementById(`${inspectorId}-wrapper`);
    if (!el) return;
    
    const getType = (target) => {
        if (!target) return 'null';
        if (target.id) return `${target.tagName.toUpperCase()}#${target.id}`;
        if (target.className) return `${target.tagName.toUpperCase()}.${target.className.split(' ')[0]}`;
        return target.tagName.toUpperCase();
    };

    el.querySelector('.val-type').textContent = event.type;
    el.querySelector('.val-target').textContent = getType(event.target);
    el.querySelector('.val-currentTarget').textContent = getType(event.currentTarget);
    
    // Update boolean badges
    const setBoolBadge = (selector, val) => {
        const badge = el.querySelector(selector);
        badge.textContent = val ? 'true' : 'false';
        if (val) {
            badge.style.backgroundColor = 'rgba(64, 192, 87, 0.2)';
            badge.style.color = 'var(--success-color)';
            badge.style.border = 'none';
        } else {
            badge.style.backgroundColor = 'rgba(250, 82, 82, 0.2)';
            badge.style.color = 'var(--danger-color)';
            badge.style.border = 'none';
        }
    };
    
    setBoolBadge('.val-bubbles', event.bubbles);
    setBoolBadge('.val-cancelable', event.cancelable);
    setBoolBadge('.val-defaultPrevented', event.defaultPrevented);

    // Update Phase Indicator
    const phaseBadges = el.querySelectorAll('.phase-badge');
    phaseBadges.forEach(badge => {
        if (parseInt(badge.getAttribute('data-phase')) === event.eventPhase) {
            badge.style.backgroundColor = 'var(--accent-color)';
            badge.style.color = 'white';
            badge.style.borderColor = 'var(--accent-color)';
            badge.style.fontWeight = 'bold';
        } else {
            badge.style.backgroundColor = 'var(--bg-tertiary)';
            badge.style.color = 'var(--text-muted)';
            badge.style.borderColor = 'var(--border-color)';
            badge.style.fontWeight = 'normal';
        }
    });
}
