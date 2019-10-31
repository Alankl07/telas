<template>
  <div>
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>chevron_right</v-icon>
      </template>
    </v-breadcrumbs>

    <v-card>
      <div class="text-xs-center pt-3">
        <v-card-text>
          <span class="titulos">Registro de Contrato e de Distratos de União Estável</span>
        </v-card-text>
      </div>

      <v-layout row>
        <v-flex xs12 sm12>
          <template>
            <v-form ref="form">
              <v-container pl-5 pr-5>
                <v-tabs v-model="variaveis.active" color="white" slider-color="#2934FF">
                  <v-tab>DADOS DO CASAMENTO</v-tab>
                  <v-tab>CONVIVENTES</v-tab>
                  <v-tab>AVERBAÇÕES</v-tab>
                  <v-tab>OBSERVAÇÕES</v-tab>
                  <v-tab>COMUNICAÇÃO</v-tab>
                  <v-tab>IMPRIMIR</v-tab>

                  <!--TELA DADOS DO CASAMENTO-->

                  <v-tab-item>
                    <v-layout row pt-3>
                      <v-flex xs2>
                        <v-autocomplete
                          id="tipo"
                          label="Tipo*"
                          box
                          :items="selects.tipo"
                          item-value="value"
                          item-text="text"
                          :rules="verificacao"
                          v-model="registro.tipo"
                        ></v-autocomplete>
                      </v-flex>
                      <v-felx xs2 class="px-3">
                        <v-text-field
                          id="data"
                          label="Data*"
                          box
                          prepend-inner-icon="event"
                          hind="Apenas Números"
                          mask="##/##/####"
                          :rules="verificacao"
                          v-model="registro.data"
                        ></v-text-field>
                      </v-felx>
                      <v-flex xs3>
                        <v-autocomplete
                          id="regime_bens"
                          label="Regime de Bens*"
                          box
                          :items="selects.regime_bens"
                          item-value="value"
                          item-text="text"
                          :rules="verificacao"
                          v-model="registro.regime_bens"
                        ></v-autocomplete>
                      </v-flex>
                    </v-layout>
                    <v-layout row pt-3>
                      <v-flex xs6>
                        <v-text-field
                          id="tabeliao"
                          label="Tabelião"
                          box
                          v-model="registro.tabeliao"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs6 class="pl-3">
                        <v-text-field
                          id="tabelionato"
                          label="Tabelionato"
                          box
                          v-model="registro.tabelionato"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row pt-3>
                      <v-flex xs2>
                        <v-text-field id="livro" label="Livro" box v-model="registro.livro"></v-text-field>
                      </v-flex>
                      <v-flex xs2 class="px-3">
                        <v-text-field id="folha" label="Folha" box v-model="registro.folha"></v-text-field>
                      </v-flex>
                      <v-flex xs2>
                        <v-text-field id="termo" label="Termo" box v-model="registro.termo"></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-tab-item>

                  <!--TELA CONVIVENTE-->

                  <v-tab-item>
                    <div v-for="(convivente, i) in registro.convivente_1" :key="i">
                      <v-layout row pt-3>
                        <v-breadcrumbs :items="items">
                          <span class="titulos">1ª CONVIVENTE</span>
                          <v-icon color="#2934FF">chevron_right</v-icon>
                        </v-breadcrumbs>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs7>
                          <v-text-field
                            id="nome_1"
                            label="Nome*"
                            append-icon="search"
                            box
                            :rules="verificacao"
                            v-model="convivente.nome"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2 class="px-3">
                          <v-autocomplete
                            id="profissao_1"
                            label="Profissão*"
                            box
                            :rules="verificacao"
                            :items="selects.profissao"
                            item-value="value"
                            item-text="text"
                            v-model="convivente.profissao"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs2>
                          <v-text-field
                            id="nascimento_1"
                            label="Nascimento"
                            box
                            hint="Apenas Números"
                            mask="##/##/####"
                            prepend-inner-icon="event"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout pl-5 pr-5>
                        <v-divider></v-divider>
                      </v-layout>
                      <div class="text-xs-center px-3">
                        <v-card-text class="px-0">
                          <span>FILIAÇÃO</span>
                        </v-card-text>
                      </div>
                      <v-layout row pt-3>
                        <v-flex xs5>
                          <v-text-field
                            id="nome_pai_1"
                            label="Nome do Pai"
                            box
                            v-model="convivente.nome_pai"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs5 class="pl-3">
                          <v-text-field
                            id="nome_mae_1"
                            label="Nome da Mãe"
                            box
                            v-model="convivente.nome_mae"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout pl-5 pr-5>
                        <v-divider></v-divider>
                      </v-layout>
                      <div class="text-xs-center px-3">
                        <v-card-text class="px-0">
                          <span>NATURALIDADE</span>
                        </v-card-text>
                      </div>
                      <v-layout row pt-3>
                        <v-flex xs2>
                          <v-autocomplete
                            id="país_nascimento_1"
                            label="País de Nascimento"
                            box
                            :items="selects.país"
                            item-text="text"
                            item-value="value"
                            v-model="convivente.endereco.país_nascimento"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs2 class="px-3">
                          <v-autocomplete
                            id="estado_nascimento_1"
                            label="Estado de Nascimento"
                            box
                            :items="selects.estado"
                            item-value="value"
                            item-text="text"
                            v-model="convivente.endereco.estado"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs2>
                          <v-autocomplete
                            id="cidade_nascimento_1"
                            label="Cidade do Nascimento"
                            box
                            :items="selects.cidade"
                            item-value="value"
                            item-text="text"
                            v-model="convivente.endereco.cidade"
                          ></v-autocomplete>
                        </v-flex>
                      </v-layout>
                      <v-layout pl-5 pr-5>
                        <v-divider></v-divider>
                      </v-layout>
                      <div class="text-xs-center px-3">
                        <v-card-text class="px-0">
                          <span>RESIDÊNCIA</span>
                        </v-card-text>
                      </div>
                      <v-layout row pt-3>
                        <v-flex xs4>
                          <v-text-field
                            id="endereco_1"
                            label="Endereço"
                            box
                            v-model="convivente.endereco.lagradouro"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs1 class="px-3">
                          <v-text-field
                            id="numero_1"
                            label="Nº"
                            box
                            v-model="convivente.endereco.numero"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2>
                          <v-text-field
                            id="complemento_1"
                            label="Complemento"
                            box
                            v-model="convivente.endereco.complemento"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2 class="px-3">
                          <v-text-field
                            id="bairro_1"
                            label="Bairro"
                            box
                            v-model="convivente.endereco.bairro"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2>
                          <v-text-field
                            id="cep_1"
                            label="CEP"
                            box
                            v-model="convivente.endereco.cep"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                    </div>
                    <div v-for="(convivente, i) in registro.convivente_2" :key="i">
                      <v-layout row pt-3>
                        <v-breadcrumbs :items="items">
                          <span class="titulos">2ª CONVIVENTE</span>
                          <v-icon color="#2934FF">chevron_right</v-icon>
                        </v-breadcrumbs>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs7>
                          <v-text-field
                            id="nome_2"
                            label="Nome*"
                            append-icon="search"
                            box
                            :rules="verificacao"
                            v-model="convivente.nome"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2 class="px-3">
                          <v-autocomplete
                            id="profissao_2"
                            label="Profissão*"
                            box
                            :rules="verificacao"
                            :items="selects.profissao"
                            item-value="value"
                            item-text="text"
                            v-model="convivente.profissao"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs2>
                          <v-text-field
                            id="nascimento_2"
                            label="Nascimento"
                            box
                            hint="Apenas Números"
                            mask="##/##/####"
                            prepend-inner-icon="event"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout pl-5 pr-5>
                        <v-divider></v-divider>
                      </v-layout>
                      <div class="text-xs-center px-3">
                        <v-card-text class="px-0">
                          <span>FILIAÇÃO</span>
                        </v-card-text>
                      </div>
                      <v-layout row pt-3>
                        <v-flex xs5>
                          <v-text-field
                            id="nome_pai_2"
                            label="Nome do Pai"
                            box
                            v-model="convivente.nome_pai"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs5 class="pl-3">
                          <v-text-field
                            id="nome_mae_2"
                            label="Nome da Mãe"
                            box
                            v-model="convivente.nome_mae"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout pl-5 pr-5>
                        <v-divider></v-divider>
                      </v-layout>
                      <div class="text-xs-center px-3">
                        <v-card-text class="px-0">
                          <span>NATURALIDADE</span>
                        </v-card-text>
                      </div>
                      <v-layout row pt-3>
                        <v-flex xs2>
                          <v-autocomplete
                            id="país_nascimento_2"
                            label="País de Nascimento"
                            box
                            :items="selects.país"
                            item-text="text"
                            item-value="value"
                            v-model="convivente.endereco.país_nascimento"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs2 class="px-3">
                          <v-autocomplete
                            id="estado_nascimento_2"
                            label="Estado de Nascimento"
                            box
                            :items="selects.estado"
                            item-value="value"
                            item-text="text"
                            v-model="convivente.endereco.estado"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs2>
                          <v-autocomplete
                            id="cidade_nascimento_2"
                            label="Cidade do Nascimento"
                            box
                            :items="selects.cidade"
                            item-value="value"
                            item-text="text"
                            v-model="convivente.endereco.cidade"
                          ></v-autocomplete>
                        </v-flex>
                      </v-layout>
                      <v-layout pl-5 pr-5>
                        <v-divider></v-divider>
                      </v-layout>
                      <div class="text-xs-center px-3">
                        <v-card-text class="px-0">
                          <span>RESIDÊNCIA</span>
                        </v-card-text>
                      </div>
                      <v-layout row pt-3>
                        <v-flex xs4>
                          <v-text-field
                            id="endereco_2"
                            label="Endereço"
                            box
                            v-model="convivente.endereco.lagradouro"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs1 class="px-3">
                          <v-text-field
                            id="numero"
                            label="Nº"
                            box
                            v-model="convivente.endereco.numero"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2>
                          <v-text-field
                            id="complemento_2"
                            label="Complemento"
                            box
                            v-model="convivente.endereco.complemento"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2 class="px-3">
                          <v-text-field
                            id="bairro_2"
                            label="Bairro"
                            box
                            v-model="convivente.endereco.bairro"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2>
                          <v-text-field
                            id="cep_2"
                            label="CEP"
                            box
                            v-model="convivente.endereco.cep"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                    </div>
                  </v-tab-item>

                  <!--TELA AVERBAÇÕES-->

                  <v-tab-item>
                    <div v-for="(averbacoes, i) in registro.averbacoes" :key="i">
                      <v-layout row pt-3>
                        <v-flex xs6>
                          <v-textarea
                            id="texto_averbacao"
                            label="Texto de Averbação"
                            box
                            v-model="averbacoes.texto_averbacao"
                          ></v-textarea>
                        </v-flex>
                        <v-flex xs6 class="pl-3">
                          <v-textarea
                            id="historioco_averbacoes"
                            label="Histório de Averbações"
                            box
                            v-model="averbacoes.historico_averbacoes"
                          ></v-textarea>
                        </v-flex>
                      </v-layout>
                    </div>
                  </v-tab-item>

                  <!--TELA OBSERVAÇÕES-->

                  <v-tab-item>
                    <v-layouy row pt-3>
                      <v-flex xs12>
                        <v-textarea
                          id="observacoes"
                          label="Observações"
                          box
                          v-model="registro.observacoes"
                        ></v-textarea>
                      </v-flex>
                    </v-layouy>
                  </v-tab-item>

                  <!--TELA COMUNICAÇÃO-->

                  <v-tab-item>
                    <div v-for="(comunicacao, i ) in registro.comunicacao" :key="i">
                      <v-layout row pt-3>
                        <v-flex xs4>
                          <v-autocomplete
                            id="documento_anterior"
                            label="Documento Anterior"
                            box
                            v-model="comunicacao.documento_anterior"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3 class="px-3">
                          <v-text-field id="termo" label="Termo" box v-model="comunicacao.termo"></v-text-field>
                        </v-flex>
                        <v-flex xs3>
                          <v-text-field id="livro" label="Livro" box v-model="comunicacao.livro"></v-text-field>
                        </v-flex>
                        <v-felx xs2 class="px-3">
                          <v-text-field id="folha" label="Folha" box v-model="comunicacao.folha"></v-text-field>
                        </v-felx>
                        <v-flex xs5>
                          <v-text-field
                            id="comarca"
                            label="Comarca"
                            box
                            v-model="comunicacao.comarca"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout row pt-2>
                        <v-flex xs1>
                          <v-autocomplete
                            id="uf"
                            label="UF"
                            box
                            :items="selects.uf"
                            item-value="value"
                            item-text="text"
                            v-model="comunicacao.uf"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3 class="pl-3">
                          <v-autocomplete
                            id="cidade"
                            label="Cidade"
                            box
                            :items="selects.cidade"
                            item-value="value"
                            item-text="text"
                            v-model="comunicacao.cidade"
                          ></v-autocomplete>
                        </v-flex>
                      </v-layout>
                    </div>
                  </v-tab-item>

                  <!--TELA IMPRIMIR-->

                  <v-tab-item>
                    <div v-for="(imprimir, i ) in registro.imprimir" :key="i">
                      <v-layout row pt-3>
                        <v-flex xs2>
                          <v-autocomplete
                            id="assinante"
                            label="Assinante"
                            box
                            :items="registro.nome"
                            item-value="value"
                            item-text="text"
                            v-model="imprimir.assinante"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3 class="pl-3">
                          <v-autocomplete
                            id="cidade"
                            label="Cidade"
                            box
                            :items="selects.cidade"
                            item-value="value"
                            item-text="text"
                            v-model="imprimir.cidade"
                          ></v-autocomplete>
                        </v-flex>
                      </v-layout>
                    </div>
                  </v-tab-item>
                </v-tabs>
                <v-layout justify-center class="buttons">
                  <div v-if="variaveis.active < 5">
                    <v-btn @click="next" color="#2934FF" dark>PRÓSSIMO PASSO</v-btn>
                  </div>
                  <div v-if="variaveis.active == 5">
                    <v-btn @click="imprimir" dark color="#2934FF" :loading="variaveis.loading">
                      <v-icon small class="px-1">print</v-icon>IMPRESSÕES
                    </v-btn>
                  </div>
                </v-layout>
              </v-container>
            </v-form>
          </template>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>


