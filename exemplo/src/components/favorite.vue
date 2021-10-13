<template >
    <div class="fav-icon-container">
        <IconCircle :color="this.getFavorite" :icon="icon"/>
    </div>
</template>

<script>
    import IconCircle from './icon-circle.vue'
    export default {
        name: 'FavoriteIcon',
        components: {
            IconCircle
        },
        props: {
            icon: {
                type: String,
                default: "favorite_border"
            },
            favorite: {
                type: Boolean,
                default: false
            }
        },
        computed:{
            getFavorite () {
                if(this.favorite === true){
                    return '#f0245e'
                } else {
                    return 'rgba(255, 255, 255, 0.7)'
                }
            }
        }
    }
    </script>
<style >
    .fav-icon-container{
        align-self: flex-end;
    }
</style>