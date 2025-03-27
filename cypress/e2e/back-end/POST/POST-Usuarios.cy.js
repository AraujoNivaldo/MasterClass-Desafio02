describe('Cadastrar Usuário', () => {

    it('Deve cadastrar um novo usuário', () => {
        cy.criarUsuario().then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso')
            expect(response.body).to.have.property('_id')

        })
    })

    it('Deve retornar erro ao cadastrar usuário com email já existente', () => {
        cy.criarUsuario().then((primeiroResponse) => {
            const userData = primeiroResponse.requestBody;

            cy.criarUsuario(userData).then((segundoResponse) => {
                expect(segundoResponse.status).to.eq(400)
                expect(segundoResponse.body).to.have.property('message', 'Este email já está sendo usado')
            })

        })
    })

    it('Deve validar os campos obrigatórios - email', () => {
        cy.criarUsuario({ email: undefined }).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('email', 'email é obrigatório')

        })

    })


})