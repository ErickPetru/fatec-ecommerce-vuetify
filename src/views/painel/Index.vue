<template>
  <v-content>
    <v-app-bar dark color="secondary">
      <v-toolbar-title>
        <small>e-Commerce Lindo</small>
        <v-icon small>mdi-arrow-right</v-icon>
        Painel de Controle
      </v-toolbar-title>

      <v-spacer />

      <v-toolbar-items>
        <v-btn icon @click="sair">
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-container>
      <v-row>
        <v-col cols="12" class="text-center">
          Olá, seja bem-vindo!
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  methods: {
    sair () {
      this.$router.push('/')
    }
  }
}
</script>
