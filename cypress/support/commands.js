import { faker } from "@faker-js/faker/locale/pt_BR";

Cypress.Commands.add('criarUsuario', (userData = null) => {
    const data = userData || {
        nome: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        administrador: faker.datatype.boolean().toString()

    }

    cy.request({
        method: 'POST',
        url: `${Cypress.env('apiUrl')}/usuarios`,
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: data,
        failOnStatusCode: false

    });

})

Cypress.Commands.add('listarUsuarios', () => {
    cy.request({
        method: 'GET',
        url: `${Cypress.env('apiUrl')}/usuarios`,
        headers: {
            accept: 'application/json',
        },
        failOnStatusCode: false

    })
})


Cypress.Commands.add('listarUsuariosId', (userId) => {
    cy.request({
        method: 'GET',
        url: `${Cypress.env('apiUrl')}/usuarios/${userId}`,
        headers: {
            accept: 'application/json',
        },
        failOnStatusCode: false

    })
})


Cypress.Commands.add('editarUsuario', (userId, updateData = {}) => {
    const data = {
        nome: updateData.nome || faker.person.fullName(),
        email: updateData.email || faker.internet.email(),
        password: updateData.password || faker.internet.password(),
        administrador: updateData.administrador || faker.datatype.boolean().toString()

    }

    cy.request({
        method: 'PUT',
        url: `${Cypress.env('apiUrl')}/usuarios/${userId}`,
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: data,
        failOnStatusCode: false

    });

})


Cypress.Commands.add('deletarUsuarios', (userId) => {
    cy.request({
        method: 'DELETE',
        url: `${Cypress.env('apiUrl')}/usuarios/${userId}`,
        headers: {
            accept: 'application/json',
        },
        failOnStatusCode: false

    })
})