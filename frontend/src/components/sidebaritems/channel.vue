<script>
export default {
    name : "sidebarchannel",
    props : {
        channelName : String,
        viewers : Number,
        imgSeed : String
    }
}
</script>


<template>
<div>
    <router-link :to="'/'+channelName">

    
<div class="sidebar-channel-container sidebar-channel-hover">
    <div class="sidebar-channel-logo-container"><img :src="'https://picsum.photos/seed/'+imgSeed+'/200/200'" alt=""></div>
    <div class="sidebar-channel-name"><p>{{channelName}}</p><p class="sidebar-channel-game">Grand Theft Auto</p></div>
    <div class="sidebar-channel-viewers">{{viewers > 999 ? (viewers / 1000).toFixed(1) + " B" : viewers}}</div>
  
</div>

  </router-link>

</div>

  
</template>



<style>
.sidebar-channel-container{
    display: flex;
    padding: 5px 15px;
    align-items: center;
    height: 45px; 
    justify-content: space-between;
    color: white;
    cursor: pointer;
}

.sidebar-channel-shrink{
    display:none;
}

.sidebar-channel-container-shrink{
    width: 50px !important;
}

@media only screen and (max-width: 1200px) {
    .sidebar-channel-viewers, .sidebar-channel-name{
        display: none;
    }

    .sidebar-channel-container{
        width: 50px;
        padding: 2px 10px !important;
    }

    .sidebar-channel-hover:hover{
    background-color: transparent !important;
}
}

.sidebar-channel-shrink-padding{
    padding: 2px 10px !important;
}

.sidebar-channel-hover:hover{
    background-color: hsla(0, 0%, 100%, 0.3);
}

.sidebar-channel-logo-container{
    height: 100%;
    align-items: center;
}

.sidebar-channel-container img{
    max-height: 100%;
    max-width: 100%;
    border-radius: 9000px;
}

.sidebar-channel-name > p {
    font-size:0.8rem;
}

.sidebar-channel-game{
    color : #adadb8
}

.sidebar-channel-viewers{
    text-align: center;
    width:20%;
    color: #dedee3;
    font-size:0.7rem;
}

</style>