
<script>
export default {
 name : "notloggedin",
 methods : {
     submenuHandler(){
         document.querySelector(".navbar-user-icon-submenu-container").classList.toggle("hide");
     },
     openLoginPopup(){
         document.querySelector("#login-popup").classList.toggle("hide");
     }
 }
}
</script>




<template>
    <div class="button-group">
        <button class="register-button">Kayıt Ol</button>
        <button class="login-button" @click="openLoginPopup">Giriş Yap</button>
        <div class="navbar-user-icon-container">
        <fa icon="user" inverse class="navbar-user-icon" @click="submenuHandler" />
        <div class="navbar-user-icon-submenu-container hide">
           <div class="navbar-user-icon-submenu-item">Language</div>
           <div class="navbar-user-icon-submenu-item">Dark Theme</div>
           <hr class="submenu-seperator">
           <div class="navbar-user-icon-submenu-item">Login</div>
        </div>
        </div>
    </div>
</template>


<style>
.register-button, .login-button{
    padding : 8px 20px;
    margin: 0px 5px ;
    border-radius: 5px;
    border : none;
    cursor: pointer;
    color: white;
    font-weight: bold;
    font-family: Inter;

}

.button-group{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.navbar-user-icon-container{
   position: relative;
}

.navbar-user-icon-submenu-container{
    position : absolute;
    width: 200px;
    text-align: right;
    color:white;
    border-radius: 10px;
    right:0;
    top:30px;
    background-color: #18181b;
    box-shadow: 0 4px 8px rgba(0,0,0,0.4), 0 0 4px rgba(0,0,0,0.4);
    padding:20px 0;
}

.submenu-seperator{
    border-color: gray;
    margin:10px 0px;
    
}

.navbar-user-icon-submenu-item{
    padding: 10px 15px;
    transition-duration: 0.5s;
}

.navbar-user-icon-submenu-item:hover{
    background-color: hsla(0, 0%, 100%, 0.30);
    cursor: pointer;
    border-radius: 10px;
}

.register-button{
    background-color : hsla(0, 0%, 100%, 0.15);
}

.navbar-user-icon{
    margin-left:10px;
    margin-right:10px;
    cursor: pointer;
}

.login-button{
    background-color:#9147ff;
}

.login-button:hover{
    background-color:#772ce8;
}

.register-button:hover{
    background-color: hsla(0, 0%, 100%, 0.10);
}
</style>