import Vue from 'vue'
import Router from 'vue-router'
import tela_habilitacaoCasamentoNubentes from '../resources/js/assets/components/tela_habilitacaoCasamentoNubentes.vue'
import geracao_de_daje from '../resources/js/assets/components/geracao_de_daje.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/tela',
      component: tela_habilitacaoCasamentoNubentes,
    },
  ]
})
