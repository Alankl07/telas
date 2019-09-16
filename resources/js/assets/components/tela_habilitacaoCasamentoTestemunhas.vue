<template>
    <div class="componente">
        <div>
            <h1 class="titulo">Habilitação de Casamento</h1>
        </div>
        <div class="divDAJE" >
            <p><v-icon color="black" small >receipt</v-icon>DAJE Habilitação ({{daje}}): {{numeroDAJE}}</p><p id="protocolo">Protocolo: {{protocolo}}</p>
        </div>
        <div class="menu">
            <v-tabs >
                <v-tab>CASAMENTO</v-tab>
                <v-tab>TESTEMUNHAS</v-tab>
                <v-tab>NUBENTES</v-tab>
            </v-tabs>
        </div>
        <div class="divDadosTestemunha">
            <v-text-field class="rg" label="RG" box></v-text-field>
            <v-text-field class="cpf" label="CPF" box></v-text-field>
            <v-text-field class="nome" placeholder="João Silva Santos" label="Nome da Testemunha" box></v-text-field>
            <v-select class="estadoCivil" filled label="Estado Civil" box></v-select>
            <v-select class="profissao" filled label="Profissão" box></v-select>
            <v-text-field class="localNascimento" label="Local de Nascimento" box></v-text-field>
            <v-select class="nacionalidade" label="Nacionalidade" box></v-select>
        </div>
        <div class="Endereco">
            <h2>Endereço</h2>
        </div>
        <div class="divEndereco">
            <v-text-field class="cep" label="CEP" box></v-text-field>
            <v-text-field class="cidade" label="Cidade" box></v-text-field>
            <v-select class="uf" filled label="UF" box></v-select>
            <v-text-field class="local" label="Local" box></v-text-field>
            <v-text-field class="numero" label="Número" box></v-text-field>
            <v-text-field class="complemento" label="Complemento" box></v-text-field>
        </div>
        <div class="line"></div>
        <div class="divDadosSegundaTestemunha">
            <v-text-field class="rg" label="RG" box></v-text-field>
            <v-text-field class="cpf" label="CPF" box></v-text-field>
            <v-text-field class="nome" label="Nome da Testemunha" box></v-text-field>
            <v-select filled class="estadoCivil" label="Estado Civil" box></v-select>
            <v-select filled class="profissao" label="Profissão" box></v-select>
            <v-text-field class="localNascimento" label="Local de Nascimento" box></v-text-field>
            <v-select class="nacionalidade" label="Nacionalidade" box></v-select>
        </div>
        <div class="enderecoSegundaTestemunha">
            <h2>Endereço</h2>
        </div>
        <div class="divEnderecoSegundaTestemunha">
            <v-text-field class="cep" label="CEP" box></v-text-field>
            <v-text-field class="cidade" label="Cidade" box></v-text-field>
            <v-select filled class="uf" label="UF" box></v-select>
            <v-text-field class="local" label="Local" box></v-text-field>
            <v-text-field class="numero" label="Número" box></v-text-field>
            <v-text-field class="complemento" label="Complemento" box></v-text-field>
        </div>
        <div class="btn">
            <v-btn large color="#0F15CA" dark>PROXIMO PASSO</v-btn>
        </div>
    </div>
</template>

<style>
    .componente{
        position: relative;
        margin-left: 50px;
        margin-top: 50px;
    }

    .titulo{
        position: relative;
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 18pt;
        top: 50px;
        left: 70px;
    }

    .divDAJE{
        position: relative;
        display: flex;
        top: 150px;
        font-weight: bold;
        left: 18%;
        font-size: 11pt;
        font-family: Arial;
    }

    #protocolo{
        position: relative;
        left: 37.2%;  
    }

    .menu{
        position: relative;
        top: 150px;
        left: 19%;
    }

    .divDadosTestemunha{
        position: relative;
        display: flex ;
        top: 170px;
    }

    .rg{
        position: relative;
        left: 17.5%;
        width: 110px;
    }

    .cpf{
        position: relative;
        left: 19%;
        width: 110px;
    }

    .nome{
        position: relative;
        left: 20.5%;
        width: 250px;
    }

    .estadoCivil{
        position: relative;
        left: 22%;
        width: 130px
    }

    .profissao{
        position: relative;
        left: 23.5%;
        width: 130px;
    }
    .localNascimento{
        position: relative;
        top: 90px;
        left: -48.9%;
        width: 200px;
    }

    .nacionalidade{
        position: relative;
        top:90px;
        left: -47.5%;
        width: 190px;
    }

    .Endereco{
        position: relative;
        top: 260px;
        text-align: center;
        left: 70px;
    }

    .divEndereco{
        position: relative;
        top: 300px;
    }

    .cep{
        position: relative;
        width: 10%;
        left: 17%;
    }

    .cidade{
        position: relative;
        width: 18%;
        left: 28.5%;
        top: -84px
    }

    .uf{
        position: relative;
        width: 5%;
        left: 48%;
        top: -168px;
    }

    .local{
        position:relative;
        width: 22%;
        left: 54.3%;
        top: -252px;
    }

    .numero{
        position: relative;
        width: 6.1%;
        left: 77.7%;
        top: -336px;
    }

    .complemento{
        position: relative;
        width: 9.8%;
        left: 85.5%;
        top: -420px;
    }

    .line{
        position: relative;
        border-top: 1.5pt solid rgba(170, 161, 161, 0.3);
        width: 60%;
        top: -105px;
        left: 341px;
    }

    .divDadosSegundaTestemunha{
        position: relative;
        display: flex;
        top: -65px;
    }

    .enderecoSegundaTestemunha{
        position: relative;
        text-align: center;
        left: 70px;
        top: 30px;
    }

    .divEnderecoSegundaTestemunha{
        position: relative;
        top: 70px;
    }

    .btn{
        position: relative;
        top: -290px;
        text-align: center;
        left: 70px;
    }

</style>

<script>
    export default {
        data() {
            return {
                daje: 'Isento',
                numeroDAJE: '0000 0000 000000',
                protocolo: '0000 0000 000000',
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

            check(){
                var variavel = document.getElementById('Hipossuficiente')
                if(variavel.value == 'on'){
                    variavel.style.backgroundColor=blue
                }
            }
        }
    }
</script>