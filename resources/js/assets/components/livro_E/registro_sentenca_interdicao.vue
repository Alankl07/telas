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
          <span class="titulos">Registro de Sentença de Interdição</span>
        </v-card-text>
      </div>

      <v-layout row>
        <v-flex xs12 sm12>
          <template>
            <v-form ref="form" v-model="variaveis.valid">
              <v-container pl-5 pr-5>
                <v-tabs v-model="variaveis.active" color="white" slider-color="#2934FF">
                  <v-tab>INTERDITADO</v-tab>
                  <v-tab>CURADOR</v-tab>
                  <v-tab>DADOS DA SENTENÇA</v-tab>
                  <v-tab>AVERBAÇÕES</v-tab>
                  <v-tab>OBSERVAÇÕES</v-tab>
                  <v-tab>COMUNICAÇÃO</v-tab>
                  <v-tab>IMPRIMIR</v-tab>

                  <!--TELA INTERDITADO-->

                  <v-tab-item>
                    <div v-for="(interditado, i) in registro.interditado" :key="i">
                      <v-layout row pt-3>
                        <v-flex xs4>
                          <v-text-field
                            id="nome_interditado"
                            label="Nome*"
                            box
                            :rules="verificacao"
                            v-model="interditado.nome"
                            append-icon="search"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2 class="px-3">
                            <v-autocomplete
                                id="sexo_interditado"
                                label="Sexo*"
                                box
                                :rules="verificacao"
                                :items="selects.sexo"
                                item-text="text"
                                item-value="value"
                                v-model="interditado.sexo"
                            ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3>
                            <v-text-field
                                id="documento_identificacao_interditado"
                                label="Documento Identificação"
                                box
                                v-model="interditado.documento_identificacao"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs3 class="pl-3">
                            <v-text-field
                                id="cpf_interditado"
                                label="CPF"
                                box
                                v-model="interditado.cpf"
                            ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout row pt-3>
                          <v-flex xs2>
                              <v-text-field
                                id="data_nascimento_interditado"
                                label="Data Nascimento"
                                box
                                prepend-inner-icon="event"
                                hint="Apenas Números"
                                mask="##/##/####"
                                v-model="interditado.data_nascimento"
                              ></v-text-field>
                          </v-flex>
                          <v-flex xs2 class="px-3">
                              <v-text-field
                                id="idade_interditado"
                                label="Idade"
                                box
                                v-model="interditado.idade"
                              ></v-text-field>
                          </v-flex>
                          <v-flex xs3>
                              <v-autocomplete
                                id="profissao_interditado"
                                label="Profissão"
                                box
                                :items="selects.profissao"
                                item-value="value"
                                item-text="text"
                                v-model="interditado.profissao"
                              ></v-autocomplete>
                          </v-flex>
                          <v-flex xs2 class="pl-3">
                              <v-autocomplete
                                id="estado_civil_interditado"
                                label="Estado Civil"
                                box
                                :items="selects.estado_civil"
                                item-value="value"
                                item-text="text"
                                v-model="interditado.estado_civil"
                              ></v-autocomplete>
                          </v-flex>
                      </v-layout>
                      <v-layout row pt-3>
                          <v-flex xs5>
                              <v-text-field
                                id="conjuge_interditado"
                                label="Cônjuge"
                                box
                                v-model="interditado.conjuge"
                              ></v-text-field>
                          </v-flex>
                      </v-layout>
                      <v-layout pl-5 pr-5>
                          <v-divider></v-divider>
                      </v-layout>
                      <div class="text-xs-center px-3">
                        <v-card-text class="px-0">
                          <span>NATURALIDADE</span>
                        </v-card-text>
                      </div>
                      <v-layout row pt-3>
                          <v-flex xs3>
                              <v-autocomplete
                                id="país_nascimento_interditado"
                                label="País de Nascimento"
                                box
                                :items="selects.país"
                                item-text="text"
                                item-value="value"
                                v-model="interditado.país_nascimento"
                              ></v-autocomplete>
                          </v-flex>
                          <v-flex xs3 class="px-3">
                              <v-autocomplete
                                id="estado_nascimento_interditado"
                                label="Estado de Nascimento"
                                box
                                :items="selects.estado"
                                item-text="text"
                                item-value="value"
                                v-model="interditado.estado_nascimento"
                              ></v-autocomplete>
                          </v-flex>
                          <v-flex xs3>
                              <v-autocomplete
                                id="cidade_nascimento_interditado"
                                label="Cidade do Nascimento"
                                box
                                :items="selects.cidade"
                                item-value="value"
                                item-text="text"
                                v-model="interditado.cidade_nascimento"
                              ></v-autocomplete>
                          </v-flex>
                      </v-layout>
                      <v-layout pl-5 pr-5>
                          <v-divider></v-divider>
                      </v-layout>
                      <div class="text-xs-center pt-3">
                          <v-card-text class="px-0">
                              <span>RESIDÊNCIA</span>
                          </v-card-text>
                      </div>
                      <v-layout row pt-3>
                          <v-flex xs4>
                            <v-text-field
                                id="logradouro_interditado"
                                label="Endereço"
                                box
                                v-model="interditado.endereco.logradouro"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs2 class="px-3">
                              <v-text-field
                                id="numero_interditado"
                                label="Nº"
                                box
                                v-model="interditado.endereco.numero"
                              ></v-text-field>
                          </v-flex>
                          <v-flex xs3>
                              <v-text-field
                                id="completemento_interditado"
                                label="Complemento"
                                box
                                v-model="interditado.endereco.complemento"
                              ></v-text-field>
                          </v-flex>
                          <v-flex xs3 class="px-3">
                              <v-text-field
                                id="bairro_interditado"
                                label="Bairro"
                                box
                                v-model="interditado.bairro"
                              ></v-text-field>
                          </v-flex>
                          <v-flex xs2>
                              <v-text-field
                                id="cep_interditado"
                                label="CEP"
                                box
                                v-model="interditado.endereco.cep"
                              ></v-text-field>
                          </v-flex>
                      </v-layout>
                      <v-layout pl-5 pr-5>
                          <v-divider></v-divider>
                      </v-layout>
                      <div class="text-xs-center pt-3">
                          <v-card-text class="px-0">
                              <span>FILIAÇÃO</span>
                          </v-card-text>
                      </div>
                      <v-layout row pt-3>
                          <v-flex xs5>
                              <v-text-field
                                id="nome_pai_interditado"
                                label="Nome do Pai"
                                box
                                v-model="interditado.nome_pai"
                              ></v-text-field>
                          </v-flex>
                          <v-flex xs5 class="pl-3">
                              <v-text-field
                                id="nome_mae_interditado"
                                label="Nome da Mãe"
                                box
                                v-model="interditado.nome_mae"
                              ></v-text-field>
                          </v-flex>
                      </v-layout>
                    </div>
                  </v-tab-item>

                  <!--TELA CURADOR-->

                  <v-tab-item>
                      <div v-for="(curador, i) in registro.curador" :key="i">
                          <v-layout row pt-3>
                        <v-flex xs4>
                          <v-text-field
                            id="nome_curador"
                            label="Nome*"
                            box
                            :rules="verificacao"
                            v-model="curador.nome"
                            append-icon="search"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2 class="px-3">
                            <v-autocomplete
                                id="sexo_curador"
                                label="Sexo*"
                                box
                                :rules="verificacao"
                                :items="selects.sexo"
                                item-text="text"
                                item-value="value"
                                v-model="curador.sexo"
                            ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3>
                            <v-text-field
                                id="documento_identificacao_curador"
                                label="Documento Identificação"
                                box
                                v-model="curador.documento_identificacao"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs3 class="pl-3">
                            <v-text-field
                                id="cpf_curador"
                                label="CPF"
                                box
                                v-model="curador.cpf"
                            ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout row pt-3>
                          <v-flex xs2>
                              <v-text-field
                                id="data_nascimento_curador"
                                label="Data Nascimento"
                                box
                                prepend-inner-icon="event"
                                hint="Apenas Números"
                                mask="##/##/####"
                                v-model="curador.data_nascimento"
                              ></v-text-field>
                          </v-flex>
                          <v-flex xs2 class="px-3">
                              <v-text-field
                                id="idade_curador"
                                label="Idade"
                                box
                                v-model="curador.idade"
                              ></v-text-field>
                          </v-flex>
                          <v-flex xs3>
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
                          <v-flex xs2 class="pl-3">
                              <v-autocomplete
                                id="estado_civil_curador"
                                label="Estado Civil"
                                box
                                :items="selects.estado_civil"
                                item-value="value"
                                item-text="text"
                                v-model="curador.estado_civil"
                              ></v-autocomplete>
                          </v-flex>
                      </v-layout>
                      <v-layout row pt-3>
                          <v-flex xs5>
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
                        <v-card-text class="px-0">
                          <span>NATURALIDADE</span>
                        </v-card-text>
                      </div>
                      <v-layout row pt-3>
                          <v-flex xs3>
                              <v-autocomplete
                                id="país_nascimento_curador"
                                label="País de Nascimento"
                                box
                                :items="selects.país"
                                item-text="text"
                                item-value="value"
                                v-model="curador.país_nascimento"
                              ></v-autocomplete>
                          </v-flex>
                          <v-flex xs3 class="px-3">
                              <v-autocomplete
                                id="estado_nascimento_curador"
                                label="Estado de Nascimento"
                                box
                                :items="selects.estado"
                                item-text="text"
                                item-value="value"
                                v-model="curador.estado_nascimento"
                              ></v-autocomplete>
                          </v-flex>
                          <v-flex xs3>
                              <v-autocomplete
                                id="cidade_nascimento_curador"
                                label="Cidade do Nascimento"
                                box
                                :items="selects.cidade"
                                item-value="value"
                                item-text="text"
                                v-model="curador.cidade_nascimento"
                              ></v-autocomplete>
                          </v-flex>
                      </v-layout>
                      <v-layout pl-5 pr-5>
                          <v-divider></v-divider>
                      </v-layout>
                      <div class="text-xs-center pt-3">
                          <v-card-text class="px-0">
                              <span>RESIDÊNCIA</span>
                          </v-card-text>
                      </div>
                      <v-layout row pt-3>
                          <v-flex xs4>
                            <v-text-field
                                id="logradouro_curador"
                                label="Endereço"
                                box
                                v-model="curador.endereco.logradouro"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs2 class="px-3">
                              <v-text-field
                                id="numero_curador"
                                label="Nº"
                                box
                                v-model="curador.endereco.numero"
                              ></v-text-field>
                          </v-flex>
                          <v-flex xs3>
                              <v-text-field
                                id="completemento_curador"
                                label="Complemento"
                                box
                                v-model="curador.endereco.complemento"
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
                                v-model="curador.endereco.cep"
                              ></v-text-field>
                          </v-flex>
                      </v-layout>
                      <v-layout pl-5 pr-5>
                          <v-divider></v-divider>
                      </v-layout>
                      <div class="text-xs-center pt-3">
                          <v-card-text class="px-0">
                              <span>FILIAÇÃO</span>
                          </v-card-text>
                      </div>
                      <v-layout row pt-3>
                          <v-flex xs5>
                              <v-text-field
                                id="nome_pai_curador"
                                label="Nome do Pai"
                                box
                                v-model="curador.nome_pai"
                              ></v-text-field>
                          </v-flex>
                          <v-flex xs5 class="pl-3">
                              <v-text-field
                                id="nome_mae_curador"
                                label="Nome da Mãe"
                                box
                                v-model="curador.nome_mae"
                              ></v-text-field>
                          </v-flex>
                      </v-layout>
                      </div>
                  </v-tab-item>

                  <!--TELA DADOS DA SENTENÇA-->

                  <v-tab-item>
                      <div v-for="(sentenca, i) in registro.dados_sentenca" :key="i">
                          <v-layout row pt-3>
                              <v-flex xs3>
                                  <v-text-field
                                    id="nome_promotor"
                                    label="Nome Promotor"
                                    box
                                    v-model="sentenca.nome_promotor"
                                  ></v-text-field>
                              </v-flex>
                              <v-flex xs2 class="px-3">
                                  <v-text-field
                                    id="data_sentenca"
                                    label="Data Sentença*"
                                    box
                                    hind="Apenas Números"
                                    mask="##/##/####"
                                    :rules="verificacao"
                                    prepend-inner-icon="event"
                                    v-model="sentenca.data_sentenca"
                                  ></v-text-field>
                              </v-flex>
                              <v-flex xs3>
                                  <v-text-field
                                    id="data_transito_julgado"
                                    label="Data Transito Julgado*"
                                    box
                                    :rules="verificacao"
                                    prepend-inner-icon="event"
                                    hint="Apenas Números"
                                    mask="##/##/####"
                                    v-model="sentenca.data_transito_julgado"
                                  ></v-text-field>
                              </v-flex>
                              <v-flex xs2 class="pl-3">
                                  <v-text-field
                                    id="data_sentenca_2"
                                    label="Data Sentença*"
                                    box
                                    prepend-inner-icon="event"
                                    mask="##/##/####"
                                    :rules="verificacao"
                                    hint="Apenas Números"
                                    v-model="sentenca.data_sentenca_2"
                                  ></v-text-field>
                              </v-flex>
                          </v-layout>
                          <v-layout row pt-3>
                              <v-flex xs6 >
                                  <v-text-field
                                    id="processado_juizo"
                                    label="Processado no Juizo (Comarca)*"
                                    box
                                    :rules="verificacao"
                                    v-model="sentenca.processado_juizo"
                                  ></v-text-field>
                              </v-flex>
                              <v-flex xs6 class="pl-3">
                                  <v-text-field
                                    id="juiz_autor_mandado"
                                    label="Juiz Autor do Mandado*"
                                    box
                                    :rules="verificacao"
                                    v-model="sentenca.juiz_autor_mandado"
                                  ></v-text-field>
                              </v-flex>
                          </v-layout>
                          <v-layout row pt-3>
                              <v-flex xs6>
                                  <v-text-field
                                    id="juiz_proferiu_sentenca"
                                    label="Juiz que Proferiu a Sentença*"
                                    box
                                    :rules="verificacao"
                                    v-model="sentenca.juiz_proferiu_sentenca"
                                  ></v-text-field>
                              </v-flex>
                              <v-flex xs6 class="pl-3">
                                  <v-text-field
                                    id="autos"
                                    label="Autos"
                                    box
                                    v-model="sentenca.autos"
                                  ></v-text-field>
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
                          v-model="registro.observacoes"
                        ></v-textarea>
                      </v-flex>
                    </v-layouy>
                  </v-tab-item>

                  <!--TELA COMUNICAÇÃO-->

                  <v-tab-item>
                    <div v-for="(comunicacao, i ) in registro.comunicacao" :key="i">
                      <v-layout row pt-3>
                        <v-flex xs4>
                          <v-autocomplete
                            id="documento_anterior"
                            label="Documento Anterior"
                            box
                            v-model="comunicacao.documento_anterior"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3 class="px-3">
                          <v-text-field id="termo" label="Termo" box v-model="comunicacao.termo"></v-text-field>
                        </v-flex>
                        <v-flex xs3>
                          <v-text-field id="livro" label="Livro" box v-model="comunicacao.livro"></v-text-field>
                        </v-flex>
                        <v-felx xs2 class="px-3">
                          <v-text-field id="folha" label="Folha" box v-model="comunicacao.folha"></v-text-field>
                        </v-felx>
                        <v-flex xs5>
                          <v-text-field
                            id="comarca"
                            label="Comarca"
                            box
                            v-model="comunicacao.comarca"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout row pt-2>
                        <v-flex xs1>
                          <v-autocomplete
                            id="uf"
                            label="UF"
                            box
                            :items="selects.uf"
                            item-value="value"
                            item-text="text"
                            v-model="comunicacao.uf"
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
                            v-model="comunicacao.cidade"
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
                <v-layout justify-center class="buttons">
                  <div v-if="variaveis.active < 6">
                    <v-btn @click="next" color="#2934FF" dark>PRÓSSIMO PASSO</v-btn>
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

