<script>
export default {
    name : "SearchInput"
}

</script>

<template>

   <input type="text" name="" class="search-input" id="" placeholder="Search"/>

</template>




<style>
.search-input {
  width: 400px;
  margin:auto 0;
  height: 40px;
  font-family: Inter;
  font-weight: bold;
  font-size:1rem;
  color:white;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding-left: 10px;
  transition: ease-in;
  background-color: hsla(0,0%,100%,0.2) !important;
  border:2px solid hsla(0,0%,100%,0.2);
}

.search-input::placeholder{
    color:#929297;
}



.search-input:focus{
    outline: none;
    border:2px solid #a970ff;
    background-color:black !important;

}
</style>