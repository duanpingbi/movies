import Vue from 'vue'
import Router from 'vue-router'
import moveRooter from './movie';
import mineRooter from './mine';
import cinemaRooter from './cinema';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    moveRooter,
    mineRooter,
    cinemaRooter,
    {
      path:'/*',
      redirect:'/movie'
    }
  ]
})
