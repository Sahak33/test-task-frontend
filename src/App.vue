<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <RegisterForm/>
    </v-main>
  </v-app>
</template>

<script>
import RegisterForm from './components/RegisterForm.vue';

export default {
  name: 'App',

  components: {
    RegisterForm,
  },

  data: () => ({
    //
  }),
};
</script>
