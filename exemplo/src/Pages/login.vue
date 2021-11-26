<template >
    <div class="login-container">
        <Card class="login-card" color="rgba(255, 255, 255, 0.15)">
            <div class="form" slot="content">
                <h1>{{ title }}</h1>
                <input v-model="form.email" type="text" placeholder="LOGIN">
                <input v-model="form.pass1" type="password" placeholder="Senha">
                <button @click="submitLogin" >entrar</button>
                <p>{{ getLoginStatus }}</p>
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
                form: {
                    email: '',
                    pass1: ''
                },
                title: this.$route.meta.showName
            }
        },
    methods: {
        async submitLogin () {
            await this.$store.dispatch('auth/login', this.form)
            await this.$router.push({name: 'dashboard'})
        }
    },
    computed: {
        getLoginStatus () {
            return this.$store.getters['auth/getLoginRequestStatus']
        }
        }
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
        width: 50%;
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
        margin: 10px 0px 0px 0px;
        text-transform: uppercase;
        background-color: rgba(255, 255, 255, 0.0);
        color: white;
        border: 1px solid white;
    }

    @media screen and (max-width: 767px) {
        .login-card {
            width: 100%;
        }
    }
</style>