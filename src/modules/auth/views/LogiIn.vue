<template>
  <q-layout>
    <div class="row">
      <div class="col-7 col-lg-8 col-md-7 col-sm-6 col-xs-1"></div>
      <div class="col-5 col-lg-4 col-md-5 col-sm-6 col-xs-11 items-center flex unique">
        <q-icon name="las la-user" size="8rem" />
        <div>
          <q-form class="form" @submit.prevent="login">
            <q-input
              v-model="email"
              class="input q-my-sm"
              filled
              type="email"
              hint="Email"
            />

            <q-input
              v-model="password"
              class="input q-my-md"
              filled
              :type="isPwd ? 'password' : 'text'"
              hint="Password with toggle"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'las la-low-vision' : 'las la-eye'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>

            <div>
              <p class="center">
                <router-link :to="{ name: 'sign-in' }">
                  ¿No tienes una cuenta? Crea una</router-link
                >
              </p>
              <q-btn
                class="btn q-my-sm"
                unelevated
                rounded
                color="primary"
                label="Iniciar sesion"
              />
            </div>
          </q-form>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
import { ref } from "vue"

export default {
  setup() {
    return {
      password: ref(""),
      isPwd: ref(true),
      email: ref(""),
      login: () => {
        console.log('Authentication')
      }

    }
  },
}
</script>

<style lang="scss" scoped>
.col-7 {
  background-image: url("assets/img/login-bg.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100vh;
}

.col-5 {
  background-color: #fff;
  height: 100hv;
  margin: auto auto;
}

.input {
  width: 25vw;
  margin: 3vh auto;
}

.btn {
  width: 25vw;
}

.center {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

.flex {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-content: center;
}

@media (max-width: 599px) {
  .col-7 {
    background-size: 0%;
    display: none;
  }

  .input {
    width: 70vw;
    margin: 3vh auto;
  }

  .btn {
    width: 70vw;
  }

  .flex.unique {
    background-image: linear-gradient(45deg, rgb(27, 230, 152), #Bef, rgba(100, 223, 69, 0.858));
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    width: 100vw;
  }

  .center, .col-5 {
    margin: 0;
  }

}
</style>
