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
        <div class="divNomeHomem">
            <v-text-field id="nomeH" label="Nome*" placeholder="Rafael Silva Santos" append-icon="fa-pen" box></v-text-field>
            <v-text-field id="nomeCasado" label="Nome de Casado"  append-icon="fa-pen" box ></v-text-field>
        </div>
        <div class="divNomeMulher">
            <v-text-field id="nome" label="Nome*"  box></v-text-field>
            <v-text-field id="nomeCasado" label="Nome de Casado" box ></v-text-field>
        </div>
        <div class="checkbox">
            <div  >
                <p class="checkboxHipossuficienteCima">Hipossuficiente<v-checkbox class="checkboxCimaEsquerdo"  color="blue"></v-checkbox></p>
                <p class="checkboxHipossuficienteBaixo">Hipossuficiente<v-checkbox class="checkboxBaixoEsquerdo"  color="blue"></v-checkbox></p>
            </div >
            <div  >
                <p id="checkboxAssinaturaRogoCima">Assinatura a Rogo<v-checkbox class="checkboxCimaDireito" color="blue"></v-checkbox></p>
                <p id="checkboxAssinaturaRogoBaixo">Assinatura a Rogo<v-checkbox class="checkboxBaixoDireito"  color="blue"></v-checkbox></p>
            </div>
        </div>
        <div class="line" ></div>
        <div class="subTitulo">
            <h4>REQUERENTE</h4>
        </div>
        <div>
            <div class="opcaoRequerente">
                <v-radio-group>
                    <p id="tituloNubente">Nubente <v-radio color="blue" class="radioNubente" value="txt2" ></v-radio></p>
                    <p id="tituloOutraPessoa">Outra Pessoa<v-radio color="blue" class="radioOutraPessoa" value="txt1"></v-radio></p>
                </v-radio-group>
            </div>
        </div>
        <div class="formPai">
            <div class="box" id="inputNome" >
                <v-select filled label="Nome*" box ></v-select>
            </div>
            <div class="box" id="inputCPF" >
                <v-text-field label="CPF" box  ></v-text-field>
            </div>
            <div class="box" id="inputCEP" >
                <v-text-field label="CEP" box  ></v-text-field>
            </div>
            <div class="box" id="inputEndereco">
                <v-text-field label="Endereço" box  ></v-text-field>
            </div>
            <div class="box" id="inputNumero">
                <v-text-field label="Numero" box  ></v-text-field>
            </div>
            <div class="box" id="inputComplemento">
                <v-text-field label="Complemento" box ></v-text-field>
            </div>
            <div class="box" id="inputBairro" >
                <v-text-field label="Bairro" box ></v-text-field>
            </div>
            <div class="box" id="inputCidade" >
                <v-select filled label="Cidade" box ></v-select>
            </div>
            <div class="box" id="inputUF">
                <v-select filled label="UF" box></v-select>
            </div>
        </div>
        <div>
            <div class="lineFooter" ></div>
        </div>
        <p class="divAnexo"> <v-icon>attachment</v-icon> Arquivos Anexados({{quantidadeAnexo}})</p>
        <div class="divAssinante">
            <v-select filled label="Assinante*" placeholder="Daniel de Oliveira Sampaio" box></v-select>
        </div>
        <div class="btn">
            <v-btn style="font-weight: bold"  tile color="indigo" dark>ALTERAR REGISTRO</v-btn>
            <v-btn style="postion: relative; font-weight: bold; "   flat  color="indigo" dark > <v-icon style="position: relative; left: -3px;">print</v-icon>IMPRESSÕES</v-btn>
        </div>
    </div>
</template>

<style>

    .componente{
        position: relative;
    }

    .titulo{
        position: relative;
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 18pt;
        top: 50px;
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
        left: 28.1%;
    }

    .menu{
        position: relative;
        top: 150px;
        left: 19%;
    }

    .divNomeHomem{
        position: relative;
        width: 20%;
        top: 168px;
        left: 18%;
    }

    .divNomeMulher{
        position: relative;
        width: 20%;
        left: 39%;
    }

    .checkboxCimaEsquerdo{
        position: relative;
        top: -40px;
        left: 87px;
    }

    .checkboxBaixoEsquerdo{
        position: relative;
        top: -40px;
        left: 87px;
    }

    .checkboxCimaDireito{
        position: relative;
        top: -40px;
        left: 102px;
        padding-right: 50px;
    }

    .checkboxBaixoDireito{
        position: relative;
        top: -40px;
        left: 102px;
        padding-right: 50px;
    }

    #checkboxAssinaturaRogoCima{
        position: relative;
        left: 50px;
    }

    #checkboxAssinaturaRogoBaixo{
        position: relative;
        left: 50px;
    }

    
    .checkbox{
        display: flex;
        position: relative;
        top: -150px;
        left: 60%;
        color: slategrey;
    }

    .line{
        position: relative;
        border-top: 1.5pt solid rgba(170, 161, 161, 0.3);
        width: 50%;
        top: -195px;
        left: 341px;
    }

    .formPai{
        position: relative;
        left: 80px;
    }

    .box{
        position: relative;
        float: left;
    }

    .subTitulo{
        position: relative;
        text-align: center;
        top: -160px;
    }

    .opcaoRequerente{
        position: relative;
        float: left;
        margin: 5px;
        top: -160px;
        left: 239px;
    }

    .radioNubente{
        position: relative;
        left: 60px;
        top: -20px;
    }

    .radioOutraPessoa{
        position: relative;
        top: -20px;
        left: 90px;
    }

    #tituloNubente{
        position: relative;
    }

    #tituloOutraPessoa{
        position: relative;
        top: -58px;
        left: 100px;
    }

    #inputNome{
        position: relative;
        top: -100px;
        left: 69px;
        width: 20%;
    }

    #inputCPF{
        position: relative;
        top: -100px;
        margin-right: 30px;
        left: 80px;
        width: 140px;
    }

    #inputCEP{
        position: relative;
        top: -100px;
        left: 62px;
        width: 100px;
    }

    #inputEndereco{
        position: relative;
        top: -100px;
        margin-right: 30px;
        left: 75px;
        width: 237px;
    }

    #inputNumero{
        position: relative;
        top: -100px;
        left: 58px;
        width: 90px;

    }

    .box2{
        position: relative;
        float: left;
    }

    #inputComplemento{
        position: relative;
        top: -20px;
        right: 61.4%;
        width: 170px;
    }

    #inputBairro{
        position: relative;
        top: -104px;
        left: 250px;
    }

    #inputCidade{
        position: relative;
        top: -104px;
        left: 260px;
        width: 210px;
    }

    #inputUF{
        position: relative;
        top: -104px;
        left: 270px;
        width: 100px;
    }

    .lineFooter{
        position: relative;
        border-top: 1.5pt solid rgba(170, 161, 161, 0.3);
        width: 50%;
        top: 70px;
        left: 341px;
    }

    .divAnexo{
        position: relative;
        width: 120%;
        top: 100px;
        left: -68%;
        font-size: 15pt;
    }

    .divAssinante{
        position: relative;
        top: 150px;
        width: 103.5%;
        left: -68%;
    }

    .btn{
        position: relative;
        padding: 20px;
        font-size: 50pt;
        top: 150px;
        left: -100px;
        font-family: Arial ;
    }


</style>

<script>
    export default {
        data() {
            return {
                daje: 'Isento',
                numeroDAJE: '0000 0000 000000',
                protocolo: '0000 0000 000000',
                quantidadeAnexo: 1,
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
            
        }
    }
</script>
