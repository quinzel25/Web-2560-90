
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
            this.successes = []
            this.errors = []
            if (this.name && this.email && this.subject && this.textArea) {

                console.log("Valid Entry")
                this.name = ''
                this.email = ''
                this.subject = ''
                this.textArea = ''
                this.successes.push('Form submitted! Thank you for contacting me, I\'ll get back to you as soon as I can! :)')

            } else {
                this.errors.push('All fields are required.')
            }


        }

    }


})