<script>
import SearchButton from "./buttons/SearchButton.vue";
import searchinput from "./input/searchinput.vue";
import BitButton from "./buttons/BitButton.vue";
import roundedimage from "./imageholder/roundedimage.vue";
export default {
  name: "Navbar",
  components: {
    SearchButton,
    searchinput,
    BitButton,
    roundedimage
  },
};
</script>


<template>
<nav>
  <!-- Container -->
  <div class="navbar-container">
    <!-- Logo and base navs -->
    <div class="navbar-left">
      <div class="navbar-logo"><router-link to="/"><fa :icon="['fab','twitch']" inverse size="2x" /></router-link></div>
      <div class="navbar-following-channels navbar-link"><h4><router-link to="/">Followed</router-link></h4></div>
      <div class="navbar-browse navbar-link"><h4><a>Browse</a></h4></div>
      <div class="navbar-etc"><fa icon="ellipsis-v" inverse /></div>
    </div>
    <!-- Search Box -->
    <div class="navbar-center">
      <searchinput />
      <SearchButton />
    </div>
    <!-- User Icons -->
    <div class="navbar-right">
      <div class="navbar-crown">
          <fa icon="crown"  inverse />
      </div>
      <div class="navbar-archive">
          <fa icon="archive"  inverse />
      </div>
      <div class="navbar-message">
        <fa icon="comment-alt"  inverse />
      </div>
      <div class="navbar-bit">
          <BitButton />
      </div>
      <div class="user-profile-image">
          <roundedimage />
      </div>
    </div>
  </div>
  </nav>
</template>


<style>
.navbar-container {
  background-color: #18181b;
  height: 55px;
  width:100%;
  display: flex;
  z-index: 999;
  justify-content: space-between;
  padding: 0 10px;
  position: fixed;
  box-shadow: 0 1px 2px rgba(0,0,0,0.9), 0 0px 2px rgba(0,0,0,0.9) !important;
}

.navbar-left {
  height: 100%;
  display: flex;
  align-items: center;
  width: 30%;
  color: #efeff1;
  font-weight: bold;
  font-size: 1.3rem;
}

.navbar-center {
  display: flex;
  justify-content: center;

  width: 40%;
}

.navbar-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 30%;
}

.navbar-crown,
.navbar-message,
.navbar-archive {
  padding-right: 1rem !important;
}

.navbar-logo {
  font-size: 1.1rem;
  padding-right: 1rem !important;
}
.navbar-following-channels {
  font-size: 1.1rem;
  padding: 0 1.2rem !important;
}

.navbar-browse {
  font-size: 1.1rem;
  padding-left: 1rem !important;
  padding-right: 2rem;
}

.navbar-link a{
    text-decoration: none;
    color: white;
}
.navbar-link a:hover{
  color: #a970ff;
    cursor: pointer;
}
</style>