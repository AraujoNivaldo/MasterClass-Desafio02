describe('Deletar Usuário', () => {
    let userId

    beforeEach(() => {
        cy.criarUsuario().then((response) => {
            userId = response.body._id

        })

    })

    it('Deve deletar um usuário', () => {
        cy.deletarUsuarios(userId).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('message', 'Registro excluído com sucesso')
            cy.log(response.body.message)

            cy.listarUsuariosId(userId).then((getResponse) => {
                expect(getResponse.status).to.eq(400)
                expect(getResponse.body).to.have.property('message', 'Usuário não encontrado')

            })

        })

    })
})