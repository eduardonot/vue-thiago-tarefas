<template>
    <div class="home-container">
        <router-view />
        <button @click="postTask" >Click</button>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        created() {
            this.$store.commit('setFilter')
        },
        methods: {
            postTask () {
                this.$store.dispatch('postTask')
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