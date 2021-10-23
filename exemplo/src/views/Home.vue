<template>
    <div class="home-container">
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'Home',
        components: {
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