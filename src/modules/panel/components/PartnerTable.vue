<template>
  <q-page>
    <TableComponent 
      :columns="columns"
      :rows="rows"
      :visibleColumns="visibleColumns"  
      v-for="val in 1" :key="val" />
  </q-page>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  name:"PartnerTable",
  components: {
    TableComponent: defineAsyncComponent(() => import("./TableComponent.vue")),
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

    const rows = [

      {
        id:'1',
        name: 'Frozen Yogurt',
        email: 'aitech@email.com',
        phone: '8333014522',
        rfc: 'HELF780415RGF',
    
      },
      {
        id:'2',
        name: 'Ice cream sandwich',
        email: 'aitech@email.com',
        phone: '8333014522',
        rfc: 'HELF780415RGF',

      },
      {
        id:'3',
        name: 'Eclair',
        email: 'aitech@email.com',
        phone: '8333014522',
        rfc: 'HELF780415RGF',

      },
      {
        id:'4',
        name:   'Cupcake',
        email:  'aitech@email.com',
        phone:  '8333014522',
        rfc: 'HELF780415RGF',

      },
      {
        id:'5',
        name: 'Gingerbread',
        email: 'aitech@email.com',
        phone: '8333014522',
        rfc: 'HELF780415RGF',
    
      },
      {
        id:'6',
        name:   'Jelly bean',
        email:  'aitech@email.com',
        phone:  '8333014522',
        rfc: 'HELF780415RGF',
      
      },
      {
        id:'7',
        name: 'Lollipop',
        email: 'aitech@email.com',
        phone: '8333014522',
        rfc: 'HELF780415RGF',

      },
      {
        id:'8',
        name: 'Honeycomb',
        email: 'aitech@email.com',
        phone: '8333014522',
        rfc:   'HELF780415RGF',
    
      },
      {
        id:'9',
        name: 'Donut',
        email: 'aitech@email.com',
        phone: '8333014522',
        rfc:   'HELF780415RGF',
      
      },
      {
        id:'10',
        name:   'KitKat',
        email:  'aitech@email.com',
        phone:  '8333014522',
        rfc:    'HELF780415RGF',

      },
      {
        id:'11',
        name:   'KitKat',
        email:  'aitech@email.com',
        phone:  '8333014522',
        rfc:    'HELF780415RGF',
      }
    ]


    return {
      columns,
      rows,
      visibleColumns : ['name' ,'email', 'phone', 'rfc', 'view', 'delete', 'edit' ]
    }
  },
}
</script>

<style scoped>
</style>