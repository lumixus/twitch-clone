<script>
export default {
    name : "livestreamsmall",
    props : {
        streamTitle : String,
        broadcaster : String,
        game : String
    }
}
</script>


<template>
<div class="livestream-box-container">
  <div class="img-container">
      <img src="https://picsum.photos/seed/abac/350/200" alt="">
  </div>
  <div class="livestream-info-container">
    <div class="livestream-box-logo-container">
        <img src="https://picsum.photos/seed/ttteee/200/200" alt="">
    </div>
    <div class="livestream-box-column-container">
    <div class="livestream-box-title-container">
        <h4>{{streamTitle}}</h4>
    </div>
    <div class="livestream-box-name-container">
        <h5>{{broadcaster}}</h5>
    </div>
    <div class="livestream-box-game-container">
        <h5>{{game}}</h5>
    </div>
    </div>
    </div>
  </div>
</template>



<style>

.livestream-box-container{
    display: flex;
    flex-direction: column;
    width: 20rem;
    margin-bottom:20px;
    justify-content: flex-start;
}

.livestream-box-column-container{
    display: flex;
    flex-direction: column;
    color : #adadb8
}

.livestream-box-logo-container{
    width: 40px;
    height: 40px;
    margin :0 10px;
}

.livestream-box-logo-container > img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 9000px;
}

.img-container{
    width: 100%;
}

.livestream-info-container{
    display: flex;
    flex-direction: row;
    margin-top:5px;
}

.img-container > img{
    max-height: 100%;
    max-width: 100%;
}

.livestream-box-title-container > h4 {
    color : #dedee3;
}

.livestream-box-title-container{
    margin-bottom:5px;
}

</style>