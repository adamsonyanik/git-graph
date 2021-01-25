import Vue from 'vue'
import VueRouter from 'vue-router'
import Repository from "@/views/Repository";
import Home from "@/views/Home";

Vue.use(VueRouter)

const routes = [
  {
    path: '/:owner/:repository',
    name: 'Repository',
    component: Repository
  },{
    path: '/',
    name: 'Home',
    component: Home,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