<script>
export default {
  data() {
    return {
      variaveis: {
        active: 0,
        loading: false
      },

      selects: {
        tipo: ["Contrato"],
        regime_bens: [
          "Aquestos",
          "Comunhão Parcial de Bens",
          "Comunhão Total/Universal de Bens",
          "Não Especificado",
          "Separação Total"
        ],
        profissao: ["Arquiteto"],
        país: ["Brasil", "Angola"],
        estado: ["Belas", "Bahia"],
        cidade: ["Feira de Santana", "Luanda"],
        uf: ["BA"]
      },

      verificacao: [verificar => !!verificar || "Campo Obrigatório"],

      registro: {
        dados_casamento: [
          {
            tipo: null,
            data: null,
            regime_bens: null,
            tebeliao: null,
            tabelionato: null,
            livro: null,
            folha: null,
            termo: null
          }
        ],

        convivente_1: [
          {
            nome: null,
            profissao: null,
            nascimento: null,
            nome_pai: null,
            nome_mae: null,
            endereco: {
              país_nascimento: null,
              estado: null,
              cidade: null,
              lagradouro: null,
              numero: null,
              complemento: null,
              bairro: null,
              cep: null
            }
          }
        ],

        convivente_2: [
          {
            nome: null,
            profissao: null,
            nascimento: null,
            nome_pai: null,
            nome_mae: null,
            endereco: {
              país_nascimento: null,
              estado: null,
              cidade: null,
              lagradouro: null,
              numero: null,
              complemento: null,
              bairro: null,
              cep: null
            }
          }
        ],

        averbacoes: [
          {
            texto_averbacao: null,
            historico_averbacoes: null
          }
        ],

        observações: null,

        comunicacao: [
          {
            documento_anterior: null,
            termo: null,
            livro: null,
            folha: null,
            comarca: null,
            uf: null,
            cidade: null
          }
        ],

        imprimir: [
          {
            assinante: null,
            cidade: null
          }
        ]
      }
    };
  },

  methods: {
    next() {
      const active = parseInt(this.variaveis.active);
      this.variaveis.active = 5 ? active + 1 : active;
    },

    imprimir() {
      let self = this;
      if (this.$refs.form.validate()) {
        alert("imprimindo...");
        this.variaveis.loading = true;
        this.$http
        .post("servicos/tj/registro/....", this.registro)
        .then(function(value) {
          console.log(value);
          if (value.data.erro) {
            self.variaveis.loading = false;
          } else {
            alert("Sucesso");
            self.variaveis.loading = false;
          }
        })
        .catch(function(erro) {
          alert(erro);
          self.variaveis.loading = false;
        });
      }else{
        alert("Campo Obrigatório em Branco")
      }
    },
  }
};
</script>



