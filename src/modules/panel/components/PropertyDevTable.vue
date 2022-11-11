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

    const projects = computed(()=> store.getters['projects/getProjects'])

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
        name: "video",
        label: "Video (URL)",
        field: "video",
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

    // const rows = projects.value
    /*[
        {
            id:"1",
            name:"Cabañas amores",
            state:"Hidalgo",
            city: "Real del monte",
            address: "Av. Lorem Ipsum",
            category: "Cabañas",
            video: "https://www.youtube.com/watch?v=r2LKrHidoFw&ab_channel=Caba%C3%B1as"
        },
        {
            id:"2",
            name:"Cabañas olimpiad",
            state:"Hidalgo",
            city: "Real del monte",
            address: "Av. Lorem Ipsum",
            category: "Cabañas",
            video: "https://www.youtube.com/watch?v=r2LKrHidoFw&ab_channel=Caba%C3%B1as"
        },
        {
            id:"3",
            name:"Cabañas amores",
            state:"Hidalgo",
            city: "Real del monte",
            address: "Av. Lorem Ipsum",
            category: "Cabañas",
            video: "https://www.youtube.com/watch?v=r2LKrHidoFw&ab_channel=Caba%C3%B1as"
        },
        
    ]*/


    return {
        columns,
        rows: computed(()=> store.getters['projects/getProjects']),
        visibleColumns : ['name' ,'state', 'city', 'address', 'category','video','view', 'delete', 'edit' ],
        isLoading: computed(()=> store.getters['projects/isLoading'] ),
        projects
        
    }
  },
}
</script>

