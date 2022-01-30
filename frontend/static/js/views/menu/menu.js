'use strict';

import View from '../../core/view.js';

export default class MenuView extends View {

    constructor(parent) {
        super(parent);
        this.parent = parent;
    }

    destructor() {}
    
    render() {
        console.log(this.parent);

        this.parent.innerHTML = `
            <h1>Лабораторные по курсу Информационная безопасность автоматизированных систем</h1>
            <p>
                Список работ:
            </p>
            <p>
                <ol>
                    <li><a href="/lr1" data-link>Лабораторная работа №1</a>.</li>
                    <li><a href="/lr2" data-link>Лабораторная работа №2</a>.</li>
                    <li><a href="/lr3" data-link>Лабораторная работа №3</a>.</li>
                    <li><a href="/lr4" data-link>Лабораторная работа №4</a>.</li>
                    <li><a href="/lr5" data-link>Лабораторная работа №5</a>.</li>
                </ol>
            </p>
        `;
    }
}