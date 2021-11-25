<template>
    <div class="profile-container">
        <h1>{{ title }}</h1>
        <profile-bio :name="user.name" :email="user.email" :picture="user.picture"/>
        <profile-actions class="prof-actions"/>
    </div>
</template>

<script>
import ProfileActions from '../components/profile-actions.vue'
import ProfileBio from '../components/profile-bio.vue'
    export default {
        name: 'profiles',
        data() {
            return {
                title: this.$route.meta.showName
            }
        },
        computed: {
            user () {
                return this.$store.getters['auth/user']
            }
        },
        components: {ProfileBio, ProfileActions},
    }
</script>

<style>
    .profile-container{
        height:100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5px;
    }

    .profile-container > h1 {
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        text-transform: uppercase;
        margin: 0px 0px 10px 0px;
        color: white;
    }

    .prof-actions{
        position: absolute;
        bottom: 15%;
    }
</style>