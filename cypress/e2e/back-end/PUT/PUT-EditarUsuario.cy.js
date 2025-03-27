import { faker } from "@faker-js/faker/locale/pt_BR";

describe('Editar Usuário', () => {
    let userId

    beforeEach(() => {
        cy.criarUsuario().then((response) => {
            userId = response.body._id
        })

    });

    it('Deve editar um usuário randomicamente', () => {
        cy.editarUsuario(userId).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('message', 'Registro alterado com sucesso')
        })

    })
})