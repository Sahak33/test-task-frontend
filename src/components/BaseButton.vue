<template>
  <v-btn
      :disabled="disabled"
      :color="colorBtn"
      class="mr-4"
      @click="click"
  >
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    colorBtn: {
      type: String,
      default: 'success'
    },
    text: {
      type: String,
      default: ''
    },
  },
  methods: {
    click() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>

</style>