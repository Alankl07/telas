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
          <span class="titulo">Migração</span>
        </v-card-text>
      </div>

      <v-layout row justify-space-between pr-5 pl-5>
        <v-flex xs>
          <v-icon color="black" small>receipt</v-icon>
          DAJE Habilitação: {{daje.numero}}
        </v-flex>
      </v-layout>

      <v-layout row>
        <v-flex xs12 sm12>
          <template>
            <v-form>
              <v-container pl-5 pr-5>
                <v-tabs v-model="variaveis.active" color="white" slider-color="#2934FF">
                  <v-tab>CASAMENTO</v-tab>
                  <v-tab>TESTEMUNHAS</v-tab>
                  <v-tab-item>
                    <div v-if="variaveis.valid == false">
                      <v-layout row pt-3>
                        <v-flex xs3>
                          <v-text-field
                            id="data_do_termo"
                            label="Data do Termo*"
                            box
                            prepend-inner-icon="event"
                            mask="##/##/####"
                            hint="Apenas Números"
                            v-model="casamento.data_termo"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3 class="px-3">
                          <v-text-field
                            id="emissao_edital"
                            label="Emissão/Edital"
                            box
                            prepend-inner-icon="event"
                            mask="##/##/####"
                            hint="Apenas Números"
                            v-model="casamento.emissao_edital"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs4>
                          <v-text-field
                            id="data_publicacao"
                            label="Data da Publicação"
                            box
                            prepend-inner-icon="event"
                            mask="##/##/####"
                            hint="Apenas Números"
                            v-model="casamento.data_publicacao"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs4 class="px-3">
                          <v-text-field
                            id="data_casamento"
                            label="Data do Casamento"
                            box
                            prepend-inner-icon="event"
                            mask="##/##/####"
                            hint="Apenas Números"
                            v-model="casamento.data_casamento"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2>
                          <v-text-field
                            id="hora"
                            label="Horas*"
                            box
                            prepend-inner-icon="fas fa-clock"
                            mask="##:##"
                            hint="Apenas Números"
                            v-model="casamento.horas"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs3>
                          <v-text-field
                            id="local_casamento"
                            label="Local do Casamento*"
                            box
                            v-model="casamento.local_casamento"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2 class="px-3">
                          <v-autocomplete
                            id="uf"
                            label="UF*"
                            box
                            :items="selects.selectsUF"
                            item-value="value"
                            item-text="text"
                            clearable
                            v-model="casamento.uf"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs4>
                          <v-autocomplete
                            id="cidade"
                            label="Cidade*"
                            box
                            :items="selects.selectsCidade"
                            item-text="text"
                            item-value="value"
                            clearable
                            v-model="casamento.cidade"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs4 class="px-3">
                          <v-autocomplete
                            id="tipo_casamento"
                            label="Tipo de Casamento*"
                            box
                            :items="selects.tipoCasamento"
                            item-text="text"
                            item-value="value"
                            clearable
                            v-model="casamento.tipo_casamento"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs4>
                          <v-autocomplete
                            id="regime_bens"
                            label="Regime de Bens*"
                            box
                            :items="selects.regime_bens"
                            item-text="text"
                            item-value="value"
                            clearable
                            v-model="casamento.regime_bens"
                          ></v-autocomplete>
                        </v-flex>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs3>
                          <v-autocomplete
                            id="juiz"
                            label="Juiz"
                            box
                            :items="selects.juiz"
                            item-text="text"
                            item-value="value"
                            clearable
                            v-model="casamento.juiz"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3 class="pl-3">
                          <v-text-field
                            id="celebrante"
                            label="Celebrante"
                            box
                            v-model="casamento.celebrante"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs4>
                          <v-text-field
                            id="nome_do_juiz"
                            label="Nome do Juiz"
                            box
                            v-model="casamento.nome_do_juiz"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2 class="px-3">
                          <v-checkbox
                            id="juiz_de_paz"
                            label="Juiz de Paz"
                            color="blue"
                            v-model="casamento.juiz_de_paz"
                          ></v-checkbox>
                        </v-flex>
                        <v-flex xs3>
                          <v-text-field id="vara" label="Vara" box v-model="casamento.vara"></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs5>
                          <v-text-field
                            id="primeiro_nome_nubente"
                            label="Nome do Nubente"
                            append-icon="fa-pen"
                            box
                            v-model="casamento.primeiro_nome_nubente"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs5 class="pl-3">
                          <v-text-field
                            id="segundo_nome_nubente"
                            label="Nome do Nubente"
                            append-icon="fa-pen"
                            box
                            v-model="casamento.segundo_nome_nubente"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs6>
                          <v-textarea
                            id="observacao_termo"
                            label="Observação do Termo"
                            box
                            v-model="casamento.observacao_termo"
                          ></v-textarea>
                        </v-flex>
                        <v-flex xs6 class="pl-3">
                          <v-textarea
                            id="observacao_certidao"
                            label="Observação da Certidão"
                            box
                            v-model="casamento.observacao_certidao"
                          ></v-textarea>
                        </v-flex>
                      </v-layout>
                    </div>

                    <div v-if="variaveis.valid == true">
                      <v-layout row pt-3>
                        <v-flex xs3>
                          <v-text-field
                            id="data_do_termo"
                            label="Data do Termo*"
                            box
                            disabled
                            prepend-inner-icon="event"
                            mask="##/##/####"
                            hint="Apenas Números"
                            v-model="casamento.data_termo"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs3 class="px-3">
                          <v-text-field
                            id="emissao_edital"
                            label="Emissão/Edital"
                            box
                            disabled
                            prepend-inner-icon="event"
                            mask="##/##/####"
                            hint="Apenas Números"
                            v-model="casamento.emissao_edital"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs4>
                          <v-text-field
                            id="data_publicacao"
                            label="Data da Publicação"
                            box
                            disabled
                            prepend-inner-icon="event"
                            mask="##/##/####"
                            hint="Apenas Números"
                            v-model="casamento.data_publicacao"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs4 class="px-3">
                          <v-text-field
                            id="data_casamento"
                            label="Data do Casamento"
                            box
                            disabled
                            prepend-inner-icon="event"
                            mask="##/##/####"
                            hint="Apenas Números"
                            v-model="casamento.data_casamento"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2>
                          <v-text-field
                            id="hora"
                            label="Horas*"
                            box
                            disabled
                            prepend-inner-icon="fas fa-clock"
                            mask="##:##"
                            hint="Apenas Números"
                            v-model="casamento.horas"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs3>
                          <v-text-field
                            id="local_casamento"
                            label="Local do Casamento*"
                            box
                            disabled
                            v-model="casamento.local_casamento"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2 class="px-3">
                          <v-autocomplete
                            id="uf"
                            label="UF*"
                            box
                            disabled
                            :items="selects.selectsUF"
                            item-value="value"
                            item-text="text"
                            clearable
                            v-model="casamento.uf"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs4>
                          <v-autocomplete
                            id="cidade"
                            label="Cidade*"
                            box
                            disabled
                            :items="selects.selectsCidade"
                            item-text="text"
                            item-value="value"
                            clearable
                            v-model="casamento.cidade"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs4 class="px-3">
                          <v-autocomplete
                            id="tipo_casamento"
                            label="Tipo de Casamento*"
                            box
                            disabled
                            :items="selects.tipoCasamento"
                            item-text="text"
                            item-value="value"
                            clearable
                            v-model="casamento.tipo_casamento"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs4>
                          <v-autocomplete
                            id="regime_bens"
                            label="Regime de Bens*"
                            box
                            disabled
                            :items="selects.regime_bens"
                            item-text="text"
                            item-value="value"
                            clearable
                            v-model="casamento.regime_bens"
                          ></v-autocomplete>
                        </v-flex>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs3>
                          <v-autocomplete
                            id="juiz"
                            label="Juiz"
                            box
                            disabled
                            :items="selects.juiz"
                            item-text="text"
                            item-value="value"
                            clearable
                            v-model="casamento.juiz"
                          ></v-autocomplete>
                        </v-flex>
                        <v-flex xs3 class="pl-3">
                          <v-text-field
                            id="celebrante"
                            label="Celebrante"
                            box
                            disabled
                            v-model="casamento.celebrante"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs4>
                          <v-text-field
                            id="nome_do_juiz"
                            label="Nome do Juiz"
                            box
                            disabled
                            v-model="casamento.nome_do_juiz"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs2 class="px-3">
                          <v-checkbox
                            id="juiz_de_paz"
                            label="Juiz de Paz"
                            color="blue"
                            disabled
                            v-model="casamento.juiz_de_paz"
                          ></v-checkbox>
                        </v-flex>
                        <v-flex xs3>
                          <v-text-field
                            id="vara"
                            label="Vara"
                            box
                            disabled
                            v-model="casamento.vara"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs5>
                          <v-text-field
                            id="primeiro_nome_nubente"
                            label="Nome do Nubente"
                            append-icon="fa-pen"
                            box
                            disabled
                            v-model="casamento.primeiro_nome_nubente"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs5 class="pl-3">
                          <v-text-field
                            id="segundo_nome_nubente"
                            label="Nome do Nubente"
                            append-icon="fa-pen"
                            box
                            disabled
                            v-model="casamento.segundo_nome_nubente"
                          ></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-layout row pt-3>
                        <v-flex xs6>
                          <v-textarea
                            id="observacao_termo"
                            label="Observação do Termo"
                            box
                            disabled
                            v-model="casamento.observacao_termo"
                          ></v-textarea>
                        </v-flex>
                        <v-flex xs6 class="pl-3">
                          <v-textarea
                            id="observacao_certidao"
                            label="Observação da Certidão"
                            box
                            disabled
                            v-model="casamento.observacao_certidao"
                          ></v-textarea>
                        </v-flex>
                      </v-layout>
                    </div>
                  </v-tab-item>

                  <v-tab-item>
                    <div v-if="variaveis.valid == false">
                      <div v-for="(testemunha, i) in testemunhas " :key="i">
                        <v-layout row pt-3>
                          <v-flex xs2>
                            <v-text-field
                              id="rg"
                              label="RG"
                              box
                              mask="########-##"
                              hint="Apenas Números"
                              v-model="testemunha.rg"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs2 class="px-3">
                            <v-text-field
                              id="cpf"
                              label="CPF"
                              box
                              mask="###.###.###-##"
                              hint="Apenas Números"
                              v-model="testemunha.cpf"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs4>
                            <v-text-field
                              id="nome_testemunha"
                              label="Nomde da Testemunha"
                              box
                              v-model="testemunha.nome_testemunha"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs2 class="px-3">
                            <v-autocomplete
                              id="estado_civil"
                              label="Estado Civil"
                              box
                              :items="selects.estadoCivil"
                              item-text="text"
                              item-value="value"
                              v-model="testemunha.estado_civil"
                            ></v-autocomplete>
                          </v-flex>
                          <v-flex cx2>
                            <v-autocomplete
                              id="profissao"
                              label="Profissão"
                              box
                              v-model="testemunha.profissao"
                            ></v-autocomplete>
                          </v-flex>
                        </v-layout>
                        <v-layout row pt-3>
                          <v-flex xs2>
                            <v-text-field
                              id="cep"
                              label="CEP"
                              box
                              v-model="testemunha.endereco.cep"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs3 class="px-3">
                            <v-text-field
                              id="cidade"
                              label="Cidade"
                              box
                              v-model="testemunha.endereco.cidade"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs2>
                            <v-autocomplete
                              id="uf"
                              label="UF"
                              box
                              :items="selects.selectsUF"
                              item-text="text"
                              item-value="value"
                              v-model="testemunha.endereco.uf"
                            ></v-autocomplete>
                          </v-flex>
                          <v-flex xs4 class="px-3">
                            <v-text-field
                              id="lagradouro"
                              label="Endereço"
                              box
                              v-model="testemunha.endereco.lagradouro"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs2>
                            <v-text-field
                              id="numero"
                              label="Número"
                              box
                              v-model="testemunha.endereco.numero"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs3 class="pl-3">
                            <v-text-field
                              id="complemetno"
                              label="Complemento"
                              box
                              v-model="testemunha.endereco.complemento"
                            ></v-text-field>
                          </v-flex>
                        </v-layout>
                        <v-layout row pt-3>
                          <v-flex xs3>
                            <v-autocomplete
                              id="nacionalidade"
                              label="Nacionalidade"
                              box
                              v-model="testemunha.endereco.nacionalidade"
                            ></v-autocomplete>
                          </v-flex>
                          <v-flex xs4 class="pl-3">
                            <v-text-field
                              id="local_nascimento"
                              label="Local de Nascimento"
                              box
                              v-model="testemunha.endereco.local_nascimento"
                            ></v-text-field>
                          </v-flex>
                        </v-layout>

                        <v-layout pl-3 pr-3>
                          <v-divider></v-divider>
                        </v-layout>

                        <v-layout row pt-4>
                          <v-flex xs2>
                            <v-text-field
                              id="rg"
                              label="RG"
                              box
                              mask="########-##"
                              hint="Apenas Números"
                              v-model="testemunha.rg"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs2 class="px-3">
                            <v-text-field
                              id="cpf"
                              label="CPF"
                              box
                              mask="###.###.###-##"
                              hint="Apenas Números"
                              v-model="testemunha.cpf"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs4>
                            <v-text-field
                              id="nome_testemunha"
                              label="Nomde da Testemunha"
                              box
                              v-model="testemunha.nome_testemunha"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs2 class="px-3">
                            <v-autocomplete
                              id="estado_civil"
                              label="Estado Civil"
                              box
                              :items="selects.estadoCivil"
                              item-text="text"
                              item-value="value"
                              v-model="testemunha.estado_civil"
                            ></v-autocomplete>
                          </v-flex>
                          <v-flex cx2>
                            <v-autocomplete
                              id="profissao"
                              label="Profissão"
                              box
                              v-model="testemunha.profissao"
                            ></v-autocomplete>
                          </v-flex>
                        </v-layout>
                        <v-layout row pt-3>
                          <v-flex xs2>
                            <v-text-field
                              id="cep"
                              label="CEP"
                              box
                              v-model="testemunha.endereco.cep"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs3 class="px-3">
                            <v-text-field
                              id="cidade"
                              label="Cidade"
                              box
                              v-model="testemunha.endereco.cidade"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs2>
                            <v-autocomplete
                              id="uf"
                              label="UF"
                              box
                              :items="selects.selectsUF"
                              item-text="text"
                              item-value="value"
                              v-model="testemunha.endereco.uf"
                            ></v-autocomplete>
                          </v-flex>
                          <v-flex xs4 class="px-3">
                            <v-text-field
                              id="lagradouro"
                              label="Endereço"
                              box
                              v-model="testemunha.endereco.lagradouro"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs2>
                            <v-text-field
                              id="numero"
                              label="Número"
                              box
                              v-model="testemunha.endereco.numero"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs3 class="pl-3">
                            <v-text-field
                              id="complemetno"
                              label="Complemento"
                              box
                              v-model="testemunha.endereco.complemento"
                            ></v-text-field>
                          </v-flex>
                        </v-layout>
                        <v-layout row pt-3>
                          <v-flex xs3>
                            <v-autocomplete
                              id="nacionalidade"
                              label="Nacionalidade"
                              box
                              v-model="testemunha.endereco.nacionalidade"
                            ></v-autocomplete>
                          </v-flex>
                          <v-flex xs4 class="pl-3">
                            <v-text-field
                              id="local_nascimento"
                              label="Local de Nascimento"
                              box
                              v-model="testemunha.endereco.local_nascimento"
                            ></v-text-field>
                          </v-flex>
                        </v-layout>

                        <div v-if="variaveis.adcionar == true">
                          <v-layout pl-3 pr-3>
                            <v-divider></v-divider>
                          </v-layout>

                          <v-layout row pt-4>
                            <v-flex xs2>
                              <v-text-field
                                id="rg"
                                label="RG"
                                box
                                mask="########-##"
                                hint="Apenas Números"
                                v-model="testemunha.rg"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs2 class="px-3">
                              <v-text-field
                                id="cpf"
                                label="CPF"
                                box
                                mask="###.###.###-##"
                                hint="Apenas Números"
                                v-model="testemunha.cpf"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs4>
                              <v-text-field
                                id="nome_testemunha"
                                label="Nomde da Testemunha"
                                box
                                v-model="testemunha.nome_testemunha"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs2 class="px-3">
                              <v-autocomplete
                                id="estado_civil"
                                label="Estado Civil"
                                box
                                :items="selects.estadoCivil"
                                item-text="text"
                                item-value="value"
                                v-model="testemunha.estado_civil"
                              ></v-autocomplete>
                            </v-flex>
                            <v-flex cx2>
                              <v-autocomplete
                                id="profissao"
                                label="Profissão"
                                box
                                v-model="testemunha.profissao"
                              ></v-autocomplete>
                            </v-flex>
                          </v-layout>
                          <v-layout row pt-3>
                            <v-flex xs2>
                              <v-text-field
                                id="cep"
                                label="CEP"
                                box
                                v-model="testemunha.endereco.cep"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs3 class="px-3">
                              <v-text-field
                                id="cidade"
                                label="Cidade"
                                box
                                v-model="testemunha.endereco.cidade"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs2>
                              <v-autocomplete
                                id="uf"
                                label="UF"
                                box
                                :items="selects.selectsUF"
                                item-text="text"
                                item-value="value"
                                v-model="testemunha.endereco.uf"
                              ></v-autocomplete>
                            </v-flex>
                            <v-flex xs4 class="px-3">
                              <v-text-field
                                id="lagradouro"
                                label="Endereço"
                                box
                                v-model="testemunha.endereco.lagradouro"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs2>
                              <v-text-field
                                id="numero"
                                label="Número"
                                box
                                v-model="testemunha.endereco.numero"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs3 class="pl-3">
                              <v-text-field
                                id="complemetno"
                                label="Complemento"
                                box
                                v-model="testemunha.endereco.complemento"
                              ></v-text-field>
                            </v-flex>
                          </v-layout>
                          <v-layout row pt-3>
                            <v-flex xs3>
                              <v-autocomplete
                                id="nacionalidade"
                                label="Nacionalidade"
                                box
                                v-model="testemunha.endereco.nacionalidade"
                              ></v-autocomplete>
                            </v-flex>
                            <v-flex xs4 class="pl-3">
                              <v-text-field
                                id="local_nascimento"
                                label="Local de Nascimento"
                                box
                                v-model="testemunha.endereco.local_nascimento"
                              ></v-text-field>
                            </v-flex>
                          </v-layout>
                        </div>
                        <v-layout>
                          <v-btn @click="adcionar" color="#808080" dark>ADCIONAR TESTEMUNHA</v-btn>
                          <v-btn @click="remover" flat color="#808080">
                            <v-icon>delete</v-icon>REMOVER TESTEMUNHA
                          </v-btn>
                        </v-layout>
                        <v-layout pl-3 pr-3 pt-3>
                          <v-divider></v-divider>
                        </v-layout>
                        <v-layout pt-3>
                          <v-flex xs4>
                            <v-autocomplete
                              id="assinante"
                              label="Assinante"
                              box
                              v-model="testemunhas.assinante"
                            ></v-autocomplete>
                          </v-flex>
                        </v-layout>
                      </div>
                    </div>

                    <div v-if="variaveis.valid == true">
                      <div v-for="(testemunha, i) in testemunhas " :key="i">
                        <v-layout row pt-3>
                          <v-flex xs2>
                            <v-text-field
                              id="rg"
                              label="RG"
                              box
                              disabled
                              mask="########-##"
                              hint="Apenas Números"
                              v-model="testemunha.rg"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs2 class="px-3">
                            <v-text-field
                              id="cpf"
                              label="CPF"
                              box
                              disabled
                              mask="###.###.###-##"
                              hint="Apenas Números"
                              v-model="testemunha.cpf"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs4>
                            <v-text-field
                              id="nome_testemunha"
                              label="Nomde da Testemunha"
                              box
                              disabled
                              v-model="testemunha.nome_testemunha"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs2 class="px-3">
                            <v-autocomplete
                              id="estado_civil"
                              label="Estado Civil"
                              box
                              disabled
                              :items="selects.estadoCivil"
                              item-text="text"
                              item-value="value"
                              v-model="testemunha.estado_civil"
                            ></v-autocomplete>
                          </v-flex>
                          <v-flex cx2>
                            <v-autocomplete
                              id="profissao"
                              label="Profissão"
                              box
                              disabled
                              v-model="testemunha.profissao"
                            ></v-autocomplete>
                          </v-flex>
                        </v-layout>
                        <v-layout row pt-3>
                          <v-flex xs2>
                            <v-text-field
                              id="cep"
                              label="CEP"
                              box
                              disabled
                              v-model="testemunha.endereco.cep"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs3 class="px-3">
                            <v-text-field
                              id="cidade"
                              label="Cidade"
                              box
                              disabled
                              v-model="testemunha.endereco.cidade"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs2>
                            <v-autocomplete
                              id="uf"
                              label="UF"
                              box
                              disabled
                              :items="selects.selectsUF"
                              item-text="text"
                              item-value="value"
                              v-model="testemunha.endereco.uf"
                            ></v-autocomplete>
                          </v-flex>
                          <v-flex xs4 class="px-3">
                            <v-text-field
                              id="lagradouro"
                              label="Endereço"
                              box
                              disabled
                              v-model="testemunha.endereco.lagradouro"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs2>
                            <v-text-field
                              id="numero"
                              label="Número"
                              box
                              disabled
                              v-model="testemunha.endereco.numero"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs3 class="pl-3">
                            <v-text-field
                              id="complemetno"
                              label="Complemento"
                              box
                              disabled
                              v-model="testemunha.endereco.complemento"
                            ></v-text-field>
                          </v-flex>
                        </v-layout>
                        <v-layout row pt-3>
                          <v-flex xs3>
                            <v-autocomplete
                              id="nacionalidade"
                              label="Nacionalidade"
                              box
                              disabled
                              v-model="testemunha.endereco.nacionalidade"
                            ></v-autocomplete>
                          </v-flex>
                          <v-flex xs4 class="pl-3">
                            <v-text-field
                              id="local_nascimento"
                              label="Local de Nascimento"
                              box
                              disabled
                              v-model="testemunha.endereco.local_nascimento"
                            ></v-text-field>
                          </v-flex>
                        </v-layout>

                        <v-layout pl-3 pr-3>
                          <v-divider></v-divider>
                        </v-layout>

                        <v-layout row pt-4>
                          <v-flex xs2>
                            <v-text-field
                              id="rg"
                              label="RG"
                              box
                              disabled
                              mask="########-##"
                              hint="Apenas Números"
                              v-model="testemunha.rg"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs2 class="px-3">
                            <v-text-field
                              id="cpf"
                              label="CPF"
                              box
                              disabled
                              mask="###.###.###-##"
                              hint="Apenas Números"
                              v-model="testemunha.cpf"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs4>
                            <v-text-field
                              id="nome_testemunha"
                              label="Nomde da Testemunha"
                              box
                              disabled
                              v-model="testemunha.nome_testemunha"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs2 class="px-3">
                            <v-autocomplete
                              id="estado_civil"
                              label="Estado Civil"
                              box
                              disabled
                              :items="selects.estadoCivil"
                              item-text="text"
                              item-value="value"
                              v-model="testemunha.estado_civil"
                            ></v-autocomplete>
                          </v-flex>
                          <v-flex cx2>
                            <v-autocomplete
                              id="profissao"
                              label="Profissão"
                              box
                              disabled
                              v-model="testemunha.profissao"
                            ></v-autocomplete>
                          </v-flex>
                        </v-layout>
                        <v-layout row pt-3>
                          <v-flex xs2>
                            <v-text-field
                              id="cep"
                              label="CEP"
                              box
                              disabled
                              v-model="testemunha.endereco.cep"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs3 class="px-3">
                            <v-text-field
                              id="cidade"
                              label="Cidade"
                              box
                              disabled
                              v-model="testemunha.endereco.cidade"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs2>
                            <v-autocomplete
                              id="uf"
                              label="UF"
                              box
                              disabled
                              :items="selects.selectsUF"
                              item-text="text"
                              item-value="value"
                              v-model="testemunha.endereco.uf"
                            ></v-autocomplete>
                          </v-flex>
                          <v-flex xs4 class="px-3">
                            <v-text-field
                              id="lagradouro"
                              label="Endereço"
                              box
                              disabled
                              v-model="testemunha.endereco.lagradouro"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs2>
                            <v-text-field
                              id="numero"
                              label="Número"
                              box
                              disabled
                              v-model="testemunha.endereco.numero"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs3 class="pl-3">
                            <v-text-field
                              id="complemetno"
                              label="Complemento"
                              box
                              disabled
                              v-model="testemunha.endereco.complemento"
                            ></v-text-field>
                          </v-flex>
                        </v-layout>
                        <v-layout row pt-3>
                          <v-flex xs3>
                            <v-autocomplete
                              id="nacionalidade"
                              label="Nacionalidade"
                              box
                              disabled
                              v-model="testemunha.endereco.nacionalidade"
                            ></v-autocomplete>
                          </v-flex>
                          <v-flex xs4 class="pl-3">
                            <v-text-field
                              id="local_nascimento"
                              label="Local de Nascimento"
                              box
                              disabled
                              v-model="testemunha.endereco.local_nascimento"
                            ></v-text-field>
                          </v-flex>
                        </v-layout>

                        <div v-if="variaveis.adcionar == true">
                          <v-layout pl-3 pr-3>
                            <v-divider></v-divider>
                          </v-layout>

                          <v-layout row pt-4>
                            <v-flex xs2>
                              <v-text-field
                                id="rg"
                                label="RG"
                                box
                                disabled
                                mask="########-##"
                                hint="Apenas Números"
                                v-model="testemunha.rg"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs2 class="px-3">
                              <v-text-field
                                id="cpf"
                                label="CPF"
                                box
                                disabled
                                mask="###.###.###-##"
                                hint="Apenas Números"
                                v-model="testemunha.cpf"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs4>
                              <v-text-field
                                id="nome_testemunha"
                                label="Nomde da Testemunha"
                                box
                                disabled
                                v-model="testemunha.nome_testemunha"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs2 class="px-3">
                              <v-autocomplete
                                id="estado_civil"
                                label="Estado Civil"
                                box
                                disabled
                                :items="selects.estadoCivil"
                                item-text="text"
                                item-value="value"
                                v-model="testemunha.estado_civil"
                              ></v-autocomplete>
                            </v-flex>
                            <v-flex cx2>
                              <v-autocomplete
                                id="profissao"
                                label="Profissão"
                                box
                                disabled
                                v-model="testemunha.profissao"
                              ></v-autocomplete>
                            </v-flex>
                          </v-layout>
                          <v-layout row pt-3>
                            <v-flex xs2>
                              <v-text-field
                                id="cep"
                                label="CEP"
                                box
                                disabled
                                v-model="testemunha.endereco.cep"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs3 class="px-3">
                              <v-text-field
                                id="cidade"
                                label="Cidade"
                                box
                                disabled
                                v-model="testemunha.endereco.cidade"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs2>
                              <v-autocomplete
                                id="uf"
                                label="UF"
                                box
                                disabled
                                :items="selects.selectsUF"
                                item-text="text"
                                item-value="value"
                                v-model="testemunha.endereco.uf"
                              ></v-autocomplete>
                            </v-flex>
                            <v-flex xs4 class="px-3">
                              <v-text-field
                                id="lagradouro"
                                label="Endereço"
                                box
                                disabled
                                v-model="testemunha.endereco.lagradouro"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs2>
                              <v-text-field
                                id="numero"
                                label="Número"
                                box
                                disabled
                                v-model="testemunha.endereco.numero"
                              ></v-text-field>
                            </v-flex>
                            <v-flex xs3 class="pl-3">
                              <v-text-field
                                id="complemetno"
                                label="Complemento"
                                box
                                disabled
                                v-model="testemunha.endereco.complemento"
                              ></v-text-field>
                            </v-flex>
                          </v-layout>
                          <v-layout row pt-3>
                            <v-flex xs3>
                              <v-autocomplete
                                id="nacionalidade"
                                label="Nacionalidade"
                                box
                                disabled
                                v-model="testemunha.endereco.nacionalidade"
                              ></v-autocomplete>
                            </v-flex>
                            <v-flex xs4 class="pl-3">
                              <v-text-field
                                id="local_nascimento"
                                label="Local de Nascimento"
                                box
                                disabled
                                v-model="testemunha.endereco.local_nascimento"
                              ></v-text-field>
                            </v-flex>
                          </v-layout>
                        </div>
                        <v-layout>
                          <v-btn disabled @click="adcionar" color="#808080" dark>ADCIONAR TESTEMUNHA</v-btn>
                          <v-btn disabled @click="remover" flat color="#808080">
                            <v-icon>delete</v-icon>REMOVER TESTEMUNHA
                          </v-btn>
                        </v-layout>
                        <v-layout pl-3 pr-3 pt-3>
                          <v-divider></v-divider>
                        </v-layout>
                        <v-layout pt-3>
                          <v-flex xs4>
                            <v-autocomplete
                              id="assinante"
                              label="Assinante"
                              box
                              disabled
                              v-model="testemunhas.assinante"
                            ></v-autocomplete>
                          </v-flex>
                        </v-layout>
                      </div>
                    </div>
                  </v-tab-item>
                </v-tabs>
                <v-layout row justify-center class="buttons">
                  <div v-if="variaveis.active < 1 && variaveis.valid == false">
                    <v-btn @click="next" color="#2934FF" dark>PROXIMO PASSO</v-btn>
                  </div>
                  <div v-if="variaveis.active == 1 && variaveis.valid == false">
                    <v-btn color="#32C458" large dark @click="migrar">MIGRAR</v-btn>
                  </div>
                  <div v-if="variaveis.valid == true">
                    <v-btn dark color="#2934FF" @click="alterarRegistro">ALTERAR REGISTRO</v-btn>
                    <v-btn @click="imprimir" flat>
                      <v-icon class="px-2">print</v-icon>IMPRESSÕES
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
        valid: false,
        migrar: false,
        active: 0,
        adcionar: false
      },

      items: [
        {
          text: "Certidões",
          disabled: true,
          href: "/certidoes"
        },
        {
          text: "Casamento",
          disabeld: false,
          href: "/casamento"
        },
        {
          text: "Habilitação de Casamento",
          disabled: false,
          href: "/habilitacao_de_casamento"
        }
      ],

      daje: {
        tipo: "isento",
        numero: "0000 000 000000"
      },

      //Casamento

      casamento: {
        data_termo: null,
        emissa_edital: null,
        data_publicacao: null,
        data_casamento: null,
        horas: null,
        local_casamento: null,
        uf: null,
        cidade: null,
        tipo_casamento: null,
        regime_bens: null,
        juiz: null,
        celebrante: null,
        nome_do_juiz: null,
        juiz_de_paz: null,
        vara: null,
        primeiro_nome_nubente: null,
        segundo_nome_nubente: null,
        observacao_termo: null,
        observacao_certidao: null
      },

      //Testemunha

      testemunhas: [
        {
          rg: null,
          cpf: null,
          nome_testemunha: null,
          estado_civil: null,
          profissao: null,
          assinante: null,
          endereco: {
            cep: null,
            cidade: null,
            uf: null,
            lagradouro: null,
            numero: null,
            complemento: null,
            nacionalidade: null,
            local_nascimento: null
          }
        }
      ],

      selects: {
        selectsUF: ["BA", "RJ", "SP"],

        selectsCidade: ["Feira de Santana", "Rio de Janeiro", "São Paulo"],

        tipoCasamento: ["Civil", "Religioso"],

        estadoCivil: ["Casado", "Solteiro"]
      }
    };
  },
  methods: {
    next() {
      const active = parseInt(this.variaveis.active);
      this.variaveis.active = active < 1 ? active + 1 : active;
    },

    migrar() {
      this.variaveis.valid = true;
    },

    alterarRegistro() {
      this.variaveis.valid = false;
    },

    imprimir() {
      alert("imprimindo...");
    },

    adcionar() {
      this.variaveis.adcionar = true;
    },

    remover() {
      this.variaveis.adcionar = false;
    }
  }
};
</script>