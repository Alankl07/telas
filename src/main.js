import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue'
import tela_habilitacaoCasamentoNubentesSubmetida from '../resources/js/assets/components/tela_habilitacaoCasamentoNubentesSubmetida.vue'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'

Vue.use(Vuetify, {
  iconfont: 'md , fa '
})

Vue.config.productionTip = false

new Vue({
  render:a => a (tela_habilitacaoCasamentoNubentesSubmetida),
}).$mount('#app')
