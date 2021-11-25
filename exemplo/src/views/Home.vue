<template>
    <div class="home-container">
        <router-view />
        <BottomMenu />
    </div>
</template>

<script>
import BottomMenu from './../components/bottom-menu.vue'
    export default {
        name: 'Home',
        components: {BottomMenu}
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