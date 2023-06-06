<template>
    <div class="container">
        <div class="row">
            <div class="col-12 mx-auto">
                <h1 class="text-center">Contacts</h1>
                <div class="row my-5">
                    <div class="col-10 mx-auto" v-if="success">
                        <div class="alert alert-primary" role="alert">
                            Messaggio Inviato!
                        </div>
                    </div>
                    <div class="col-10 mx-auto">
                        <form @submit.prevent="sendEmail()">
                            <div class="mb-3">
                                <label for="name" class="form-label">Your Name</label>
                                <input type="text" class="form-control" :class="{ 'is-invalid': errors.name }" id="name"
                                    name="name" v-model="name">
                                <div class="invalid-feedback">
                                    Nome non valido
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" :class="{ 'is-invalid': errors.email }"
                                    name="email" aria-describedby="email" v-model="email">
                                <div class="invalid-feedback">
                                    Email non valida
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label">Messaggio</label>
                                <input type="text" class="form-control" id="message" name="message"
                                    aria-describedby="message" v-model="message" :class="{ 'is-invalid': errors.message }">
                                <div class="invalid-feedback">
                                    Messaggio non valido
                                </div>
                            </div>

                            <button type="submit" class="btn btn-primary" :disabled="isSending">Send Mail</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: 'ContactsPage',
    data() {
        return {
            name: '',
            email: '',
            message: '',
            success: false,
            errors: {},
            isSending: false

        }
    },
    methods: {
        sendEmail() {

            this.errors = {};
            this.isSending = true;

            axios.post('http://localhost:8000/api/contacts', {
                name: this.name,
                email: this.email,
                message: this.message
            }).then(response => {

                if (response.data.success) {
                    this.name = "";
                    this.message = "";
                    this.email = "";
                    this.success = true;
                    this.isSending = false;

                } else {
                    this.errors = response.data.errors;
                    console.log(this.errors);
                    this.isSending = false;
                }
            });

        }

    }
}
</script>

<style scoped></style>