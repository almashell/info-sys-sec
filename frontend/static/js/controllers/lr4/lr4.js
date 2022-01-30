'use strict';

import Controller from '../../core/controller.js';
import LrFourView from "../../views/lr4/lr4.js";

export default class LrFourController extends Controller {
    
    constructor(parent) {
        super(parent);
        this.view = new LrFourView(parent);
    }

    destructor() {}
    
    action() {
        this.view.render()

        const a = 23;
        const b = 19;
        const MaxVal = 255;
        const c = MaxVal + 1
        const t0 = 235;

        const P1 = '0000123456';
        const P2 = '6543210000';
        const P3 = '10000001';
        const P4 = '11000000';

        let P1_ASCII_sum = P1.split('').map((s) => s.charCodeAt()).reduce((a, b) => a + b, 0);
        let P2_ASCII_sum = P1.split('').map((s) => s.charCodeAt()).reduce((a, b) => a + b, 0);
        let P3_ASCII_sum = P1.split('').map((s) => s.charCodeAt()).reduce((a, b) => a + b, 0);
        let P4_ASCII_sum = P1.split('').map((s) => s.charCodeAt()).reduce((a, b) => a + b, 0);
        
        let KSum1 = P1_ASCII_sum % (MaxVal + 1);
        let KSum2 = P2_ASCII_sum % (MaxVal + 1);
        let KSum3 = P3_ASCII_sum % (MaxVal + 1);
        let KSum4 = P4_ASCII_sum % (MaxVal + 1);


        let summKodBukvOtkr1 = P1.split('').map((s) => s.charCodeAt()).map((v, i) => {
            let Tarr = this.#getTArr(a, b, c, t0, P1)
            return v ^ Tarr[i];
        }).reduce((a, b) => a + b, 0) % (MaxVal + 1);
       
        let summKodBukvOtkr2 = P2.split('').map((s) => s.charCodeAt()).map((v, i) => {
            let Tarr = this.#getTArr(a, b, c, t0, P2)
            return v ^ Tarr[i];
        }).reduce((a, b) => a + b, 0) % (MaxVal + 1);
        
        let summKodBukvOtkr3 = P3.split('').map((s) => s.charCodeAt()).map((v, i) => {
            let Tarr = this.#getTArr(a, b, c, t0, P3)
            return v ^ Tarr[i];
        }).reduce((a, b) => a + b, 0) % (MaxVal + 1);
        
        let summKodBukvOtkr4 = P4.split('').map((s) => s.charCodeAt()).map((v, i) => {
            let Tarr = this.#getTArr(a, b, c, t0, P4)
            return v ^ Tarr[i];;
        }).reduce((a, b) => a + b, 0) % (MaxVal + 1);
        
        const res = document.getElementById('res');
        res.innerHTML = `
            <p><b> For P = ${P1} KSum = ${KSum1} and SummKodBukvOtkr = ${summKodBukvOtkr1}</b>
            <p> &emsp; Array for KSum is ${P1.split('').map((s) => s.charCodeAt()).join(",")} and sum is ${P1.split('').map((s) => s.charCodeAt()).reduce((a, b) => a + b, 0)}
            <p> &emsp; Array of t-s [0, p - 1] is ${this.#getTArr(a, b, c, t0, P1)}
            <p> &emsp; Pairwise XOR with gammas is ${P1.split('').map((s) => s.charCodeAt()).map((v, i) => {
                let Tarr = this.#getTArr(a, b, c, t0, P1)
                return v ^ Tarr[i];
            })}
            <p><b> For P = ${P2} KSum = ${KSum2} and SummKodBukvOtkr = ${summKodBukvOtkr2}</b>
            <p> &emsp; Array for KSum is ${P2.split('').map((s) => s.charCodeAt()).join(",")} and sum is ${P2.split('').map((s) => s.charCodeAt()).reduce((a, b) => a + b, 0)}
            <p> &emsp; Array of t-s [0, p - 1] is ${this.#getTArr(a, b, c, t0, P2)}
            <p> &emsp; Pairwise XOR with gammas is ${P2.split('').map((s) => s.charCodeAt()).map((v, i) => {
                let Tarr = this.#getTArr(a, b, c, t0, P2)
                return v ^ Tarr[i];
            })}
            <p><b> For P = ${P3} KSum = ${KSum3} and SummKodBukvOtkr = ${summKodBukvOtkr3}</b>
            <p> &emsp; Array for KSum is ${P3.split('').map((s) => s.charCodeAt()).join(",")} and sum is ${P3.split('').map((s) => s.charCodeAt()).reduce((a, b) => a + b, 0)}
            <p> &emsp; Array of t-s [0, p - 1] is ${this.#getTArr(a, b, c, t0, P3)}
            <p> &emsp; Pairwise XOR with gammas is ${P3.split('').map((s) => s.charCodeAt()).map((v, i) => {
                let Tarr = this.#getTArr(a, b, c, t0, P3)
                return v ^ Tarr[i];
            })}
            <p><b> For P = ${P4} KSum = ${KSum4} and SummKodBukvOtkr = ${summKodBukvOtkr4}</b>
            <p> &emsp; Array for KSum is ${P4.split('').map((s) => s.charCodeAt()).join(",")} and sum is ${P4.split('').map((s) => s.charCodeAt()).reduce((a, b) => a + b, 0)}
            <p> &emsp; Array of t-s [0, p - 1] is ${this.#getTArr(a, b, c, t0, P4)}
            <p> &emsp; Pairwise XOR with gammas is ${P4.split('').map((s) => s.charCodeAt()).map((v, i) => {
                let Tarr = this.#getTArr(a, b, c, t0, P4)
                return v ^ Tarr[i];
            })}
        `

    }

    #getTArr = (a, b, c, t0, P) => {
        const gamma = t => (a * t + b) % c;

        let i = 1
        let tArr = [t0]
        while (i <= (P.length - 1)) {
            tArr.push(gamma(tArr[i - 1]));
            i++;
        }

        return tArr;
    }

}