<template>
  <v-container>
    <v-layout row mb-3>
      <v-flex offset-sm3>
        <h2 class="primary--text">Add new place</h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="addPlace">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="title"
                id="title"
                label="Place"
                v-model="title"
                required>
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="imageUrl"
                id="imageUrl"
                label="Image URL"
                v-model="imageUrl"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <img :src="imageUrl" height="250px">
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs12 offset-sm8>
              <v-btn
                class="primary"
                :disabled=!formIsValid
                type="submit">Add place</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      imageUrl: ""
    };
  },
  computed: {
    formIsValid () {
      return this.title.length && this.imageUrl.length
    }
  },
  methods: {
    addPlace () {
      const place = {
        title: this.title,
        imageUrl: this.imageUrl
      }
      this.$store.dispatch('addNewPlace', place);
    }
  }
};
</script>

