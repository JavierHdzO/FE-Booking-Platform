<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="ancho" bordered>
      <q-card-section >
        <div class="text-h5 text-weight-medium">Agregar elemento</div>
      </q-card-section>

      <div class="q-pa-md">
        <div class="q-gutter-md row">
          <!--Select Estados-->
          <q-card-section>
            <q-select
              filled
              v-model="formData.estado"
              use-input
              input-debounce="0"
              label="Estados"
              dropdown-icon="las la-angle-down"
              :options="options_edo"
              @filter="filterFnEdo"
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

          <!--Select Municipios-->
          <q-card-section>
            <q-select
              filled
              v-model="formData.municipio"
              use-input
              input-debounce="0"
              label="Municipio"
              dropdown-icon="las la-angle-down"
              :options="options_mun"
              @filter="filterFnMunicipios"
              style="width: 300px"
              borderless
              color="positive"
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

      <q-card-section style="max-width: 710px">
        <q-input
          v-model="formData.name"
          label="Nombre"
          color="positive"
          style="margin: 16px"
          filled
          borderless
        >
          <template v-slot:append>
            <q-icon name="las la-signature" color="positive" />
          </template>
        </q-input>
      </q-card-section>

      <q-card-section style="max-width: 710px">
        <q-input
          v-model="formData.address"
          label="Direccion"
          color="positive"
          style="margin: 16px"
          filled
          borderless
        >
          <template v-slot:append>
            <q-icon name="las la-map-marker" color="positive" />
          </template>
        </q-input>
      </q-card-section>

      <q-card-section style="max-width: 710px">
        <q-input
          v-model="formData.video"
          label="Link de video"
          color="positive"
          style="margin: 16px"
          filled
          borderless
        >
          <template v-slot:append>
            <q-icon name="lab la-youtube" color="positive" />
          </template>
        </q-input>
      </q-card-section>

      <div class="q-pa-md">
        <div class="q-gutter-md row justify-center ">
          <q-file
            filled
            bottom-slots
            v-model="formData.img_uno"
            label="Imagen 1"
            counter
            max-files="1"
            style="margin: 32px"
          >
            <template v-slot:before>
              <q-icon name="las la-photo-video" />
            </template>

            <template v-slot:hint> Field hint </template>

            <!-- <template v-slot:append>
              <q-btn round dense flat icon="add" @click.stop.prevent />
            </template> -->
          </q-file>

          <q-file
            filled
            bottom-slots
            v-model="formData.img_dos"
            label="Imagen 2"
            counter
            max-files="1"
            style="margin: 32px"
          >
            <template v-slot:before>
              <q-icon name="las la-photo-video" />
            </template>

            <template v-slot:hint> Field hint </template>

            <!-- <template v-slot:append>
              <q-btn round dense flat icon="add" @click.stop.prevent />
            </template> -->
          </q-file>
        </div>
      </div>

    <div class="q-pa-md">
        <div class="q-gutter-md row justify-center">
          <q-file
            filled
            bottom-slots
            v-model="formData.img_tres"
            label="Imagen 3"
            counter
            max-files="1"
            style="margin: 32px"
          >
            <template v-slot:before>
              <q-icon name="las la-photo-video" />
            </template>

            <template v-slot:hint> Field hint </template>

            <!-- <template v-slot:append>
              <q-btn round dense flat icon="add" @click.stop.prevent />
            </template> -->
          </q-file>

          <q-file
            filled
            bottom-slots
            v-model="formData.img_cuatro"
            label="Imagen 4"
            counter
            max-files="1"
            style="margin: 32px"
          >
            <template v-slot:before>
              <q-icon name="las la-photo-video" />
            </template>

            <template v-slot:hint> Field hint </template>

            <!-- <template v-slot:append>
              <q-btn round dense flat icon="add" @click.stop.prevent />
            </template> -->
          </q-file>
        </div>
      </div>




      <q-card-actions align="right">
        <q-btn color="negative" outline no-caps icon="las la-times"   label="Cancelar" @click="onCancelDialog"></q-btn>
        <q-btn color="blue-5" outline no-caps icon="las la-check" label="Confirmar" @click="onOKDialog"></q-btn>
      </q-card-actions>
    </q-card>

    
  </q-dialog>
</template>

<script>
import { ref, watch } from "vue";
import { useDialogPluginComponent } from "quasar";

import useLocation from "../composables/useLocation";

export default {
  name: "CabinModal",
  props: {},
  emits: [...useDialogPluginComponent.emits],
  setup() {
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
      useDialogPluginComponent();

    const { estados, municipios } = useLocation();

    /** Locations estados y municipios */
    const formData = ref({
      estado: null,
      municipio: null,
      name: null,
      address: null,
      video: null,
      img_uno: null,
      img_dos: null,
      img_tres: null,
      img_cuatro: null
    });
    /** Estados select */
    const options_edo = ref(estados);

    /** Municipio select */

    const options_mun = ref([]);
    let municipios_tmp = [];

    watch(formData.value, () => {
        
      if (formData.value.estado === "") options_mun.value = []
      options_mun.value = municipios[formData.value.estado]
      municipios_tmp = options_mun.value;
    });

    return {
      /**Select */
      formData,
      options_edo,
      options_mun,

      /**Select Functions */
      filterFnEdo(val, update) {
        if (val === "") {
          update(() => {
            options_edo.value = estados;

            // here you have access to "ref" which
            // is the Vue reference of the QSelect
          });
          return;
        }

        update(() => {
          const needle = val.toLowerCase();
          options_edo.value = estados.filter(
            (v) => v.toLowerCase().indexOf(needle) > -1
          );
        });
      },

      filterFnMunicipios(val, update) {
        if (val === "") {
          update(() => {
            options_mun.value = municipios_tmp;

            // here you have access to "ref" which
            // is the Vue reference of the QSelect
          });
          return;
        }

        update(() => {
          const needle = val.toLowerCase();
          options_mun.value = municipios_tmp.filter(
            (v) => v.toLowerCase().indexOf(needle) > -1
          );
        });
      },

      /**Dialog functions */
      dialogRef,
      onDialogHide,
      onOKDialog() {
        onDialogOK();
      },
      onCancelDialog: onDialogCancel,
    };
  },
};
</script>

<style scoped>
.ancho {
  width: 750px;
  max-width: 800px;
}
</style>