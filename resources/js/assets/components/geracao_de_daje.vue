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
          <span class="titulo" >Solicitação de Casamento</span>
        </v-card-text>
      </div>

      <div class="text-xs-center pt-3">
        <v-card-text class="px-0">
          <span class="subtitulos"> Protocolo: {{registro.protocolo}}</span>
        </v-card-text>
      </div>

      <v-layout row>
        <v-flex xs12 sm12>
          <template>
            <v-form>
              <v-container pl-5 pr-5>
                <v-layout row pt-3>
                  <v-breadcrumbs :items="items">
                    <span class="titulos">1ª Nubente</span><v-icon color="#2934FF">chevron_right</v-icon>
                  </v-breadcrumbs>
                </v-layout>
                <v-layout row pt-3>
                  <v-flex>
                    <v-radio-group>
                      <v-radio
                      id="statusPagamento"
                      label="Pagador"
                      color="blue"
                      v-model="nubente_1.status_pagamento"
                    ></v-radio>
                    </v-radio-group>
                  </v-flex>
                </v-layout>
                <v-layout row pt-3>
                  <v-flex xs4>
                    <v-text-field
                      id="nome"
                      label="Nome"
                      box
                      v-model="nubente_1.nome"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs2>
                    <v-text-field
                      id="rg"
                      label="RG"
                      v-model="nubente_1.rg"
                      mask="########-##"
                      box
                      hint="Apenas Números"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs3>
                    <v-text-field
                      id="cpf"
                      label="CPF"
                      v-model="nubente_1.cpf"
                      mask="###-###-###-##"
                      box
                      hint="Apenas Números"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout pl-5 pr-5 >
                    <v-divider></v-divider>
                </v-layout>
                <div class="text-xs-center">
                  <v-card-text clas="pt-0">
                    <span class="subtitulos">ENDEREÇO</span>
                  </v-card-text>
                </div>
                <v-layout>
                  <v-flex xs3>
                    <v-text-field
                      id="cep"
                      label="CEP"
                      mask="#####-###"
                      v-model="nubente_1.cep"
                      box
                      hint="Apenas Números"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs2>
                    <v-autocomplete
                      id="uf"
                      label="UF"
                      box
                      v-model="nubente_1.uf"
                      :items="selects.selectsUF"
                      item-text="text"
                      item-value="value"
                    ></v-autocomplete>
                  </v-flex>
                  <v-flex xs5>
                    <v-text-field
                      id="cidade"
                      label="Cidade"
                      v-model="nubente_1.cidade"
                      box
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs5>
                    <v-text-field
                      id="lagradouro"
                      label="Local"
                      box
                      v-model="nubente_1.lagradouro"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs2>
                    <v-text-field
                      id="numero"
                      label="Número"
                      v-model="nubente_1.numero"
                      box
                      mask="#########"
                      hint="Apenas Números"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs3>
                    <v-text-field
                      id="complemento"
                      label="Complemento"
                      v-model="nubente_1.complemento"
                      box
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout pl-5 pr-5 >
                    <v-divider color="black"></v-divider>
                </v-layout>
                <v-layout row pt-3>
                  <v-breadcrumbs :items="items">
                    <span class="titulos">2ª Nubente</span><v-icon color="#2934FF">chevron_right</v-icon>
                  </v-breadcrumbs>
                </v-layout>
                <v-layout row pt-3>
                  <v-radio-group>
                    <v-radio
                      id="status_pagamento"
                      color="blue"
                      v-model="nubente_2.status_pagamento"
                      label="Pagador"
                    ></v-radio>
                  </v-radio-group>
                </v-layout>
                <v-layout row pt-3>
                  <v-flex xs4>
                    <v-text-field
                      id="nome"
                      label="Nome"
                      v-model="nubente_2.nome"
                      box
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs3>
                    <v-text-field
                      id="rg"
                      label="RG"
                      v-model="nubente_2.rg"
                      box
                      mask="########-##"
                      hint="Apenas Números"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs3>
                    <v-text-field
                      id="cpf"
                      label="CPF"
                      v-model="nubente_2.cpf"
                      box
                      hint="Apenas Números"
                      mask="###.###.###-##"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout pr-5 pl-5>
                  <v-divider></v-divider>
                </v-layout>
                <div class="text-xs-center">
                  <v-card-text clas="pt-0">
                    <span class="subtitulos">ENDEREÇO</span>
                  </v-card-text>
                </div>
                <v-layout row pt-3>
                  <v-flex xs3>
                    <v-checkbox
                      id="endereco_anterior"
                      label="Endereço Anterior"
                      color="blue"
                      v-model="variaveis.endereco_anterior"
                    ></v-checkbox>
                  </v-flex>
                </v-layout>

                <div v-if="variaveis.endereco_anterior == false">
                  <v-layout row pt-3>
                    <v-flex xs3>
                      <v-text-field
                        id="cep"
                        label="CEP"
                        v-model="nubente_2.cep"
                        box
                        hint="Apenas Números"
                        mask="#####-###"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs2 class="px-3">
                      <v-autocomplete
                        id="uf"
                        label="UF"
                        box
                        v-model="nubente_2.uf"
                        :items="selects.selectsUF"
                        item-value="value"
                        item-text="text"
                      ></v-autocomplete>
                    </v-flex>
                    <v-flex xs5>
                      <v-text-field
                        id="cidade"
                        label="cidade"
                        box
                        v-model="nubente_2.cidade"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs5 class="px-3">
                      <v-text-field
                        id="lagradouro"
                        label="Lagradouro"
                        v-model="nubente_2.lagradouro"
                        box
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs2>
                      <v-text-field
                        id="numero"
                        label="Número"
                        box
                        v-model="nubente_2.numero"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs3 class="pl-3">
                      <v-text-field
                        id="complemento"
                        label="Complemento"
                        box
                        v-model="nubente_2.complemento"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </div>
                <div v-if="variaveis.endereco_anterior">
                  <v-layout row pt-3>
                    <v-flex xs3>
                      <v-text-field
                        id="cep"
                        label="CEP"
                        v-model="nubente_1.cep"
                        box
                        hint="Apenas Números"
                        mask="#####-###"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs2 class="px-3">
                      <v-autocomplete
                        id="uf"
                        label="UF"
                        box
                        v-model="nubente_1.uf"
                        :items="selects.selectsUF"
                        item-value="value"
                        item-text="text"
                      ></v-autocomplete>
                    </v-flex>
                    <v-flex xs5>
                      <v-text-field
                        id="cidade"
                        label="cidade"
                        box
                        v-model="nubente_1.cidade"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs5 class="px-3">
                      <v-text-field
                        id="lagradouro"
                        label="Lagradouro"
                        v-model="nubente_1.lagradouro"
                        box
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs2>
                      <v-text-field
                        id="numero"
                        label="Número"
                        box
                        v-model="nubente_1.numero"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs3 class="pl-3">
                      <v-text-field
                        id="complemento"
                        label="Complemento"
                        box
                        v-model="nubente_1.complemento"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </div>
                <v-layout pl-5 pr-5>
                  <v-divider color="black"></v-divider>
                </v-layout>
                <v-layout row pt-3>
                  <v-flex xs3>
                    <v-text-field
                      id="numero_edital"
                      v-model="numero_edital"
                      box
                      label="N° do Edital"
                      hint="Apenas Números"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row justify-center class="buttons">
                      <v-btn @click="imprimir" dark color="#2934FF" ><v-icon class="px-2">print</v-icon> IMPRIMIR BOLETOS</v-btn>
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

      variaveis:{
        endereco_anterior: false
      },

      selects:{
        selectsUF:[
            'BA',
            "SP",
            "RJ"
        ],
      },

      registro: {
        protocolo: "0000 000 000000",
        numero_do_edital: null
      },

      items: [
        {
          text: "Certidões",
          disabled: false,
          href: "certidoes"
        },
        {
          text: "Casamento",
          dosabled: true,
          href: "casamento"
        },
        {
          text: "Solicitação de Casamento",
          disabled: false,
          href: "solicitacao_casamento"
        }
      ],

      //Nubentes

      nubente_1:{
        status_pagamento: false,
        nome: null,
        rg: null,
        cpf: null,
        endereco:{
          cep: null,
          uf: null,
          cidade: null,
          lagradouro: null,
          numero: null,
          complemento: null,
        }
      },

      nubente_2:{
        status_pagamento: false,
        nome: null,
        rg: null,
        cpf: null,
        endereco:{
          cep: null,
          uf: null,
          cidade: null,
          lagradouro: null,
          numero: null,
          complemento: null,
        }
      }
    };
  },

  methods: {
    imprimir(){
      alert('Imprimindo...')
    }
  }
};
</script>

<style>
  .titulos {
    font-size: 14pt;
    color: #2934ff;
  }

  .titulo{
    font-size: 16pt;
    font-weight: bold;
  }

  .subtitulos{
    font-size: 12pt;
    font-weight: bold;
  }
</style>