export default {
    data() {
        return {
            variaveis: {
                valid: false,
                active: 0,
                loading: false,
            },

            selects: {
                sexo: ["Masculino", "Feminino"],
                profissao: ["Desenvolvedor"],
                estado_civil: ["Casado(a)", "Solteiro(a)"],
                emancipacao_concedida_por: [
                    "Ambos os Pais",
                    "Pai",
                    "Mãe",
                    "Ordem Judicial",
                    "Tutor"
                ],
                país: ["Brasil", "Angola"],
                estado: ["Belas", "Bahia"],
                cidade: ["Feira de Santana", "Luanda"],
            },

            verificacao: [verificar => !!verificar || "Campo Obrigatório"],

            registro: {
                emancipacao: [
                    {
                        emancipacao_concedida_por: null,
                        nome: null,
                        sexo: null,
                        documento_identificacao: null,
                        nascimento: null,
                        idade: null,
                        profissao: null,
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

                filiacao_pai: [
                    {
                        nome_pai: null,
                        profissao: null,
                        nome_avô: null,
                        nome_avó: null,
                        endereco: {
                            país_nascimento: null,
                            estado_nascimento: null,
                            cidade_nascimento: null,
                            local_nascimento: null
                        }
                    }
                ],

                filiacao_mae: [
                    {
                        nome_mae: null,
                        profissao: null,
                        nome_avô: null,
                        nome_avó: null,
                        endereco: {
                            país_nascimento: null,
                            estado_nascimento: null,
                            cidade_nascimento: null,
                            local_nascimento: null
                        }
                    }
                ],

                dados_tutor: [
                    {
                        nome: null,
                        sexo: null,
                        documento_identificacao: null,
                        cpf: null,
                        estado_civil: null,
                        profissao: null,
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

                escritura: [
                    {
                        opcao: null,
                        data_escritura: null,
                        serventia: null,
                        livro: null,
                        folha: null,
                        tabeliao: null,
                    }
                ],

                sentenca: [
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