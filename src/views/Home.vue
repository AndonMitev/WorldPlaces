<template>
  <v-container>
    <v-layout>
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular
          :size="100"
          color="primary"
          indeterminate
          v-if="loading">
        </v-progress-circular>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-carousel v-if="!loading">
          <v-carousel-item v-for="item in places"
          :key="item.id"
          :src="item.imageUrl"
          contain></v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  computed: {
    places () {
      return this.$store.getters.allPlaces;
    },
    loading() {
      return this.$store.getters.loading;
    }
  }
};
</script>
