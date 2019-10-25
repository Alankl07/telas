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
          <span class="titulos">Desbloquear DAJE</span>
        </v-card-text>
      </div>

      <v-layout row>
        <v-flex xs12 sm12>
          <template>
            <v-form ref="form" v-model="variaveis.valid">
              <v-container pl-5 pr-5>
                <v-layout pt-3 justify-center>
                  <v-flex xs3>
                    <v-text-field
                      id="numero_daje"
                      label="Nº DAJE*"
                      box
                      :rules="verificacao"
                      v-model="desbloquear.numero_daje"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout justify-center pt-3>
                  <div>
                    <v-btn @click="consultar" dark color="#2439FF">CONSULTAR DAJE</v-btn>
                    <v-btn @click="_desbloquear" dark color="#32C458">DESBLOQUEAR</v-btn>
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
        valid: false
      },

      items: [
        {
          text: "DAJE",
          disabled: true,
          href: "daje"
        },
        {
          text: "Desbloquear DAJE",
          disabled: false,
          href: "/desbloquear_daje"
        }
      ],

      verificacao: [verificar => !!verificar || "Campo Obrigatório"],

      desbloquear: {
        numero_daje: null
      }
    };
  },

  methods: {
    _desbloquear() {
      if (this.$refs.form.validate()) {
        alert("ok");
        let response = this.$http
          .post("servicos/tj/dajes/desbloquear", this.desbloquear)
          .then(function(value) {})
          .catch(function(erro) {});
      }
    },

    consultar() {
        alert('ok')
      let response = this.$http
        .get("servicos/tj/dajes/consultar" + this.filtro(this.search), {
          params: {
            cartorio: this.search.cartorio
          }
        })
        .then(function(value) {});
    }
  }
};
</script>