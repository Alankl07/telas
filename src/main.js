import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue'
import tela_casamento_testemunhas_nubentes from '../resources/js/assets/components/tela_casamento_testemunhas_nubentes.vue'
import 'vuetify/dist/vuetify.min.css'
import geracao_de_daje from '../resources/js/assets/components/geracao_de_daje.vue'
import migracao from '../resources/js/assets/components/migracao.vue'
import consulta_registro_casamento from '../resources/js/assets/components/consulta_registro_casamento.vue'
import consultar_daje_habilitacao from '../resources/js/assets/components/consultar_daje_habilitacao.vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify, {
  iconfont: 'md , fa '
})

Vue.config.productionTip = false

new Vue({
  //render:a => a (tela_casamento_testemunhas_nubentes),
  //render:b => b (geracao_de_daje),
  //render:c => c (migracao),
  //render:d => d (gerar_daje_isento)
  render:e => e (consulta_registro_casamento)
  //render: f => f (consultar_daje_habilitacao)
}).$mount('#app')
