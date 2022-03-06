import SignupPage from '../pages/SignupPage'

describe('Cadastro', () => {

    beforeEach(function() {
        cy.fixture('deliver').then((d)=>{
            this.deliver = d
        })
    });

    it('Email incorreto UTILIZANDO FIXTURES', function() {

        var signup = new SignupPage()

        signup.go()
        signup.fillForm(this.deliver.email_inv)
        signup.submit()
        signup.modalContentShouldBe('Oops! Email com formato inválido.')
    }); 

})