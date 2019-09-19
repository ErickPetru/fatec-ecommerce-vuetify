<template>
  <div>
    <v-app-bar
      absolute
      dark
      dense
      color="#369"
      shrink-on-scroll>
      <v-toolbar-title @click="navegar">e-Commerce Lindo</v-toolbar-title>

      <v-toolbar-items>
        <router-link to="/">
          <v-btn icon>
            <v-icon>mdi-home</v-icon>
          </v-btn>
        </router-link>
        <router-link to="/carrinho">
          <v-btn icon>
            <v-icon>mdi-cart</v-icon>
          </v-btn>
        </router-link>
        <router-link to="/painel/login">
          <v-btn icon>
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </router-link>
      </v-toolbar-items>
    </v-app-bar>
  </div>
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
