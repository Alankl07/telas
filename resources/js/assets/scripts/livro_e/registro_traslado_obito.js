export default {
  data() {
    return {
      variaveis: {
        active: false,
        valid: false,
        loading: false
      },

      selects: {
        sexo: ["Masculino", "Feminino"],
        eleitor: ["Sim", "Não"],
        profissao: ["Motorista"],
        estado_civil: ["Casado(a)", "Solteiro(a)"],
        país: ["Brasil", "Angola"],
        estado: ["Belas", "Bahia"],
        cidade: ["Luanda", "Feira de Santana"],
        documento_anterior: ["Certidão Nascimento"],
        uf: ["BA"]
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

      registro: {
        obito: [
          {
            data_falecimento: null,
            hora: null,
            local_falecimento: null,
            declarante: null,
            medico: null,
            causa_morte: null,
            local_sepultamento: null
          }
        ],

        falecido: [
          {
            nome: null,
            sexo: null,
            cor: null,
            eleitor: null,
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

        certidao_original: [
          {
            certidao_original: null,
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

        comunicacao: [
          {
            documento_anterior: null,
            termo: null,
            livro: null,
            folha: null,
            cartorio: null,
            uf: null,
            municipio: null,
          }
        ],

        imprimir: [
          {
            assinante: null,
            cidade: null
          }
        ]
      },
    };
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
};