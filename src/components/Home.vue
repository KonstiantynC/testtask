<template>
  <div>
    <div class="home__container">
      <div class="home__wrp">
        <div class="home__sign_up">
          <div class="sign_up">Sign Up for Free</div>
          <div class="welcome">Welcome, let’s get to know each other!</div>
        </div>
        <div class="home__registration_form">
          <v-form class="home__input_form" ref="form" @submit.prevent="submit">
            <div class="home__form-text">Full Name</div>
            <v-text-field
              class="home__input-field"
              v-model.trim="formData.name"
              outlined
              single-line
              required
              placeholder="Enter your full name"
              @blur="validateName"
              :class="{'error': !!errors.name}"
            >
              <template v-if="!errors.name" v-slot:label>
                <span class="home__form_custom-label">Enter your full name</span>
              </template>
              <template v-if="errors.name" v-slot:append>
                <p class="error-text">{{ errors.name }}</p>
              </template>
            </v-text-field>

            <div class="home__form-text">Email</div>
            <v-text-field
              class="home__input-field"
              v-model.trim="formData.email"
              :placeholder="errors.email || 'Enter your email'"
              outlined
              single-line
              required
              @blur="validateEmail"
              :class="{'error': !!errors.email}"
            >
              <template v-if="!errors.email" v-slot:label>
                <span class="home__form_custom-label">Enter your email</span>
              </template>
              <template v-if="errors.email" v-slot:append>
                <p class="error-text">{{ errors.email }}</p>
              </template>
            </v-text-field>

            <div class="home__form-text">Phone Number</div>
            <v-text-field
              class="home__input-field"
              :placeholder="errors.phoneNumber || 'Enter your phone number'"
              v-model.trim="formData.phoneNumber"
              outlined
              single-line
              required
              @blur="validatePhoneNumber"
              :class="{'error': !!errors.phoneNumber}"
            >
              <template v-if="!errors.phoneNumber" v-slot:label>
                <span class="home__form_custom-label">Enter your phone number</span>
              </template>
              <template v-if="errors.phoneNumber" v-slot:append>
                <p class="error-text">{{ errors.phoneNumber }}</p>
              </template>
            </v-text-field>

            <div class="home__button_form">
              <v-btn class="btn" block elevation="2" large type="submit">
                <span class="btn_text">Continue</span>
              </v-btn>

              <v-btn class="btn home__btn" block elevation="2" large>
                <span class="btn_text">I have an account</span>
              </v-btn>
            </div>
          </v-form>
        </div>
        <div class="home__footer">
          <p>
            By signing up, you agree to the
            <a class="home__link" href="#">Terms of Service</a> and
            <a class="home__link" href="#">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phoneNumber: ''
      },
      errors: {} as Record<string, string>
    };
  },
  methods: {
    validateName() {
      const nameRegex = /^[a-zA-Z\s]+$/;
      if (!nameRegex.test(this.formData.name)) {
        this.$set(this.errors, 'name', 'Name must contain only letters');
        console.log(this.errors);
      } else {
        this.$delete(this.errors, 'name');
      }
    },
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.formData.email)) {
        this.$set(this.errors, 'email', 'Invalid email address');
        console.log(this.errors);
      } else {
        this.$delete(this.errors, 'email');
      }
    },
    validatePhoneNumber() {
      const phoneRegex = /^\+?\d{10,15}$/;
      if (!phoneRegex.test(this.formData.phoneNumber)) {
        this.$set(this.errors, 'phoneNumber', 'Invalid phone number');
        console.log(this.errors);
      } else {
        this.$delete(this.errors, 'phoneNumber');
      }
    },
    submit() {
      this.validateName();
      this.validateEmail();
      this.validatePhoneNumber();

      if (Object.keys(this.errors).length === 0) {
        console.log('Дані валідні:', this.formData);
        this.formData.name = this.formData.email = this.formData.phoneNumber = ''
      }
    }
  },
});
</script>




<style lang="scss">

.home__container {
  width: 600px;
  height: 660px;
  padding: 52px 32px 0 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #C2C2C6;
}

.home__wrp {
  width: 100%;
}

.home__registration_form {
  width: 100%;
}

.home__sign_up {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.sign_up {
  font-size: 32px;
  margin-bottom: 8px;
}

.welcome {
  margin-bottom: 32px;
}

.home__form-text {
  font-size: 18px;
  margin-bottom: 8px;
}

.v-input__slot {
  border-radius: 10px !important;
  border: 1px solid rgba(51, 55, 65, 1) !important;
  margin: 0 !important;
}





input {
  padding: 0 !important;
  color: #ffffff !important; 
  font-size: 15px;
  &::placeholder {
    color: #A2A3A9 !important; 
    opacity: 0.5 !important;
    font-size: 15px;
  }
}

.home__form_custom-label {
  color: #A2A3A9;
  font-size: 15px;
}

.home__button_form {
  margin-bottom: 48px;
}

.home__btn {
  background-color: rgba(39, 39, 41, 0.3) !important;
  color: white !important;
  border: 1px solid rgba(98, 100, 109, 1);
}

.home__footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 14px;
  text-decoration: none;
  margin-bottom: 0;
  color: rgba(194, 194, 198, 1) ;
}

.home__link {
  color: rgba(245, 245, 246, 1); 
}

.error {
  border-color: red !important;
}

.error-text {
  color: red;
  font-size: 12px;
  margin-top: 4px;
}



</style>
