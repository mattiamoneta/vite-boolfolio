<template>
        <div class="container">
            <div class="row">
                <div class="col-8 mx-auto">
                    <div class="card">
                        
                        <div class="row">
                            <div class="col-4">
                                <img :src="`http://127.0.0.1:8000/storage/${this.retProject['thumb']}`" class="card-img-top"
                            alt="...">
                            </div>
                            <div class="col-8">
                                <div class="card-body">
                                    <h5 class="card-title">{{ retProject['name'] }}</h5>
                                    <p class="card-text">{{ retProject['description'] }}</p>
                                    <div class="tags">
                                            <span class="badge rounded-pill text-bg-primary me-2" v-for="technology in retProject['technologies']">{{ technology['name'] }}</span>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
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
        getCurrentProject(slug) {

            axios.get(`http://127.0.0.1:8000/api/project/${slug}`)
                .then(response => {
                    this.retProject = response.data.results;
                    console.log(this.retProject);
                })

        }
    },
    mounted() {
        const slug = this.$route.params.slug;
        this.getCurrentProject(slug);
    }
}
</script>

<style scoped></style>