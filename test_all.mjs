
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

async function run() {
    const files = [
        'js/app.js', 'js/navigation.js', 'js/components/ui.js',
        'pages/renderer.js', 'pages/home.js', 'pages/mouseEvents.js',
        'pages/keyboard.js', 'pages/input.js', 'pages/focus.js',
        'pages/eventObject.js', 'pages/propagation.js', 'pages/methods.js',
        'pages/patterns.js', 'pages/delegation.js', 'pages/playground.js',
        'pages/quiz.js', 'pages/challenges.js', 'pages/basics.js', 'pages/state.js'
    ];
    for (const file of files) {
        try {
            await import(pathToFileURL(path.resolve(file)).href);
            console.log(file, 'OK');
        } catch(e) {
            console.error(file, 'ERROR:', e.message);
        }
    }
}
run();

