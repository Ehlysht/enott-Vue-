<template>
    <div class="wrapper-content">
        <div class="container">
            <div class="chemical-content">
                <left-menu pageName="oil"></left-menu>
                <div class="goods">
                    <h2 class="title">
                        Автомобільні присадки
                    </h2>
                    <div class="goods-list">
                        <router-link tag="div"
                            :to="`/items/${items.id}`" 
                            v-for="(items, index) in listProd"
                            :key="index"
                            class="items"
                        > 
                            <change-item :itemId="items.id" :itemImg="items.link"/>
                            <delete-item :itemId="items.id" :itemImg="items.link"/>
                            <img 
                                :src="require('@/assets/img/' + items.link)" 
                                :alt="items.name" 
                                class="items-img">
                            <p
                                class="items-name"
                            >
                                {{ items.name.substr(0, 27) }}...
                            </p>
                            <p
                                class="items-price"
                            >
                                {{ items.price }} грн.
                            </p>
                            <button class="btn" @click.prevent="addCart(items)">
                                Купить
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import leftMenu from '@/components/LeftMenu';
import deleteItem from '@/cms/DeleteItem';
import changeItem from '@/cms/ChangeItem';
import axios from 'axios';
import { mapMutations } from 'vuex'
export default {
    name: "Oil",
    components:{
        leftMenu, deleteItem, changeItem
    },
    data(){
        return{
            access: '',
        }
    },
    created(){
        this.access = document.cookie;
    },
     mounted(){
        if (localStorage.cart){
            this.cartList = JSON.parse(localStorage.cart);
        };
        this.$store.dispatch('setItems', 'oil');
    },
    methods: {
        ... mapMutations(['getCart']),
        addCart(item){
            this.getCart(item);
        }
    },
    computed: {
        listProd(){
            return this.$store.getters.allItems
        }        
    },
}
</script>

<style scoped>
    
</style>