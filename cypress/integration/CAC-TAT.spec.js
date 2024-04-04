 ///<reference types="Cypress" />


 //const cypress = require("cypress")

 
describe('Central de Atendimento ao Cliente TAT', function() {
  this.beforeEach(function(){
      cy.visit('./src/index.html')
  })
  it('verifica o título da aplicação', function() {
    
      cy.title().should ('be.equal','Central de Atendimento ao Cliente TAT')
  })

  it ('preenche os campos obrigatórios e envia o formulário', function() {
      const longText = 'Teste,teste,teste,teste,teste,teste, teste,teste,teste,teste,teste,teste'
      cy.get('#firstName').type ('Maria')
      cy.get('#lastName').type ('Bernardes')
      cy.get('#email').type ('maria.eliza@gmail.com')
      cy.get('#open-text-area').type (longText, {delay:0})
      cy.contains('button', 'Enviar').click()
      cy.get('.success').should('be.visible')
      
      it ('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida')
      cy.get('#firstName').type ('Maria')
      cy.get('#lastName').type ('Bernardes')
      cy.get('#email').type ('maria.eliza@gmail,com')
      cy.get('#open-text-area').type (longText, {delay:0})
      cy.contains('button', 'Enviar').click()
      cy.get('.error').should('be.visible')
  })

      it  ('campo telefone continua vazio quando preenchido com valor não-numérico', function()  {
          cy.get('#phone')
       .type ('abcdefghi')   
       .should ('have.value' , '')

     

      it ('exibe mensagem de erro quando o telefone se torna obrigatorio mas não e')
      cy.get('#firstName').type ('Maria')
      cy.get('#lastName').type ('Bernardes')
      cy.get('#email').type ('maria.eliza@gmail.com')
      cy.get('#phone-checkbox').check ()
      cy.get('#open-text-area').type ('Teste')
      cy.contains('button', 'Enviar').click()
      cy.get('.error').should('be.visible')


  })
   it('preenche e limpa os campos. nome, sobrenome, email e telefone', function() {
      cy.get('#firstName')
      . type ('Maria')
      .should('have.value', 'Maria')
      .clear()
      .should('have.value', '')

      cy.get('#lastName')
      . type ('Bernardes')
      .should('have.value', 'Bernardes')
      .clear()
      .should('have.value', '')
     
      cy.get('#email')
      . type ('maria.eliza@gmil.com')
      .should('have.value', 'maria.eliza@gmil.com')
      .clear()
      .should('have.value', '')
     
      cy.get('#phone')
      . type ('1234')
      .should('have.value', '1234')
      .clear()
      .should('have.value', '')

   })

   it('exibe mensagem de erro ao submeter o fomulário sem preencher os campos obrigatórios', function() {
     cy.contains('button', 'Enviar').click()
     cy.get('.error').should ('be.visible')


   })
   
   it  ('envia o formulário com sucesso usando o comando customizado', function() {
      cy.fillMandatoryFieldsAndSubmmit()
      cy.get('.success').should('be.visible')
   })


   it (' seleciona um produto (youtube) por seu texto', function (){
      cy.get('#product').select ('YouTube')
      .should ('have.value', 'youtube')
  })

  it  (' Seleciona um produto "Mentoria por seu valor (value)', function(){
      cy.get ('#product')
      .select ('mentoria')
      .should('have.value', 'mentoria')

  })

  it (' seleciona um produto (Blog) por seu índice', function () {
      cy.get ('#product')
      .select(1)
      .should ('have.value', 'blog')

  })

   it (' marca o tipo de atendimento "Feedback"', function (){
      cy.get('input[type="radio"][value="feedback"]')
      .check()
      .should ('have.value','feedback')
  

   })
    it  ('marca cada tipo de atendimento', function (){
      cy.get('input[type="radio"]')
      .should('have.length',3)
      .each(function($radio){
      cy.wrap ($radio).check()
      cy.wrap ($radio).should ('be.checked')

      })

    })

    it  (' marca ambos checkboxes, depois desmarca o último', function(){
      cy.get ('input[type="checkbox"]')
      .check()
      .should('be.checked')
      .last()
      .uncheck()
      .should('not.be.checked')

    } )
   
it(' seleciona um arquivo da pasta fixtures', function() {
  cy.get ('input[type="file"]')
  .should ('not.have.value')
  .selectFile('./cypress/fixtures/example.json')
  .should(function($input) {
      console.log($input)
      expect ($input[0].files[0].name).to.equal('example.json')
  })
})
  it('seleciona um arquivo simulando um drag-and-drop', function() {
    cy.get ('input[type="file"]')
    .should ('not.have.value')
    .selectFile('./cypress/fixtures/example.json', {action:'drag-drop'})
    .should(function($input) {
        console.log($input)
        expect ($input[0].files[0].name).to.equal('example.json')
    })
  })

  it  ('seleciona um arquivo utilizando uma fixture para qual foi dada umm alias', function() {

  
    cy.fixture ('example.json').as('sampleFile')
    cy.get('input[type="file"]')
    .selectFile('@sampleFile')
    .should (function($input) {
      expect ($input[0].files[0].name).to.equal ('example.json')
    })
})
 it('Verifica que a política de privacidade abre em outra aba sem a necessidade de um cliqque', function(){
  cy.get ('#privacy a').should ('have.attr', 'target', '_blank')

 })

 it('Acessa a política de privacidade revovendo o target e então clicando no link', function (){
   cy.get ('#privacy a')
   .invoke ('removeAttr', 'target')
   .click()
   cy.contains ('Talking About Testing').should('be.visible')

 })



})

  


  

