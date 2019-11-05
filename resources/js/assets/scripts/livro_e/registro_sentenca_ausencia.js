export default {
    data() {
        return {
            variaveis: {
                valid: false,
                active: 0,
                loading: false,
            },

            items: [
                {
                    text: "Livros",
                    disabled: false,
                    href: "liros"
                },
                {
                    text: "Livros E",
                    disabled: true,
                    href: "/livro_e"
                }
            ],

            selects: {
                sexo: ["Masculino", "Feminino"],
                profissao: ["Desenvolvedor"],
                estado_civil: ["Solterio(a)"],
                país: ["Angola"],
                estado: ["Belas"],
                cidade: ["Luanda"],
            },

            verificacao: [verificar => !!verificar || "Campo Obrigatório"],

            registro: {

                dados_ausente: [
                    {
                        nome: null,
                        sexo: null,
                        documento_identificacao: null,
                        cpf: null,
                        nascimento: null,
                        idade: null,
                        profissao: null,
                        estado_civil: null,
                        conjuge: null,
                        nome_pai: null,
                        nome_mae: null,
                        endereco: {
                            país: null,
                            estado: null,
                            cidade: null,
                            local_nascimento: null,
                            logradouro: null,
                            numero: null,
                            complemento: null,
                            bairro: null,
                            cep: null,
                        }

                    }
                ],

                curador: [
                    {
                        nome: null,
                        sexo: null,
                        documento_identificacao: null,
                        cpf: null,
                        nascimento: null,
                        idade: null,
                        profissao: null,
                        estado_civil: null,
                        conjuge: null,
                        nome_pai: null,
                        nome_mae: null,
                        endereco: {
                            país: null,
                            estado: null,
                            cidade: null,
                            local_nascimento: null,
                            logradouro: null,
                            numero: null,
                            complemento: null,
                            bairro: null,
                            cep: null,
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

                  observacoes: [
                    {
                      texto_observacoes: null,
                    }
                  ],
          
                  imprimir: [
                    {
                        assinante: null,
                        cidade: null
                    }
                ]
     
          
            }
        }
    },

    methods: {
        next() {
            const active = parseInt(this.variaveis.active);
            this.variaveis.active = active < 5 ? active + 1 : active;
        },
        imprimir() {
            let self = this;
            if (this.$refs.form.validate()) {
                this.variaveis.loading = true;
                this.$http
                    .post("servicos/tj/registro/...", this.registro)
                    .then(function (value) {
                        console.log(value);
                        if (value.data.error) {
                            alert(value.data.message);
                            self.variaveis.loading = false;
                        } else {
                            alert("Sucesso");
                            self.variaveis.loading = false;
                        }
                    })
                    .catch(function (erro) {
                        alert(erro);
                        self.variaveis.loading = false;
                    });
            } else {
                alert("Campo Obrigatório em Branco")
            }
        }
    }
}