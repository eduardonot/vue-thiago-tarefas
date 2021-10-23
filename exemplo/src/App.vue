<template>
    <div class="container">
        <router-view />
        <BottomMenu />
    </div>
</template>

<script>
import BottomMenu from './components/bottom-menu.vue'
export default {
    name: 'App',
    components: {BottomMenu}
}
</script>

<style>
html, body {
    margin: 0;
    padding: 0;
    height:100%;
    font-family: 'Roboto', sans-serif;
    background-color: black;
}

html {
    height: 100%;
}

.container{
    height:100%;
}

router-link-active{
    text-decoration: none
}

a, a.router-link-exact-active, a.router-link-active{
    text-decoration: none;
}

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');

</style>
