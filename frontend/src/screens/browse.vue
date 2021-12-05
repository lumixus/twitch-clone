<template>
<div class="content-wrapper">
  <div class="browse-header">
      <h1 class="browse-header-text">Browse</h1>
      <div class="types-container">
      <type :typeName="'IRL'" />
      <type :typeName="'Games'" />
      <type :typeName="'Music'" />
      <type :typeName="'Esport'" />
      </div>

      <div class="browse-sub-links">
          <div class="browse-sub-link">
          <a>Categories</a>
          </div>
          <div class="browse-sub-link">
          <a>Live Channels</a>
          </div>
      </div>

      <div class="browse-filter-section">
          <div class="browse-left-section">
          <div class="browse-filter-label">
              Filter :
          </div>
          <div class="browse-filter-input">,
              <input autocomplete="off" placeholder="Search for a tag" type="text" name="browseFilter" id="browseFilter">
          </div>
          </div>
          <div class="browse-right-section">
              <h4>Sort :</h4>
              <select name="sort" id="browse-sort">
                  <option value="">Suggestions for you</option>
              </select>
          </div>
          
      </div>

      <div class="browse-categories-box">
          <hpcategorybox />
          <hpcategorybox />
          <hpcategorybox />
          <hpcategorybox />
          <hpcategorybox />
          <hpcategorybox />
          <hpcategorybox />
          <hpcategorybox />
          <hpcategorybox />
      </div>
  </div>
</div>
</template>

<script>
import type from "../components/typebox/type.vue";
import hpcategorybox from "../components/categorybox/hpcategorybox.vue";
export default {
    name : "browse",
    components:{
        hpcategorybox,
        type
    }
}
</script>

<style>

.browse-categories-box{
    margin-top:20px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
    
    .browse-header-text{
        font-size:3rem;
        color:white;
        margin-bottom:20px;
    }

    
    

    .browse-filter-section{
        display : flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top:20px;
        height: 30px;
    }
    .browse-left-section{
        display: flex;
        flex-direction: row;
    }

    .browse-right-section{
        color: white;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .browse-right-section h4{
        margin-right:20px;
    }

    .browse-right-section select{
        font-size:1rem;
        padding:5px;
        font-family: Inter;
        border:none;
        border-radius: 5px;
        background : none;
        background-color: hsla(0, 0%, 100%, 0.2);
        min-width: 150px;
        color:white;
    }

    .browse-filter-label{
        height: 100%;
        vertical-align:center;
        color : white;
        font-size:0.9rem;
        line-height: 2rem;
        
    }
    .browse-filter-input input{
        background-color: hsla(0, 0%, 100%, 0.2);
        border : none;
        height: 2rem;
        border-radius: 5px;
        font-family:Inter;
        padding:5px;
        color:white;
    }

    .browse-sub-links{
        color : white;
        display: flex;
        flex-direction: row;
    }

    .browse-sub-links  div{
        margin-right:30px;
    }

    .browse-sub-link{
        padding:10px;
        font-size:1.2rem;
        cursor: pointer;
    }

    .browse-sub-link-active{
        text-decoration: underline;
        border-bottom: 1px solid purple;

    }

    .types-container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }


</style>