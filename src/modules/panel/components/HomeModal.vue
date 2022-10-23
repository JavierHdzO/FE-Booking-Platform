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
            Agregar cabaña
          </div>
        </q-header>

        <q-page-container>
          <q-page padding style="padding-top: 10px">
            <div class="q-pa-md">
              <div class="q-gutter-md row">
                <!--Select Development-->
                <q-card-section style="padding: 0px">
                  <q-select
                    filled
                    v-model="formData.project"
                    use-input
                    input-debounce="0"
                    label="Proyecto"
                    dropdown-icon="las la-angle-down"
                    :options="options"
                    @filter="filterFn"
                    style="width: 300px"
                    color="positive"
                    borderless
                  >
                    <template v-slot:no-option>
                      <q-item>
                        <q-item-section class="text-grey">
                          No results
                        </q-item-section>
                      </q-item>
                    </template>
                  </q-select>
                </q-card-section>
              </div>
            </div>

            <q-card-section style="max-width: 710px; padding: 0px">
              <q-input
                label="Descripción"
                v-model="formData.description"
                filled
                autogrow
                counter
                maxlength="200"
                style="margin: 16px"
              >
                <template v-slot:append>
                  <q-icon name="las la-comment" color="positive" />
                </template>
              </q-input>
            </q-card-section>

            <div class="q-pa-md">
              <div class="q-gutter-md row justify-center">
                <q-input
                  label="Precio"
                  v-model="formData.price"
                  filled
                  type="number"
                  style="margin: 16px; width: 190px"
                >
                  <template v-slot:append>
                    <q-icon name="las la-dollar-sign" color="positive" />
                  </template>
                </q-input>

                <q-input
                  label="Camas"
                  v-model="formData.beds"
                  filled
                  type="number"
                  style="margin: 16px; width: 190px"
                >
                  <template v-slot:append>
                    <q-icon name="las la-bed" color="positive" />
                  </template>
                </q-input>

                <q-input
                  label="Habitaciones"
                  v-model="formData.rooms"
                  filled
                  type="number"
                  style="margin: 16px; width: 190px"
                >
                  <template v-slot:append>
                    <q-icon name="las la-boxes" color="positive" />
                  </template>
                </q-input>
              </div>
            </div>

            <div class="q-pa-md">
              <div class="q-gutter-sm">
                <div class="text-h6 text-grey-6">Servicios</div>
                <q-checkbox
                  v-model="formData.services"
                  val="Fogata"
                  label="Fogata"
                  color="teal"
                />
                <q-checkbox
                  v-model="formData.services"
                  val="WiFi"
                  label="WiFi"
                  color="orange"
                />
                <q-checkbox
                  v-model="formData.services"
                  val="Agua Caliente"
                  label="Agua Caliente"
                  color="red"
                />
                <q-checkbox
                  v-model="formData.services"
                  val="cyan"
                  label="Cyan"
                  color="cyan"
                />
              </div>

              <div class="q-px-sm">
                The model data: <strong>{{ formData.services }}</strong>
              </div>
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
              label="Cancel"
              @click="onCancelClick"
            />
            <q-btn
              color="blue-5"
              outline
              no-caps
              icon="las la-check"
              label="Confimar"
              @click="onOKClick"
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
  },

  emits: [
    // REQUIRED; need to specify some events that your
    // component will emit through useDialogPluginComponent()
    ...useDialogPluginComponent.emits,
  ],

  setup() {
    // REQUIRED; must be called inside of setup()
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
      useDialogPluginComponent();
    // dialogRef      - Vue ref to be applied to QDialog
    // onDialogHide   - Function to be used as handler for @hide on QDialog
    // onDialogOK     - Function to call to settle dialog with "ok" outcome
    //                    example: onDialogOK() - no payload
    //                    example: onDialogOK({ /*.../* }) - with payload
    // onDialogCancel - Function to call to settle dialog with "cancel" outcome

    /**Form data */
    const formData = ref({
      project: null,
      description: "",
      price: 0,
      beds: 0,
      rooms: 0,
      services: []
    });

    const projects = [];
    const options = ref(projects);

    return {
      /** Form data */
      formData,

      /** Selected development */
      options,

      // This is REQUIRED;
      // Need to inject these (from useDialogPluginComponent() call)
      // into the vue scope for the vue html template
      dialogRef,
      onDialogHide,

      // other methods that we used in our vue html template;
      // these are part of our example (so not required)
      onOKClick() {
        // on OK, it is REQUIRED to
        // call onDialogOK (with optional payload)
        onDialogOK();
        // or with payload: onDialogOK({ ... })
        // ...and it will also hide the dialog automatically
      },

      // we can passthrough onDialogCancel directly
      onCancelClick: onDialogCancel,

      /** Select Projects Function*/
      filterFn(val, update) {
        if (val === "") {
          update(() => {
            options.value = projects;

            // here you have access to "ref" which
            // is the Vue reference of the QSelect
          });
          return;
        }

        update(() => {
          const needle = val.toLowerCase();
          options.value = projects.filter(
            (v) => v.toLowerCase().indexOf(needle) > -1
          );
        });
      },
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