<template>

    <TableComponent
        :columns="columns"
        :rows="rows"
        :visibleColumns="visibleColumns"
    />
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  
  name: "PropertyDev-Table",
  components:{
    TableComponent: defineAsyncComponent( () => import ('../components/TableComponent.vue') )
  },
  setup() {
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
        name: "town",
        label: "Municipio",
        field: "town",
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

    const rows = [
        {
            id:"1",
            name:"Cabañas amores",
            state:"Hidalgo",
            town: "Real del monte",
            address: "Av. Lorem Ipsum",
            category: "Cabañas",
            video: "https://www.youtube.com/watch?v=r2LKrHidoFw&ab_channel=Caba%C3%B1as"
        }
    ]


    return {
        columns,
        rows,
        visibleColumns : ['name' ,'state', 'town', 'address', 'category','video','view', 'delete', 'edit' ]
    }
  },
}
</script>

