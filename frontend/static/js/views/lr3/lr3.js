'use strict';

import View from '../../core/view.js';

export default class LrTwoView extends View {

    constructor(parent) {
        super(parent);
        this.parent = parent;
    }

    destructor() {}

    render() {
        this.parent.innerHTML = `
            <h1>Лабораторная работа №3</h1>
            <p>
                В таблице 3 найти для вашего варианта значения характеристик P, V, T.
            </p>
            <ol>
                <li>Вычислить по формуле (2) нижнюю границу S* для заданных P, V, T.</li>
                <li>Выбрать некоторый алфавит с мощностью A и получить ми- нимальную длину пароля L, при котором выполняется условие (3).</li>
                <li>Реализовать программу-генератор паролей пользователей. Программа должна формировать случайную последовательность символов длины L, при этом должен использоваться алфавит из A символов.</li>

            </ol>
            <br>
            <p>
                <br>Вариант 9
                <br>P (вероятность) = 10–4
                <br>V (скорость перебора) = 3 пароля/мин
                <br>T (срок дейстивя пароля) = 15 дней
            </p>
            
            <br>
            <input type="checkbox" id="bigLatin" name="bigLatin">
            <label for="bigLatin">Латинские большие</label>
            <br>
            <input type="checkbox" id="smallLatin" name="smallLatin">
            <label for="smallLatin">Латинские маленькие</label>
            <br>
            <input type="checkbox" id="bigRussian" name="bigRussian">
            <label for="bigRussian">Русские большие</label>
            <br>
            <input type="checkbox" id="smallRussian" name="smallRussian">
            <label for="smallRussian">Русские маленькие</label>
            <br>
            <input type="checkbox" id="symbols" name="symbols">
            <label for="symbols">Служебные символы</label>
            <br>
            <input type="checkbox" id="numbers" name="numbers">
            <label for="numbers">Цифры</label>
            <br>
            <div id="lower_bound">S* (нижняя граница паролей): </div>
            <br>
            <div id="pass_power">А (мощность алфавита): </div>
            <br>
            <div id="pass_len">L (длина пароля): </div>
            <br>
            <div id="pass">Пароль: </div>

            <br><br><br><a href="/" data-link>Назад в меню</a>
        `;
    }
}