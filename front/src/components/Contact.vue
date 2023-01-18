<template>
    <div class="page-container">
        <div class="row justify-content-center mt-5">
            <div class="col-4">
                <!-- Need some regex here to prevent malicious user input -->
                <form>
                    <div class="mb-3">
                        <label for="firstName" class="form-label">Name</label>
                        <input v-model="email.name" @input="validateInput('name')" type="text" class="form-control" id="name">
                    </div>
        
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input v-model="email.email" @input="validateInput('email')" type="email" class="form-control" id="email">
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Message</label>
                        <textarea v-model="email.message" @input="validateInput('message')" class="form-control" id="message" rows="3"></textarea>
                    </div>

                    <div class="mb-3">
                        <button type="submit" @click="submit()" class="btn" :class="{'disabled-btn': isDisabled}" :disabled="isDisabled">Submit</button>
                    </div>
                </form>
            </div>
            <div class="col-4">
                <h1 class="header-text">Want to get in touch?</h1>
                <p class="text">Feel free to fill out my contact form
                    to shoot me an email. Or simply click on
                    the social media icons below, and you can 
                    reach me there as well!
                </p>
        
                <p class="text">Email: ecfisher13@gmail.com</p>
            </div>
        </div>
        
        <app-footer></app-footer>
    </div>
</template>

<script lang="ts">
export default {
    setup() {

    },


    data() {
        return {
            email: {
                name: "",
                email: "",
                message: ""
            },

            isSubmitting: false,

            emailRegex: /[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]{2,}/g,
            regex: /[A-Za-z0-9._~()'!*:@,;+?-\s]*/g,

            isDisabled: true
        }
    },

    methods: {
        // may also need to do in the template as well
        validateInput() {
            for (let ele in this.email) {
                // Check if there's input
                if (this.email[ele] === "" || this.email[ele] === undefined) {
                    this.isDisabled = true;
                    break;
                } else {
                    this.isDisabled = false;
                }

                // Check if input is valid
                if (ele === "email" && this.email[ele].match(this.emailRegex) === null) {
                    console.log(this.email[ele])
                    console.log(this.email[ele].match(this.emailRegex));
                    this.isDisabled = true;
                    break
                } else if (ele !== "email" && this.email[ele].match(this.regex) === null) {
                    this.isDisabled = true;
                    break;
                }
            }
        },

        submit() {
            if (!this.isDisabled) {
                this.isSubmitting = true;

                console.log(this.email.name);
                console.log(this.email.email);
                console.log(this.email.message);
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import '../styles.scss';

button {
    border: 1px solid $highlight-color;

    &:hover {
        color: $background-color;
        background-color: $highlight-color;
    }

    &.disabled-btn {
        opacity: 0.5;
        cursor: default;

        &:hover {
            background-color: $background-color;
        }
    }
}

</style>