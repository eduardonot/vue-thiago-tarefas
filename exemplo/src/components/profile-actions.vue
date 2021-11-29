<template>
    <div class="profile-actions">
        <button class="btn btn-transparent">editar perfil</button>
        <button @click="logout" class="btn btn-outline">sair</button>
    </div>
</template>

<script>
    export default {
        name:'profile-actions',
        methods: {
            async logout(){
                await this.$store.dispatch('auth/logout')
                this.$router.push('/authentication')
                
            }
        },
    }
</script>

<style scoped>
    .profile-actions{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .btn{
        width: 98%;
        height: 40px;
        font-size:14px;
        font-weight: 600;
        text-transform: uppercase;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .btn-transparent{
        background-color: transparent;
        border: none;
        color: white;
    }

    .btn-outline{
        background-color: transparent;
        border: 1px solid white;
        border-radius: 5px;
        color: white;
    }
</style>