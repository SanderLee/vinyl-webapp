<template>
  <div id="nav">
    <router-link to="/">Vinyl wishlist</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #bbe1fa;
}

html {
  background-color: #1b262c;
}

</style>
