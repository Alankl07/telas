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
                <span class="titulos">Desassociar DAJE</span>
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
                                            id="cartorio_emissor"
                                            label="Cartório Emissor*"
                                            :rules="verificacao"
                                            box
                                            v-model="desassociar.cartorio_emissor"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs3>
                                        <v-text-field
                                            id="serie"
                                            label="Série*"
                                            :rules="verificacao"
                                            box
                                            v-model="desassociar.serie"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs3>
                                        <v-text-field
                                            id="numero_daje"
                                            label="Nº DAJE*"
                                            :rules="verificacao"
                                            box
                                            v-model="desassociar.numero_daje"
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout justify-center pt-3>
                                    <div>
                                        <v-btn @click="cancelar" dark color="#32C458">CANCELAR SELO</v-btn>
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
    data(){
        return{
            variaveis:{
                valid: false,
            },
            
            items: [
                {
                text: "DAJE",
                disabled: true,
                href: "daje"
                },
                {
                text: "Desassociar DAJE",
                disabled: false,
                href: "/desassociar_daje"
                },
            ],

            verificacao:[verificar => !!verificar || "Campo Obrigatório"],

            desassociar:{
                cartorio_emissor: null,
                serie: null,
                numero_daje: null,
            }
        }
    },

    methods:{
        cancelar(){

            if(this.$refs.form.validate()){
                let response = this.$http.post(
                    'servicos/tj/dajes/desassociar', this.desassociar
                ).then(function(value){
                }).catch(function(erro){
                    
                })
            }
        }
    },
}
</script>