<template>
    

    <q-page>
        <PartnerTable 
            v-for="val in 10"
            :key="val"
        /> 
    </q-page>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components: {
        PartnerTable: defineAsyncComponent( () => import ('../components/PartnerTable.vue'))
    }
}
</script>

<style>

</style>