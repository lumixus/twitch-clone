<template>
  <div>
    <Navbar />
    <Sidebar />
    <loginpopup />
    <registerpopup />
    <main>
      <div class="content">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import loginpopup from "./components/popups/loginpopup.vue";
import registerpopup from "./components/popups/registerpopup.vue";
import Sidebar from "./components/Sidebar.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Sidebar,
    loginpopup,
    registerpopup
  },
  mounted(){
    document.title = "Twitch Clone";
  }
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
  padding-right:0px;
  }
}


.content-shrink{
  padding-left:80px !important;
  padding-right:0px;
  margin-right:0px;
}




body{
  background-color: #0e0e10;
}

</style>
