'use strict';

import MenuController from "./controllers/menu/menu.js";
import LrOneController from "./controllers/lr1/lr1.js";
import LrTwoController from "./controllers/lr2/lr2.js";
import LrThreeController from "./controllers/lr3/lr3.js";
import LrFourController from "./controllers/lr4/lr4.js";
import LrFiveController from "./controllers/lr5/lr5.js";

import Router from './core/router.js';

let application = document.getElementById('app');

let router = new Router();
router.addRoute('/', new MenuController(application));
router.addRoute('/lr1', new LrOneController(application));
router.addRoute('/lr2', new LrTwoController(application));
router.addRoute('/lr3', new LrThreeController(application));
router.addRoute('/lr4', new LrFourController(application));
router.addRoute('/lr5', new LrFiveController(application));

router.route();