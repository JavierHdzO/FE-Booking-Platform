<template>
  <!-- notice dialogRef here -->
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card
      class="q-dialog-plugin q-pa-md bg-blue-grey-1 row full-height ancho"
    >
      <q-layout
        view="lHh Lpr lFf"
        container
        class="shadow-2 rounded-borders full height ancho"
      >
        <q-header>
          <div
            class="bg-grey-3 text-dark text-h5 text-center text-weight-medium"
          >
            Vista general de socio
          </div>
        </q-header>

        <q-page-container>
          <q-page padding style="padding-top: 10px">
            <div class="q-pa-md">
              <q-card-section style="max-width: 710px" class="column items-center full-width justify-center">
                <q-avatar size="100px">
                  <q-img  v-if="profile == '' || !profile"  src="boy-avatar.png" />
                  <q-img v-else :src="profile" />
                </q-avatar>
                <div>id</div>
                <q-input
                  v-model="formData.id"
                  readonly
                  color="positive"
                  filled
                  borderless
                  style="width: 250px"
                  input-class="text-center"
                >
                </q-input>
              </q-card-section>

              <div>
                <div class="q-gutter-md row">
                  <q-card-section class="column items-center justify-center">
                    Nombre(s)
                    <q-input
                      v-model="formData.name"
                      readonly
                      color="positive"
                      style="width: 270px"
                      filled
                      borderless
                      
                    >
                      <template v-slot:append>
                        <q-icon name="las la-signature" color="positive" />
                      </template>
                    </q-input>
                  </q-card-section>
                  <q-card-section class="column items-center justify-center" >
                    Apellido(s)
                    <q-input
                      v-model="formData.last_name"
                      readonly
                      color="positive"
                      style="width:270px; padding-top:16px"
                      filled
                      borderless
                    >
                      <template v-slot:append>
                        <q-icon name="las la-signature" color="positive" />
                      </template>
                    </q-input>
                  </q-card-section>
                </div>
              </div>

              <div>
                <div class="q-gutter-md row">
                  <q-card-section class="column items-center justify-center">
                    RFC
                    <q-input
                      v-model="formData.rfc"
                      readonly
                      color="positive"
                      style="width: 270px"
                      filled
                      borderless
                    >
                      <template v-slot:append>
                        <q-icon name="las la-signature" color="positive" />
                      </template>
                    </q-input>
                  </q-card-section>
                  <q-card-section  class="column items-center justify-center">
                    Telefono
                    <q-input
                      v-model="formData.phone"
                      readonly
                      color="positive"
                      style="width:270px; padding-top:16px"
                      filled
                      borderless
                    >
                      <template v-slot:append>
                        <q-icon name="las la-signature" color="positive" />
                      </template>
                    </q-input>
                  </q-card-section>
                </div>
              </div>

              <q-card-section style="max-width: 710px" class="column justify-center  items-center full-width">
                Email
                <q-input
                  v-model="formData.email"
                  readonly
                  color="positive"
                  filled
                  style="width: 350px"
                  borderless
                >
                  <template v-slot:append>
                    <q-icon name="las la-envelope" color="positive" />
                  </template>
                </q-input>
              </q-card-section>
              
            </div>
          </q-page>
        </q-page-container>

        <q-footer>
          <q-card-actions align="right" class="bg-grey-3">
            <q-btn
              color="negative"
              outline
              no-caps
              icon="las la-times"
              label="Cerrar"
              @click="onCancelClick"
            />
          </q-card-actions>
        </q-footer>
      </q-layout>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from "vue";
import { useDialogPluginComponent } from "quasar";

export default {
  props: {
    // ...your custom props
    name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    profile: {
      type: String,
      required: false
    },
    phone: {
      type: String,
      required: true,
    },
    rfc: {
      type: String,
      required: true,
    },
    uid: {
      type: String,
      required: true,
    },
  },

  emits: [
    // REQUIRED; need to specify some events that your
    // component will emit through useDialogPluginComponent()
    ...useDialogPluginComponent.emits,
  ],

  setup(props) {
    // REQUIRED; must be called inside of setup()
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
      useDialogPluginComponent();
    // dialogRef      - Vue ref to be applied to QDialog
    // onDialogHide   - Function to be used as handler for @hide on QDialog
    // onDialogOK     - Function to call to settle dialog with "ok" outcome
    //                    example: onDialogOK() - no payload
    //                    example: onDialogOK({ /*.../* }) - with payload
    // onDialogCancel - Function to call to settle dialog with "cancel" outcome


    const projects = [];
    const options = ref(projects);
    const formData = {
      id: props.uid,
      name: props.name,
      last_name: props.last_name,
      email: props.email,
      rfc: props.rfc,
      phone: props.phone
    };

    return {
      /** Selected development */
      formData,
      options,

      // This is REQUIRED;
      // Need to inject these (from useDialogPluginComponent() call)
      // into the vue scope for the vue html template
      dialogRef,
      onDialogHide,

      // we can passthrough onDialogCancel directly
      onCancelClick: onDialogCancel,
    };
  },
};
</script>

<style scoped>
.ancho {
  width: 750px;
  max-width: 800px;
}

.p-c {
  padding-top: 1px;
  padding-bottom: 1px;
}
</style>