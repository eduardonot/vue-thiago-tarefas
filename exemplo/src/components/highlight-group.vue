<template>
    <div class="highlight-group" style = "max-width: 170px">
        <Card color="#F0245E">
            <highlight-task slot="content" label= 1 name="Tarefa a fazer" />
        </Card>
        <Card color="#985EFF">
            <highlight-task slot="content" label= 5 name="Tarefas concluídas" />
        </Card>
    </div>
</template>

<script>
    import HighlightTask from './highlight-task.vue'
    import Card from './card.vue'
    export default {
        name:'HighlightGroup',
        components:{
            HighlightTask, 
            Card
        }
    }
</script>

<style>
    .highlight-group{
        display: flex;
        flex-direction: row;
    }
</style>