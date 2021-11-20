<script>
export default {
 name : "type",
 props : {
     typeName : String
 }
}
</script>



<template>
  <div class="hp-type-container">
     

      <div class="hp-type-name">
      <h2>{{typeName}}</h2>
      </div>

       <div class="gaming-img">
      <img src="https://static.twitchcdn.net/assets/gaming-e9019587744b56b11b43.svg" alt="">
      </div>
  </div>
</template>


<style>
.hp-type-container{
    display: flex;
    flex-direction: row;
    width:250px;
    height: 60px;
    background-color: #772ce8;
    border-radius: 10px;
    background-image: url("https://static.twitchcdn.net/assets/gaming-background-2db19fcb7174d9a8193c.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 100% 100%;
    margin-bottom:20px;
}


.gaming-img{
    height: 100%;
    margin-top:-26px;
}


.hp-type-container > img {
    vertical-align: top;
    margin-top:-26px;
    margin-left:10px;
    max-height: 100%;
    max-width: 100%;
    
}


.hp-type-name{
    color : white;
    height: 100%;
    display: flex;
    align-items: center;
    width:70%;
    justify-content: left;
    padding-left:20px;
    
}

</style>