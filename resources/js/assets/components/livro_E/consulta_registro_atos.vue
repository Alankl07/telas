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
          <span class="titulo">Consulta de Registro de Atos</span>
        </v-card-text>
      </div>

      <v-layout row>
        <v-flex xs12 sm12>
          <template>
            <v-form ref="form" v-model="variaveis.valid" lazy-validation >
              <v-container pl-5 pr-5>
                <v-layout row pt-3>
                  <v-flex xs5>
                    <v-select
                      id="ato"
                      label="Ato*"
                      box
                      v-model="consulta.ato"
                      :rules="verificacao"
                      :items="selects.ato"
                      item-value="value"
                      ttem-text="text"
                    ></v-select>
                  </v-flex>
                  <v-flex xs5>
                      <v-autocomplete
                        id="cartorio"
                        label="Cartório*"
                        box
                        :rules="verificacao"
                        v-model="consulta.cartorio"
                        :items="selects.cartorio"
                        item-value="value"
                        item-text="text"
                      ></v-autocomplete>
                  </v-flex>
                  <v-flex xs2>
                      <v-text-field
                        id="termo"
                        label="Termo"
                        box
                        v-model="consulta.termo"
                      ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row pt-3>
                    <v-flex xs3>
                        <v-text-field
                            id="inicio_termo"
                            label="Inicio do Termo"
                            prepend-inner-icon="event"
                            box
                            mask="##/##/####"
                            hint="Apenas Números"
                            v-model="consulta.inicio_termo"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs3>
                        <v-text-field
                            id="final_termo"
                            label="Final do Termo"
                            prepend-inner-icon="event"
                            box
                            mask="##/##/####"
                            hint="Apenas Números"
                            v-model="consulta.final_termo"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs 6>
                        <v-text-field
                            id="autor"
                            label="Autor"
                            box
                            v-model="consulta.autor"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs3>
                        <v-text-field
                            id="nascimento"
                            label="Nascimento"
                            prepend-inner-icon="event"
                            box
                            mask="##/##/####"
                            hint="Apenas Números"
                            v-model="consulta.nascimento"
                        ></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout row pt-3>
                    <v-flex xs5>
                        <v-text-field
                            id="pai"
                            label="Pai"
                            box
                            v-model="consulta.pai"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs5>
                        <v-text-field
                            id="mae"
                            label="Mãe"
                            box
                            v-model="consulta.mae"
                        ></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout row pt-3>
                    <v-flex xs>
                        <v-btn @click="novoLivro" color="#2934FF" dark>NOVO LIVRO</v-btn>
                    </v-flex>
                    <v-flex class="text-xs-right">
                        <v-btn @click="novoCadastro" color="#2934FF" flat>+ NOVO CADASTRO</v-btn>
                    </v-flex>
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
        valid: false
      },

      verificacao:[
        verificar => !!verificar || 'Campo Obrigatório'
      ],

      consulta: {
        ato: null,
        cartorio: null,
        termo: null,
        inicio_termo: null,
        final_termo: null,
        autor: null,
        nascimento: null,
        pai: null,
        mae: null
      },

      selects: {
        ato: ["Opção de Nascimento"],
        cartorio: ["134 Cartório de RCPN de Senhor do Bonfim"]
      }
    };
  },

  methods:{
    novoLivro(){
      
    },

    novoCadastro(){

    }
  }

};
</script>