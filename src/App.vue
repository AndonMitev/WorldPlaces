<template>
  <v-app dark>
    <v-toolbar>
      <v-toolbar-title>WorldPlaces</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        round
        v-for="(link, index) in menuLinks"
        :key="index"
        router
        :to="link.path"
      >{{link.page}}</v-btn>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  computed: {
    menuLinks() {
      if (this.isUserAuthenticated) {
        return this.authenticatedUserLinks();
      } else {
        return this.unAuthenticatedUserLinks();
      }
    },
    isUserAuthenticated() {
      return this.$store.getters.user;
    }
  },
  methods: {
    authenticatedUserLinks() {
      return [
        { page: "Home", path: "/" },
        { page: "Profile", path: "/profile" },
        { page: "All Places", path: "/places/all" },
        { page: "Add Place", path: "/places/add" }
      ];
    },
    unAuthenticatedUserLinks() {
      return [
        { page: "Home", path: "/" },
        { page: "Signup", path: "/signup" },
        { page: "Signin", path: "/signin" },
        { page: "All Places", path: "/places/all" }
      ];
    }
  }
};
</script>


