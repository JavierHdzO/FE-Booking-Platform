<template>
    <q-card >
        <q-card-section>
            Agregar un nuevo espacio
        </q-card-section>
        <q-card-section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sequi voluptatum 
            facilis consequatur voluptates velit placeat inventore quos praesentium esse!
        </q-card-section>
        <q-card-actions>
            <q-btn label="Cancelar"></q-btn>
            <q-btn label="Confirmar"></q-btn>
        </q-card-actions>
    </q-card>
</template>

<script>
import { useDialogPluginComponent } from 'quasar'

export default {
    name: "CabinModal",
    props:{

    },
    setup( ){

        const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()


        return{
            dialogRef,
            onDialogHide,
            onOKClick(){

                onDialogOK()
            },
            onCancelOK: onDialogCancel
        }
    }

}
</script>

<style>

</style>