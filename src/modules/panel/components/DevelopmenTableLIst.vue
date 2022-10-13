<template>
  

    <TableComponent
        v-for="(title, index) in titles" :key="index"
        :title="title"
        :columns="columns"
        :rows="rows"
        :visibleColumns="visibleColumns"

    />


</template>

<script>
import { defineAsyncComponent } from 'vue'


export default {

    components:{
        TableComponent: defineAsyncComponent( () => import ('../components/TableComponent.vue') )
    },
    setup(){

        const titles = ['Cabañas amores','Cabañas Don Migue', 'Cabañas Real']
        const columns = [
            {
                name:'id',
                field: 'id',
                label: 'ID'
            },
            { name: 'name', field: 'name', label: 'Nombre', align: 'left'},
            { name: 'price', field: 'price', label: 'Precio'},
            { name: 'no_rooms', field: 'no_rooms', label: 'Habitaciones' },
            { name: 'guest', field: 'guest', label:'Huesped'},
            { name: 'no_beds', field: 'no_beds', label: 'Camas' },
            { name: 'view', field: 'view', label: 'Vista' },
            { name: 'booking', field: 'booking', label: 'Alquilar' },
            { name: 'edit', field: 'field', label: 'Editar' },
            { name: 'delete', field: 'delete', label: 'Eliminar' }

        ]
        const rows = [
            {id:"1", name:'Cabaña Simple', price: '1500', no_rooms: 1, guest: 2, no_beds: 1 },
            {id:"2", name:'Cabaña Doble', price: '2500', no_rooms: 2, guest: 4, no_beds: 2 },
            {id:"3", name:'Cabaña Amor', price: '4500', no_rooms: 1, guest: 2, no_beds: 1 }
        ]


        return {
            titles,
            columns,
            rows,
            visibleColumns: ['name','price','no_rooms','guest','no_beds','view','booking','edit','delete']
        }


    }
}
</script>

<style>

</style>