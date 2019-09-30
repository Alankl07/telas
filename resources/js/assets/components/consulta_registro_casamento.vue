<template>
  <div>
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>chevron-right</v-icon>
      </template>
    </v-breadcrumbs>

    <v-card>
      <div class="text-xs-center pt-3">
        <v-card-text class="px-0">
          <span class="titulo">Consulta de Registro de Casamento</span>
        </v-card-text>
      </div>

      <v-layout row>
        <v-flex xs12 sm12>
          <template>
            <v-form>
              <v-container pl-5 pr-5>
                <v-layout row pt-3>
                  <v-flex xs2>
                    <v-text-field id="termo" label="Termo" box></v-text-field>
                  </v-flex>
                  <v-flex xs3>
                    <v-text-field
                      id="data_edital"
                      label="Data do Edital"
                      mask="##/##/####"
                      hint="Apenas Números"
                      box
                      prepend-inner-icon="event"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs3>
                    <v-text-field
                      id="data_registro"
                      label="Data do Registro"
                      box
                      mask="##/##/####"
                      hint="Apenas Números"
                      prepend-inner-icon="event"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs3>
                    <v-text-field
                      id="data_habilitacao"
                      label="Data da Habilitação"
                      box
                      mask="##/##/####"
                      hint="Apenas Números"
                      prepend-inner-icon="event"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs3>
                    <v-text-field
                      id="data_celebracao"
                      label="Data da Celebração"
                      box
                      mask="##/##/####"
                      hint="Apenas Números"
                      prepend-inner-icon="event"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row pt-3>
                  <v-flex xs5>
                    <v-text-field id="conjuge" label="Cônjuge" box></v-text-field>
                  </v-flex>
                  <v-flex xs5>
                    <v-text-field id="conjuge" label="Cônjuge" box></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row pt-3>
                  <v-flex xs4>
                    <v-autocomplete
                      id="cartorio"
                      label="Cartório*"
                      box
                      :items="selects.cartorio"
                      item-value="value"
                      item-text="text"
                    ></v-autocomplete>
                  </v-flex>
                </v-layout>
                <v-layout row pt-3>
                  <v-flex xs>
                    <v-btn @click="pesquisar(items.termo)" dark color="#2934FF">PESQUISAR</v-btn>
                  </v-flex>
                  <v-felx class="text-xs-right">
                    <v-btn @click="nova_habilitacao" dark color="#32C458">+ NOVA HABILITAÇÃO</v-btn>
                  </v-felx>
                </v-layout>
                <v-layout row justify-center>
                  <v-div class="text-xs-center pt-3">
                    <v-card-text class="px-0">
                      <span class="subtitulo">Resultados</span>
                    </v-card-text>
                  </v-div>
                </v-layout>
                <v-layout>
                  <v-flex xs12>
                    <v-data-table
                      :headers="titulos"
                      :items="resultado"
                    >
                      <template v-slot:items="props">
                          <td>{{ props.item.termo }}</td>
                          <td>{{ props.item.data_termo }}</td>
                          <td>{{ props.item.nome }}</td>
                          <td>{{ props.item.pais }}</td>
                          <td>{{ props.item.cartorio }}</td>
                      </template>
                    </v-data-table>
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
      selects: {
        cartorio: ["134 Cartório de RCPN de Senhor do Bomfim"]
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
          text: "Consulta de Registro",
          disabled: false,
          href: "/casamento/consulta_registro"
        },
      ],

      titulos: [
          { text: "Termo", align: "left", sortable: false, value: "termo" },
          { text: "Data Termo", value: "data_termo" },
          { text: "Nome",       value: "nome" },
          { text: "Pais",       value: "pais" },
          { text: "Cartório",   value: "cartorio" },
       ],

        resultado: [
          {
            termo: "5658",
            data_termo: "30/09/2019",
            nome: "Nome",
            pais: "nome dos pais",
            cartorio: "5854 - cartlório"
          },
          
        ]
    };
  },

  methods:{
    pesquisar(){

    },

    nova_habilitacao(){

    }
  }
  
};
</script>

<style>
  .subtitulo{
    font-size: 15pt;
    font-weight: bold;
  }
</style>