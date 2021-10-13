<template>
    <div class="container">
        <router-view></router-view>
    </div>
</template>

<style>
html, body {
    margin: 0;
    padding: 0;
    height:100%;
    font-family: 'Roboto', sans-serif;
}

html {
    height: 100%;
}

.container{
    height:100%;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');

</style>
