<template>
    <div class="home-container">
        <h1>{{ title }}</h1>
        <Input/>
        <TaskListGroup/>
    </div>
</template>

<script>
    import Input from './../components/input.vue'
    import TaskListGroup from './../components/task-list-group.vue'
    export default {
        name: 'task-done',
        data() {
            return {
                title: this.$route.meta.showName
            }
        },
        components: { 
            TaskListGroup,
            Input,
        },
    }
</script>

<style>
    .home-container{
        height:auto;
        display: flex;
        flex-direction: column;
        background-color: black;
        padding: 5px;
    }

    .home-container > h1 {
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        text-transform: uppercase;
        margin: 0px 0px 10px 0px;
        color: white;
    }
</style>