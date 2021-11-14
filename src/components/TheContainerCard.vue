<template>
  <div class="wrapper">
    <div class="header">
    <h1 class=title>Les Pièces technique</h1>
    <hr>
    </div>
        <div class="container">
        
        <UnitCard/>
        <UnitCard/>
        <UnitCard/>
        <UnitCard/>
        <UnitCard/>
        <UnitCard/>
        <UnitCard/>
        <UnitCard/>
    </div>
  </div>

</template>

<script>
  import UnitCard from "../components/UnitCard";
 
 export default {
  name: "ContainerCard",
  components : {UnitCard}
}
</script>

<style scoped>
.header{
  position:absolute;
  left: 0;
  right: 0;
  top:0;
  text-align: left;
}
.title{
  margin: 2%;
}
.wrapper{
  padding: 2%;
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  right: 7%;
  bottom: 5%;
  background:#fff;
  width: 70vw;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgb(104, 94, 94);
}
.container{
  display:flex ;
  max-width: 2000px;
  flex-wrap: wrap;
  margin-top:100px;
  height: 100%;
  width: 100%;
  background: white;


  }
</style>