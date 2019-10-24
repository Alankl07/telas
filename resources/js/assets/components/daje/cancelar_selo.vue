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
                <span class="titulo">Cancelar Selo Digital</span>
                </v-card-text>
            </div>

            <div class="text-xs-center pt-3 " >
                <v-card-text>
                    <span >Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                         et dolore magna aliqua.</span>
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
                                            id="numero_selo"
                                            label="Nº Selo*"
                                            :rules="verificacao"
                                            box
                                            v-model="cancelar.numero_selo"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs3>
                                        <v-autocomplete
                                            id="motivo_cancelamento"
                                            label="Motivo do Cancelamento*"
                                            box
                                            :rules="verificacao"
                                            :items="selects.motivo_cancelamento"
                                            item-value="value"
                                            item-text="text"
                                            v-model="cancelar.motivo_cancelamento"
                                        ></v-autoComplete>
                                    </v-flex>
                                </v-layout>
                                <v-layout justify-center pt-3>
                                    <div>
                                        <v-btn @click="cancelar_selo" dark color="#32C458">CANCELAR SELO</v-btn>
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

            selects:{
                motivo_cancelamento:["Erro de DAJE"],
            },

            verificacao:[verificar => !!verificar || "Campo Obrigatório"],
            
            items: [
                {
                text: "DAJE",
                disabled: true,
                href: "daje"
                },
                {
                text: "Cancelar Selo",
                disabled: false,
                href: "/cancelar_selo"
                },
            ],

            cancelar:{
                numero: null,
                motivo_cancelamento: null,
            }
        }
    },

    methods:{
        cancelar_selo(){
            if(this.$refs.form.validate()){
                let response = this.$https.post(
                    'cancelar', this.cancelar
                ).then(function(value){
                }).catch(function(erro){
                    
                })
            }
        }
    }
}
</script>