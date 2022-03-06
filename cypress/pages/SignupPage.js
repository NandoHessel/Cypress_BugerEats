

class SignupPage {
    
    // função para acessar a página
    go() {
        //acessar a URL alvo do teste
        cy.visit('/') 
        
        // clica no botão
        cy.get('a[href="/deliver"]').click() 
        // validação da tela correta
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    }

    fillForm(entregador) {
        // Preenche os camposs 
        cy.get('input[placeholder="Nome completo"]').type(entregador.nome)
        cy.get('input[placeholder="CPF somente números"]').type(entregador.cpf)
        cy.get('input[placeholder="E-mail"]').type(entregador.email)
        cy.get('input[placeholder="Whatsapp"]').type(entregador.whatsapp)
        //Preenche o CEP
        cy.get('input[placeholder="CEP').type(entregador.endereco.cep)
        //clica no botão para procurar o endereço
        cy.get('input[value="Buscar CEP"]').click()
        //Preencher número e details
        cy.get('input[placeholder="Número').type(entregador.endereco.numero)
        cy.get('input[placeholder="Complemento').type(entregador.endereco.complemento)
        //verificar se os campos foram preenchidos corretamente
        cy.get('input[name="address"]').should('have.value', entregador.endereco.rua)
        cy.get('input[name="district"]').should('have.value', entregador.endereco.bairro)
        cy.get('input[name="city-uf"]').should('have.value', entregador.endereco.cidade_uf)
        //vai clicar no tipo de veículo selecionado
        cy.contains('.delivery-method li', entregador.metodo_entrega).click()
        // faz upload da imagem anexada na pasta fixtures
        cy.get('input[accept="image/*"]').attachFile('/imagens/'+ entregador.cnh)
    }

    submit() {
         //encerra o preenchimento
         cy.get('.button-success').click()
    }

    modalContentShouldBe(expectedMessage) {
        cy.get('.swal2-container .swal2-html-container').should('have.text', expectedMessage)
    }

    alertMessageShouldBe(expectedMessage) {
        cy.contains('.alert-error', expectedMessage).should('be.visible')
    }


}

export default SignupPage;