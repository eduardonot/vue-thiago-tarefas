<template>
    <div class="rounded-icon">        
        <span :style="[{'color': color}, {'font-size': size}, {'background-color': bgcolor}]" class="material-icons-outlined icon">{{ icon }}</span>
    </div>
</template>
<script>
    export default {
        name: 'IconCircle',
        props:{
            icon:{
                type: String,
                default: 'help_outline'
            },
            color:{
                type: String,
                default: 'rgba(255, 255, 255, 0.7)'
            },
            size:{
                type: String,
                default: '40px'
            },
            bgcolor:{
                type: String,
                default: 'none'
            }
        }
    }
</script>
<style>
    .rounded-icon{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .rounded-icon > span {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100px;
        width: 70px;
        height: 70px;
        padding:5px;
    }

    @media (max-width: 375px){
        .rounded-icon > span {
            font-size:25px !important;
            width: 40px;
            height: 40px;
        }
    }
</style>