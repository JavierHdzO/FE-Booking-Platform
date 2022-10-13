<template>
    <q-dialog ref="dialogRef" @hide="onDialogHide">
        <q-card class="q-dialog-plugin" bordered>
            <q-card-section>
                <div class="text-h6"> Confirmar eliminacion de elemento </div>
            </q-card-section>

            <q-card-section>
                <div class="text-body1">Si confirma la eliminación, toda la información asociada al elemento será eliminada tambien </div>
            </q-card-section>

            <q-card-actions align="right">
                <q-btn color="negative" icon="las la-times"  text-color="white" label="Cancel" @click="onCancelDialog" />
                <q-btn color="positive" icon="las la-check" text-color="white" label="OK" @click="onOKDialog" />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<script>
import { useDialogPluginComponent } from 'quasar'    

export default {
    props:{

    },
    emits: [
        ...useDialogPluginComponent.emits
    ],
    setup(  ){

        const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()

        return {
            dialogRef,
            onDialogHide,
            onOKDialog(){

                onDialogOK()
            },
            onCancelDialog: onDialogCancel
            
        }
    }
}
</script>
