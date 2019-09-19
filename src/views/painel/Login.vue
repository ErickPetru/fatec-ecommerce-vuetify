<template>
  <v-content>
    <v-container
      class="fill-height"
      fluid>
      <v-row
        align="center"
        justify="center">
        <v-col
          cols="12"
          sm="8"
          md="4">
          <v-card class="elevation-12">
            <v-toolbar
              color="primary"
              dark
              flat
            >
              <v-toolbar-title>Acesso administrativo</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Usuário"
                  name="login"
                  prepend-icon="mdi-face"
                  type="text"
                ></v-text-field>

                <v-text-field
                  id="password"
                  label="Senha"
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn color="primary" @click="acessar">Acessar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  methods: {
    acessar () {
      this.$router.push('/painel')
    }
  }
}
</script>
