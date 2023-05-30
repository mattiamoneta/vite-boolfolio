<template>
    <div class="col-3">
        <div class="card">
            <img :src="`http://127.0.0.1:8000/storage/${this.arrProject['thumb']}`" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ this.arrProject['name'] }}</h5>
                <p class="card-text">{{ this.arrProject['description'] }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectCard',
    data() {
        return {

        }
    },
    methods: {

    },
    props: {
        arrProject: Object
    }
}
</script>

<style scoped></style>