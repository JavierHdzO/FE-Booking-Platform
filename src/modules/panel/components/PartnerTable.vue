<template>
  <q-page>
    <template v-if="!isLoading"> 
      <div class="q-pa-md q-gutter-xs">
        <div class="q-gutter-md row justify-center" style="font-size: 2em">
          <q-spinner-grid color="teal" size="10rem" style="margin-top: 20vh;" />
        </div>
      </div>
    </template>
    <template v-else>
      <TableComponent 
      :columns="columns"
      :rows="rows"
      :visibleColumns="visibleColumns"
      idKey="uid"  
      v-for="val in 1" :key="val" />
    </template>
    <template v-if="rows.length === 0 && isLoading" >
      <div class="row justify-center text-h6">
        No hay usuarios por mostrar
      </div>
      <div class="row justify-center text-h6">
        <q-icon name="las la-table" color="dark" size="3rem" />
      </div>

    </template>
  </q-page>
</template>

<script>
import { computed, defineAsyncComponent, onMounted } from "vue"
import { useStore } from 'vuex'
import usePartners from '../composables/usePartners'



export default {
  name:"PartnerTable",
  components: {
    TableComponent: defineAsyncComponent(() => import("./TableComponent.vue")),
  },
  setup () {

    const store = useStore()
    const { getUsers } = usePartners()

    onMounted(async () => {
      const {} =  await getUsers()
    })
    
    const columns = [
      {
        name: "uid",
        field: "uid",
        label: "ID",
        align: "center"
      },
      {
        name: "name",
        label: "Nombre completo",
        align: "left",
        field: "name",
      },
      {
        name: "email",
        label: "Email",
        align: "center",
        field: "email",
        sortable: false,
      },
      { name: "phone", label: "Telefono", align: "center", field: "phone" },
      { name: "rfc", label: "RFC", align: "center", field: "rfc" },
      { name: "view", label: "Visualizar", align: "center", field: "view" },
      { name: "delete", label: "Eliminar", align: "center", field: "delete" },
    ]
    
    


    return {

      columns,
      rows: computed(() => store.getters['partners/users']),
      visibleColumns : ['name' ,'email', 'phone', 'rfc', 'view', 'delete', 'edit' ],
      isLoading: computed(()=> store.getters['partners/loading'] ),
     
      
    }
  },
}
</script>

<style scoped>
</style>