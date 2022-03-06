var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
        nome: `${firstName} ${lastName}`,
        cpf: cpf.generate(),
        email: faker.internet.email(firstName),
        whatsapp: '11999999999',
        endereco: {
            cep: '04534011',
            rua: 'Rua Joaquim Floriano',
            numero: '1000',
            complemento: 'Ap 142',
            bairro: 'Itaim Bibi',
            cidade_uf: 'São Paulo/SP'
            },
            metodo_entrega: 'Moto',
            cnh: 'CNH.png'
        }

        return data
    }
}