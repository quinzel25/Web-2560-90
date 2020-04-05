// using Vue to add a responsive contact form that has validation. Of course there is no function since there is no server but it looks nice!
let contact = new Vue({

    el: "#contact",
    data: {
        name: '',
        email: '',
        subject: '',
        textArea: '',
        errors: [],
        successes: [],

    },
    methods: {
        submit() {
            // clears any messages when the button is clicked
            this.successes = []
            this.errors = []
            // if all fields are filled out it will give the user a validation message and clear the text boxes
            if (this.name && this.email && this.subject && this.textArea) {

                console.log("Valid Entry")
                this.name = ''
                this.email = ''
                this.subject = ''
                this.textArea = ''
                this.successes.push('Form submitted! Thank you for contacting me, I\'ll get back to you as soon as I can! :)')

            } else {
                // validation message
                console.log("Invalid Entry")
                this.errors.push('All fields are required.')
            }


        }

    }


})