<template>
<div class="container">
    <div class="contentMenu">
        <left-menu pageName="oil"></left-menu>
        <div class="goods">
            <h2 class="title">
                {{ menuTitle }}
            </h2>
            <div class="goods-list">
                <router-link tag="div"
                    :to="`/items/${items.id}`" 
                    v-for="(items, index) in menu"
                    :key="index"
                    class="items"
                    
                > 
                    <change-item :itemId="items.id" :itemImg="items.link"/>
                    <delete-item :itemId="items.id" :itemImg="items.link"/>
                    <p
                        class="items-id"
                    >
                        ID: {{ items.id }}
                    </p>
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
</template>

<script>
import leftMenu from '@/components/LeftMenu';
import deleteItem from '@/cms/DeleteItem';
import changeItem from '@/cms/ChangeItem';
import { mapMutations } from 'vuex'
export default {
    components:{
        leftMenu, deleteItem, changeItem
    },
    data() {
        return{
            menu: [],
            menuTitle: null,
            cartList: JSON.parse(localStorage.cart)
        }
    },
    watch: { 
     '$route.params.menuPos': {
        handler: function(menuPos) {
            this.axios.get('http://localhost:3500/products/categoryMenu?cat=' + menuPos)
                .then(response => {
                this.menu = response.data.values;
            })
            this.menuTitle = menuPos
        },
        deep: true,
        immediate: true
      }
    },
    mounted(){
        if (localStorage.cart){
            this.cartList = JSON.parse(localStorage.cart);
        }
    },
    methods: {
        ... mapMutations(['getCart']),
        addCart(item){
            this.getCart(item);
        }
    }
}
</script>

<style>
    .contentMenu{
        display: flex;
    }
    .leftbar{
        width: 80%;
    }
</style>