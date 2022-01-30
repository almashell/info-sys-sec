'use strict';

export default class Router {
    
    constructor() {
        this.urls = new Map();
        this.currentController = null;
    }

    addRoute(path, controller) {
        this.urls.set(path, controller);
    }

    route() {
        window.addEventListener('popstate', () => {
            const currentPath = window.location.pathname;
            this.#handle(currentPath);
        });
        this.#handle(window.location.pathname);
    }

    #handle = (current) => {
        let controller = this.urls.get(current);
        if (!controller) {
            // todo: 404 handler
            let app = document.getElementById('app');
            app.innerHTML = '404 Not Found';
            
            console.log(current);
            console.log(this.urls);
            console.error('Controller not found');
            return;
        }
        if (this.currentController) {
            this.currentController.destructor();
        }
        this.currentController = controller;
        console.log(this.currentController)
        this.currentController.action();
    }

    static redirectForward(href) {
        window.history.pushState({}, '', href);
        window.history.pushState({}, '', href);
        window.history.back();

        // window.location.href = href; // bad
    }

    static redirectBack() {
        window.history.back();
    }
}