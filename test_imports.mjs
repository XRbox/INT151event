
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

global.window = {
    matchMedia: () => ({ matches: false }),
    addEventListener: () => {},
    removeEventListener: () => {},
    innerWidth: 1024,
    innerHeight: 768
};
global.document = {
    addEventListener: () => {},
    getElementById: (id) => ({
        innerHTML: '',
        addEventListener: () => {},
        classList: { add: () => {}, remove: () => {}, toggle: () => {} },
        setAttribute: () => {},
        getAttribute: () => {},
        appendChild: () => {},
        querySelectorAll: () => [],
        querySelector: () => null
    }),
    createElement: () => ({
        className: '',
        classList: { add: () => {}, remove: () => {}, toggle: () => {} },
        appendChild: () => {},
        setAttribute: () => {},
        addEventListener: () => {}
    }),
    documentElement: {
        setAttribute: () => {},
        getAttribute: () => {}
    }
};
global.localStorage = {
    getItem: () => null,
    setItem: () => {}
};

async function run() {
    try {
        console.log('Loading app.js...');
        await import(pathToFileURL(path.resolve('./js/app.js')).href);
        console.log('Successfully loaded app.js without syntax/import errors!');
    } catch(e) {
        console.error('ERROR LOADING APP.JS:', e);
    }
}
run();

