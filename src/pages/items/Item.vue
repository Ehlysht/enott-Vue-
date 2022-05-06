<template>
<div class="wrapper-content">
    <div class="container">
        <div class="menu">
            <div
                class="item"
                v-for="item in items" :key="item.id"
                >
                <img
                    :src="require('@/assets/img/' + item.link)" 
                    :alt="item.name" 
                    class="item-img"
                >
                <div class="item-descriptions">
                    <h2 class="item-title">
                        {{ item.name }}
                    </h2>
                    <p class="item-id">
                        код: {{ item.id }}
                    </p>
                    <div class="item-buy">
                        <p class="item-price">
                            {{ item.price }}
                            <span class="item-currency">
                                грн.
                            </span>
                        </p>
                        <div class="item-qty">
                            <p class="qty-text">
                                Количество
                            </p>
                            <div class="qty-inputs">
                                <span class="qty-minus qty-change" @click="removeValue(item)">
                                    -
                                </span>
                                <input type="number" class="qty-value" min="1" oninput="this.value = this.value <= 0 || this.value == '' ? 1 : this.value" v-model="item.qty">
                                <span class="qty-plus qty-change" @click="addValue(item)">
                                    +
                                </span>
                            </div>
                        </div>
                        <button class="item-btn btn" @click.prevent="addCart(item)">
                            Купить
                        </button>
                    </div>
                    <div class="item-delivery">
                        <div class="deliverys">
                            <i class="delivery-icon">
                                Icon
                            </i>
                            <p class="delivery-text">
                                Доставка: Нова Пошта, Деливери Получение: 1-3 дня
                            </p>
                        </div>
                        <div class="deliverys">
                            <i class="delivery-icon">
                                Icon
                            </i>
                            <p class="delivery-text">
                                Оплата: При получении или перевод на кридитную карту
                            </p>
                        </div>
                    </div>
                    <div class="item-info">
                        <ul class="info-list">
                            <li 
                                class="info-item"
                                @click="descr = 'descr'"
                                :class="{descrActive: this.descr === 'descr'}">
                                Описание
                            </li>
                            <li 
                                class="info-item"
                                @click="descr = 'structure'"
                                :class="{descrActive: this.descr === 'structure'}">
                                Состав
                            </li>
                            <li 
                                class="info-item"
                                @click="descr = 'used'"
                                :class="{descrActive: this.descr === 'used'}">
                                Как использовать
                            </li>
                        </ul>
                        <div class="info-texts">
                            <div 
                                class="info-text"
                                v-if="descr == 'descr'"
                                v-html="item.descr"
                            >
                            </div>
                            <div 
                                class="info-text"
                                v-if="descr == 'structure'"
                                v-html="item.structure"
                            >
                            </div>
                            <div 
                                class="info-text"
                                v-if="descr == 'used'"
                                v-html="item.used"
                            >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="item-top">
            <h3 class="item-top-title">
                Топ продажів
            </h3>
            <top-items/>
        </div>
    </div>
</div>
</template>

<script>
import { mapMutations } from 'vuex'
import TopItems from '@/components/Top-Items.vue'
export default {
    components:{
        TopItems
    },
    data() {
        return{
            id: this.$route.params['id'],
            items: [],
            descr: 'descr',
            cartList: []
        }
    },
    mounted(){
        this.axios.get('http://localhost:3500/products/item?id=' + this.id)
        .then(response => {
            this.items = response.data.values;
        })
    },
    methods: {
        sortList(){
            this.axios.get('http://localhost:3500/products/item?id=' + this.id)
            .then((response) => {
                this.items = response.data.values;
            })
            .catch((error) => {
                console.log(error);
            });
        },
        ... mapMutations(['getCart']),
        addCart(item){
            this.getCart(item);
        },
        addValue(item){
            item.qty = parseInt(item.qty) + 1;
        },
        removeValue(item){
            if(item.qty <= 1){
                item.qty = 1;
            }else{
               item.qty = parseInt(item.qty - 1);
            }
        }
    }
}
</script>

<style>

</style>