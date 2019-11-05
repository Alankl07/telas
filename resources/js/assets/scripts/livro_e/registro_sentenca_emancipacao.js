export default {
    data() {
        return {
            variaveis: {
                valid: false,
                active: 0,
                loading: false
            },

            selects: {
                tipo: ["Reconhecimento"],
                regime_bens: [
                    "Aquestos",
                    "Comunhão Parcial de Bens",
                    "Comunhão Total/Universal de Bens",
                    "Não especificado",
                    "Separação Total"
                ],
                país: ["Brasil", "Angola"],
                estado: ["Belas", "Bahia"],
                cidade: ["Luanda", "Feira de Santana"],
                profissao: ["Motorista"],
                uf: ["BA"]
            },

            verificacao: [verificar => !!verificar || "Campo Obrigatório"],

            items: [
                {
                  text: "Livros",
                  disabled: true,
                  href: "livros"
                },
        
                {
                  text: "livro E",
                  disabled: false,
                  href: "/livro_e"
                }
              ],

            registro: {
                dados_casamento: [
                    {
                        tipo: null,
                        data: null,
                        local: null,
                        celebrante: null,
                        regime_bens: null,
                        data_mandato: null,
                        data_transito_julgado: null,
                        processado_juizo: null,
                        juiz_autor_mandato: null,
                        juiz_proferiu_sentenca: null,
                        autos: null,
                    }
                ],

                convivente_1: [
                    {
                        nome: null,
                        profissao: null,
                        nascimento: null,
                        nome_pai: null,
                        nome_mae: null,
                        endereco: {
                            país_nascimento: null,
                            estado_nascimento: null,
                            cidade_nascimento: null,
                            logradouro: null,
                            numero: null,
                            complemento: null,
                            bairro: null,
                            cep: null
                        }
                    }
                ],

                convivente_2: [
                    {
                        nome: null,
                        profissao: null,
                        nascimento: null,
                        nome_pai: null,
                        nome_mae: null,
                        endereco: {
                            país_nascimento: null,
                            estado_nascimento: null,
                            cidade_nascimento: null,
                            logradouro: null,
                            numero: null,
                            complemento: null,
                            bairro: null,
                            cep: null
                        }
                    }
                ],

                averbacoes: [
                    {
                        texto_averbacao: null,
                        historico_averbacoes: null
                    }
                ],

                observações: null,

                comunicacao: [
                    {
                        documento_anterior: null,
                        termo: null,
                        livro: null,
                        folha: null,
                        comarca: null,
                        uf: null,
                        cidade: null
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