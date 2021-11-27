<script>
export default {
methods : {
    toggleUserMenu(){
        document.querySelector(".sub-menu-container").classList.toggle("hide");
    }
}
}


</script>




<template>
<div class="navbar-rounded-image-container">
    <button class="navbar-user-button" @click="toggleUserMenu">
    <img class="navbar-rounded-image" src="https://picsum.photos/seed/aaaaa/200/200" alt="test">
    </button>
    <div class="sub-menu-container hide">
        <ul class="sub-menu">
            <li class="sub-menu-item">Profile</li>
            <li class="sub-menu-item">Settings</li>
            <li class="sub-menu-item">Logout</li>
        </ul>
    </div>
    </div>
</template>



<style>

.navbar-rounded-image{
    max-height: 100%;
    max-width: 100%;
    border-radius: 9000px !important;

}


.navbar-rounded-image-container{
    height: 40px;
    width: 40px;
    margin-left:1rem;
    position: relative;
}

.navbar-user-button{
  height: 40px;
    width: 40px;
    background-color: transparent;
    border: none;
    cursor: pointer;
}

.sub-menu-container{
    background-color: #18181b;
    width: 150px;
    border-radius: 5px;
    top:45px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.4), 0 0 4px rgba(0,0,0,0.4);
    position: absolute;
    
    right: 0px;
    text-align:right;
}

.sub-menu{
    list-style: none;
    color:white;
    padding : 5px 5px;
}

.sub-menu li{
    border-radius: 10px;
    padding: 10px;
}

.sub-menu li:hover{
    background-color : hsla(0, 0%, 100%, 0.15);
    cursor: pointer;
    
}


.hide{
    display:none;
}


</style>