<template></template>

<script>

import axios from 'axios';

export default {
    name: 'MainPage',
    data() {
        return {
            retProjects: []
        }
    },

    methods: {
        getAllProjects() {
            axios.get('http://127.0.0.1:8000/api/projects')
                .then(response => {
                    // this.retProjects = response.data.results;
                    console.log(response.data.results);

                })
        }
    },
    mounted() {
        this.getAllProjects();
    }
}


</script>

<style></style>