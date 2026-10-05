(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };

  // js/navigation.js
  function initNavigation(onNavigate) {
    const navStructure = [
      {
        title: null,
        items: [
          { id: "home", label: "\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01" }
        ]
      },
      {
        title: "\u0E1E\u0E37\u0E49\u0E19\u0E10\u0E32\u0E19",
        items: [
          { id: "event", label: "Event \u0E04\u0E37\u0E2D\u0E2D\u0E30\u0E44\u0E23?" },
          { id: "event-handler", label: "Event Handler" },
          { id: "event-listener", label: "Event Listener" },
          { id: "event-object", label: "Event Object" }
        ]
      },
      {
        title: "\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E2D\u0E07 Event",
        items: [
          { id: "mouse", label: "Mouse Events" },
          { id: "keyboard", label: "Keyboard Events" },
          { id: "focus", label: "Focus & Blur" },
          { id: "input", label: "Input Events" },
          { id: "state-change", label: "State Change Events" }
        ]
      },
      {
        title: "Event Propagation",
        items: [
          { id: "capturing", label: "Capturing" },
          { id: "target", label: "Target" },
          { id: "bubbling", label: "Bubbling" }
        ]
      },
      {
        title: "\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E19\u0E04\u0E27\u0E1A\u0E04\u0E38\u0E21 (Methods)",
        items: [
          { id: "prevent-default", label: "preventDefault()" },
          { id: "stop-propagation", label: "stopPropagation()" }
        ]
      },
      {
        title: "\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E2A\u0E39\u0E07",
        items: [
          { id: "event-delegation", label: "Event Delegation" }
        ]
      },
      {
        title: "\u0E1D\u0E36\u0E01\u0E1D\u0E19",
        items: [
          { id: "playground", label: "\u0E2B\u0E49\u0E2D\u0E07\u0E17\u0E14\u0E25\u0E2D\u0E07" },
          { id: "patterns", label: "\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E08\u0E23\u0E34\u0E07" },
          { id: "quiz", label: "\u0E41\u0E1A\u0E1A\u0E17\u0E14\u0E2A\u0E2D\u0E1A" },
          { id: "challenges", label: "\u0E41\u0E1A\u0E1A\u0E1D\u0E36\u0E01\u0E2B\u0E31\u0E14" }
        ]
      }
    ];
    const navContainer = document.getElementById("mainNav");
    const mobileToggle = document.getElementById("mobileNavToggle");
    const sidebar = document.getElementById("appSidebar");
    let currentActiveId = "home";
    navStructure.forEach((section) => {
      const sectionEl = document.createElement("div");
      sectionEl.className = "nav-section";
      if (section.title) {
        const titleEl = document.createElement("div");
        titleEl.className = "nav-section-title";
        titleEl.textContent = section.title;
        sectionEl.appendChild(titleEl);
      }
      const listEl = document.createElement("ul");
      listEl.className = "nav-list";
      section.items.forEach((item) => {
        const li = document.createElement("li");
        li.className = "nav-item";
        if (item.id === currentActiveId) {
          li.classList.add("active");
        }
        const a = document.createElement("a");
        a.href = `#${item.id}`;
        a.textContent = item.label;
        a.setAttribute("data-id", item.id);
        a.addEventListener("click", (e) => {
          e.preventDefault();
          document.querySelectorAll(".nav-item").forEach((el) => el.classList.remove("active"));
          li.classList.add("active");
          if (window.innerWidth < 768) {
            sidebar.classList.remove("open");
          }
          onNavigate(item.id);
        });
        li.appendChild(a);
        listEl.appendChild(li);
      });
      sectionEl.appendChild(listEl);
      navContainer.appendChild(sectionEl);
    });
    mobileToggle.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }
  var init_navigation = __esm({
    "js/navigation.js"() {
    }
  });

  // js/components/ui.js
  function createPageTitle(title, description = "") {
    return `
        <div class="page-header">
            <h2 class="page-title">${title}</h2>
            ${description ? `<p class="page-description">${description}</p>` : ""}
        </div>
    `;
  }
  function createExplanationPanel(title, content) {
    return `
        <div class="card explanation-panel">
            ${title ? `<h3 class="card-title">${title}</h3>` : ""}
            <div class="card-content">
                ${content}
            </div>
        </div>
    `;
  }
  function createCodePanel(code, language = "html") {
    const id = "code-" + Math.random().toString(36).substr(2, 9);
    const escapedCode = code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    return `
        <div class="code-panel">
            <div class="code-panel-header">
                <span class="language-label">${language.toUpperCase()}</span>
                <button class="copy-btn" onclick="navigator.clipboard.writeText(document.getElementById('${id}').textContent)">\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01 (Copy)</button>
            </div>
            <div class="code-content">
                <pre><code id="${id}">${escapedCode}</code></pre>
            </div>
        </div>
    `;
  }
  function createDemoContainer(content) {
    return `
        <div class="demo-container">
            ${content}
        </div>
    `;
  }
  function createEventConsole(id = "console") {
    return `
        <div class="event-console" id="${id}-wrapper">
            <div class="console-header">
                <span>\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E40\u0E2B\u0E15\u0E38\u0E01\u0E32\u0E23\u0E13\u0E4C (EVENT LOG)</span>
                <button class="clear-log-btn" onclick="document.getElementById('${id}-logs').innerHTML = ''">\u0E25\u0E49\u0E32\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 (Clear)</button>
            </div>
            <div class="console-logs" id="${id}-logs">
            </div>
        </div>
    `;
  }
  function createEventInspector(id = "inspector", props = {}) {
    const {
      type = "-",
      target = "-",
      currentTarget = "-",
      eventPhase = "-",
      bubbles = "-",
      cancelable = "-",
      defaultPrevented = "-"
    } = props;
    return `
        <div class="card event-inspector" id="${id}-wrapper" style="font-family: monospace;">
            <h3 class="card-title">\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E02\u0E2D\u0E07 EVENT (Event Object)</h3>
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
  function logEvent(consoleId, eventName) {
    const logsContainer = document.getElementById(`${consoleId}-logs`);
    if (!logsContainer) return;
    const now = /* @__PURE__ */ new Date();
    const timeStr = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`;
    const entry = document.createElement("div");
    entry.className = "log-entry";
    entry.innerHTML = `
        <span class="log-time">${timeStr}</span>
        <span class="log-event">${eventName}</span>
    `;
    logsContainer.prepend(entry);
  }
  function updateInspector(inspectorId, event) {
    const el = document.getElementById(`${inspectorId}-wrapper`);
    if (!el) return;
    const getType = (target) => {
      if (!target) return "null";
      if (target.id) return `${target.tagName.toUpperCase()}#${target.id}`;
      if (target.className) return `${target.tagName.toUpperCase()}.${target.className.split(" ")[0]}`;
      return target.tagName.toUpperCase();
    };
    el.querySelector(".val-type").textContent = event.type;
    el.querySelector(".val-target").textContent = getType(event.target);
    el.querySelector(".val-currentTarget").textContent = getType(event.currentTarget);
    const setBoolBadge = (selector, val) => {
      const badge = el.querySelector(selector);
      badge.textContent = val ? "true" : "false";
      if (val) {
        badge.style.backgroundColor = "rgba(64, 192, 87, 0.2)";
        badge.style.color = "var(--success-color)";
        badge.style.border = "none";
      } else {
        badge.style.backgroundColor = "rgba(250, 82, 82, 0.2)";
        badge.style.color = "var(--danger-color)";
        badge.style.border = "none";
      }
    };
    setBoolBadge(".val-bubbles", event.bubbles);
    setBoolBadge(".val-cancelable", event.cancelable);
    setBoolBadge(".val-defaultPrevented", event.defaultPrevented);
    const phaseBadges = el.querySelectorAll(".phase-badge");
    phaseBadges.forEach((badge) => {
      if (parseInt(badge.getAttribute("data-phase")) === event.eventPhase) {
        badge.style.backgroundColor = "var(--accent-color)";
        badge.style.color = "white";
        badge.style.borderColor = "var(--accent-color)";
        badge.style.fontWeight = "bold";
      } else {
        badge.style.backgroundColor = "var(--bg-tertiary)";
        badge.style.color = "var(--text-muted)";
        badge.style.borderColor = "var(--border-color)";
        badge.style.fontWeight = "normal";
      }
    });
  }
  var init_ui = __esm({
    "js/components/ui.js"() {
    }
  });

  // pages/home.js
  function renderHome() {
    let html = "";
    html += `
    <div style="text-align: center; padding: 40px 20px; background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%); border-radius: 8px; border: 1px solid var(--border-color); margin-bottom: 40px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
        <h1 style="font-size: 2.5rem; color: var(--accent-color); margin-bottom: 10px;">EVENT LAB</h1>
        <h2 style="font-size: 1.5rem; font-weight: normal; margin-bottom: 20px; color: var(--text-primary);">\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 JavaScript Events \u0E41\u0E1A\u0E1A\u0E25\u0E07\u0E21\u0E37\u0E2D\u0E17\u0E33\u0E08\u0E23\u0E34\u0E07</h2>
        <p style="font-size: 1.1rem; color: var(--text-muted); max-width: 600px; margin: 0 auto 30px auto; line-height: 1.6;">
            Event Lab \u0E04\u0E37\u0E2D\u0E40\u0E27\u0E47\u0E1A\u0E44\u0E0B\u0E15\u0E4C\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 JavaScript DOM Events \u0E1C\u0E48\u0E32\u0E19\u0E01\u0E32\u0E23\u0E17\u0E14\u0E25\u0E2D\u0E07\u0E08\u0E23\u0E34\u0E07<br><br>
            \u0E41\u0E17\u0E19\u0E17\u0E35\u0E48\u0E08\u0E30\u0E2D\u0E48\u0E32\u0E19\u0E17\u0E24\u0E29\u0E0E\u0E35\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E14\u0E35\u0E22\u0E27 \u0E04\u0E38\u0E13\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E25\u0E2D\u0E07\u0E01\u0E14\u0E1B\u0E38\u0E48\u0E21 \u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E40\u0E21\u0E32\u0E2A\u0E4C \u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21 \u0E40\u0E1B\u0E34\u0E14-\u0E1B\u0E34\u0E14\u0E40\u0E21\u0E19\u0E39 \u0E41\u0E25\u0E30\u0E14\u0E39\u0E44\u0E14\u0E49\u0E17\u0E31\u0E19\u0E17\u0E35\u0E27\u0E48\u0E32 Event \u0E40\u0E01\u0E34\u0E14\u0E02\u0E36\u0E49\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E44\u0E23
        </p>
        <button id="start-learning-btn" style="padding: 15px 30px; font-size: 1.2rem; background: var(--accent-color); color: white; border: none; border-radius: 30px; cursor: pointer; font-weight: bold; transition: transform 0.2s, box-shadow 0.2s; box-shadow: 0 4px 15px rgba(51, 154, 240, 0.4);">
            \u0E40\u0E23\u0E34\u0E48\u0E21\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E01\u0E31\u0E19\u0E40\u0E25\u0E22
        </button>
    </div>
    `;
    html += `<h3 style="text-align: center; margin-bottom: 30px; font-size: 1.5rem; color: var(--text-primary);">\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E04\u0E38\u0E13\u0E08\u0E30\u0E44\u0E14\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49</h3>`;
    html += `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 50px;">
        <!-- Card 1 -->
        <div class="home-card" data-target="mouse" style="cursor: pointer; background: var(--bg-secondary); border: 2px solid var(--border-color); border-radius: 8px; padding: 25px; transition: all 0.3s; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <div style="font-size: 2rem; margin-bottom: 15px;">\u{1F5B1}</div>
            <h4 style="font-size: 1.2rem; color: var(--accent-color); margin-bottom: 15px;">Mouse Events</h4>
            <div style="font-family: monospace; font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">
                click<br>mousedown<br>mouseup<br>mouseover<br>mouseout<br>mousemove
            </div>
        </div>
        
        <!-- Card 2 -->
        <div class="home-card" data-target="keyboard" style="cursor: pointer; background: var(--bg-secondary); border: 2px solid var(--border-color); border-radius: 8px; padding: 25px; transition: all 0.3s; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <div style="font-size: 2rem; margin-bottom: 15px;">\u2328</div>
            <h4 style="font-size: 1.2rem; color: var(--accent-color); margin-bottom: 15px;">Keyboard Events</h4>
            <div style="font-family: monospace; font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">
                keydown<br>keyup<br>keypress
            </div>
        </div>

        <!-- Card 3 -->
        <div class="home-card" data-target="event-object" style="cursor: pointer; background: var(--bg-secondary); border: 2px solid var(--border-color); border-radius: 8px; padding: 25px; transition: all 0.3s; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <div style="font-size: 2rem; margin-bottom: 15px;">\u{1F3AF}</div>
            <h4 style="font-size: 1.2rem; color: var(--accent-color); margin-bottom: 15px;">Event Object</h4>
            <div style="font-family: monospace; font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">
                type<br>target<br>currentTarget<br>eventPhase
            </div>
        </div>

        <!-- Card 4 -->
        <div class="home-card" data-target="capturing" style="cursor: pointer; background: var(--bg-secondary); border: 2px solid var(--border-color); border-radius: 8px; padding: 25px; transition: all 0.3s; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <div style="font-size: 2rem; margin-bottom: 15px;">\u{1F504}</div>
            <h4 style="font-size: 1.2rem; color: var(--accent-color); margin-bottom: 15px;">Event Propagation</h4>
            <div style="font-family: monospace; font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">
                Capturing<br>Target<br>Bubbling
            </div>
        </div>

        <!-- Card 5 -->
        <div class="home-card" data-target="prevent-default" style="cursor: pointer; background: var(--bg-secondary); border: 2px solid var(--border-color); border-radius: 8px; padding: 25px; transition: all 0.3s; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <div style="font-size: 2rem; margin-bottom: 15px;">\u{1F6D1}</div>
            <h4 style="font-size: 1.2rem; color: var(--accent-color); margin-bottom: 15px;">Event Control</h4>
            <div style="font-family: monospace; font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">
                preventDefault()<br>stopPropagation()
            </div>
        </div>

        <!-- Card 6 -->
        <div class="home-card" data-target="event-delegation" style="cursor: pointer; background: var(--bg-secondary); border: 2px solid var(--border-color); border-radius: 8px; padding: 25px; transition: all 0.3s; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <div style="font-size: 2rem; margin-bottom: 15px;">\u{1F680}</div>
            <h4 style="font-size: 1.2rem; color: var(--accent-color); margin-bottom: 15px;">Event Delegation</h4>
            <div style="font-family: monospace; font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">
                One parent listener<br>Many child elements
            </div>
        </div>
    </div>
    `;
    html += `
    <div style="background: var(--bg-secondary); padding: 40px; border-radius: 8px; border: 1px solid var(--border-color); text-align: center;">
        <h3 style="margin-bottom: 25px; font-size: 1.5rem;">\u0E27\u0E34\u0E18\u0E35\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E40\u0E27\u0E47\u0E1A\u0E44\u0E0B\u0E15\u0E4C\u0E19\u0E35\u0E49</h3>
        <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
            <div style="background: var(--bg-primary); padding: 15px 25px; border-radius: 30px; font-weight: bold; border: 1px solid var(--border-color); color: var(--accent-color);">1. \u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49</div>
            <div style="background: var(--bg-primary); padding: 15px 25px; border-radius: 30px; font-weight: bold; border: 1px solid var(--border-color); color: var(--success-color);">2. \u0E25\u0E2D\u0E07\u0E17\u0E33</div>
            <div style="background: var(--bg-primary); padding: 15px 25px; border-radius: 30px; font-weight: bold; border: 1px solid var(--border-color); color: var(--danger-color);">3. \u0E2A\u0E31\u0E07\u0E40\u0E01\u0E15</div>
            <div style="background: var(--bg-primary); padding: 15px 25px; border-radius: 30px; font-weight: bold; border: 1px solid var(--border-color); color: var(--accent-color);">4. \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A</div>
            <div style="background: var(--bg-primary); padding: 15px 25px; border-radius: 30px; font-weight: bold; border: 1px solid var(--border-color); color: var(--success-color);">5. \u0E40\u0E02\u0E49\u0E32\u0E43\u0E08</div>
        </div>
    </div>
    `;
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
  function initHome() {
    const startBtn = document.getElementById("start-learning-btn");
    if (startBtn) {
      startBtn.addEventListener("click", () => {
        document.querySelector('a[data-id="event"]')?.click();
      });
    }
    const cards = document.querySelectorAll(".home-card");
    cards.forEach((card) => {
      card.addEventListener("click", () => {
        const targetId = card.getAttribute("data-target");
        document.querySelector(`a[data-id="${targetId}"]`)?.click();
      });
    });
  }
  var init_home = __esm({
    "pages/home.js"() {
      init_ui();
    }
  });

  // pages/mouseEvents.js
  function renderMouseEvents() {
    let html = "";
    html += createPageTitle("Mouse Events", "\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E27\u0E34\u0E18\u0E35\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23 Event \u0E17\u0E35\u0E48\u0E40\u0E01\u0E34\u0E14\u0E08\u0E32\u0E01\u0E40\u0E21\u0E32\u0E2A\u0E4C (Mouse)");
    html += `<section class="lesson-section" id="section-click">`;
    html += createExplanationPanel(
      "click",
      `<p><strong>\u0E2B\u0E21\u0E27\u0E14\u0E2B\u0E21\u0E39\u0E48:</strong> Mouse</p>
         <p><strong>\u0E04\u0E37\u0E2D\u0E2D\u0E30\u0E44\u0E23?</strong> \u0E40\u0E01\u0E34\u0E14\u0E02\u0E36\u0E49\u0E19\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E01\u0E14\u0E41\u0E25\u0E30\u0E1B\u0E25\u0E48\u0E2D\u0E22\u0E1B\u0E38\u0E48\u0E21\u0E40\u0E21\u0E32\u0E2A\u0E4C (\u0E21\u0E31\u0E01\u0E08\u0E30\u0E40\u0E1B\u0E47\u0E19\u0E1B\u0E38\u0E48\u0E21\u0E0B\u0E49\u0E32\u0E22) \u0E1A\u0E19 Element</p>
         <p><strong>\u0E25\u0E2D\u0E07\u0E17\u0E33:</strong> \u0E04\u0E25\u0E34\u0E01\u0E1B\u0E38\u0E48\u0E21\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07 \u0E41\u0E25\u0E30\u0E2A\u0E31\u0E07\u0E40\u0E01\u0E15\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E01\u0E34\u0E14 Event: <code>mousedown</code> &rarr; <code>mouseup</code> &rarr; <code>click</code></p>`
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
    html += createCodePanel(clickCode, "javascript");
    html += createExplanationPanel("", "<p><code>click</code> \u0E04\u0E37\u0E2D Event \u0E17\u0E35\u0E48\u0E08\u0E30\u0E40\u0E01\u0E34\u0E14\u0E02\u0E36\u0E49\u0E19\u0E01\u0E47\u0E15\u0E48\u0E2D\u0E40\u0E21\u0E37\u0E48\u0E2D <code>mousedown</code> \u0E41\u0E25\u0E30 <code>mouseup</code> \u0E17\u0E33\u0E07\u0E32\u0E19\u0E08\u0E19\u0E08\u0E1A\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23\u0E1A\u0E19 Element \u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E19</p>");
    html += `</div>`;
    html += `<div class="lab-column">`;
    html += createDemoContainer(`<button id="click-demo-btn" class="btn" style="padding: 15px 30px; font-size: 1.2rem; cursor: pointer; border-radius: 4px; border: none; background-color: var(--accent-color); color: white; transition: transform 0.1s;">\u0E04\u0E25\u0E34\u0E01\u0E40\u0E25\u0E22</button>`);
    html += createEventConsole("click-console");
    html += createEventInspector("click-inspector");
    html += `</div>`;
    html += `</div></section>`;
    html += `<section class="lesson-section" id="section-mousedown">`;
    html += createExplanationPanel(
      "mousedown",
      `<p><strong>\u0E2B\u0E21\u0E27\u0E14\u0E2B\u0E21\u0E39\u0E48:</strong> Mouse</p>
         <p><strong>\u0E04\u0E37\u0E2D\u0E2D\u0E30\u0E44\u0E23?</strong> \u0E40\u0E01\u0E34\u0E14\u0E02\u0E36\u0E49\u0E19\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E01\u0E14\u0E1B\u0E38\u0E48\u0E21\u0E40\u0E21\u0E32\u0E2A\u0E4C\u0E25\u0E07\u0E1A\u0E19 Element (\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E1B\u0E25\u0E48\u0E2D\u0E22)</p>
         <p><strong>\u0E25\u0E2D\u0E07\u0E17\u0E33:</strong> \u0E01\u0E14\u0E40\u0E21\u0E32\u0E2A\u0E4C\u0E04\u0E49\u0E32\u0E07\u0E44\u0E27\u0E49\u0E17\u0E35\u0E48\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07 \u0E41\u0E25\u0E49\u0E27\u0E2A\u0E31\u0E07\u0E40\u0E01\u0E15 Event \u0E17\u0E35\u0E48\u0E40\u0E01\u0E34\u0E14\u0E02\u0E36\u0E49\u0E19\u0E01\u0E48\u0E2D\u0E19\u0E1B\u0E25\u0E48\u0E2D\u0E22\u0E40\u0E21\u0E32\u0E2A\u0E4C</p>`
    );
    html += `<div class="lab-grid" style="margin-bottom: 40px;">`;
    html += `<div class="lab-column">`;
    const mousedownCode = `const downArea = document.getElementById('mousedown-demo');

downArea.addEventListener('mousedown', (event) => {
    downArea.textContent = 'mousedown \\u2713';
    downArea.style.backgroundColor = 'var(--success-color)';
    downArea.style.color = 'white';
});`;
    html += createCodePanel(mousedownCode, "javascript");
    html += createExplanationPanel("", "<p><code>mousedown</code> \u0E40\u0E01\u0E34\u0E14\u0E02\u0E36\u0E49\u0E19\u0E17\u0E31\u0E19\u0E17\u0E35\u0E17\u0E35\u0E48\u0E04\u0E38\u0E13\u0E01\u0E14\u0E40\u0E21\u0E32\u0E2A\u0E4C\u0E25\u0E07\u0E44\u0E1B \u0E42\u0E14\u0E22\u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E23\u0E2D\u0E43\u0E2B\u0E49\u0E04\u0E38\u0E13\u0E1B\u0E25\u0E48\u0E2D\u0E22\u0E40\u0E21\u0E32\u0E2A\u0E4C</p>");
    html += `</div>`;
    html += `<div class="lab-column">`;
    html += createDemoContainer(`<div id="mousedown-demo" style="width: 100%; height: 100px; display: flex; align-items: center; justify-content: center; background-color: var(--bg-secondary); border: 2px dashed var(--border-color); border-radius: 8px; cursor: pointer; font-weight: bold; user-select: none;">\u0E01\u0E14\u0E04\u0E49\u0E32\u0E07\u0E44\u0E27\u0E49\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48</div>`);
    html += createEventConsole("mousedown-console");
    html += createEventInspector("mousedown-inspector");
    html += `</div>`;
    html += `</div></section>`;
    html += `<section class="lesson-section" id="section-mouseup">`;
    html += createExplanationPanel(
      "mouseup",
      `<p><strong>\u0E2B\u0E21\u0E27\u0E14\u0E2B\u0E21\u0E39\u0E48:</strong> Mouse</p>
         <p><strong>\u0E04\u0E37\u0E2D\u0E2D\u0E30\u0E44\u0E23?</strong> \u0E40\u0E01\u0E34\u0E14\u0E02\u0E36\u0E49\u0E19\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E1B\u0E25\u0E48\u0E2D\u0E22\u0E1B\u0E38\u0E48\u0E21\u0E40\u0E21\u0E32\u0E2A\u0E4C\u0E1A\u0E19 Element</p>
         <p><strong>\u0E25\u0E2D\u0E07\u0E17\u0E33:</strong> \u0E1B\u0E25\u0E48\u0E2D\u0E22\u0E40\u0E21\u0E32\u0E2A\u0E4C\u0E43\u0E19\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07</p>`
    );
    html += `<div class="lab-grid" style="margin-bottom: 40px;">`;
    html += `<div class="lab-column">`;
    const mouseupCode = `const upArea = document.getElementById('mouseup-demo');

upArea.addEventListener('mouseup', (event) => {
    upArea.textContent = 'mouseup \\u2713';
    upArea.style.backgroundColor = 'var(--accent-color)';
    upArea.style.color = 'white';
});`;
    html += createCodePanel(mouseupCode, "javascript");
    html += createExplanationPanel("", "<p><code>mouseup</code> \u0E17\u0E33\u0E07\u0E32\u0E19\u0E04\u0E39\u0E48\u0E01\u0E31\u0E1A <code>mousedown</code> \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1A\u0E2D\u0E01\u0E27\u0E48\u0E32\u0E01\u0E32\u0E23\u0E01\u0E14\u0E1B\u0E38\u0E48\u0E21\u0E40\u0E21\u0E32\u0E2A\u0E4C\u0E44\u0E14\u0E49\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14\u0E25\u0E07\u0E41\u0E25\u0E49\u0E27</p>");
    html += `</div>`;
    html += `<div class="lab-column">`;
    html += createDemoContainer(`<div id="mouseup-demo" style="width: 100%; height: 100px; display: flex; align-items: center; justify-content: center; background-color: var(--bg-secondary); border: 2px dashed var(--border-color); border-radius: 8px; cursor: pointer; font-weight: bold; user-select: none;">\u0E1B\u0E25\u0E48\u0E2D\u0E22\u0E40\u0E21\u0E32\u0E2A\u0E4C\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48</div>`);
    html += createEventConsole("mouseup-console");
    html += createEventInspector("mouseup-inspector");
    html += `</div>`;
    html += `</div></section>`;
    html += `<section class="lesson-section" id="section-mouseover">`;
    html += createExplanationPanel(
      "mouseover",
      `<p><strong>\u0E2B\u0E21\u0E27\u0E14\u0E2B\u0E21\u0E39\u0E48:</strong> Mouse</p>
         <p><strong>\u0E04\u0E37\u0E2D\u0E2D\u0E30\u0E44\u0E23?</strong> \u0E40\u0E01\u0E34\u0E14\u0E02\u0E36\u0E49\u0E19\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E40\u0E21\u0E32\u0E2A\u0E4C\u0E40\u0E02\u0E49\u0E32\u0E44\u0E1B\u0E43\u0E19\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E02\u0E2D\u0E07 Element \u0E2B\u0E23\u0E37\u0E2D Element \u0E25\u0E39\u0E01\u0E02\u0E2D\u0E07\u0E21\u0E31\u0E19</p>
         <p><strong>\u0E25\u0E2D\u0E07\u0E17\u0E33:</strong> \u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E40\u0E21\u0E32\u0E2A\u0E4C\u0E08\u0E32\u0E01\u0E14\u0E49\u0E32\u0E19\u0E19\u0E2D\u0E01\u0E40\u0E02\u0E49\u0E32\u0E21\u0E32\u0E43\u0E19\u0E01\u0E23\u0E2D\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07</p>`
    );
    html += `<div class="lab-grid" style="margin-bottom: 40px;">`;
    html += `<div class="lab-column">`;
    const mouseoverCode = `const overArea = document.getElementById('mouseover-demo');

overArea.addEventListener('mouseover', (event) => {
    overArea.style.backgroundColor = 'var(--accent-color)';
    overArea.style.color = 'white';
    overArea.textContent = '\u0E15\u0E23\u0E27\u0E08\u0E1E\u0E1A mouseover';
});`;
    html += createCodePanel(mouseoverCode, "javascript");
    html += createExplanationPanel("", "<p>\u0E04\u0E38\u0E13\u0E08\u0E30\u0E40\u0E2B\u0E47\u0E19\u0E27\u0E48\u0E32 <code>mouseover</code> \u0E08\u0E30\u0E17\u0E33\u0E07\u0E32\u0E19\u0E17\u0E31\u0E19\u0E17\u0E35\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E04\u0E2D\u0E23\u0E4C\u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E40\u0E21\u0E32\u0E2A\u0E4C\u0E40\u0E02\u0E49\u0E32\u0E21\u0E32\u0E43\u0E19\u0E40\u0E02\u0E15\u0E02\u0E2D\u0E07 Element</p>");
    html += `</div>`;
    html += `<div class="lab-column">`;
    html += createDemoContainer(`<div id="mouseover-demo" style="width: 100%; height: 150px; display: flex; align-items: center; justify-content: center; background-color: var(--bg-secondary); border: 2px solid var(--border-color); border-radius: 8px; cursor: crosshair; font-weight: bold; transition: all 0.2s;">\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E40\u0E21\u0E32\u0E2A\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48</div>`);
    html += createEventConsole("mouseover-console");
    html += createEventInspector("mouseover-inspector");
    html += `</div>`;
    html += `</div></section>`;
    html += `<section class="lesson-section" id="section-mouseout">`;
    html += createExplanationPanel(
      "mouseout",
      `<p><strong>\u0E2B\u0E21\u0E27\u0E14\u0E2B\u0E21\u0E39\u0E48:</strong> Mouse</p>
         <p><strong>\u0E04\u0E37\u0E2D\u0E2D\u0E30\u0E44\u0E23?</strong> \u0E40\u0E01\u0E34\u0E14\u0E02\u0E36\u0E49\u0E19\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E40\u0E21\u0E32\u0E2A\u0E4C\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E02\u0E2D\u0E07 Element</p>
         <p><strong>\u0E25\u0E2D\u0E07\u0E17\u0E33:</strong> \u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E40\u0E21\u0E32\u0E2A\u0E4C\u0E40\u0E02\u0E49\u0E32\u0E21\u0E32\u0E43\u0E19\u0E01\u0E23\u0E2D\u0E1A \u0E41\u0E25\u0E49\u0E27\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E2D\u0E2D\u0E01\u0E44\u0E1B\u0E14\u0E49\u0E32\u0E19\u0E19\u0E2D\u0E01</p>`
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
    html += createCodePanel(mouseoutCode, "javascript");
    html += createExplanationPanel("", "<p><code>mouseout</code> \u0E08\u0E30\u0E40\u0E01\u0E34\u0E14\u0E02\u0E36\u0E49\u0E19\u0E17\u0E31\u0E19\u0E17\u0E35\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E04\u0E2D\u0E23\u0E4C\u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E02\u0E22\u0E31\u0E1A\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E40\u0E02\u0E15\u0E02\u0E2D\u0E07 Element</p>");
    html += `</div>`;
    html += `<div class="lab-column">`;
    html += createDemoContainer(`<div id="mouseout-demo" style="width: 100%; height: 150px; display: flex; align-items: center; justify-content: center; background-color: var(--bg-secondary); border: 2px solid var(--border-color); border-radius: 8px; cursor: crosshair; font-weight: bold; transition: all 0.2s;">\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E40\u0E02\u0E49\u0E32\u0E41\u0E25\u0E49\u0E27\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E2D\u0E2D\u0E01</div>`);
    html += createEventConsole("mouseout-console");
    html += createEventInspector("mouseout-inspector");
    html += `</div>`;
    html += `</div></section>`;
    html += `<section class="lesson-section" id="section-mousemove">`;
    html += createExplanationPanel(
      "mousemove",
      `<p><strong>\u0E2B\u0E21\u0E27\u0E14\u0E2B\u0E21\u0E39\u0E48:</strong> Mouse</p>
         <p><strong>\u0E04\u0E37\u0E2D\u0E2D\u0E30\u0E44\u0E23?</strong> \u0E40\u0E01\u0E34\u0E14\u0E02\u0E36\u0E49\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E15\u0E23\u0E32\u0E1A\u0E43\u0E14\u0E17\u0E35\u0E48\u0E40\u0E21\u0E32\u0E2A\u0E4C\u0E01\u0E33\u0E25\u0E31\u0E07\u0E02\u0E22\u0E31\u0E1A\u0E2D\u0E22\u0E39\u0E48\u0E1A\u0E19 Element</p>
         <p><strong>\u0E25\u0E2D\u0E07\u0E17\u0E33:</strong> \u0E02\u0E22\u0E31\u0E1A\u0E40\u0E21\u0E32\u0E2A\u0E4C\u0E44\u0E1B\u0E21\u0E32\u0E20\u0E32\u0E22\u0E43\u0E19\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07</p>`
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
    html += createCodePanel(mousemoveCode, "javascript");
    html += createExplanationPanel("", "<p><code>mousemove</code> \u0E08\u0E30\u0E16\u0E39\u0E01\u0E40\u0E23\u0E35\u0E22\u0E01\u0E0B\u0E49\u0E33\u0E46 \u0E2B\u0E25\u0E32\u0E22\u0E04\u0E23\u0E31\u0E49\u0E07\u0E21\u0E32\u0E01 \u0E15\u0E23\u0E32\u0E1A\u0E43\u0E14\u0E17\u0E35\u0E48\u0E40\u0E21\u0E32\u0E2A\u0E4C\u0E21\u0E35\u0E01\u0E32\u0E23\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E35\u0E48</p>");
    html += `</div>`;
    html += `<div class="lab-column">`;
    html += createDemoContainer(`
        <div id="mousemove-demo" style="width: 100%; height: 200px; display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: var(--bg-secondary); border: 2px dashed var(--border-color); border-radius: 8px; cursor: crosshair; font-family: monospace; font-size: 1.2rem;">
            <div>Mouse X: <span id="mouse-x">___</span></div>
            <div>Mouse Y: <span id="mouse-y">___</span></div>
        </div>
    `);
    html += createEventConsole("mousemove-console");
    html += createEventInspector("mousemove-inspector");
    html += `</div>`;
    html += `</div></section>`;
    html += `<section class="lesson-section" id="section-comparison">`;
    html += createExplanationPanel(
      "\u0E40\u0E1B\u0E23\u0E35\u0E22\u0E1A\u0E40\u0E17\u0E35\u0E22\u0E1A Mouse Events",
      `<div style="overflow-x: auto;">
        <table class="inspector-table" style="width: 100%; border-collapse: collapse; min-width: 600px;">
            <thead>
                <tr>
                    <th style="border-bottom: 2px solid var(--border-color); padding: 10px;">Event</th>
                    <th style="border-bottom: 2px solid var(--border-color); padding: 10px;">\u0E40\u0E01\u0E34\u0E14\u0E02\u0E36\u0E49\u0E19\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E44\u0E2B\u0E23\u0E48?</th>
                    <th style="border-bottom: 2px solid var(--border-color); padding: 10px;">\u0E04\u0E35\u0E22\u0E4C\u0E1A\u0E2D\u0E23\u0E4C\u0E14\u0E40\u0E23\u0E35\u0E22\u0E01\u0E44\u0E14\u0E49\u0E44\u0E2B\u0E21?</th>
                    <th style="border-bottom: 2px solid var(--border-color); padding: 10px;">\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E15\u0E49\u0E2D\u0E07\u0E17\u0E33\u0E2D\u0E30\u0E44\u0E23?</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; font-weight: bold; color: var(--accent-color);">click</td>
                    <td style="padding: 10px;">\u0E2B\u0E25\u0E31\u0E07\u0E08\u0E32\u0E01 mousedown \u0E41\u0E25\u0E30 mouseup \u0E08\u0E1A\u0E25\u0E07</td>
                    <td style="padding: 10px; color: var(--success-color);">\u0E44\u0E14\u0E49 (Enter/Space)</td>
                    <td style="padding: 10px;">\u0E01\u0E14\u0E41\u0E25\u0E30\u0E1B\u0E25\u0E48\u0E2D\u0E22\u0E1B\u0E38\u0E48\u0E21\u0E2B\u0E25\u0E31\u0E01\u0E42\u0E14\u0E22\u0E44\u0E21\u0E48\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E40\u0E21\u0E32\u0E2A\u0E4C\u0E2D\u0E2D\u0E01</td>
                </tr>
                <tr>
                    <td style="padding: 10px; font-weight: bold; color: var(--accent-color);">mousedown</td>
                    <td style="padding: 10px;">\u0E17\u0E31\u0E19\u0E17\u0E35\u0E17\u0E35\u0E48\u0E01\u0E14\u0E1B\u0E38\u0E48\u0E21</td>
                    <td style="padding: 10px; color: var(--danger-color);">\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49</td>
                    <td style="padding: 10px;">\u0E01\u0E14\u0E1B\u0E38\u0E48\u0E21\u0E40\u0E21\u0E32\u0E2A\u0E4C</td>
                </tr>
                <tr>
                    <td style="padding: 10px; font-weight: bold; color: var(--accent-color);">mouseup</td>
                    <td style="padding: 10px;">\u0E17\u0E31\u0E19\u0E17\u0E35\u0E17\u0E35\u0E48\u0E1B\u0E25\u0E48\u0E2D\u0E22\u0E1B\u0E38\u0E48\u0E21</td>
                    <td style="padding: 10px; color: var(--danger-color);">No</td>
                    <td style="padding: 10px;">\u0E1B\u0E25\u0E48\u0E2D\u0E22\u0E1B\u0E38\u0E48\u0E21\u0E40\u0E21\u0E32\u0E2A\u0E4C\u0E17\u0E35\u0E48\u0E01\u0E14\u0E44\u0E27\u0E49</td>
                </tr>
                <tr>
                    <td style="padding: 10px; font-weight: bold; color: var(--accent-color);">mouseover</td>
                    <td style="padding: 10px;">\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E21\u0E32\u0E2A\u0E4C\u0E40\u0E02\u0E49\u0E32\u0E21\u0E32\u0E43\u0E19\u0E40\u0E02\u0E15 Element</td>
                    <td style="padding: 10px; color: var(--danger-color);">No</td>
                    <td style="padding: 10px;">\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E40\u0E21\u0E32\u0E2A\u0E4C\u0E08\u0E32\u0E01\u0E02\u0E49\u0E32\u0E07\u0E19\u0E2D\u0E01\u0E40\u0E02\u0E49\u0E32\u0E21\u0E32\u0E02\u0E49\u0E32\u0E07\u0E43\u0E19</td>
                </tr>
                <tr>
                    <td style="padding: 10px; font-weight: bold; color: var(--accent-color);">mouseout</td>
                    <td style="padding: 10px;">\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E21\u0E32\u0E2A\u0E4C\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E40\u0E02\u0E15 Element</td>
                    <td style="padding: 10px; color: var(--danger-color);">No</td>
                    <td style="padding: 10px;">\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E40\u0E21\u0E32\u0E2A\u0E4C\u0E08\u0E32\u0E01\u0E02\u0E49\u0E32\u0E07\u0E43\u0E19\u0E2D\u0E2D\u0E01\u0E44\u0E1B\u0E02\u0E49\u0E32\u0E07\u0E19\u0E2D\u0E01</td>
                </tr>
                <tr>
                    <td style="padding: 10px; font-weight: bold; color: var(--accent-color);">mousemove</td>
                    <td style="padding: 10px;">\u0E40\u0E01\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E02\u0E22\u0E31\u0E1A\u0E40\u0E21\u0E32\u0E2A\u0E4C</td>
                    <td style="padding: 10px; color: var(--danger-color);">No</td>
                    <td style="padding: 10px;">\u0E02\u0E22\u0E31\u0E1A\u0E40\u0E21\u0E32\u0E2A\u0E4C\u0E44\u0E1B\u0E21\u0E32\u0E1A\u0E19 Element</td>
                </tr>
            </tbody>
        </table>
        </div>`
    );
    html += `</section>`;
    return html;
  }
  function initMouseEvents() {
    const clickBtn = document.getElementById("click-demo-btn");
    if (clickBtn) {
      clickBtn.addEventListener("mousedown", (e) => {
        clickBtn.style.transform = "scale(0.95)";
        logEvent("click-console", "mousedown");
        updateInspector("click-inspector", e);
      });
      clickBtn.addEventListener("mouseup", (e) => {
        clickBtn.style.transform = "scale(1)";
        logEvent("click-console", "mouseup");
        updateInspector("click-inspector", e);
      });
      clickBtn.addEventListener("click", (e) => {
        logEvent("click-console", "click");
        updateInspector("click-inspector", e);
      });
    }
    const mousedownDemo = document.getElementById("mousedown-demo");
    if (mousedownDemo) {
      mousedownDemo.addEventListener("mousedown", (e) => {
        mousedownDemo.textContent = "mousedown \\u2713";
        mousedownDemo.style.backgroundColor = "var(--success-color)";
        mousedownDemo.style.color = "white";
        logEvent("mousedown-console", "mousedown");
        updateInspector("mousedown-inspector", e);
      });
      mousedownDemo.addEventListener("mouseup", () => {
        setTimeout(() => {
          mousedownDemo.textContent = "\u0E01\u0E14\u0E04\u0E49\u0E32\u0E07\u0E44\u0E27\u0E49\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48";
          mousedownDemo.style.backgroundColor = "var(--bg-secondary)";
          mousedownDemo.style.color = "var(--text-primary)";
        }, 1e3);
      });
      mousedownDemo.addEventListener("mouseleave", () => {
        mousedownDemo.textContent = "\u0E01\u0E14\u0E04\u0E49\u0E32\u0E07\u0E44\u0E27\u0E49\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48";
        mousedownDemo.style.backgroundColor = "var(--bg-secondary)";
        mousedownDemo.style.color = "var(--text-primary)";
      });
    }
    const mouseupDemo = document.getElementById("mouseup-demo");
    if (mouseupDemo) {
      mouseupDemo.addEventListener("mouseup", (e) => {
        mouseupDemo.textContent = "mouseup \\u2713";
        mouseupDemo.style.backgroundColor = "var(--accent-color)";
        mouseupDemo.style.color = "white";
        logEvent("mouseup-console", "mouseup");
        updateInspector("mouseup-inspector", e);
      });
      mouseupDemo.addEventListener("mousedown", () => {
        mouseupDemo.textContent = "\u0E1B\u0E25\u0E48\u0E2D\u0E22\u0E40\u0E21\u0E32\u0E2A\u0E4C\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48";
        mouseupDemo.style.backgroundColor = "var(--bg-secondary)";
        mouseupDemo.style.color = "var(--text-primary)";
      });
    }
    const mouseoverDemo = document.getElementById("mouseover-demo");
    if (mouseoverDemo) {
      mouseoverDemo.addEventListener("mouseover", (e) => {
        mouseoverDemo.style.backgroundColor = "var(--accent-color)";
        mouseoverDemo.style.color = "white";
        mouseoverDemo.textContent = "\u0E15\u0E23\u0E27\u0E08\u0E1E\u0E1A mouseover";
        logEvent("mouseover-console", "mouseover");
        updateInspector("mouseover-inspector", e);
      });
      mouseoverDemo.addEventListener("mouseout", (e) => {
        mouseoverDemo.style.backgroundColor = "var(--bg-secondary)";
        mouseoverDemo.style.color = "var(--text-primary)";
        mouseoverDemo.textContent = "\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E40\u0E21\u0E32\u0E2A\u0E4C\u0E21\u0E32\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48";
      });
    }
    const mouseoutDemo = document.getElementById("mouseout-demo");
    if (mouseoutDemo) {
      mouseoutDemo.addEventListener("mouseover", (e) => {
        mouseoutDemo.style.backgroundColor = "var(--success-color)";
        mouseoutDemo.style.color = "white";
        mouseoutDemo.textContent = "mouseover \\u2192 inside";
        logEvent("mouseout-console", "mouseover");
        updateInspector("mouseout-inspector", e);
      });
      mouseoutDemo.addEventListener("mouseout", (e) => {
        mouseoutDemo.style.backgroundColor = "var(--bg-secondary)";
        mouseoutDemo.style.color = "var(--text-primary)";
        mouseoutDemo.textContent = "mouseout \\u2192 outside";
        logEvent("mouseout-console", "mouseout");
        updateInspector("mouseout-inspector", e);
      });
    }
    const mousemoveDemo = document.getElementById("mousemove-demo");
    const textX = document.getElementById("mouse-x");
    const textY = document.getElementById("mouse-y");
    if (mousemoveDemo) {
      let lastLogTime = 0;
      mousemoveDemo.addEventListener("mousemove", (e) => {
        textX.textContent = e.clientX;
        textY.textContent = e.clientY;
        const now = Date.now();
        if (now - lastLogTime > 200) {
          logEvent("mousemove-console", "mousemove");
          lastLogTime = now;
        }
        updateInspector("mousemove-inspector", e);
      });
    }
  }
  var init_mouseEvents = __esm({
    "pages/mouseEvents.js"() {
      init_ui();
    }
  });

  // pages/keyboard.js
  function renderKeyboardEvents() {
    let html = "";
    html += createPageTitle("Keyboard Events", "\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E27\u0E34\u0E18\u0E35\u0E23\u0E31\u0E1A\u0E04\u0E48\u0E32\u0E08\u0E32\u0E01\u0E01\u0E32\u0E23\u0E01\u0E14\u0E04\u0E35\u0E22\u0E4C\u0E1A\u0E2D\u0E23\u0E4C\u0E14");
    html += `<section class="lesson-section">`;
    html += createExplanationPanel(
      "Keyboard Timeline",
      `<p><strong>\u0E2B\u0E21\u0E27\u0E14\u0E2B\u0E21\u0E39\u0E48:</strong> Keyboard</p>
         <p><strong>\u0E04\u0E37\u0E2D\u0E2D\u0E30\u0E44\u0E23?</strong> \u0E25\u0E33\u0E14\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E01\u0E34\u0E14 Event \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E01\u0E14\u0E1B\u0E38\u0E48\u0E21\u0E1A\u0E19\u0E04\u0E35\u0E22\u0E4C\u0E1A\u0E2D\u0E23\u0E4C\u0E14\u0E04\u0E37\u0E2D <code>keydown</code> &rarr; <code style="text-decoration: line-through;">keypress</code> (\u0E25\u0E49\u0E32\u0E2A\u0E21\u0E31\u0E22\u0E41\u0E25\u0E49\u0E27) &rarr; <code>keyup</code></p>
         <p><strong>\u0E04\u0E33\u0E41\u0E19\u0E30\u0E19\u0E33:</strong> \u0E43\u0E2B\u0E49\u0E43\u0E0A\u0E49 <code>keydown</code> \u0E40\u0E2A\u0E21\u0E2D \u0E44\u0E21\u0E48\u0E04\u0E27\u0E23\u0E43\u0E0A\u0E49 <code>keypress</code> \u0E40\u0E1E\u0E23\u0E32\u0E30 <code>keypress</code> \u0E16\u0E39\u0E01\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28\u0E27\u0E48\u0E32\u0E25\u0E49\u0E32\u0E2A\u0E21\u0E31\u0E22 (deprecated) \u0E41\u0E25\u0E30\u0E44\u0E21\u0E48\u0E17\u0E33\u0E07\u0E32\u0E19\u0E01\u0E31\u0E1A\u0E1B\u0E38\u0E48\u0E21\u0E1A\u0E32\u0E07\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17 \u0E40\u0E0A\u0E48\u0E19 Arrow keys, Alt, Ctrl</p>`
    );
    const code = `const area = document.getElementById('keyboard-area');

area.addEventListener('keydown', (e) => {
    console.log('keydown', e.key, e.code);
});

area.addEventListener('keypress', (e) => {
    // Deprecated!
    console.log('keypress', e.key, e.code);
});

area.addEventListener('keyup', (e) => {
    console.log('keyup', e.key, e.code);
});`;
    html += `<div class="lab-grid" style="margin-bottom: 40px;">`;
    html += `<div class="lab-column">`;
    html += createCodePanel(code, "javascript");
    html += `
        <div class="card event-inspector" style="margin-top: 20px;">
            <h3 class="card-title">\u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E1B\u0E38\u0E48\u0E21\u0E04\u0E35\u0E22\u0E4C\u0E1A\u0E2D\u0E23\u0E4C\u0E14</h3>
            <div style="font-size: 1.5rem; text-align: center; padding: 20px 0;">
                <div style="margin-bottom: 10px;">event.key: <strong id="live-key" style="color: var(--accent-color);">-</strong></div>
                <div>event.code: <strong id="live-code" style="color: var(--success-color);">-</strong></div>
            </div>
            <p style="text-align: center; color: var(--text-muted); font-size: 0.9rem;">\u0E25\u0E2D\u0E07\u0E01\u0E14\u0E1B\u0E38\u0E48\u0E21\u0E15\u0E48\u0E32\u0E07\u0E46 \u0E40\u0E0A\u0E48\u0E19 A, Shift+A, Enter, Space, Tab, Escape, Backspace, Delete, \u0E2B\u0E23\u0E37\u0E2D\u0E1B\u0E38\u0E48\u0E21\u0E25\u0E39\u0E01\u0E28\u0E23</p>
        </div>
    `;
    html += `</div>`;
    html += `<div class="lab-column">`;
    html += createDemoContainer(`<div id="keyboard-area" tabindex="0" style="width: 100%; height: 150px; display: flex; align-items: center; justify-content: center; background-color: var(--bg-secondary); border: 2px solid var(--accent-color); border-radius: 8px; font-weight: bold; font-size: 1.2rem; cursor: text; outline: none; box-shadow: 0 0 0 3px rgba(51, 154, 240, 0.2);">\u0E25\u0E2D\u0E07\u0E01\u0E14\u0E1B\u0E38\u0E48\u0E21\u0E04\u0E35\u0E22\u0E4C\u0E1A\u0E2D\u0E23\u0E4C\u0E14\u0E43\u0E19\u0E01\u0E23\u0E2D\u0E1A\u0E19\u0E35\u0E49</div>`);
    html += createEventConsole("keyboard-console");
    html += createEventInspector("keyboard-inspector");
    html += `</div>`;
    html += `</div></section>`;
    return html;
  }
  function initKeyboardEvents() {
    const area = document.getElementById("keyboard-area");
    const liveKey = document.getElementById("live-key");
    const liveCode = document.getElementById("live-code");
    if (area) {
      area.focus();
      area.addEventListener("keydown", (e) => {
        logEvent("keyboard-console", "keydown");
        updateInspector("keyboard-inspector", e);
        liveKey.textContent = e.key === " " ? "Space" : e.key;
        liveCode.textContent = e.code;
      });
      area.addEventListener("keypress", (e) => {
        logEvent("keyboard-console", "keypress (\u0E25\u0E49\u0E32\u0E2A\u0E21\u0E31\u0E22\u0E41\u0E25\u0E49\u0E27)");
        updateInspector("keyboard-inspector", e);
      });
      area.addEventListener("keyup", (e) => {
        logEvent("keyboard-console", "keyup");
        updateInspector("keyboard-inspector", e);
      });
      area.addEventListener("keydown", (e) => {
        if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.code)) {
          e.preventDefault();
        }
      });
    }
  }
  var init_keyboard = __esm({
    "pages/keyboard.js"() {
      init_ui();
    }
  });

  // pages/input.js
  function renderInputEvents() {
    let html = "";
    html += createPageTitle("Input Event", "\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E27\u0E34\u0E18\u0E35\u0E15\u0E23\u0E27\u0E08\u0E08\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E02\u0E2D\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E43\u0E19\u0E1F\u0E2D\u0E23\u0E4C\u0E21\u0E41\u0E1A\u0E1A\u0E40\u0E23\u0E35\u0E22\u0E25\u0E44\u0E17\u0E21\u0E4C");
    html += `<section class="lesson-section">`;
    html += createExplanationPanel(
      "input",
      `<p><strong>\u0E2B\u0E21\u0E27\u0E14\u0E2B\u0E21\u0E39\u0E48:</strong> Form / Input</p>
         <p><strong>\u0E04\u0E37\u0E2D\u0E2D\u0E30\u0E44\u0E23?</strong> \u0E40\u0E01\u0E34\u0E14\u0E02\u0E36\u0E49\u0E19\u0E17\u0E31\u0E19\u0E17\u0E35\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E04\u0E48\u0E32\u0E02\u0E2D\u0E07 <code>&lt;input&gt;</code>, <code>&lt;select&gt;</code>, \u0E2B\u0E23\u0E37\u0E2D <code>&lt;textarea&gt;</code> \u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07 (\u0E40\u0E0A\u0E48\u0E19 \u0E15\u0E2D\u0E19\u0E01\u0E33\u0E25\u0E31\u0E07\u0E1E\u0E34\u0E21\u0E1E\u0E4C)</p>
         <p><strong>\u0E25\u0E2D\u0E07\u0E17\u0E33:</strong> \u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E43\u0E19\u0E0A\u0E48\u0E2D\u0E07\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E1E\u0E23\u0E35\u0E27\u0E34\u0E27\u0E41\u0E1A\u0E1A\u0E2A\u0E14\u0E46 \u0E41\u0E25\u0E30 Event \u0E17\u0E35\u0E48\u0E40\u0E01\u0E34\u0E14\u0E02\u0E36\u0E49\u0E19</p>`
    );
    const code = `const inputField = document.getElementById('demo-input');
const preview = document.getElementById('demo-preview');

inputField.addEventListener('input', (event) => {
    // Update live preview
    preview.textContent = event.target.value;
    
    // Log event and update inspector
});`;
    html += `<div class="lab-grid" style="margin-bottom: 40px;">`;
    html += `<div class="lab-column">`;
    html += createCodePanel(code, "javascript");
    html += `
        <div class="card event-inspector" style="margin-top: 20px;">
            <h3 class="card-title">\u0E1E\u0E23\u0E35\u0E27\u0E34\u0E27\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21</h3>
            <div style="font-size: 1.5rem; padding: 20px 0; min-height: 80px; word-break: break-all;" id="demo-preview">
                <!-- Preview updates here -->
            </div>
            <div style="font-size: 0.9rem; color: var(--text-muted);">event.target.value</div>
        </div>
    `;
    html += `</div>`;
    html += `<div class="lab-column">`;
    html += createDemoContainer(`
        <div style="width: 100%; max-width: 300px;">
            <label style="display: block; margin-bottom: 8px; font-weight: bold;">Input:</label>
            <input type="text" id="demo-input" placeholder="\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E2D\u0E30\u0E44\u0E23\u0E1A\u0E32\u0E07\u0E2D\u0E22\u0E48\u0E32\u0E07..." style="width: 100%; padding: 10px; font-size: 1rem; border: 1px solid var(--border-color); border-radius: 4px; background-color: var(--bg-primary); color: var(--text-primary);">
        </div>
    `);
    html += createEventConsole("input-console");
    html += createEventInspector("input-inspector");
    html += `</div>`;
    html += `</div></section>`;
    return html;
  }
  function initInputEvents() {
    const inputField = document.getElementById("demo-input");
    const preview = document.getElementById("demo-preview");
    if (inputField && preview) {
      inputField.addEventListener("input", (e) => {
        preview.textContent = e.target.value || "\xA0";
        logEvent("input-console", "input");
        updateInspector("input-inspector", e);
      });
    }
  }
  var init_input = __esm({
    "pages/input.js"() {
      init_ui();
    }
  });

  // pages/focus.js
  function renderFocusEvents() {
    let html = "";
    html += createPageTitle("Focus & Blur Events", "\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E27\u0E34\u0E18\u0E35\u0E15\u0E23\u0E27\u0E08\u0E08\u0E31\u0E1A\u0E40\u0E21\u0E37\u0E48\u0E2D Element \u0E16\u0E39\u0E01\u0E40\u0E25\u0E37\u0E2D\u0E01 (Focus) \u0E2B\u0E23\u0E37\u0E2D\u0E16\u0E39\u0E01\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01 (Blur)");
    html += `<section class="lesson-section">`;
    html += createExplanationPanel(
      "focus & blur",
      `<p><strong>\u0E2B\u0E21\u0E27\u0E14\u0E2B\u0E21\u0E39\u0E48:</strong> Focus</p>
         <p><strong>\u0E04\u0E37\u0E2D\u0E2D\u0E30\u0E44\u0E23?</strong> <code>focus</code> \u0E08\u0E30\u0E17\u0E33\u0E07\u0E32\u0E19\u0E40\u0E21\u0E37\u0E48\u0E2D Element \u0E16\u0E39\u0E01\u0E40\u0E25\u0E37\u0E2D\u0E01 (\u0E40\u0E0A\u0E48\u0E19 \u0E01\u0E32\u0E23\u0E04\u0E25\u0E34\u0E01\u0E2B\u0E23\u0E37\u0E2D\u0E01\u0E14\u0E1B\u0E38\u0E48\u0E21 Tab \u0E21\u0E32\u0E17\u0E35\u0E48\u0E0A\u0E48\u0E2D\u0E07\u0E19\u0E31\u0E49\u0E19) \u0E2A\u0E48\u0E27\u0E19 <code>blur</code> \u0E08\u0E30\u0E17\u0E33\u0E07\u0E32\u0E19\u0E40\u0E21\u0E37\u0E48\u0E2D Element \u0E19\u0E31\u0E49\u0E19\u0E2A\u0E39\u0E0D\u0E40\u0E2A\u0E35\u0E22\u0E01\u0E32\u0E23 Focus (\u0E40\u0E0A\u0E48\u0E19 \u0E04\u0E25\u0E34\u0E01\u0E44\u0E1B\u0E17\u0E35\u0E48\u0E2D\u0E37\u0E48\u0E19)</p>
         <p><strong>\u0E25\u0E2D\u0E07\u0E17\u0E33:</strong> \u0E04\u0E25\u0E34\u0E01\u0E43\u0E19\u0E0A\u0E48\u0E2D\u0E07\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07 \u0E41\u0E25\u0E49\u0E27\u0E04\u0E25\u0E34\u0E01\u0E2D\u0E2D\u0E01\u0E44\u0E1B\u0E17\u0E35\u0E48\u0E2D\u0E37\u0E48\u0E19 (\u0E2B\u0E23\u0E37\u0E2D\u0E01\u0E14\u0E1B\u0E38\u0E48\u0E21 Tab) \u0E41\u0E25\u0E30\u0E25\u0E2D\u0E07\u0E1B\u0E25\u0E48\u0E2D\u0E22\u0E0A\u0E48\u0E2D\u0E07\u0E27\u0E48\u0E32\u0E07\u0E44\u0E27\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E01\u0E34\u0E14 blur</p>`
    );
    const code = `const fnInput = document.getElementById('first-name');
const lnInput = document.getElementById('last-name');
const msg = document.getElementById('focus-msg');

function handleFocus(event) {
    // Log focus
    event.target.style.borderColor = 'blue';
}

function handleBlur(event) {
    // Log blur
    event.target.style.borderColor = '';
    
    // Empty field demonstration
    if (event.target.value.trim() === '') {
        const fieldName = event.target.getAttribute('placeholder');
        msg.textContent = \`your \${fieldName} is empty\`;
    } else {
        msg.textContent = '';
    }
}

fnInput.addEventListener('focus', handleFocus);
fnInput.addEventListener('blur', handleBlur);
// same for last name`;
    html += `<div class="lab-grid" style="margin-bottom: 40px;">`;
    html += `<div class="lab-column">`;
    html += createCodePanel(code, "javascript");
    html += `
        <div class="card event-inspector" style="margin-top: 20px; text-align: center;">
            <h3 class="card-title">\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19</h3>
            <div id="focus-msg" style="color: var(--danger-color); font-weight: bold; min-height: 24px; margin-top: 10px;"></div>
        </div>
    `;
    html += `</div>`;
    html += `<div class="lab-column">`;
    html += createDemoContainer(`
        <div style="width: 100%; max-width: 300px; display: flex; flex-direction: column; gap: 15px;">
            <div>
                <label style="display: block; margin-bottom: 8px; font-weight: bold;">\u0E0A\u0E37\u0E48\u0E2D\u0E41\u0E23\u0E01</label>
                <input type="text" id="first-name" placeholder="\u0E0A\u0E37\u0E48\u0E2D\u0E41\u0E23\u0E01" style="width: 100%; padding: 10px; font-size: 1rem; border: 2px solid var(--border-color); border-radius: 4px; background-color: var(--bg-primary); color: var(--text-primary); outline: none; transition: border-color 0.2s;">
            </div>
            <div>
                <label style="display: block; margin-bottom: 8px; font-weight: bold;">\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25</label>
                <input type="text" id="last-name" placeholder="\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25" style="width: 100%; padding: 10px; font-size: 1rem; border: 2px solid var(--border-color); border-radius: 4px; background-color: var(--bg-primary); color: var(--text-primary); outline: none; transition: border-color 0.2s;">
            </div>
        </div>
    `);
    html += createEventConsole("focus-console");
    html += createEventInspector("focus-inspector");
    html += `</div>`;
    html += `</div></section>`;
    return html;
  }
  function initFocusEvents() {
    const fnInput = document.getElementById("first-name");
    const lnInput = document.getElementById("last-name");
    const msg = document.getElementById("focus-msg");
    function handleFocus(e) {
      e.target.style.borderColor = "var(--accent-color)";
      logEvent("focus-console", "focus \u2713");
      updateInspector("focus-inspector", e);
    }
    function handleBlur(e) {
      e.target.style.borderColor = "var(--border-color)";
      logEvent("focus-console", "blur \u2713");
      updateInspector("focus-inspector", e);
      if (e.target.value.trim() === "") {
        const fieldName = e.target.getAttribute("placeholder");
        msg.textContent = `\u0E04\u0E38\u0E13\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E01\u0E23\u0E2D\u0E01 ${fieldName}`;
      } else {
        msg.textContent = "";
      }
    }
    if (fnInput && lnInput) {
      fnInput.addEventListener("focus", handleFocus);
      fnInput.addEventListener("blur", handleBlur);
      lnInput.addEventListener("focus", handleFocus);
      lnInput.addEventListener("blur", handleBlur);
    }
  }
  var init_focus = __esm({
    "pages/focus.js"() {
      init_ui();
    }
  });

  // pages/eventObject.js
  function renderEventObject() {
    let html = "";
    html += createPageTitle("Event Object", "\u0E40\u0E08\u0E32\u0E30\u0E25\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E15\u0E48\u0E32\u0E07\u0E46 \u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E2A\u0E48\u0E07\u0E21\u0E32\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E01\u0E31\u0E1A Event");
    html += `<section class="lesson-section" id="section-target">`;
    html += createExplanationPanel(
      "target vs currentTarget",
      `<p><strong>\u0E04\u0E37\u0E2D\u0E2D\u0E30\u0E44\u0E23?</strong> Property \u0E2A\u0E2D\u0E07\u0E15\u0E31\u0E27\u0E17\u0E35\u0E48\u0E1A\u0E2D\u0E01\u0E27\u0E48\u0E32 Event \u0E40\u0E01\u0E34\u0E14\u0E02\u0E36\u0E49\u0E19\u0E17\u0E35\u0E48\u0E44\u0E2B\u0E19 \u0E40\u0E17\u0E35\u0E22\u0E1A\u0E01\u0E31\u0E1A Event \u0E16\u0E39\u0E01\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48\u0E44\u0E2B\u0E19</p>
         <ul style="margin-top: 10px; margin-bottom: 10px; padding-left: 20px;">
            <li style="margin-bottom: 8px;"><strong>target:</strong> Element \u0E15\u0E49\u0E19\u0E40\u0E2B\u0E15\u0E38\u0E17\u0E35\u0E48\u0E2A\u0E23\u0E49\u0E32\u0E07 Event \u0E02\u0E36\u0E49\u0E19\u0E21\u0E32\u0E08\u0E23\u0E34\u0E07\u0E46</li>
            <li><strong>currentTarget:</strong> Element \u0E17\u0E35\u0E48 Event Listener \u0E01\u0E33\u0E25\u0E31\u0E07\u0E16\u0E39\u0E01\u0E40\u0E23\u0E35\u0E22\u0E01\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E2D\u0E22\u0E39\u0E48 (\u0E1C\u0E39\u0E01 Listener \u0E44\u0E27\u0E49\u0E17\u0E35\u0E48\u0E44\u0E2B\u0E19)</li>
         </ul>
         <p><strong>\u0E25\u0E2D\u0E07\u0E17\u0E33:</strong> \u0E04\u0E25\u0E34\u0E01\u0E1B\u0E38\u0E48\u0E21 "OK" \u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E02\u0E49\u0E32\u0E07\u0E43\u0E19\u0E01\u0E25\u0E48\u0E2D\u0E07 DIV \u0E2A\u0E31\u0E07\u0E40\u0E01\u0E15\u0E27\u0E48\u0E32\u0E40\u0E23\u0E32\u0E1C\u0E39\u0E01 Listener \u0E44\u0E27\u0E49\u0E17\u0E35\u0E48 DIV \u0E02\u0E49\u0E32\u0E07\u0E19\u0E2D\u0E01 \u0E41\u0E15\u0E48 Event \u0E21\u0E35\u0E08\u0E38\u0E14\u0E01\u0E33\u0E40\u0E19\u0E34\u0E14\u0E08\u0E32\u0E01 BUTTON \u0E02\u0E49\u0E32\u0E07\u0E43\u0E19</p>`
    );
    const targetCode = `const outerDiv = document.getElementById('box');
const innerButton = document.getElementById('ok');

outerDiv.addEventListener('click', (event) => {
    console.log(event.target);        // Element \u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E04\u0E25\u0E34\u0E01 (\u0E1B\u0E38\u0E48\u0E21\u0E02\u0E49\u0E32\u0E07\u0E43\u0E19)
    console.log(event.currentTarget); // Element \u0E17\u0E35\u0E48\u0E1C\u0E39\u0E01 Listener \u0E44\u0E27\u0E49 (\u0E01\u0E25\u0E48\u0E2D\u0E07\u0E02\u0E49\u0E32\u0E07\u0E19\u0E2D\u0E01)
});`;
    html += `<div class="lab-grid" style="margin-bottom: 40px;">`;
    html += `<div class="lab-column">`;
    html += createCodePanel(targetCode, "javascript");
    html += createExplanationPanel(
      "\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E02\u0E2D\u0E07 Event",
      `<p>\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2D\u0E37\u0E48\u0E19\u0E46 \u0E43\u0E19 Event Object \u0E17\u0E35\u0E48\u0E19\u0E48\u0E32\u0E2A\u0E19\u0E43\u0E08:</p>
         <ul style="margin-top: 10px; padding-left: 20px;">
            <li style="margin-bottom: 8px;"><strong>eventPhase:</strong> \u0E1A\u0E2D\u0E01\u0E27\u0E48\u0E32 Event \u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\u0E44\u0E2B\u0E19 (1 Capturing, 2 Target, 3 Bubbling)</li>
            <li style="margin-bottom: 8px;"><strong>bubbles:</strong> Event \u0E19\u0E35\u0E49\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E25\u0E2D\u0E22\u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B\u0E2B\u0E32 Element \u0E41\u0E21\u0E48 (Bubbling) \u0E44\u0E14\u0E49\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48</li>
            <li style="margin-bottom: 8px;"><strong>cancelable:</strong> Event \u0E19\u0E35\u0E49\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E16\u0E39\u0E01\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E14\u0E49\u0E27\u0E22 <code>preventDefault()</code> \u0E44\u0E14\u0E49\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48</li>
            <li><strong>defaultPrevented:</strong> Event \u0E19\u0E35\u0E49\u0E16\u0E39\u0E01\u0E40\u0E23\u0E35\u0E22\u0E01 <code>preventDefault()</code> \u0E44\u0E1B\u0E41\u0E25\u0E49\u0E27\u0E2B\u0E23\u0E37\u0E2D\u0E22\u0E31\u0E07</li>
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
    html += createEventInspector("eo-inspector");
    html += createEventConsole("eo-console");
    html += `</div>`;
    html += `</div></section>`;
    return html;
  }
  function initEventObject() {
    const box = document.getElementById("box");
    const okBtn = document.getElementById("ok");
    if (box && okBtn) {
      box.addEventListener("click", (e) => {
        logEvent("eo-console", "click");
        updateInspector("eo-inspector", e);
        box.style.borderColor = "var(--border-color)";
        box.style.backgroundColor = "var(--bg-secondary)";
        okBtn.style.borderColor = "var(--border-color)";
        okBtn.style.backgroundColor = "var(--bg-tertiary)";
        box.style.borderColor = "var(--accent-color)";
        box.style.backgroundColor = "rgba(51, 154, 240, 0.1)";
        if (e.target === okBtn) {
          okBtn.style.borderColor = "var(--success-color)";
          okBtn.style.backgroundColor = "rgba(64, 192, 87, 0.1)";
        } else if (e.target === box) {
          box.style.borderColor = "var(--success-color)";
          box.style.backgroundColor = "rgba(64, 192, 87, 0.2)";
        }
        setTimeout(() => {
          box.style.borderColor = "var(--border-color)";
          box.style.backgroundColor = "var(--bg-secondary)";
          okBtn.style.borderColor = "var(--border-color)";
          okBtn.style.backgroundColor = "var(--bg-tertiary)";
        }, 1200);
      });
    }
  }
  var init_eventObject = __esm({
    "pages/eventObject.js"() {
      init_ui();
    }
  });

  // pages/propagation.js
  function renderPropagationEvents() {
    let html = "";
    html += createPageTitle("Event Propagation", "\u0E40\u0E2B\u0E47\u0E19\u0E20\u0E32\u0E1E\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19\u0E02\u0E2D\u0E07 Capturing, Target \u0E41\u0E25\u0E30 Bubbling");
    html += `<section class="lesson-section">`;
    html += `<div class="lab-grid" style="margin-bottom: 40px;">`;
    html += `<div class="lab-column">`;
    html += createExplanationPanel(
      "3 \u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\u0E01\u0E32\u0E23\u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07\u0E02\u0E2D\u0E07 Event",
      `<p>\u0E40\u0E21\u0E37\u0E48\u0E2D Event \u0E40\u0E01\u0E34\u0E14\u0E02\u0E36\u0E49\u0E19\u0E43\u0E19 DOM \u0E21\u0E31\u0E19\u0E08\u0E30\u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07\u0E1C\u0E48\u0E32\u0E19 3 \u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19 (Phases) \u0E40\u0E2A\u0E21\u0E2D:</p>
         <ol style="margin-top: 10px; margin-bottom: 10px; padding-left: 20px;">
            <li style="margin-bottom: 8px;"><strong>Capturing Phase:</strong> Event \u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07\u0E08\u0E32\u0E01\u0E14\u0E49\u0E32\u0E19\u0E19\u0E2D\u0E01 (Document) \u0E17\u0E30\u0E25\u0E38\u0E25\u0E07\u0E44\u0E1B\u0E2B\u0E32 Element \u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E01\u0E23\u0E30\u0E17\u0E33</li>
            <li style="margin-bottom: 8px;"><strong>Target Phase:</strong> Event \u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07\u0E44\u0E1B\u0E16\u0E36\u0E07 Element \u0E17\u0E35\u0E48\u0E40\u0E1B\u0E47\u0E19\u0E15\u0E49\u0E19\u0E40\u0E2B\u0E15\u0E38 (Target)</li>
            <li><strong>Bubbling Phase:</strong> Event \u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07\u0E08\u0E32\u0E01 Element \u0E15\u0E49\u0E19\u0E40\u0E2B\u0E15\u0E38 \u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A\u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B\u0E2B\u0E32\u0E14\u0E49\u0E32\u0E19\u0E19\u0E2D\u0E01 (Document)</li>
         </ol>`
    );
    html += createExplanationPanel(
      "\u0E41\u0E1C\u0E07\u0E04\u0E27\u0E1A\u0E04\u0E38\u0E21 Listener",
      `<p>\u0E25\u0E2D\u0E07\u0E40\u0E1B\u0E34\u0E14-\u0E1B\u0E34\u0E14 Event Listener \u0E02\u0E2D\u0E07\u0E41\u0E15\u0E48\u0E25\u0E30 Element \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E27\u0E48\u0E32\u0E42\u0E04\u0E49\u0E14\u0E1A\u0E23\u0E23\u0E17\u0E31\u0E14\u0E44\u0E2B\u0E19\u0E08\u0E30\u0E16\u0E39\u0E01\u0E40\u0E23\u0E35\u0E22\u0E01\u0E1A\u0E49\u0E32\u0E07</p>
         <div style="display: grid; grid-template-columns: 100px 1fr 1fr; gap: 10px; align-items: center; text-align: center; font-family: monospace; font-size: 0.9rem; margin-top: 15px;">
            <div style="font-weight: bold; text-align: left;">Node</div>
            <div style="font-weight: bold; color: var(--accent-color);">Capturing</div>
            <div style="font-weight: bold; color: var(--danger-color);">Bubbling</div>
            
            <div style="text-align: left;">Document</div>
            <div><input type="checkbox" id="chk-doc-cap" checked></div>
            <div><input type="checkbox" id="chk-doc-bub" checked></div>
            
            <div style="text-align: left;">HTML</div>
            <div><input type="checkbox" id="chk-html-cap" checked></div>
            <div><input type="checkbox" id="chk-html-bub" checked></div>
            
            <div style="text-align: left;">BODY</div>
            <div><input type="checkbox" id="chk-body-cap" checked></div>
            <div><input type="checkbox" id="chk-body-bub" checked></div>
            
            <div style="text-align: left;">DIV</div>
            <div><input type="checkbox" id="chk-div-cap" checked></div>
            <div><input type="checkbox" id="chk-div-bub" checked></div>
            
            <div style="text-align: left;">BUTTON</div>
            <div style="grid-column: span 2;">
                <input type="checkbox" id="chk-btn-target" checked> Target Phase
            </div>
         </div>
         
         <div style="display: flex; gap: 10px; margin-top: 20px;">
            <button id="preset-cap" class="btn" style="flex: 1; padding: 10px; background: rgba(51, 154, 240, 0.1); color: var(--accent-color); border: 2px solid var(--accent-color); border-radius: 4px; cursor: pointer; font-weight: bold;">\u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E40\u0E09\u0E1E\u0E32\u0E30 Capturing</button>
            <button id="preset-bub" class="btn" style="flex: 1; padding: 10px; background: rgba(250, 82, 82, 0.1); color: var(--danger-color); border: 2px solid var(--danger-color); border-radius: 4px; cursor: pointer; font-weight: bold;">\u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E40\u0E09\u0E1E\u0E32\u0E30 Bubbling</button>
         </div>`
    );
    html += `</div>`;
    html += `<div class="lab-column">`;
    html += createDemoContainer(`
        <div style="width: 100%;">
            <!-- Simulated DOM Tree -->
            <div id="sim-document" class="prop-box" data-name="Document" style="padding: 20px; border: 2px solid var(--border-color); background-color: var(--bg-primary); border-radius: 8px; position: relative;">
                <span class="prop-label">Document</span>
                <div id="sim-html" class="prop-box" data-name="HTML" style="padding: 20px; border: 2px solid var(--border-color); background-color: var(--bg-secondary); border-radius: 8px; margin-top: 15px; position: relative;">
                    <span class="prop-label">HTML</span>
                    <div id="sim-body" class="prop-box" data-name="BODY" style="padding: 20px; border: 2px solid var(--border-color); background-color: var(--bg-tertiary); border-radius: 8px; margin-top: 15px; position: relative;">
                        <span class="prop-label">BODY</span>
                        <div id="sim-div" class="prop-box" data-name="DIV" style="padding: 20px; border: 2px solid var(--border-color); background-color: var(--bg-primary); border-radius: 8px; margin-top: 15px; position: relative;">
                            <span class="prop-label">DIV</span>
                            <div style="text-align: center; margin-top: 25px;">
                                <button id="sim-button" class="prop-box" data-name="BUTTON" style="padding: 15px 30px; font-size: 1.1rem; cursor: pointer; border-radius: 4px; border: 3px solid var(--border-color); background-color: var(--text-secondary); color: white; font-weight: bold; position: relative;">
                                    BUTTON
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `);
    html += `
        <div class="card event-console" style="margin-top: 20px; height: auto; min-height: 250px;">
            <div class="console-header">
                <span>\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E01\u0E34\u0E14 Event \u0E08\u0E23\u0E34\u0E07 (TIMELINE)</span>
                <button class="clear-log-btn" id="clear-prop-log">\u0E25\u0E49\u0E32\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25</button>
            </div>
            <div class="console-logs" id="prop-logs" style="font-family: monospace; max-height: 300px; overflow-y: auto;">
                <!-- Logs populated via JS -->
            </div>
        </div>
    `;
    html += `</div>`;
    html += `</div></section>`;
    const styles = `
    <style>
        .prop-label {
            position: absolute;
            top: 5px;
            left: 10px;
            font-size: 0.75rem;
            font-family: monospace;
            color: var(--text-muted);
            font-weight: bold;
        }
        .prop-box {
            transition: all 0.3s;
        }
        .prop-box.highlight-cap {
            background-color: rgba(51, 154, 240, 0.2) !important;
            border-color: var(--accent-color) !important;
            box-shadow: 0 0 10px rgba(51, 154, 240, 0.5);
        }
        .prop-box.highlight-target {
            background-color: rgba(64, 192, 87, 0.6) !important;
            border-color: var(--success-color) !important;
            box-shadow: 0 0 20px rgba(64, 192, 87, 0.8);
            transform: scale(1.05);
            color: white !important;
        }
        .prop-box.highlight-target::after {
            content: "TARGET";
            position: absolute;
            top: -15px;
            right: -15px;
            background: var(--success-color);
            color: white;
            font-size: 0.7rem;
            padding: 4px 8px;
            border-radius: 12px;
            font-weight: bold;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .prop-box.highlight-bub {
            background-color: rgba(250, 82, 82, 0.2) !important;
            border-color: var(--danger-color) !important;
            box-shadow: 0 0 10px rgba(250, 82, 82, 0.5);
        }
        .timeline-section {
            margin-top: 10px;
            margin-bottom: 5px;
            font-weight: bold;
            color: var(--text-secondary);
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 3px;
            letter-spacing: 0.05em;
        }
        .timeline-entry {
            display: flex;
            padding: 4px 10px;
            gap: 15px;
            border-radius: 4px;
            transition: background-color 0.2s;
        }
        .timeline-entry .num {
            color: var(--accent-color);
            font-weight: bold;
            width: 20px;
        }
        .timeline-entry .node {
            color: var(--text-primary);
        }
    </style>
    `;
    return styles + html;
  }
  function initPropagationEvents() {
    const nodes = {
      "doc": document.getElementById("sim-document"),
      "html": document.getElementById("sim-html"),
      "body": document.getElementById("sim-body"),
      "div": document.getElementById("sim-div"),
      "btn": document.getElementById("sim-button")
    };
    const logsContainer = document.getElementById("prop-logs");
    const clearBtn = document.getElementById("clear-prop-log");
    const chk = {
      "doc": { cap: document.getElementById("chk-doc-cap"), bub: document.getElementById("chk-doc-bub") },
      "html": { cap: document.getElementById("chk-html-cap"), bub: document.getElementById("chk-html-bub") },
      "body": { cap: document.getElementById("chk-body-cap"), bub: document.getElementById("chk-body-bub") },
      "div": { cap: document.getElementById("chk-div-cap"), bub: document.getElementById("chk-div-bub") },
      "btn": { target: document.getElementById("chk-btn-target") }
    };
    let eventQueue = [];
    let isAnimating = false;
    let stepCount = 0;
    clearBtn.addEventListener("click", () => {
      logsContainer.innerHTML = "";
      stepCount = 0;
    });
    Object.keys(nodes).forEach((key) => {
      const node = nodes[key];
      node.addEventListener("click", (e) => {
        if (e.target !== nodes["btn"]) return;
        if (key !== "btn" && chk[key].cap.checked) {
          eventQueue.push({ node, phase: "capturing", name: node.getAttribute("data-name") });
        }
      }, true);
      if (key === "btn") {
        node.addEventListener("click", (e) => {
          if (chk["btn"].target.checked) {
            eventQueue.push({ node, phase: "target", name: node.getAttribute("data-name") });
          }
        });
      }
      node.addEventListener("click", (e) => {
        if (e.target !== nodes["btn"]) return;
        if (key !== "btn" && chk[key].bub.checked) {
          eventQueue.push({ node, phase: "bubbling", name: node.getAttribute("data-name") });
        }
      }, false);
    });
    nodes["btn"].addEventListener("click", (e) => {
      if (isAnimating) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      setTimeout(() => {
        playAnimation();
      }, 50);
    });
    function playAnimation() {
      if (eventQueue.length === 0) return;
      isAnimating = true;
      Object.values(nodes).forEach((n) => {
        n.classList.remove("highlight-cap", "highlight-target", "highlight-bub");
      });
      const logBlock = document.createElement("div");
      logBlock.style.marginBottom = "20px";
      logsContainer.prepend(logBlock);
      let currentPhase = null;
      let index = 0;
      function nextFrame() {
        if (index > 0) {
          const prev = eventQueue[index - 1];
          prev.node.classList.remove(`highlight-${prev.phase === "capturing" ? "cap" : prev.phase === "bubbling" ? "bub" : "target"}`);
        }
        if (index >= eventQueue.length) {
          isAnimating = false;
          eventQueue = [];
          return;
        }
        const curr = eventQueue[index];
        const phaseClass = curr.phase === "capturing" ? "cap" : curr.phase === "bubbling" ? "bub" : "target";
        curr.node.classList.add(`highlight-${phaseClass}`);
        if (currentPhase !== curr.phase) {
          currentPhase = curr.phase;
          const header = document.createElement("div");
          header.className = "timeline-section";
          header.textContent = curr.phase.toUpperCase();
          logBlock.appendChild(header);
        }
        stepCount++;
        const entry = document.createElement("div");
        entry.className = "timeline-entry";
        entry.innerHTML = `<span class="num">${stepCount}</span><span class="node">${curr.name.toLowerCase()}</span>`;
        entry.style.backgroundColor = curr.phase === "capturing" ? "rgba(51, 154, 240, 0.1)" : curr.phase === "target" ? "rgba(64, 192, 87, 0.2)" : "rgba(250, 82, 82, 0.1)";
        logBlock.appendChild(entry);
        index++;
        setTimeout(nextFrame, 800);
      }
      nextFrame();
    }
    document.getElementById("preset-cap").addEventListener("click", () => {
      Object.keys(chk).forEach((k) => {
        if (chk[k].cap) chk[k].cap.checked = true;
        if (chk[k].bub) chk[k].bub.checked = false;
      });
      chk["btn"].target.checked = true;
      if (!isAnimating) nodes["btn"].click();
    });
    document.getElementById("preset-bub").addEventListener("click", () => {
      Object.keys(chk).forEach((k) => {
        if (chk[k].cap) chk[k].cap.checked = false;
        if (chk[k].bub) chk[k].bub.checked = true;
      });
      chk["btn"].target.checked = true;
      if (!isAnimating) nodes["btn"].click();
    });
  }
  var init_propagation = __esm({
    "pages/propagation.js"() {
      init_ui();
    }
  });

  // pages/methods.js
  function renderPreventDefault() {
    let html = "";
    html += createPageTitle("preventDefault()", "\u0E2B\u0E22\u0E38\u0E14\u0E1E\u0E24\u0E15\u0E34\u0E01\u0E23\u0E23\u0E21\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E02\u0E2D\u0E07 Browser");
    html += `<section class="lesson-section">`;
    html += createExplanationPanel(
      "\u0E1E\u0E24\u0E15\u0E34\u0E01\u0E23\u0E23\u0E21\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E02\u0E2D\u0E07\u0E25\u0E34\u0E07\u0E01\u0E4C (Link)",
      `<p><strong>\u0E04\u0E37\u0E2D\u0E2D\u0E30\u0E44\u0E23?</strong> Browser \u0E21\u0E35\u0E1E\u0E24\u0E15\u0E34\u0E01\u0E23\u0E23\u0E21\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E1A\u0E32\u0E07\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E01\u0E34\u0E14 Event \u0E40\u0E0A\u0E48\u0E19 \u0E04\u0E25\u0E34\u0E01\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E41\u0E25\u0E49\u0E27\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E2B\u0E19\u0E49\u0E32</p>
         <p><strong>\u0E25\u0E2D\u0E07\u0E17\u0E33:</strong> \u0E25\u0E2D\u0E07\u0E15\u0E34\u0E4A\u0E01\u0E40\u0E1B\u0E34\u0E14\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07\u0E41\u0E25\u0E49\u0E27\u0E04\u0E25\u0E34\u0E01\u0E25\u0E34\u0E07\u0E01\u0E4C \u0E2A\u0E31\u0E07\u0E40\u0E01\u0E15\u0E27\u0E48\u0E32\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E23\u0E35\u0E22\u0E01 <code>event.preventDefault()</code> \u0E01\u0E32\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E08\u0E30\u0E16\u0E39\u0E01\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01 \u0E41\u0E15\u0E48\u0E42\u0E04\u0E49\u0E14 JavaScript \u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13 <strong>\u0E22\u0E31\u0E07\u0E04\u0E07\u0E17\u0E33\u0E07\u0E32\u0E19\u0E15\u0E48\u0E2D\u0E44\u0E1B</strong></p>`
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
    html += createCodePanel(linkCode, "javascript");
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
                \u0E44\u0E1B\u0E22\u0E31\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07
            </a>
            <div id="link-handler-msg" style="margin-top: 15px; min-height: 24px; font-weight: bold; color: var(--success-color);"></div>
        </div>
    `);
    html += createEventConsole("pd-console");
    html += `</div>`;
    html += `</div></section>`;
    html += `<section class="lesson-section">`;
    html += createExplanationPanel(
      "\u0E1E\u0E24\u0E15\u0E34\u0E01\u0E23\u0E23\u0E21\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E02\u0E2D\u0E07 Form",
      `<p>\u0E2D\u0E35\u0E01\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E17\u0E35\u0E48\u0E1E\u0E1A\u0E1A\u0E48\u0E2D\u0E22\u0E04\u0E37\u0E2D\u0E01\u0E32\u0E23\u0E2A\u0E48\u0E07 Form (Submit) \u0E0B\u0E36\u0E48\u0E07\u0E1B\u0E01\u0E15\u0E34\u0E41\u0E25\u0E49\u0E27 Browser \u0E08\u0E30\u0E23\u0E35\u0E40\u0E1F\u0E23\u0E0A\u0E2B\u0E19\u0E49\u0E32\u0E40\u0E27\u0E47\u0E1A</p>
         <p><strong>\u0E25\u0E2D\u0E07\u0E17\u0E33:</strong> \u0E25\u0E2D\u0E07\u0E01\u0E14\u0E2A\u0E48\u0E07 Form \u0E41\u0E1A\u0E1A\u0E1B\u0E01\u0E15\u0E34 (\u0E08\u0E30\u0E40\u0E1B\u0E34\u0E14\u0E2B\u0E19\u0E49\u0E32\u0E43\u0E2B\u0E21\u0E48) \u0E08\u0E32\u0E01\u0E19\u0E31\u0E49\u0E19\u0E15\u0E34\u0E4A\u0E01\u0E40\u0E1B\u0E34\u0E14 <code>preventDefault()</code> \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2B\u0E22\u0E38\u0E14 Browser \u0E44\u0E21\u0E48\u0E43\u0E2B\u0E49\u0E2A\u0E48\u0E07 Form \u0E41\u0E25\u0E30\u0E43\u0E2B\u0E49 JavaScript \u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E41\u0E17\u0E19</p>`
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
    html += createCodePanel(formCode, "javascript");
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
    html += createEventConsole("form-console");
    html += `</div>`;
    html += `</div></section>`;
    return html;
  }
  function renderStopPropagation() {
    let html = "";
    html += createPageTitle("stopPropagation()", "\u0E2B\u0E22\u0E38\u0E14\u0E01\u0E32\u0E23\u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07\u0E02\u0E2D\u0E07 Event \u0E44\u0E21\u0E48\u0E43\u0E2B\u0E49\u0E2A\u0E48\u0E07\u0E15\u0E48\u0E2D\u0E43\u0E19 DOM Tree");
    html += `<section class="lesson-section">`;
    html += createExplanationPanel(
      "\u0E2B\u0E22\u0E38\u0E14\u0E01\u0E32\u0E23\u0E2A\u0E48\u0E07\u0E15\u0E48\u0E2D Event",
      `<p><strong>\u0E04\u0E37\u0E2D\u0E2D\u0E30\u0E44\u0E23?</strong> \u0E43\u0E0A\u0E49\u0E2B\u0E22\u0E38\u0E14\u0E01\u0E32\u0E23\u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07\u0E02\u0E2D\u0E07 Event \u0E44\u0E1B\u0E22\u0E31\u0E07 Element \u0E2D\u0E37\u0E48\u0E19\u0E43\u0E19 Event Propagation</p>
         <p><strong>\u0E25\u0E2D\u0E07\u0E17\u0E33:</strong> \u0E04\u0E25\u0E34\u0E01\u0E1B\u0E38\u0E48\u0E21\u0E14\u0E49\u0E32\u0E19\u0E43\u0E19\u0E41\u0E25\u0E49\u0E27\u0E14\u0E39\u0E27\u0E48\u0E32 Event \u0E25\u0E2D\u0E22\u0E44\u0E1B\u0E2B\u0E32 DIV \u0E14\u0E49\u0E32\u0E19\u0E19\u0E2D\u0E01 (Bubbling) \u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48 \u0E08\u0E32\u0E01\u0E19\u0E31\u0E49\u0E19\u0E25\u0E2D\u0E07\u0E40\u0E1B\u0E34\u0E14 <code>stopPropagation()</code> \u0E08\u0E30\u0E1E\u0E1A\u0E27\u0E48\u0E32 Event \u0E16\u0E39\u0E01\u0E2B\u0E22\u0E38\u0E14\u0E44\u0E27\u0E49\u0E41\u0E04\u0E48\u0E19\u0E31\u0E49\u0E19</p>`
    );
    html += `<div class="lab-grid" style="margin-bottom: 40px;">`;
    html += `<div class="lab-column">`;
    const spCode = `const outerDiv = document.getElementById('sp-box');
const innerBtn = document.getElementById('sp-btn');
const toggle = document.getElementById('sp-toggle');

outerDiv.addEventListener('click', (event) => {
    console.log('\u0E04\u0E25\u0E34\u0E01\u0E42\u0E14\u0E19 Box');
});

innerBtn.addEventListener('click', (event) => {
    console.log('\u0E04\u0E25\u0E34\u0E01\u0E42\u0E14\u0E19 Button');
    if (toggle.checked) {
        event.stopPropagation();
        // Box does not receive the event
    }
});`;
    html += createCodePanel(spCode, "javascript");
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
                <div style="position: absolute; top: 10px; right: 10px; font-size: 0.8rem; font-weight: bold; color: var(--danger-color); display: none; padding: 4px 8px; background: rgba(250, 82, 82, 0.1); border: 1px solid var(--danger-color); border-radius: 4px;" id="sp-indicator">\u{1F6D1} \u0E01\u0E32\u0E23\u0E2A\u0E48\u0E07\u0E15\u0E48\u0E2D Event \u0E16\u0E39\u0E01\u0E2B\u0E22\u0E38\u0E14</div>
                <button id="sp-btn" class="prop-box" data-name="BUTTON" style="padding: 15px 40px; font-size: 1.2rem; cursor: pointer; border-radius: 4px; border: 3px solid var(--border-color); background-color: var(--text-secondary); color: white; font-weight: bold; transition: all 0.3s;">
                    OK
                </button>
            </div>
        </div>
    `);
    html += createEventConsole("sp-console");
    html += `</div>`;
    html += `</div></section>`;
    html += `<section class="lesson-section">`;
    html += `<div class="lab-grid" style="margin-bottom: 40px;">`;
    html += `<div class="lab-column">`;
    html += createExplanationPanel(
      "\u0E02\u0E49\u0E2D\u0E41\u0E15\u0E01\u0E15\u0E48\u0E32\u0E07\u0E17\u0E35\u0E48\u0E2A\u0E33\u0E04\u0E31\u0E0D",
      `<div style="font-size: 1.1rem; line-height: 1.8;">
            <p><strong>preventDefault()</strong><br>
            <span style="color: var(--accent-color); font-weight: bold;">= \u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E1E\u0E24\u0E15\u0E34\u0E01\u0E23\u0E23\u0E21\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E02\u0E2D\u0E07 Browser</span></p>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <p><strong>stopPropagation()</strong><br>
            <span style="color: var(--danger-color); font-weight: bold;">= \u0E2B\u0E22\u0E38\u0E14\u0E01\u0E32\u0E23\u0E2A\u0E48\u0E07\u0E15\u0E48\u0E2D Event \u0E44\u0E1B\u0E22\u0E31\u0E07 Element \u0E2D\u0E37\u0E48\u0E19\u0E46</span></p>
        </div>`
    );
    html += `
        <div class="card event-inspector">
            <h3 class="card-title" style="color: var(--danger-color);">\u0E2D\u0E22\u0E48\u0E32\u0E08\u0E33\u0E2A\u0E25\u0E31\u0E1A\u0E01\u0E31\u0E19\u0E40\u0E14\u0E47\u0E14\u0E02\u0E32\u0E14!</h3>
            <ul style="padding-left: 20px; color: var(--text-primary); line-height: 1.8;">
                <li style="margin-bottom: 10px;"><code>preventDefault</code> <strong>\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49</strong> \u0E2A\u0E31\u0E48\u0E07\u0E2B\u0E22\u0E38\u0E14 Propagation</li>
                <li><code>stopPropagation</code> <strong>\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49</strong> \u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E1E\u0E24\u0E15\u0E34\u0E01\u0E23\u0E23\u0E21\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E02\u0E2D\u0E07 Browser</li>
            </ul>
        </div>
    `;
    html += `</div>`;
    html += `<div class="lab-column">`;
    html += createExplanationPanel(
      "Interactive Comparison",
      `<p>\u0E25\u0E2D\u0E07\u0E40\u0E1B\u0E34\u0E14-\u0E1B\u0E34\u0E14 \u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E17\u0E31\u0E49\u0E07\u0E2A\u0E2D\u0E07\u0E41\u0E22\u0E01\u0E01\u0E31\u0E19 \u0E41\u0E25\u0E49\u0E27\u0E04\u0E25\u0E34\u0E01\u0E17\u0E35\u0E48 Checkbox \u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07 \u0E2A\u0E31\u0E07\u0E40\u0E01\u0E15\u0E27\u0E48\u0E32\u0E1E\u0E24\u0E15\u0E34\u0E01\u0E23\u0E23\u0E21\u0E01\u0E32\u0E23\u0E15\u0E34\u0E4A\u0E01\u0E16\u0E39\u0E01 (Default Action) \u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E01\u0E23\u0E30\u0E08\u0E32\u0E22\u0E44\u0E1B\u0E22\u0E31\u0E07 DIV (Bubbling) \u0E19\u0E31\u0E49\u0E19\u0E41\u0E22\u0E01\u0E02\u0E32\u0E14\u0E08\u0E32\u0E01\u0E01\u0E31\u0E19</p>`
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
    html += createEventConsole("comp-console");
    html += `</div>`;
    html += `</div></section>`;
    return html;
  }
  function initPreventDefault() {
    const link = document.getElementById("demo-link");
    const pdToggle = document.getElementById("pd-toggle");
    const linkMsg = document.getElementById("link-handler-msg");
    if (link) {
      link.addEventListener("click", (e) => {
        logEvent("pd-console", "click event \u0E40\u0E23\u0E34\u0E48\u0E21\u0E17\u0E33\u0E07\u0E32\u0E19");
        if (pdToggle.checked) {
          e.preventDefault();
          logEvent("pd-console", "\u0E40\u0E23\u0E35\u0E22\u0E01 event.preventDefault()");
          logEvent("pd-console", "\u0E1E\u0E24\u0E15\u0E34\u0E01\u0E23\u0E23\u0E21\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E16\u0E39\u0E01\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01");
          linkMsg.textContent = "Handler executed \\u2713 (Navigation Blocked)";
        } else {
          logEvent("pd-console", "Browser \u0E17\u0E33\u0E1E\u0E24\u0E15\u0E34\u0E01\u0E23\u0E23\u0E21\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19");
          linkMsg.textContent = "Handler executed \\u2713 (Opening Tab...)";
        }
        setTimeout(() => {
          linkMsg.textContent = "";
        }, 2500);
      });
    }
    const form = document.getElementById("demo-form");
    const pdFormToggle = document.getElementById("pd-form-toggle");
    const formMsg = document.getElementById("form-handler-msg");
    if (form) {
      form.addEventListener("submit", (e) => {
        logEvent("form-console", "submit event \u0E40\u0E23\u0E34\u0E48\u0E21\u0E17\u0E33\u0E07\u0E32\u0E19");
        if (pdFormToggle.checked) {
          e.preventDefault();
          logEvent("form-console", "event.preventDefault() executed");
          logEvent("form-console", "\u0E01\u0E32\u0E23\u0E2A\u0E48\u0E07 Form \u0E02\u0E2D\u0E07 Browser \u0E16\u0E39\u0E01\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01");
          logEvent("form-console", "JavaScript \u0E40\u0E1B\u0E47\u0E19\u0E04\u0E19\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E41\u0E17\u0E19");
          formMsg.textContent = "JavaScript handles the data \\u2713";
        } else {
          logEvent("form-console", "Browser \u0E17\u0E33\u0E1E\u0E24\u0E15\u0E34\u0E01\u0E23\u0E23\u0E21\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E2A\u0E48\u0E07 Form");
          formMsg.textContent = "\u0E2A\u0E48\u0E07 Form \u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08! (\u0E01\u0E33\u0E25\u0E31\u0E07\u0E40\u0E1B\u0E34\u0E14\u0E2B\u0E19\u0E49\u0E32\u0E43\u0E2B\u0E21\u0E48)";
        }
        setTimeout(() => {
          formMsg.textContent = "";
        }, 2500);
      });
    }
  }
  function initStopPropagation() {
    const box = document.getElementById("sp-box");
    const btn = document.getElementById("sp-btn");
    const spToggle = document.getElementById("sp-toggle");
    const indicator = document.getElementById("sp-indicator");
    if (box && btn) {
      box.addEventListener("click", (e) => {
        logEvent("sp-console", "Box clicked");
        box.style.borderColor = "var(--success-color)";
        box.style.backgroundColor = "rgba(64, 192, 87, 0.1)";
        setTimeout(() => {
          box.style.borderColor = "var(--border-color)";
          box.style.backgroundColor = "var(--bg-primary)";
        }, 500);
      });
      btn.addEventListener("click", (e) => {
        logEvent("sp-console", "Button clicked");
        indicator.style.display = "none";
        if (spToggle.checked) {
          e.stopPropagation();
          logEvent("sp-console", "\u0E40\u0E23\u0E35\u0E22\u0E01 event.stopPropagation()");
          logEvent("sp-console", "Box \u0E08\u0E30\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A Event \u0E19\u0E35\u0E49");
          indicator.style.display = "block";
        }
      });
      spToggle.addEventListener("change", () => {
        if (!spToggle.checked) indicator.style.display = "none";
      });
    }
    const compBox = document.getElementById("comp-box");
    const compCheck = document.getElementById("comp-check");
    const optPd = document.getElementById("opt-pd");
    const optSp = document.getElementById("opt-sp");
    if (compBox && compCheck) {
      compBox.addEventListener("click", (e) => {
        if (e.target === optPd || e.target === optSp) return;
        logEvent("comp-console", "DIV \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A Event (\u0E08\u0E32\u0E01\u0E01\u0E32\u0E23 Bubbling)");
        compBox.style.borderColor = "var(--success-color)";
        setTimeout(() => {
          compBox.style.borderColor = "var(--border-color)";
        }, 500);
      });
      compCheck.addEventListener("click", (e) => {
        logEvent("comp-console", "\u0E04\u0E25\u0E34\u0E01\u0E17\u0E35\u0E48 Checkbox");
        if (optPd.checked) {
          e.preventDefault();
          logEvent("comp-console", "preventDefault: \u0E0A\u0E48\u0E2D\u0E07 Checkbox \u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E2A\u0E25\u0E31\u0E1A\u0E04\u0E48\u0E32");
        } else {
          logEvent("comp-console", "Default action: \u0E0A\u0E48\u0E2D\u0E07 Checkbox \u0E16\u0E39\u0E01\u0E2A\u0E25\u0E31\u0E1A\u0E04\u0E48\u0E32");
        }
        if (optSp.checked) {
          e.stopPropagation();
          logEvent("comp-console", "stopPropagation: \u0E01\u0E32\u0E23 Bubbling \u0E16\u0E39\u0E01\u0E2B\u0E22\u0E38\u0E14");
        }
      });
    }
  }
  var init_methods = __esm({
    "pages/methods.js"() {
      init_ui();
    }
  });

  // pages/patterns.js
  function renderPatterns() {
    let html = "";
    html += createPageTitle("Real-world Event Patterns", "\u0E1B\u0E23\u0E30\u0E22\u0E38\u0E01\u0E15\u0E4C\u0E43\u0E0A\u0E49\u0E04\u0E27\u0E32\u0E21\u0E23\u0E39\u0E49\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07 Event \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E41\u0E01\u0E49\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E08\u0E23\u0E34\u0E07\u0E17\u0E35\u0E48\u0E1E\u0E1A\u0E1A\u0E48\u0E2D\u0E22\u0E43\u0E19\u0E01\u0E32\u0E23\u0E17\u0E33 UI");
    html += `<section class="lesson-section">`;
    html += createExplanationPanel(
      "\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E02\u0E2D\u0E07 Dropdown Menu",
      `<p><strong>\u0E42\u0E08\u0E17\u0E22\u0E4C:</strong> \u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E43\u0E2B\u0E49\u0E40\u0E21\u0E19\u0E39 Dropdown \u0E40\u0E1B\u0E34\u0E14\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E04\u0E25\u0E34\u0E01\u0E1B\u0E38\u0E48\u0E21 \u0E41\u0E25\u0E30\u0E1B\u0E34\u0E14\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E04\u0E25\u0E34\u0E01\u0E17\u0E35\u0E48\u0E2D\u0E37\u0E48\u0E19\u0E46 \u0E1A\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E08\u0E2D</p>
         <p><strong>\u0E25\u0E2D\u0E07\u0E17\u0E33:</strong> \u0E25\u0E2D\u0E07\u0E40\u0E1B\u0E34\u0E14\u0E40\u0E21\u0E19\u0E39\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07 \u0E2A\u0E31\u0E07\u0E40\u0E01\u0E15\u0E27\u0E48\u0E32\u0E43\u0E19\u0E40\u0E27\u0E2D\u0E23\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1A\u0E31\u0E4A\u0E01 \u0E40\u0E21\u0E19\u0E39\u0E08\u0E30\u0E1B\u0E34\u0E14\u0E17\u0E31\u0E19\u0E17\u0E35\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E34\u0E14 \u0E40\u0E1E\u0E23\u0E32\u0E30 Event \u0E25\u0E2D\u0E22\u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B\u0E16\u0E36\u0E07 Document! \u0E25\u0E2D\u0E07\u0E15\u0E34\u0E4A\u0E01\u0E40\u0E1B\u0E34\u0E14\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19 <code>stopPropagation()</code> \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E41\u0E01\u0E49\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E19\u0E35\u0E49</p>`
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
    html += createCodePanel(dropdownCode, "javascript");
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
                    Menu \u25BE
                </button>
                <div id="dd-menu" style="display: none; position: absolute; top: 100%; left: 0; background: var(--bg-primary); border: 1px solid var(--border-color); border-radius: 4px; width: 150px; margin-top: 5px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); z-index: 10;">
                    <div style="padding: 10px; border-bottom: 1px solid var(--border-color); cursor: pointer;">\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C</div>
                    <div style="padding: 10px; cursor: pointer;">\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32</div>
                </div>
            </div>
        </div>
    `);
    html += createEventConsole("dd-console");
    html += `</div>`;
    html += `</div></section>`;
    html += `<section class="lesson-section">`;
    html += createExplanationPanel(
      "\u0E1B\u0E4A\u0E2D\u0E1B\u0E2D\u0E31\u0E1B (Modal Dialog)",
      `<p><strong>\u0E42\u0E08\u0E17\u0E22\u0E4C:</strong> \u0E1B\u0E4A\u0E2D\u0E1B\u0E2D\u0E31\u0E1B\u0E04\u0E27\u0E23\u0E08\u0E30\u0E1B\u0E34\u0E14\u0E15\u0E31\u0E27\u0E25\u0E07\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E04\u0E25\u0E34\u0E01\u0E17\u0E35\u0E48\u0E1E\u0E37\u0E49\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E2A\u0E35\u0E14\u0E33 \u0E41\u0E15\u0E48\u0E21\u0E31\u0E19\u0E15\u0E49\u0E2D\u0E07 <strong>\u0E44\u0E21\u0E48\u0E1B\u0E34\u0E14</strong> \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E04\u0E25\u0E34\u0E01\u0E20\u0E32\u0E22\u0E43\u0E19\u0E01\u0E23\u0E2D\u0E1A\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E2A\u0E35\u0E02\u0E32\u0E27</p>
         <p><strong>\u0E27\u0E34\u0E18\u0E35\u0E41\u0E01\u0E49:</strong> \u0E43\u0E0A\u0E49 <code>stopPropagation()</code> \u0E17\u0E35\u0E48\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E02\u0E2D\u0E07 Modal (\u0E01\u0E25\u0E48\u0E2D\u0E07\u0E2A\u0E35\u0E02\u0E32\u0E27) \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E31\u0E19\u0E44\u0E21\u0E48\u0E43\u0E2B\u0E49\u0E04\u0E25\u0E34\u0E01\u0E17\u0E30\u0E25\u0E38\u0E44\u0E1B\u0E16\u0E36\u0E07\u0E1E\u0E37\u0E49\u0E19\u0E2B\u0E25\u0E31\u0E07</p>`
    );
    html += `<div class="lab-grid" style="margin-bottom: 40px;">`;
    html += `<div class="lab-column">`;
    html += createDemoContainer(`
        <div style="text-align: center; width: 100%;">
            <button id="open-modal-btn" style="padding: 10px 20px; background: var(--accent-color); color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">\u0E40\u0E1B\u0E34\u0E14 Modal</button>
            
            <div id="modal-overlay" style="display: none; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); justify-content: center; align-items: center; z-index: 100;">
                <div id="modal-content" style="background: var(--bg-primary); padding: 30px; border-radius: 8px; width: 80%; text-align: center; box-shadow: 0 10px 25px rgba(0,0,0,0.5);">
                    <h3 style="margin-bottom: 15px;">\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32 Modal</h3>
                    <p style="margin-bottom: 10px;">\u0E04\u0E25\u0E34\u0E01\u0E15\u0E23\u0E07\u0E19\u0E35\u0E49\u0E08\u0E30\u0E44\u0E21\u0E48\u0E21\u0E35\u0E2D\u0E30\u0E44\u0E23\u0E40\u0E01\u0E34\u0E14\u0E02\u0E36\u0E49\u0E19</p>
                    <p style="margin-bottom: 20px; font-weight: bold; color: var(--accent-color);">\u0E04\u0E25\u0E34\u0E01\u0E17\u0E35\u0E48\u0E1E\u0E37\u0E49\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E2A\u0E35\u0E14\u0E33\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1B\u0E34\u0E14 Modal</p>
                    <button id="close-modal-btn" style="padding: 5px 15px; background: var(--bg-tertiary); border: 1px solid var(--border-color); border-radius: 4px; cursor: pointer;">\u0E1B\u0E34\u0E14</button>
                </div>
            </div>
        </div>
    `);
    html += `</div>`;
    html += `<div class="lab-column">`;
    html += createEventConsole("modal-console");
    html += `</div>`;
    html += `</div></section>`;
    html += `<section class="lesson-section">`;
    html += createExplanationPanel(
      "\u0E1B\u0E38\u0E48\u0E21\u0E01\u0E14\u0E0B\u0E49\u0E2D\u0E19\u0E43\u0E19\u0E01\u0E32\u0E23\u0E4C\u0E14\u0E17\u0E35\u0E48\u0E04\u0E25\u0E34\u0E01\u0E44\u0E14\u0E49",
      `<p><strong>\u0E42\u0E08\u0E17\u0E22\u0E4C:</strong> \u0E04\u0E38\u0E13\u0E21\u0E35\u0E01\u0E32\u0E23\u0E4C\u0E14\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E04\u0E25\u0E34\u0E01\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21\u0E19\u0E31\u0E49\u0E19\u0E44\u0E14\u0E49 \u0E41\u0E15\u0E48\u0E20\u0E32\u0E22\u0E43\u0E19\u0E01\u0E32\u0E23\u0E4C\u0E14\u0E01\u0E47\u0E21\u0E35\u0E1B\u0E38\u0E48\u0E21 "Like" \u0E14\u0E49\u0E27\u0E22 \u0E0B\u0E36\u0E48\u0E07\u0E40\u0E27\u0E25\u0E32\u0E01\u0E14 Like \u0E04\u0E27\u0E23\u0E08\u0E30\u0E41\u0E04\u0E48\u0E01\u0E14\u0E16\u0E39\u0E01\u0E43\u0E08 \u0E44\u0E21\u0E48\u0E04\u0E27\u0E23\u0E1E\u0E32\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E2B\u0E19\u0E49\u0E32</p>
         <p><strong>\u0E27\u0E34\u0E18\u0E35\u0E41\u0E01\u0E49:</strong> \u0E1C\u0E2A\u0E21\u0E01\u0E31\u0E19\u0E17\u0E31\u0E49\u0E07 <code>stopPropagation()</code> (\u0E44\u0E21\u0E48\u0E43\u0E2B\u0E49\u0E2A\u0E48\u0E07 Event \u0E43\u0E2B\u0E49\u0E01\u0E32\u0E23\u0E4C\u0E14) \u0E41\u0E25\u0E30 <code>preventDefault()</code> (\u0E2B\u0E22\u0E38\u0E14\u0E01\u0E32\u0E23\u0E01\u0E23\u0E30\u0E17\u0E33\u0E02\u0E2D\u0E07\u0E1B\u0E38\u0E48\u0E21\u0E2B\u0E23\u0E37\u0E2D\u0E25\u0E34\u0E07\u0E01\u0E4C)</p>`
    );
    html += `<div class="lab-grid" style="margin-bottom: 40px;">`;
    html += `<div class="lab-column">`;
    html += createDemoContainer(`
        <a href="#article" id="card-link" style="display: block; text-decoration: none; color: inherit; padding: 20px; border: 2px solid var(--border-color); border-radius: 8px; background: var(--bg-secondary); cursor: pointer; transition: transform 0.2s;">
            <h3 style="margin-bottom: 10px; color: var(--accent-color);">\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E38\u0E14\u0E40\u0E08\u0E4B\u0E07</h3>
            <p style="margin-bottom: 15px;">\u0E01\u0E32\u0E23\u0E04\u0E25\u0E34\u0E01\u0E17\u0E35\u0E48\u0E43\u0E14\u0E46 \u0E1A\u0E19\u0E01\u0E32\u0E23\u0E4C\u0E14\u0E19\u0E35\u0E49 \u0E08\u0E30\u0E1E\u0E32\u0E04\u0E38\u0E13\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21</p>
            <div style="display: flex; justify-content: flex-end;">
                <button id="like-btn" style="padding: 8px 15px; background: transparent; border: 2px solid var(--danger-color); color: var(--danger-color); border-radius: 20px; cursor: pointer; font-weight: bold; transition: all 0.2s;">
                    \u2665 Like
                </button>
            </div>
        </a>
    `);
    html += `</div>`;
    html += `<div class="lab-column">`;
    html += createEventConsole("card-console");
    html += `</div>`;
    html += `</div></section>`;
    html += `<section class="lesson-section">`;
    html += createExplanationPanel(
      "\u0E01\u0E32\u0E23\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1F\u0E2D\u0E23\u0E4C\u0E21 (Validation)",
      `<p><strong>\u0E42\u0E08\u0E17\u0E22\u0E4C:</strong> \u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E01\u0E48\u0E2D\u0E19\u0E27\u0E48\u0E32\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E19\u0E35\u0E49\u0E0B\u0E49\u0E33\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48 \u0E01\u0E48\u0E2D\u0E19\u0E17\u0E35\u0E48\u0E08\u0E30\u0E22\u0E2D\u0E21\u0E43\u0E2B\u0E49 Form \u0E16\u0E39\u0E01\u0E2A\u0E48\u0E07\u0E2D\u0E2D\u0E01\u0E44\u0E1B</p>
         <p><strong>\u0E27\u0E34\u0E18\u0E35\u0E41\u0E01\u0E49:</strong> \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E01\u0E48\u0E2D\u0E19 \u0E16\u0E49\u0E32\u0E44\u0E21\u0E48\u0E1C\u0E48\u0E32\u0E19\u0E43\u0E2B\u0E49\u0E40\u0E23\u0E35\u0E22\u0E01 <code>preventDefault()</code> \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2B\u0E22\u0E38\u0E14\u0E44\u0E21\u0E48\u0E43\u0E2B\u0E49 Browser \u0E2A\u0E48\u0E07 Form</p>`
    );
    html += `<div class="lab-grid" style="margin-bottom: 40px;">`;
    html += `<div class="lab-column">`;
    html += createDemoContainer(`
        <form id="val-form" style="width: 100%; padding: 20px; border: 2px solid var(--border-color); border-radius: 8px; background: var(--bg-secondary);">
            <div style="margin-bottom: 15px;">
                <label style="display: block; margin-bottom: 5px; font-weight: bold;">\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49</label>
                <input type="text" id="val-input" placeholder="\u0E25\u0E2D\u0E07\u0E1E\u0E34\u0E21\u0E1E\u0E4C 'admin' \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E1C\u0E25\u0E25\u0E31\u0E1E\u0E18\u0E4C\u0E01\u0E32\u0E23\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A" style="width: 100%; padding: 10px; border-radius: 4px; border: 1px solid var(--border-color); background: var(--bg-primary); color: var(--text-primary);">
                <div id="val-error" style="color: var(--danger-color); font-size: 0.85rem; margin-top: 5px; display: none;">\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14: \u0E0A\u0E37\u0E48\u0E2D 'admin' \u0E16\u0E39\u0E01\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E44\u0E1B\u0E41\u0E25\u0E49\u0E27!</div>
            </div>
            <button type="submit" style="padding: 10px 20px; background: var(--accent-color); color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E1A\u0E31\u0E0D\u0E0A\u0E35</button>
        </form>
    `);
    html += `</div>`;
    html += `<div class="lab-column">`;
    html += createEventConsole("val-console");
    html += `</div>`;
    html += `</div></section>`;
    return html;
  }
  function initPatterns() {
    const sandbox = document.getElementById("dropdown-sandbox");
    const ddBtn = document.getElementById("dd-btn");
    const ddMenu = document.getElementById("dd-menu");
    const fixToggle = document.getElementById("dropdown-fix-toggle");
    if (sandbox) {
      ddBtn.addEventListener("click", (e) => {
        logEvent("dd-console", "1. \u0E04\u0E25\u0E34\u0E01\u0E17\u0E35\u0E48\u0E1B\u0E38\u0E48\u0E21 Menu");
        logEvent("dd-console", "2. \u0E42\u0E04\u0E49\u0E14\u0E02\u0E2D\u0E07 Menu \u0E40\u0E23\u0E34\u0E48\u0E21\u0E17\u0E33\u0E07\u0E32\u0E19");
        const isClosing = ddMenu.style.display === "block";
        ddMenu.style.display = isClosing ? "none" : "block";
        if (!isClosing) {
          logEvent("dd-console", "3. \u0E40\u0E21\u0E19\u0E39\u0E16\u0E39\u0E01\u0E40\u0E1B\u0E34\u0E14");
        }
        if (fixToggle.checked) {
          e.stopPropagation();
          logEvent("dd-console", "4. \u0E21\u0E35\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E01 stopPropagation()");
          logEvent("dd-console", "5. Event \u0E25\u0E2D\u0E22\u0E44\u0E1B\u0E44\u0E21\u0E48\u0E16\u0E36\u0E07 Document");
        } else {
          logEvent("dd-console", "4. Event \u0E25\u0E2D\u0E22\u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B (Bubbling)...");
        }
      });
      sandbox.addEventListener("click", (e) => {
        if (e.target === fixToggle || fixToggle.contains(e.target)) return;
        if (e.target === ddBtn && !fixToggle.checked) {
          logEvent("dd-console", "5. \u0E42\u0E04\u0E49\u0E14\u0E02\u0E2D\u0E07 Document \u0E17\u0E33\u0E07\u0E32\u0E19");
          ddMenu.style.display = "none";
          logEvent("dd-console", "6. \u0E40\u0E21\u0E19\u0E39\u0E1B\u0E34\u0E14\u0E25\u0E07");
        } else if (e.target !== ddBtn) {
          if (ddMenu.style.display === "block") {
            logEvent("dd-console", "\u0E04\u0E25\u0E34\u0E01\u0E1A\u0E23\u0E34\u0E40\u0E27\u0E13\u0E2D\u0E37\u0E48\u0E19\u0E19\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E40\u0E21\u0E19\u0E39");
            logEvent("dd-console", "\u0E42\u0E04\u0E49\u0E14\u0E02\u0E2D\u0E07 Document \u0E17\u0E33\u0E07\u0E32\u0E19");
            ddMenu.style.display = "none";
            logEvent("dd-console", "\u0E40\u0E21\u0E19\u0E39\u0E1B\u0E34\u0E14\u0E25\u0E07");
          }
        }
      });
    }
    const modalBtn = document.getElementById("open-modal-btn");
    const modalOverlay = document.getElementById("modal-overlay");
    const modalContent = document.getElementById("modal-content");
    const closeBtn = document.getElementById("close-modal-btn");
    if (modalBtn) {
      modalBtn.addEventListener("click", () => {
        modalOverlay.style.display = "flex";
        logEvent("modal-console", "Modal \u0E16\u0E39\u0E01\u0E40\u0E1B\u0E34\u0E14");
      });
      closeBtn.addEventListener("click", () => {
        modalOverlay.style.display = "none";
        logEvent("modal-console", "\u0E04\u0E25\u0E34\u0E01\u0E17\u0E35\u0E48\u0E1B\u0E38\u0E48\u0E21\u0E1B\u0E34\u0E14 -> Modal \u0E1B\u0E34\u0E14\u0E25\u0E07");
      });
      modalContent.addEventListener("click", (e) => {
        e.stopPropagation();
        logEvent("modal-console", "\u0E04\u0E25\u0E34\u0E01\u0E17\u0E35\u0E48\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32 -> \u0E21\u0E35\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E01 stopPropagation()");
        logEvent("modal-console", "\u0E01\u0E23\u0E2D\u0E1A\u0E1E\u0E37\u0E49\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E2A\u0E35\u0E14\u0E33\u0E08\u0E30\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E1B\u0E34\u0E14");
      });
      modalOverlay.addEventListener("click", () => {
        modalOverlay.style.display = "none";
        logEvent("modal-console", "\u0E04\u0E25\u0E34\u0E01\u0E17\u0E35\u0E48\u0E01\u0E23\u0E2D\u0E1A\u0E1E\u0E37\u0E49\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E2A\u0E35\u0E14\u0E33 -> Modal \u0E1B\u0E34\u0E14\u0E25\u0E07");
      });
    }
    const cardLink = document.getElementById("card-link");
    const likeBtn = document.getElementById("like-btn");
    if (cardLink) {
      cardLink.addEventListener("click", (e) => {
        e.preventDefault();
        logEvent("card-console", "\u0E04\u0E25\u0E34\u0E01\u0E17\u0E35\u0E48\u0E01\u0E32\u0E23\u0E4C\u0E14 -> \u0E01\u0E33\u0E25\u0E31\u0E07\u0E19\u0E33\u0E17\u0E32\u0E07\u0E44\u0E1B\u0E2B\u0E19\u0E49\u0E32\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21!");
      });
      likeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isLiked = likeBtn.style.backgroundColor === "var(--danger-color)";
        if (isLiked) {
          likeBtn.style.backgroundColor = "transparent";
          likeBtn.style.color = "var(--danger-color)";
        } else {
          likeBtn.style.backgroundColor = "var(--danger-color)";
          likeBtn.style.color = "white";
        }
        logEvent("card-console", "\u0E04\u0E25\u0E34\u0E01\u0E1B\u0E38\u0E48\u0E21 Like -> \u0E21\u0E35\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E01 stopPropagation()");
        logEvent("card-console", "\u0E01\u0E32\u0E23\u0E04\u0E25\u0E34\u0E01\u0E19\u0E35\u0E49\u0E08\u0E30\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E2A\u0E48\u0E07\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E15\u0E31\u0E27\u0E01\u0E32\u0E23\u0E4C\u0E14");
      });
    }
    const valForm = document.getElementById("val-form");
    const valInput = document.getElementById("val-input");
    const valError = document.getElementById("val-error");
    if (valForm) {
      valForm.addEventListener("submit", (e) => {
        if (valInput.value.toLowerCase() === "admin") {
          e.preventDefault();
          valError.style.display = "block";
          logEvent("val-console", "\u0E01\u0E32\u0E23\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E25\u0E49\u0E21\u0E40\u0E2B\u0E25\u0E27: admin \u0E16\u0E39\u0E01\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E44\u0E1B\u0E41\u0E25\u0E49\u0E27");
          logEvent("val-console", "\u0E40\u0E23\u0E35\u0E22\u0E01 preventDefault() -> \u0E01\u0E32\u0E23\u0E2A\u0E48\u0E07 Form \u0E16\u0E39\u0E01\u0E2B\u0E22\u0E38\u0E14");
        } else {
          e.preventDefault();
          valError.style.display = "none";
          logEvent("val-console", "\u0E01\u0E32\u0E23\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E1C\u0E48\u0E32\u0E19!");
          logEvent("val-console", "\u0E1B\u0E01\u0E15\u0E34\u0E41\u0E25\u0E49\u0E27 Form \u0E08\u0E30\u0E16\u0E39\u0E01\u0E2A\u0E48\u0E07\u0E15\u0E23\u0E07\u0E19\u0E35\u0E49");
        }
      });
      valInput.addEventListener("input", () => {
        valError.style.display = "none";
      });
    }
  }
  var init_patterns = __esm({
    "pages/patterns.js"() {
      init_ui();
    }
  });

  // pages/delegation.js
  function renderDelegation() {
    let html = "";
    html += createPageTitle("Event Delegation", "\u0E40\u0E17\u0E04\u0E19\u0E34\u0E04\u0E17\u0E23\u0E07\u0E1E\u0E25\u0E31\u0E07\u0E43\u0E19\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23 Event \u0E2D\u0E22\u0E48\u0E32\u0E07\u0E21\u0E35\u0E1B\u0E23\u0E30\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E20\u0E32\u0E1E\u0E42\u0E14\u0E22\u0E43\u0E0A\u0E49 Bubbling");
    html += `<section class="lesson-section">`;
    html += createExplanationPanel(
      "\u0E41\u0E19\u0E27\u0E04\u0E34\u0E14\u0E2B\u0E25\u0E31\u0E01 (Core Concept)",
      `<p>\u0E41\u0E17\u0E19\u0E17\u0E35\u0E48\u0E08\u0E30\u0E40\u0E02\u0E35\u0E22\u0E19\u0E1C\u0E39\u0E01 Event Listener \u0E43\u0E2B\u0E49\u0E01\u0E31\u0E1A Element \u0E25\u0E39\u0E01\u0E17\u0E35\u0E25\u0E30\u0E15\u0E31\u0E27 \u0E40\u0E23\u0E32\u0E08\u0E30\u0E1C\u0E39\u0E01 Listener \u0E41\u0E04\u0E48 <strong>\u0E15\u0E31\u0E27\u0E40\u0E14\u0E35\u0E22\u0E27</strong> \u0E44\u0E27\u0E49\u0E17\u0E35\u0E48 Element \u0E41\u0E21\u0E48\u0E02\u0E2D\u0E07\u0E1E\u0E27\u0E01\u0E21\u0E31\u0E19\u0E41\u0E17\u0E19! \u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E32\u0E01\u0E40\u0E27\u0E25\u0E32\u0E40\u0E01\u0E34\u0E14 Event \u0E21\u0E31\u0E19\u0E08\u0E30\u0E25\u0E2D\u0E22\u0E02\u0E36\u0E49\u0E19\u0E21\u0E32\u0E2B\u0E32\u0E41\u0E21\u0E48 (Bubbling) \u0E41\u0E21\u0E48\u0E08\u0E36\u0E07\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E14\u0E31\u0E01\u0E1F\u0E31\u0E07\u0E41\u0E25\u0E30\u0E43\u0E0A\u0E49 <code>event.target</code> \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E44\u0E14\u0E49\u0E27\u0E48\u0E32\u0E25\u0E39\u0E01\u0E15\u0E31\u0E27\u0E44\u0E2B\u0E19\u0E01\u0E31\u0E19\u0E41\u0E19\u0E48\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E04\u0E25\u0E34\u0E01</p>
         <ul style="margin-top: 10px; margin-bottom: 10px; padding-left: 20px;">
            <li style="margin-bottom: 5px;"><strong>\u0E1B\u0E23\u0E30\u0E2B\u0E22\u0E31\u0E14\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E04\u0E27\u0E32\u0E21\u0E08\u0E33:</strong> \u0E43\u0E0A\u0E49 Listener \u0E41\u0E04\u0E48 1 \u0E15\u0E31\u0E27 \u0E41\u0E17\u0E19\u0E17\u0E35\u0E48\u0E08\u0E30\u0E40\u0E1B\u0E47\u0E19 100 \u0E15\u0E31\u0E27</li>
            <li><strong>\u0E23\u0E2D\u0E07\u0E23\u0E31\u0E1A Element \u0E43\u0E2B\u0E21\u0E48:</strong> \u0E16\u0E49\u0E32\u0E21\u0E35 Element \u0E25\u0E39\u0E01\u0E16\u0E39\u0E01\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E02\u0E49\u0E32\u0E21\u0E32\u0E43\u0E2B\u0E21\u0E48 \u0E21\u0E31\u0E19\u0E08\u0E30\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E44\u0E14\u0E49\u0E17\u0E31\u0E19\u0E17\u0E35\u0E42\u0E14\u0E22\u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E44\u0E1B\u0E40\u0E02\u0E35\u0E22\u0E19\u0E1C\u0E39\u0E01 Event \u0E40\u0E1E\u0E34\u0E48\u0E21!</li>
         </ul>`
    );
    html += `<div class="lab-grid" style="margin-bottom: 40px;">`;
    html += `<div class="lab-column">`;
    html += `<div class="card event-inspector" style="margin-bottom: 20px; font-family: monospace; font-size: 0.95rem;">
        <h3 class="card-title">\u0E42\u0E04\u0E23\u0E07\u0E2A\u0E23\u0E49\u0E32\u0E07 LISTENER</h3>
        <div id="arch-individual" style="text-align: center; display: none;">
            <p style="color: var(--danger-color); font-weight: bold; margin-bottom: 15px;">\u0E44\u0E21\u0E48\u0E14\u0E35: \u0E1C\u0E39\u0E01 Listener \u0E41\u0E1A\u0E1A\u0E23\u0E32\u0E22\u0E15\u0E31\u0E27</p>
            <div style="background: var(--bg-tertiary); padding: 15px; border-radius: 4px; display: inline-block; text-align: left;">
                <div>button <span style="color: var(--accent-color);">\u2192 listener (memory)</span></div>
                <div>button <span style="color: var(--accent-color);">\u2192 listener (memory)</span></div>
                <div>button <span style="color: var(--accent-color);">\u2192 listener (memory)</span></div>
                <div>button <span style="color: var(--accent-color);">\u2192 listener (memory)</span></div>
                <div style="color: var(--text-muted); margin-top: 15px; text-align: center;">* \u0E1B\u0E38\u0E48\u0E21\u0E43\u0E2B\u0E21\u0E48\u0E17\u0E35\u0E48\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E02\u0E49\u0E32\u0E21\u0E32\u0E08\u0E30\u0E44\u0E21\u0E48\u0E17\u0E33\u0E07\u0E32\u0E19 *</div>
            </div>
        </div>
        <div id="arch-delegation" style="text-align: center; display: block;">
            <p style="color: var(--success-color); font-weight: bold; margin-bottom: 15px;">\u0E14\u0E35\u0E21\u0E32\u0E01: Event Delegation</p>
            <div style="background: var(--bg-tertiary); padding: 15px; border-radius: 4px; display: inline-block; text-align: center;">
                <div style="font-weight: bold; color: var(--accent-color);">productList \u2192 1 listener</div>
                <div style="margin: 5px 0; color: var(--text-muted);">\u2502</div>
                <div style="color: var(--text-muted);">\u250C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2510</div>
                <div style="color: var(--text-muted);">\u2193   \u2193    \u2193    \u2193</div>
                <div>btn btn  btn  btn</div>
                <div style="color: var(--text-muted); margin-top: 15px;">* \u0E14\u0E31\u0E01\u0E08\u0E31\u0E1A\u0E1B\u0E38\u0E48\u0E21\u0E17\u0E35\u0E48\u0E40\u0E1E\u0E34\u0E48\u0E07\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E02\u0E49\u0E32\u0E21\u0E32\u0E43\u0E2B\u0E21\u0E48\u0E44\u0E14\u0E49\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34 *</div>
            </div>
        </div>
    </div>`;
    html += createCodePanel(`// \u0E1C\u0E39\u0E01 Listener \u0E17\u0E35\u0E25\u0E30\u0E15\u0E31\u0E27 (\u0E44\u0E21\u0E48\u0E14\u0E35)
const buttons = document.querySelectorAll('.delete-btn');
buttons.forEach(btn => {
    btn.addEventListener('click', () => btn.closest('li').remove());
});
// \u274C \u0E1E\u0E31\u0E07\u0E17\u0E31\u0E19\u0E17\u0E35\u0E16\u0E49\u0E32\u0E21\u0E35\u0E01\u0E32\u0E23\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E1B\u0E38\u0E48\u0E21\u0E43\u0E2B\u0E21\u0E48\u0E40\u0E02\u0E49\u0E32\u0E21\u0E32\u0E17\u0E35\u0E2B\u0E25\u0E31\u0E07

// \u0E43\u0E0A\u0E49 Event Delegation (\u0E14\u0E35)
const list = document.getElementById('product-list');
list.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        event.target.closest('li').remove();
    }
});
// \u2705 \u0E1B\u0E38\u0E48\u0E21\u0E43\u0E2B\u0E21\u0E48\u0E17\u0E33\u0E07\u0E32\u0E19\u0E44\u0E14\u0E49\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34!`, "javascript");
    html += `</div>`;
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
                <h3 style="margin: 0;">\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</h3>
                <button id="add-product-btn" style="padding: 8px 12px; background: var(--success-color); color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">+ \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</button>
            </div>
            
            <ul id="product-list" style="list-style: none; padding: 0; margin: 0; border: 2px dashed var(--border-color); border-radius: 4px; min-height: 100px;">
                <!-- Populated via JS -->
            </ul>
        </div>
    `);
    html += createEventConsole("del-console");
    html += `</div>`;
    html += `</div></section>`;
    return html;
  }
  function initDelegation() {
    const list = document.getElementById("product-list");
    const addBtn = document.getElementById("add-product-btn");
    const modeInd = document.getElementById("mode-ind");
    const modeDel = document.getElementById("mode-del");
    const archInd = document.getElementById("arch-individual");
    const archDel = document.getElementById("arch-delegation");
    let individualListeners = [];
    let delegationListener = null;
    const initialProducts = ["\u0E40\u0E2A\u0E37\u0E49\u0E2D\u0E22\u0E37\u0E14", "\u0E2B\u0E21\u0E27\u0E01", "\u0E23\u0E2D\u0E07\u0E40\u0E17\u0E49\u0E32", "\u0E01\u0E23\u0E30\u0E40\u0E1B\u0E4B\u0E32"];
    let productCount = 4;
    function renderList() {
      list.innerHTML = "";
      initialProducts.forEach((name) => {
        const li = document.createElement("li");
        li.style.cssText = "padding: 15px; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; background: var(--bg-primary);";
        li.innerHTML = `
                <span style="font-weight: bold;">${name}</span>
                <button class="delete-btn" style="padding: 5px 15px; background: var(--danger-color); color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">\u0E25\u0E1A</button>
            `;
        list.appendChild(li);
      });
      if (list.lastChild) {
        list.lastChild.style.borderBottom = "none";
      }
    }
    function removeIndividualListeners() {
      individualListeners.forEach(({ btn, fn }) => {
        btn.removeEventListener("click", fn);
      });
      individualListeners = [];
    }
    function removeDelegationListener() {
      if (delegationListener) {
        list.removeEventListener("click", delegationListener);
        delegationListener = null;
      }
    }
    function setupIndividualListeners() {
      removeDelegationListener();
      removeIndividualListeners();
      logEvent("del-console", "\u0E42\u0E2B\u0E21\u0E14: \u0E1C\u0E39\u0E01 Listener 1 \u0E15\u0E31\u0E27 \u0E15\u0E48\u0E2D 1 \u0E1B\u0E38\u0E48\u0E21\u0E17\u0E35\u0E48\u0E21\u0E35\u0E2D\u0E22\u0E39\u0E48");
      const btns = list.querySelectorAll(".delete-btn");
      btns.forEach((btn) => {
        const fn = (e) => {
          const name = e.target.closest("li").querySelector("span").textContent;
          e.target.closest("li").remove();
          logEvent("del-console", `\u0E25\u0E1A ${name} (\u0E41\u0E1A\u0E1A\u0E23\u0E32\u0E22\u0E15\u0E31\u0E27)`);
        };
        btn.addEventListener("click", fn);
        individualListeners.push({ btn, fn });
      });
      modeInd.parentElement.style.borderColor = "var(--accent-color)";
      modeInd.parentElement.style.color = "var(--accent-color)";
      modeDel.parentElement.style.borderColor = "var(--border-color)";
      modeDel.parentElement.style.color = "inherit";
      archInd.style.display = "block";
      archDel.style.display = "none";
    }
    function setupDelegationListener() {
      removeIndividualListeners();
      removeDelegationListener();
      logEvent("del-console", "\u0E42\u0E2B\u0E21\u0E14: \u0E1C\u0E39\u0E01 Listener \u0E41\u0E04\u0E48 1 \u0E15\u0E31\u0E27\u0E44\u0E27\u0E49\u0E17\u0E35\u0E48 UL");
      delegationListener = (e) => {
        if (e.target.classList.contains("delete-btn")) {
          const name = e.target.closest("li").querySelector("span").textContent;
          e.target.closest("li").remove();
          logEvent("del-console", `\u0E25\u0E1A ${name.replace(" (\u0E43\u0E2B\u0E21\u0E48)", "")} \u0E42\u0E14\u0E22\u0E43\u0E0A\u0E49 event.target`);
        }
      };
      list.addEventListener("click", delegationListener);
      modeDel.parentElement.style.borderColor = "var(--accent-color)";
      modeDel.parentElement.style.color = "var(--accent-color)";
      modeInd.parentElement.style.borderColor = "var(--border-color)";
      modeInd.parentElement.style.color = "inherit";
      archDel.style.display = "block";
      archInd.style.display = "none";
    }
    addBtn.addEventListener("click", () => {
      productCount++;
      const name = `\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32 #${productCount}`;
      const li = document.createElement("li");
      li.style.cssText = "padding: 15px; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; background: rgba(64, 192, 87, 0.1);";
      li.innerHTML = `
            <span style="font-weight: bold; color: var(--success-color);">${name} <small>(New)</small></span>
            <button class="delete-btn" style="padding: 5px 15px; background: var(--danger-color); color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">Delete</button>
        `;
      list.appendChild(li);
      logEvent("del-console", `\u0E40\u0E1E\u0E34\u0E48\u0E21 ${name}`);
      if (modeInd.checked) {
        logEvent("del-console", `\u0E04\u0E33\u0E40\u0E15\u0E37\u0E2D\u0E19: \u0E1B\u0E38\u0E48\u0E21\u0E43\u0E2B\u0E21\u0E48\u0E44\u0E21\u0E48\u0E21\u0E35 Listener \u0E1C\u0E39\u0E01\u0E2D\u0E22\u0E39\u0E48!`);
      } else {
        logEvent("del-console", `\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E17\u0E33\u0E07\u0E32\u0E19: \u0E01\u0E32\u0E23 Bubbling \u0E08\u0E30\u0E0A\u0E48\u0E27\u0E22\u0E14\u0E31\u0E01\u0E08\u0E31\u0E1A\u0E43\u0E2B\u0E49`);
      }
    });
    modeInd.addEventListener("change", () => {
      if (modeInd.checked) {
        renderList();
        setupIndividualListeners();
      }
    });
    modeDel.addEventListener("change", () => {
      if (modeDel.checked) {
        renderList();
        setupDelegationListener();
      }
    });
    renderList();
    setupDelegationListener();
  }
  var init_delegation = __esm({
    "pages/delegation.js"() {
      init_ui();
    }
  });

  // pages/playground.js
  function renderPlayground() {
    let html = "";
    html += createPageTitle("Event Playground", "\u0E2B\u0E49\u0E2D\u0E07\u0E17\u0E14\u0E25\u0E2D\u0E07\u0E41\u0E1A\u0E1A\u0E2D\u0E34\u0E2A\u0E23\u0E30\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E41\u0E25\u0E30\u0E17\u0E33\u0E04\u0E27\u0E32\u0E21\u0E40\u0E02\u0E49\u0E32\u0E43\u0E08 JavaScript DOM Events");
    html += `<section class="lesson-section">`;
    html += `<div class="lab-grid" style="margin-bottom: 40px; grid-template-columns: 1fr 1fr;">`;
    html += `<div class="lab-column">`;
    html += `<div class="card" style="padding: 20px; margin-bottom: 20px; background: var(--bg-secondary); border: 2px solid var(--border-color);">
        <h3 class="card-title" style="margin-bottom: 15px;">\u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32 (CONFIGURATION)</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div>
                <label style="display: block; font-weight: bold; margin-bottom: 5px;">\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17 Event:</label>
                <select id="pg-event" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid var(--border-color); background: var(--bg-primary); color: var(--text-primary); font-family: monospace;">
                    <option value="click">click</option>
                    <option value="mousedown">mousedown</option>
                    <option value="mouseup">mouseup</option>
                    <option value="mouseover">mouseover</option>
                    <option value="mouseout">mouseout</option>
                    <option value="mousemove">mousemove</option>
                    <option value="keydown">keydown</option>
                    <option value="keyup">keyup</option>
                    <option value="input">input</option>
                    <option value="focus">focus</option>
                    <option value="blur">blur</option>
                </select>
            </div>
            
            <div>
                <label style="display: block; font-weight: bold; margin-bottom: 5px;">\u0E23\u0E30\u0E22\u0E30 (Phases):</label>
                <label style="display: block; cursor: pointer;"><input type="checkbox" id="pg-cap" checked> Capturing</label>
                <label style="display: block; cursor: pointer;"><input type="checkbox" id="pg-bub" checked> Bubbling</label>
            </div>
            
            <div style="grid-column: span 2; border-top: 1px dashed var(--border-color); padding-top: 15px;">
                <label style="display: block; font-weight: bold; margin-bottom: 5px;">\u0E40\u0E21\u0E18\u0E2D\u0E14 (\u0E17\u0E33\u0E07\u0E32\u0E19\u0E01\u0E31\u0E1A\u0E17\u0E38\u0E01 Handler):</label>
                <label style="display: inline-block; cursor: pointer; margin-right: 20px;"><input type="checkbox" id="pg-pd"> preventDefault()</label>
                <label style="display: inline-block; cursor: pointer;"><input type="checkbox" id="pg-sp"> stopPropagation()</label>
            </div>
        </div>
        
        <div style="margin-top: 20px; text-align: center;">
            <button id="pg-reset" style="padding: 8px 20px; background: var(--danger-color); color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15 Playground</button>
        </div>
    </div>`;
    html += `<div style="width: 100%; margin-bottom: 20px;">
        <div id="pg-doc" class="prop-box pg-node" data-name="Document" style="padding: 20px; border: 2px solid var(--border-color); background-color: var(--bg-primary); border-radius: 8px; position: relative;">
            <span class="prop-label" style="position: absolute; top: 5px; left: 10px; font-size: 0.75rem; font-family: monospace; color: var(--text-muted); font-weight: bold;">Document</span>
            <div id="pg-html" class="prop-box pg-node" data-name="HTML" style="padding: 20px; border: 2px solid var(--border-color); background-color: var(--bg-secondary); border-radius: 8px; margin-top: 15px; position: relative;">
                <span class="prop-label" style="position: absolute; top: 5px; left: 10px; font-size: 0.75rem; font-family: monospace; color: var(--text-muted); font-weight: bold;">HTML</span>
                <div id="pg-body" class="prop-box pg-node" data-name="BODY" style="padding: 20px; border: 2px solid var(--border-color); background-color: var(--bg-tertiary); border-radius: 8px; margin-top: 15px; position: relative;">
                    <span class="prop-label" style="position: absolute; top: 5px; left: 10px; font-size: 0.75rem; font-family: monospace; color: var(--text-muted); font-weight: bold;">BODY</span>
                    <div id="pg-div" class="prop-box pg-node" data-name="DIV" style="padding: 20px; border: 2px solid var(--border-color); background-color: var(--bg-primary); border-radius: 8px; margin-top: 15px; position: relative;">
                        <span class="prop-label" style="position: absolute; top: 5px; left: 10px; font-size: 0.75rem; font-family: monospace; color: var(--text-muted); font-weight: bold;">DIV</span>
                        <div style="text-align: center; margin-top: 25px; display: flex; justify-content: center; gap: 20px;">
                            <button id="pg-btn-a" class="prop-box pg-node" data-name="BUTTON A" tabindex="0" style="padding: 15px 30px; font-size: 1.1rem; cursor: pointer; border-radius: 4px; border: 3px solid var(--border-color); background-color: var(--accent-color); color: white; font-weight: bold; position: relative; flex: 1;">
                                BUTTON A
                            </button>
                            <input id="pg-btn-b" class="prop-box pg-node" data-name="BUTTON B (Input)" placeholder="\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48 (INPUT B)" style="padding: 15px; font-size: 1.1rem; border-radius: 4px; border: 3px solid var(--border-color); background-color: var(--bg-tertiary); color: var(--text-primary); font-weight: bold; position: relative; flex: 1; text-align: center;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    html += `<div id="pg-code-container"></div>`;
    html += `</div>`;
    html += `<div class="lab-column">`;
    html += createEventInspector("pg-inspector");
    html += `<div class="card event-console" style="margin-top: 20px; height: auto; min-height: 400px; max-height: 600px; display: flex; flex-direction: column;">
        <div class="console-header">
            <span>EVENT CONSOLE (\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E01\u0E34\u0E14)</span>
            <button class="clear-log-btn" id="clear-pg-log">\u0E25\u0E49\u0E32\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25</button>
        </div>
        <div class="console-logs" id="pg-logs" style="font-family: monospace; overflow-y: auto; flex: 1;">
            <!-- Logs populated via JS -->
        </div>
    </div>`;
    html += `</div>`;
    html += `</div></section>`;
    const styles = `
    <style>
        .pg-node { transition: all 0.2s; }
        .hl-cap {
            background-color: rgba(51, 154, 240, 0.2) !important;
            border-color: var(--accent-color) !important;
            box-shadow: 0 0 10px rgba(51, 154, 240, 0.5);
        }
        .hl-target {
            background-color: rgba(64, 192, 87, 0.6) !important;
            border-color: var(--success-color) !important;
            box-shadow: 0 0 20px rgba(64, 192, 87, 0.8);
            transform: scale(1.05);
            color: white !important;
        }
        .hl-bub {
            background-color: rgba(250, 82, 82, 0.2) !important;
            border-color: var(--danger-color) !important;
            box-shadow: 0 0 10px rgba(250, 82, 82, 0.5);
        }
    </style>
    `;
    return styles + html;
  }
  function initPlayground() {
    const nodes = {
      "doc": document.getElementById("pg-doc"),
      "html": document.getElementById("pg-html"),
      "body": document.getElementById("pg-body"),
      "div": document.getElementById("pg-div"),
      "btnA": document.getElementById("pg-btn-a"),
      "btnB": document.getElementById("pg-btn-b")
    };
    const ui = {
      evtType: document.getElementById("pg-event"),
      cap: document.getElementById("pg-cap"),
      bub: document.getElementById("pg-bub"),
      pd: document.getElementById("pg-pd"),
      sp: document.getElementById("pg-sp"),
      reset: document.getElementById("pg-reset"),
      logs: document.getElementById("pg-logs"),
      clearLog: document.getElementById("clear-pg-log"),
      code: document.getElementById("pg-code-container")
    };
    let activeListeners = [];
    let eventQueue = [];
    let isAnimating = false;
    let playbackTimeout = null;
    function logToConsole(entryHtml) {
      const entry = document.createElement("div");
      entry.style.cssText = "margin-bottom: 10px; padding: 10px; border-bottom: 1px solid var(--border-color); background: rgba(0,0,0,0.1); border-radius: 4px;";
      entry.innerHTML = entryHtml;
      ui.logs.prepend(entry);
    }
    ui.clearLog.addEventListener("click", () => {
      ui.logs.innerHTML = "";
    });
    function generateCode() {
      const type = ui.evtType.value;
      const cap = ui.cap.checked;
      const bub = ui.bub.checked;
      const pd = ui.pd.checked;
      const sp = ui.sp.checked;
      let code = `// Current Playground Configuration
const nodes = [document, html, body, div, btnA, btnB];

nodes.forEach(node => {
${cap ? `  node.addEventListener('${type}', handler, true);  // Capturing
` : ""}${bub ? `  node.addEventListener('${type}', handler, false); // Bubbling
` : ""}});

function handler(event) {
${pd ? `  event.preventDefault();
` : ""}${sp ? `  event.stopPropagation();
` : ""}  console.log('type:', event.type);
  console.log('target:', event.target);
  console.log('currentTarget:', event.currentTarget);
}`;
      ui.code.innerHTML = `
            <div class="code-panel" style="margin-top: 20px;">
                <div class="code-panel-header">
                    <span class="language-label">JAVASCRIPT</span>
                </div>
                <div class="code-content" style="max-height: 300px; overflow-y: auto;">
                    <pre><code>${code}</code></pre>
                </div>
            </div>
        `;
    }
    function removeAllListeners() {
      activeListeners.forEach(({ node, type, fn, capture }) => {
        node.removeEventListener(type, fn, capture);
      });
      activeListeners = [];
    }
    function attachListeners() {
      removeAllListeners();
      generateCode();
      const type = ui.evtType.value;
      const cap = ui.cap.checked;
      const bub = ui.bub.checked;
      const pd = ui.pd.checked;
      const sp = ui.sp.checked;
      const createHandler = (phaseLabel) => {
        return function(e) {
          if (type === "click" && !Object.values(nodes).some((n) => n === e.target || n.contains(e.target))) {
            return;
          }
          if (pd) e.preventDefault();
          if (sp) e.stopPropagation();
          if (isAnimating) return;
          eventQueue.push({
            node: this,
            phaseLabel,
            nodeName: this.getAttribute("data-name"),
            type: e.type,
            targetName: e.target.getAttribute("data-name") || e.target.tagName,
            currentName: e.currentTarget.getAttribute("data-name") || e.currentTarget.tagName,
            bubbles: e.bubbles,
            cancelable: e.cancelable,
            defaultPrevented: e.defaultPrevented,
            eventPhase: e.eventPhase
          });
          if (!playbackTimeout) {
            playbackTimeout = setTimeout(playAnimation, 100);
          }
        };
      };
      Object.values(nodes).forEach((node) => {
        if (cap) {
          const fn = createHandler("capturing");
          node.addEventListener(type, fn, true);
          activeListeners.push({ node, type, fn, capture: true });
        }
        if (bub) {
          const fn = createHandler("bubbling");
          node.addEventListener(type, fn, false);
          activeListeners.push({ node, type, fn, capture: false });
        }
      });
    }
    function playAnimation() {
      if (eventQueue.length === 0) return;
      isAnimating = true;
      playbackTimeout = null;
      const queue = [...eventQueue];
      eventQueue = [];
      Object.values(nodes).forEach((n) => {
        n.classList.remove("hl-cap", "hl-target", "hl-bub");
      });
      let index = 0;
      function nextFrame() {
        if (index > 0) {
          const prev = queue[index - 1];
          prev.node.classList.remove("hl-cap", "hl-target", "hl-bub");
        }
        if (index >= queue.length) {
          isAnimating = false;
          return;
        }
        const curr = queue[index];
        let cssClass = curr.eventPhase === 1 ? "hl-cap" : curr.eventPhase === 2 ? "hl-target" : "hl-bub";
        curr.node.classList.add(cssClass);
        logToConsole(`
                <div style="font-weight: bold; color: var(--accent-color); margin-bottom: 5px;">${curr.type}</div>
                <div><span style="color: var(--text-muted);">target:</span> ${curr.targetName}</div>
                <div><span style="color: var(--text-muted);">currentTarget:</span> ${curr.currentName}</div>
                <div><span style="color: var(--text-muted);">phase:</span> ${curr.eventPhase} (${curr.phaseLabel})</div>
            `);
        const inspectorEl = document.getElementById("pg-inspector-wrapper");
        if (inspectorEl) {
          inspectorEl.querySelector(".val-type").textContent = curr.type;
          inspectorEl.querySelector(".val-target").textContent = curr.targetName;
          inspectorEl.querySelector(".val-currentTarget").textContent = curr.currentName;
          const setBool = (sel, val) => {
            const badge = inspectorEl.querySelector(sel);
            if (badge) {
              badge.textContent = val ? "true" : "false";
              badge.style.backgroundColor = val ? "rgba(64, 192, 87, 0.2)" : "rgba(250, 82, 82, 0.2)";
              badge.style.color = val ? "var(--success-color)" : "var(--danger-color)";
              badge.style.border = "none";
            }
          };
          setBool(".val-bubbles", curr.bubbles);
          setBool(".val-cancelable", curr.cancelable);
          setBool(".val-defaultPrevented", curr.defaultPrevented);
          const phaseBadges = inspectorEl.querySelectorAll(".phase-badge");
          phaseBadges.forEach((badge) => {
            if (parseInt(badge.getAttribute("data-phase")) === curr.eventPhase) {
              badge.style.backgroundColor = "var(--accent-color)";
              badge.style.color = "white";
              badge.style.borderColor = "var(--accent-color)";
              badge.style.fontWeight = "bold";
            } else {
              badge.style.backgroundColor = "var(--bg-tertiary)";
              badge.style.color = "var(--text-muted)";
              badge.style.borderColor = "var(--border-color)";
              badge.style.fontWeight = "normal";
            }
          });
        }
        index++;
        setTimeout(nextFrame, 800);
      }
      nextFrame();
    }
    [ui.evtType, ui.cap, ui.bub, ui.pd, ui.sp].forEach((el) => {
      el.addEventListener("change", attachListeners);
    });
    ui.reset.addEventListener("click", () => {
      ui.evtType.value = "click";
      ui.cap.checked = true;
      ui.bub.checked = true;
      ui.pd.checked = false;
      ui.sp.checked = false;
      ui.logs.innerHTML = "";
      attachListeners();
    });
    attachListeners();
  }
  var init_playground = __esm({
    "pages/playground.js"() {
      init_ui();
    }
  });

  // pages/quiz.js
  function getProgressStats() {
    const saved = localStorage.getItem("eventLabProgress");
    if (saved) return JSON.parse(saved);
    return { quizComplete: [], challengesComplete: [] };
  }
  function saveProgressStats(stats) {
    localStorage.setItem("eventLabProgress", JSON.stringify(stats));
    updateProgressUI();
  }
  function renderProgressBar() {
    return `<div id="global-progress-bar" style="margin-bottom: 30px; font-family: monospace; font-size: 1.1rem; background: var(--bg-secondary); padding: 15px; border-radius: 8px; border: 1px solid var(--border-color); display: flex; align-items: center; gap: 15px;">
        <strong>\u0E04\u0E27\u0E32\u0E21\u0E04\u0E37\u0E1A\u0E2B\u0E19\u0E49\u0E32:</strong> <span id="progress-visual" style="color: var(--accent-color); letter-spacing: 2px;"></span> <span id="progress-text" style="font-weight: bold;"></span>
    </div>`;
  }
  function updateProgressUI() {
    const visual = document.getElementById("progress-visual");
    const text = document.getElementById("progress-text");
    if (!visual || !text) return;
    const stats = getProgressStats();
    const total = 7;
    const completed = stats.quizComplete.length + stats.challengesComplete.length;
    const percentage = Math.round(completed / total * 100);
    const blocks = Math.round(completed / total * 10);
    let bar = "";
    for (let i = 0; i < 10; i++) {
      bar += i < blocks ? "\u2588" : "\u2591";
    }
    visual.textContent = bar;
    text.textContent = `${percentage}%`;
  }
  function renderQuiz() {
    let html = "";
    html += createPageTitle("Knowledge Quiz", "\u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E40\u0E02\u0E49\u0E32\u0E43\u0E08\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A DOM Events");
    html += renderProgressBar();
    html += `<div style="display: flex; flex-direction: column; gap: 20px;">`;
    quizData.forEach((q, index) => {
      html += `
        <div class="card" id="quiz-card-${q.id}" style="padding: 20px; border: 2px solid var(--border-color);">
            <div style="font-size: 0.8rem; font-weight: bold; color: var(--accent-color); margin-bottom: 10px; text-transform: uppercase;">\u0E2B\u0E21\u0E27\u0E14\u0E2B\u0E21\u0E39\u0E48: ${q.category}</div>
            <h3 style="margin-bottom: 20px; font-size: 1.2rem;">${index + 1}. ${q.question}</h3>
            
            <div class="options-container" id="options-${q.id}" style="display: flex; flex-direction: column; gap: 10px;">
                ${q.options.map((opt, i) => `
                    <button class="quiz-opt-btn" data-qid="${q.id}" data-idx="${i}" style="text-align: left; padding: 15px; border: 1px solid var(--border-color); background: var(--bg-primary); color: var(--text-primary); border-radius: 4px; cursor: pointer; font-size: 1rem; transition: all 0.2s;">
                        ${String.fromCharCode(65 + i)}. ${opt}
                    </button>
                `).join("")}
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
  function initQuiz() {
    updateProgressUI();
    const stats = getProgressStats();
    stats.quizComplete.forEach((qid) => {
      const card = document.getElementById(`quiz-card-${qid}`);
      if (card) {
        card.style.borderColor = "var(--success-color)";
        card.style.opacity = "0.8";
        const fb = document.getElementById(`feedback-${qid}`);
        fb.style.display = "block";
        fb.style.background = "rgba(64, 192, 87, 0.1)";
        fb.querySelector(".feedback-title").innerHTML = "\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07 \u2713";
        fb.querySelector(".feedback-title").style.color = "var(--success-color)";
        const btns = document.querySelectorAll(`#options-${qid} .quiz-opt-btn`);
        btns.forEach((b) => {
          b.disabled = true;
          b.style.cursor = "default";
          const q = quizData.find((x) => x.id === qid);
          if (parseInt(b.getAttribute("data-idx")) === q.answer) {
            b.style.background = "var(--success-color)";
            b.style.color = "white";
          }
        });
      }
    });
    document.querySelectorAll(".quiz-opt-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const qid = btn.getAttribute("data-qid");
        const idx = parseInt(btn.getAttribute("data-idx"));
        const q = quizData.find((x) => x.id === qid);
        const isCorrect = idx === q.answer;
        const feedback = document.getElementById(`feedback-${qid}`);
        const title = feedback.querySelector(".feedback-title");
        const allBtns = document.querySelectorAll(`#options-${qid} .quiz-opt-btn`);
        allBtns.forEach((b) => {
          b.style.background = "var(--bg-primary)";
          b.style.color = "var(--text-primary)";
          b.style.borderColor = "var(--border-color)";
        });
        if (isCorrect) {
          btn.style.background = "var(--success-color)";
          btn.style.color = "white";
          btn.style.borderColor = "var(--success-color)";
          feedback.style.display = "block";
          feedback.style.background = "rgba(64, 192, 87, 0.1)";
          title.innerHTML = "Correct ?";
          title.style.color = "var(--success-color)";
          const card = document.getElementById(`quiz-card-${qid}`);
          card.style.borderColor = "var(--success-color)";
          let s = getProgressStats();
          if (!s.quizComplete.includes(qid)) {
            s.quizComplete.push(qid);
            saveProgressStats(s);
          }
        } else {
          btn.style.background = "var(--danger-color)";
          btn.style.color = "white";
          btn.style.borderColor = "var(--danger-color)";
          const correctBtn = document.querySelector(`#options-${qid} .quiz-opt-btn[data-idx="${q.answer}"]`);
          if (correctBtn) {
            correctBtn.style.border = "2px solid var(--success-color)";
          }
          feedback.style.display = "block";
          feedback.style.background = "rgba(250, 82, 82, 0.1)";
          title.innerHTML = "\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07 \u2717";
          title.style.color = "var(--danger-color)";
          const card = document.getElementById(`quiz-card-${qid}`);
          card.style.borderColor = "var(--danger-color)";
        }
      });
    });
  }
  var quizData;
  var init_quiz = __esm({
    "pages/quiz.js"() {
      init_ui();
      quizData = [
        {
          id: "q1",
          category: "Event Object",
          question: "\u0E21\u0E35\u0E1B\u0E38\u0E48\u0E21 (button) \u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E01\u0E25\u0E48\u0E2D\u0E07 (div) \u0E41\u0E25\u0E30\u0E40\u0E23\u0E32\u0E1C\u0E39\u0E01 click listener \u0E44\u0E27\u0E49\u0E17\u0E35\u0E48\u0E01\u0E25\u0E48\u0E2D\u0E07 div. \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E04\u0E25\u0E34\u0E01\u0E17\u0E35\u0E48\u0E1B\u0E38\u0E48\u0E21, event.target \u0E08\u0E30\u0E21\u0E35\u0E04\u0E48\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E2D\u0E30\u0E44\u0E23?",
          options: ["document", "div", "button", "window"],
          answer: 2,
          explanation: "<code>event.target</code> \u0E08\u0E30\u0E0A\u0E35\u0E49\u0E44\u0E1B\u0E17\u0E35\u0E48 Element \u0E43\u0E19\u0E2A\u0E38\u0E14\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E47\u0E19\u0E15\u0E49\u0E19\u0E01\u0E33\u0E40\u0E19\u0E34\u0E14\u0E02\u0E2D\u0E07 Event \u0E40\u0E2A\u0E21\u0E2D (\u0E43\u0E19\u0E17\u0E35\u0E48\u0E19\u0E35\u0E49\u0E04\u0E37\u0E2D\u0E1B\u0E38\u0E48\u0E21 button) \u0E2A\u0E48\u0E27\u0E19 <code>div</code> \u0E08\u0E30\u0E40\u0E1B\u0E47\u0E19 <code>event.currentTarget</code>",
          visual: `
            <div style="padding: 15px; border: 2px dashed var(--border-color); background: var(--bg-tertiary); text-align: center; border-radius: 4px; margin-top: 15px;">
                <div style="padding: 15px; background: var(--bg-primary); border: 2px solid var(--border-color); display: inline-block; border-radius: 4px;">
                    <div style="color: var(--text-muted); font-size: 0.8rem; margin-bottom: 5px; font-weight: bold;">DIV (currentTarget)</div>
                    <button style="padding: 10px 20px; background: rgba(64, 192, 87, 0.2); border: 2px solid var(--success-color); color: var(--success-color); font-weight: bold; border-radius: 4px; pointer-events: none;">BUTTON \u2190 target</button>
                </div>
            </div>
        `
        },
        {
          id: "q2",
          category: "Propagation",
          question: "\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E19\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19 BUBBLING \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E1B\u0E38\u0E48\u0E21 BUTTON \u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19 DIV \u0E16\u0E39\u0E01\u0E04\u0E25\u0E34\u0E01 \u0E04\u0E37\u0E2D\u0E02\u0E49\u0E2D\u0E43\u0E14?",
          options: [
            "Document \u2192 HTML \u2192 BODY \u2192 DIV \u2192 BUTTON",
            "BUTTON \u2192 DIV \u2192 BODY \u2192 HTML \u2192 Document",
            "\u0E40\u0E09\u0E1E\u0E32\u0E30 BUTTON",
            "\u0E40\u0E09\u0E1E\u0E32\u0E30 Document"
          ],
          answer: 1,
          explanation: "Bubbling \u0E08\u0E30\u0E44\u0E2B\u0E25\u0E02\u0E36\u0E49\u0E19\u0E14\u0E49\u0E32\u0E19\u0E1A\u0E19 (UPWARDS) \u0E08\u0E32\u0E01\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22 (Target Element) \u0E17\u0E30\u0E25\u0E38\u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B\u0E08\u0E19\u0E16\u0E36\u0E07 Document",
          visual: `
            <div style="display: flex; flex-direction: column; align-items: center; gap: 5px; font-family: monospace; font-weight: bold; margin-top: 15px; background: var(--bg-tertiary); padding: 15px; border-radius: 8px;">
                <div style="color: var(--text-muted);">Document</div>
                <div style="color: var(--danger-color);">\u2191</div>
                <div style="color: var(--text-muted);">HTML</div>
                <div style="color: var(--danger-color);">\u2191</div>
                <div style="color: var(--text-muted);">BODY</div>
                <div style="color: var(--danger-color);">\u2191</div>
                <div style="color: var(--text-muted);">DIV</div>
                <div style="color: var(--danger-color);">\u2191</div>
                <div style="color: var(--success-color); padding: 4px 8px; border: 1px solid var(--success-color); border-radius: 4px; background: rgba(64,192,87,0.1);">BUTTON (Target)</div>
            </div>
        `
        },
        {
          id: "q3",
          category: "Propagation",
          question: "\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E02\u0E2D\u0E07 Event Flow (Phases) \u0E43\u0E19 DOM \u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E04\u0E37\u0E2D\u0E02\u0E49\u0E2D\u0E43\u0E14?",
          options: [
            "Target \u2192 Capturing \u2192 Bubbling",
            "Capturing \u2192 Target \u2192 Bubbling",
            "Bubbling \u2192 Target \u2192 Capturing",
            "Capturing \u2192 Bubbling \u2192 Target"
          ],
          answer: 1,
          explanation: "Event \u0E08\u0E30\u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07\u0E25\u0E07 (Capturing) \u0E44\u0E1B\u0E2B\u0E32 Element \u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22 (Target) \u0E41\u0E25\u0E49\u0E27\u0E08\u0E36\u0E07\u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07\u0E01\u0E25\u0E31\u0E1A\u0E02\u0E36\u0E49\u0E19\u0E14\u0E49\u0E32\u0E19\u0E1A\u0E19 (Bubbling)",
          visual: `
            <div style="display: flex; gap: 10px; justify-content: center; margin-top: 15px;">
                <span style="padding: 5px 10px; background: rgba(51, 154, 240, 0.2); border: 1px solid var(--accent-color); border-radius: 4px; font-weight: bold; color: var(--accent-color);">1 Capturing \u2193</span>
                <span style="padding: 5px 10px; background: rgba(64, 192, 87, 0.2); border: 1px solid var(--success-color); border-radius: 4px; font-weight: bold; color: var(--success-color);">2 Target \u229A</span>
                <span style="padding: 5px 10px; background: rgba(250, 82, 82, 0.2); border: 1px solid var(--danger-color); border-radius: 4px; font-weight: bold; color: var(--danger-color);">3 Bubbling \u2191</span>
            </div>
        `
        },
        {
          id: "q4",
          category: "Event Types",
          question: "Event \u0E43\u0E19\u0E02\u0E49\u0E2D\u0E43\u0E14\u0E15\u0E48\u0E2D\u0E44\u0E1B\u0E19\u0E35\u0E49\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E21\u0E35\u0E1E\u0E24\u0E15\u0E34\u0E01\u0E23\u0E23\u0E21 Bubbling \u0E42\u0E14\u0E22\u0E18\u0E23\u0E23\u0E21\u0E0A\u0E32\u0E15\u0E34?",
          options: ["click", "keydown", "focus", "input"],
          answer: 2,
          explanation: "<code>focus</code> \u0E41\u0E25\u0E30 <code>blur</code> \u0E44\u0E21\u0E48\u0E21\u0E35\u0E01\u0E32\u0E23 Bubbling \u0E42\u0E14\u0E22\u0E18\u0E23\u0E23\u0E21\u0E0A\u0E32\u0E15\u0E34 (\u0E2B\u0E32\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E41\u0E1A\u0E1A Bubbling \u0E15\u0E49\u0E2D\u0E07\u0E43\u0E0A\u0E49 <code>focusin</code> \u0E41\u0E25\u0E30 <code>focusout</code> \u0E41\u0E17\u0E19)",
          visual: ""
        }
      ];
    }
  });

  // pages/challenges.js
  function renderChallenges() {
    let html = "";
    html += createPageTitle("Code Challenges", "\u0E1B\u0E23\u0E30\u0E22\u0E38\u0E01\u0E15\u0E4C\u0E43\u0E0A\u0E49\u0E04\u0E27\u0E32\u0E21\u0E23\u0E39\u0E49\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E42\u0E14\u0E22\u0E40\u0E15\u0E34\u0E21\u0E42\u0E04\u0E49\u0E14\u0E25\u0E07\u0E43\u0E19\u0E0A\u0E48\u0E2D\u0E07\u0E27\u0E48\u0E32\u0E07");
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
                <button class="submit-chal-btn" data-cid="${c.id}" style="padding: 10px 20px; background: var(--accent-color); color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">\u0E2A\u0E48\u0E07\u0E04\u0E33\u0E15\u0E2D\u0E1A</button>
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
  function initChallenges() {
    updateProgressUI();
    const stats = getProgressStats();
    stats.challengesComplete.forEach((cid) => {
      const card = document.getElementById(`challenge-card-${cid}`);
      if (card) {
        card.style.borderColor = "var(--success-color)";
        const input = document.getElementById(`input-${cid}`);
        const btn = document.querySelector(`.submit-chal-btn[data-cid="${cid}"]`);
        const fb = document.getElementById(`feedback-${cid}`);
        const c = challengesData.find((x) => x.id === cid);
        input.value = c.answer;
        input.disabled = true;
        input.style.borderColor = "var(--success-color)";
        btn.style.display = "none";
        fb.style.display = "block";
      }
    });
    document.querySelectorAll(".submit-chal-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const cid = btn.getAttribute("data-cid");
        const input = document.getElementById(`input-${cid}`);
        const msg = document.getElementById(`msg-${cid}`);
        const c = challengesData.find((x) => x.id === cid);
        const studentAns = input.value.trim().toLowerCase().replace(/\\s+/g, "");
        const expectedAns = c.answer.toLowerCase().replace(/\\s+/g, "");
        if (studentAns === expectedAns) {
          input.disabled = true;
          input.style.borderColor = "var(--success-color)";
          btn.style.display = "none";
          msg.textContent = "";
          const fb = document.getElementById(`feedback-${cid}`);
          fb.style.display = "block";
          const card = document.getElementById(`challenge-card-${cid}`);
          card.style.borderColor = "var(--success-color)";
          let s = getProgressStats();
          if (!s.challengesComplete.includes(cid)) {
            s.challengesComplete.push(cid);
            saveProgressStats(s);
          }
        } else {
          input.style.borderColor = "var(--danger-color)";
          msg.textContent = "\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07 \u0E25\u0E2D\u0E07\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07!";
          msg.style.color = "var(--danger-color)";
          input.style.transform = "translateX(5px)";
          setTimeout(() => input.style.transform = "translateX(-5px)", 100);
          setTimeout(() => input.style.transform = "translateX(5px)", 200);
          setTimeout(() => input.style.transform = "translateX(0)", 300);
        }
      });
    });
  }
  var challengesData;
  var init_challenges = __esm({
    "pages/challenges.js"() {
      init_ui();
      init_quiz();
      challengesData = [
        {
          id: "c1",
          title: "\u0E42\u0E08\u0E17\u0E22\u0E4C\u0E17\u0E35\u0E48 1: \u0E2B\u0E22\u0E38\u0E14\u0E1E\u0E24\u0E15\u0E34\u0E01\u0E23\u0E23\u0E21\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19",
          description: '\u0E04\u0E38\u0E13\u0E21\u0E35\u0E25\u0E34\u0E07\u0E01\u0E4C <code>&lt;a href="https://google.com"&gt;</code> \u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E43\u0E2B\u0E49\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E19 JavaScript \u0E17\u0E33\u0E07\u0E32\u0E19\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E04\u0E25\u0E34\u0E01 \u0E41\u0E15\u0E48\u0E04\u0E38\u0E13 <strong>\u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23</strong> \u0E43\u0E2B\u0E49 Browser \u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E40\u0E27\u0E47\u0E1A\u0E44\u0E1B\u0E17\u0E35\u0E48 Google',
          codePrefix: `link.addEventListener('click', (event) => {
    // \u0E2B\u0E22\u0E38\u0E14\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E40\u0E27\u0E47\u0E1A
    `,
          codeSuffix: `;
    
    console.log("\u0E42\u0E04\u0E49\u0E14 JS \u0E17\u0E33\u0E07\u0E32\u0E19\u0E41\u0E17\u0E19!");
});`,
          answer: "event.preventDefault()",
          explanation: "<code>event.preventDefault()</code> \u0E08\u0E30\u0E2A\u0E31\u0E48\u0E07\u0E43\u0E2B\u0E49 Browser \u0E2B\u0E22\u0E38\u0E14\u0E01\u0E32\u0E23\u0E01\u0E23\u0E30\u0E17\u0E33\u0E15\u0E32\u0E21\u0E1E\u0E24\u0E15\u0E34\u0E01\u0E23\u0E23\u0E21\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19 (Native Behavior) \u0E02\u0E2D\u0E07 Event \u0E19\u0E31\u0E49\u0E19\u0E46"
        },
        {
          id: "c2",
          title: "\u0E42\u0E08\u0E17\u0E22\u0E4C\u0E17\u0E35\u0E48 2: \u0E2B\u0E22\u0E38\u0E14\u0E01\u0E32\u0E23 Bubbling",
          description: "\u0E04\u0E38\u0E13\u0E21\u0E35\u0E01\u0E32\u0E23\u0E4C\u0E14 `DIV` \u0E02\u0E19\u0E32\u0E14\u0E43\u0E2B\u0E0D\u0E48\u0E17\u0E35\u0E48\u0E04\u0E25\u0E34\u0E01\u0E44\u0E14\u0E49 \u0E41\u0E25\u0E30\u0E21\u0E35\u0E1B\u0E38\u0E48\u0E21 `BUTTON` \u0E2D\u0E22\u0E39\u0E48\u0E02\u0E49\u0E32\u0E07\u0E43\u0E19 \u0E01\u0E32\u0E23\u0E04\u0E25\u0E34\u0E01\u0E17\u0E35\u0E48\u0E1B\u0E38\u0E48\u0E21\u0E08\u0E30\u0E15\u0E49\u0E2D\u0E07 <strong>\u0E44\u0E21\u0E48\u0E44\u0E1B\u0E40\u0E23\u0E35\u0E22\u0E01</strong> Listener \u0E02\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E4C\u0E14",
          codePrefix: `button.addEventListener('click', (event) => {
    // \u0E2B\u0E22\u0E38\u0E14 Event \u0E44\u0E21\u0E48\u0E43\u0E2B\u0E49\u0E25\u0E2D\u0E22\u0E44\u0E1B\u0E2B\u0E32 DIV \u0E14\u0E49\u0E32\u0E19\u0E19\u0E2D\u0E01
    `,
          codeSuffix: `;
});`,
          answer: "event.stopPropagation()",
          explanation: "<code>event.stopPropagation()</code> \u0E43\u0E0A\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2B\u0E22\u0E38\u0E14\u0E01\u0E32\u0E23\u0E2A\u0E48\u0E07\u0E15\u0E48\u0E2D (Propagating) Event \u0E02\u0E36\u0E49\u0E19\u0E2B\u0E23\u0E37\u0E2D\u0E25\u0E07\u0E43\u0E19 DOM Tree"
        },
        {
          id: "c3",
          title: "\u0E42\u0E08\u0E17\u0E22\u0E4C\u0E17\u0E35\u0E48 3: \u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E01\u0E31\u0E1A Element \u0E41\u0E1A\u0E1A\u0E44\u0E14\u0E19\u0E32\u0E21\u0E34\u0E01",
          description: '\u0E04\u0E38\u0E13\u0E21\u0E35\u0E15\u0E30\u0E01\u0E23\u0E49\u0E32\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E17\u0E35\u0E48\u0E21\u0E35\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E2D\u0E22\u0E39\u0E48 100 \u0E0A\u0E34\u0E49\u0E19 \u0E41\u0E17\u0E19\u0E17\u0E35\u0E48\u0E04\u0E38\u0E13\u0E08\u0E30\u0E1C\u0E39\u0E01 Listener \u0E40\u0E02\u0E49\u0E32\u0E01\u0E31\u0E1A\u0E1B\u0E38\u0E48\u0E21\u0E25\u0E1A\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E17\u0E31\u0E49\u0E07 100 \u0E1B\u0E38\u0E48\u0E21\u0E41\u0E22\u0E01\u0E01\u0E31\u0E19 \u0E04\u0E38\u0E13\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E17\u0E35\u0E48\u0E08\u0E30\u0E1C\u0E39\u0E01 Listener \u0E44\u0E27\u0E49\u0E17\u0E35\u0E48\u0E41\u0E21\u0E48\u0E02\u0E2D\u0E07\u0E1E\u0E27\u0E01\u0E21\u0E31\u0E19 <code>&lt;ul id="cart"&gt;</code> \u0E40\u0E1E\u0E35\u0E22\u0E07 <strong>\u0E15\u0E31\u0E27\u0E40\u0E14\u0E35\u0E22\u0E27</strong> \u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E17\u0E04\u0E19\u0E34\u0E04\u0E19\u0E35\u0E49\u0E40\u0E23\u0E35\u0E22\u0E01\u0E27\u0E48\u0E32\u0E2D\u0E30\u0E44\u0E23?',
          codePrefix: `// \u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E19\u0E35\u0E49\u0E16\u0E39\u0E01\u0E40\u0E23\u0E35\u0E22\u0E01\u0E27\u0E48\u0E32\u0E2D\u0E30\u0E44\u0E23?
const patternName = "`,
          codeSuffix: `";`,
          answer: "Event Delegation",
          explanation: "Event Delegation \u0E43\u0E0A\u0E49\u0E1B\u0E23\u0E30\u0E42\u0E22\u0E0A\u0E19\u0E4C\u0E08\u0E32\u0E01 Bubbling \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E01\u0E31\u0E1A Event \u0E43\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E17\u0E35\u0E48\u0E2A\u0E39\u0E07\u0E01\u0E27\u0E48\u0E32\u0E43\u0E19 DOM Tree \u0E0B\u0E36\u0E48\u0E07\u0E0A\u0E48\u0E27\u0E22\u0E1B\u0E23\u0E30\u0E2B\u0E22\u0E31\u0E14 Memory \u0E41\u0E25\u0E30\u0E23\u0E2D\u0E07\u0E23\u0E31\u0E1A Element \u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E02\u0E49\u0E32\u0E21\u0E32\u0E43\u0E2B\u0E21\u0E48\u0E20\u0E32\u0E22\u0E2B\u0E25\u0E31\u0E07\u0E44\u0E14\u0E49\u0E17\u0E31\u0E19\u0E17\u0E35"
        }
      ];
    }
  });

  // pages/basics.js
  function renderBasics(pageId) {
    let html = "";
    if (pageId === "event") {
      html += createPageTitle("Event \u0E04\u0E37\u0E2D\u0E2D\u0E30\u0E44\u0E23?", "Event \u0E04\u0E37\u0E2D\u0E40\u0E2B\u0E15\u0E38\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E2B\u0E23\u0E37\u0E2D\u0E01\u0E32\u0E23\u0E01\u0E23\u0E30\u0E17\u0E33\u0E17\u0E35\u0E48\u0E40\u0E01\u0E34\u0E14\u0E02\u0E36\u0E49\u0E19\u0E43\u0E19\u0E23\u0E30\u0E1A\u0E1A");
      html += `<section class="lesson-section">`;
      html += createExplanationPanel(
        "\u0E41\u0E19\u0E27\u0E04\u0E34\u0E14\u0E02\u0E2D\u0E07 Event",
        `<p>Event \u0E04\u0E37\u0E2D\u0E2A\u0E31\u0E0D\u0E0D\u0E32\u0E13\u0E17\u0E35\u0E48\u0E1A\u0E2D\u0E01\u0E27\u0E48\u0E32\u0E21\u0E35\u0E1A\u0E32\u0E07\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E01\u0E34\u0E14\u0E02\u0E36\u0E49\u0E19 \u0E43\u0E19 Browser \u0E19\u0E31\u0E49\u0E19 Event \u0E08\u0E30\u0E40\u0E01\u0E34\u0E14\u0E02\u0E36\u0E49\u0E19\u0E20\u0E32\u0E22\u0E43\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E15\u0E48\u0E32\u0E07 (Window) \u0E41\u0E25\u0E30\u0E21\u0E31\u0E01\u0E08\u0E30\u0E1C\u0E39\u0E01\u0E15\u0E34\u0E14\u0E01\u0E31\u0E1A Element \u0E43\u0E14 Element \u0E2B\u0E19\u0E36\u0E48\u0E07</p>
             <ul style="margin-top: 10px; padding-left: 20px;">
                <li>\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E04\u0E25\u0E34\u0E01\u0E40\u0E21\u0E32\u0E2A\u0E4C</li>
                <li>\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E01\u0E14\u0E1B\u0E38\u0E48\u0E21\u0E1A\u0E19\u0E04\u0E35\u0E22\u0E4C\u0E1A\u0E2D\u0E23\u0E4C\u0E14</li>
                <li>\u0E2B\u0E19\u0E49\u0E32\u0E40\u0E27\u0E47\u0E1A\u0E42\u0E2B\u0E25\u0E14\u0E40\u0E2A\u0E23\u0E47\u0E08</li>
                <li>\u0E1F\u0E2D\u0E23\u0E4C\u0E21\u0E16\u0E39\u0E01\u0E2A\u0E48\u0E07 (Submit)</li>
             </ul>`
      );
      html += `<div class="lab-grid">
            <div class="lab-column">
                ${createCodePanel(`// Event \u0E40\u0E1B\u0E47\u0E19\u0E41\u0E04\u0E48\u0E2A\u0E31\u0E0D\u0E0D\u0E32\u0E13
// \u0E40\u0E23\u0E32\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35\u0E27\u0E34\u0E18\u0E35 "\u0E14\u0E31\u0E01\u0E23\u0E2D" \u0E1F\u0E31\u0E07\u0E21\u0E31\u0E19
button.addEventListener('click', () => {
  console.log('\u0E40\u0E01\u0E34\u0E14 Event \u0E02\u0E36\u0E49\u0E19\u0E41\u0E25\u0E49\u0E27!');
});`, "javascript")}
            </div>
            <div class="lab-column">
                ${createDemoContainer(`<button id="basic-btn" class="btn" style="padding: 10px 20px; font-size: 1rem; cursor: pointer; border-radius: 4px; border: none; background-color: var(--accent-color); color: white;">\u0E04\u0E25\u0E34\u0E01\u0E2A\u0E23\u0E49\u0E32\u0E07 Event</button>`)}
                ${createEventConsole("basic-console")}
            </div>
        </div></section>`;
    } else if (pageId === "event-handler") {
      html += createPageTitle("Event Handler (\u0E27\u0E34\u0E18\u0E35\u0E40\u0E01\u0E48\u0E32)", "\u0E01\u0E32\u0E23\u0E1C\u0E39\u0E01 Event \u0E41\u0E1A\u0E1A\u0E40\u0E01\u0E48\u0E32\u0E42\u0E14\u0E22\u0E43\u0E0A\u0E49 Property \u0E02\u0E2D\u0E07 DOM");
      html += `<section class="lesson-section">`;
      html += createExplanationPanel(
        "\u0E02\u0E49\u0E2D\u0E08\u0E33\u0E01\u0E31\u0E14: \u0E1C\u0E39\u0E01\u0E44\u0E14\u0E49\u0E41\u0E04\u0E48\u0E15\u0E31\u0E27\u0E40\u0E14\u0E35\u0E22\u0E27",
        `<p>Event Handler \u0E04\u0E37\u0E2D\u0E01\u0E32\u0E23\u0E01\u0E33\u0E2B\u0E19\u0E14 Property \u0E43\u0E2B\u0E49\u0E01\u0E31\u0E1A DOM Element \u0E40\u0E0A\u0E48\u0E19 <code>onclick</code> \u0E2B\u0E23\u0E37\u0E2D <code>onmouseover</code> \u0E02\u0E49\u0E2D\u0E40\u0E2A\u0E35\u0E22\u0E2B\u0E25\u0E31\u0E01\u0E04\u0E37\u0E2D <strong>\u0E04\u0E38\u0E13\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E21\u0E35 Handler \u0E44\u0E14\u0E49\u0E41\u0E04\u0E48 1 \u0E15\u0E31\u0E27\u0E15\u0E48\u0E2D 1 Event \u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19</strong></p>
             <p>\u0E2B\u0E32\u0E01\u0E04\u0E38\u0E13\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E19\u0E43\u0E2B\u0E21\u0E48\u0E43\u0E2B\u0E49\u0E01\u0E31\u0E1A <code>onclick</code> \u0E21\u0E31\u0E19\u0E08\u0E30\u0E44\u0E1B\u0E40\u0E02\u0E35\u0E22\u0E19\u0E17\u0E31\u0E1A (Overwrite) \u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E19\u0E40\u0E01\u0E48\u0E32\u0E17\u0E31\u0E19\u0E17\u0E35!</p>`
      );
      html += `<div class="lab-grid">
            <div class="lab-column">
                ${createCodePanel(`const btn = document.getElementById('handler-btn');

// 1. \u0E1C\u0E39\u0E01 Handler \u0E15\u0E31\u0E27\u0E41\u0E23\u0E01
btn.onclick = () => {
  console.log('\u0E07\u0E32\u0E19 A');
};

// 2. \u0E1C\u0E39\u0E01 Handler \u0E15\u0E31\u0E27\u0E17\u0E35\u0E48\u0E2A\u0E2D\u0E07 (\u0E21\u0E31\u0E19\u0E08\u0E30\u0E40\u0E02\u0E35\u0E22\u0E19\u0E17\u0E31\u0E1A\u0E07\u0E32\u0E19 A!)
btn.onclick = () => {
  console.log('\u0E07\u0E32\u0E19 B');
};`, "javascript")}
            </div>
            <div class="lab-column">
                ${createDemoContainer(`<button id="handler-btn" class="btn" style="padding: 10px 20px; font-size: 1rem; cursor: pointer; border-radius: 4px; border: none; background-color: var(--danger-color); color: white;">\u0E17\u0E14\u0E2A\u0E2D\u0E1A Handler</button>`)}
                ${createEventConsole("handler-console")}
            </div>
        </div></section>`;
    } else if (pageId === "event-listener") {
      html += createPageTitle("Event Listener (\u0E27\u0E34\u0E18\u0E35\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19)", "\u0E27\u0E34\u0E18\u0E35\u0E2A\u0E21\u0E31\u0E22\u0E43\u0E2B\u0E21\u0E48\u0E17\u0E35\u0E48\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E43\u0E2B\u0E49\u0E1C\u0E39\u0E01 Event \u0E44\u0E14\u0E49\u0E2B\u0E25\u0E32\u0E22\u0E15\u0E31\u0E27");
      html += `<section class="lesson-section">`;
      html += createExplanationPanel(
        "addEventListener()",
        `<p><code>addEventListener</code> \u0E04\u0E37\u0E2D\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E43\u0E19\u0E1B\u0E31\u0E08\u0E08\u0E38\u0E1A\u0E31\u0E19 \u0E21\u0E31\u0E19\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E43\u0E2B\u0E49\u0E04\u0E38\u0E13\u0E1C\u0E39\u0E01 Listener <strong>\u0E2B\u0E25\u0E32\u0E22\u0E15\u0E31\u0E27</strong> \u0E40\u0E02\u0E49\u0E32\u0E01\u0E31\u0E1A Event \u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E19\u0E44\u0E14\u0E49 \u0E42\u0E14\u0E22\u0E44\u0E21\u0E48\u0E44\u0E1B\u0E40\u0E02\u0E35\u0E22\u0E19\u0E17\u0E31\u0E1A\u0E01\u0E31\u0E19</p>`
      );
      html += `<div class="lab-grid">
            <div class="lab-column">
                ${createCodePanel(`const btn = document.getElementById('listener-btn');

// 1. \u0E40\u0E1E\u0E34\u0E48\u0E21 Listener \u0E15\u0E31\u0E27\u0E41\u0E23\u0E01
btn.addEventListener('click', () => {
  console.log('\u0E07\u0E32\u0E19 A \u0E17\u0E33\u0E07\u0E32\u0E19!');
});

// 2. \u0E40\u0E1E\u0E34\u0E48\u0E21 Listener \u0E15\u0E31\u0E27\u0E17\u0E35\u0E48\u0E2A\u0E2D\u0E07 (\u0E17\u0E33\u0E07\u0E32\u0E19\u0E23\u0E48\u0E27\u0E21\u0E01\u0E31\u0E1A\u0E07\u0E32\u0E19 A \u0E44\u0E14\u0E49!)
btn.addEventListener('click', () => {
  console.log('\u0E07\u0E32\u0E19 B \u0E17\u0E33\u0E07\u0E32\u0E19!');
});`, "javascript")}
            </div>
            <div class="lab-column">
                ${createDemoContainer(`<button id="listener-btn" class="btn" style="padding: 10px 20px; font-size: 1rem; cursor: pointer; border-radius: 4px; border: none; background-color: var(--success-color); color: white;">\u0E17\u0E14\u0E2A\u0E2D\u0E1A Listener</button>`)}
                ${createEventConsole("listener-console")}
            </div>
        </div></section>`;
    }
    return html;
  }
  function initBasics(pageId) {
    if (pageId === "event") {
      const btn = document.getElementById("basic-btn");
      if (btn) btn.addEventListener("click", (e) => {
        logEvent("basic-console", `Fired: ${e.type}`);
      });
    } else if (pageId === "event-handler") {
      const btn = document.getElementById("handler-btn");
      if (btn) {
        btn.onclick = () => logEvent("handler-console", "Task A (This should get overwritten!)");
        btn.onclick = () => logEvent("handler-console", "Task B Executed! (Task A was overwritten)");
      }
    } else if (pageId === "event-listener") {
      const btn = document.getElementById("listener-btn");
      if (btn) {
        btn.addEventListener("click", () => logEvent("listener-console", "Task A Executed!"));
        btn.addEventListener("click", () => logEvent("listener-console", "Task B Executed!"));
      }
    }
  }
  var init_basics = __esm({
    "pages/basics.js"() {
      init_ui();
    }
  });

  // pages/state.js
  function renderStateEvents() {
    let html = "";
    html += createPageTitle("State Change Events", "Event \u0E17\u0E35\u0E48\u0E17\u0E33\u0E07\u0E32\u0E19\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E02\u0E2D\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E40\u0E27\u0E47\u0E1A\u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E1A\u0E23\u0E32\u0E27\u0E4C\u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E44\u0E1B");
    html += `<section class="lesson-section">`;
    html += createExplanationPanel(
      "Window & Document Events",
      `<p>Event \u0E01\u0E25\u0E38\u0E48\u0E21\u0E19\u0E35\u0E49\u0E0A\u0E48\u0E27\u0E22\u0E43\u0E2B\u0E49\u0E40\u0E23\u0E32\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E44\u0E14\u0E49\u0E27\u0E48\u0E32\u0E2B\u0E19\u0E49\u0E32\u0E40\u0E27\u0E47\u0E1A\u0E42\u0E2B\u0E25\u0E14\u0E40\u0E2A\u0E23\u0E47\u0E08\u0E2B\u0E23\u0E37\u0E2D\u0E22\u0E31\u0E07 \u0E17\u0E23\u0E31\u0E1E\u0E22\u0E32\u0E01\u0E23\u0E15\u0E48\u0E32\u0E07 \u0E46 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E44\u0E2B\u0E21 \u0E2B\u0E23\u0E37\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E01\u0E33\u0E25\u0E31\u0E07\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E08\u0E2D/\u0E1B\u0E23\u0E31\u0E1A\u0E02\u0E19\u0E32\u0E14\u0E2B\u0E19\u0E49\u0E32\u0E15\u0E48\u0E32\u0E07\u0E2D\u0E22\u0E39\u0E48\u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E1B\u0E25\u0E48\u0E32</p>
         <ul style="margin-top: 10px; padding-left: 20px;">
            <li><code>DOMContentLoaded</code>: HTML \u0E16\u0E39\u0E01\u0E42\u0E2B\u0E25\u0E14\u0E41\u0E25\u0E30\u0E2D\u0E48\u0E32\u0E19\u0E04\u0E23\u0E1A\u0E41\u0E25\u0E49\u0E27 (\u0E41\u0E15\u0E48\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E23\u0E2D\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E)</li>
            <li><code>load</code>: \u0E17\u0E38\u0E01\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E43\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E40\u0E27\u0E47\u0E1A (\u0E23\u0E27\u0E21\u0E16\u0E36\u0E07\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E\u0E41\u0E25\u0E30 CSS) \u0E16\u0E39\u0E01\u0E42\u0E2B\u0E25\u0E14\u0E40\u0E2A\u0E23\u0E47\u0E08\u0E2A\u0E21\u0E1A\u0E39\u0E23\u0E13\u0E4C</li>
            <li><code>resize</code>: \u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E02\u0E19\u0E32\u0E14\u0E2B\u0E19\u0E49\u0E32\u0E15\u0E48\u0E32\u0E07\u0E40\u0E1A\u0E23\u0E32\u0E27\u0E4C\u0E40\u0E0B\u0E2D\u0E23\u0E4C</li>
            <li><code>scroll</code>: \u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19 (Scroll) \u0E2B\u0E19\u0E49\u0E32\u0E40\u0E27\u0E47\u0E1A \u0E2B\u0E23\u0E37\u0E2D Element \u0E20\u0E32\u0E22\u0E43\u0E19</li>
         </ul>`
    );
    html += `<div class="lab-grid" style="margin-bottom: 30px;">
        <div class="lab-column">
            ${createCodePanel(`// \u0E2B\u0E19\u0E49\u0E32\u0E40\u0E27\u0E47\u0E1A\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E41\u0E25\u0E49\u0E27!');
});

