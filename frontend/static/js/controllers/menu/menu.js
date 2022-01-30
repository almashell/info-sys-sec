'use strict';

import Controller from '../../core/controller.js';
import MenuView from "../../views/menu/menu.js";

export default class MenuController extends Controller {
    constructor(parent) {
        super(parent);
        this.view = new MenuView(parent);
    }

    destructor() {}
    
    action() {
        this.view.render();
    }
}