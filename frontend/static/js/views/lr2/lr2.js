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
            <h1>Лабораторная работа №2</h1>
            <p>
                Разработать программу, представляющую собой форму доступа к определённым информационным ресурсам на основе пароля.
            </p>
            <ol>
                <li>В качестве информационного ресурса использовать любой файл или приложение.</li>
                <li>Доступ к ресурсу должен быть разрешен только санкционированным пользователям. Для этого в программе должны храниться имена пользователей и их пароли. При попытке доступа пользователя к ресурсу проверяется наличие его идентификатора (имени) в системе и соответствие введенного пароля паролю, который хранится в системе.</li>
                <li>В системе должна храниться следующая информация о пользователе: ID или имя пользователя, пароль, ФИО, дата рождения, место рождения (город), номер телефона.</li>
                <li>Пользователь должен иметь возможность поменять пароль (таблица 2).</li>
            </ol>
            <p>
                <br>Вариант 9
                <br>Длина пароля (количество символов) - 7
                <br>Использумые символы - Цифры
                <br>Дополнительные средства защиты - Применение метода аутентификации на основе одноразовых паролей: к первой цифре каждого следующего пароля прибавляется 1
            </p>
            
            <br>Эмуляция доступа к ресурсу:
            
            <div id="subapp"></div>
            
            <br><br><br><a href="/" data-link>Назад в меню</a>
        `;
    }

    getMainForm() {
        return `
            <form action="" method="post" id="main">
                <div id="log_container">
                    <h1>Доступ к ресурсу ya.ru</h1>
                    <hr>
                    <label for="login"><b>Имя пользователя</b></label>
                    <input type="text" name="login" required>
                    <br>
                    <label for="password"><b>Пароль</b></label>
                    <input type="password" name="password" required>
                    <hr>
                
                    <button type="submit" id="signin">Войти</button>
                </div>
                
                <div id="signup_link">
                    <p><a href="#">Регистрация</a>.</p>
                </div>
            </form>
      `
    }

    getRegForm() {
        return `
            <form action="" method="post" id="reg">
                <div id="signup_container">
                    <hr>
                
                    <label for="login"><b>Имя пользователя</b></label>
                    <input type="text" name="login" required>
                    
                    <br>

                    <label for="password"><b>Пароль</b></label>
                    <input type="password" name="password" required>

                    <br>

                    <label for="last"><b>Фамилия</b></label>
                    <input type="text" name="last" required>

                    <br>

                    <label for="first"><b>Имя</b></label>
                    <input type="text" name="first" required>
                    
                    <br>

                    <label for="patr"><b>Отчество</b></label>
                    <input type="text" name="patr" required>

                    <br>

                    <label for="date"><b>Дата рождения</b></label>
                    <input type="text" name="date" required>

                    <br>

                    <label for="place"><b>Место рождения</b></label>
                    <input type="text" name="place" required>

                    <br>

                    <label for="phone"><b>Телефон</b></label>
                    <input type="text" name="phone" required>
                    <hr>
                
                    <button type="submit" class="signup">Сохранить</button>
                </div>
            </form>
        `
    }

    getUpdatePassForm() {
        return `
            <form action="" method="post" id="newpass">
                <div id="newpass_container">
                    <hr>
                
                    <label for="curr_password"><b>Текущий пароль</b></label>
                    <input type="password" name="curr_password" required>

                    <br>

                    <label for="new_password"><b>Новый пароль</b></label>
                    <input type="password" name="new_password" required>

                    <br>

                    <label for="repeat_password"><b>Повторить пароль</b></label>
                    <input type="password" name="repeat_password" required>
                    <hr>
                
                    <button type="submit" id="update">Сохранить</button>
                </div>
            </form>
        `    }

    getAccessFrom() {
        return `
            <p>Поздравляю с доступом к <a href="ya.ru">ya.ru</a>.
            
            <br>

            <p><a href="#" id="newpass">Обновить профиль?</a>
            <p><a href="#" id="clean">Удалить профиль?</a>
            <p><a href="#" id="logout">Выйти?</a>
        `
    }
}