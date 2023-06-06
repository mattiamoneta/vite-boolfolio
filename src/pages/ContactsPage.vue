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
                                <input type="text" class="form-control" id="name" name="name" v-model="name">
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" name="email" aria-describedby="email"
                                    v-model="email">
                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label">Messaggio</label>
                                <input type="text" class="form-control" id="message" name="message"
                                    aria-describedby="message" v-model="message">
                            </div>

                            <button type="submit" class="btn btn-primary">Send Mail</button>
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
            success: false

        }
    },
    methods: {
        sendEmail() {

            axios.post('http://localhost:8000/api/contacts', {
                name: this.name,
                email: this.email,
                message: this.message
            }).then(response => {

                if (response.data.success) {
                    this.name = "",
                        this.message = "",
                        this.email = ""
                    this.success = "true"
                }

                console.log(response);
            });

        }

    }
}
</script>

<style scoped></style>