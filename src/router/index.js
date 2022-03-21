// Default
import { createWebHistory, createRouter } from "vue-router";
//Pages
import Home from '@/pages/Home'
import Chemical from '@/pages/Chemical'
import Item from '@/pages/items/Item'
import Menu from '@/pages/chemical/Menu'
import Oil from '@/pages/Oil'
import Cart from '@/pages/Cart'
import Menu2 from '@/pages/oil/Menu'
import Delivery from '@/pages/Delivery'
const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/chemical",
      name: "Chemical",
      component: Chemical,
    },
    {
      path: "/items/:id",
      component: Item,
      meta: {
        reload: true,
      },
    },
    {
      path: "/chemical/:menuPos",
      component: Menu,
    },
    {
      path: "/oil",
      name: "Oil",
      component: Oil,
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart,
    },
    {
      path: "/oil/:menuPos",
      component: Menu2,
    },
    {
      path: "/delivery",
      name: "Delivery",
      component: Delivery,
    },
    
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  
});
export default router;