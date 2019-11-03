<template>
  <div>
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>chevron_right</v-icon>
      </template>
    </v-breadcrumbs>

    <v-card>
      <div class="text-xs-center px-3">
        <v-card-text>
          <span class="titulos">Registro de Traslado de Casamento</span>
        </v-card-text>
      </div>

      <v-layout row>
        <v-flex xs12 sm12>
          <template>
            <v-form ref="form" v-model="variaveis.valid" lazy-validation>
              <v-container pl-5 pr-5>
                <v-tabs v-model="variaveis.active" color="white" slider-color="#2934FF">
                  <v-tab>CASAMENTO</v-tab>
                  <v-tab>CERTIDÃO ORIGINAL</v-tab>
                  <v-tab>NUBENTES</v-tab>
                  <v-tab>TRADUÇÃO</v-tab>
                  <v-tab>AVERBAÇÕES</v-tab>
                  <v-tab>OBSERVAÇÕES</v-tab>
                  <v-tab>IMPRIMIR</v-tab>

                  <!--TELA CASAMENTO-->

                  <v-tab-item>
                    <div v-for="(casamento, i) in registro.casamento" :key="i">
                      <v-layout row pt-3>
                        <v-flex xs2>
                          <v-text-field
                            id="data_casamento"
                            label="Data Casamento*"
                            box
                            prepend-inner-icon="event"
                            :rules="verificacao"
                            hint="Apenas Números"
                            mask="##/##/####"
                            v-model="casamento.data_casamento"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs4 class="px-3">
                          <v-text-field
                            id="local_casamento"
                            label="Local do Casamento"
                            box
                            v-model="casamento.local_casamento"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs4>
                          <v-text-field
                            id="celebrante"
                            label="Celebrante(Padre/Juiz)"
                            box
                            v-model="casamento.celebrante"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs3>
                          <v-autocomplete
                            id="regime_bens"
                            label="Regime de Bens"
                            box
                            :items="selects.regime_bens"
                            item-value="value"
                            item-text="text"
                            v-model="casamento.regime_bens"
                          ></v-autocomplete>
                        </v-flex>
                      </v-layout>
                    </div>
                  </v-tab-item>

                  <!--TELA CERTIDÃO ORIGINAL-->

                  <v-tab-item>
                      <div v-for="(certidao, i) in registro.certidao_original" :key="i">
                          <v-layout row pt-3>
                              <v-flex>
                                  <v-textarea
                                    id="certidao_original"
                                    label="Certidão Original"
                                    box
                                    v-model="certidao.certidao_original"
                                  ></v-textarea>
                              </v-flex>
                          </v-layout>
                      </div>
                  </v-tab-item>

                  <!--TELA NUBENTES-->

                  <v-tab-item>
                    <div v-for="(nubente, i) in registro.nubente_1" :key="i">
                      <v-layout row pt-3>
                        <v-breadcrumbs :items="items">
                          <span class="titulos">1ª NUBENTE</span>
                          <v-icon color="#2934FF">chevron_right</v-icon>
                        </v-breadcrumbs>
                      </v-layout>
                      <v-layout row pr-3>
                        <v-flex xs4>
                          <v-text-field
                            id="nome_1"
                            label="Nome*"
                            box
                            :rules="verificacao"
                            append-icon="search"
                            v-model="nubente.nome"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3 class="px-3">
                          <v-autocomplete
                            id="profissao_1"
                            label="Profissão*"
                            box
                            :rules="verificacao"
                            :items="selects.profissao"
                            item-text="text"
                            item-value="value"
                            v-model="nubente.profissao"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3>
                          <v-autocomplete
                            id="estado_civio_anterior_1"
                            label="Estado Civil Anterior"
                            box
                            :items="selects.estado_civil"
                            item-value="value"
                            item-text="text"
                            v-model="nubente.estado_civil_anterior"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3 class="px-3">
                          <v-text-field
                            id="nascimento_1"
                            label="Nascimento"
                            box
                            mask="##/##/####"
                            hint="Apenas Números"
                            prepend-inner-icon="event"
                            v-model="nubente.nascimento"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2>
                          <v-text-field
                            id="idade_1"
                            label="Idade"
                            box
                            v-model="nubente.idade"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs5>
                          <v-text-field
                            id="nome_adotado_1"
                            label="Nome Adotado"
                            box
                            v-model="nubente.nome_adotado"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout pl-5 pr-5>
                        <v-divider></v-divider>
                      </v-layout>
                      <div class="text-xs-center pt-3">
                        <v-card-text>
                          <span>FILIAÇÃO</span>
                        </v-card-text>
                      </div>
                      <v-layout row pt-3>
                        <v-flex xs5>
                          <v-text-field
                            id="nome_pai_1"
                            label="Nome do Pai"
                            box
                            v-model="nubente.nome_pai"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs5 class="pl-3">
                          <v-text-field
                            id="nome_mae_1"
                            label="Nome Mãe"
                            box
                            v-model="nubente.nome_mae"
                          ></v-text-field>
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
                            id="país_nascimento_1"
                            label="País de Nascimento"
                            box
                            :items="selects.país"
                            item-value="value"
                            item-text="text"
                            v-model="nubente.país_nascimento"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3 class="px-3">
                          <v-autocomplete
                            id="estado_nascimento_1"
                            label="Estado de Nascimento"
                            box
                            :items="selects.estado"
                            item-text="text"
                            item-value="value"
                            v-model="nubente.estado_nascimento"
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
                            v-model="nubente.cidade_nascimento"
                          ></v-autocomplete>
                        </v-flex>
                      </v-layout>
                      <v-layout pr-5 pl-5>
                        <v-divider></v-divider>
                      </v-layout>
                      <div class="text-xs-center pt-3">
                        <v-card-text>
                          <span>RESIDÊNCIA</span>
                        </v-card-text>
                      </div>
                      <v-layout row pt-3>
                        <v-flex xs4>
                          <v-text-field
                            id="logradouro_1"
                            label="Endereço"
                            box
                            v-model="nubente.logradouro"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2 class="px-3">
                          <v-text-field
                            id="numero_1"
                            label="Nº"
                            box
                            v-model="nubente.numero"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3>
                          <v-text-field
                            id="complemento_1"
                            label="Complemento"
                            box
                            v-model="nubente.complemento"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3 class="px-3">
                          <v-text-field
                            id="bairro_1"
                            label="Bairro"
                            box
                            v-model="nubente.bairro"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2>
                          <v-text-field
                            id="cep_1"
                            label="CEP"
                            box
                            hint="Apenas Números"
                            mask="#####-###"
                            v-model="nubente.cep"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                    </div>

                    <div v-for="(nubente, i) in registro.nubente_2" :key="i">
                      <v-layout row pt-3>
                        <v-breadcrumbs :items="items">
                          <span class="titulos">2ª NUBENTE</span>
                          <v-icon color="#2934FF">chevron_right</v-icon>
                        </v-breadcrumbs>
                      </v-layout>
                      <v-layout row pr-3>
                        <v-flex xs4>
                          <v-text-field
                            id="nome_2"
                            label="Nome*"
                            box
                            :rules="verificacao"
                            append-icon="search"
                            v-model="nubente.nome"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3 class="px-3">
                          <v-autocomplete
                            id="profissao_2"
                            label="Profissão*"
                            box
                            :rules="verificacao"
                            :items="selects.profissao"
                            item-text="text"
                            item-value="value"
                            v-model="nubente.profissao"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3>
                          <v-autocomplete
                            id="estado_civio_anterior_2"
                            label="Estado Civil Anterior"
                            box
                            :items="selects.estado_civil"
                            item-value="value"
                            item-text="text"
                            v-model="nubente.estado_civil_anterior"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3 class="px-3">
                          <v-text-field
                            id="nascimento_2"
                            label="Nascimento"
                            box
                            mask="##/##/####"
                            hint="Apenas Números"
                            prepend-inner-icon="event"
                            v-model="nubente.nascimento"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2>
                          <v-text-field
                            id="idade_2"
                            label="Idade"
                            box
                            v-model="nubente.idade"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs5>
                          <v-text-field
                            id="nome_adotado_2"
                            label="Nome Adotado"
                            box
                            v-model="nubente.nome_adotado"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout pl-5 pr-5>
                        <v-divider></v-divider>
                      </v-layout>
                      <div class="text-xs-center pt-3">
                        <v-card-text>
                          <span>FILIAÇÃO</span>
                        </v-card-text>
                      </div>
                      <v-layout row pt-3>
                        <v-flex xs5>
                          <v-text-field
                            id="nome_pai_2"
                            label="Nome do Pai"
                            box
                            v-model="nubente.nome_pai"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs5 class="pl-3">
                          <v-text-field
                            id="nome_mae_2"
                            label="Nome Mãe"
                            box
                            v-model="nubente.nome_mae"
                          ></v-text-field>
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
                            id="país_nascimento_2"
                            label="País de Nascimento"
                            box
                            :items="selects.país"
                            item-value="value"
                            item-text="text"
                            v-model="nubente.país_nascimento"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3 class="px-3">
                          <v-autocomplete
                            id="estado_nascimento_2"
                            label="Estado de Nascimento"
                            box
                            :items="selects.estado"
                            item-text="text"
                            item-value="value"
                            v-model="nubente.estado_nascimento"
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
                            v-model="nubente.cidade_nascimento"
                          ></v-autocomplete>
                        </v-flex>
                      </v-layout>
                      <v-layout pr-5 pl-5>
                        <v-divider></v-divider>
                      </v-layout>
                      <div class="text-xs-center pt-3">
                        <v-card-text>
                          <span>RESIDÊNCIA</span>
                        </v-card-text>
                      </div>
                      <v-layout row pt-3>
                        <v-flex xs4>
                          <v-text-field
                            id="logradouro_2"
                            label="Endereço"
                            box
                            v-model="nubente.logradouro"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2 class="px-3">
                          <v-text-field
                            id="numero_2"
                            label="Nº"
                            box
                            v-model="nubente.numero"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3>
                          <v-text-field
                            id="complemento_2"
                            label="Complemento"
                            box
                            v-model="nubente.complemento"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3 class="px-3">
                          <v-text-field
                            id="bairro_2"
                            label="Bairro"
                            box
                            v-model="nubente.bairro"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2>
                          <v-text-field
                            id="cep_2"
                            label="CEP"
                            box
                            hint="Apenas Números"
                            mask="#####-###"
                            v-model="nubente.cep"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                    </div>
                  </v-tab-item>

                  <!--TELA TRADUÇÃO-->

                  <v-tab-item>
                    <div v-for="(traducao, i) in registro.traducao" :key="i">
                      <v-layout>
                        <v-checkbox
                          id="certidao_original_traduzida"
                          label="Certidão Original Traduzida"
                          value="Certidão Original Traduzida"
                          color="blue"
                          v-model="traducao.certidao_original_traduzida"
                        ></v-checkbox>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs3>
                          <v-text-field
                            id="idioma_original"
                            label="Idioma Original"
                            box
                            v-model="traducao.idioma_original"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs4 class="px-3">
                          <v-text-field
                            id="nome_tradutor"
                            label="Nomde do Tradutor"
                            box
                            v-model="traducao.nome_tradutor"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3>
                          <v-text-field
                            id="tradutor_publico"
                            label="Tradutor Publico Em"
                            box
                            v-model="traducao.tradutor_publico"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3 class="pl-3">
                          <v-text-field
                            id="data_traducao"
                            label="Data Tradução"
                            box
                            prepend-inner-icon="event"
                            hint="Apenas Números"
                            mask="##/##/####"
                            v-model="traducao.data_traducao"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout pl-5 pr-5 pt-3>
                        <v-divider></v-divider>
                      </v-layout>
                      <div class="text-xs-center pt-3">
                        <v-card-text class="px-0">
                          <span>REGISTRO NO RTD</span>
                        </v-card-text>
                      </div>
                      <v-layout row pt-3>
                        <v-flex xs2>
                          <v-text-field
                            id="data"
                            label="Data"
                            box
                            hint="Apenas Números"
                            mask="##/##/####"
                            v-model="traducao.data"
                            prepend-inner-icon="event"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3 class="px-3">
                          <v-text-field
                            id="serventia"
                            label="Serventia"
                            box
                            v-model="traducao.serventia"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2>
                          <v-text-field
                            id="livro"
                            label="Livro"
                            box
                            v-model="traducao.livro"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2 class="px-3">
                          <v-text-field
                            id="numero_livro"
                            label="N° Livro"
                            box
                            v-model="traducao.numero_livro"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2>
                          <v-text-field
                            id="folha"
                            label="Folha"
                            box
                            v-model="traducao.folha"
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

<script src="../../../assets/scripts/livro_e/registro_traslado_casamento.js"></script>