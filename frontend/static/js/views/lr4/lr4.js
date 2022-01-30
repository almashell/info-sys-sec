'use strict';

import View from '../../core/view.js';

export default class LrFourView extends View {

    constructor(parent) {
        super(parent);
        this.parent = parent;
    }

    destructor() {}

    render() {
        this.parent.innerHTML = `
            <h1>Лабораторная работа №4</h1>
            <p>
                Составить программу шифрования методом контрольных сумм и методом хеширования с применением гаммирования.
                <br>
                Пусть а = 23, b = 19, с = МахVal + 1 = 256, t0 = 235. Вычислить контрольные суммы для нескольких сообщений методом контроль- ных сумм (KSumm) и методом хеширования с применением гаммиро- вания (SummKodBukvOtkr):
            </p>
            <ol>
                <li>Р = '0000123456', KSumm = ?, SummKodBukvOtkr – ?;</li>
                <li>Р = '6543210000', KSumm = ?, SummKodBukvOtkr – ?;</li>
                <li>Р = '10000001', KSumm = ?, SummKodBukvOtkr – ?;</li>
                <li>Р = '11000000', KSumm = ?, SummKodBukvOtkr – ?;</li>
            </ol>
            <p>
                <br>Вариант 9
            </p>
            
            <br>
            <div id="res"></div>

            <br><br><br><a href="/" data-link>Назад в меню</a>
        `;
    }
}