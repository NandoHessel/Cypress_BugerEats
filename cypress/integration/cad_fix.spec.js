import SignupPage from '../pages/SignupPage'

describe('Cadastro', () => {

    beforeEach(function() {
        cy.fixture('deliver').then((d)=>{
            this.deliver = d
        })
    });
    
    // Utilizando Fixtures
    it.only('Usuário deve se tornar um entregador UTILIZANDO FIXTURES', function() {

        var signup = new SignupPage()

        signup.go()
        signup.fillForm(this.deliver.signup)
        signup.submit()
        // valida o texto de confirmação 
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)

        cy.get('.swal2-confirm').click()

    });

    it('CPF incorreto UTILIZANDO FIXTURES', function() {

        var signup = new SignupPage()

        signup.go()
        signup.fillForm(this.deliver.cpf_inv)
        signup.submit()
        signup.modalContentShouldBe('Oops! CPF inválido')
    }); 
});