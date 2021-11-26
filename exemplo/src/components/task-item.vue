<template>
    <router-link :to="/app/+'task-form/'+item._id" class="task-item-container">
        <h1>{{ item.title }}</h1>
        <p>{{ item.date }}</p>
        <div class="chip-list">
            <chip v-for="value in item.tags" :key="value.index" :label=value />
        </div>
    </router-link>
</template>
<script>
    import Chip from './chip.vue'
    export default {
        name: 'TaskItem',
        components: {
            Chip
        },
        props:{
            item:{
                type: Object,
                required: true
            },
            title: {
                type: String,
                default: 'Titulo'
            },
            date: {
                type: String,
            },
            label: {
                type: Array,
            }
        }
    }
</script>
<style>
    .task-item-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5px;
    }

    .task-item-container > h1, p{
        color: #A4A4A4;
        text-align:center;
        margin: 0;
        padding: 0;
    }

    .chip-list{
        display: flex;
        flex-direction: row;
    }

    @media (max-width: 375px){
        .task-item-container{
            width:100%;
        }

        .task-item-container > h1, p{
            text-align: center;
        }

        .task-item-container > h1 {
            font-size: 20px;
        }

        .task-item-container > p {
            font-size: 14px;
        }
    }
</style>