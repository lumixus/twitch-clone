<template>
  <div>
    <Navbar />
    <Sidebar />
    <main>
      <div class="content">
        <router-view />
      </div>
    </main>
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

a{
  text-decoration: none;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,body{
  height: 100%;
  
}

.content{
  padding-top:75px;
  padding-left:270px;
  padding-right: 30px;

}


@media only screen and (max-width:1200px) {
  .content{
  padding-left:80px;
  }
}


.content-shrink{
  padding-left:80px !important;
}




body{
  background-color: #0e0e10;
}

</style>
