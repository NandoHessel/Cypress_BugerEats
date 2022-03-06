import SignupPage from '../pages/SignupPage'

describe('Cadastro', () => {
    it('Usuário deve se tornar um entregador', () => {
        //muda a resolução da tela
        cy.viewport(1000, 660) 
        //acessar a URL alvo do teste
        cy.visit('https://buger-eats.vercel.app/') 

        // clica no botão
        cy.get('a[href="/deliver"]').click() 
        // validação da tela correta
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        // varíavel de instância do JS
        var entregador = {
            nome: 'Fernando Hessel',
            cpf: '00000000009',
            email: 'fernando@email.com',
            whatsapp: '11999999999',
            endereco: {
                cep: '04534011',
                rua: 'Rua Joaquim Floriano',
                numero: '1000',
                complemento: 'Ap 142',
                bairro: 'Itaim Bibi',
                cidade_uf: 'São Paulo/SP'
            },
            metodo_entrega: "Moto",
            cnh: 'CNH.png'
        }

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

        //encerra o preenchimento
        cy.get('.button-success').click()

        // valida o texto de confirmação 
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        cy.get('.swal2-container .swal2-html-container').should('have.text', expectedMessage)

        cy.get('.swal2-confirm').click()


    });

    it('CPF incorreto', () => {
        //muda a resolução da tela
        cy.viewport(1000, 660) 
        //acessar a URL alvo do teste
        cy.visit('https://buger-eats.vercel.app/') 

        // clica no botão
        cy.get('a[href="/deliver"]').click() 
        // validação da tela correta
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        // varíavel de instância do JS
        var entregador = {
            nome: 'Fernando Hessel',
            cpf: '000000000AA',
            email: 'fernando@email.com',
            whatsapp: '11999999999',
            endereco: {
                cep: '04534011',
                rua: 'Rua Joaquim Floriano',
                numero: '1000',
                complemento: 'Ap 142',
                bairro: 'Itaim Bibi',
                cidade_uf: 'São Paulo/SP'
            },
            metodo_entrega: "Moto",
            cnh: 'CNH.png'
        }
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

        //encerra o preenchimento
        cy.get('.button-success').click()

        cy.get('span[class="alert-error"]').should('have.text', 'Oops! CPF inválido')
        
    });

    //Refatorando o teste para inglês
    it('The user should be a deliverer', () => {
        //muda a resolução da tela
        cy.viewport(1000, 660) 
        //acessar a URL alvo do teste
        cy.visit('https://buger-eats.vercel.app/') 

        // clica no botão
        cy.get('a[href="/deliver"]').click() 
        // validação da tela correta
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        // varíavel de instância do JS
        var user = {
            name: 'Fernando Hessel',
            cpf: '00000000009',
            email: 'fernando@email.com',
            whatsapp: '11999999999',
            address: {
                postalcode: '04534011',
                street: 'Rua Joaquim Floriano',
                number: '1000',
                details: 'Ap 142',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
            },
            delivery_method: "Moto",
            cnh: 'CNH.png'
        }
        // Preenche os camposs 
        cy.get('input[placeholder="Nome completo"]').type(user.name)
        cy.get('input[placeholder="CPF somente números"]').type(user.cpf)
        cy.get('input[placeholder="E-mail"]').type(user.email)
        cy.get('input[placeholder="Whatsapp"]').type(user.whatsapp)

        //Preenche o CEP
        cy.get('input[placeholder="CEP').type(user.address.postalcode)
        //clica no botão para procurar o endereço
        cy.get('input[value="Buscar CEP"]').click()
        //Preencher número e complemento
        cy.get('input[placeholder="Número').type(user.address.number)
        cy.get('input[placeholder="Complemento').type(user.address.details)

        //verificar se os campos foram preenchidos corretamente
        cy.get('input[name="address"]').should('have.value', user.address.street)
        cy.get('input[name="district"]').should('have.value', user.address.district)
        cy.get('input[name="city-uf"]').should('have.value', user.address.city_state)

        //vai clicar no tipo de veículo selecionado
        cy.contains('.delivery-method li', user.delivery_method).click()

        // faz upload da imagem anexada na pasta fixtures
        cy.get('input[accept="image/*"]').attachFile('/imagens/'+ user.cnh)

        //encerra o preenchimento
        cy.get('.button-success').click()

        // valida o texto de confirmação 
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        cy.get('.swal2-container .swal2-html-container').should('have.text', expectedMessage)

        cy.get('.swal2-confirm').click()


    });

    // Utilizando PageObjects
    it('Usuário deve se tornar um entregador UTILIZANDO PAGEOBJECTS', () => {

        // varíavel de instância do JS
        var entregador = {
            nome: 'Fernando Hessel',
            cpf: '00000000009',
            email: 'fernando@email.com',
            whatsapp: '11999999999',
            endereco: {
                cep: '04534011',
                rua: 'Rua Joaquim Floriano',
                numero: '1000',
                complemento: 'Ap 142',
                bairro: 'Itaim Bibi',
                cidade_uf: 'São Paulo/SP'
            },
            metodo_entrega: "Moto",
            cnh: 'CNH.png'
        }
        
        var signup = new SignupPage()

        signup.go()
        signup.fillForm(entregador)
        signup.submit()
        // valida o texto de confirmação 
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)

        cy.get('.swal2-confirm').click()

    });
    
});