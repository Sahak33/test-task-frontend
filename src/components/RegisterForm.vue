<template>
  <v-form
      v-model="valid"
      ref="form"
      lazy-validation
    >
    <v-container>
      <v-row class="text-center justify-center">
        <v-col cols="4" class="reg">
          <TextField v-model="form.name" label="Full Name"/>
          <SelectField label="Country" :items="countries" v-model="select"/>
          <div class="phone-number-cont">
            <PhoneNumberField
                :class="{ 'error-phone-number': errorPhoneNumber }"
                :code="select.idd"
                label="Phone Number"
                v-model="form.phone"
                :error="errorPhoneNumber"
            />
            <span v-if="errorPhoneNumber">Phone is required</span>
          </div>
          <TextField v-model="form.email" label="E-mail" type="email"/>
          <BaseButton text="register" @click="register"/>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
  import TextField from "@/components/TextField.vue";
  import SelectField from "@/components/SelectField.vue";
  import PhoneNumberField from "@/components/PhoneNumberField.vue";
  import countries from '@/utils/countries.json'
  import BaseButton from "@/components/BaseButton.vue";

  export default {
    name: 'RegisterForm',
    components: {BaseButton, PhoneNumberField, SelectField, TextField},
    data() {
      return {
        valid: false,
        errorPhoneNumber: false,
        form: {
          phone: '',
          name: '',
          email: '',
          country: ''
        },
        select: {
          idd: '',
          name: '',
          flag: ''
        },
        countries: []
      }
    },
    mounted() {
      this.countries = countries
    },
    methods: {
      register () {
        this.errorPhoneNumber = this.form.phone.length < 9 ?? false
        this.$refs.form.validate()
        if (!this.$refs.form.validate() || this.errorPhoneNumber) return
        this.axios.post('/api/auth/register', this.form)
          .then(() => {
            this.$toast.success("Registered successfully");
          })
          .catch((e) => {
            this.$toast.error(e.message);
          })
      },
    },
    watch: {
      'form.phone'(newVal){
        this.errorPhoneNumber = newVal?.length < 9 ?? false
      },
      select(newVal) {
        this.form.country = newVal?.name
      }
    }
  }
</script>
<style scoped>
.error-phone-number >>> label {
  color: #ff5252;
  animation: v-shake 0.6s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.error-phone-number >>> fieldset {
  border-radius: 40px;
  border: 2px solid #ff5252;
  transition-duration: 0.15s;
  transition-property: color;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);

}
.reg >>> fieldset {
  border-radius: 40px;
}
.phone-number-cont {
  display: flex;
  position: relative;
  flex-wrap: wrap;
}
.phone-number-cont div {
  width: 100%;
}
.phone-number-cont span {
  position: absolute;
  bottom: 8px;
  color: #ff5252;
  caret-color: #ff5252;
  line-height: 12px;
  flex: 1 1 auto;
  font-size: 12px;
  min-height: 14px;
  min-width: 1px;
  padding: 0 12px;
}
</style>
