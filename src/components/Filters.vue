<template>
  <div class="filter">
      <input type="range" v-model="range" min="0" max="100" step="1"/>
  </div>
</template>

<script>
import axios from 'axios';
import { mapMutations } from 'vuex';
export default {
    data(){
        return{
            range: '',
            productList: []
        }
    },
    created(){
        axios.get('http://localhost:3500/products')
        .then(response => {
            this.productList = response.data.values;
        })
    },
    methods:{
        sortItems(){
            return this.productList.filter(function(item) {
                return (item.price > 0 && item.price_range < this.range);
            });
        }
    }
}
</script>

<style>

</style>