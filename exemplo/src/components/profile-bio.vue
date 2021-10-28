<template>
    <div class="profile-bio">
        <img :src="picture">
        <h1>{{ name }}</h1>
        <a :href="'mailto:'+email"><p>{{ email }}</p></a>
    </div>
</template>

<script>
    export default {
        name: 'profile-bio',
        props:{
            picture: {
                type: String,
                default: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg'
            },
            name: {
                type: String,
                default: 'Insira seu nome'
            },
            email: {
                type: String,
                default: 'usuario@usuario.com'
            }
        }
    }
</script>

<style scoped>
    .profile-bio{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    a{
        text-decoration: none;
    }

    h1 {
        color: white;
        margin: 0px 0px 10px 0px;
        font-weight: 400;
        font-size: 1.6rem;
    }

    p {
        color: white;
        font-size: 0.9rem;
    }

    img {
        margin: 30px 0px 40px 0px;
        border-radius: 100%;
        max-width: 120px;
    }
</style>