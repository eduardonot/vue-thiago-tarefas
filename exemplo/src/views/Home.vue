<template>
    <div class="home-container">
        <Input/>
        <HighLightGroup/>
        <TaskListGroup/>
        <BottomMenu/>
    </div>
</template>

<script>
    import BottomMenu from './../components/bottom-menu.vue'
    import Input from './../components/input.vue'
    import HighLightGroup from './../components/highlight-group.vue'
    import TaskListGroup from './../components/task-list-group.vue'
    export default {
        name: 'Home',
        components: {
            BottomMenu,
            HighLightGroup, 
            TaskListGroup,
            Input,
        }
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

</style>