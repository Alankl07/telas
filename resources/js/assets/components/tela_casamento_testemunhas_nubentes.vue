<template>
  <div>
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>chevron_right</v-icon>
      </template>
    </v-breadcrumbs>

    <v-card>
      <div class="text-xs-center pt-3">
        <v-card-text class="px-0">
          <span class="titulos">Habilitação de Casamento</span>
        </v-card-text>
      </div>

      <v-layout row justify-space-between pr-5 pl-5>
        <v-flex xs>
          <v-icon color="black" small>receipt</v-icon>DAJE Habilitação
          <span v-if="daje.tipo == 'isento'">(Isento)</span>
          - {{daje.numero}}
        </v-flex>
        <v-flex xs4 class="text-xs-right">Protocolo: {{registro.protocolo}}</v-flex>
      </v-layout>

      <v-layout row>
        <v-flex xs12 sm12>
          <template>
            <v-form ref="form" v-model="variaveis.valid" lazy-validation>
              <v-container pl-5 pr-5>
                <v-tabs v-model="variaveis.active" color="white" slider-color="#2934FF">
                  <v-tab>CASAMENTO</v-tab>
                  <v-tab>TESTEMUNHA</v-tab>
                  <v-tab @click="dialogo">NUBENTES</v-tab>
                  <v-tab-item>
                    <v-layout row pt-3>
                      <v-flex xs2>  
                        <v-text-field
                          id="data_peticao_inicial"
                          label="Petição Inicial*"
                          v-model="habilitacao.data_peticao_inicial"
                          box
                          clearable
                          right-icon="event"
                          hint="Apenas Números"
                          mask="##/##/####"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs2 class="mx-3">
                        <v-text-field
                          id="data_emissao_edital"
                          v-model="habilitacao.data_emissao_edital"
                          label="Emissão/Edital"
                          box
                          clearable
                          right-icon="event"
                          hint="Apenas Números"
                          mask="##/##/####"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs3>
                        <v-text-field
                          id="data_publicacao"
                          label="Data da Publicação"
                          v-model="habilitacao.data_publicacao"
                          box
                          clearable
                          hint="Apenas Números"
                          mask="##/##/####"
                          right-icon="event"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs3 class="ml-3">
                        <v-autocomplete
                          id="tipo_casamento"
                          label="Tipo de Casamento*"
                          v-model="habilitacao.tipo_casamento"
                          :items="selects.selectTipoCasamento"
                          item-value="value"
                          item-text="text"
                          box
                          clearable
                          hint="Campo Obrigatório*"
                        ></v-autocomplete>
                      </v-flex>
                    </v-layout>
                    <v-layout row pt-3>
                      <v-flex xs4 >
                        <v-autocomplete
                          id="regime_bens"
                          v-model="habilitacao.regime_bens"
                          label="Regime de Bens*"
                          :items="selects.selectRegimeBens"
                          item-value="value"
                          item-text="text"
                          box 
                          clearable
                          hint="Campo Obrigatório"
                        ></v-autocomplete>
                      </v-flex>
                      <v-flex xs5 class="mx-3">
                        <v-text-field
                          id="local_casamento"
                          label="Local do Casamento*"
                          v-model="habilitacao.local_casamento"
                          box 
                          clearable
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs2>
                        <v-autocomplete
                          id="uf"
                          v-model="habilitacao.uf"
                          label="UF*"
                          :items="selects.selectUF"
                          item-value="value"
                          item-text="text"
                          box
                          clearable
                        ></v-autocomplete>
                      </v-flex>
                      <v-flex xs5 class="ml-3">
                        <v-autocomplete
                          id="cidade"
                          label="Cidade*"
                          :items="selects.selectCidade"
                          item-value="value"
                          item-text="text"
                          v-model="habilitacao.cidade"
                          box
                          clearable
                        ></v-autocomplete>
                      </v-flex>
                    </v-layout>
                    <v-layout row pt-3 pr-5  >
                      <v-flex xs2 sm2 md2>
                        <v-text-field
                          id="termo_edital"
                          label="Termo/Edital"
                          v-model="habilitacao.termo_edital"
                          box
                          clearable
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs2 sm2 md2 class="mx-3">
                        <v-text-field
                          id="numero_livro"
                          v-model="habilitacao.numero_livro"
                          label="N° Livro"
                          box
                          clearable
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs5 sm4 md4>
                        <v-autocomplete
                          id="consentimento*"
                          label="Consentimento*"
                          :items="selects.selectConsentimento"
                          item-value="value"
                          item-text="text"
                          v-model="habilitacao.consentimento"
                          box
                          clearable
                        ></v-autocomplete>
                      </v-flex>
                      <v-flex xs5 sm4 md4 class="ml-3">
                        <v-autocomplete
                          id="mandado_justica"
                          label="Mandado de Justiça"
                          :items="selects.selectmandado"
                          item-value="value"
                          item-text="text"
                          v-model="habilitacao.mandado_justica"
                          box
                          clearable
                        ></v-autocomplete>
                      </v-flex>
                    </v-layout>
                    <v-layout row pt-3>
                      <v-flex xs12 >
                        <v-textarea
                          id="observacao_bens"
                          label="Observação de Bens"
                          v-model="habilitacao.observacao_bens"
                          box
                          clearable
                        ></v-textarea>
                      </v-flex>
                    </v-layout>
                  </v-tab-item>

                  <v-tab-item>
                    <div v-for="(testemunha ,i ) in habilitacao.testemunhas" :key="i">
                      <v-layout row pt-3>
                      <v-flex xs2>
                        <v-text-field
                          id="rg"
                          label="RG"
                          v-model="testemunha.rg"
                          box
                          mask="########-##"
                          hint="Apenas Números"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs2 class="mx-3">
                        <v-text-field
                          id="cpf"
                          label="CPF"
                          v-model="testemunha.cpf"
                          box
                          mask="###/###/###-##"
                          hint="Apenas Números"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs4>
                        <v-text-field
                          id="nome_testemunha"
                          label="Nome da Testemunha"
                          v-model="testemunha.nome"
                          box
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs2 class="mx-3">
                        <v-autocomplete
                          id="estado_civil"
                          v-model="testemunha.estado_civil"
                          label="Estado Civil"
                          :items="selects.selectEstadoCivil"
                          item-value="value"
                          item-text="text"
                          box
                          clearable
                        ></v-autocomplete>
                      </v-flex>
                      <v-flex xs2>
                        <v-autocomplete
                          id="profissao"
                          label="Profissão"
                          v-model="testemunha.profissao"
                          :items="selects.selectProfissao"
                          item-value="value"
                          item-text="text"
                          box
                          clearable
                        ></v-autocomplete>
                      </v-flex>
                    </v-layout>
                    <v-layout row pt-3>
                      <v-flex xs3>
                        <v-text-field
                          id="local_nascimento"
                          label="Local de Nascimento"
                          v-model="testemunha.local_nascimento"
                          box
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs2 class="mx-3">
                        <v-autocomplete
                          id="nacionalidade"
                          label="Nacionalidade"
                          :items="selects.selectNacionalidade"
                          item-value="value"
                          item-text="text"
                          v-model="testemunha.nacionalidade"
                          box
                          clearable
                        ></v-autocomplete>
                      </v-flex>
                    </v-layout>
                    <div class="text-xs-center">
                      <v-card-text class="px-0">
                        <span class="subtitulos">ENDEREÇO</span>
                      </v-card-text>
                    </div>
                    <v-layout row pt-3>
                      <v-flex xs3>
                        <v-text-field
                          id="cep"
                          label="CEP"
                          v-model="testemunha.cep"
                          mask="#####-###"
                          box
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs4 class="mx-3">
                        <v-text-field
                          id="cidade"
                          label="Cidade"
                          v-model="testemunha.endereco.cidade"
                          box
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs2>
                        <v-autocomplete
                          id="uf"
                          label="UF"
                          :items="selects.selectUF"
                          item-value="value"
                          item-text="text"
                          v-model="testemunha.endereco.uf"
                          box
                          clearable
                        ></v-autocomplete>
                      </v-flex>
                      <v-flex xs4 class="mx-3">
                        <v-text-field
                          id="local"
                          label="Local"
                          v-model="testemunha.endereco.logradouro"
                          box
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs2>
                        <v-text-field
                          id="numero"
                          label="Número"
                          v-model="testemunha.endereco.numero"
                          box
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs3 class="ml-3">
                        <v-text-field
                          id="complemento"
                          label="Complemento"
                          v-model="testemunha.endereco.complemento"
                          box
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout pl-5 pr-5>
                      <v-divider></v-divider>
                    </v-layout>
                    <v-layout row pt-4>
                      <v-flex xs2>
                        <v-text-field
                          id="rg"
                          label="RG"
                          v-model="testemunha.rg"
                          box
                          mask="########-##"
                          hint="Apenas Números"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs2 class="mx-3">
                        <v-text-field
                          id="cpf"
                          label="CPF"
                          v-model="testemunha.cpf"
                          box
                          mask="###.###.###-##"
                          hint="Apenas Números"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs4>
                        <v-text-field
                          id="nome_testemunha"
                          label="Nome da Testemunha"
                          v-model="testemunha.nome"
                          box
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs2 class="mx-3">
                        <v-autocomplete
                          id="estado_civil"
                          label="Estado Civil"
                          :items="selects.selectEstadoCivil"
                          item-value="value"
                          item-text="text"
                          v-model="testemunha.estado_civil"
                          box
                          clearable
                        ></v-autocomplete>
                      </v-flex>
                      <v-flex xs2>
                        <v-autocomplete
                          id="profissao"
                          label="Preofissão"
                          :items="selects.selectProfissao"
                          item-value="value"
                          item-text="text"
                          v-model="testemunha.profissao"
                          box
                          clearable
                        ></v-autocomplete>
                      </v-flex>
                    </v-layout>
                    <v-layout row pt-3>
                      <v-flex xs3>
                        <v-text-field
                          id="local_nascimento"
                          label="Local de Nascimento"
                          v-model="testemunha.local_nascimento"
                          box
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs3 class="mx-3">
                        <v-autocomplete
                          id="nacionalidade"
                          label="Nacionalidade"
                          v-model="testemunha.nacionalidade"
                          :items="selects.selectNacionalidade"
                          item-value="value"
                          item-text="text"
                          box
                          clearable
                        ></v-autocomplete>
                      </v-flex>
                    </v-layout>
                    <div class="text-xs-center">
                      <v-card-text clas="pt-0">
                        <span class="subtitulos">ENDEREÇO</span>
                      </v-card-text>
                    </div>
                    <v-layout row pt-3>
                      <v-flex xs2>
                        <v-text-field
                          id="cep"
                          label="CEP"
                          v-model="testemunha.endereco.cep"
                          box
                          mask="#####-##"
                          hint="Apenas Números"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs3 class="mx-3">
                        <v-text-field
                          id="cidade"
                          label="Cidade"
                          v-model="testemunha.endereco.cidade"
                          box
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs2>
                        <v-autocomplete
                          id="uf"
                          label="UF"
                          :items="selects.selectUF"
                          item-value="value"
                          item-text="text"
                          v-model="testemunha.endereco.uf"
                          box
                          clearable
                        ></v-autocomplete>
                      </v-flex>
                      <v-flex x4 class="mx-3">
                        <v-text-field
                          id="local"
                          label="Local"
                          v-model="testemunha.endereco.lagradouro"
                          box
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs2>
                        <v-text-field
                          id="numero"
                          label="Número"
                          v-model="testemunha.endereco.numero"
                          box
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs3 class="ml-3">
                        <v-text-field
                          id="complemento"
                          label="Complemento"
                          v-model="testemunha.endereco.complemento"
                          box
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    </div>
                  </v-tab-item>
                  

                  <v-tab-item>
                    <div v-if="variaveis.valid == true">
                      <v-layout row pt-3>
                        <v-flex xs4>
                          <v-text-field
                            id="nome_nubente"
                            label="Nome*"
                            v-model="habilitacao.nome_nubente"
                            append-icon="fa-pen"
                            box
                            clearable
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs4 class="mx-3">
                          <v-text-field
                            id="nome_de_casado"
                            v-model="habilitacao.nome_de_casado"
                            label="Nome de Casado*"
                            append-icon="fa-pen"
                            box
                            clearable
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3>
                          <v-checkbox
                            class="text-xs-left"
                            label="Hipossuficiente"
                            v-model="habilitacao.status_primeiro_nubente"
                            value="Hipossuficiente"
                            color="blue"
                          ></v-checkbox>
                        </v-flex>
                        <v-flex xs2 class="">
                          <v-checkbox
                            value="Assinatura a Rogo"
                            v-model="habilitacao.status_primeiro_nubente"
                            label="Assinatura a Rogo"
                            color="blue"
                          ></v-checkbox>
                        </v-flex>
                      </v-layout>
                      <v-layout row pt-4>
                        <v-flex xs4 >
                          <v-text-field
                            id="nome_mulher"
                            label="Nome*"
                            v-model="habilitacao.proximo_nome_nubente"
                            append-icon="fa-pen"
                            box
                            clearable
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs4 class="mx-3">
                          <v-text-field
                            id="nome_de_casado_mulher"
                            v-model="habilitacao.proximo_nome_de_casado"
                            label="Nome de Casado*"
                            append-icon="fa-pen"
                            box
                            clearable
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3 class="">
                          <v-checkbox 
                            value="Hipossuficiente"
                            v-model="habilitacao.status_segundo_nubente"
                            label="Hipossuficiente"
                            color="blue"
                          ></v-checkbox>
                        </v-flex>
                        <v-flex xs2>
                          <v-checkbox
                            value="Assinatura a Rogo"
                            v-model="habilitacao.status_segundo_nubente"
                            color="blue"
                            label="Assinatura a Rogo"
                          ></v-checkbox>
                        </v-flex>
                      </v-layout>
                      <v-layout pl-5 pr-5>
                        <v-divider></v-divider>
                      </v-layout>
                      <div class="text-xs-center">
                        <v-card-text class="px-0">
                          <span class="subtitulos" >REQUERENTE</span>
                        </v-card-text>
                      </div>
                      <v-layout row pt-3>
                        <v-flex xs3 >
                          <v-radio-group v-model="habilitacao.requerente" row>
                            <v-radio color="blue" label="Nubente" value="Nubente"></v-radio>
                            <v-radio color="blue" label="Outra Pessoa" value="Outra Pessoa"></v-radio>
                          </v-radio-group>
                        </v-flex>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs5>
                          <v-autocomplete
                            label="Nome*"
                            box
                            v-model="habilitacao.nome_requerente"
                            :items="habilitacao.nome_nubente"
                            item-value="value"
                            item-text="text"
                            id="nome_requerente"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3 class="mx-3">
                          <v-text-field
                            id="cpf_requerente"
                            box
                            v-model="habilitacao.cpf"
                            mask="###.###.###-##"
                            hint="Apenas Números"
                            label="CPF"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2>
                          <v-text-field
                            id="cep_requerente"
                            v-model="habilitacao.endereco.cep"
                            box
                            clearable
                            mask="#####-##"
                            hint="Apenas Números"
                            label="CEP"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs4 class="mx-3">
                          <v-text-field
                            id="endereco_requerente"
                            v-model="habilitacao.endereco.lagradouro"
                            label="Endereço"
                            box
                            clearable
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2>
                          <v-text-field
                            id="numero_requerente"
                            v-model="habilitacao.endereco.numero"
                            box
                            label="Numero*"
                            clearable
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs2>
                          <v-text-field
                            id="complemento_requerente"
                            label="Complemento"
                            v-model="habilitacao.endereco.complemento"
                            box
                            clearable
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3 class="mx-3">
                          <v-text-field
                            id="bairro_requerente"
                            v-model="habilitacao.endereco.bairro"
                            label="Bairro"
                            box
                            clearable
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3>
                          <v-autocomplete
                            id="cidade_requerente"
                            box
                            label="Cidade*"
                            :items="selects.selectCidade"
                            item-value="value"
                            item-text="text"
                            v-model="habilitacao.endereco.cidade"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs2 class="ml-n12">
                          <v-autocomplete
                            class="mx-3"  
                            id="uf_requerente"
                            label="UF"
                            :items="selects.selectUF"
                            item-value="value"
                            item-text="text"
                            v-model="habilitacao.endereco.uf"
                            box
                          ></v-autocomplete>
                        </v-flex>
                      </v-layout>
                      <v-layout pl-5 pr-5>
                        <v-divider></v-divider>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs3>
                          <v-autocomplete
                            id="assinante"
                            box
                            label="Assinante*"
                            v-model="habilitacao.assinante"
                          ></v-autocomplete>
                        </v-flex>
                      </v-layout>
                    </div> 
                    <div v-if="variaveis.valid == false">
                      <v-layout row pt-3>
                      <v-flex xs4>
                        <v-text-field
                          id="nome_nubente"
                          label="Nome*"
                          v-model="habilitacao.nome_nubente"
                          append-icon="fa-pen"
                          disabled
                          box
                          clearable
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs4 class="mx-3">
                        <v-text-field
                          id="nome_de_casado"
                          v-model="habilitacao.nome_de_casado"
                          label="Nome de Casado*"
                          disabled
                          append-icon="fa-pen"
                          box
                          clearable
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs3>
                        <v-checkbox
                          class="text-xs-left"
                          label="Hipossuficiente"
                          v-model="habilitacao.status_primeiro_nubente"
                          value="Hipossuficiente"
                          color="blue"
                          disabled
                        ></v-checkbox>
                      </v-flex>
                      <v-flex xs2>
                        <v-checkbox
                          value="Assinatura a Rogo"
                          v-model="habilitacao.status_primeiro_nubente"
                          label="Assinatura a Rogo"
                          color="blue"
                          disabled
                        ></v-checkbox>
                      </v-flex>
                    </v-layout>
                    <v-layout row pt-4>
                      <v-flex xs4 >
                        <v-text-field
                          id="nome_mulher"
                          label="Nome*"
                          v-model="habilitacao.proximo_nome_nubente"
                          append-icon="fa-pen"
                          box
                          disabled
                          clearable
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs4 class="mx-3">
                        <v-text-field
                          id="nome_de_casado_mulher"
                          v-model="habilitacao.proximo_nome_de_casado"
                          label="Nome de Casado*"
                          append-icon="fa-pen"
                          box
                          disabled
                          clearable
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs3 class="">
                        <v-checkbox 
                          value="Hipossuficiente"
                          v-model="habilitacao.status_segundo_nubente"
                          label="Hipossuficiente"
                          color="blue"
                          disabled
                        ></v-checkbox>
                      </v-flex>
                      <v-flex xs2>
                        <v-checkbox
                          value="Assinatura a Rogo"
                          v-model="habilitacao.status_segundo_nubente"
                          color="blue"
                          disabled
                          label="Assinatura a Rogo"
                        ></v-checkbox>
                      </v-flex>
                    </v-layout>
                    <v-layout pl-5 pr-5>
                      <v-divider></v-divider>
                    </v-layout>
                    <div class="text-xs-center">
                      <v-card-text class="px-0">
                        <span class="subtitulos" >REQUERENTE</span>
                      </v-card-text>
                    </div>
                    <v-layout row pt-3>
                      <v-flex xs3 >
                        <v-radio-group disabled v-model="habilitacao.requerente" row>
                          <v-radio color="blue" label="Nubente" value="Nubente"></v-radio>
                          <v-radio color="blue" label="Outra Pessoa" value="Outra Pessoa"></v-radio>
                        </v-radio-group>
                      </v-flex>
                    </v-layout>
                    <v-layout row pt-3>
                      <v-flex xs5>
                        <v-autocomplete
                          label="Nome*"
                          box
                          v-model="habilitacao.nome_requerente"
                          :items="habilitacao.nome_nubente"
                          item-value="value"
                          item-text="text"
                          disabled
                          id="nome_requerente"
                        ></v-autocomplete>
                      </v-flex>
                      <v-flex xs3 class="mx-3">
                        <v-text-field
                          id="cpf_requerente"
                          box
                          disabled
                          v-model="habilitacao.cpf"
                          mask="###.###.###-##"
                          hint="Apenas Números"
                          label="CPF"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs2>
                        <v-text-field
                          id="cep_requerente"
                          v-model="habilitacao.endereco.cep"
                          box
                          disabled
                          clearable
                          mask="#####-##"
                          hint="Apenas Números"
                          label="CEP"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs4 class="mx-3">
                        <v-text-field
                          id="endereco_requerente"
                          v-model="habilitacao.endereco.lagradouro"
                          label="Endereço"
                          box
                          disabled
                          clearable
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs2>
                        <v-text-field
                          id="numero_requerente"
                          v-model="habilitacao.endereco.numero"
                          box
                          disabled
                          label="Numero*"
                          clearable
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row pt-3>
                      <v-flex xs2>
                        <v-text-field
                          id="complemento_requerente"
                          label="Complemento"
                          v-model="habilitacao.endereco.complemento"
                          box
                          disabled
                          clearable
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs3 class="mx-3">
                        <v-text-field
                          id="bairro_requerente"
                          v-model="habilitacao.endereco.bairro"
                          label="Bairro"
                          box
                          disabled
                          clearable
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs3>
                        <v-autocomplete
                          id="cidade_requerente"
                          box
                          disabled
                          label="Cidade*"
                          :items="selects.selectCidade"
                          item-value="value"
                          item-text="text"
                          v-model="habilitacao.endereco.cidade"
                        ></v-autocomplete>
                      </v-flex>
                      <v-flex xs2 class="ml-n12">
                        <v-autocomplete
                          class="mx-3"  
                          id="uf_requerente"
                          label="UF"
                          :items="selects.selectUF"
                          item-value="value"
                          item-text="text"
                          v-model="habilitacao.endereco.uf"
                          box
                          disabled
                        ></v-autocomplete>
                      </v-flex>
                    </v-layout>
                    <v-layout pl-5 pr-5>
                      <v-divider></v-divider>
                    </v-layout>
                    <v-layout pt-3>
                      <v-flex xs3>
                        Arquivos Anexados ({{variaveis.quantidadeAnexo}})
                      </v-flex>
                    </v-layout>
                    <v-layout pt-3>
                      <v-flex xs3>
                        <v-icon small >attachment</v-icon> {{anexo}}
                      </v-flex>
                    </v-layout>
                    <v-layout pt-4>
                      <v-flex xs3>
                        Nenhum Anexo de Solicitação encontrado.
                      </v-flex>
                    </v-layout>
                    <v-layout row pt-3>
                      <v-flex xs3>
                        <v-autocomplete
                          id="assinante"
                          box
                          disabled
                          label="Assinante*"
                          v-model="habilitacao.assinante"
                        ></v-autocomplete>
                      </v-flex>
                    </v-layout>
                    </div>
                  </v-tab-item>
                </v-tabs>

                <!-- Modal Editar cadastro ou pesquisar pessoa -->

                <div  v-if="variaveis.dialog && variaveis.valid == false">
                  <v-layout row pt-5 >
                    <v-dialog
                      v-model="variaveis.dialog "
                      persistent
                      max-width="600"
                    >
                      <v-card>
                        <v-card-text class="text-xs-center pt-5">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                          ut aliquip ex ea commodo consequat.
                        </v-card-text>
                        <v-card-action>
                          <div class="px-4">
                            <v-layout  pt-5 justify-center class="buttons">
                              <v-btn color="#2934FF" dark @click="editar" >
                              <v-icon class="px-2" small>
                                fa-pen
                              </v-icon>EDITAR CADASTRO</v-btn>
                              <v-btn color="#2934FF" flat @click="pesquisar_pessoa" > <v-icon class="px-2" small>fa-search</v-icon> 
                              PESQUISAR PESSOA</v-btn>
                            </v-layout>
                          </div>
                        </v-card-action>
                    </v-card>
                    </v-dialog>
                  </v-layout>
                </div>

                <v-layout row justify-center class="buttons">
                      <div v-if="variaveis.active < 2 && variaveis.valid">
                        <v-btn dark color="#2934FF" @click="next">PRÓXIMO PASSO</v-btn>
                      </div>
                      <div v-if="variaveis.active == 2 && variaveis.valid">
                        <v-btn dark color="#32C458" @click="incluir">INCLUIR REGISTRO</v-btn>
                      </div>
                      <div v-if="variaveis.valid == false ">
                        <v-btn dark color="#2934FF" @click="alterarRegistro">ALTERAR REGISTRO</v-btn> 
                        <v-btn @click="imprimir" flat><v-icon class="px-2" >print</v-icon>IMPRESSÕES</v-btn>
                      </div>
                    </v-layout>
              </v-container>
            </v-form>
          </template>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //Variáveis
      variaveis: {
        valid: false,
        active: 0,
        dialog: false
      },

      daje: {
        tipo: "isento",
        numero: "0000 0000 000000"
      },

      registro: {
        protocolo: "0000 0000 000000"
      },

      habilitacao: {
        //casamento
        data_peticao_inicial: null,
        data_emissao_edital: null,
        data_publicacao: null,
        tipo_casamento: null,
        regime_bens: null,
        local_casamento: null,
        uf: null,
        cidade: null,
        termo_edital: null,
        numero_livro: null,
        consentimento: null,
        mandado_justica: null,
        observacao_bens: null,

        //testemunhas
        testemunhas: [
          {
            rg: null,
            cpf: null,
            nome: null,
            estado_civil: null,
            profissao: null,
            local_nascimento: null,
            nacionalidade: null,
            endereco: {
              cep: null,
              cidade: null,
              uf: null,
              logradouro: null,
              numero: null,
              complemento: null
            }
          },
          
        ],
        

        //nubentes
        nome_nubente: null,
        nome_de_casado: null,
        proximo_nome_nubente: null,
        proximo_nome_de_casado: null,
        status_primeiro_nubente: null,
        status_segundo_nubente: null,
        requerente: null,
        nome_requerente: null,
        cpf: null,
        endereco:{
          cep: null,
          lagradouro: null,
          numero: null,
          complemento: null,
          bairro: null,
          cidade: null,
          uf: null,
        },
        assinante: null,
      },

      selects: {

        selectTipoCasamento: [
          {
            value: "civil",
            text: "Civil"
          },
          {
            value: "relgioso",
            text: "Religioso"
          },

        ],

        selectRegimeBens:[
          {
            value:"comunhão parcial de bens",
            text: "Comunhão Parcial de Bens"
          }
        ],

        selectUF:[
          'BA',
          'SP',
          'RJ',
        ],

        selectConsentimento:[
          {
            value: "sim",
            text: "Sim",
          },
          {
            value: "não",
            text: "Não",
          },
        ],

        selectmandado:[
          {
            value: "sim",
            text: "Sim",
          },
          {
            value: "não",
            text: "Não",
          },
        ],

        selectEstadoCivil:[
          {
            value: "casado",
            text: "Casado",
          },
        ],

        selectProfissao:[
          {
            value: "arquiteto",
            text: "Arquiteto",
          },
        ],

        selectNacionalidade:[
          {
            value: "brasileiro",
            text: "Brasileiro",
          },
        ],

        selectCidade: [
          {
            value: "salvador",
            text: "Salvador"
          }
        ]
      },

      //Breadcrumbs
      items: [
        {
          text: "Registros",
          disabled: true,
          href: "certidoes"
        },
        {
          text: "Casamento",
          disabled: false,
          href: "/casamento"
        },
        {
          text: "Habilitação",
          disabled: false,
          href: "/casamento/habilitacao"
        },
      ]
    };
  },
  created() {},
  methods: {
    next() {
      const active = parseInt(this.variaveis.active);
      this.variaveis.active = active < 2 ? active + 1 : active;
    },
    incluir() {
      alert("Incluir...");
      this.variaveis.valid = false;
      this.variaveis.active = 0;
      this.variaveis.dialog = false;
    },
    alterarRegistro(){
      this.variaveis.valid = true;
    },
    imprimir(){
      alert("Imprimindo...")
    },
    editar(){
      this.variaveis.dialog = false
      this.variaveis.valid = true
    },
    dialogo(){
      this.variaveis.dialog = true
    },
    pesquisar_pessoa(){
      alert('Pesquisando...')
      this.variaveis.dialog = false
    }

  }
};
</script>

<style scoped>
.titulos {
  font-size: 25px !important;
  color: black;
}
.subtitulos{
  font-size: 16px !important;
}
</style>