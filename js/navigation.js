export function initNavigation(onNavigate) {
    const navStructure = [
        {
            title: null,
            items: [
                { id: 'home', label: 'หน้าหลัก' }
            ]
        },
        {
            title: 'พื้นฐาน',
            items: [
                { id: 'event', label: 'Event คืออะไร?' },
                { id: 'event-handler', label: 'Event Handler' },
                { id: 'event-listener', label: 'Event Listener' },
                { id: 'event-object', label: 'Event Object' }
            ]
        },
        {
            title: 'ประเภทของ Event',
            items: [
                { id: 'mouse', label: 'Mouse Events' },
                { id: 'keyboard', label: 'Keyboard Events' },
                { id: 'focus', label: 'Focus & Blur' },
                { id: 'input', label: 'Input Events' },
                { id: 'state-change', label: 'State Change Events' }
            ]
        },
        {
            title: 'Event Propagation',
            items: [
                { id: 'capturing', label: 'Capturing' },
                { id: 'target', label: 'Target' },
                { id: 'bubbling', label: 'Bubbling' }
            ]
        },
        {
            title: 'ฟังก์ชันควบคุม (Methods)',
            items: [
                { id: 'prevent-default', label: 'preventDefault()' },
                { id: 'stop-propagation', label: 'stopPropagation()' }
            ]
        },
        {
            title: 'ระดับสูง',
            items: [
                { id: 'event-delegation', label: 'Event Delegation' }
            ]
        },
        {
            title: 'ฝึกฝน',
            items: [
                { id: 'playground', label: 'ห้องทดลอง' },
                { id: 'patterns', label: 'รูปแบบการใช้งานจริง' },
                { id: 'quiz', label: 'แบบทดสอบ' },
                { id: 'challenges', label: 'แบบฝึกหัด' }
            ]
        }
    ];

    const navContainer = document.getElementById('mainNav');
    const mobileToggle = document.getElementById('mobileNavToggle');
    const sidebar = document.getElementById('appSidebar');

    let currentActiveId = 'home';

    navStructure.forEach(section => {
        const sectionEl = document.createElement('div');
        sectionEl.className = 'nav-section';

        if (section.title) {
            const titleEl = document.createElement('div');
            titleEl.className = 'nav-section-title';
            titleEl.textContent = section.title;
            sectionEl.appendChild(titleEl);
        }

        const listEl = document.createElement('ul');
        listEl.className = 'nav-list';

        section.items.forEach(item => {
            const li = document.createElement('li');
            li.className = 'nav-item';
            if (item.id === currentActiveId) {
                li.classList.add('active');
            }

            const a = document.createElement('a');
            a.href = `#${item.id}`;
            a.textContent = item.label;
            a.setAttribute('data-id', item.id);
            
            a.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
                li.classList.add('active');
                
                if (window.innerWidth < 768) {
                    sidebar.classList.remove('open');
                }
                
                onNavigate(item.id);
            });

            li.appendChild(a);
            listEl.appendChild(li);
        });

        sectionEl.appendChild(listEl);
        navContainer.appendChild(sectionEl);
    });

    mobileToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
}
