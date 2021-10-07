<template>
    <div slot="content" class="highlight">
        <h1>{{ label }}</h1>
        <h2> {{ name }} </h2>
    </div>
</template>

<script>
    export default {
        name: 'HighlightTask',
        props:{
            label:{
                type: Number,
                default: 0
            },
            name: {
                type: String,
                default: 'Sem tarefas'
            }
        }
    }
</script>

<style>
    .highlight > h1{
        font-size: 90px;
        margin: 0;
    }

    .highlight > h1, h2, h3, h4, h5, p {
        text-align: right;
        color:white
    }
</style>