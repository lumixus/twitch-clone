<script>
export default {
    name : "registerpopup",
    methods : {
        closePopup(e) {
            e.target.parentElement.parentElement.classList.toggle("hide");
        }
    }
}
</script>


<template>
<div id="register-popup" class="popup-overlay hide">
  <div class="register-popup-container">
    <div class="close-icon" @click="closePopup">X</div>

        <!-- FORM HEADER -->
        <div class="login-form-header-container">
            <h2>Kayıt Oluşturun</h2>
        </div>
         <div class="login-form-container">
            <form id="register-form" autocomplete="off">
                <h3>Username</h3>
                <input type="text" name="username" id="register-username-input" placeholder="Username" />

                <h3>E-Mail</h3>
                <input type="email" name="email" id="register-email-input" placeholder="E-Mail" />

                <h3>Password</h3>
                <input type="password" name="password" id="register-password-input" placeholder="Password" />
                <h3>Confirm Password</h3>
                <input type="password" name="password" id="register-password-again-input" placeholder="Password" />

                <button class="login-form-button" type="submit">Register</button>
            </form>
            </div>
  </div>
  </div>
</template>


<style>
.register-popup-container{
    position: fixed;
    top: 50%;
    left:50%;
    background-color: #18181b;
    border-radius: 20px;
    margin: auto;
    height: 700px;
    width: 500px;
    margin-left:-250px;
    margin-top:-400px;
}
</style>