// \u0E2B\u0E19\u0E49\u0E32\u0E15\u0E48\u0E32\u0E07\u0E16\u0E39\u0E01\u0E1B\u0E23\u0E31\u0E1A\u0E02\u0E19\u0E32\u0E14
window.addEventListener('resize', (e) => {
  console.log(window.innerWidth, window.innerHeight);
});

// \u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E08\u0E2D
scrollBox.addEventListener('scroll', (e) => {
  console.log('\u0E01\u0E33\u0E25\u0E31\u0E07\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19...', e.target.scrollTop);
});`, "javascript")}
        </div>
        
        <div class="lab-column">
            ${createDemoContainer(`
                <div style="margin-bottom: 15px; font-weight: bold; color: var(--accent-color);">
                    \u0E25\u0E2D\u0E07\u0E1B\u0E23\u0E31\u0E1A\u0E02\u0E19\u0E32\u0E14\u0E2B\u0E19\u0E49\u0E32\u0E15\u0E48\u0E32\u0E07\u0E40\u0E1A\u0E23\u0E32\u0E27\u0E4C\u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E14\u0E39\u0E2A\u0E34!
                </div>
                
                <div id="scroll-box" style="height: 120px; overflow-y: scroll; border: 2px solid var(--border-color); border-radius: 4px; padding: 10px; background: var(--bg-tertiary);">
                    <div style="height: 400px; background: linear-gradient(var(--bg-primary), var(--bg-tertiary)); padding: 10px; text-align: center;">
                        <span style="font-weight: bold; color: var(--text-muted);">\u0E25\u0E2D\u0E07\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E25\u0E07\u0E44\u0E1B\u0E02\u0E49\u0E32\u0E07\u0E25\u0E48\u0E32\u0E07 \u{1F447}</span>
                    </div>
                </div>
            `)}
            ${createEventConsole("state-console")}
        </div>
    </div></section>`;
    return html;
  }
  function initStateEvents() {
    logEvent("state-console", "DOMContentLoaded fired (simulated for SPA)");
    logEvent("state-console", "load fired (simulated for SPA)");
    const scrollBox = document.getElementById("scroll-box");
    let scrollTimeout;
    if (scrollBox) {
      scrollBox.addEventListener("scroll", (e) => {
        if (!scrollTimeout) {
          scrollTimeout = setTimeout(() => {
            logEvent("state-console", `scroll | scrollTop: ${Math.round(e.target.scrollTop)}px`);
            scrollTimeout = null;
          }, 100);
        }
      });
    }
    const resizeHandler = () => {
      if (!document.getElementById("scroll-box")) {
        window.removeEventListener("resize", resizeHandler);
        return;
      }
      if (!window.resizeTimeoutState) {
        window.resizeTimeoutState = setTimeout(() => {
          logEvent("state-console", `resize | window: ${window.innerWidth}x${window.innerHeight}`);
          window.resizeTimeoutState = null;
        }, 200);
      }
    };
    window.addEventListener("resize", resizeHandler);
  }
  var init_state = __esm({
    "pages/state.js"() {
      init_ui();
    }
  });

  // pages/renderer.js
  function renderPage(pageId) {
    const contentWrapper = document.getElementById("mainContent");
    contentWrapper.innerHTML = "";
    let html = "";
    if (pageId === "home") {
      html = renderHome();
    } else if (["event", "event-handler", "event-listener"].includes(pageId)) {
      html = renderBasics(pageId);
    } else if (pageId === "state-change") {
      html = renderStateEvents();
    } else if (pageId === "event-object") {
      html = renderEventObject();
    } else if (["capturing", "target", "bubbling"].includes(pageId)) {
      html = renderPropagationEvents();
    } else if (pageId === "prevent-default") {
      html = renderPreventDefault();
    } else if (pageId === "stop-propagation") {
      html = renderStopPropagation();
    } else if (pageId === "playground") {
      html = renderPlayground();
    } else if (pageId === "patterns") {
      html = renderPatterns();
    } else if (pageId === "event-delegation") {
      html = renderDelegation();
    } else if (pageId === "quiz") {
      html = renderQuiz();
    } else if (pageId === "challenges") {
      html = renderChallenges();
    } else if (pageId === "mouse") {
      html = renderMouseEvents();
    } else if (pageId === "keyboard") {
      html = renderKeyboardEvents();
    } else if (pageId === "input") {
      html = renderInputEvents();
    } else if (pageId === "focus") {
      html = renderFocusEvents();
    } else {
      html += createPageTitle("\u0E01\u0E33\u0E25\u0E31\u0E07\u0E1E\u0E31\u0E12\u0E19\u0E32", "\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E2A\u0E48\u0E27\u0E19\u0E19\u0E35\u0E49\u0E01\u0E33\u0E25\u0E31\u0E07\u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32");
    }
    contentWrapper.innerHTML = html;
    if (pageId === "home") {
      initHome();
    } else if (["event", "event-handler", "event-listener"].includes(pageId)) {
      initBasics(pageId);
    } else if (pageId === "state-change") {
      initStateEvents();
    } else if (pageId === "event-object") {
      initEventObject();
    } else if (["capturing", "target", "bubbling"].includes(pageId)) {
      initPropagationEvents();
    } else if (pageId === "prevent-default") {
      initPreventDefault();
    } else if (pageId === "stop-propagation") {
      initStopPropagation();
    } else if (pageId === "playground") {
      initPlayground();
    } else if (pageId === "patterns") {
      initPatterns();
    } else if (pageId === "event-delegation") {
      initDelegation();
    } else if (pageId === "quiz") {
      initQuiz();
    } else if (pageId === "challenges") {
      initChallenges();
    } else if (pageId === "mouse") {
      initMouseEvents();
    } else if (pageId === "keyboard") {
      initKeyboardEvents();
    } else if (pageId === "input") {
      initInputEvents();
    } else if (pageId === "focus") {
      initFocusEvents();
    }
  }
  var init_renderer = __esm({
    "pages/renderer.js"() {
      init_ui();
      init_home();
      init_mouseEvents();
      init_keyboard();
      init_input();
      init_focus();
      init_eventObject();
      init_propagation();
      init_methods();
      init_patterns();
      init_delegation();
      init_playground();
      init_quiz();
      init_challenges();
      init_basics();
      init_state();
    }
  });

  // js/app.js
  var require_app = __commonJS({
    "js/app.js"() {
      init_navigation();
      init_renderer();
      document.addEventListener("DOMContentLoaded", () => {
        setupTheme();
        initNavigation(renderPage);
        renderPage("home");
      });
      function setupTheme() {
        const themeToggleBtn = document.getElementById("themeToggle");
        const themeIcon = document.getElementById("themeIcon");
        const htmlElement = document.documentElement;
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (savedTheme) {
          htmlElement.setAttribute("data-theme", savedTheme);
          updateIcon(savedTheme);
        } else if (prefersDark) {
          htmlElement.setAttribute("data-theme", "dark");
          updateIcon("dark");
        }
        themeToggleBtn.addEventListener("click", () => {
          const currentTheme = htmlElement.getAttribute("data-theme");
          const newTheme = currentTheme === "dark" ? "light" : "dark";
          htmlElement.setAttribute("data-theme", newTheme);
          localStorage.setItem("theme", newTheme);
          updateIcon(newTheme);
        });
        function updateIcon(theme) {
          themeIcon.textContent = theme === "dark" ? "\u2600\uFE0F" : "\u{1F319}";
        }
      }
    }
  });
  require_app();
})();
