<template>
    <div class="home">
        <Card color="#F0245E">
            <div slot="content" class="highlight">
                <h1>3</h1>
                <h2>Tarefas para hoje</h2>
            </div>
        </Card>
    </div>
</template>

<script>
    import Card from './../components/card.vue'

    export default {
        name: 'Home',
        components: {
            Card
        }
    }
</script>

<style>
    .home {
        max-width: 220px;
    }

    .highlight > h1{
        font-size: 90px;
        margin: 0;
    }

    .highlight > h1, h2, h3, h4, h5, p {
        text-align: right;
        color:white
    }

</style>