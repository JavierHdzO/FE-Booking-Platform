<template>
  <div class="container">
        <div class="imgContainer">
            <img  :src="background" alt="" class="imageLogin">
        </div>
        <div class="formContainer">
            <h1 style="font-weight:800; " class="text-h4">REGISTRARSE</h1>
            <!-- <img src="./Public/usuario.png" alt="" class="user-Icon"> -->
            <form class="form-signUp" @submit.prevent="onSubmit">
                <div class="input-wrapper">
                    <input  v-model="dataForm.name"
                            id="name" type="text" class="name" name="name" required>
                    <label class="text-subtitle1"  for="input-name">Nombre</label>
                </div>
                <div class="input-wrapper">
                    <input  v-model="dataForm.last_name"
                            id="family-name" type="text" class="family-name" name="family-name" required>
                    <label class="text-subtitle1" for="family-name">Apellidos</label>
                </div>
                <div class="input-wrapper">
                    <input  v-model="dataForm.rfc"
                            id="family-name" type="text" class="family-name" name="family-name" required>
                    <label class="text-subtitle1" for="family-name">RFC</label>
                </div>
                <div class="input-wrapper">
                    <input  v-model="dataForm.phone"
                            id="family-name" type="tel" class="family-name" name="family-name" required>
                    <label class="text-subtitle1" for="family-name">Telefono</label>
                </div>
                <div class="input-wrapper">
                    <input  v-model="dataForm.email"
                            id="email" type="email" class="email" name="email" required>
                    <label class="text-subtitle1" for="email">Correo electronico</label>
                </div>
                <div class="input-wrapper">
                    <input  v-model="dataForm.password"
                            id="password" type="password" class="password" name="password" required>
                    <label class="text-subtitle1" for="password">Contraseña</label>
                </div>
                <div class="input-wrapper">
                    <input  v-model="dataForm.confirm_pass"
                            id="confirm-password" type="password" class="" name="" required>
                    <label class="text-subtitle1" for="confirm-password">Confirme su contraseña</label>
                </div>
                <div class="input-wrapper">
                    <input 
                            v-model="dataForm.access_code"
                            id="code" type="text" class="code" name="code" required>
                    <label class="text-subtitle1" for="code">Código de registro</label>
                </div>
                <button class="submit-Button" type="submit">Registrar</button>
                <p><router-link :to="{name:'signin'}">¿Ya tienes una cuenta? Inicia sesión</router-link></p>
            </form>
        </div>
    </div>
</template>

<script>
    import { ref, computed } from "vue"
    import { useRouter } from 'vue-router'
    import { useQuasar } from 'quasar'
    import useAuth from '../composables/useAuth'
    import setBackground from '../helpers/getBackground'

  export default {
    name: 'LoginComponent',
    setup(){

        const dataForm = ref({
            name: '',
            last_name: '',
            phone: '',
            rfc: '',
            email: '',
            password: '',
            confirm_pass: '',
            access_code: ''
        })

        const router = useRouter()
        const $q = useQuasar()
        const { createUser, logIn } = useAuth()

      return{
        background: computed( setBackground ),
        dataForm,
        onSubmit: async() => {
            $q.notify({
                spinner: true,
                message: 'Espere un momento...',
                timeout: 2000
            })

            const { ok, msg } = await createUser( dataForm.value )


            if( !ok ){
                $q.notify({
                    type:'negative',
                    message:msg,
                    icon: 'las la-exclamation-triangle'
                })
                return
            }

            
            const user = {
                email: dataForm.value.email,
                password: dataForm.value.password
            }

            const { ok:ok2, msg:msg2 } = await logIn(user)

            if( !ok2 ){
                $q.notify({
                    type:'negative',
                    icon:'las la-exclamation-triangle',
                    message: msg2
                })

                return
            }

            router.push({ name:'dashboard' })

            



        }
      }
    }
  }
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap");

  *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: 'Raleway', sans-serif;
  }

  :root{
      --greenTree: rgb(3, 65, 3) ;
      --gray: rgb(95, 93, 93);
  }

  .container{
      display: flex;
      height: 100%;
  }

  .imgContainer{
      flex:2 ;
      background-color: black;
  }

  .imageLogin{
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: bottom ;
  }

  .formContainer{
      flex: 1;
      padding: 3em;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }


  .form-signUp{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
  }

  h1{
      color: rgb(3, 65, 3);
      margin-bottom: 1em
  }
  .input-wrapper{
      height: 3em;
      margin: 0.5rem 0.5rem;
      width: 100%;
      position: relative;
  }

  .input-wrapper input{
      font-size: 17px;
      width: 100%;
      height: 100%;
      padding-top: 1em;
      border:none;
      border-bottom: 2px solid ;
      border-color: rgb(95, 93, 93);
  }

  .input-wrapper label{
      position: absolute;
      bottom: 0.3em;
      left: 0;
      pointer-events: none;
      color: rgb(95, 93, 93);
      transition: all 0.3s ease;
  }

  input:focus{
      border-bottom: 2px solid rgb(3, 65, 3);
      outline: none;
  }
  .input-wrapper input:focus ~ label, input:valid ~ label{
      transform: translateY(-2em);
      font-size: 13px;
      color: rgb(3, 65, 3);
  }
  .submit-Button{
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
  .user-Icon{
      width: 6rem;
      /*filter: invert();*/
  }

  @media (max-width: 728px){
      .imgContainer{
          display: none;
      }
  }
</style>