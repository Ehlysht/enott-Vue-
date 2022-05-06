<template>
  <div class="container">
      <div class="order">
        <h2 class="order-title title">
            Адрес доставки
        </h2>
        <form ref="form" class="order-form">
            <label for="lastname" class="order-text">
                Ім'я
            </label>
            <input type="text" name="lastname" class="order-input" v-model="this.lastname" required>
            <label for="firstname" class="order-text">
                Прізвище
            </label>
            <input type="text" name="firstname" class="order-input" v-model="this.firstname" required>
            <label for="delAdress" class="order-text">
                Номер відділення Нової пошти або Адреса доставки
            </label>
            <input type="text" name="delAdress" class="order-input" v-model="this.delAdress" required>
            <label for="city" class="order-text">
                Місто
            </label>
            <input type="text" name="city" class="order-input" v-model="this.city" required>
            <label for="tel" class="order-text">
                Номер телефону
            </label>
            <input type="tel:" name="tel" class="order-input" v-model="this.tel" required>
            <label for="option1" class="order-radio">
                <input type="radio" name="option" value="Накладений платіж" class="order-radio-input" v-model="this.choiseOption" required>
                <img src="@/assets/img/option1.png" alt="option1" class="order-radio-img order-radio-img-top">
                <p class="order-radio-text">
                    Накладений платіж
                </p>
            </label>
            <label for="option2" class="order-radio">
                <input type="radio" name="option" value="Відправити на карту на карту" class="order-radio-input" v-model="this.choiseOption" required>
                <img src="@/assets/img/option2.png" alt="option2" class="order-radio-img">
                <p class="order-radio-text">
                    Відправити на карту на карту
                </p>
            </label>
            <div class="order-buttons">
                <router-link tag="button" to="/cart" class="cart-btn order-buttons-back">
                    Назад
                </router-link>
                <button @click.prevent="sendEmail" class="cart-btn order-buttons-submit">
                    Оформити замовлення
                </button>
            </div>
        </form>
            <!-- <tr><th style="border: 1px solid #000;">Назва товару</th><th style="border: 1px solid #000;">Ціна за 1шт.</th><th style="border: 1px solid #000;">Кількість</th></tr>
            <tr v-for="(goods, index) in allCart" :key='index'>
                <td style="border: 1px solid #000;padding: 10px;">
                    {{ goods.name }}
                </td>
                <td style="border: 1px solid #000;padding: 10px;">
                    {{ goods.price }}
                </td>
                <td style="border: 1px solid #000;padding: 10px;">
                    {{ goods.qty }}
                </td>
            </tr> -->
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapMutations } from 'vuex';
export default {
    data(){
        return{
            lastname: '',
            firstname: '',
            delAdress: '',
            city: '',
            tel: '',
            choiseOption: ''
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
    methods:{
        sendEmail(){
            var listItems = ''
            for (let i = 0; i <= this.$store.getters.allCart.length - 1; i++) {

                listItems = listItems + '<tr><td style="border: 1px solid rgb(0,0,0);padding: 10px;">' + this.$store.getters.allCart[i].name + '</td><td style="border: 1px solid rgb(0,0,0);padding: 10px;">' + this.$store.getters.allCart[i].price + '</td><td style="border: 1px solid rgb(0,0,0);padding: 10px;">' + this.$store.getters.allCart[i].qty + '</td></tr>';
            }
            var Sendaddress = '<p>Номер відділення Нової пошти або Адреса доставки: <strong>' + this.delAdress + '</strong></p>';
            var city = '<p>Місто: <strong>' + this.city + '</strong></p>';
            var tel = '<p>Номер телефону: <strong>' + this.tel + '</strong></p>';
            var choiseOption = '<p>Вид відправки: <strong>' + this.choiseOption + '</strong></p>';
            var items = '<p>Замовлені товари:</p><tr><th style="border: 1px solid rgb(0,0,0);">Назва товару</th><th style="border: 1px solid rgb(0,0,0);">Ціна за 1шт.</th><th style="border: 1px solid rgb(0,0,0);">Кількість</th></tr>' + listItems;
            var body = Sendaddress + city + tel + choiseOption + items;
            body = body.replaceAll('#', '');
            axios.post('http://localhost:3500/products/mailSender?fName=' + this.firstname + '&lName=' + this.lastname + '&body=' + body)
            
        },
    }
}
</script>

<style>

</style>