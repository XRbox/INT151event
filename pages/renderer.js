import { 
    createPageTitle, 
    createExplanationPanel, 
    createCodePanel,
    createDemoContainer,
    createEventConsole,
    createEventInspector
} from '../js/components/ui.js';
import { renderHome, initHome } from './home.js';
import { renderMouseEvents, initMouseEvents } from './mouseEvents.js';
import { renderKeyboardEvents, initKeyboardEvents } from './keyboard.js';
import { renderInputEvents, initInputEvents } from './input.js';
import { renderFocusEvents, initFocusEvents } from './focus.js';
import { renderEventObject, initEventObject } from './eventObject.js';
import { renderPropagationEvents, initPropagationEvents } from './propagation.js';
import { renderPreventDefault, initPreventDefault, renderStopPropagation, initStopPropagation } from './methods.js';
import { renderPatterns, initPatterns } from './patterns.js';
import { renderDelegation, initDelegation } from './delegation.js';
import { renderPlayground, initPlayground } from './playground.js';
import { renderQuiz, initQuiz } from './quiz.js';
import { renderChallenges, initChallenges } from './challenges.js';
import { renderBasics, initBasics } from './basics.js';
import { renderStateEvents, initStateEvents } from './state.js';

export function renderPage(pageId) {
    const contentWrapper = document.getElementById('mainContent');
    
    contentWrapper.innerHTML = '';
    
    let html = '';
    
    if (pageId === 'home') {
        html = renderHome();
    } else if (['event', 'event-handler', 'event-listener'].includes(pageId)) {
        html = renderBasics(pageId);
    } else if (pageId === 'state-change') {
        html = renderStateEvents();
    } else if (pageId === 'event-object') {
        html = renderEventObject();
    } else if (['capturing', 'target', 'bubbling'].includes(pageId)) {
        html = renderPropagationEvents();
    } else if (pageId === 'prevent-default') {
        html = renderPreventDefault();
    } else if (pageId === 'stop-propagation') {
        html = renderStopPropagation();
    } else if (pageId === 'playground') {
        html = renderPlayground();
    } else if (pageId === 'patterns') {
        html = renderPatterns();
    } else if (pageId === 'event-delegation') {
        html = renderDelegation();
    } else if (pageId === 'quiz') {
        html = renderQuiz();
    } else if (pageId === 'challenges') {
        html = renderChallenges();
    } else if (pageId === 'mouse') {
        html = renderMouseEvents();
    } else if (pageId === 'keyboard') {
        html = renderKeyboardEvents();
    } else if (pageId === 'input') {
        html = renderInputEvents();
    } else if (pageId === 'focus') {
        html = renderFocusEvents();
    } else {
        html += createPageTitle('กำลังพัฒนา', 'เนื้อหาส่วนนี้กำลังอยู่ในระหว่างการพัฒนา');
    }

    contentWrapper.innerHTML = html;
    
    if (pageId === 'home') {
        initHome();
    } else if (['event', 'event-handler', 'event-listener'].includes(pageId)) {
        initBasics(pageId);
    } else if (pageId === 'state-change') {
        initStateEvents();
    } else if (pageId === 'event-object') {
        initEventObject();
    } else if (['capturing', 'target', 'bubbling'].includes(pageId)) {
        initPropagationEvents();
    } else if (pageId === 'prevent-default') {
        initPreventDefault();
    } else if (pageId === 'stop-propagation') {
        initStopPropagation();
    } else if (pageId === 'playground') {
        initPlayground();
    } else if (pageId === 'patterns') {
        initPatterns();
    } else if (pageId === 'event-delegation') {
        initDelegation();
    } else if (pageId === 'quiz') {
        initQuiz();
    } else if (pageId === 'challenges') {
        initChallenges();
    } else if (pageId === 'mouse') {
        initMouseEvents();
    } else if (pageId === 'keyboard') {
        initKeyboardEvents();
    } else if (pageId === 'input') {
        initInputEvents();
    } else if (pageId === 'focus') {
        initFocusEvents();
    }
}
