<template>
  <div id="nav" class="text-center">
    <router-link to="/" :class="{active: $route.name === 'Home'}">Online Mart</router-link> 
    
  </div>
  <router-view/>
</template>
<script>
export default {
  mounted(){
    this.$store.commit('updateCartFromLocalStorage')
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,body{
  margin: 0;
  padding: 0;
  overflow-x: hidden ;
}
body{
  background-color: white;
}
#nav{
  padding: 10px;
  width: 100%;
  height: 30px;
  background-color: rgb(228, 138, 138);
  line-height: 30px;

  a{
    font-weight: bold;
    color: rgb(160, 140, 140);
    text-decoration: none;
    margin: 0 5px 0 5px;
    font-size: 1.25rem;

    &.active{
    color: rgb(2, 2, 19);
    }
  }

  
}
.text-center{
  text-align: center;
}


</style>
