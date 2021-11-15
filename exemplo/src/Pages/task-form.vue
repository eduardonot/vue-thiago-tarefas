<template>
    <div class="task-form">
        <h1>{{ title }}</h1>
        <form-task />
    </div>
</template>

<script>
import FormTask from '../components/form-task.vue'
    export default {
        name: 'add-task',
        data() {
            return {
                title: this.$route.meta.showName
            }
        },
        components: {
                FormTask
        },
    }
</script>

<style>
    .task-form{
        height:auto;
        display: flex;
        flex-direction: column;
        background-color: black;
        padding: 5px;
    }

    .task-form > h1 {
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        text-transform: uppercase;
        margin: 0px 0px 10px 0px;
        color: white;
    }
</style>