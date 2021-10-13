<template>
    <div class="chip">
        <p>{{ label }}</p>
    </div>
</template>
<script>
    export default {
        name: 'Chip',
        props:{
            label:{
                type: String,
            }
        }
    }
</script>
<style>
    .chip{
        display: flex;
        align-items: center;
        background-color: rgba(255,255,255,1);
        width: auto;
        height: 20px;
        border-radius: 50px;
        padding: 4px 20px 4px 20px;
        margin: 10px 4px 10px 0px;
    }

    .chip > p {
        font-size: 14px;
        margin: 0;
        padding: 0;
        font-weight: 400;
        color: black;
        text-align:center;
        text-transform: uppercase;  
    }

    @media (max-width:375px){
        .chip{
            padding: 2px 10px 2px 10px;
        }

        .chip > p {
            font-size: 12px;
        }
    }
</style>