<script>

export default {
  name: "loginpopup",
  methods: {
    closePopup(e) {
      e.target.parentElement.parentElement.classList.toggle("hide");
    },
    login(e) {
      e.preventDefault();
      const username = document.querySelector("#login-username-input").value;
      const password = document.querySelector("#login-password-input").value;
      this.$store.dispatch("loginUser", {
        username: username,
        password: password,
      });
    },
  },
  computed: {
    signIn() {
      return this.$store.getters.getUser
    },
    loading() {
      return this.$store.state.loggingIn;
    },
    error(){
        return this.$store.state.loginError;
    }
  },
};
</script>

<template>
  <div id="login-popup" class="popup-overlay hide">
    <div class="login-popup-container">
      <div class="close-icon" @click="closePopup">X</div>

      <!-- FORM HEADER -->
      <div class="login-form-header-container">
        <h2>Oturum açın</h2>
      </div>
      <div class="login-form-container">
        <form id="login-form" autocomplete="off" @submit="login">
          <h3>Username</h3>
          <input
            type="text"
            name="username"
            id="login-username-input"
            placeholder="Username"
          />

          <h3>Password</h3>
          <input
            type="password"
            name="password"
            id="login-password-input"
            placeholder="Password"
          />

          <button class="login-form-button" type="submit">
            <p v-if="!loading">Login</p>
            <p v-if="loading">Loading...</p>
          </button>

          <h4 v-if="error">{{error}}</h4>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
.close-icon {
  position: absolute;
  font-size: 2rem;
  right: 30px;
  top: 10px;
  color: white;
  cursor: pointer;
}
.login-popup-container {
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: #18181b;
  border-radius: 20px;
  margin: auto;
  height: 500px;
  width: 500px;
  margin-left: -250px;
  margin-top: -250px;
}

.login-form-container {
  padding: 10px;
}
.login-form-button {
  height: 40px;
  width: 100%;
  text-align: center;
  margin: 0px;
  background-color: #9147ff;
  border: none;
  border-radius: 10px;
  font-family: Inter;
  font-weight: bold;
  color: white;
  cursor: pointer;
  margin-top: 40px;
}

.login-form-button:hover {
  background-color: #772ce8;
}

.login-form-container h3 {
  color: white;
  margin-bottom: 10px;
}

.login-form-container input {
  height: 40px;
  padding-left: 10px;
  font-family: Inter;
  font-size: 1.1rem;
  font-weight: bold;
  width: 100%;
  border-radius: 10px;
  border: none;
  background-color: hsla(0, 0%, 100%, 0.2);
  color: white;
  margin-bottom: 40px;
}

.login-form-container input:focus {
  outline: none;
  background-color: #000;
  border: 2px solid #9147ff;
}

.login-form-header-container {
  height: 150;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: white;
}

.login-form-header-container h2 {
  padding: 20px;
}

.popup-overlay {
  position: fixed;

  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
}
</style>
