<script>
import channel from "./sidebaritems/channel.vue";

export default {
  name : "Sidebar",
  components : {
    channel
  },
  methods : {
    shrinkSidebar : () => {
      let container = document.querySelector(".sidebar-container");
      let sidebarChannels = document.querySelectorAll(".sidebar-channel-container");
      document.querySelector(".content").classList.toggle("content-shrink");
      sidebarChannels.forEach((s) => {
        s.querySelector(".sidebar-channel-name").classList.toggle("sidebar-channel-shrink");
        s.querySelector(".sidebar-channel-viewers").classList.toggle("sidebar-channel-shrink");
        s.classList.toggle("sidebar-channel-shrink-padding");
        s.classList.toggle("sidebar-channel-hover");
      });
      document.querySelector(".following-channels h4").classList.toggle("sidebar-channel-shrink");
      document.querySelector(".recommended-channels h4").classList.toggle("sidebar-channel-shrink");
      document.querySelector(".sidebar-following-channel-icon-container").classList.toggle("sidebar-following-channel-icon-container-shrink");
      container.classList.toggle("sidebar-channel-container-shrink");
    }
  }
};
</script>



<template>
  <div class="sidebar-container">
    <div class="following-channels">
      <h4>FOLLOWING CHANNELS</h4>
      <fa icon="caret-square-left" @click="shrinkSidebar()" class="close-sidebar-icon" inverse />
    </div>
    <div class="sidebar-following-channel-icon-container">
      <fa icon="heart" inverse class="sidebar-following-channels-icon" />
    </div>
    <channel channelName="Lumixus" :viewers="156" imgSeed="aaaa" />
    <channel channelName="BloodWine" :viewers="1650" imgSeed="bbbb" />
    <channel channelName="ZIEatBabysZZ" :viewers="15856" imgSeed="cccc"/>
    <channel channelName="Shonix" :viewers="87" imgSeed="dddd"/>

    <div class="recommended-channels">
      <h4>RECOMMENDED CHANNELS</h4>
    </div>
    <channel channelName="Bloodheath" :viewers="654" imgSeed="bloodheath" />
    <channel channelName="DragonSlayer" :viewers="278657" imgSeed="dragonslayer" />
    <channel channelName="ProPlayer" :viewers="15856" imgSeed="proPlayer"/>
    <channel channelName="Hunter" :viewers="9987" imgSeed="hunter"/>
    <channel channelName="GreenArrow" :viewers="36" imgSeed="greenarrow"/>
  </div>
</template>



<style>
.sidebar-container {
  display: flex;

  flex-direction: column;
  width: 240px;
  height: 100%;
  position: fixed;
  top: 55px;
  background-color: #1f1f23;
}

@media only screen and (max-width: 1200px) {


    .sidebar-container{
        width: 50px;
    }

    .following-channels h4 {
      display: none;
    }

    .recommended-channels h4 {
      display: none;
    }

    .following-channels .close-sidebar-icon {
      display: none;
    }


    .sidebar-following-channel-icon-container{
      display: flex !important;
      justify-content: center;
      margin-bottom:20px;
}
}

.sidebar-following-channel-icon-container-shrink{
  display: flex !important;
  justify-content: center;
  margin-bottom:20px;
}


.sidebar-following-channel-icon-container{
  display: none;

  width: 100%;
}


.following-channels, .recommended-channels {
  display: flex;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 20px;
  margin-bottom:20px;
}

.recommended-channels h4 {
  font-size : 0.8rem;
  color : white;
}

.following-channels h4 {
  font-size: 0.8rem;
  color: white;
}

.following-channels .close-sidebar-icon:hover {
  background-color: hsla(0, 0%, 100%, 0.4);
  cursor: pointer;
}
</style>