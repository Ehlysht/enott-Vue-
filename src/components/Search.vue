<template>
  <img src="@/assets/img/search.svg" alt="Search" class="search-img"><input type="text" v-model="searchItem" @input="openList">
  <ul class="product-list" v-if="this.visibleList">
      <router-link tag="li" :to="`/items/${item.id}`" @click="visibleList = false; this.searchItem = ''" class="product-item" v-for="(item, index) in productList" :key="index">
          {{ item.name }}
      </router-link>
  </ul>
</template>

<script>
import axios from 'axios';
import { mapMutations } from 'vuex';
export default {
    data(){
        return{
            searchItem: '',
            productList: [],
            visibleList: false
        }
    },
    created(){
        axios.get('http://localhost:3500/products')
        .then(response => {
            this.productList = response.data.values;
        })
    },
    computed:{
        openList(){
            if(this.searchItem == ''){
                this.visibleList = false
            } else {
                this.visibleList = true
            }
            axios.get('http://localhost:3500/products/search?name=' + this.searchItem)
            .then(response => {
                this.productList = response.data.values;
                console.log(this.productList)
            })
        }
    }
}
</script>

<style scoped>
    .search-img{
        width: 20px;
    }
    .product-list{
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 75px;
        background: #fff;
        height: 200px;
        overflow: auto;
        z-index: 999;
    }
    .product-item{
        font-size: 14px;
        border: 1px solid #000;
        padding: 5px;
        margin: 5px 0;
    }
</style>