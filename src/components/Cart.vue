<template>
<div class="container">
    <h2 class="cart-title title">
        Кошик
    </h2>
    <div class="cart-items">
        <ul class="cart-list" v-if="allCart != ''">
            <li v-for="(item, index) in allCart" :key="index" class="cart-item">
                <div class="cart-item-info">
                    <img :src="require('@/assets/img/' + item.link)" alt="item.name" class="cart-item-img">
                    <p class="cart-item-name">
                        {{ item.name }}
                    </p>
                </div>
                <div class="cart-item-price cart-item-desc">
                    <p class="cart-item-price-text cart-item-text">
                        Ціна
                    </p>
                    <p class="cart-item-price-value cart-item-value">
                        {{ item.price }}
                    </p>
                </div>
                <div class="cart-item-qty  cart-item-desc">
                    <p class="cart-item-qty-text cart-item-text">
                        Кількість
                    </p>
                    <p class="cart-item-qty-value cart-item-value">
                        {{ item.qty }}
                    </p>
                </div>
                <div class="cart-item-sum  cart-item-desc">
                    <p class="cart-item-sum-text cart-item-text">
                        Сума
                    </p>
                    <p class="cart-item-sum-value cart-item-value" ref="countSum">
                        {{ parseInt(item.qty * item.price) }}
                    </p>
                </div>
                <button @click="delFromCart(index); updateSum()" class="cart-delete">
                    <img src="@/assets/img/close.svg" alt="Close">
                </button>
            </li>
        </ul>
        <div class="cart-user">
            <p class="cart-user-sum" v-if="allCart != ''">
                Сума: {{ sumBuy }} грн
            </p>
            <router-link tag="button" to="/order" class="cart-btn to-order">
                Перейти до оформлення
            </router-link>
        </div>
        <p v-if="allCart == ''">
            Корзина порожня!
        </p>
    </div>
</div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    data(){
        return{
            sumBuy: 0
        }
    },
    computed: {
        allCart(){
            return this.$store.getters.allCart
        },
    },
    mounted() {
        this.$store.dispatch('setCart');
    },
    beforeUpdate() {
        if(this.$store.getters.allCart.length != 0){
            var sumValue = this.$refs.countSum;
            var endValue = 0;
            for (var i = 0; i < sumValue.length; i++) {
                endValue = parseInt(endValue) + parseInt(sumValue[i].outerText)
            }
            this.sumBuy = endValue
        }
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