<template>
    <div class="input-container">
        <icon-circle class="input-icon" color="rgba(255, 255, 255, 0.7)" icon="search"/>
        <input class="input-box" type="text" placeholder="PESQUISAR"/>
    </div>
</template>

<script>
import iconCircle from './icon-circle.vue'
export default {    
    components: { iconCircle },
        name: 'Input',
}
</script>

<style>
    .input-container{
        display: flex;
        flex-direction:column;
        justify-content:center;
        align-items: center;
        padding: 5px 15px 5px 15px;
    }

    .input-box {
        width: 100%;
        height: 30px;
        border-radius: 100px;
        border: none;
        padding: 5px 15px 5px 15px;
        background-color: rgba(255, 255, 255, 0.2);
        letter-spacing: 1px;
        color: rgba(255, 255, 255, 0.7);
        font-size: 16px
    }

    .input-box:focus {
        outline: none;
    }

    .input-box::placeholder{
        color: rgba(255, 255, 255, 0.7);
    }

    .input-icon{
        position: absolute;
        z-index: 5;
        right: 15px;
    }

</style>