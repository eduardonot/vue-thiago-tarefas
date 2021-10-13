<template>
    <div class="bottom-menu-container">
        <div class="icon-list">
            <IconCircle icon="list" />
            <IconCircle icon="done_all" />
            <IconCircle icon="favorite_border" />
            <IconCircle icon="account_circle" />
        </div>
    </div>
</template>
<script>
    import IconCircle from './icon-circle.vue'
    export default {
        name: 'BottomMenu',
        components: {IconCircle}
    }
</script>
<style>
    .bottom-menu-container{
        display:flex;
        flex-direction: column;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 10;
        width: 100%;
        background-color:black;
    }

    .icon-list{
        display: flex;
        flex-direction: row;
        justify-content:space-around;
    }
</style>