<template>
    <div class="card" :style="[{ 'backgroundColor': color }]">
        <slot name = "content"/>
    </div>
</template>
<script>
    export default {
        name: 'Card',
        props:{
            color: {
                type: String,
                default: '#CDCDCD'
            }

        }
    }
</script>

<style scoped>
    .card{
        display:flex;
        flex-direction: column;
        padding: 10px;
        border-radius: 10px;
        min-width: 150px;
        margin: 5px 0px 5px 5px;
    }
</style>