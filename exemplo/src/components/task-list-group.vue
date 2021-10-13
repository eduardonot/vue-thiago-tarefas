<template>
    <div class="task-list-group-container">
        <h1>Hoje</h1>
        <div class="task-list">
            <TaskListItem :task="task" v-for="task in getTasks" :key="task.index"/>
            
        </div>
    </div>
</template>
<script>
    import TaskListItem from './task-list-item.vue'
    export default {
        name: 'TaskListGroup',
        data (){
            return {
                
            }
        },
        components: {
            TaskListItem
        },
        methods:{

        },
        computed:{
            getTasks: function(){
                return this.$store.getters.getAll
            }
        },
        props: {
        }
    }
</script>
<style>
    .task-list{
        padding-bottom: 50px;
    }

    .task-list-group-container > h1{
        color: white;
        margin-bottom: 5px;
    }
</style>