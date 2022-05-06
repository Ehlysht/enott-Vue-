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
                    <p class="cart-item-sum-value cart-item-value">
                        {{ parseInt(item.qty * item.price) }}
                    </p>
                </div>
                <button @click="delFromCart(index)" class="cart-delete">
                    <img src="@/assets/img/close.svg" alt="Close">
                </button>
            </li>
        </ul>
        <div class="cart-user">
            <p class="cart-user-sum" v-if="allCart != ''">
                Сума: {{ sumBuy }} грн
            </p>
            <router-link v-if="allCart != ''" tag="button" to="/order" class="cart-btn to-order">
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
    computed: {
        allCart(){
            return this.$store.getters.allCart
        },
        sumBuy(){
            if(this.$store.getters.allCart.length != 0){
                var cartArray = this.$store.getters.allCart;
                var endValue = 0;
                for (var i = 0; i < cartArray.length; i++) {
                    endValue = parseInt(endValue) + parseInt(cartArray[i].price * cartArray[i].qty)
                }
                return endValue
            }
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