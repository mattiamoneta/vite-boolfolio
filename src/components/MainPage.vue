<template>
    <div class="container">

        <div class="row justify-content-center">

            <ProjectCard v-for="(project) in retProjects.data" :arrProject="project" />


        </div>

        <div class="row my-5">
            <div class="col">
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                        <li class="page-item"><button class="page-link" @click="getAllProjectsInPage(currentPage - 1)"
                                :class="{ 'disabled': currentPage == 1 }">Previous</button></li>
                        <li v-for="elem in lastPage" :key="elem" class="page-item" @click="getAllProjectsInPage(elem)">
                            <button class="page-link">{{ elem }}</button></li>
                        <li class="page-item"><button class="page-link" @click="getAllProjectsInPage(currentPage + 1)"
                                :class="{ 'disabled': currentPage >= lastPage }">Next</button></li>
                    </ul>
                </nav>
            </div>
        </div>

    </div>
</template>

<script>

import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

export default {
    name: 'MainPage',
    data() {
        return {
            retProjects: [],
            currentPage: 1,
            lastPage: 0
        }
    },

    methods: {
        getAllProjectsInPage(providedPage) {
            axios.get('http://127.0.0.1:8000/api/projects',
                {
                    params: {
                        page: providedPage
                    }
                })
                .then(response => {
                    this.retProjects = response.data.results;
                    this.currentPage = providedPage;
                    this.lastPage = response.data.results.last_page;
                })

            console.log(this.lastPage);
        }
    },
    components: {
        ProjectCard
    },
    mounted() {
        this.getAllProjectsInPage(1);
    }
}


</script>

<style></style>