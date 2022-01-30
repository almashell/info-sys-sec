'use strict';

import Router from './router.js'

export default class Controller {

    constructor(parent) {
        this.parent = parent;

        document.addEventListener('DOMContentLoaded', (event) => {
            document.body.addEventListener("click", e => {
                if (e.target.matches("[data-link]")) {
                    e.preventDefault();
                    Router.redirectForward(e.target.href);
                }
            });
        });
    }

    destructor() {}
    
    action() {}
}