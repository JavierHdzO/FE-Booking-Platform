<template>
  <div class="q-pa-md">
    <q-table
      icon-next-page="las la-angle-right"
      icon-prev-page="las la-angle-left"
      icon-first-page="las la-angle-double-left"
      icon-last-page="las la-angle-double-right"
      :title="title"
      flat
      :rows="rows"
      :columns="columns"
      :row-key="idKey"
      :visible-columns="visibleColumn"
      :v-model:pagination="pagination"
      :rows-per-page-options="[0]"
      :filter="filter"
    >
      <template v-slot:body-cell-view="props">
        <q-td :props="props">
          <q-btn
            dense
            icon="las la-eye"
            color="primary"
            @click="onView(props)"
          ></q-btn>
        </q-td>
      </template>

      <template v-slot:body-cell-booking="props">
        <q-td :props="props">
          <q-btn
            dense
            icon="las la-book"
            color="accent"
            @click="onUpdate(props)"
          ></q-btn>
        </q-td>
      </template>

      <template v-slot:body-cell-edit="props">
        <q-td :props="props">
          <q-btn
            dense
            icon="las la-edit"
            color="warning"
            @click="onUpdate(props)"
          ></q-btn>
        </q-td>
      </template>

      <template v-slot:body-cell-delete="props">
        <q-td :props="props">
          <q-btn
            dense
            icon="las la-trash-alt"
            color="negative"
            @click="onDelete(props)"
          ></q-btn>
        </q-td>
      </template>

      <template v-slot:top-left>
        <q-select
          name="Columnas"
          title="Columnas"
          dropdown-icon="las la-angle-down"
          v-model="visibleColumn"
          multiple
          outlined
          dense
          options-dense
          :display-value="$q.lang.table.columns"
          emit-value
          map-options
          :options="columns"
          option-value="name"
          options-cover
          style="min-width: 150px"
        />

        

      </template>

      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="las la-search" />
          </template>
        </q-input>
      </template>
    </q-table>
  </div>
</template>

<script>
import { ref, computed, defineAsyncComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useQuasar } from "quasar";
import usePartners from "../composables/usePartners";
import { useStore } from 'vuex';
export default {
  props: {
    columns: {
      type: Array,
      required: true,
    },
    rows: {
      type: Array,
      required: true,
    },
    visibleColumns: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      default: "",
    },
    idKey:{
      type: String,
      required: true
    }
  },
  setup(props) {
    const $q = useQuasar();
    const $router = useRouter();
    const $route = useRoute();
    const { deleteUser } = usePartners();
    const store = useStore()


    return {
      filter: ref(''),
      visibleColumn: ref(props.visibleColumns),
      pagination: ref({
        rowsPerPage: 10,
      }),
      onView(props) {
        const { key } = props;

        switch ($route.name) {
          case "property-dev":

            console.log(key);
            const clave = store.getters['projects/projectID'](key)
            
            
            const project = store.getters['projects/project'](clave)

            if( !project ) break
  
            console.log( project )
            $q.dialog({
              component: defineAsyncComponent(() =>
                import("./ProjectModal.vue")
              ),
              componentProps:{
                disabled: true,
                ...project
              }
            })

            break
          case "development":
            break

          case "partners":
            const id = store.getters['partners/idUser'](key)
            
            
            const user = store.getters['partners/user'](id)

            if( !user ) break

            $q.dialog({
              component: defineAsyncComponent(() =>
                import("./PartnerViewModal.vue")
              ),
              componentProps:{
                ...user
              }
            })

            break
        }
      },
      onDelete(props) {
        const { key } = props;

        $q.dialog({
          component: defineAsyncComponent(() => import("./ConfirmDelete.vue")),
        })
          .onOk(async () => {
            let ok, msg, type;
            switch ($route.name) {
              case "property-dev":
                break;
              case "development":
                break;

              case "partners":
                const resp = await deleteUser("users", key);
                ok = resp.ok;
                msg = resp.msg;
                type = resp.type;

                break;
            }

            if (ok) {
              $q.notify({
                type,
                message: msg,
                icon: "las la-exclamation-triangle",
              });

              $router.go();
            } else {
            }
          })
          .onCancel(() => {
            console.log("Elemento no eliminado");
          })
          .onDismiss(() => {
            console.log("Llamado cuando Ok o Cancel es llamado");
          });
      },

      onUpdate(props) {
        /**
         * Se debe renderizar dfirentes modales dependiendo la ruta que lo acceda
         */
        console.log($route.name);

        switch ($route.name) {
          case "property-dev":
            $q.dialog({
              component: defineAsyncComponent(() =>
                import("./ProjectModal.vue")
              ),
            })
              .onOk(() => {
                console.log("Elemento actualizado");
              })
              .onCancel(() => {
                console.log("Elemento no actualizado");
              })
              .onDismiss(() => {
                console.log("Llamado cuando Ok o Cancel es llamado");
              });

            break;
          case "development":
            $q.dialog({
              component: defineAsyncComponent(() => import("./HomeModal.vue")),
            })
              .onOk(() => {
                console.log("Elemento actualizado");

                $q.notify({
                  type: "negative",
                  icon: "las la-exclamation-triangle",
                  message: "Actualizado",
                });
              })
              .onCancel(() => {
                console.log("Elemento no actualizado");
              })
              .onDismiss(() => {
                console.log("Llamado cuando Ok o Cancel es llamado");
              });
            break;

          case "partners":
            break;
        }

        console.log(props.key);
      },
    };
  },
};
</script>
