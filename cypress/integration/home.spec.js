
//describe explica o que será feito e emngloba os códigos
describe('home page', () => {
    //caso de teste
    it('App deve estar online', () => {
        cy.viewport(1920,1080) //muda a resolução da tela
        cy.visit('/') //acessar a URL alvo do teste
        //valida se existe o texto dentro do elemento
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats') 
        
    });
});
