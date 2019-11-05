import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue'
import tela_casamento_testemunhas_nubentes from '../resources/js/assets/components/tela_casamento_testemunhas_nubentes.vue'
import 'vuetify/dist/vuetify.min.css'
import geracao_de_daje from '../resources/js/assets/components/geracao_de_daje.vue'
import migracao from '../resources/js/assets/components/migracao.vue'
import consulta_registro_casamento from '../resources/js/assets/components/consulta_registro_casamento.vue'
import consultar_daje_habilitacao from '../resources/js/assets/components/consultar_daje_habilitacao.vue'
import consulta_registro_atos from '../resources/js/assets/components/livro_E/consulta_registro_atos'
import registro_opcao_nacionalidade from '../resources/js/assets/components/livro_E/registro_opcao_nacionalidade.vue'
import registro_traslado_nascimento from '../resources/js/assets/components/livro_E/registro_traslado_nascimento.vue'
import cancelar_selo from '../resources/js/assets/components/daje/cancelar_selo.vue'
import desassociar_daje from '../resources/js/assets/components/daje/desassociar_daje.vue'
import desassociar from '../resources/js/assets/components/daje/desassociar.vue'
import desbloquear_daje from '../resources/js/assets/components/daje/desbloquear_daje.vue'
import registro_contrato_distrato_uniao_estavel from '../resources/js/assets/components/livro_E/registro_contrato_distrato_uniao_estavel.vue'
import registro_sentenca_interdicao from '../resources/js/assets/components/livro_E/registro_sentenca_interdicao.vue'
import registro_traslado_obito from '../resources/js/assets/components/livro_E/registro_traslado_obito.vue'
import registro_traslado_casamento from '../resources/js/assets/components/livro_E/registro_traslado_casamento.vue'
import registro_nascimento_estrangeiro from '../resources/js/assets/components/livro_E/registro_nascimento_estrangeiro.vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify, {
  iconfont: 'md , fa '
})

Vue.config.productionTip = false

new Vue({
  //render: a => a (tela_casamento_testemunhas_nubentes),
  //render: b => b (geracao_de_daje),
  //render: c => c (migracao),
  //render: d => d (gerar_daje_isento)
  //render: e => e (consulta_registro_casamento)
  //render: f => f (consultar_daje_habilitacao)
  //render : g => g (consulta_registro_atos)
  //render : h => h (registro_opcao_nacionalidade)
  //render : h => h (registro_traslado_nascimento)
  //render : i => i (cancelar_selo)
  //render : j => j (desassociar)
  //render : l => l (desassociar_daje)
  //render : m => m (desbloquear_daje)
  //render : n => n (registro_contrato_distrato_uniao_estavel)
  //render : o => o (registro_sentenca_interdicao)
  //render : p => p (registro_traslado_obito)
  //render : q => q (registro_traslado_casamento)
  render : r => r (registro_nascimento_estrangeiro)
}).$mount('#app')
