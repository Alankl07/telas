import Vue from 'vue'
import Router from 'vue-router'
import tela_habilitacaoCasamentoNubentes from '../resources/js/assets/components/tela_habilitacaoCasamentoNubentes.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: tela_habilitacaoCasamentoNubentes,
    },
  ]
})
