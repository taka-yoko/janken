import Vue from 'vue'
import VueRouter from 'vue-router'

import Game from './components/Game.vue'
import Score from './components/Score.vue'
import NotFound from './components/NotFound.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Game },
  { path: '/score', component: Score },
  { path: '*', component: NotFound }
];

const router = new VueRouter({
  routes,
  mode: 'hash'
});

export default router;
