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
                    disabled: true,
                    href: "livros"
                },

                {
                    text: "livro E",
                    disabled: false,
                    href: "/livro_e"
                }
            ],

            verificacao: [verificar => !!verificar || "Campo Obrigatório"],

            selects: {
                regime_bens: ["Parcial"],
                profissao: ["Motorista"],
                estado_civil: ["Casado(a)", "Solteiro(a)"],
                país: ["Brasil", "Angola"],
                estado: ["Belas", "Bahia"],
                cidade: ["Luanda", "Feira de Santana"],
                uf: ["BA"]
            },

            registro: {
                casamento: [
                    {
                        data_casamento: null,
                        local_casamento: null,
                        celebrante: null,
                        regime_bens: null,
                    }
                ],

                certidao_original: [
                    {
                        certidao_original: null,
                    }
                ],

                nubente_1: [
                    {
                        nome: null,
                        profissao: null,
                        estado_civil_anterior: null,
                        nascimento: null,
                        idade: null,
                        nome_adotado: null,
                        nome_pai: null,
                        nome_mae: null,
                        endereco: {
                            logradouro: null,
                            numero: null,
                            complemento: null,
                            bairro: null,
                            cep: null,
                        }
                    }
                ],

                nubente_2: [
                    {
                        nome: null,
                        profissao: null,
                        estado_civil_anterior: null,
                        nascimento: null,
                        idade: null,
                        nome_adotado: null,
                        nome_pai: null,
                        nome_mae: null,
                        endereco: {
                            logradouro: null,
                            numero: null,
                            complemento: null,
                            bairro: null,
                            cep: null,
                        }
                    }
                ],

                traducao: [
                    {
                        certidao_original_traduzida: null,
                        idioma_origonal: null,
                        nome_tradutor: null,
                        tradutor_publico: null,
                        data_traducao: null,
                        data: null,
                        serventia: null,
                        livro: null,
                        numero_livro: null,
                        folha: null
                    }
                ],

                averbacoes: [
                    {
                        texto_averbacoes: null,
                        historio_averbacoes: null,
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

            },
        }
    },

    methods: {
        next() {
            const active = parseInt(this.variaveis.active);
            this.variaveis.active = active < 7 ? active + 1 : active;
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
