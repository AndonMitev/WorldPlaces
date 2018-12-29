<template>
  <h2>{{singlePlace}}</h2>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    singlePlace() {
      return this.$store.getters.singlePlace(this.id);
    }
  }
};
</script>

