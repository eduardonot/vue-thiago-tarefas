<template>
    <router-link :to="name" class="nav-item" v-bind:class="{'nav-item-active': isOpen}">
        <IconCircle :icon=icon />
    </router-link>
</template>

<script>
    import IconCircle from './icon-circle.vue'
    export default {
        name: 'NavbarItem',
        components: {
            IconCircle
        },
        computed:{
            isOpen: function(){
                return this.$route.name === this.name ? true : false
            }
        },
        props:{
            icon:{
                type: String
            },
            name:{
                type: String
            }
        }
    }
</script>

<style scoped>
    .nav-item{
        display: flex;
        flex-direction: row;
        border-top: 2px solid rgba(245, 245, 245, 0.385);
    }

    .nav-item-active{
        border-top: 2px solid #985EFF;
    }
</style>