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
              <img src="@/assets/img/phone.svg" alt="phone" class="backcall-icon">
              <button class="backcall">
                095-451-94-82
                <span class="backcall-text">
                  Обратный звонок
                </span>
              </button>
            </div>
            <div class="navbar-cart">
              <router-link tag="button" to="/cart" class="to-cart" this.activeMenu = ''>
                <img src="@/assets/img/cart.svg" alt="cart" class="cart-icon" @click="showCart = !showCart">
              </router-link>
              <span class="cart-count" v-if="this.allCartCount.length > 0">
                {{ this.allCartCount.length }}
              </span>
            </div>
          </div>
          <ul class="navbar-list">
            <li class="navbar-item" v-for="link in links" :key="link.title">
              <router-link
               class="navbar-link"
               :title="link.title"
               :to="link.url"
               :class="{ activePage: this.activeMenu == link.name }"
               @click="changeMenuName(link.name)">
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
import cart from '@/components/Cart'
  export default {
    components: {
      cart
    },
    data(){
      return{
        isActive: true,
        showCart: false,
        links: [
          {title: 'Головна', url: '/', name: "Home",},
          {title: 'Побутова хімія', url: '/chemical', name: "chemical",},
          {title: 'Автомобільні присадки', url: '/oil', name: "oil",},
          {title: 'Доставка і оплата', url: '/delivery', name: "delivery"}
        ],
        activeMenu: this.$route.name
      }
    },
    computed: {
        allCartCount(){
            return this.$store.getters.allCart
        }        
    },
    mounted(){
      this.activeMenu = this.$route.name;
      this.$store.dispatch('setCart');
    },
    methods: {  
      changeMenuName(page){
        this.activeMenu = page;
      }
    },
  }
</script>

<style>
    
</style>
