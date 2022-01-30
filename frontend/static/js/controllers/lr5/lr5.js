'use strict';

import Controller from '../../core/controller.js';
import LrFiveView from "../../views/lr5/lr5.js";

export default class LrFourController extends Controller {
    
    constructor(parent) {
        super(parent);
        this.view = new LrFiveView(parent);
    }

    destructor() {}
    
    action() {
        this.view.render()
    }

}