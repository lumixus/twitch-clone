<script>
export default {
    name : "hpcategorybox"
}
</script>



<template>
  <div class="category-box-container">
      <div class="category-box-image-container">
          <img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co2lbd.png" alt="">
      </div>
      <div class="category-box-name"><h4>Grand Theft Auto V</h4></div>
      <div class="category-box-viewer"><h5>458 B viewers</h5></div>
  </div>
</template>



<style>

.category-box-container{
    display: flex;
    flex-direction: column;
    padding-bottom:2rem;
}

.category-box-name{
    color : #dedee3;
    margin-top:5px;
    margin-bottom:5px;
}

.category-box-viewer{
    color : #adadb8;
}

.category-box-image-container{
    height: 250px;
    width:100%;
}

.category-box-image-container > img{
 max-height: 100%;
 max-width: 100%;

}

</style>