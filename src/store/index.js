import { createStore } from 'vuex'
import axios from 'axios'
var getStore = localStorage;
if (getStore.length == 0){
  getStore = [];
} else {
  getStore = JSON.parse(localStorage.cart);
}
const store = createStore({
  state: {
    listCart: getStore,
    menuList: [],
    topList: [],
  },
  getters: {
    allCart(state){
      return state.listCart;
    },
    menu(state){
      return state.menuList;
    },
    allTop(state){
      return state.topList;
    }
  },
  mutations: {
    updateCart(state, cartItems){
      state.listCart = cartItems
    },
    updateTop(state, topItems){
      state.topList = topItems
    },
    getCart(state, item){
      var answer = "no";
      if (state.listCart.length != 0){
          for (let i = 0; i <= state.listCart.length - 1; i++) {
              if(state.listCart[i].id == item.id){
                  state.listCart[i].qty = parseInt(state.listCart[i].qty) + 1;
                  item = state.listCart[i];
                  state.listCart.splice(i, 1);
                  state.listCart.push(item);
                  localStorage.setItem('cart', JSON.stringify(state.listCart));
                  i += 999;
                  answer = "yes";
              }
          }
          if (answer == "no"){
              state.listCart.push(item);
              localStorage.setItem('cart', JSON.stringify(state.listCart));
          }
      } else {
          state.listCart.push(item);
          localStorage.setItem('cart', JSON.stringify(state.listCart));
      }         
    },
    deleteFromCart(state, id){
      state.listCart.splice(id, 1);
      localStorage.setItem('cart', JSON.stringify(state.listCart));
    },
    updateMenu(state, menuItems){
      state.menuList = menuItems
    },
  },
  actions: {
    setCart(ctx){
      const cartItems = JSON.parse(localStorage.cart);
      ctx.commit('updateCart', cartItems);
    },
    setMenu({ commit }, name){
      axios.get('http://localhost/NewApi/items.php?menu=' + name)
      .then(response => {
        commit('updateMenu', response.data);
      })
    },
    setTop({ commit }){
      axios.get('http://localhost/NewApi/items.php?pop=yes')
      .then(response => {
        commit('updateTop', response.data);
      })
    }
  }
});

export default store;