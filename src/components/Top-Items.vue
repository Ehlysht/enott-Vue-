<template>
  <carousel :items-to-show="4" class="goods-list pop-list">
    <slide v-for="(slide, index) in allTop" :key="index" class="items">
      <a 
          :href="`/items/${slide.id}`"
      >
        <img 
            :src="require('@/assets/img/' + slide.link)" 
            :alt="slide.name" 
            class="items-img">
        <p
            class="items-name"
        >
            {{ slide.name.substr(0, 35) }}...
        </p>
        <p
            class="items-price"
        >
            {{ slide.price }} грн.
        </p>
        <button class="btn" @click.prevent="addCart(slide)">
            Купить
        </button>
      </a>
    </slide>

    <template #addons>
        <pagination />
        <navigation />
    </template>
  </carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { mapMutations } from 'vuex'
export default {
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
    },
    computed: {
        allTop(){
            return this.$store.getters.allTop;
        }        
    },
    mounted() {
        this.$store.dispatch('setTop');
        var imgLink = require('@/assets/img/arrow.svg');
        const collection = document.getElementsByClassName('carousel__next');
        for (let i = 0; i < collection.length; i++) {
            collection[i].innerHTML = '';
            collection[i].innerHTML = '<img src="' + imgLink + '" class="arrow arrow-right">';
        }
        let collection1 = document.getElementsByClassName('carousel__prev');
        for (let i = 0; i < collection.length; i++) {
            collection1[i].innerHTML = '';
            collection1[i].innerHTML = '<img src="' + imgLink + '" class="arrow arrow-left">';
        }
    },
    methods: {
        ... mapMutations(['getCart']),
        addCart(item){
            this.getCart(item);
        },
    },
}
</script>

<style>

</style>