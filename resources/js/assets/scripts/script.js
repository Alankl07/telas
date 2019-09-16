export default {
    data() {
        return {
            //Aqui dentro vão as variáveis e models
            nome: "Alan"
        }
    },
    created() {

    },
    methods: {
        //Aqui vão as funções
        numeroAleatorio(x) {
            let gerado = '';
            for (let i = 0; i < x; i++) {
                let num = Math.floor(Math.random() * 10);
                gerado = gerado + String(num);
            }
            return gerado;
        },

        a(){
            alert('ok')
        }
    }
}