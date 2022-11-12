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
        idKey="id"
    />
    </template>
    </q-page>
</template>

<script>
import { computed, defineAsyncComponent, onBeforeMount } from 'vue'
import { useStore } from 'vuex'


import useProjects from '../composables/useProjects'

export default {
  
  name: "PropertyDev-Table",
  components:{
    TableComponent: defineAsyncComponent( () => import ('../components/TableComponent.vue') )
  },
  setup() {
    const { getProjects } = useProjects()
    const store = useStore()

    onBeforeMount( async() => {
        await getProjects()
    })

    const columns = [
      {
        name: "id",
        field: "id",
        label: "ID",
      },
      {
        name: "name",
        label: "Nombre del proyecto",
        field: "name",
        align: "left",
      },
      {
        name: "state",
        label: "Estado",
        field: "state",
        align: "center",
      },
      {
        name: "city",
        label: "Municipio",
        field: "city",
        align: "center",
      },
      {
        name: "address",
        label: "Dirección",
        field: "address",
        align: "center",
      },
      {
        name: "category",
        label: "Categoria",
        field: "category",
      },
      {
        name: "url",
        label: "Video (URL)",
        field: "url",
        align: "center",
        style: 'width: 120px;',
        headerStyle: 'width: 120px;'
      },
      
      {
        name: "view",
        label: "Vista Gral",
        field: "view"
      },
      {
        name: "edit",
        label: "Editar",
        field: "edit"
      },
      {
        name: "delete",
        label: "Eliminar",
        field: "delete"
      },

    ]

    return {
        columns,
        rows: computed(()=> store.getters['projects/getProjects']),
        visibleColumns : ['name' ,'state', 'city', 'address', 'category','url','view', 'delete', 'edit' ],
        isLoading: computed(()=> store.getters['projects/isLoading'] ),
        
    }
  },
}
</script>

