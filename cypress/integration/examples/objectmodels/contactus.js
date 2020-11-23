///<reference types="Cypress"/>

class ContactUs{

    fillFullName(value){
        const field=cy.get('[id=fullname]')
        field.clear()
        field.type(value)
        return this
    }

    fillOrganization(value){
        const field=cy.get('[id=organization]')
        field.clear()
        field.type(value)
        return this
    }

    fillRole(value){
        const field=cy.get('[id=role]')
        field.clear()
        field.type(value)
        return this
    }


    fillRole(value){
        const field=cy.get('[id=role]')
        field.clear()
        field.type(value)
        return this
    }

    fillEmail(value){
        const field=cy.get('[id=email]')
        field.clear()
        field.type(value)
        return this
    }

    fillPhone(value){
        const field=cy.get('[id=phone]')
        field.clear()
        field.type(value)
        return this
    }

    fillMessage(value){
        const field=cy.get('[id=message]')
        field.clear()
        field.type(value)
        return this
    }

    selecttandc(){
        cy.get('[data-toggle=tooltip]').invoke('show').click()
    }

}

export default ContactUs