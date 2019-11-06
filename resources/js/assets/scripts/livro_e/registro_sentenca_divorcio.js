export default {
    data() {
        return {
            variaveis: {
                valid: false,
                active: 0,
                loading: false,
            },

            selects: {
                regime_bens: [
                    "Aquestos",
                    "Comunhão Parcial de Bens",
                    "Comunhão Total/Universal de Bens",
                    "Não Especificado",
                    "Separação Total"
                ],
                profissao: ["Arquiteto"],
                país: ["Brasil", "Angola"],
                estado: ["Belas", "Bahia"],
                cidade: ["Feira de Santana", "Luanda"],
                uf: ["BA"],
            },

            items: [
                {
                  text: "Livros",
                  disabled: true,
                  href: "livros"
                },
                {
                  text: "Livro E",
                  disabled: false,
                  href: "/livro_e"
                }
              ],

            verificacao: [verificar => !!verificar || "Campo Obrigatório"],

            registro: {

                dados_casamento: [
                    {
                        data: null,
                        local: null,
                        celebrante: null,
                        regime_bens: null,
                        numero: null,
                        folha: null,
                        termo_1: null,
                        termo_2: null,
                        cartorio: null,
                    }
                ],

                divorciante_1: [
                    {
                        nome: null,
                        profissao: null,
                        nascimento: null,
                        nome_pos_divorcio: null,
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
                            cep: null,
                        }
                    }
                ],

                divorciante_2: [
                    {
                        nome: null,
                        profissao: null,
                        nascimento: null,
                        nome_pos_divorcio: null,
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
                            cep: null,
                        }
                    }
                ],

                escritura:[
                    {
                        opcao: null,
                        data_escritura: null,
                        serventia: null,
                        livro: null,
                        folha: null,
                        tabeliao: null,
                    }
                ],

                sentenca:[
                    {
                        opcao: null,
                        nome_promotor: null,
                        data_sentensa: null,
                        data_transito_julgado: null,
                        data_mandado: null,
                        processodo_juizo: null,
                        juiz_autor_mandado: null,
                        juiz_proferiu_sentenca: null,
                        autos: null,
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
          this.variaveis.active = 6 ? active + 1 : active;
        },
        imprimir() {
          let self = this;
          if (this.$refs.form.validate()) {
            this.variaveis.loading = true;
            this.$http
              .post("servicos/tj/registro/....", this.registro)
              .then(function (value) {
                console.log(value);
                if (value.data.erro) {
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
        },
      }
}