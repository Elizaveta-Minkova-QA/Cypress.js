import * as main_page from "../locators/main_page.json";
import * as recovery_password_page from "../locators/recovery_password_page.json"
import * as result_page from "../locators/result_page.json"
import * as data from "../helpers/default_data.json"

describe('Проверка авторизации на сайте', function () {

    beforeEach('Начало теста', function () {
        cy.visit('/');
         cy.get(main_page.fogot_pass_btn).should('have.css', 'color', 'rgb(0, 85, 152)');
         cy.get(main_page.form).contains('Форма логина');
         cy.get(main_page.form).should('be.visible');
          });

          afterEach('Конец теста', function () {
            cy.get(result_page.close).should('be.visible');
           });

    it('Проверка авторизации:валидный логин и пароль', function () {
         cy.get(main_page.email).type(data.login);
         cy.get(main_page.password).type(data.password);
         cy.get(main_page.login_button).click();
         cy.get(result_page.title).should('be.visible');
         cy.get(result_page.title).contains('Авторизация прошла успешно');   
     })

     it('Проверка авторизации:НЕ валидный логин и валидный пароль', function () {
        cy.get(main_page.email).type('german@dolnikov.com');
        cy.get(main_page.password).type(data.password);
        cy.get(main_page.login_button).click();
        cy.get(result_page.title).should('be.visible');
        cy.get(result_page.title).contains('Такого логина или пароля нет');   
    })

    it('Проверка авторизации:валидный логин и НЕ валидный пароль', function () {
        cy.get(main_page.email).type(data.login);
        cy.get(main_page.password).type('iLoveqastudio100');
        cy.get(main_page.login_button).click();
        cy.get(result_page.title).should('be.visible');
        cy.get(result_page.title).contains('Такого логина или пароля нет');  
    })

    it('Проверка валидации почты без @', function () {
        cy.get(main_page.email).type('germandolnikov.com');
        cy.get(main_page.password).type(data.password);
        cy.get(main_page.login_button).click();
        cy.get(result_page.title).should('be.visible');
        cy.get(result_page.title).contains('Нужно исправить проблему валидации');   
    })

    it('Проверка ввода с заглавными символами в майле', function () {
        cy.get(main_page.email).type('GerMan@Dolnikov.ru');
        cy.get(main_page.password).type(data.password);
        cy.get(main_page.login_button).click();
        cy.get(result_page.title).should('be.visible');
        cy.get(result_page.title).contains('Такого логина или пароля нет');   
    })

    it('Проверка восстановления пароля', function () {
        cy.get(main_page.fogot_pass_btn).click();
        cy.get(recovery_password_page.email).type(data.login);
        cy.get(recovery_password_page.send_button).click();
        cy.get(result_page.title).should('be.visible');
        cy.get(result_page.title).contains('Успешно отправили пароль на e-mail');
    })

 }) 