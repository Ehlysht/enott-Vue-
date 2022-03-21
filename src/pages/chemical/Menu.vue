<template>
    <div class="contentMenu">
        <left-menu pageName="chemical"></left-menu>
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
</template>

<script>
import leftMenu from '@/components/LeftMenu'
import { mapMutations } from 'vuex'
export default {
    components:{
        leftMenu
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
            this.axios.get('http://localhost/NewApi/items.php?menuPos=chemical&cat=' + menuPos)
                .then(response => {
                this.menu = response.data;
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