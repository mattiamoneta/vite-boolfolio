<template>
    <h1>

    </h1>
</template>

<script>

import axios from 'axios';

export default {
    name: "ProjectPage",

    data() {
        return {
            retProject: [],
        }
    },
    methods: {
        getCurrentProject() {

            axios.get(`http://127.0.0.1:8000/api/project/${this.$route.params.slug}`)
                .then(response => {
                    this.retProject = response.data.results;
                    console.log(this.retProject);
                })

        }
    },
    mounted() {
        this.getCurrentProject();
    }
}
</script>

<style scoped></style>