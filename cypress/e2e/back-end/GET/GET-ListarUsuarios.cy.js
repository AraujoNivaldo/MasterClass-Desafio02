describe('Listar Usuários', () => {

    it('Deve listar todos os usuários', () => {
        cy.listarUsuarios().then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('quantidade')
            expect(response.body.usuarios).to.be.an('array')

            cy.wrap(response.body.usuarios).as('listaUsuarios')
        })
    })

    it('Deve listar usuários por id', () => {

        cy.criarUsuario().then((createResponse) => {
            const userId = createResponse.body._id

            cy.listarUsuariosId(userId).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('_id', userId)
            })
        })
    })

    it('validar o total de usuarios', () => {
        cy.listarUsuarios().then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.quantidade).to.equal(response.body.usuarios.length)
        })
    })

    it('Deve validar a estrutura de dados dos usuários', () => {
        cy.listarUsuarios().then((response) => {
            expect(response.status).to.eq(200)
            const firstUser = response.body.usuarios[0]
            expect(firstUser).to.have.property('nome')
            expect(firstUser).to.have.property('email')
            expect(firstUser).to.have.property('password')
            expect(firstUser).to.have.property('administrador')
            expect(firstUser).to.have.property('_id')
        })
    })

    it('Deve validar se o campos não estão vazios', () => {
        cy.listarUsuarios().then((response) =>{
            expect(response.status).to.eq(200)
            const firstUser = response.body.usuarios[0]
            expect(firstUser).to.have.property('nome').and.not.be.empty
            expect(firstUser).to.have.property('email').and.not.be.empty
            expect(firstUser).to.have.property('password').and.not.be.empty
            expect(firstUser).to.have.property('administrador').and.not.be.empty
            expect(firstUser).to.have.property('_id').and.not.be.empty
        })

    })
})