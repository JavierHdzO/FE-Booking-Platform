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
      row-key="id"
      :visible-columns="visibleColumn"
      v-model:pagination="pagination"
      :rows-per-page-options="[0]"
    >
      <template v-slot:body-cell-view="props">
        <q-td :props="props">
          <q-btn
            dense
            icon="las la-eye"
            color="primary"
            @click="onUpdate(props)"
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

      <template v-slot:top-right>
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
    </q-table>
  </div>
</template>

<script>
import { ref, defineAsyncComponent } from "vue";
import { useRoute } from "vue-router";
import { useQuasar } from "quasar";
import { route } from "quasar/wrappers";

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
  },
  setup(props) {
    const $q = useQuasar();
    const $route = useRoute();

    return {
      visibleColumn: ref(props.visibleColumns),
      pagination: ref({
        rowsPerPage: 10,
      }),
      onDelete(props) {
        console.log(props.key);

        $q.dialog({
          component: defineAsyncComponent(() => import("./ConfirmDelete.vue")),
        })
          .onOk(() => {
            console.log("Elemento eliminado");
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
              component: defineAsyncComponent(() => import("./ProjectModal.vue")
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
              })

            break
          case 'development':
            $q.dialog({
              component: defineAsyncComponent(() => import("./HomeModal.vue")
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
              })
          break

          case 'partners':

           break
        }

        console.log(props.key);
      },
    };
  },
};
</script>
