<template >
    <div class="login-container">
        <Card class="login-card" color="rgba(255, 255, 255, 0.15)">
            <div class="form" slot="content">
                <h1>{{ title }}</h1>
                <input type="text" placeholder="LOGIN">
                <input type="password" placeholder="Senha">
                <button >entrar</button>
            </div>
        </Card>
    </div>
</template>

<script>
import Card from './../components/card.vue'
export default {
    name: 'login',
    components: {Card},
    data() {
            return {
                title: this.$route.meta.showName
            }
        },
}
</script>

<style scoped>
    .login-container {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
    }

    .login-card {
        width: 80%;
    }

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
        padding: 20px 5px 20px 5px;
        margin: 10px 0px 10px 0px;
        text-transform: uppercase;
        background-color: rgba(255, 255, 255, 0.0);
        color: white;
        border: 1px solid white;
    }
</style>