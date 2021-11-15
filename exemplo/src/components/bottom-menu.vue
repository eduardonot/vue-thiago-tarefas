<template>
    <div class="bottom-menu-container">
        <div @click="allTasks"> 
            <NavbarItem  icon="list" name="/dashboard"/>
        </div>
        <div @click="doneTasks">
            <NavbarItem  icon="done_all" name="/task-done"/>
        </div>
        <div>
            <NavbarItem  icon="add" name="/task-form"/>
        </div>
        <div @click="favoriteTasks">
            <NavbarItem  icon="favorite_border" name="/favorites"/>
        </div>
        <div>
            <NavbarItem icon="account_circle" name="/profiles"/>
        </div>
    </div>
</template>
<script>
    import NavbarItem from './navbar-item.vue'
    export default {
        name: 'BottomMenu',
        components: {NavbarItem},
        methods:{
            allTasks: function(){
                this.$store.commit('setFilter', 'setAllTasks')
            },
            doneTasks: function(){
                this.$store.commit('setFilter', 'setDoneTasks')
            },
            favoriteTasks: function(){
                this.$store.commit('setFilter', 'setFavoriteTasks')
            },

        }
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