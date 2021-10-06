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
    }
</style>