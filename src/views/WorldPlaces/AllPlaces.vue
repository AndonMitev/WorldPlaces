<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 md6 lg4 v-for="image in places" :key="image.id">
        <v-card>
          <v-img :src="image.imageUrl" router to="/places/details/:id"></v-img>
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

<style>
v-card-media {
  object-fit: cover;
}
</style>
