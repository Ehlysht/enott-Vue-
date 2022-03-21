<template>
    <div class="cart-items">
        <ul class="cart-list" v-if="allCart != ''">
            <li v-for="(item, index) in allCart" :key="index" class="cart-item">
                <img :src="require('@/assets/img/' + item.link)" alt="item.name" class="cart-item-img">
                <p class="cart-item-name">
                    {{ item.name }}
                </p>
                <p class="cart-item-name">
                    Qty: {{ parseInt(item.qty) }}
                </p>
                <button @click="delFromCart(index)" class="cart-delete">
                    X
                </button>
            </li>
        </ul>
        <p v-if="allCart == ''">
            Корзина пустая!
        </p>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    data(){
        return{
            
        }
    },
    computed: {
        allCart(){
            return this.$store.getters.allCart
        }        
    },
    mounted() {
        this.$store.dispatch('setCart');
    },
    methods: {
        ... mapMutations(['deleteFromCart']),
        delFromCart(id){
            this.deleteFromCart(id);
        }
    }
}
</script>
<style scoped>

</style>