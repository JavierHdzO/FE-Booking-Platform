<template>
    <div class="container">
      <div class="imgContainer">
        <img :src="background" alt="" class="imageLogin" />
      </div>
      <div class="formContainer">
        <h1 class="text-h4 text-weight-bold">INICIAR SESIÓN</h1>
        
        <form class="form-login" @submit.prevent="onSubmit">
          <div class="input-wrapper">
            <input
              v-model="user.email"
              id="email"
              type="email"
              class="text-subtitle1"
              name="email"
              required
            />
            <label class="text-subtitle1" for="email">Correo electrónico</label>
          </div>
          <div class="input-wrapper">
            <input
              v-model="user.password"
              id="password"
              type="password"
              class="text-subtitle1"
              name="password"
              required
            />
            <label class="text-subtitle1" for="password">Contraseña</label>
          </div>
          <button 
              class="submitBtn"
              type="submit"
              >Entrar</button>
          <p><router-link :to="{name:'sign-up'}">¿No estas registrado? Crea una cuenta</router-link></p>
          <p><router-link to="">Recuperar contraseña</router-link></p>
          
        </form>
      </div>
    </div>
</template>

<script>
import { ref, computed } from "vue"
import { useStore } from "vuex"
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
import useAuth from '../composables/useAuth'
import setBackground from '../helpers/getBackground'

export default {
  name: 'LoginComponent',
  setup(){

    const router = useRouter()
    const store = useStore()
    const $q = useQuasar()
    const { logIn } = useAuth()

    const user = ref({
      email:'',
      password: ''
    })
    
    const isAdmin = computed(()=> store.getters['auth/isAdmin'])

    return{
      isAdmin,
      background: computed( setBackground ),
      user,
      onSubmit: async() => {

        const { ok, msg } = await logIn( user.value )

        
        if ( !ok ){

          $q.notify({
            type:'negative',
            icon:'las la-exclamation-triangle',
            message: msg
          })

          return
        }

        if(isAdmin.value)
          router.push({name:'dashboard'})
        
        router.push({name:'development'})
        
      }
    }
  }
};
</script>

<style scoped>

@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
}


.container {
  display: flex;
  height: 100%;
  overflow-y: hidden;
}

.imgContainer {
  flex: 2;
  background-color: black;
}

.imageLogin {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom;
}

.formContainer {
  flex: 1;
  padding: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form-login {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}


h1 {
  color: rgb(3, 65, 3);
  margin-bottom: 1em;
}
.input-wrapper {
  height: 3em;
  margin: 0.5rem 0.5rem;
  width: 100%;
  position: relative;
}

.input-wrapper input {
  font-size: 17px;
  width: 100%;
  height: 100%;
  padding-top: 1em;
  border: none;
  border-bottom: 2px solid;
  border-color: rgb(95, 93, 93);
}

.input-wrapper label {
  position: absolute;
  bottom: 0.3em;
  left: 0;
  pointer-events: none;
  color: rgb(95, 93, 93);
  transition: all 0.3s ease;
}

input:focus {
  border-bottom: 2px solid rgb(3, 65, 3);
  outline: none;
}

.input-wrapper input:focus ~ label,
input:valid ~ label {
  transform: translateY(-2em);
  font-size: 13px;
  color: rgb(3, 65, 3);
}

.submitBtn {
  background-color: rgb(3, 65, 3);
  color: white;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  padding: 0.7em;
  margin: 0.5rem 0.5rem;
  width: 100%;
  height: 3em;
}

.user-Icon {
  width: 6rem;
  /*filter: invert();*/
}

@media (max-width: 728px) {
  .imgContainer {
    display: none;
  }
}
</style>
