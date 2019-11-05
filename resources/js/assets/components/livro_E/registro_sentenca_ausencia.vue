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
          <span class="titulos">Registro de Sentença de Ausência</span>
        </v-card-text>
      </div>

      <v-layout row>
        <v-flex xs12 sm12>
          <template>
            <v-form ref="form" v-model="variaveis.valid" lazy-validation>
              <v-container pl-5 pr-5>
                <v-tabs v-model="variaveis.active" color="white" slider-color="#2934FF">
                  <v-tab>DADOS DO AUSENTE</v-tab>
                  <v-tab>CURADOR</v-tab>
                  <v-tab>SENTENÇA</v-tab>
                  <v-tab>AVERBAÇÕES</v-tab>
                  <v-tab>OBSERVAÇÕES</v-tab>
                  <v-tab>IMPRIMIR</v-tab>

                  <!--TELA DADOS DO AUSENTE-->

                  <v-tab-item>
                    <div v-for="(ausente, i) in registro.dados_ausente" :key="i">
                      <v-layout row pt-3>
                        <v-flex xs5>
                          <v-text-field
                            id="nome_ausente"
                            label="Nome*"
                            box
                            append-icon="search"
                            :rules="verificacao"
                            v-model="ausente.nome"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3 class="px-3">
                          <v-autocomplete
                            id="sexo_ausente"
                            label="Sexo*"
                            box
                            :items="selects.sexo"
                            item-value="value"
                            item-text="text"
                            :rules="verificacao"
                            v-model="ausente.sexo"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs4>
                          <v-text-field
                            id="documento_identificacao_ausente"
                            label="Documento Identificação"
                            box
                            v-model="ausente.documento_identificacao"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs3>
                          <v-text-field
                            id="cpf_ausente"
                            label="CPF"
                            box
                            hint="Apenas Números"
                            mask="###.###.###-##"
                            v-model="ausente.cpf"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3 class="px-3">
                          <v-text-field
                            id="nascimento_ausente"
                            label="Nascimento"
                            box
                            prepend-inner-icon="event"
                            hint="Apenas Números"
                            mask="##/##/####"
                            v-model="ausente.nascimento"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs1>
                          <v-text-field
                            id="idade_ausente"
                            label="Idade"
                            box
                            v-model="ausente.idade"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3 class="px-3">
                          <v-autocomplete
                            id="profissao_ausente"
                            label="Profissão"
                            box
                            :items="selects.profissao"
                            item-value="value"
                            item-text="text"
                            v-model="ausente.profissao"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3>
                          <v-autocomplete
                            id="estado_civil_ausente"
                            label="Estado Civil"
                            box
                            :items="selects.estado_civil"
                            item-text="text"
                            item-value="value"
                            v-model="ausente.estado_civil"
                          ></v-autocomplete>
                        </v-flex>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs4>
                          <v-text-field
                            id="conjuge_ausente"
                            label="Cônjuge"
                            box
                            v-model="ausente.conjuge"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout pl-5 pr-5>
                        <v-divider></v-divider>
                      </v-layout>
                      <div class="text-xs-center px-3">
                        <v-card-text>
                          <span>FILIAÇÃO</span>
                        </v-card-text>
                      </div>
                      <v-layout row pt-3>
                        <v-flex xs6>
                          <v-text-field id="nome_pai_ausente" label="Pai" box v-model="ausente.pai"></v-text-field>
                        </v-flex>
                        <v-flex xs6 class="pl-3">
                          <v-text-field id="mae_ausente" label="Mãe" box v-model="ausente.mae"></v-text-field>
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
                            id="país_ausente"
                            label="País"
                            box
                            :items="selects.país"
                            item-value="value"
                            item-text="text"
                            v-model="ausente.país"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3 class="px-3">
                          <v-autocomplete
                            id="estado_ausente"
                            label="Estado"
                            box
                            :items="selects.estado"
                            item-value="value"
                            item-text="text"
                            v-model="ausente.estado"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3>
                          <v-autocomplete
                            id="cidade_ausente"
                            label="Cidade"
                            box
                            :items="selects.cidade"
                            item-value="value"
                            item-text="text"
                            v-model="ausente.cidade"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs4 class="pl-3">
                          <v-text-field
                            id="local_nascimento_ausente"
                            label="Local de Nascimento"
                            box
                            v-model="ausente.local_nascimento"
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
                            id="endereco_ausente"
                            label="Endereço"
                            box
                            v-model="ausente.logradouro"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs1 class="px-3">
                          <v-text-field id="numero_ausente" label="Nº" box v-model="ausente.numero"></v-text-field>
                        </v-flex>
                        <v-flex xs3>
                          <v-text-field
                            id="complemento_ausente"
                            label="Complemento"
                            box
                            v-model="ausente.complemento"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3 class="px-3">
                          <v-text-field
                            id="bairro_ausente"
                            label="Bairro"
                            box
                            v-model="ausente.bairro"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2>
                          <v-text-field
                            id="cep_ausente"
                            label="CEP"
                            box
                            hint="Apenas Números"
                            mask="#####-###"
                            v-model="ausente.cep"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                    </div>
                  </v-tab-item>

                  <!--TELA CURADOR-->

                  <v-tab-item>
                    <div v-for="(curador, i) in registro.curador" :key="i">
                      <v-layout row pt-3>
                        <v-flex xs5>
                          <v-text-field
                            id="nome_curador"
                            label="Nome*"
                            box
                            append-icon="search"
                            :rules="verificacao"
                            v-model="curador.nome"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3 class="px-3">
                          <v-autocomplete
                            id="sexo_curador"
                            label="Sexo*"
                            box
                            :rules="verificacao"
                            :items="selects.sexo"
                            item-value="value"
                            item-text="text"
                            v-model="curador.sexo"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs4>
                          <v-text-field
                            id="documento_identificacao_curador"
                            label="Documento Identificação"
                            box
                            v-model="curador.documento_identificacao"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs3>
                          <v-text-field
                            id="cpf_curador"
                            label="CPF"
                            box
                            hint="Apenas Números"
                            mask="###.###.###-##"
                            v-model="curador.cpf"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3 class="px-3">
                          <v-text-field
                            id="nascimento_curador"
                            label="Nascimento"
                            box
                            prepend-inner-icon="event"
                            hint="Apenas Números"
                            mask="##/##/####"
                            v-model="curador.nascimento"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs1>
                          <v-text-field
                            id="idade_curador"
                            label="Idade"
                            box
                            v-model="curador.idade"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3 class="px-3">
                          <v-autocomplete
                            id="profissao_curador"
                            label="Profissão"
                            box
                            :items="selects.profissao"
                            item-value="value"
                            item-text="text"
                            v-model="curador.profissao"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3>
                          <v-autocomplete
                            id="estado_civil_curador"
                            label="Estado Civil"
                            box
                            :items="selects.estado_civil"
                            item-text="text"
                            item-value="value"
                            v-model="curador.estado_civil"
                          ></v-autocomplete>
                        </v-flex>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs4>
                          <v-text-field
                            id="conjuge_curador"
                            label="Cônjuge"
                            box
                            v-model="curador.conjuge"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout pl-5 pr-5>
                        <v-divider></v-divider>
                      </v-layout>
                      <div class="text-xs-center px-3">
                        <v-card-text>
                          <span>FILIAÇÃO</span>
                        </v-card-text>
                      </div>
                      <v-layout row pt-3>
                        <v-flex xs6>
                          <v-text-field id="nome_pai_curador" label="Pai" box v-model="curador.pai"></v-text-field>
                        </v-flex>
                        <v-flex xs6 class="pl-3">
                          <v-text-field id="mae_curador" label="Mãe" box v-model="curador.mae"></v-text-field>
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
                            id="país_curador"
                            label="País"
                            box
                            :items="selects.país"
                            item-value="value"
                            item-text="text"
                            v-model="curador.país"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3 class="px-3">
                          <v-autocomplete
                            id="estado_curador"
                            label="Estado"
                            box
                            :items="selects.estado"
                            item-value="value"
                            item-text="text"
                            v-model="curador.estado"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3>
                          <v-autocomplete
                            id="cidade_curador"
                            label="Cidade"
                            box
                            :items="selects.cidade"
                            item-value="value"
                            item-text="text"
                            v-model="curador.cidade"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs4 class="pl-3">
                          <v-text-field
                            id="local_nascimento_curador"
                            label="Local de Nascimento"
                            box
                            v-model="curador.local_nascimento"
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
                            id="endereco_curador"
                            label="Endereço"
                            box
                            v-model="curador.logradouro"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs1 class="px-3">
                          <v-text-field id="numero_curador" label="Nº" box v-model="curador.numero"></v-text-field>
                        </v-flex>
                        <v-flex xs3>
                          <v-text-field
                            id="complemento_curador"
                            label="Complemento"
                            box
                            v-model="curador.complemento"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3 class="px-3">
                          <v-text-field
                            id="bairro_curador"
                            label="Bairro"
                            box
                            v-model="curador.bairro"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2>
                          <v-text-field
                            id="cep_curador"
                            label="CEP"
                            box
                            hint="Apenas Números"
                            mask="#####-###"
                            v-model="curador.cep"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                    </div>
                  </v-tab-item>

                  <!--TELA SENTENÇA-->

                  <v-tab-item>
                    <div v-for="(sentenca, i ) in registro.sentenca" :key="i">
                      <v-layout row pt-3>
                        <v-flex xs4>
                          <v-text-field
                            id="nome_promotor"
                            label="Nome do Promotor"
                            box
                            v-model="sentenca.nome_promotor"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3 class="px-3">
                          <v-text-field
                            id="data_sentenca"
                            label="Data da Senteça"
                            box
                            hint="Apenas Números"
                            mask="##/##/####"
                            prepend-inner-icon="event"
                            v-model="sentenca.data_sentenca"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3>
                          <v-text-field
                            id="data_transito_julgado"
                            label="Data Trânsito Julgado"
                            box
                            hint="Apenas Números"
                            mask="##/##/####"
                            prepend-inner-icon="event"
                            v-model="sentenca.data_transito_sentenca"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3 class="pl-3">
                          <v-text-field
                            id="data_mandato"
                            label="Data do Mandato"
                            box
                            hint="Apenas Números"
                            mask="##/##/####"
                            prepend-inner-icon="event"
                            v-model="sentenca.data_mandato"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs4>
                          <v-text-field id="comarca" label="Comarca" box v-model="sentenca.comarca"></v-text-field>
                        </v-flex>
                        <v-flex xs4 class="px-3">
                          <v-text-field
                            id="juiz_mandatario"
                            label="Juiz Mandatário"
                            box
                            v-model="sentenca.juiz_mandatario"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs4>
                          <v-text-field
                            id="juiz_sentenca"
                            label="Juiz da Sentença"
                            box
                            v-model="sentenca.juiz_sentenca"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs4>
                          <v-text-field id="autos" label="Autos" box v-model="sentenca.autos"></v-text-field>
                        </v-flex>
                      </v-layout>
                    </div>
                  </v-tab-item>

                  <!--TELA AVERBAÇÕES-->

                  <v-tab-item>
                    <div v-for="(averbacoes, i) in registro.averbacoes" :key="i">
                      <v-layout row pt-3>
                        <v-flex xs6>
                          <v-textarea
                            id="texto_averbacao"
                            label="Texto de Averbação"
                            box
                            v-model="averbacoes.texto_averbacao"
                          ></v-textarea>
                        </v-flex>
                        <v-flex xs6 class="pl-3">
                          <v-textarea
                            id="historioco_averbacoes"
                            label="Histório de Averbações"
                            box
                            v-model="averbacoes.historico_averbacoes"
                          ></v-textarea>
                        </v-flex>
                      </v-layout>
                    </div>
                  </v-tab-item>

                  <!--TELA OBSERVAÇÕES-->

                  <v-tab-item>
                    <v-layouy row pt-3>
                      <v-flex xs12>
                        <v-textarea
                          id="observacoes"
                          label="Observações"
                          box
                          v-model="registro.texto_observacoes"
                        ></v-textarea>
                      </v-flex>
                    </v-layouy>
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

<script src="../../../assets/scripts/livro_e/registro_sentenca_ausencia.js"></script>