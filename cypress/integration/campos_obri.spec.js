import SignupPage from '../pages/SignupPage'

describe('', () => {
    
});


context('required fields', function() {

    var signup = new SignupPage()
    
    const messages = [
        {field: 'name', output: 'É necessário informar o nome'},
        {field: 'cpf', output: 'É necessário informar o CPF'},
        {field: 'email', output: 'É necessário informar o email'},
        {field: 'postalcode', output: 'É necessário informar o CEP'},
        {field: 'number', output: 'É necessário informar o número do endereço'},
        {field: 'delivery_method', output: 'Selecione o método de entrega'},
        {field: 'cnh', output: 'Adicione uma foto da sua CNH'},
    ]

    before(function() {
        signup.go()
        signup.submit()
    });

    messages.forEach(function(msg){
        it(`${msg.field} is required`, function() {
            signup.alertMessageShouldBe(msg.output)
        });
    })
});

it.skip('required field', function() {

    var signup = new SignupPage()

    signup.go()
    signup.submit()
    signup.alertMessageShouldBe('É necessário informar o nome')
    signup.alertMessageShouldBe('É necessário informar o CPF')
    signup.alertMessageShouldBe('É necessário informar o email')
    signup.alertMessageShouldBe('É necessário informar o CEP')
    signup.alertMessageShouldBe('É necessário informar o número do endereço')
    signup.alertMessageShouldBe('Selecione o método de entrega')
    signup.alertMessageShouldBe('Adicione uma foto da sua CNH')

    
}); 