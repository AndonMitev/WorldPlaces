<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-carousel>
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
      return this.$store.getters.allPlaces
    }
  }
};
</script>
