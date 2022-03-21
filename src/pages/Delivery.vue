<template>
  <div>
    <carousel :items-to-show="4">
    <slide v-for="(item, index) in listPop" :key="index">
      {{ item.name }}
    </slide>

    <template #addons>
      <navigation/>
      
    </template>
  </carousel> 
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: "Delivery",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data(){
        return{
            listPop: []
        }
    },
  created(){
        this.axios.get('http://localhost/NewApi/items.php?pop=yes')
        .then(response => {
            this.listPop = response.data;
        })
    },
};
</script>
<style>
  .carousel__prev, .carousel__next{
    background-color: transparent;
    color: #000;
  }
</style>