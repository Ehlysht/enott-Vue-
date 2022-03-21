<template>
    <div>
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
                                <span class="qty-minus qty-change">
                                    -
                                </span>
                                <input type="number" class="qty-value" value="1">
                                <span class="qty-plus qty-change">
                                    +
                                </span>
                            </div>
                        </div>
                        <button class="item-btn btn" @click.prevent="addCart(item)">
                            Купить
                        </button>
                    </div>
                    <div class="item-delivery">
                        <div class="delivery">
                            <i class="delivery-icon">
                                Icon
                            </i>
                            <p class="delivery-text">
                                Доставка: Нова Пошта, Деливери Получение: 1-3 дня
                            </p>
                        </div>
                        <div class="delivery">
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
                            >
                                {{ item.descr }}
                            </div>
                            <div 
                                class="info-text"
                                v-if="descr == 'structure'"
                            >
                                {{ item.structure }}
                            </div>
                            <div 
                                class="info-text"
                                v-if="descr == 'used'"
                            >
                                {{ item.used }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="top">
            <top-items/>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import TopItems from '@/pages/Top-Items.vue'
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
        this.axios.get('http://localhost/NewApi/items.php?id=' + this.id)
        .then(response => {
            this.items = response.data;
        })
    },
    methods: {
        sortList(){
            this.axios.get('http://localhost/NewApi/items.php?id=' + this.id)
            .then((response) => {
                this.items = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
        },
        ... mapMutations(['getCart']),
        addCart(item){
            this.getCart(item);
        }
    }
}
</script>

<style>

</style>