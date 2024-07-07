describe('Покупка нового аватара для своего тренера', function () {

    it('Типо крутой автотест', function () {
         cy.visit('https://pokemonbattle.ru/login');
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');
         cy.get('#password').type('USER_PASSWORD');
         cy.get('.auth__button').click();
         cy.get('.header__container > .header__id').click();
         cy.get('.k_premium_button_fix').click();
         cy.get('.auth__input').type('14');
         cy.get('.auth__form > .button_to_down > .profile__button').click();
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4444333322221111');
         cy.get(':nth-child(1) > .pay_base-input-v2').type('10/25');
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('SAMUEL WINCHESTER');
         cy.get('.pay-btn').click();
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();
         cy.get('.payment__font-for-success').should('be.visible');
         cy.get('.payment__font-for-success').contains('Покупка прошла успешно');
     })
 }) 