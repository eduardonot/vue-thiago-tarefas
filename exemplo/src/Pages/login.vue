<template >
    <div class="form">
        <h1>{{ title }}</h1>
        <input type="text" placeholder="LOGIN">
        <input type="password" placeholder="Senha">
        <button >enviar</button>
    </div>
</template>

<script>
export default {
    name: 'login',
    data() {
            return {
                title: this.$route.meta.showName
            }
        },
}
</script>

<style scoped>
    .form{
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
        color:white;
        justify-content: center;
        align-items: center;
    }

    .form > input {
        box-sizing: border-box;
        width: 100%;
        border: none;
        padding: 10px 5px 10px 5px;
        font-size: 14px;
        margin-bottom: 5px;
    }

    .form > input:focus {
        outline: none;
    }

    .form > input::placeholder {
        text-transform: uppercase;
    }

    .form > button {
        margin: 0;
        width: 100%;
        padding: 10px 5px 10px 5px;
        text-transform: uppercase;
    }
</style>