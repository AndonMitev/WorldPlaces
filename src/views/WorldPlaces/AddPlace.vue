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
              <v-btn
                raised
                @click="onPickFile">
                  Upload Image
                </v-btn>
              <input
                type="file"
                style="display: none"
                ref="fileInput"
                accept="image/*"
                @change="onFilePicked"/>
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
      imageUrl: "",
      image: null
    };
  },
  computed: {
    formIsValid () {
      return this.title.length && this.image;
    }
  },
  methods: {
    addPlace () {
      if(!this.formIsValid) {
        return;
      }
      const place = {
        title: this.title,
        image: this.image
      }
      this.$store.dispatch('addNewPlace', place);
      this.$router.push('/places/all');
    },
    onPickFile() {
      this.$refs.fileInput.click();
    },
    onFilePicked(event) {
      const files = event.target.files;
      const filename = files[0].name;

      if(filename.indexOf('.') === -1) {
        return alert('Please add a valid file!');
      }

      const fileReader = new FileReader();
      fileReader.addEventListener('load', () => this.imageUrl = fileReader.result);
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
    }
  }
};
</script>

