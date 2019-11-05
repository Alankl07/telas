export default {
    data() {
        return {
            variaveis: {
                valid: false,
                active: 0,
                loading: false
            },

            selects: {
                sexo: ["Masculino", "Feminino"],
                gemeo: ["Sim", "Não"],
                profissao: ["Motorista"],
                estado_civil: ["Casado(a)", "Solteiro(a)"],
                país: ["Brasil", "Angola"],
                estado: ["Belas", "Bahia"],
                cidade: ["Luanda", "Feira de Santana"],
            },

            verificacao: [verificar => !!verificar || "Campo Obrigatório"],

            registro: {
                nascimento: [
                    {
                        nome: null,
                        sexo: null,
                        nascimento: null,
                        hora: null,
                        gemeo: null,
                        numero_declaracao: null,
                        endereco: {
                            país: null,
                            estado: null,
                            cidade: null,
                            local_nascimento: null,
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

                declarante: [
                    {
                        opcao: null,
                        nome: null,
                        documento: null,
                        estado_civil: null,
                        profissao: null,
                        telefone: null,
                        endereco: {
                            país: null,
                            estado: null,
                            cidade: null,
                            local_nascimento: null,
                        }
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