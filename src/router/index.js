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
import Order from '@/pages/Order'
import NotFound from '@/pages/NotFound'
// CMS
import Access from '@/cms/Access'
import AddItem from '@/cms/AddItem'
import ItemChange from '@/cms/ItemChange'
const routes = [
    
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/chemical",
      name: "Chemical",
      component: Chemical
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
      name: "chemical"
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
      name: "oil"
    },
    {
      path: "/delivery",
      name: "Delivery",
      component: Delivery,
    },
    {
      path: "/order",
      name: "Order",
      component: Order,
    },
    // CMS
    {
      path: "/cms/access",
      name: "Access",
      component: Access,
    },
    {
      path: "/cms/additem",
      name: "AddItem",
      component: AddItem,
    },
    {
      path: "/cms/:id",
      name: "ItemChange",
      component: ItemChange,
    },
    { 
      path: "/404",
      name: "NotFound",
      component: NotFound,
    },
    {
      path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
      redirect: '/404',
    },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    window.scrollTo(0,0);
  }
});
export default router;