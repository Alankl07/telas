<template>
  <div>
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>chevron_right</v-icon>
      </template>
    </v-breadcrumbs>

    <v-card>
      <div class="text-xs-center px-3">
        <v-card-text class="px-0">
          <span class="titulos">Registro de Sentença de Emancipação</span>
        </v-card-text>
      </div>

      <v-layout row>
        <v-flex xs12 sm12>
          <template>
            <v-form ref="form" v-model="variaveis.valid" lazy-validation>
              <v-container pl-5 pr-5>
                <v-tabs v-model="variaveis.active" color="white" slider-color="#2934ff">
                  <v-tab>EMANCIPADO</v-tab>
                  <v-tab>FILIAÇÃO</v-tab>
                  <v-tab>DADOS TUTOR</v-tab>
                  <v-tab>ESCRITURA OU SENTENÇA</v-tab>
                  <v-tab>AVERBAÇÕES</v-tab>
                  <v-tab>OBSERVAÇÕES</v-tab>
                  <v-tab>IMPRIMIR</v-tab>

                  <!--TELA EMANCIPADO-->

                  <v-tab-item>
                    <div v-for="(emancipacao, i) in registro.emancipacao" :key="i">
                      <v-layout row pt-3>
                        <v-flex xs4>
                          <v-autocomplete
                            id="emancipacao_concedida_por"
                            label="Emancipação Concedida por:"
                            :items="selects.emancipacao_concedida_por"
                            item-value="value"
                            item-text="text"
                            box
                            v-model="emancipacao.emancipacao_concedida_por"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs5 class="px-3">
                          <v-text-field
                            id="nome"
                            label="Nome*"
                            box
                            :rules="verificacao"
                            append-icon="search"
                            v-model="emancipacao.nome"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3>
                          <v-autocomplete
                            id="sexo"
                            label="Sexo*"
                            box
                            :rules="verificacao"
                            :items="selects.sexo"
                            item-value="value"
                            item-text="text"
                            v-model="emancipacao.sexo"
                          ></v-autocomplete>
                        </v-flex>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs4>
                          <v-text-field
                            id="documento_identificacao"
                            label="Documento Identificação"
                            box
                            v-mode="emancipacao.documento_identificacao"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2 class="px-3">
                          <v-text-field
                            id="nascimento"
                            label="Nascimento"
                            box
                            prepend-inner-icon="event"
                            hint="Apenas Números"
                            mask="##/##/####"
                            v-model="emancipacao.nascimento"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs1>
                          <v-text-field id="idade" label="Idade" box v-model="emancipacao.idade"></v-text-field>
                        </v-flex>
                        <v-flex xs3 class="pl-3">
                          <v-autocomplete
                            id="profissao"
                            label="Profissão"
                            box
                            :items="selects.profissao"
                            item-value="value"
                            item-text="text"
                            v-model="emancipacao.profissao"
                          ></v-autocomplete>
                        </v-flex>
                      </v-layout>
                      <v-layout pl-5 pr-5>
                        <v-divider></v-divider>
                      </v-layout>
                      <div class="text-xs-center px-3">
                        <v-card-text>
                          <span>NATURALIDADE</span>
                        </v-card-text>
                      </div>
                      <v-layout row pt-3>
                        <v-flex xs3>
                          <v-autocomplete
                            id="país"
                            label="País"
                            box
                            :items="selects.país"
                            item-value="value"
                            item-text="text"
                            v-model="emancipacao.país"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3 class="px-3">
                          <v-autocomplete
                            id="estado"
                            label="Estado"
                            box
                            :items="selects.estado"
                            item-value="value"
                            item-text="text"
                            v-model="emancipacao.estado"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3>
                          <v-autocomplete
                            id="cidade"
                            label="Cidade"
                            box
                            :items="selects.cidade"
                            item-value="value"
                            item-text="text"
                            v-model="emancipacao.cidade"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs4 class="pl-3">
                          <v-text-field
                            id="local_nascimento"
                            label="Local de Nascimento"
                            box
                            v-model="emancipacao.local_nascimento"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <div class="text-xs-center pt-3">
                        <v-card-text>
                          <span>RESIDÊNCIA</span>
                        </v-card-text>
                      </div>
                      <v-layout row pt>
                        <v-flex xs4>
                          <v-text-field
                            id="endereco"
                            label="Endereço"
                            box
                            v-model="emancipacao.logradouro"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs1 class="px-3">
                          <v-text-field id="numero" label="Nº" box v-model="emancipacao.numero"></v-text-field>
                        </v-flex>
                        <v-flex xs2>
                          <v-text-field
                            id="complemento"
                            label="Complemento"
                            box
                            v-model="emancipacao.complemento"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2 class="px-3">
                          <v-text-field id="bairro" label="Bairro" box v-model="emancipacao.bairro"></v-text-field>
                        </v-flex>
                        <v-flex xs2>
                          <v-text-field
                            id="cep"
                            label="CEP"
                            box
                            hint="Apenas Números"
                            mask="#####-###"
                            v-model="emancipacao.cep"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                    </div>
                  </v-tab-item>
                  <v-tab-item>
                    <div v-for="(filiacao, i) in registro.filiacao_pai" :key="i">
                      <v-layout row pt-3>
                        <v-breadcrumbs :items="items">
                          <span class="titulos">1ª PARTE FILIAÇÃO</span>
                          <v-icon color="#2934FF">chevron_right</v-icon>
                        </v-breadcrumbs>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs4>
                          <v-text-field
                            id="nome_pai"
                            label="Nome do Pai"
                            box
                            append-icon="serach"
                            v-model="filiacao.nome_pai"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3 class="pl-3">
                          <v-autocomplete
                            id="profissao_1"
                            label="Profissão*"
                            box
                            :items="selects.profissao"
                            item-value="value"
                            item-text="text"
                            :rules="verificacao"
                            v-model="filiacao.profissao"
                          ></v-autocomplete>
                        </v-flex>
                      </v-layout>
                      <v-layout pl-5 pr-5>
                        <v-divider></v-divider>
                      </v-layout>
                      <div class="text-xs-center px-3">
                        <v-card-text>
                          <span>NATURALIDADE</span>
                        </v-card-text>
                      </div>
                      <v-layout row pt-3>
                        <v-flex xs3>
                          <v-autocomplete
                            id="país_nascimento_1"
                            label="País de Nascimento"
                            box
                            :items="selects.país"
                            item-value="value"
                            item-text="text"
                            v-model="filiacao.país_nascimento"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3 class="px-3">
                          <v-autocomplete
                            id="estado_nascimento_1"
                            label="Estado de Nascimento"
                            box
                            :items="selects.estado"
                            item-value="value"
                            item-text="text"
                            v-model="filiacao.estado_nascimento"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3>
                          <v-autocomplete
                            id="cidade_nascimento_1"
                            label="Cidade do Nascimento"
                            box
                            :items="selects.cidade"
                            item-value="value"
                            item-text="text"
                            v-model="filiacao.cidade_nascimento"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs4 class="pl-3">
                          <v-text-field
                            id="local_nascimento_1"
                            label="Local de Nascimento"
                            box
                            v-model="filiacao.local_nascimento"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout pl-5 pr-5>
                        <v-divider></v-divider>
                      </v-layout>
                      <div class="text-xs-center px-3">
                        <v-card-text>
                          <span>PROGÊNIE</span>
                        </v-card-text>
                      </div>
                      <v-layout row pt-3>
                        <v-flex xs4>
                          <v-text-field
                            id="nome_avô_1"
                            label="Nome do Avô"
                            box
                            v-model="filiacao.nome_avô"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs4 class="pl-3">
                          <v-text-field
                            id="nome_avó_1"
                            label="Nome da Avó"
                            box
                            v-model="filiacao.nome_avó"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                    </div>

                    <div v-for="(filiacao, i) in registro.filiacao_mae" :key="i">
                      <v-layout row pt-3>
                        <v-breadcrumbs :items="items">
                          <span class="titulos">2ª PARTE FILIAÇÃO</span>
                          <v-icon color="#2934FF">chevron_right</v-icon>
                        </v-breadcrumbs>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs4>
                          <v-text-field
                            id="nome_mae"
                            label="Nome do Mãe"
                            box
                            append-icon="serach"
                            v-model="filiacao.nome_pai"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3 class="pl-3">
                          <v-autocomplete
                            id="profissao_2"
                            label="Profissão*"
                            box
                            :items="selects.profissao"
                            item-value="value"
                            item-text="text"
                            :rules="verificacao"
                            v-model="filiacao.profissao"
                          ></v-autocomplete>
                        </v-flex>
                      </v-layout>
                      <v-layout pl-5 pr-5>
                        <v-divider></v-divider>
                      </v-layout>
                      <div class="text-xs-center px-3">
                        <v-card-text>
                          <span>NATURALIDADE</span>
                        </v-card-text>
                      </div>
                      <v-layout row pt-3>
                        <v-flex xs3>
                          <v-autocomplete
                            id="país_nascimento_2"
                            label="País de Nascimento"
                            box
                            :items="selects.país"
                            item-value="value"
                            item-text="text"
                            v-model="filiacao.país_nascimento"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3 class="px-3">
                          <v-autocomplete
                            id="estado_nascimento_2"
                            label="Estado de Nascimento"
                            box
                            :items="selects.estado"
                            item-value="value"
                            item-text="text"
                            v-model="filiacao.estado_nascimento"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3>
                          <v-autocomplete
                            id="cidade_nascimento_2"
                            label="Cidade do Nascimento"
                            box
                            :items="selects.cidade"
                            item-value="value"
                            item-text="text"
                            v-model="filiacao.cidade_nascimento"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs4 class="pl-3">
                          <v-text-field
                            id="local_nascimento_2"
                            label="Local de Nascimento"
                            box
                            v-model="filiacao.local_nascimento"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout pl-5 pr-5>
                        <v-divider></v-divider>
                      </v-layout>
                      <div class="text-xs-center px-3">
                        <v-card-text>
                          <span>PROGÊNIE</span>
                        </v-card-text>
                      </div>
                      <v-layout row pt-3>
                        <v-flex xs4>
                          <v-text-field
                            id="nome_avô_2"
                            label="Nome do Avô"
                            box
                            v-model="filiacao.nome_avô"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs4 class="pl-3">
                          <v-text-field
                            id="nome_avó_2"
                            label="Nome da Avó"
                            box
                            v-model="filiacao.nome_avó"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                    </div>
                  </v-tab-item>

                  <!--TELA DADOS TUTOR-->

                  <v-tab-item>
                    <div v-for="(tutor, i) in registro.dados_tutor" :key="i">
                        <v-layout row pt-3>
                            <v-flex xs4>
                                <v-text-field
                                    id="nome"
                                    label="Nome*"
                                    box
                                    append-icon="search"
                                    :rules="verificacao"
                                    v-model="tutor.nome"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs3 class="px-3">
                                <v-autocomplete
                                    id="sexo"
                                    label="Sexo*"
                                    box
                                    :rules="verificacao"
                                    :items="selects.sexo"
                                    item-value="value"
                                    item-text="text"
                                    v-model="tutor.sexo"
                                ></v-autocomplete>
                            </v-flex>
                            <v-flex xs3>
                                <v-text-field
                                    id="documento_identificacao"
                                    label="Documento Identificação"
                                    box
                                    v-model="tutor.documento_identificacao"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs3 class="px-3">
                                <v-text-field
                                    id="cpf"
                                    label="CPF"
                                    box
                                    mask="###.###.###-##"
                                    hint="Apenas Números"
                                    v-model="tutor.cpf"
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row pt-3>
                            <v-flex xs3>
                                <v-autocomplete
                                    id="estado_civil"
                                    label="Estado Civil"
                                    box
                                    :items="selects.estado_civil"
                                    item-value="value"
                                    item-text="text"
                                    v-model="tutor.estado_civil"
                                ></v-autocomplete>
                            </v-flex>
                            <v-flex xs3 class="pl-3">
                                <v-autocomplete
                                    id="profissao"
                                    label="Profissão"
                                    box
                                    :items="selects.profissao"
                                    item-value="value"
                                    item-text="text"
                                    v-model="tutor.profissao"
                                ></v-autocomplete>
                            </v-flex>
                        </v-layout>
                        <v-layout pl-5 pr-5>
                            <v-divider></v-divider>
                        </v-layout>
                        <div class="text-xs-center pt-3">
                            <v-card-text>
                                <span>NATURALIDADE</span>
                            </v-card-text>
                        </div>
                        <v-layout row pt-3>
                            <v-flex xs3>
                                <v-autocomplete
                                    id="país"
                                    label="País"
                                    box
                                    :items="selects.país"
                                    item-value="value"
                                    item-text="text"
                                    v-model="tutor.país"
                                ></v-autocomplete>
                            </v-flex>
                            <v-flex xs3 class="px-3">
                                <v-autocomplete
                                    id="estado"
                                    label="Estado"
                                    box
                                    :items="selects.estado"
                                    item-value="value"
                                    item-text="text"
                                    v-model="tutor.estado"
                                ></v-autocomplete>
                            </v-flex>
                            <v-flex xs3>
                                <v-autocomplete
                                    id="cidade"
                                    label="Cidade"
                                    box
                                    :items="selects.cidade"
                                    item-value="value"
                                    item-text="text"
                                    v-model="tutor.cidade"
                                ></v-autocomplete>
                            </v-flex>
                            <v-flex xs4 class="pl-3">
                                <v-text-field
                                    id="local_nascimento"
                                    label="Local de Nascimento"
                                    box
                                    v-model="tutor.local_nascimento"
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <div class="text-xs-center pt-3">
                            <v-card-text>
                                <span>RESIDÊNCIA</span>
                            </v-card-text>
                        </div>
                        <v-layout row pt-3>
                            <v-flex xs4>
                                <v-text-field
                                    id="endereco"
                                    label="Endereço"
                                    box
                                    v-model="tutor.logradouro"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs1 class="px-3">
                                <v-text-field
                                    id="numero"
                                    label="Nº"
                                    box
                                    v-model="tutor.numero"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs3>
                                <v-text-field
                                    id="complemento"
                                    label="Complemento"
                                    box
                                    v-model="tutor.complemento"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs3 class="px-3">
                                <v-text-field
                                    id="bairro"
                                    label="Bairro"
                                    box
                                    v-model="tutor.bairro"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs2>
                                <v-text-field
                                    id="cep"
                                    label="Cep"
                                    box
                                    hint="Apenas Números"
                                    mask="#####-###"
                                    v-model="tutor.cep"
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                    </div>
                  </v-tab-item>

                  <!--TELA ESCRITURA OU SENTENÇA-->

                  <v-tab-item>
                    <v-radio-group v-model="variaveis.opcao" row>
                      <v-radio color="#2934FF" label="Dados da Escritura" value="Escritura"></v-radio>
                      <v-radio color="#2934FF" label="Dados da Sentença" value="Sentença"></v-radio>
                    </v-radio-group>
                    <div v-if="variaveis.opcao == 'Escritura'">
                      <div v-for="(escritura, i) in registro.escritura" :key="i">
                        <v-layout row pt-3>
                          <v-flex xs3>
                            <v-text-field
                              id="data_escritura"
                              label="Data Escritura*"
                              box
                              prepend-inner-icon="event"
                              :rules="verificacao"
                              hint="Apenas Número"
                              mask="##/##/####"
                              v-model="escritura.data_escritura"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs3 class="px-3">
                            <v-text-field
                              id="serventia"
                              label="Serventia*"
                              box
                              :rules="verificacao"
                              v-model="escritura.serventia"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs2>
                            <v-text-field
                              id="livro"
                              label="Livro*"
                              box
                              :rules="verificacao"
                              v-model="escritura.livro"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs2 class="pl-3">
                            <v-text-field
                              id="folha"
                              label="Folha*"
                              box
                              :rules="verificacao"
                              v-model="escritura.folha"
                            ></v-text-field>
                          </v-flex>
                        </v-layout>
                        <v-layout row pt-3>
                          <v-flex xs5>
                            <v-text-field
                              id="tabeliao"
                              label="Tabelião*"
                              box
                              :rules="verificacao"
                              v-model="escritura.tabeliao"
                            ></v-text-field>
                          </v-flex>
                        </v-layout>
                      </div>
                    </div>
                    <div v-if="variaveis.opcao == 'Sentença'">
                      <div v-for="(sentenca, i) in registro.sentenca" :key="i">
                        <v-layout row pt-3>
                          <v-flex xs4>
                            <v-text-field
                              id="nome_promotor"
                              label="Nome do Promotor"
                              box
                              v-model="sentenca.nome_promotor"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs2 class="px-3">
                              <v-text-field
                                id="data_sentenca"
                                label="Data Sentença*"
                                box
                                prepend-inner-icon="event"
                                :rules="verificacao"
                                mask="##/##/####"
                                hint="Apenas Números"
                                v-model="sentenca.data_sentenca"
                              ></v-text-field>
                          </v-flex>
                          <v-flex xs3>
                              <v-text-field
                                id="data_transito_julgado"
                                label="Data Trânsito Julgado*"
                                box
                                prepend-inner-icon="event"
                                :rules="verificacao"
                                mask="##/##/####"
                                hint="Apenas Números"
                                v-model="sentenca.data_transito_julgado"
                              ></v-text-field>
                          </v-flex>
                          <v-flex xs2 class="pl-3">
                              <v-text-field
                                id="data_mandado"
                                label="Data mandado*"
                                box
                                prepend-inner-icon="event"
                                mask="##/##/####"
                                hint="Apenas Números"
                                v-model="sentenca.data_mandato"
                              ></v-text-field>
                          </v-flex>
                        </v-layout>
                        <v-layout row pt-3>
                            <v-flex xs4>
                                <v-text-field
                                    id="processado_juizo"
                                    label="Processado no Juízo(Comarca)*"
                                    box
                                    :rules="verificacao"
                                    v-model="sentenca.processado_juizo"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs4 class="pl-3">
                                <v-text-field
                                    id="juiz_autor_mandato"
                                    label="Juiz Autor do Mandado*"
                                    box
                                    :rules="verificacao"
                                    v-model="sentenca.juiz_autor_mandado"
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row pt-3>
                            <v-flex xs4>
                                <v-text-field
                                    id="juiz_proferiu_sentenca"
                                    label="Juiz que Proferiu a Sentença*"
                                    box
                                    :rules="verificacao"
                                    v-model="sentenca.juiz_proferiu_sentenca"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs4 class="pl-3">
                                <v-text-field
                                    id="autos"
                                    label="Autos*"
                                    box
                                    :rules="verificacao"
                                    v-model="sentenca.autos"
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                      </div>
                    </div>
                  </v-tab-item>

                  <!--TELA AVERBAÇÕES-->

                  <v-tab-item>
                    <div v-for="(averbacoes, i) in registro.averbacoes" :key="i">
                      <v-layout row pt-3>
                        <v-flex>
                          <v-textarea
                            id="texto_averbacoes"
                            label="Texto de Averbações"
                            box
                            v-model="averbacoes.texto_averbacoes"
                          ></v-textarea>
                        </v-flex>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex>
                          <v-textarea
                            id="historico_averbacoes"
                            label="Histórico de Averbações"
                            box
                            v-model="averbacoes.historico_averbacoes"
                          ></v-textarea>
                        </v-flex>
                      </v-layout>
                    </div>
                  </v-tab-item>

                  <!--TELA OBSERVAÇÕES-->

                  <v-tab-item>
                    <div v-for="(observacoes, i) in registro.observacoes" :key="i">
                      <v-layout>
                        <v-flex>
                          <v-textarea
                            id="texto_observacoes"
                            label="Texto das Observações"
                            box
                            v-model="observacoes.texto_observacoes"
                          ></v-textarea>
                        </v-flex>
                      </v-layout>
                    </div>
                  </v-tab-item>

                  <!--TELA IMPRIMIR-->

                  <v-tab-item>
                    <div v-for="(imprimir, i ) in registro.imprimir" :key="i">
                      <v-layout row pt-3>
                        <v-flex xs2>
                          <v-autocomplete
                            id="assinante"
                            label="Assinante"
                            box
                            :items="registro.nome"
                            item-value="value"
                            item-text="text"
                            v-model="imprimir.assinante"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3 class="pl-3">
                          <v-autocomplete
                            id="cidade"
                            label="Cidade"
                            box
                            :items="selects.cidade"
                            item-value="value"
                            item-text="text"
                            v-model="imprimir.cidade"
                          ></v-autocomplete>
                        </v-flex>
                      </v-layout>
                    </div>
                  </v-tab-item>
                </v-tabs>
                <v-layout row justify-center class="buttons">
                  <div v-if="variaveis.active < 6">
                    <v-btn @click="next" color="#2934FF" dark>PRÓXIMO PASSO</v-btn>
                  </div>
                  <div v-if="variaveis.active == 6">
                    <v-btn @click="imprimir" dark color="#2934FF" :loading="variaveis.loading">
                      <v-icon small class="px-1">print</v-icon>IMPRESSÕES
                    </v-btn>
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


<script src="../../../assets/scripts/livro_e/sentenca_emancipacao.js"></script>