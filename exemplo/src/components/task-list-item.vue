<template>
    <div class = "task-list-item-container">
        <Card color="#262626">
            <div slot="content" class="task-content">
                <IconCircle bgcolor="rgba(255, 255, 255, 0.1)" color="rgba(255, 255, 255, 0.7)" size="40px" :icon="task.icon"/>
                <TaskItem :title="task.title" :date="task.date" :label="task.tags" :item="task" />
                <div class="fav-icon">
                    <FavoriteIcon :favorite="task.favorite"/>
                </div>
            </div>
        </Card>
    </div>
</template> 

<script>
    import Card from './card.vue'
    import IconCircle from './icon-circle.vue'
    import FavoriteIcon from './favorite.vue'
    import TaskItem from './task-item.vue'
    export default {
        name:'TaskListItem',
        components: {
            IconCircle,
            TaskItem,
            FavoriteIcon,
            Card,
        },
        props: {
            task:{
                type: Object,
                required: true,
            }
        }
    }
</script>

<style>
    .task-content{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .fav-icon{
        align-self: flex-start;
    }

    .fav-icon:hover{
        cursor: pointer;
    }
</style>