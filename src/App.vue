<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@font-face {
  font-family: 'BaronNeue';
  src: url('./assets/BaronNeue.otf'); /* IE9 Compat Modes */
}
#app {
  font-family: BaronNeue;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  padding: 4%;
}

.Spaceduck-logo {
  float: left;
  clear: left;
}
</style>
