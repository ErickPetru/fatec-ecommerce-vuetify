<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark elevation="0">
              <v-toolbar-title>Acesso administrativo</v-toolbar-title>
            </v-toolbar>

            <v-card-text>
              <v-form>
                <v-text-field v-model="login" label="Usuário" prepend-icon="mdi-face" />
                <v-text-field v-model="password" label="Senha" prepend-icon="mdi-lock" type="password" />
                <v-alert transition="scale-transition" type="error" :value="!!alerta">{{ alerta}}</v-alert>
              </v-form>
            </v-card-text>

            <v-card-actions class="justify-end pa-4">
              <v-spacer />
              <v-btn text color="primary" @click="acessar">Acessar</v-btn>
              <v-btn text to="/">Voltar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data () {
    return {
      login: '',
      password: '',
      alerta: ''
    }
  },
  methods: {
    acessar () {
      if (this.login === 'erick' && this.password === '123') {
        this.$ls.set('user', {
          login: this.login,
          nome: 'Erick Petrucelli',
          email: 'erick.petrucelli@fatectq.edu.br'
        })
        this.$router.push('/painel')
      } else {
        this.alerta = 'Usuário ou senha não correspondentes.'
      }
    }
  }
}
</script>
