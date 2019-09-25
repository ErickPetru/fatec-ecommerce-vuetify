<template>
  <v-content>
    <v-app-bar dark color="primary" @dblclick="navegar">
      <v-toolbar-title>e-Commerce Lindo</v-toolbar-title>

      <v-spacer />

      <v-toolbar-items>
        <v-btn icon to="/">
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-btn icon to="/carrinho">
          <v-icon>mdi-cart</v-icon>
        </v-btn>
        <v-btn icon to="/painel/login">
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </v-content>
</template>

<script>
export default {
  methods: {
    navegar () {
      this.$router.push('/sobre')
    }
  }
}
</script>
