<template>
    <div class="home-container">
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'Home',
        created() {
            this.load()
            this.$store.commit('setFilter')
        },
        methods: {
            load() {
                this.$store.dispatch('load')
            }
        },
    }
</script>

<style>
    .home-container{
        height:100%;
        display: flex;
        flex-direction: column;
        background-color: black;
        padding: 5px;
    }

</style>