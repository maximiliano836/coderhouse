describe('conjunto de pruebas', ()=>{

    it('Carga imagen principal', function(){
        cy.visit('https://zichi-nails-salon.netlify.app/')
        cy.get('img.aos-init').should('be.visible')
        cy.get('div.aos-init > a > .boton_agenda').contains('Agenda')
    })
})