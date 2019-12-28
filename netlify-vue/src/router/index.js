import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import Prints from "../views/Prints.vue";
import Clients from "../views/Clients.vue";
import Accounts from "../views/Accounts.vue";
Vue.use(VueRouter);

/*const routes = [
  
];*/

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
    {
      path: "/prints",
      name: "prints",
      component: Prints
    },
    {
      path: "/clients",
      name: "clients",
      component: Clients
    },
    {
      path: "/accounts",
      name: "accounts",
      component: Accounts
    }
  ]
});

export default router;
