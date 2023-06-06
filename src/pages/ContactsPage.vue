<template>
    <div class="container">
        <div class="row">
            <div class="col-12 mx-auto">
                <h1 class="text-center">Contacts</h1>
                <div class="row my-5">
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
            message: ' '

        }
    },
    methods: {
        sendEmail() {


        }

    }
}
</script>

<style scoped></style>