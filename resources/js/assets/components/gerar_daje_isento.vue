<template>
  <div>
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>chevron_right</v-icon>
      </template>
    </v-breadcrumbs>

    <v-card>
      <v-div class="text-xs-center pt-3">
        <v-card-text class="px-0">
          <span class="titulo">Gerar DAJE Isento</span>
        </v-card-text>
      </v-div>

      <v-layout row pt-5>
        <v-flex xs12 sm12>
          <template>
            <v-form>
              <v-container pl-5 pr-5>
                <v-layout row pt-3>
                  <v-flex xs5>
                    <v-autocomplete
                      id="tipo_ato"
                      label="Tipo de Ato*"
                      box
                      :items="selects.tipo_ato"
                      item-value="value"
                      item-text="text"
                      v-model="gerar_daje_isento.tipo_ato"
                    ></v-autocomplete>
                  </v-flex>
                  <v-flex xs5>
                    <v-text-field
                      id="contribuinte"
                      label="Contribuinte*"
                      box
                      v-model="gerar_daje_isento.comtribuinte"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs3>
                    <v-text-field
                      id="cpf"
                      label="CPF*"
                      box
                      mask="###.###.###-##"
                      v-model="gerar_daje_isento.cpf"
                      hint="Apenas Números"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout pl-5 pr-5 pt3>
                    <v-divider></v-divider>
                </v-layout>

                <v-layout row justify-center>
                    <v-div class="text-xs-center pt-3">
                        <v-card-text class="px-0">
                        <span class="subtitulo">ENDEREÇO</span>
                        </v-card-text>
                    </v-div>
                </v-layout>
                
                <v-layout row pt-3>
                  <v-flex xs2>
                    <v-autocomplete
                      id="uf"
                      label="UF"
                      box
                      :items="selects.uf"
                      item-value="value"
                      item-text="text"
                      v-model="gerar_daje_isento.endereco.uf"
                    ></v-autocomplete>
                  </v-flex>
                  <v-flex xs4>
                      <v-autocomplete
                        id="cidade"
                        label="Cidade*"
                        box
                        :items="selects.cidade"
                        item-value="value"
                        item-text="text"
                        v-model="gerar_daje_isento.endereco.cidade"
                      ></v-autocomplete>
                  </v-flex>
                  <v-flex xs3>
                      <v-text-field
                        id="local"
                        label="Local*"
                        box
                        v-model="gerar_daje_isento.endereco.local"
                      ></v-text-field>
                  </v-flex>
                  <v-flex xs2>
                      <v-text-field
                        id="numero"
                        label="Nº*"
                        box
                        v-model="gerar_daje_isento.endereco.numero"
                      ></v-text-field>
                  </v-flex>
                  <v-flex xs3>
                      <v-text-field
                        id="complemento"
                        label="Complemento"
                        box
                        v-model="gerar_daje_isento.endereco.complemento"
                      ></v-text-field>
                  </v-flex>
                  <v-flex xs3>
                      <v-text-field
                        id="bairro"
                        label="Bairro*"
                        box
                        v-model="gerar_daje_isento.endereco.bairro"
                      ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row pt-3>
                    <v-flex xs4> 
                        <v-autocomplete
                            id="motivo_isencao"
                            label="Motivo da Isenção*"
                            box
                            :items="selects.motivo_isencao"
                            item-value="value"
                            item-text="text"
                            v-model="gerar_daje_isento.motivo_isencao"
                        ></v-autocomplete>
                    </v-flex>
                </v-layout>
                <v-layout row pt-3>
                    <v-flex xs12>
                        <v-textarea
                            id="observacao"
                            label="Observação*"
                            box
                            v-model="gerar_daje_isento.observacao"
                        ></v-textarea>
                    </v-flex>
                </v-layout>
                <v-layout row justify-center class="buttons">
                    <v-btn color="#32C458" large dark @click="gerar_daje" >GERAR DAJE</v-btn>
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
      selects: {
        tipo_ato: ["99988 - Primeiro Registro Nascimento"],
        uf: ["BA", "RJ", "SP"],
        motivo_isencao: ["Assistência Judiciária"],
        cidade: ["Bom Jesus dos Navegantes"]
      },

       items: [
        {
          text: "Certidões",
          disabled: true,
          href: "certidoes"
        },
        {
          text: "Casamento",
          disabled: false,
          href: "/casamento"
        },
        {
          text: "Habilitação de Casamento",
          disabled: false,
          href: "/casamento/habilitacao_de_casamento"
        },
      ],

      gerar_daje_isento: {
        tipo_ato: null,
        contribuinte: null,
        cpf: null,
        motivo_da_isencao: null,
        observacao: null,
        endereco: {
          uf: null,
          cidade: null,
          local: null,
          numero: null,
          complemento: null,
          bairro1: null
        }
      }
    };
  },

    methods:{
        gerar_daje(){
            alert('Gerando Daje de Isenção...')
        }
    }

};
</script>

<style scoped>
.titulo {
  font-size: 25px !important;
}
.subtitulo{
  font-size: 16px !important;
}
</style>