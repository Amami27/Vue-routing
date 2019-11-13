<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link :to="{name: 'about'}">About</router-link> |
      <router-link :to="{name: 'contact'}">Contact</router-link> |
      <router-link :to="{name: 'services'}">Services</router-link> |
      <router-link to="/admin">Admin</router-link> |
      <router-link to="/blog-post">Blog</router-link> 




    </div>
    <router-view/>
    <footer>
      
      <p>Copyright &copy; 2019</p>
    </footer>
  </div>
</template>
<script>
export default {
//   mounted() {
// this.$http.get('http://host:3000/posts').then(response => console.log(response)).catch(err => console.log(err.response))
//   }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
</style>