<script>
export default {
  data() {
    return {
      variaveis: {
        active: 0,
        loading: false
      },

      selects: {
        tipo: ["Contrato"],
        regime_bens: [
          "Aquestos",
          "Comunhão Parcial de Bens",
          "Comunhão Total/Universal de Bens",
          "Não Especificado",
          "Separação Total"
        ],
        sexo:["Masculino", "Feminino"],
        profissao: ["Arquiteto"],
        país: ["Brasil", "Angola"],
        estado: ["Belas", "Bahia"],
        cidade: ["Feira de Santana", "Luanda"],
        uf: ["BA"],
        estado_civil: ["Solteiro(a)", "Casado(a)"]
      },

      items: [
        {
          text: "Livros",
          disabled: true,
          href: "livros"
        },
        {
          text: "Livro E",
          disabled: false,
          href: "/livro_e"
        }
      ],

      verificacao: [verificar => !!verificar || "Campo Obrigatório"],

      registro: {
        interditado: [
          {
            nome: null,
            sexo: null,
            documento_identificacao: null,
            cpf: null,
            data_nascimento: null,
            idade: null,
            profissao: null,
            estado_civil: null,
            conjuge: null,
            nome_pai: null,
            nome_mae: null,
            endereco: {
              logradouro: null,
              numero: null,
              complemento: null,
              bairro: null,
              cep: null
            }
          }
        ],

        curador: [
          {
            nome: null,
            sexo: null,
            documento_identificacao: null,
            cpf: null,
            data_nascimento: null,
            idade: null,
            profissao: null,
            estado_civil: null,
            conjuge: null,
            nome_pai: null,
            nome_mae: null,
            endereco: {
              logradouro: null,
              numero: null,
              complemento: null,
              bairro: null,
              cep: null
            }
          }
        ],

        dados_sentenca:[
            {
                nome_promotor: null,
                data_sentenca: null,
                data_transito_julgado: null,
                data_sentenca_2: null,
                processado_juizo: null,
                juiz_autor_mandado: null,
                juiz_proferiu_senteca: null,
                autos: null,
            }
        ],
        averbacoes: [
          {
            texto_averbacao: null,
            historico_averbacoes: null
          }
        ],

        observações: null,

        comunicacao: [
          {
            documento_anterior: null,
            termo: null,
            livro: null,
            folha: null,
            comarca: null,
            uf: null,
            cidade: null
          }
        ],

        imprimir: [
          {
            assinante: null,
            cidade: null
          }
        ]
      }
    };
  },

  methods:{
      next(){
          const active = parseInt(this.variaveis.active);
          this.variaveis.active = 6 ? active + 1 : active;
      },
      imprimir() {
      let self = this;
      if (this.$refs.form.validate()) {
        alert("imprimindo...");
        this.variaveis.loading = true;
        this.$http
        .post("servicos/tj/registro/....", this.registro)
        .then(function(value) {
          console.log(value);
          if (value.data.erro) {
            self.variaveis.loading = false;
          } else {
            alert("Sucesso");
            self.variaveis.loading = false;
          }
        })
        .catch(function(erro) {
          alert(erro);
          self.variaveis.loading = false;
        });
      }else{
        alert("Campo Obrigatório em Branco")
      }
    },
  }
};
</script>