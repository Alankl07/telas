
export default {
  data() {
    return {
      variaveis: {
        active: 0,
        loading: false
      },

      selects: {
        tipo: ["Contrato"],
        regime_bens: [
          "Aquestos",
          "Comunhão Parcial de Bens",
          "Comunhão Total/Universal de Bens",
          "Não Especificado",
          "Separação Total"
        ],
        sexo: ["Masculino", "Feminino"],
        profissao: ["Arquiteto"],
        país: ["Brasil", "Angola"],
        estado: ["Belas", "Bahia"],
        cidade: ["Feira de Santana", "Luanda"],
        uf: ["BA"],
        estado_civil: ["Solteiro(a)", "Casado(a)"]
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
        interditado: [
          {
            nome: null,
            sexo: null,
            documento_identificacao: null,
            cpf: null,
            data_nascimento: null,
            idade: null,
            profissao: null,
            estado_civil: null,
            conjuge: null,
            nome_pai: null,
            nome_mae: null,
            endereco: {
              logradouro: null,
              numero: null,
              complemento: null,
              bairro: null,
              cep: null
            }
          }
        ],

        curador: [
          {
            nome: null,
            sexo: null,
            documento_identificacao: null,
            cpf: null,
            data_nascimento: null,
            idade: null,
            profissao: null,
            estado_civil: null,
            conjuge: null,
            nome_pai: null,
            nome_mae: null,
            endereco: {
              logradouro: null,
              numero: null,
              complemento: null,
              bairro: null,
              cep: null
            }
          }
        ],

        dados_sentenca: [
          {
            nome_promotor: null,
            data_sentenca: null,
            data_transito_julgado: null,
            data_sentenca_2: null,
            processado_juizo: null,
            juiz_autor_mandado: null,
            juiz_proferiu_senteca: null,
            autos: null,
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
    };
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
};