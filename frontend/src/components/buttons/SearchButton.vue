<script>
export default {
    name : "Button",
    methods : {
        sayHello() {
            console.log("Hello");
        }
    }
}
</script>


<template>
    <button class="search-button" @click="sayHello"><fa icon="search" size="lg" /></button>
</template>




<style>
.search-button{
    height: 40px;
    border: none;
    color:white;
    background-color:hsla(0,0%,100%,0.2);
    margin:auto 0;
    width: 40px;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    cursor: pointer;
}

.search-button:hover{
    background-color: rgba(231, 225, 225, 0.301)
}

.search-button:active{
    background-color: hsla(0,0%,80%,0.2);
}
</style>