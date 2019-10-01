<template>
    <div>
        <v-breadcrumbs :items="items" >
            <template v-slot:divider >
                <v-icon>chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <v-card>
            <div class="text-xs-center pt-3" >  
                <v-card-text class="px-0">
                    <span class="titulo">Consulta DAJE Habilitação</span>
                </v-card-text>
            </div>
            <v-layout row>
                <v-flex xs12 sm12>
                    <template>
                        <v-form>
                            <v-container pl-5 pr-5>
                                <v-layout justify-center pt-5>
                                    <v-flex xs2>
                                        <v-text-field
                                            id="cod_emissor"
                                            label="Cód. Emissor*"
                                            box
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs2>
                                        <v-text-field
                                            id="serie"
                                            label="Série*"
                                            box
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs4>
                                        <v-text-field
                                            id="numero_daje"
                                            label="Nº DAJE*"
                                            box
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout justify-center class="buttons">
                                    <v-btn @click="consultar_daje" dark color="#2934FF" > <v-icon>search</v-icon> CONSULTAR DAJE</v-btn>
                                    <div v-if="selects.consultar == false">
                                        <v-btn @click="gerar_isento" flat color="#2934FF" >GERAR ISENTO</v-btn>
                                    </div>
                                    <div v-if="selects.consultar">
                                        <v-btn flat color="#2934FF" >CONTINUAR</v-btn>
                                    </div>
                                </v-layout>
                                <div v-if="selects.consultar">
                                    <v-layout pt-5>
                                        <v-flex xs12>
                                            <v-data-table
                                                :headers="titulos"
                                                :items="resultados"
                                            >
                                                <template v-slot:items="props">
                                                    <td>{{props.item.data_termo}}</td>
                                                    <td>{{props.item.termo}}</td>
                                                    <td>{{props.item.tipo}}</td>
                                                    <td>{{props.item.cartorio}}</td>
                                                    <td>{{props.item.data_casamento}}</td>
                                                    <td>{{props.item.nubentes}}<br> {{props.item.nubente}}</td>
                                                </template>
                                            </v-data-table>
                                        </v-flex>
                                    </v-layout>
                                </div>
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

            selects:{
                consultar: false
            },

            items:[
                {
                    text: "Certidão",
                    disabled: true,
                    href: "certidao"
                },
                {
                    text: "Casamento",
                    disabled: false,
                    href: "/casamento"
                },
                {
                    text: "Habilitação de Casamento",
                    disabled: false,
                    href: "/consulta_daje_abilitacao"
                }
            ],

            titulos:[
                {text: "Data do Termo",     value: "data_termo"},
                {text: "Termo",             value: "termo"},
                {text: "Tipo",              value: "tipo"},
                {text: "Cartório",          value: "cartorio"},
                {text: "Data do Casamento", value: "data_casamento"},
                {text: "Nubentes",          value: "nubentes"}
            ],

            resultados:[
                {
                    data_termo: "23/07/2019",
                    termo: "11006",
                    tipo: "Civil",
                    cartorio: "134 - Cartório de RCPN de Feira de Santana",
                    data_casamento: "23/07/2019",
                    nubentes:"João dos Santos de Jesus Lima",
                    nubente:  "Maria de Oliveira Mattos"
                },
                {
                    data_termo: "23/07/2019",
                    termo: "11006",
                    tipo: "Civil",
                    cartorio: "134 - Cartório de RCPN de Feira de Santana",
                    data_casamento: "23/07/2019",
                    nubentes:"João dos Santos de Jesus Lima",
                    nubente:  "Maria de Oliveira Mattos"
                },
                {
                    data_termo: "23/07/2019",
                    termo: "11006",
                    tipo: "Civil",
                    cartorio: "134 - Cartório de RCPN de Feira de Santana",
                    data_casamento: "23/07/2019",
                    nubentes:"João dos Santos de Jesus Lima",
                    nubente:  "Maria de Oliveira Mattos"
                },
            ]
        }
    },

    methods:{
        consultar_daje(){
            this.selects.consultar = true
        },

        gerar_isento(){
            alert("Gerando...")
        }
    }
}
</script>