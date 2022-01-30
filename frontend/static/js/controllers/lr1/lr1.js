'use strict';

import Controller from '../../core/controller.js';
import LrOneView from "../../views/lr1/lr1.js";

export default class LrOneController extends Controller {
    
    constructor(parent) {
        super(parent);
        this.view = new LrOneView(parent);
        this.pass = ""
    }

    destructor() {
        this.pass = ""
    }
    
    action() {
        this.view.render()

        const idValue = document.getElementById('id');

        idValue.addEventListener('input', this.#idInput.bind(this));
    }

    #idInput = (event) => {
        event.preventDefault();

        let curIdLen = event.target.value.length

        const Q = Math.pow(curIdLen, 3) % 5
        console.log("Q=", Q)

        const P = Math.pow(curIdLen, 2) % 6
        console.log("P=", P)

        const LEN = 12

        const qValue = document.getElementById('q');
        const passValue = document.getElementById('pass');

        // How to get a number of random elements from an array? - https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array
        const ruShuffled = this.#getSmallRussianLetters().sort(() => 0.5 - Math.random());
        let ruSelected = ruShuffled.slice(0, Q + 1);
        console.log("Маленькие буквы русского алфавита", ruSelected)

        const RUShuffled = this.#getLargeRussianLetters().sort(() => 0.5 - Math.random());
        let RUSelected = RUShuffled.slice(0, P + 1);
        console.log("Большие буквы русского алфавита", RUSelected)

        let numSelected = []

        if ((ruSelected.length + RUSelected.length) < LEN) {
            // Create an array with random values https://stackoverflow.com/questions/5836833/create-an-array-with-random-values
            // numSelected = Array.from({length: LEN - (ruSelected.length + RUSelected.length)}, () => Math.floor(Math.random() * (LEN - (ruSelected.length + RUSelected.length))));
            const numShuffled = this.#getNumbers().sort(() => 0.5 - Math.random());
            numSelected = numShuffled.slice(0, LEN - (ruSelected.length + RUSelected.length));
            console.log("Цифры", numSelected)
        }

        this.pass = this.#concatArrs(ruSelected, RUSelected, numSelected).join("")
        console.log("Пароль: ", this.pass)
        if (this.pass.length <= 12) {
            qValue.innerHTML = "Q: " + Q
            passValue.innerHTML = "Пароль: " + this.pass
        }
    };

    // Merge Arrays in one with ES6 Array spread - https://gist.github.com/yesvods/51af798dd1e7058625f4#gistcomment-2129224
    #concatArrs = (...args) => {
        return args.reduce((acc, val) => [...acc, ...val]);
    }

    #getNumbers = () => {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    }

    #getSmallRussianLetters = () => {
        return ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'э', 'ю', 'я'];
    }

    #getLargeRussianLetters = () => {
        return ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я'];
    }

}