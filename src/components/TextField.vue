<template>
    <v-text-field
        v-model="inputValue"
        :rules="inputRules"
        :label="label"
        outlined
    ></v-text-field>
</template>

<script>
export default {
  name: "TextField",
  props: {
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  data() {
    return {
      inputValue: '',
    }
  },
  computed: {
    inputRules() {
      if(this.type === 'text'){
        return [
          v => !!v || 'Field is required',
        ]
      }
      if(this.type === 'email') {
        return [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid',
        ]
      }
      else {
        return  []
      }
    }
  },
  watch: {
    inputValue(newVal) {
      this.$emit('input', newVal)
    }
  }
}
</script>

<style scoped>

</style>