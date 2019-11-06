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
          <span class="titulos">Registro de Sentença de Divórcio</span>
        </v-card-text>
      </div>

      <v-layout row>
        <v-flex xs12 sm12>
          <template>
            <v-form ref="form" v-model="variaveis.valid" lazy-validation>
              <v-container pl-5 pr-5>
                <v-tabs v-model="variaveis.active" color="white" slider-color="#2934FF">
                  <v-tab>DADOS DO CASAMENTO</v-tab>
                  <v-tab>DIVORCIANTES</v-tab>
                  <v-tab>ESCRITURA OU SENTENÇA</v-tab>
                  <v-tab>AVERBAÇÕES</v-tab>
                  <v-tab>OBSERVAÇÕES</v-tab>
                  <v-tab>IMPRIMIR</v-tab>

                  <!--TELA DADOS DO CASAMENTO-->

                  <v-tab-item>
                    <div v-for="(casamento, i) in registro.dados_casamento" :key="i">
                      <v-layout row pt-3>
                        <v-flex xs2>
                          <v-text-field
                            id="data"
                            label="Data*"
                            box
                            :rules="verificacao"
                            hint="Apenas Números"
                            mask="##/##/####"
                            prepend-inner-icon="event"
                            v-model="casamento.data"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs4 class="px-3">
                          <v-text-field
                            id="local"
                            label="Local*"
                            box
                            :rules="verificacao"
                            v-model="casamento.local"
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
                            label="Regime de Bens*"
                            box
                            :rules="verificacao"
                            :items="selects.regime_bens"
                            item-value="value"
                            item-text="text"
                            v-model="casamento.regime_bens"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs1 class="px-3">
                          <v-text-field
                            id="numero"
                            label="Nº*"
                            box
                            :rules="verificacao"
                            v-model="casamento.numero"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs1>
                          <v-text-field
                            id="folha"
                            label="Folha*"
                            box
                            :rules="verificacao"
                            v-model="casamento.folha"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2 class="px-3">
                          <v-text-field
                            id="termo_1"
                            label="Termo*"
                            box
                            :rules="verificacao"
                            v-model="casamento.termo_1"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2>
                          <v-text-field
                            id="termo_2"
                            label="Termo*"
                            box
                            :rules="verificacao"
                            v-model="casamento.termo_2"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs5>
                          <v-text-field
                            id="cartorio"
                            label="Cartório*"
                            box
                            :rules="verificacao"
                            v-model="casamento.cartorio"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                    </div>
                  </v-tab-item>

                  <!--TELA DIVORCIANTES-->

                  <v-tab-item>
                    <div v-for="(divorciante, i) in registro.divorciante_1" :key="i">
                      <v-layout row pt-3>
                        <v-breadcrumbs :items="items">
                          <span class="titulos">1ª DIVORCIANTE</span>
                          <v-icon color="#2934FF">chevron_right</v-icon>
                        </v-breadcrumbs>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs3>
                          <v-text-field
                            id="nome_1"
                            label="Nome*"
                            box
                            append-icon="search"
                            :rules="verificacao"
                            v-model="divorciante.nome"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2 class="px-3">
                          <v-autocomplete
                            id="profissao_1"
                            label="Profissão*"
                            box
                            :rules="verificacao"
                            :items="selects.profissao"
                            item-value="value"
                            item-text="text"
                            v-model="divorciante.profissao"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs2>
                          <v-text-field
                            id="nascimento_1"
                            label="Nascimento"
                            box
                            prepend-inner-icon="event"
                            hint="Apenas Números"
                            mask="##/##/####"
                            v-model="divorciante.nascimento"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3 class="pl-3">
                          <v-text-field
                            id="nome_pos_divorcio_1"
                            label="Nome Pós Divórcio"
                            box
                            v-model="divorciante.nome_pos_divorcio"
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
                            v-model="divorciante.nome_pai"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs5 class="pl-3">
                          <v-text-field
                            id="nome_mae_1"
                            label="Nome da Mãe"
                            box
                            v-model="divorciante.nome_mae"
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
                            v-model="divorciante.país_nascimento"
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
                            v-model="divorciante.estado_nascimento"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3>
                          <v-autocomplete
                            id="cidade_nascimento_1"
                            label="Cidade do Nascimento"
                            box
                            :items="selects.cidade"
                            item-text="text"
                            item-value="value"
                            v-model="divorciante.cidade_nascimento"
                          ></v-autocomplete>
                        </v-flex>
                      </v-layout>
                      <v-layout pl-5 pr-5>
                        <v-divider></v-divider>
                      </v-layout>
                      <div class="text-xs-center px-3">
                        <v-card-text>
                          <span>RESIDÊNCIA</span>
                        </v-card-text>
                      </div>
                      <v-layout row pt-3>
                        <v-flex xs4>
                          <v-text-field
                            id="endereco_1"
                            label="Endereço"
                            box
                            v-model="divorciante.logradouro"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs1 class="px-3">
                          <v-text-field id="numero_1" label="Nº" box v-model="divorciante.numero"></v-text-field>
                        </v-flex>
                        <v-flex xs2>
                          <v-text-field
                            id="complemento_1"
                            label="Complemento"
                            box
                            v-model="divorciante.complemento"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2 class="px-3">
                          <v-text-field
                            id="bairro_1"
                            label="Bairro"
                            box
                            v-model="divorciante.bairro"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2>
                          <v-text-field
                            id="cep_1"
                            label="CEP"
                            box
                            hint="Apenas Números"
                            mask="#####-###"
                            v-model="divorciante.cep"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                    </div>

                    <div v-for="(divorciante, i) in registro.divorciante_2" :key="i">
                      <v-layout row pt-3>
                        <v-breadcrumbs :items="items">
                          <span class="titulos">2ª DIVORCIANTE</span>
                          <v-icon color="#2934FF">chevron_right</v-icon>
                        </v-breadcrumbs>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs3>
                          <v-text-field
                            id="nome_2"
                            label="Nome*"
                            box
                            append-icon="search"
                            :rules="verificacao"
                            v-model="divorciante.nome"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2 class="px-3">
                          <v-autocomplete
                            id="profissao_2"
                            label="Profissão*"
                            box
                            :rules="verificacao"
                            :items="selects.profissao"
                            item-value="value"
                            item-text="text"
                            v-model="divorciante.profissao"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs2>
                          <v-text-field
                            id="nascimento_2"
                            label="Nascimento"
                            box
                            prepend-inner-icon="event"
                            hint="Apenas Números"
                            mask="##/##/####"
                            v-model="divorciante.nascimento"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3 class="pl-3">
                          <v-text-field
                            id="nome_pos_divorcio_2"
                            label="Nome Pós Divórcio"
                            box
                            v-model="divorciante.nome_pos_divorcio"
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
                            v-model="divorciante.nome_pai"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs5 class="pl-3">
                          <v-text-field
                            id="nome_mae_2"
                            label="Nome da Mãe"
                            box
                            v-model="divorciante.nome_mae"
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
                            v-model="divorciante.país_nascimento"
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
                            v-model="divorciante.estado_nascimento"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3>
                          <v-autocomplete
                            id="cidade_nascimento_2"
                            label="Cidade do Nascimento"
                            box
                            :items="selects.cidade"
                            item-text="text"
                            item-value="value"
                            v-model="divorciante.cidade_nascimento"
                          ></v-autocomplete>
                        </v-flex>
                      </v-layout>
                      <v-layout pl-5 pr-5>
                        <v-divider></v-divider>
                      </v-layout>
                      <div class="text-xs-center px-3">
                        <v-card-text>
                          <span>RESIDÊNCIA</span>
                        </v-card-text>
                      </div>
                      <v-layout row pt-3>
                        <v-flex xs4>
                          <v-text-field
                            id="endereco_2"
                            label="Endereço"
                            box
                            v-model="divorciante.logradouro"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs1 class="px-3">
                          <v-text-field id="numero_2" label="Nº" box v-model="divorciante.numero"></v-text-field>
                        </v-flex>
                        <v-flex xs2>
                          <v-text-field
                            id="complemento_2"
                            label="Complemento"
                            box
                            v-model="divorciante.complemento"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2 class="px-3">
                          <v-text-field
                            id="bairro_2"
                            label="Bairro"
                            box
                            v-model="divorciante.bairro"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2>
                          <v-text-field
                            id="cep_2"
                            label="CEP"
                            box
                            hint="Apenas Números"
                            mask="#####-###"
                            v-model="divorciante.cep"
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
                <v-layout justify-center class="buttons">
                  <div v-if="variaveis.active < 5">
                    <v-btn @click="next" color="#2934FF" dark>PRÓSSIMO PASSO</v-btn>
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


<script src="../../../assets/scripts/livro_e/registro_sentenca_divorcio.js"></script>