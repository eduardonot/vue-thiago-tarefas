<template>
    <div class="input-container">
        <input type="text" placeholder="PESQUISAR"/>
    </div>
</template>

<script>
    export default {
        name: 'Input',
    }
</script>

<style>
    .input-container{
        position:relative;
        display: flex;
        margin:5px;
    }

    .input-container > input {
        background-image: url("https://cdn-icons-png.flaticon.com/128/482/482631.png");
        background-repeat: no-repeat;
        background-size:17px;
        background-position-y: 50%;
        background-position-x: 98%;
        border-radius: 50px;
        width: 100%;
        padding: 5px 15px 5px 15px;
    }

    .input-container > input:focus {
        outline: none;
    }


</style>