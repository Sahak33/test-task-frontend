<template>
  <div>
    <v-text-field-simplemask
        v-model="inputValue"
        :label="label"
        :options="{
          inputMask: '+### ## ###-##-##',
          outputMask: '+### ## ###-##-##',
          empty: null,

        }"
        :properties="{
          outlined: true,
          clearable: true
        }"
    ></v-text-field-simplemask>
  </div>
</template>

<script>
export default {
  name: "PhoneNumberField",
  props: {
    label: {
      type: String,
      default: ''
    },
    code: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      inputValue: '',
    }
  },
  watch: {
    code(newVal) {
      this.inputValue = newVal
    },
    inputValue(newVal) {
      this.$emit('input', newVal)
    }
  }
}
</script>
<style scoped>
</style>