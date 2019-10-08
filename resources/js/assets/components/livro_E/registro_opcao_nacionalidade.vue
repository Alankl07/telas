<template>
  <div>
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>chevron_right</v-icon>
      </template>
    </v-breadcrumbs>

    <v-card>
      <div class="text-xs-center pt-3">
        <v-card-text class="px-0">
          <span class="titulo">Registro de Opção de Nacionalidade</span>
        </v-card-text>
      </div>

      <v-layout row>
        <v-flex xs12 sm12>
          <template>
            <v-form ref="form" v-model="variaveis.valid" lazy-validation>
              <v-container pl-5 pr-5>
                <v-tabs v-model="variaveis.active" color="white" slider-color="#2934fF">
                  <v-tab>OPTANTE</v-tab>
                  <v-tab>SENTENÇA</v-tab>
                  <v-tab>AVERBAÇÕES</v-tab>
                  <v-tab>OBSERVAÇÕES</v-tab>
                  <v-tab>COMUNICAÇÃO</v-tab>
                  <v-tab>IMPRIMIR</v-tab>

                  <!--TELA OPTANTE-->

                  <v-tab-item>
                    <div v-for="(optante , i) in registro.optante " :key="i">
                      <v-layout row pt-3>
                        <v-flex xs4>
                          <v-text-field
                            id="nome"
                            label="Nome"
                            box
                            v-model="optante.nome"
                            append-icon="search"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3 class="px-3">
                          <v-autocomplete
                            id="sexo"
                            label="Sexo*"
                            :rules="verificacao"
                            box
                            :items="selects.sexo"
                            item-value="value"
                            item-text="text"
                            v-model="optante.sexo"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs4>
                          <v-text-field
                            id="doc_identificacao"
                            label="Doc. Identificação"
                            box
                            v-model="optante.doc_identificacao"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3 class="pl-3">
                          <v-autocomplete
                            id="profissao"
                            label="Profissão*"
                            :rules="verificacao"
                            :items="selects.profissao"
                            item-value="value"
                            item-text="text"
                            box
                            v-model="optante.profissao"
                          ></v-autocomplete>
                        </v-flex>
                      </v-layout>
                      <v-layout row pr-3>
                        <v-flex xs5>
                          <v-text-field id="pai" label="Pai" box v-model="optante.pai"></v-text-field>
                        </v-flex>
                        <v-flex xs5 class="pl-3">
                          <v-text-field id="mae" label="Mãe" box v-model="optante.mae"></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout row pl-5 pr-5>
                        <v-divider></v-divider>
                      </v-layout>
                      <div class="text-xs-center pt-3">
                        <v-card-text class="xs-0">
                          <span>NATURALIDADE</span>
                        </v-card-text>
                      </div>
                      <v-layout row pt-3>
                        <v-flex xs3>
                          <v-autocomplete
                            id="país"
                            label="País"
                            box
                            item-value="value"
                            item-text="text"
                            :items="selects.pais"
                            v-model="optante.endereco.pais"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3 class="px-3">
                          <v-autocomplete
                            id="estado"
                            label="Estado"
                            box
                            :items="selects.estado"
                            item-value="value"
                            item-text="text"
                            v-model="optante.endereco.estado"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3>
                          <v-autocomplete
                            id="cidade"
                            label="Cidade"
                            box
                            item-value="value"
                            item-text="text"
                            :items="selects.cidade"
                            v-model="optante.endereco.cidade"
                          ></v-autocomplete>
                        </v-flex>
                      </v-layout>
                      <v-layout pl-5 pr-5>
                        <v-divider></v-divider>
                      </v-layout>
                      <div class="text-xs-center pt-3">
                        <v-card-text class="px-0">
                          <span>RESIDÊNCIA</span>
                        </v-card-text>
                      </div>
                      <v-layout row pt-3>
                        <v-flex xs4>
                          <v-text-field
                            id="lagradouro"
                            label="Endereço"
                            box
                            v-model="optante.endereco.lagradouro"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2 class="px-3">
                          <v-text-field
                            id="numero"
                            label="Nº"
                            box
                            v-model="optante.endereco.numero"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3>
                          <v-text-field
                            id="complemento"
                            label="Complemento"
                            box
                            v-model="optante.endereco.complemento"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2 class="pl-3">
                          <v-text-field
                            id="cep"
                            label="CEP"
                            box
                            mask="#####-###"
                            v-model="optante.endereco.cep"
                            hint="Apenas Números"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                    </div>
                  </v-tab-item>

                  <!--TELA SENTENÇA-->

                  <v-tab-item>
                    <div v-for="(sentenca, i ) in registro.sentenca" :key="i">
                      <v-layout row pt-3>
                        <v-flex xs4>
                          <v-text-field
                            id="nome_promotor"
                            label="Nome do Promotor"
                            box
                            v-model="sentenca.nome_promotor"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3 class="px-3">
                          <v-text-field
                            id="data_sentenca"
                            label="Data da Senteça"
                            box
                            hint="Apenas Números"
                            mask="##/##/####"
                            prepend-inner-icon="event"
                            v-model="sentenca.data_sentenca"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3>
                          <v-text-field
                            id="data_transito_julgado"
                            label="Data Trânsito Julgado"
                            box
                            hint="Apenas Números"
                            mask="##/##/####"
                            prepend-inner-icon="event"
                            v-model="sentenca.data_transito_sentenca"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3 class="pl-3">
                          <v-text-field
                            id="data_mandato"
                            label="Data do Mandato"
                            box
                            hint="Apenas Números"
                            mask="##/##/####"
                            prepend-inner-icon="event"
                            v-model="sentenca.data_mandato"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs4>
                          <v-text-field id="comarca" label="Comarca" box v-model="sentenca.comarca"></v-text-field>
                        </v-flex>
                        <v-flex xs4 class="px-3">
                          <v-text-field
                            id="juiz_mandatario"
                            label="Juiz Mandatário"
                            box
                            v-model="sentenca.juiz_mandatario"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs4>
                          <v-text-field
                            id="juiz_sentenca"
                            label="Juiz da Sentença"
                            box
                            v-model="sentenca.juiz_sentenca"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs4>
                          <v-text-field id="autos" label="Autos" box v-model="sentenca.autos"></v-text-field>
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
                          <v-text-field 
                            id="termo"
                            label="Termo"
                            box
                            v-model="comunicacao.termo"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3>
                          <v-text-field 
                            id="livro"
                            label="Livro"
                            box
                            v-model="comunicacao.livro"
                          ></v-text-field>
                        </v-flex>
                        <v-felx xs2 class="px-3">
                          <v-text-field
                            id="folha"
                            label="Folha"
                            box
                            v-model="comunicacao.folha"
                          ></v-text-field>
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
                        <v-flex xs1  >
                          <v-autocomplete
                            id="uf"
                            label="UF"
                            box
                            v-model="comunicacao.uf"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3 class="pl-3">
                          <v-autocomplete
                            id="cidade"
                            label="Cidade"
                            box
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

                <v-layout justify-center pt-3 class="buttons">
                  <div v-if="variaveis.active < 5">
                    <v-btn @click="next"  dark color="#2934FF">PRÓSSIMO PASSO</v-btn>
                  </div>
                  <div v-if="variaveis.active == 5">
                    <v-btn @click="imprimir"  dark color="#2934FF"> <v-icon small class="px-1">print</v-icon> IMPRESSÕES</v-btn>
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
        valid: false,
        active: 0
      },

      verificacao:[
        campo => !!campo || 'Campo Obrigatório'
      ],

      selects: {
        sexo: ["Masculino", "Feminino"],
        profissao: ["Arquiteto"],
        estado_civil: ["Solteiro", "Casado"],
        pais: ["Angola", "Brasil"],
        estado: ["Belas", "Bahia"],
        cidade: ["Luanda", "Feira de Santana"]
      },

      registro: {
        optante: [
          {
            nome: null,
            sexo: null,
            doc_identificacao: null,
            profissao: null,
            pai: null,
            mae: null,
            estado_civil: null,
            nome_conjugue: null,
            endereco: {
              pais: null,
              estado: null,
              cidade: null,
              lagradouro: null,
              numero: null,
              complemento: null,
              cep: null
            }
          }
        ],

        sentenca: [
          {
            nome_promotor: null,
            data_sentenca: null,
            data_transito_julgado: null,
            data_mandato: null,
            comarca: null,
            juiz_mandatario: null,
            juiz_sentenca: null,
            autos: null
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

        imprimir:[
          {
            assinante: null,
            cidade: null,
          }
        ]
      },

      items: [
        {
          text: "Livros",
          disabled: false,
          href: "/livros"
        },
        {
          text: "Livro E",
          disabled: false,
          href: "/livros_e"
        }
      ]
    };
  },

  methods:{
    next() {
        const active = parseInt(this.variaveis.active);
        this.variaveis.active = 6 ? active + 1 : active;
    },

    imprimir(){
      if(this.$refs.form.validate()){
        alert('Redirecionando para tela de Impressão')
      }else{
        alert("Existem campos obrigatórios que precisam ser preenchidos")
        this.variaveis.active = 0 
      }
    }

  }
};
</script>