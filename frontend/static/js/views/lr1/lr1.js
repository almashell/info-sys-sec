'use strict';

import View from '../../core/view.js';

export default class LrOneView extends View {

    constructor(parent) {
        super(parent);
        this.parent = parent;
    }

    destructor() {}

    render() {
        this.parent.innerHTML = `
            <h1>Лабораторная работа №1</h1>
            <p>
                Реализовать простейший генератор паролей, обладающий основными требованиями к парольным генераторам.
            </p>
            <ol>
                <li>Ввод идентификатора пользователя с клавиатуры. Данный идентификатор представляет собой последовательность символов a1, a2, ..., aN, где N — количество символов идентификатора (может быть любым), ai — i-й символ идентификатора пользователя.</li>
                <li>Формирование пароля пользователя b1, b2, ..., bM для данного идентификатора, где M — количество символов пароля, соответствующее вашему варианту и вывод его на экран. Алгоритм получения символов пароля bi указан в перечне требований для вашего варианта.</li>
            </ol>
            <p>
                <br>Вариант 12
                <br>M = 12
                <br>b1, ..., b1 + Q — случайные малые буквы русского алфавита, где Q = N3mod5; b1+Q+1, ..., b1+Q+1+P — случайные заглавные буквы русского алфавита, где P = N2mod6. Оставшиеся символы пароля — случайные цифры
            </p>
            
            <br>Идентификатор:
            <input type="text" id="id">
            
            <table>
                <tbody id="table_id"></tbody>
            </table>
            
            <div id="q">Q: </div>
            
            <div id="pass">Пароль: </div>

            <br><br><br><a href="/" data-link>Назад в меню</a>
        `;
    }
}