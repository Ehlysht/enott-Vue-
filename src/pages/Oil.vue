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
    </div>
</template>

<script>
import leftMenu from '@/components/LeftMenu'
import { mapMutations } from 'vuex'
export default {
    name: "Oil",
    components:{
        leftMenu
    },
    data(){
        return{
            listProd: []
        }
    },
    created(){
        this.axios.get('http://localhost/NewApi/items.php?menuPos=oil')
        .then(response => {
            this.listProd = response.data;
        })
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

<style scoped>
    
</style>