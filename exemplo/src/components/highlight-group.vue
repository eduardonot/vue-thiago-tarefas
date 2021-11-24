<template>
    <div class="highlight-group">
        <div @click="allTasks" class="card-handler">
            <Card color="#F0245E">
                <highlight-task slot="content" :label="this.$store.getters['task/getAll'].length" name="Todas as Tarefas" />
            </Card>
        </div>
        <div @click="todayTasks" class="card-handler">
            <Card color="#29B6F6">
                <highlight-task slot="content" :label="this.$store.getters['task/getToday'].length" name="Tarefas de Hoje" />
            </Card>
        </div>
        <div @click="doneTasks" class="card-handler">
            <Card color="#9CCC65">
                <highlight-task slot="content" :label="this.$store.getters['task/getDone'].length" name="Concluídas" />
            </Card>
        </div>
        <div @click="undoneTasks" class="card-handler">
            <Card color="#E53935">
                <highlight-task slot="content" :label="this.$store.getters['task/getUndone'].length" name="Não Concluídas" />
            </Card>
        </div>
        <div @click="favoriteTasks" class="card-handler">
            <Card color="#F9A825">
                <highlight-task slot="content" :label="this.$store.getters['task/getFavorite'].length" name="Favoritas" />
            </Card>
        </div>
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
        },
        methods:{
            allTasks: function(){
                this.$store.commit('task/setFilter', 'setAllTasks')
            },
            todayTasks: function(){
                this.$store.commit('task/setFilter', 'setTodayTasks')
            },
            doneTasks: function(){
                this.$store.commit('task/setFilter', 'setDoneTasks')
            },
            undoneTasks: function(){
                this.$store.commit('task/setFilter', 'setUndoneTasks')
            },
            favoriteTasks: function(){
                this.$store.commit('task/setFilter', 'setFavoriteTasks')
            },

        }
    }
</script>

<style>
    .highlight-group{
        display: flex;
        flex-direction: row;
        overflow-x: scroll;
    }

    .card-handler{
        display: flex;
        height: auto;
    }

    @media screen and (max-width: 375px) {
        .highlight-group{
            max-width: 375px;

        }
    }
</style>