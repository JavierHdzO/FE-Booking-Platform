<template>
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
            Agregar elemento
          </div>
        </q-header>

        <q-page-container>
          <q-page padding style="padding-top: 10px">

            <div class="q-pa-md">
              <div class="q-gutter-md row">
                <!--Select Estados-->
                <q-card-section>
                  <q-select
                    :disable="disabled"
                    filled
                    v-model="formData.estado"
                    use-input
                    input-debounce="0"
                    label="Estados"
                    dropdown-icon="las la-angle-down"
                    :options="options_edo"
                    @filter="filterFnEdo"
                    style="width: 250px"
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
                    :disable="disabled"
                    filled
                    v-model="formData.municipio"
                    use-input
                    input-debounce="0"
                    label="Municipio"
                    dropdown-icon="las la-angle-down"
                    :options="options_mun"
                    @filter="filterFnMunicipios"
                    style="width: 250px; padding-top:16px"
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
                :readonly="disabled"
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
                :readonly="disabled"
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
                :readonly="disabled"
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
              <div class="q-gutter-md row justify-center">
                <q-file
                  v-if="!disabled"
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
                <template v-else>
                <q-img
                  v-if="formData.img_uno !== null || formData.img_uno !== undefined"
                  :src="formData.img_uno"
                  :ratio="16/9"
                  style="width:40%"
                >
                  <div class="absolute-bottom text-subtitle1 text-center">
                    Imagen 1
                  </div>
                </q-img>
                </template>
                <q-file
                  v-if="!disabled"
                  
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

                  
                </q-file>
                <template v-else>
                <q-img
                  v-if="formData.img_dos !== null || formData.img_dos !== undefined"
                  :src="formData.img_dos"
                  :ratio="16/9"
                  style="width:40%"
                >
                  <div class="absolute-bottom text-subtitle1 text-center">
                    Imagen 2
                  </div>
                </q-img>
                </template>
              </div>
            </div>

            <div class="q-pa-md">
              <div class="q-gutter-md row justify-center">
                <q-file
                  v-if="!disabled"
                  :readonly="disabled"
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

             
                </q-file>

                <template v-else>
                <q-img
                  v-if="formData.img_tres !== null || formData.img_tres !== undefined"
                  :src="formData.img_tres"
                  :ratio="16/9"
                  style="width:40%"
                >
                <div class="absolute-bottom text-subtitle1 text-center">
                    Imagen 3
                  </div>
                </q-img>
                </template>
                <q-file
                  v-if="!disabled"
                  :readonly="disabled"
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

                </q-file>
                <template v-else>
                <q-img
                  v-if="formData.img_cuatro !== null || formData.img_cuatro !== undefined "
                  :src="formData.img_cuatro"
                  :ratio="16/9"
                  style="width:40%"
                >
                  <div class="absolute-bottom text-subtitle1 text-center">
                    Imagen 4
                  </div>
                </q-img>
                </template>
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
              @click="onCancelDialog"
            />
            <q-btn
              v-if="!disabled"
              color="blue-5"
              outline
              no-caps
              icon="las la-check"
              label="Confimar"
              @click="onOKDialog"
            />
          </q-card-actions>
        </q-footer>
      </q-layout>


    </q-card>
  </q-dialog>
</template>

<script>
import { ref, watch } from "vue";
import { useDialogPluginComponent } from "quasar";

import useLocation from "../composables/useLocation";
undefined
import useProjects from '../composables/useProjects';

export default {
  name: "CabinModal",

  props: {
    disabled:{
      type: Boolean,
      default: false
    },
    state:{
      type:String,
      required: false,
      default:''
    },
    city:{
      type:String,
      required: false,
      default:''
    },
    name:{
      type:String,
      required: false,
      default:''
    },
    address:{
      type:String,
      required: false,
      default:''
    },
    url:{
      type:String,
      required: false,
      default:''
    },
    category:{
      type:String,
      required: false,
      default:''
    },
    images:{
      type: Array,
      required: false,
      default: () => [null, null, null, null]
    }
  },

  emits: [...useDialogPluginComponent.emits],
  setup(props) {
    const { createProject } = useProjects()

    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent();

    const { estados, municipios } = useLocation();

    /** Locations estados y municipios */
    const formData = ref({
      estado: props.state,
      municipio: props.city,
      name: props.name,
      address: props.address,
      video: props.url,
      category: props.category,
      img_uno:    props?.images[0] || null,
      img_dos:    props?.images[1] || null,
      img_tres:   props?.images[2] || null,
      img_cuatro: props?.images[3] || null,
    });
    /** Estados select */
    const options_edo = ref(estados);

    /** Municipio select */

    const options_mun = ref([]);
    let municipios_tmp = [];

    watch(formData.value, () => {
      if (formData.value.estado === "") options_mun.value = [];
      options_mun.value = municipios[formData.value.estado];
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
      onOKDialog: async() => {
        
        const form = new FormData()
        form.append('name', formData.value.name)
        form.append('state', formData.value.estado)
        form.append('city', formData.value.municipio)
        form.append('address', formData.value.address)
        form.append('category', formData.value.category)
        form.append('url', formData.value.video)

        form.append('img1', formData.value.img_uno)
        form.append('img2', formData.value.img_dos)
        form.append('img3', formData.value.img_tres)
        form.append('img4', formData.value.img_cuatro)

        
        const {ok, msg} = await createProject(form)

        if(ok){

        }
        
        onDialogOK()
      },
      onCancelDialog: onDialogCancel,


    }
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