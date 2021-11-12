<script>
export default {
    name : "BitButton"
}
</script>



<template>

    <button class="bit-button"><fa icon="cookie-bite" /><span >Bit Al</span></button>
  
</template>


<style>
.bit-button{
    height: 35px;
    width: 90px;
    font-family:Inter,"Arial";
    background-color: hsla(0, 0%, 100%, 0.2);
    border: none;
    color:#eff;
    padding: 5px;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
}

.bit-button:active{
    background-color: hsla(0, 0%, 100%, 0.2) !important;
}


.bit-button:hover{
 background-color: hsla(0, 0%, 100%, 0.3);
}

.bit-button span{
    margin-left:5px;
}
</style>