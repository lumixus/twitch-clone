<template>
  <div class="stream-wrapper">
    <div class="stream-container">
      <div class="stream-player">
        <video ref="videoPlayer" muted autoplay preload="auto" id="videoPlayer" class="video-js" controls>
          <source
            :src="'http://rtmp-server.westeurope.cloudapp.azure.com:8080/hls/'+ $route.params.broadcaster + '.m3u8'"
            type="application/x-mpegURL"
          />

        </video>
      </div>
      <div class="stream-info">
        <div class="stream-info-left">
          <div class="stream-logo-container">
            <img
              src="https://picsum.photos/seed/aabbcc/200/200"
              alt=""
              class="stream-logo"
            />
            <div class="live-overlay">LIVE</div>
          </div>
          <div class="channel-info">
            <h4 class="channel-info-name">{{ $route.params.broadcaster }}</h4>
            <h4 class="channel-info-title">Stream Title</h4>
            <h4 class="channel-info-category">Stream Category</h4>
          </div>
        </div>
        <div class="stream-info-right">
          <div class="stream-info-buttons">
            <button class="follow-button">Follow</button>
            <button class="subscribe-button">Subscribe</button>
          </div>
          <div class="stream-viewer">
            <p class="viewer-count"><fa icon="user-alt" />1.256</p>
            <p class="stream-time">2:29:15</p>
            <button class="share-button">
              <fa icon="share-square" class="share-icon" />
            </button>
            <button class="share-button">
              <fa icon="ellipsis-v" class="share-icon" />
            </button>
          </div>
        </div>
      </div>

      <div class="stream-about"></div>
    </div>
    <div class="stream-chat">
      <div class="chat-header">
        <fa icon="chevron-right" />
        <h5>STREAM CHAT</h5>
        <fa icon="user-friends" />
      </div>
      <div class="message-list"></div>
      <div class="send-message"></div>
      <div class="chat-bottom"></div>
    </div>
  </div>
</template>

<script>
import videojs from "video.js";
import "video.js/dist/video-js.css";

export default {
  name: "stream",
  props: {
    options: {
      type: Object,

      default() {
        return { autoplay: true };
      },
    },
  },
  data() {
    return {
      player: null,
    };
  },
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options);
  
  },
  beforeUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  },
};
</script>

<style>
.stream-container {
  width: 100%;
  margin-right: 22%;
  margin-left: -30px;
  margin-top: -20px;
  display: flex;
  flex-direction: column;
}

.video-js {
  height: 100%;
  width: 100%;
}

.live-overlay {
  position: absolute;
  bottom:45px;
  left: 10px;
  background-color: #e91916;
  color: white;
  font-family: Inter;
  width: 50px;
  text-align: center;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
}

.share-icon {
  font-size: 1.2rem;
}

.share-button {
  border: none;
  color: white;
  background: none;
  padding: 5px 10px;
  border-radius: 10px;
}

.share-button:hover {
  background-color: hsla(0, 0%, 100%, 0.15);
}

.viewer-count {
  color: red;
  margin-right: 10px;
}

.viewer-count svg {
  margin-right: 5px;
}

.stream-viewer {
  display: flex;
  flex-direction: row;
  color: white;
  font-size: 0.9rem;
  align-items: center;
}

.stream-info-buttons {
  margin-bottom: 10px;
}

.channel-info-name,
.channel-info-title {
  color: #efeff1;
  margin-bottom: 5px;
}

.channel-info-title {
  font-size: 0.8rem;
}

.channel-info-category {
  font-size: 0.9rem;
  color: #5c16c5;
}

.follow-button,
.subscribe-button {
  padding: 8px 20px;
  font-family: Inter;
  border: none;
  color: white;
  border-radius: 10px;
}

.follow-button {
  background-color: #9147ff;
}

.stream-time {
  margin-right: 20px;
}

.subscribe-button {
  background-color: hsla(0, 0%, 100%, 0.15);
  width: 130px;
}

.stream-info,
.stream-info-left {
  height: 140px;
}

.stream-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;
  margin-right: 30px;
}

.stream-info-left {
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  width: 50%;
  color: white;
}

.stream-logo-container {
  height: 100%;
  width: 15%;
  padding-bottom: 50px;
  position:relative;
}

.stream-logo {
  max-height: 100%;
  max-width: 100%;
  border-radius: 100%;
  border: 0.2rem solid #bd0078;
}

.stream-player {
  height: calc(100vh - 16rem);
  background-color: gray;
}

.stream-wrapper {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
}

.stream-chat {
  width: 20%;
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  background: rgb(14, 14, 16);
  margin-top: -20px;
  margin-right: -30px;
  border-left: 1px solid hsla(0, 0%, 100%, 0.15);
  position: fixed;
  right: 30px;
}
.chat-header {
  width: 100%;
  height: 60px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.15);
}
</style>