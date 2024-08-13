<template>
  <div>
    <div class="home__container">
      <div class="home__wrp">
        <div class="home__sign_up">
          <div class="sign_up">Sign Up for Free</div>
          <div class="welcome">Welcome, let’s get to know each other!</div>
        </div>
        <div class="home__registration_form">
          <div class="home__input_form">

            <div class="home__form-text">Full Name</div>
            <v-text-field
              class="home__input-field"
              v-model="name"
              outlined
              single-line
              required
              placeholder="Enter your full name"
            >
              <template v-slot:label>
                <span class="home__form_custom-label">Enter your full name</span>
              </template>
            </v-text-field>
            
            <div class="home__form-text">Email</div>
            <v-text-field
              class="home__input-field"
              v-model="email"
              placeholder="Enter your email"
              outlined
              single-line
              required
            >
            <template v-slot:label>
              <span class="home__form_custom-label">Enter your email</span>
            </template>
            </v-text-field>
            
            <div class="home__form-text">Phone Number</div>
            <v-text-field
              class="home__input-field"
              v-model="phoneNumber"
              placeholder ="Enter your phone number"
              outlined
              single-line
              required
            >
              <template v-slot:label>
                <span class="home__form_custom-label">Enter your phone number</span>
              </template>
            </v-text-field>

          </div>

          <div class="home__button_form">
            <v-btn
              class="btn"
              block
              elevation="2"
              large
            >
              <span class="btn_text">
                Continue
              </span>
            </v-btn>

            <v-btn 
              class="btn home__btn"
              block
              elevation="2"
              large
            >
              <span class="btn_text">
                I have an account
              </span>  
            </v-btn>
          </div>  
        </div>
        <div class="home__footer">
          <p>By signing up, you agree to the 
            <a 
              class="home__link" 
              href="#"
            >
              Terms of Service
            </a> 
            and 
            <a 
              class="home__link" 
              href="#"
            >
              Privacy Policy
            </a>
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
      name: '',
      email: '',
      phoneNumber: ''
    };
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
  border: 1px solid #A2A3A9;
  border-radius: 10px;
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
  border: 1px solid #A2A3A9 !important;
  height: 48px !important;
}

.v-input__control .v-text-field__details .v-input__slot {
  margin: 0 !important;
  padding: 0 !important;
}

input {
  padding: 0 !important;
  color: #ffffff !important; /* Зміна кольору введеного тексту */
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
  margin-bottom: 38px;
}

.home__btn {
  background-color: rgba(39, 39, 41, 0.3) !important;
  color: white !important;
  border: 1px solid rgba(98, 100, 109, 1);
}

.v-btn {
  border-radius: 10px !important;
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





</style>
