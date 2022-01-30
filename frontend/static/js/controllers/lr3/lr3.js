'use strict';

import Controller from '../../core/controller.js';
import LrTwoView from "../../views/lr3/lr3.js";

export default class LrThreeController extends Controller {
    
    constructor(parent) {
        super(parent);
        this.view = new LrTwoView(parent);

        this.pass = null

        this.bigLatin = false
        this.smallLatin = false
        this.bigRussian = false
        this.smallRussian = false
        this.symbols = false
        this.numbers = false
    }

    destructor() {}
    
    action() {
        this.view.render();

        const bigLatin = document.getElementById('bigLatin');
        const smallLatin = document.getElementById('smallLatin');
        const bigRussian = document.getElementById('bigRussian');
        const smallRussian = document.getElementById('smallRussian');
        const symbols = document.getElementById('symbols');
        const numbers = document.getElementById('numbers');

        bigLatin.addEventListener('change', this.#bigLatinChange.bind(this));
        smallLatin.addEventListener('change', this.#smallLatinChange.bind(this));
        bigRussian.addEventListener('change', this.#bigRussianChange.bind(this));
        smallRussian.addEventListener('change', this.#smallRussianChange.bind(this));
        symbols.addEventListener('change', this.#symbolsChange.bind(this));
        numbers.addEventListener('change', this.#numbersChange.bind(this));
        
        this.#calculatePass();
    }

    #calculatePass = () => {
        const pass = document.getElementById('pass');
        const lowerBound = document.getElementById('lower_bound');
        const passPower = document.getElementById('pass_power');
        const passLen = document.getElementById('pass_len');

        const P = 0.0001;
        const V = 3;
        const T = 15*24*60;

        const lowerBoundValue = Math.ceil(V * T / P);
        lowerBound.innerHTML = "S* (нижняя граница паролей): " + lowerBoundValue;

        let A = 0
        let AArray = []

        if (this.bigLatin) {
            A += this.#getLargeLatinLetters().length;
            AArray = this.#concatArrs(AArray, this.#getLargeLatinLetters());
        }
        if (this.smallLatin) {
            A += this.#getSmallLatinLetters().length;
            AArray = this.#concatArrs(AArray, this.#getSmallLatinLetters());
        }
        if (this.bigRussian) {
            A += this.#getLargeRussianLetters().length;
            AArray = this.#concatArrs(AArray, this.#getLargeRussianLetters());
        }
        if (this.smallRussian) {
            A += this.#getSmallRussianLetters().length;
            AArray = this.#concatArrs(AArray, this.#getSmallRussianLetters());
        }
        if (this.symbols) {
            A += this.#getSymbols().length;
            AArray = this.#concatArrs(AArray, this.#getSymbols());
        }
        if (this.numbers) {
            A += this.#getNumbers().length;
            AArray = this.#concatArrs(AArray, this.#getNumbers());
        }

        console.log("AArray", AArray);

        passPower.innerHTML = "А (мощность алфавита): " + A;

        let L = 0;
        while (A != 0 && lowerBoundValue > Math.pow(A, L)) L++;
        passLen.innerHTML = "L (длина пароля): " + L;

        const AArrayShuffled = AArray.sort(() => 0.5 - Math.random());
        let AArraySelected = AArrayShuffled.slice(0, L);

        pass.innerHTML = "<br>Пароль: " + AArraySelected.join("");
    }

    #concatArrs = (...args) => {
        return args.reduce((acc, val) => [...acc, ...val]);
    }

    #bigLatinChange = (event) => {
        event.preventDefault();
        this.bigLatin = event.target.checked;
        console.log("this.bigLatin", this.bigLatin)
        this.#calculatePass();
    }

    #smallLatinChange = (event) => {
        event.preventDefault();
        this.smallLatin = event.target.checked;
        console.log("this.smallLatin", this.smallLatin)
        this.#calculatePass();
    }

    #bigRussianChange = (event) => {
        event.preventDefault();
        this.bigRussian = event.target.checked;
        console.log("this.bigRussian", this.bigRussian)
        this.#calculatePass();
    }

    #smallRussianChange = (event) => {
        event.preventDefault();
        this.smallRussian = event.target.checked;
        console.log("this.smallRussian", this.smallRussian)
        this.#calculatePass();
    }

    #symbolsChange = (event) => {
        event.preventDefault();
        this.symbols = event.target.checked;
        console.log("this.symbols", this.symbols)
        this.#calculatePass();
    }

    #numbersChange = (event) => {
        event.preventDefault();
        this.numbers = event.target.checked;
        console.log("this.numbers", this.numbers)
        this.#calculatePass();
    }

    #getSmallLatinLetters = () => {
        return ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    }

    #getLargeLatinLetters = () => {
        return ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    }

    #getSmallRussianLetters = () => {
        return ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'э', 'ю', 'я'];
    }

    #getLargeRussianLetters = () => {
        return ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я'];
    }

    #getNumbers = () => {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    }

    #getSymbols = () => {
        return ['!', '@', '#', '$', '%', '&', '?', '-', '+', '=', '~'];

    }
}