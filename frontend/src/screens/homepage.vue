<script>
import livestreamsmall from "../components/livestreambox/livestreamsmall.vue";
import hpcategorybox from "../components/categorybox/hpcategorybox.vue";
import type from "../components/typebox/type.vue";
export default {
    name : "homepage",
    components : {
        livestreamsmall,
        hpcategorybox,
        type
    }
}
</script>

<template>
<div>
    <div class="promo">

    </div>

    <div class="homepage-title">
    <h3>Live Streams That You May Like</h3>
    </div>

    <div class="livestreams-container">
        <livestreamsmall :streamTitle="'We are playing the best RPG'" :game="'The Witcher 3'" :broadcaster="'Lumixus'" />
        <livestreamsmall :streamTitle="'FPS Clutch time'" :game="'Counter Strike : Global Offensive'" :broadcaster="'Shonix'" />
        <livestreamsmall :streamTitle="'The Best Game Ever'" :game="'League of Legends'" :broadcaster="'Bloodheath'" />
        <livestreamsmall :streamTitle="'Chat Time'" :game="'Just Chatting'" :broadcaster="'ZIEatBabysZZ'" />
    </div>

    <div class="custom-hr"></div>

     <div class="homepage-category-title">
    <h3>Categories That You May Like</h3>
    </div>

    <div class="categories-container">
        <hpcategorybox />
        <hpcategorybox />
        <hpcategorybox />
        <hpcategorybox />
        <hpcategorybox />
    </div>

    <div class="custom-hr"></div>

    <div class="stream-types-container">
        <type :typeName="'Gaming'" />
        <type :typeName="'IRL'" />
        <type :typeName="'Just Chatting'" />
        <type :typeName="'Sports'" />
    </div>
</div>
</template>



<style>
.promo{
    height: 300px;
    width: 100%;

}

.homepage-title{
    margin-top:50px;
    margin-bottom:10px;
    color:white;
}
.livestreams-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    
}


.custom-hr{
    border-top: 1px solid hsla(0, 0%, 100%, 0.1);
    margin-bottom: 2rem;
}

.homepage-category-title{
    color : white;
    margin-bottom:10px;
}

.categories-container{
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    overflow: hidden;
    justify-content: space-between;
}

.stream-types-container{
    margin-bottom:50px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}

</style>