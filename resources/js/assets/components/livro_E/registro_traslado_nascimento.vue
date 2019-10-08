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
          <span class="titulo">Registro de Translado de Nascimento</span>
        </v-card-text>
      </div>

      <v-layout row pt-3>
        <v-flex xs12 sm12>
          <template>
            <v-form ref="form" v-model="selects.valid" lazy-validation>
              <v-container pl-5 pr-5>
                <v-tabs v-model="variaveis.active" color="white" slider-color="#2934FF">
                  <v-tab>NASCIMENTO</v-tab>
                  <v-tab>CERTIDÃO ORIGINAL</v-tab>
                  <v-tab>FILIAÇÃO</v-tab>
                  <v-tab>TRADUÇÃO</v-tab>
                  <v-tab>AVERBAÇÕES</v-tab>
                  <v-tab>OBSERVAÇÕES</v-tab>
                  <v-tab>IMPRIMIR</v-tab>

                  <!--TELA NASCIMENTO-->

                  <v-tab-item>
                    <div v-for="(nascimento, i) in registro.nascimento" :key="i">
                      <v-layout row pt-3>
                        <v-flex xs4>
                          <v-text-field
                            id="nome"
                            label="Nome*"
                            :rules="verificacao"
                            box
                            v-model="nascimento.nome"
                            append-icon="search"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2 class="px-3">
                          <v-autocomplete
                            id="sexo"
                            label="Sexo*"
                            :rules="verificacao"
                            box
                            :items="selects.sexo"
                            item-value="value"
                            item-text="text"
                            v-model="nascimento.sexo"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs2>
                          <v-text-field
                            id="nascimento"
                            label="Nascimento"
                            box
                            v-model="nascimento.nascimento"
                            prepend-inner-icon="event"
                            mask="##/##/####"
                            hint="Apenas Números"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2 class="px-3">
                          <v-text-field
                            id="hora"
                            label="Hora"
                            box
                            prepend-inner-icon="fas fa-clock"
                            mask="##:##"
                            hint="Apenas Números"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2>
                          <v-autocomplete
                            id="gemeo"
                            label="Gêmeo"
                            box
                            :items="selects.gemeo"
                            item-value="value"
                            item-text="text"
                            v-model="nascimento.gemeo"
                          ></v-autocomplete>
                        </v-flex>
                      </v-layout>
                      <v-layout row pl-5 pr-5 pt-3>
                        <v-divider></v-divider>
                      </v-layout>
                      <div class="text-xs-center pt-3">
                        <v-card-text class="px-0">
                          <span class="subtitulo">NATURALIDADE</span>
                        </v-card-text>
                      </div>
                      <v-layout row pt-3>
                        <v-flex xs3>
                          <v-autocomplete
                            id="pais_mascimento"
                            label="Pais de Nascimento"
                            box
                            :items="selects.pais_nascimento"
                            item-value="value"
                            item-text="text"
                            v-model="nascimento.endereco.pais_nascimento"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3 class="px-3">
                          <v-autocomplete
                            id="estado_nascimento"
                            label="Estado de Nascimento"
                            box
                            :items="selects.estado_nascimento"
                            item-text="text"
                            item-value="value"
                            v-model="nascimento.endereco.estado_nascimento"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3>
                          <v-autocomplete
                            id="cidade_nascimento"
                            label="Cidade de Nascimento"
                            box
                            :items="selects.cidade_nascimento"
                            item-value="value"
                            item-text="text"
                            v-model="nascimento.endereco.cidade_nascimento"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3 class="pl-3">
                          <v-text-field
                            id="local_nascimento"
                            label="Local de Nascimento"
                            box
                            v-model="nascimento.endereco.local_nascimento"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                    </div>
                  </v-tab-item>

                  <!--TELA CERTIDÃO ORIGINAL-->

                  <v-tab-item>
                    <div v-for="(certidao, i) in registro.certidao" :key="i">
                      <v-layout row pt-3>
                        <v-flex>
                          <v-textarea
                            id="certidao_original"
                            label="Certidão Original"
                            box
                            height="300px"
                            v-model=" certidao.certidao_original"
                          ></v-textarea>
                        </v-flex>
                      </v-layout>
                    </div>
                  </v-tab-item>

                  <!--TELA FILIAÇÃO-->

                  <v-tab-item>
                    <div v-for="(filiacao, i) in registro.filiacao.pai" :key="i">
                      <v-layout>
                        <v-breadcrumbs>
                          <span class="titulos">1ª PARTE FILIAÇÃO</span>
                          <v-icon color="#2934FF">chevron_right</v-icon>
                        </v-breadcrumbs>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs4>
                          <v-text-field
                            id="nome_pai"
                            label="Nome do Pai"
                            box
                            append-icon="search"
                            v-model="filiacao.nome_pai"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2 class="pl-3">
                          <v-autocomplete
                            id="profissao_pai"
                            label="Profissao*"
                            box
                            :items="selects.profissao"
                            item-value="value"
                            item-text="text"
                            v-model="filiacao.proficao"
                            :rules="verificacao"
                          ></v-autocomplete>
                        </v-flex>
                      </v-layout>
                      <v-layout pl-5 pr-5 row pt-3>
                        <v-divider></v-divider>
                      </v-layout>
                      <div class="text-xs-center px-3">
                        <v-card-text class="px-0">
                          <span>NATURALIDADE</span>
                        </v-card-text>
                      </div>
                      <v-layout row pt-3>
                        <v-flex xs3>
                          <v-autocomplete
                            id="pais_nascimento_pai"
                            label="Pais de Nascimento"
                            box
                            v-model="filiacao.pais_nascimento"
                            :items="selects.pais_nascimento"
                            item-value="value"
                            item-text="text"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3 class="px-3">
                          <v-autocomplete
                            id="estado_nascimento_pai"
                            label="Estado de Nascimento"
                            box
                            :items="selects.estado_nascimento"
                            item-value="value"
                            item-text="text"
                            v-model="filiacao.estado_nascimento"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3>
                          <v-autocomplete
                            id="cidade_nascimento"
                            label="Cidade do Nascimento"
                            box
                            :items="selects.cidade_nascimento"
                            item-value="value"
                            item-text="text"
                            v-model="filiacao.cidade_nascimento"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3 class="pl-3">
                          <v-text-field
                            id="local_nascimento_pai"
                            label="Local de Nascimento"
                            box
                            v-model="filiacao.local_nascimento"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout row pl-5 pr-5 pt-3>
                        <v-divider></v-divider>
                      </v-layout>
                      <div class="text-xs-center pt-3">
                        <v-card-text class="px-0">
                          <span>PROGÊNIE</span>
                        </v-card-text>
                      </div>
                      <v-layout row pt-3>
                        <v-flex xs5>
                          <v-text-field
                            id="nome_avô_pai"
                            label="Nome do Avô"
                            box
                            v-model="filiacao.nome_avô"
                            append-icon="search"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs5 class="pl-3">
                          <v-text-field
                            id="nome_avó_pai"
                            label="Nome da Avó"
                            box
                            v-model="filiacao.nome_avó"
                            append-icon="search"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                    </div>
                    <div v-for="(filiacao, i) in registro.filiacao.mae" :key="i">
                      <v-layout>
                        <v-breadcrumbs>
                          <span class="titulos">2ª PARTE FILIAÇÃO</span>
                          <v-icon color="#2934FF">chevron_right</v-icon>
                        </v-breadcrumbs>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs4>
                          <v-text-field
                            id="nome_mae"
                            label="Nome da Mãe"
                            box
                            v-model="filiacao.nome_mae"
                            append-icon="search"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2 class="pl-3">
                          <v-autocomplete
                            id="profissao_mae"
                            label="Profissão*"
                            box
                            :rules="verificacao"
                            v-model="filiacao.proficao"
                            :items="selects.profissao"
                            item-value="value"
                            item-text="text"
                          ></v-autocomplete>
                        </v-flex>
                      </v-layout>
                      <v-layout pl-5 pr-5 pt-3>
                        <v-divider></v-divider>
                      </v-layout>
                      <div class="text-xs-center pt-3">
                        <v-card-text class="px-0">
                          <span>NATURALIDADE</span>
                        </v-card-text>
                      </div>
                      <v-layout row pt-3>
                        <v-flex xs3>
                          <v-autocomplete
                            id="pais_nacimento_mae"
                            label="País de Nascimento"
                            box
                            :items="selects.pais_nascimento"
                            item-value="value"
                            item-text="text"
                            v-model="filiacao.pais_nascimento"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3 class="px-3">
                          <v-autocomplete
                            id="estado_nascimento_mae"
                            label="Estado de Nascimento"
                            box
                            :items="selects.estado_nascimento"
                            item-value="value"
                            item-text="text"
                            v-model="filiacao.estado_nascimento"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3>
                          <v-autocomplete
                            id="cidade_nascimento_mae"
                            label="Cidade do Nascimento"
                            box
                            :items="selects.cidade_nascimento"
                            item-value="value"
                            item-text="text"
                            v-model="filiacao.cidade_nascimento"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3 class="pl-3">
                          <v-text-field
                            id="local_nascimento_mae"
                            label="Local de Nascimento"
                            box
                            v-model="filiacao.local_nascimento"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout pl-5 pr-5 pt-3>
                        <v-divider></v-divider>
                      </v-layout>
                      <div class="text-xs-center pt-3">
                        <v-card-text class="px-0">
                          <span>PROGÊNIE</span>
                        </v-card-text>
                      </div>
                      <v-layout row pt-3>
                        <v-flex xs5>
                          <v-text-field
                            id="nome_avô_mae"
                            label="Nome do Avô"
                            box
                            append-icon="search"
                            v-model="filiacao.nome_avô"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs5 class="pl-3">
                          <v-text-field
                            id="nome_avó_mae"
                            label="Nome da Avó"
                            box
                            append-icon="search"
                            v-model="filiacao.nome_avó"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                    </div>
                  </v-tab-item>

                  <!--TELA TRADUÇÃO-->

                  <v-tab-item>
                    <div v-for="(traducao, i) in registro.traducao" :key="i">
                      <v-layout>
                        <v-checkbox
                          id="certidao_original_traduzida"
                          label="Certidão Original Traduzida"
                          value="Certidão Original Traduzida"
                          color="blue"
                          v-model="traducao.certidao_original_traduzida"
                        ></v-checkbox>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs3>
                          <v-text-field
                            id="idioma_original"
                            label="Idioma Original"
                            box
                            v-model="traducao.idioma_original"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs4 class="px-3">
                          <v-text-field
                            id="nome_tradutor"
                            label="Nomde do Tradutor"
                            box
                            v-model="traducao.nome_tradutor"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3>
                          <v-text-field
                            id="tradutor_publico"
                            label="Tradutor Publico Em"
                            box
                            v-model="traducao.tradutor_publico"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3 class="pl-3">
                          <v-text-field
                            id="data_traducao"
                            label="Data Tradução"
                            box
                            prepend-inner-icon="event"
                            hint="Apenas Números"
                            mask="##/##/####"
                            v-model="traducao.data_traducao"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout pl-5 pr-5 pt-3>
                        <v-divider></v-divider>
                      </v-layout>
                      <div class="text-xs-center pt-3">
                        <v-card-text class="px-0">
                          <span>REGISTRO NO RTD</span>
                        </v-card-text>
                      </div>
                      <v-layout row pt-3>
                        <v-flex xs2>
                          <v-text-field
                            id="data"
                            label="Data"
                            box
                            hint="Apenas Números"
                            mask="##/##/####"
                            v-model="traducao.data"
                            prepend-inner-icon="event"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3 class="px-3">
                          <v-text-field
                            id="serventia"
                            label="Serventia"
                            box
                            v-model="traducao.serventia"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2>
                          <v-text-field
                            id="livro"
                            label="Livro"
                            box
                            v-model="traducao.livro"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2 class="px-3">
                          <v-text-field
                            id="numero_livro"
                            label="N° Livro"
                            box
                            v-model="traducao.numero_livro"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2>
                          <v-text-field
                            id="folha"
                            label="Folha"
                            box
                            v-model="traducao.folha"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                    </div>
                  </v-tab-item>

                  <!--TELA AVERBAÇÕES-->

                  <v-tab-item>
                    <div v-for="(averbacoes, i) in registro.averbacoes" :key="i">
                      <v-layout row pt-3>
                        <v-flex>
                          <v-textarea
                            id="texto_averbacoes"
                            label="Texto de Averbações"
                            box
                            v-model="averbacoes.texto_averbacoes"
                          ></v-textarea>
                        </v-flex>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex>
                          <v-textarea
                            id="historico_averbacoes"
                            label="Histórico de Averbações"
                            box
                            v-model="averbacoes.historico_averbacoes"
                          ></v-textarea>
                        </v-flex>
                      </v-layout>
                    </div>
                  </v-tab-item>

                  <!--TELA OBSERVAÇÕES-->

                  <v-tab-item>
                    <div v-for="(observacoes, i) in registro.observacoes" :key="i">
                      <v-layout>
                        <v-flex>
                          <v-textarea
                            id="texto_observacoes"
                            label="Texto das Observações"
                            box
                            v-model="observacoes.texto_observacoes"
                          ></v-textarea>
                        </v-flex>
                      </v-layout>
                    </div>
                  </v-tab-item>

                  <!--TELA IMPRIMIR-->

                  <v-tab-item>
                    <div v-for="(imprimir, i) in registro.imprimir" :key="i">
                      <v-layout>
                        <v-flex xs3>
                          <v-autocomplete
                            id="assinante"
                            label="Assinante"
                            box
                            v-model="imprimir.assinante"
                            :items="selects.assinante"
                            item-value="value"
                            item-text="text"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs4 class="pl-3">
                          <v-autocomplete
                            id="cidade"
                            label="Cidade"
                            box
                            v-model="imprimir.cidade"
                            :items="selects.cidade"
                            item-value="value"
                            item-text="text"
                          ></v-autocomplete>
                        </v-flex>
                      </v-layout>
                    </div>
                  </v-tab-item>
                </v-tabs>

                <v-layout justify-center pt-3 class="buttons">
                  <div v-if="variaveis.active < 6">
                    <v-btn @click="next" color="#2439FF" dark>PRÓXIMO PASSO</v-btn>
                  </div>
                  <div v-if="variaveis.active == 6">
                    <v-btn @click="imprimir" color="#2439FF" dark> <v-icon class="pr-2">print</v-icon> IMPRESSÕES</v-btn>
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
        valid: false
      },

      items:[
        {
          text: "Livros",
          disabled: true,
          href:"/livros"
        },
        {
          text: "Livros E",
          disabled: false,
          href:"livros/livros_e"
        }
      ],

      selects: {
        sexo: ["Masculino", "Feminino"],
        gemeo: ["Sim", "Não"],
        pais_nascimento: ["Brasil", "AngolA"],
        estado_nascimento: ["Bahia", "Belas"],
        cidade_nascimento: ["Feira de Santana", "Luanda"],
        profissao: ["Arquiteto"],
        assinante: ["Daniel Sampaio"]
      },

      verificacao: [verificar => !!verificar || "Campo Obrigatório"],

      registro: {
        nascimento: [
          {
            nome: null,
            sexo: null,
            nascimento: null,
            hora: null,
            gemeo: null,
            endereco: {
              pais_nascimento: null,
              estado_nascimento: null,
              cidade_nascimento: null,
              local_nascimento: null
            }
          }
        ],

        certidao: [
          {
            certidao_original: null
          }
        ],

        filiacao: {
          pai: [
            {
              nome_pai: null,
              profissao: null,
              nome_avô: null,
              nome_avó: null,
              endereco: {
                pais_nascimento: null,
                estado_nascimento: null,
                cidade_nascimento: null,
                local_nascimento: null
              }
            }
          ],

          mae: [
            {
              nome_mae: null,
              profissao: null,
              nome_avô: null,
              nome_avó: null,
              endereco: {
                pais_nascimento: null,
                estado_nascimento: null,
                cidade_nascimento: null,
                local_nascimento: null
              }
            }
          ],
        },

        traducao:[
          {
            certidao_original_traduzida: null,
            idioma_origonal: null,
            nome_tradutor: null,
            tradutor_publico: null,
            data_traducao: null,
            data: null,
            serventia: null,
            livro: null,
            numero_livro: null,
            folha: null
          }
        ],

        averbacoes:[
          {
            texto_averbacoes: null,
            historio_averbacoes: null,
          }
        ],

        observacoes:[
          {
            texto_observacoes: null,
          }
        ],

        imprimir:[
          {
            assinante: null,
            cidade: null,
          }
        ],
      }
    };
  },

  methods: {
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