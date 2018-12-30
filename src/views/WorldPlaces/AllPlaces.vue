<template>
  <v-container grid-list-md text-xs-center>
    <v-layout>
      <v-flex xs12 text-xs-center>
        <v-progress-circular
          :size="100"
          color="primary"
          indeterminate
          v-if="loading">
        </v-progress-circular>
      </v-flex>
    </v-layout>
    <v-layout row wrap v-if="!loading">
      <v-flex xs12 md6 lg4 v-for="image in places" :key="image.id">
        <v-card>
          <v-img
            class="img-photo"
            :src="image.imageUrl"
            height="250px"
            @click="navigate(image.id)"
            router
            to="/places/details/test2"
          ></v-img>
          <v-card-title primary-title>
            <h2 class="display-1">Title</h2>
          </v-card-title>
          <v-card-text>
            <p class="text-md-center">Center align on medium viewport sizes</p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    places() {
      return this.$store.getters.allPlaces;
    },
    loading() {
      return this.$store.getters.loading;
    }
  },
  methods: {
    navigate(imageId) {
      this.$router.push(`/places/details/${imageId}`);
    }
  }
};
</script>


<style scoped>
.img-photo {
  cursor: pointer;
}
</style>

