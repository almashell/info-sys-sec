'use strict';

import Controller from '../../core/controller.js';
import LrTwoView from "../../views/lr2/lr2.js";

export default class LrTwoController extends Controller {
    
    constructor(parent) {
        super(parent);
        this.view = new LrTwoView(parent);

        this.subApplication = ""
        this.login = ""
        this.pass = ""

        this.first = ""
        this.patr = ""
        this.last = ""

        this.date = ""
        this.place = ""

        this.phone = ""
    }

    destructor() {
        this.subApplication = ""
        this.login = ""
        this.pass = ""

        this.first = ""
        this.patr = ""
        this.last = ""

        this.date = ""
        this.place = ""

        this.phone = ""
    }
    
    action() {
        this.view.render();
        this.subApplication = document.getElementById('subapp');
        this.#renderSubapp("")
    }

    #renderSubapp = (msg) => {
        this.subApplication.innerHTML = this.view.getMainForm() + "<br>" + msg

        const signInForm = document.getElementById('main');
        const signUpLink = document.getElementById('signup_link');

        signInForm.addEventListener('submit', this.#submitSignIn.bind(this));
        signUpLink.addEventListener('click', this.#signUp.bind(this));
    }

    #renderAccessForm = (msg) => {
        this.subApplication.innerHTML = `
            <p> Ваши данные:
            <p> - Логин: ${this.login}
            <p> - Имя: ${this.first}
            <p> - Фамилия: ${this.last}
            <p> - Отчество: ${this.patr}
            <p> - Дата рождения: ${this.date}
            <p> - Место рождения: ${this.place}
            <p> - Телефон: ${this.phone}
            ` + this.view.getAccessFrom() + "<br>" + msg;

        const updatePassLink = document.getElementById('newpass');
        const removeAccLink = document.getElementById('clean');
        const logoutLink = document.getElementById('logout');

        updatePassLink.addEventListener('click', this.#updatePass.bind(this));
        removeAccLink.addEventListener('click', this.#removeAcc.bind(this));
        logoutLink.addEventListener('click', this.#logoutAcc.bind(this));
    }

    #signUp = (event) => {
        event.preventDefault();

        this.subApplication.innerHTML = this.view.getRegForm()

        const signUpForm = document.getElementById('reg');

        signUpForm.addEventListener('submit', this.#submitSignUp.bind(this));
    }

    #submitSignUp = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        // const formProps = Object.fromEntries(formData);

        const digits_only = string => [...string].every(c => '0123456789'.includes(c));
        if (digits_only(formData.get("password")) && formData.get("password").length == 7) {

            this.login = formData.get("login");
            this.pass = formData.get("password");
            this.first = formData.get("first");
            this.last = formData.get("last");
            this.patr = formData.get("patr");
            this.date = formData.get("date");
            this.place = formData.get("place");
            this.phone = formData.get("phone");

            this.#renderSubapp("Успешная регистрация, войдите");
        } else {
            this.#renderSubapp("Пароль должен содержать только числа и должен иметь длину 7 символов");
        }

    }

    #submitSignIn = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        // const formProps = Object.fromEntries(formData);

        if ((this.login == formData.get("login")) && (this.pass == formData.get("password")) && ("" != formData.get("login")) && ("" != formData.get("password"))) {
            let oldPass = this.pass
            let passArr = this.pass.split('');
            if (passArr[0] != '9') passArr[0] = String(Number(passArr[0]) + 1);
            else passArr[0] = 0
            this.pass = passArr.join('');
            this.#renderAccessForm(`Успешный вход, пароль ${oldPass} обновлен согласно условию аутентификации ${this.pass}`)
        } else {
            this.#renderSubapp("Ошибка ввода")
        }
    }

    #updatePass = (event) => {
        event.preventDefault();

        this.subApplication.innerHTML = this.view.getUpdatePassForm()

        const updatePassForm = document.getElementById('newpass');

        updatePassForm.addEventListener('submit', this.#submitUpdatePass.bind(this));
    }

    #removeAcc = (event) => {
        event.preventDefault();

        this.login = ""
        this.pass = ""

        this.first = ""
        this.patr = ""
        this.last = ""

        this.date = ""
        this.place = ""

        this.phone = ""

        this.#renderSubapp("Аккаунт удален");
    }

    #logoutAcc = (event) => {
        event.preventDefault();

        this.#renderSubapp("Успешный выход");
    }

    #submitUpdatePass = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        const digits_only = string => [...string].every(c => '0123456789'.includes(c));

        if (formData.get("curr_password") == this.pass && formData.get("new_password") == formData.get("repeat_password") && digits_only(formData.get("new_password")) && formData.get("new_password").length == 7) {
            this.pass = formData.get("new_password")
            this.#renderSubapp("Пароль изменен, войдите еще раз")
        } else {
            this.#renderAccessForm("Ошибка смены пароля")
        }
    }
}