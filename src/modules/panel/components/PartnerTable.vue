<template>
  <q-page>
    <template v-if="!isLoading"> 
    
      cargando
    </template>
    <template v-else>
      <TableComponent 
      :columns="columns"
      :rows="rows"
      :visibleColumns="visibleColumns"  
      v-for="val in 1" :key="val" />
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
      await getUsers()
    })
    
    const columns = [
      {
        name: "id",
        field: "id",
        label: "ID",
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
      { name: "edit", label: "Editar", align: "center", field: "edit" },
      { name: "delete", label: "Eliminar", align: "center", field: "delete" },
      // { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
      // { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: false, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
      // { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: false, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
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