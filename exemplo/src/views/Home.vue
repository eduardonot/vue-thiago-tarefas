<template>
    <div class="home-container">
        <router-view />
        <button @click="checkCep" >Click</button>
    </div>
</template>

<script>
    import { API_SERVICE } from './../plugins/api'
    export default {
        name: 'Home',
        created() {
            this.$store.commit('setFilter')
        },
        methods: {
            checkCep: function() {
                API_SERVICE.get('13640412.json')
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