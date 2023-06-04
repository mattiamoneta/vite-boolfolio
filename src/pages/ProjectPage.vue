<template>
    <div class="container">
        <div class="row">
            <div class="col-8 mx-auto">

                <!-- Card -->
                <div v-if="this.retProject" class="card">
                    <div class="row">
                        <div class="col-4">
                            <img v-if="this.retProject['thumb']"
                                :src="`http://127.0.0.1:8000/storage/${this.retProject['thumb']}`" class="card-img-top"
                                alt="...">
                            <img v-else="" src="http://127.0.0.1:8000/storage/user_uploads/notFound.png"
                                class="card-img-top" alt="..." />
                        </div>
                        <div class="col-8">
                            <div class="card-body">
                                <h5 class="card-title">{{ retProject['name'] }}</h5>
                                <p class="card-text">{{ retProject['description'] }}</p>
                                <div class="tags">
                                    <span class="badge rounded-pill text-bg-primary me-2"
                                        v-for="technology in retProject['technologies']">{{ technology['name'] }}</span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Card -->

                <div v-else class="text-center my-5">
                    <div class="text-muted mb-3"><i class="fa-solid fa-spinner fa-spin fa-2x"></i></div>
                    <span class="fw-bold">Loading</span>
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
            retProject: null,
        }
    },
    methods: {
        getCurrentProject(slug) {

            axios.get(`http://127.0.0.1:8000/api/project/${slug}`)
                .then(response => {

                    if (response.data.success == true) {
                        this.retProject = response.data.results;
                        console.log(this.retProject);
                    } else {
                        alert(response.data.error);
                    }

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