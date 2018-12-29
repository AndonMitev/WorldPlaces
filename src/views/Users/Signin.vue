<template>
  <v-container>
    <v-layout row v-if="error">
      <v-flex xs12 sm6 offset-sm3>
        <app-alert @dismissed="closeAlert" :text="error"></app-alert>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <v-layout row>
                <v-flex>
                  <form @submit.prevent="onSignIn">
                    <v-layout row>
                      <v-flex>
                        <v-text-field
                          type="email"
                          name="email"
                          id="email"
                          label="Email"
                          v-model="email"
                          required="Email is required"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex>
                        <v-text-field
                          type="password"
                          name="password"
                          id="password"
                          label="Password"
                          v-model="password"
                          required="Password is required"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout>
                      <v-spacer></v-spacer>
                      <v-flex>
                        <v-btn
                          type="submit"
                          :disabled="loading"
                          :loading="loading">
                          Sign Up
                          <span slot="loader" class="custom-loader">
                            <v-icon light>cached</v-icon>
                          </span>
                        </v-btn>
                      </v-flex>
                    </v-layout>
                  </form>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    error() {
      return this.$store.getters.error;
    },
    loading() {
      return this.$store.getters.loading;
    }
  },
  watch: {
    user(value) {
      if (value) {
        this.$router.push("/");
      }
    }
  },
  methods: {
    onSignIn() {
      this.$store.dispatch("signUserIn", {
        email: this.email,
        password: this.password
      });
    },
    closeAlert() {
      this.$store.dispatch("clearError");
    }
  }
};
</script>
