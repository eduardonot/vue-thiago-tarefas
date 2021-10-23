<template>
    <div class="bottom-menu-container">
        <NavbarItem icon="list" name="dashboard"/>
        <NavbarItem icon="done_all" name="task-done"/>
        <NavbarItem icon="favorite_border" name="favorites"/>
        <NavbarItem icon="account_circle" name="profiles"/>
    </div>
</template>
<script>
    import NavbarItem from './navbar-item.vue'
    export default {
        name: 'BottomMenu',
        components: {NavbarItem},
    }
</script>
<style>
    .bottom-menu-container{
        display:flex;
        flex-direction: row;
        justify-content: space-around;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 10;
        width: 100%;
        background-color:black;
    }
</style>