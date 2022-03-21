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
              <img src="@/assets/img/cart.svg" alt="cart" class="cart-icon" @click="showCart = !showCart">
              <span class="cart-count" v-if="this.allCartCount.length > 0">
                {{ this.allCartCount.length }}
              </span>
              <div class="mini-cart" v-if="showCart">
                <cart/>
                <router-link tag="button" to="/cart" class="to-cart" @click="showCart = false; this.activeMenu = ''">
                  Open to Cart
                </router-link>
              </div>
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
  
  <footer></footer>
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
          {title: 'Главная', url: '/', name: "Home",},
          {title: 'Бытовая химия', url: '/chemical', name: "chemical",},
          {title: 'Автомобильные присадки', url: '/oil', name: "oil",},
          {title: 'Доставка и оплата', url: '/delivery', name: "delivery"}
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
