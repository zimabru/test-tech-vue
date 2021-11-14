<template>
<div class="piecePage__background">
<TheContainerCard/>
</div>
</template>

<script>
import TheContainerCard from "../components/TheContainerCard.vue";
let listCars = require("../model/listCars")
console.log(listCars);
export default {
  data() {
   return {listCars: listCars} 
  },
  components: {
      TheContainerCard
  },
  methods: {

  }
};

</script>

<style scoped>
.piecePage__background{
    background:grey;
}
</style>