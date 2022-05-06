<template>
<div>
  <header>
    <div class="navbar">
      <div class="container">
        <div class="navbar-content">
          <div class="navbar-top">
            <div class="logo">
              <a href="/" class="logo-link">
                <img src="@/assets/img/logo.png" alt="CleanHome" class="logo-img">
              </a>
            </div>
            <div class="navbar-backcall">
              <div class="backcall" @click="showForm = !showForm">
                <img src="@/assets/img/phone.svg" alt="phone" class="backcall-icon">
                <button class="backcall-btn">
                  095-451-94-82
                  <span class="backcall-btn-text">
                    Зворотний дзвінок
                  </span>
                </button>
              </div>
              <form class="navbar-backcall-form" v-show="showForm">
                <button class="backcall-form-cancel">
                  <img src="@/assets/img/close.svg" alt="Close" class="backcall-form-close" @click.prevent="showForm = false">
                </button>
                <p class="backcall-form-text">
                  Графік роботи:
                </p>
                <p class="backcall-form-text">
                  08:00-21:00
                </p>
                <p class="backcall-form-question">
                  Вам передзвонити?
                </p>
                <input type="phone" v-maska="'+380 (##) ##-##-###'" class="backcall-form-input" v-model="phoneNumber" required />
                <button class="backcall-form-btn btn" @click="sendCallBack">
                  Передзвонити мені
                </button>
              </form>
            </div>
            <div class="navbar-cart">
              <router-link tag="button" to="/cart" class="to-cart" this.activeMenu = ''>
                <span class="cart-count" v-if="this.allCartCount.length > 0">
                  {{ sumBuy }} Грн.
                </span>
                <img src="@/assets/img/cart.svg" alt="cart" class="cart-icon" @click="showCart = !showCart">
              </router-link>
            </div>
          </div>
          <ul class="navbar-list">
            <li class="navbar-item" v-for="link in links" :key="link.title">
              <router-link
               class="navbar-link"
               :title="link.title"
               :to="link.url"
               :class="{ activePage: this.activeMenu == link.name, currentRouteName }"
               >
               {{ link.title }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <div class="content">
      <router-view>
        
      </router-view>
  </div>
  
  <footer class="footer">
    <div class="container">
      <ul class="footer-menu">
        <p class="footer-menu-title footer-title">
          Каталог товарів
        </p>
        <li class="footer-menu-item" v-for="link in links" :key="link.title">
          <router-link 
            class="footer-menu-link"
            :title="link.title"
            :to="link.url">
            {{ link.title }}
          </router-link>
        </li>
      </ul>
      <div class="footer-info">
        <p class="footer-info-title footer-title">
          Каталог товарів
        </p>
        <p class="footer-info-text">
          Телефон
          <a href="tel:0954519482" class="footer-info-link">
            095 451 9482
          </a>
        </p>
        <p class="footer-info-text">
          Пн-Пт: 9.00 - 19.00
        </p>
        <p class="footer-info-text">
          Сб: 10.00 - 17.00
        </p>
      </div>
      <div class="footer-logo">
        <img src="@/assets/img/logo.png" alt="" class="footer-logo-img">
      </div>
      <div class="footer-goods">
        <img src="@/assets/img/footer-logo1.png" alt="" class="footer-goods-img">
        <img src="@/assets/img/footer-logo2.png" alt="" class="footer-goods-img">
      </div>
    </div>
  </footer>
</div>
</template>

<script>
import cart from '@/components/Cart';
import axios from 'axios';
import { mapMutations } from 'vuex';
import { maska } from 'maska'
  export default {
    directives: { maska },
    components: {
      cart
    },
    data(){
      return{
        isActive: true,
        showCart: false,
        showForm: false,
        activeMenu: '',
        phoneNumber: '+380',
        links: [
          {title: 'Головна', url: '/', name: "Home",},
          {title: 'Побутова хімія', url: '/chemical', name: "chemical",},
          {title: 'Автомобільні присадки', url: '/oil', name: "oil",},
          {title: 'Доставка і оплата', url: '/delivery', name: "delivery"}
        ]
      }
    },
    computed: {
        allCartCount(){
            return this.$store.getters.allCart
        },
        currentRouteName() {
          this.activeMenu = this.$route.name;
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
    methods:{
      sendCallBack(){
        var body = "<p>Привіт</p><br><p>Користувач просить перезвонити на номер телефону: <strong style='color: green;'>" + this.phoneNumber + "</strong></p>";
        axios.post('http://localhost:3500/products/callback?tel=' + body)
      }
    }
  }
</script>

<style>
    
</style>
