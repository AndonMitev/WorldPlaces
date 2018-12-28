<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item v-for="item in places"
          :key="item.id"
          :src="item.imageUrl"></v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      places: [
        {
          imageUrl:
            "https://images.musement.com/cover/0002/42/view-on-manhattan-at-night-new-york-usa-jpg_header-141511.jpeg",
          id: "test1"
        },
        {
          imageUrl:
            "https://www.thelocal.fr/userdata/images/article/03820becd623391f4496c8dbdc6eb9d7b8be5525d96441a80739240ef79b1a0b.jpg",
          id: "test2"
        }
      ]
    };
  }
};
</script>
