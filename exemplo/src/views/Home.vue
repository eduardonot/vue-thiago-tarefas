<template>
    <div class="home-container">
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'Home',
        created() {
            this.$store.commit('setFilter')
        },
    }
</script>

<style>
    .home-container{
        height:auto;
        display: flex;
        flex-direction: column;
        background-color: black;
        padding: 5px;
    }

</style>