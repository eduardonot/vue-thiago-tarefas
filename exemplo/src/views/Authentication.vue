<template >
    <div class="auth-container">
        <router-view />
    </div>
</template>
<script>
export default {
    name:'Authentication',
    created () {
        this.$store.commit('task/reset')
    }
}
</script>
<style >
    .auth-container{
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        box-sizing: border-box ;
    }
</style>