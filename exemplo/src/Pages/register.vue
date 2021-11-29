<template >
    <div class="register-container">
        <Card class="register-card" color="rgba(255, 255, 255, 0.15)">
            <div class="form" slot="content">
                <h1>{{ title }}</h1>
                <input v-model="form.name" type="text" placeholder="INSIRA SEU NOME">
                <input v-model="form.email" type="text" placeholder="INSIRA SEU EMAIL">
                <input v-model="form.pass1" type="password" placeholder="digite sua senha">
                <input v-model="form.pass2" type="password" placeholder="digite a senha novamente">
                <button @click="signup" >Cadastrar</button>
                <p v-for="data in getSignupStatus" :key="data.id">{{ data }}</p>
            </div>
        </Card>
        <router-link :to="{name: 'login'}" class="borderless">Já é cadastrado? Clique aqui para fazer o login</router-link>
    </div>
</template>

<script>
import Card from './../components/card.vue'
export default {
    name: 'register',
    components: {Card},
    data() {
        return {
            form: {
                name: '',
                email: '',
                pass1: '',
                pass2: '',
            },
            title: this.$route.meta.showName
        }
    },
    created () {
        this.$store.commit('auth/setLoginRequestStatus', '')
    },
    methods: {
        async signup () {
            await this.$store.dispatch('auth/signup', this.form)
            await this.$router.push({name: 'login'})
        }
    },
    computed: {
        getSignupStatus () {
            return this.$store.getters['auth/getLoginRequestStatus']
        }
    }
}
</script>

<style scoped>
    .register-container {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 10px;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
    }

    .register-card {
        width: 50%;
        box-sizing: border-box;
        margin-bottom: 10px;
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

    .form > p{
        margin: 5px 0px 10px 0px;
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

    .form > a {
        text-decoration: none;
    }

    .borderless {
        width: 100%;
        padding: 10px 0px 10px 0px;
        background-color: rgba(255, 255, 255, 0.0);
        border: none;
        color: white;
        font-weight: 500;
        font-size: 0.7rem;
    }

    a, a.router-link-exact-active, a.router-link-active{
        margin-top: 10px;
        text-decoration: none !important;
        font-size: 0.8rem !important;
        text-align: center;
    }

    @media screen and (max-width: 767px) {
        .register-card {
            width: 100%;
        }
    }
</style>