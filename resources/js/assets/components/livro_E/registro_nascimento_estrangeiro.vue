<template>
  <div>
    <v-breadcrumbs :items="item">
      <template v-slot:divider>
        <v-icon>chevron_right</v-icon>
      </template>
    </v-breadcrumbs>

    <v-card>
      <div class="text-xs-center px-3">
        <v-card-text class="px-0">
          <span class="titulos">Registro de Nascimento de Estrangeiro</span>
        </v-card-text>
      </div>

      <v-layout row>
        <v-flex xs12 sm12>
          <template>
            <v-form ref="form" v-model="variaveis.valid" lazy-validation>
              <v-container pl-5 pr-5>
                <v-tabs v-model="variaveis.active" color="white" slider-color="#2934FF">
                  <v-tab>NASCIMENTO</v-tab>
                  <v-tab>FILIAÇÃO</v-tab>
                  <v-tab>DECLARANTE</v-tab>
                  <v-tab>AVERBAÇÕES</v-tab>
                  <v-tab>OBSERVAÇÕES</v-tab>
                  <v-tab>IMPRIMIR</v-tab>

                  <!--TELA NASCIMENTO-->

                  <v-tab-item>
                    <div v-for="(nascimento, i) in registro.nascimento" :key="i">
                      <v-layout row pt-3>
                        <v-flex xs4>
                          <v-text-field
                            id="nome"
                            label="Nome*"
                            box
                            :rules="verificacao"
                            append-icon="search"
                            v-model="nascimento.nome"
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
                            v-model="nascimento.sexo"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3>
                          <v-text-field
                            id="nascimento"
                            label="Nascimento"
                            box
                            hint="Apenas Números"
                            mask="##/##/####"
                            prepend-inner-icon="event"
                            v-model="nascimento.nascimento"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2 class="px-3">
                          <v-text-field
                            id="hora"
                            label="Hora"
                            box
                            prepend-inner-icon="fas fa-clock"
                            hint="Apenas Números"
                            mask="##:##"
                            v-model="nascimento.hora"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2>
                          <v-autocomplete
                            id="gemeo"
                            label="Gêmeo"
                            box
                            :items="selects.gemeo"
                            item-value="value"
                            item-text="text"
                            v-model="nascimento.gemeo"
                          ></v-autocomplete>
                        </v-flex>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs3>
                          <v-text-field
                            id="numero_declaracao"
                            label="Nº Declaração"
                            box
                            v-model="nascimento.numero_declaracao"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <div class="text-xs-center px-3">
                        <v-card-text>
                          <span>NASCIMENTO</span>
                        </v-card-text>
                      </div>
                      <v-layout row pt-3>
                        <v-flex xs3>
                          <v-autocomplete
                            id="país"
                            label="País"
                            box
                            :items="selects.país"
                            item-text="text"
                            item-value="value"
                            v-model="nascimento.país"
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
                            v-model="nascimento.estado"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3>
                          <v-autocomplete
                            id="cidade"
                            label="Cidade"
                            box
                            :items="selects.cidade"
                            item-text="text"
                            item-value="value"
                            v-model="nascimento.cidade"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs4 class="pl-3">
                          <v-text-field
                            id="local_nascimento"
                            label="Local de Nascimento"
                            box
                            v-model="nascimento.local_nascimento"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                    </div>
                  </v-tab-item>

                  <!--TELA FILIAÇÃO-->

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

                  <!--TELA DECLARANTE-->

                  <v-tab-item>
                    <div v-for="(declarante, i) in registro.declarante" :key="i">
                      <v-radio-group v-model="declarante.opcao" row>
                        <v-radio 
                          color="#2934FF" 
                          label="Pai" 
                          value="Pai"
                        ></v-radio>
                        <v-radio 
                          color="#2934FF" 
                          label="Mãe" 
                          value="Mãe"
                        ></v-radio>
                        <v-radio 
                          color="#2934FF" 
                          label="Própria Pessoa" 
                          value="Própria Pessoa"
                        ></v-radio>
                        <v-radio 
                          color="#2934FF" 
                          label="Outra Pessoa"  
                          value="Outra Pessoa"
                        ></v-radio>
                      </v-radio-group>
                      <v-layout row pt-3>
                        <v-flex xs4>
                          <v-text-field
                            id="nome"
                            label="Nome"
                            box
                            v-model="declarante.nome"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs4 class="px-3">
                          <v-text-field
                            id="documento"
                            label="Documento"
                            box
                            v-model="declarante.documento"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs4>
                          <v-autocomplete
                            id="estado_civil"
                            label="Estado Civil"
                            box
                            :items="selects.estado_civil"
                            item-value="value"
                            item-text="text"
                            v-model="declarante.estado_civil"
                          ></v-autocomplete>
                        </v-flex>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs3>
                          <v-autocomplete
                            id="profissao"
                            label="Profissão"
                            box
                            :items="selects.profissao"
                            item-value="value"
                            item-text="text"
                            v-model="declarante.profissao"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3 class="pl-3">
                          <v-text-field
                            id="telefone"
                            label="Telefone(s)"
                            box
                            v-model="declarante.telefone"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout pl-5 pr-5>
                        <v-divider></v-divider>
                      </v-layout>
                      <div class="text-xs-center pt-3">
                        <v-card-text>
                          <span>NASCIMENTO</span>
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
                            v-model="declarante.país"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3 class="px-3">
                          <v-autocomplete
                            id="estado"
                            label="Estado"
                            box
                            :items="selects.estado"
                            item-text="text"
                            item-value="value"
                            v-model="declarante.estado"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3>
                          <v-autocomplete
                            id="cidade"
                            label="Cidade"
                            box
                            :items="selects.cidade"
                            item-text="text"
                            item-value="value"
                            v-model="declarante.cidade"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs4 class="pl-3">
                          <v-text-field
                            id="local_nascimento"
                            label="Local de Nascimento"
                            box
                            v-model="declarante.local_nascimento"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
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
                  <div v-if="variaveis.active < 5">
                    <v-btn @click="next" color="#2934FF" dark>PRÓXIMO PASSO</v-btn>
                  </div>
                  <div v-if="variaveis.active == 5">
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

<script src="../../../assets/scripts/livro_e/registro_nascimento_estrangeiro.js"></script>