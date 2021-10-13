<template>
    <div class="highlight-group">
        <Card color="#F0245E">
            <highlight-task slot="content" :label= 1 name="Tarefa a fazer" />
        </Card>
        <Card color="#985EFF">
            <highlight-task slot="content" :label= 5 name="Tarefas concluídas" />
        </Card>
        <Card color="#985EFF">
            <highlight-task slot="content" :label= 3 name="Tarefas concluídas" />
        </Card>
        <Card color="#985EFF">
            <highlight-task slot="content" :label= 14 name="Tarefas concluídas" />
        </Card>
        <Card color="#985EFF">
            <highlight-task slot="content" :label= 14 name="Tarefas concluídas" />
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
        overflow-x: scroll;
    }

    @media screen and (max-width: 375px) {
        .highlight-group{
            max-width: 375px;

        }
    }
</style>