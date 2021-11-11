<template>
  <div>
    <Navbar />
    <Sidebar />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Sidebar
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');

#app {
  font-family: Inter, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,body{
  height: 100%;
  
}


body{
  background-color: #0e0e10;
}

</style>
