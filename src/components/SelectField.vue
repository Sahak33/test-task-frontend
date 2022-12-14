<template>
  <div>
    <v-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Field is required']"
        :placeholder="label"
        menu-props="auto"
        outlined
        :prepend-inner-icon="select.flag"
        item-text="name"
        class="select"
        return-object
    ></v-select>
  </div>
</template>

<script>
export default {
  name: "SelectField",
  props: {
    label: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      select: '',
    }
  },
  watch: {
    select(newVal) {
      this.$emit('input', newVal)
    }
  }
}
</script>

<style scoped>
.select >>> i {
  margin-right: 10px;
}
</style>