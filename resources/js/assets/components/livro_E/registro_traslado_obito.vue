<template>
  <div>
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>chevron_right</v-icon>
      </template>
    </v-breadcrumbs>

    <v-card>
      <div class="text-xs-center pt-3">
        <v-card-text>
          <span class="titulos">Registro de Traslado de Óbito</span>
        </v-card-text>
      </div>

      <v-layout row>
        <v-flex xs12 sm12>
          <template>
            <v-form ref="form" v-model="variaveis.valid">
              <v-container pl-5 pr-5>
                <v-tabs v-model="variaveis.active" color="white" slider-color="#2934FF">
                  <v-tab>ÓBITO</v-tab>
                  <v-tab>FALECIDO</v-tab>
                  <v-tab>CERTIDÃO ORIGINAL</v-tab>
                  <v-tab>TRADUÇÃO</v-tab>
                  <v-tab>AVERBAÇÕES</v-tab>
                  <v-tab>OBSERVAÇÕES</v-tab>
                  <v-tab>COMUNICAÇÃO</v-tab>
                  <v-tab>IMPRIMIR</v-tab>

                  <!--TELA ÓBITO-->

                  <v-tab-item>
                    <div v-for="(obito, i) in registro.obito" :key="i">
                      <v-layout row pt-3>
                        <v-flex xs2>
                          <v-text-field
                            id="data_falecimento"
                            label="Data Falecimento*"
                            box
                            :rules="verificacao"
                            hint="Apenas Números"
                            mask="##/##/####"
                            prepend-inner-icon="event"
                            v-model="obito.data_falecimento"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2 class="px-3">
                            <v-text-field
                                id="hora"
                                label="Hora"
                                box
                                hint="Apenas Números"
                                mask="##:##"
                                prepend-inner-icon="fas fa-clock"
                                v-model="obito.hora"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs3>
                            <v-text-field
                                id="local_falecimento"
                                label="Local do Falecimento"
                                box
                                v-model="obito.local_falecimento"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs4 class="pl-3">
                            <v-text-field
                                id="declarante"
                                label="Declarante"
                                box
                                v-model="obito.declarante"
                            ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout row pt-3>
                          <v-flex xs4>
                              <v-text-field
                                id="medico"
                                label="Médico"
                                box
                                v-model="obito.medico"
                              ></v-text-field>
                          </v-flex>
                          <v-flex xs4 class="pl-3">
                              <v-text-field
                                id="causa_morte"
                                label="Causa da Morte*"
                                box
                                :rules="verificacao"
                                v-model="obito.causa_morte"
                              ></v-text-field>
                          </v-flex>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs5>
                          <v-text-field
                            id="local_sepultamento"
                            label="Local do Sepultamento*"
                            box
                            :rules="verificacao"
                            v-model="obito.local_sepultamento"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                    </div>
                  </v-tab-item>

                  <!--TELA FALECIDO-->

                  <v-tab-item>
                    <div v-for="(falecido, i) in registro.falecido" :key="i">
                      <v-layout row pt-3>
                        <v-flex xs4>
                          <v-text-field
                            id="nome"
                            label="Nome*"
                            box
                            :rules="verificacao"
                            append-icon="search"
                            v-model="falecido.nome"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2 class="px-3">
                          <v-autocomplete
                            id="sexo"
                            label="Sexo*"
                            box
                            :rules="verificacao"
                            :items="selects.sexo"
                            item-value="value"
                            item-text="text"
                            v-model="falecido.sexo"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs2>
                          <v-text-field
                            id="cor"
                            label="Cor"
                            box
                            v-model="falecido.cor"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2 class="px-3">
                          <v-autocomplete
                            id="eleitor"
                            label="Eleitor*"
                            box
                            :rules="verificacao"
                            :items="selects.eleitor"
                            item-value="value"
                            item-text="text"
                            v-model="falecido.eleitor"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3>
                          <v-text-field
                            id="documento_identificacao"
                            label="Documento Identificação"
                            box
                            v-model="falecido.documento_identificacao"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs3>
                          <v-text-field
                            id="cpf"
                            label="CPF"
                            box
                            hint="Apenas Números"
                            mask="###.###.###-##"
                            v-model="falecido.cpf"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3 class="px-3">
                          <v-text-field
                            id="data_nascimento"
                            label="Data Nascimento"
                            box
                            hint="Apenas Números"
                            mask="##/##/####"
                            prepend-inner-icon="event"
                            v-model="falecido.data_nascimento"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2>
                          <v-text-field
                            id="idade"
                            label="Idade"
                            box
                            hint="Apenas Números"
                            v-model="falecido.idade"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3 class="px-3">
                          <v-autocomplete
                            id="profissao"
                            label="Profissão*"
                            box
                            :rules="verificacao"
                            :items="selects.profissao"
                            item-value="value"
                            item-text="text"
                            v-model="falecido.profissao"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3>
                          <v-autocomplete
                            id="estado_civil"
                            label="Estado Civil"
                            box
                            :items="selects.estado_civil"
                            item-value="value"
                            item-text="text"
                            v-model="falecido.estado_civil"
                          ></v-autocomplete>
                        </v-flex>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs5>
                          <v-text-field
                            id="conjuge"
                            label="Cônjuge"
                            box
                            v-model="falecido.conjuge"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout pl-5 pr-5>
                        <v-divider></v-divider>
                      </v-layout>
                      <div class="text-xs-center pt-3">
                        <v-card-text >
                          <span>NATURALIDADE</span>
                        </v-card-text>
                      </div>
                      <v-layout row pt-3>
                        <v-flex xs3>
                          <v-autocomplete
                            id="país_nascimento"
                            label="País de Nascimento"
                            box
                            :items="selects.país"
                            item-value="value"
                            item-text="text"
                            v-model="falecido.país_nascimento"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3 class="px-3">
                          <v-autocomplete
                            id="estado_nascimento"
                            label="Estado de Nascimento"
                            box
                            :items="selects.estado"
                            item-text="text"
                            item-value="value"
                            v-model="falecido.estado_nascimento"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3>
                          <v-autocomplete
                            id="cidade_nascimento"
                            label="Cidade do Nascimento"
                            box
                            :items="selects.cidade"
                            item-value="value"
                            item-text="text"
                            v-model="falecido.cidade_nascimento"
                          ></v-autocomplete>
                        </v-flex>
                      </v-layout>
                      <v-layout pl-5 pr-5>
                        <v-divider></v-divider>
                      </v-layout>
                      <div class="text-xs-center pt-3">
                        <v-card-text >
                          <span>RESIDÊNCIA</span>
                        </v-card-text>
                      </div>
                      <v-layout row pt-3>
                        <v-flex xs4>
                          <v-text-field
                            id="logradouro"
                            label="Endereço"
                            box
                            v-model="falecido.logradouro"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2 class="px-3">
                          <v-text-field
                            id="numero"
                            label="Nº"
                            box
                            v-model="falecido.numero"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3>
                          <v-text-field
                            id="complemento"
                            label="Complemento"
                            box
                            v-model="falecido.complemento"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3 class="px-3">
                          <v-text-field
                            id="bairro"
                            label="Bairro"
                            box
                            v-model="falecido.bairro"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2>
                          <v-text-field
                            id="cep"
                            label="CEP"
                            box
                            hint="Apenas Números"
                            mask="#####-###"
                            v-model="falecido.cep"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout pl-5 pr-5>
                        <v-divider></v-divider>
                      </v-layout>
                      <div class="text-xs-center">
                        <v-card-text>
                          <span>FILIAÇÃO</span>
                        </v-card-text>
                      </div>
                      <v-layout row pt-3>
                        <v-flex xs5>
                          <v-text-field
                            id="nome_pai"
                            label="Nome do Pai"
                            box
                            v-model="falecido.nome_pai"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs5 class="pl-3">
                          <v-text-field
                            id="nome_mae"
                            label="Nome da Mãe"
                            box
                            v-model="falecido.nome_mae"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                    </div>
                  </v-tab-item>

                  <!--TELA CERTIDÃO ORIGINAL-->

                  <v-tab-item>
                    <div v-for="(certidao, i ) in registro.certidao_original" :key="i">
                      <v-flex xs12 class="heigth-5">
                        <v-textarea
                          id="certidao_original"
                          label="Certidão Original"
                          box
                          v-model="certidao.certidao_original"
                        ></v-textarea>
                      </v-flex>
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

                  <!--TELA COMUNICAÇÃO-->

                  <v-tab-item>
                    <div v-for="(comunicacao, i) in registro.comunicacao" :key="i">
                      <v-layout row pt-3>
                        <v-flex xs3>
                          <v-autocomplete
                            id="documento_anterior"
                            label="Documento Anterior*"
                            box
                            :rules="verificacao"
                            :items="selects.documento_anterior"
                            item-value="value"
                            item-text="text"
                            v-model="comunicacao.documento_anterior"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3 class="px-3">
                          <v-text-field
                            id="termo"
                            label="Termo*"
                            box
                            :rules="verificacao"
                            v-model="comunicacao.termo"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2>
                          <v-text-field
                            id="livro"
                            label="Livro*"
                            box
                            :rules="verificacao"
                            v-model="comunicacao.livro"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2 class="px-3">
                          <v-text-field
                            id="folha"
                            label="Folha*"
                            box
                            :rules="verificacao"
                            v-model="comunicacao.folha"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs4>
                          <v-text-field
                            id="cartorio"
                            label="Cartório"
                            box
                            v-model="comunicacao.cartorio"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs2>
                          <v-autocomplete
                            id="uf"
                            label="UF*"
                            box
                            :rules="verificacao"
                            :items="selects.uf"
                            item-value="value"
                            item-text="text"
                            v-model="comunicacao.uf"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3 class="pl-3">
                          <v-autocomplete
                            id="municipio"
                            label="Município"
                            box
                            :rules="verificacao"
                            :items="selects.cidade"
                            item-value="value"
                            item-text="text"
                            v-model="comunicacao.municipio"
                          ></v-autocomplete>
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
                  <div v-if="variaveis.active < 7">
                    <v-btn @click="next" color="#2934FF" dark>PRÓXIMO PASSO</v-btn>
                  </div>
                  <div v-if="variaveis.active == 7">
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


<script src="../../../assets/scripts/livro_e/registro_traslado_obito.js"></script>