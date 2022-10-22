<template>
    <q-dialog ref="dialogRef" @hide="onDialogHide">
        <q-card class="q-dialog-plugin" bordered>
            <q-card-section>
                <div class="text-h6"> Confirmar eliminacion de elemento </div>
            </q-card-section>

            <!-- <q-card-section >
                <q-icon ></q-icon>
            </q-card-section> -->
            <q-card-section horizontal class="items-center">
                <q-icon name="las la-exclamation-triangle" size="3rem"  ></q-icon>

                <q-card-section class="text-body1">
                    Si confirma la eliminación, toda la información asociada al elemento será eliminada tambien
                </q-card-section>
            </q-card-section>

            <q-card-actions align="right">
                <q-btn color="negative" outline no-caps icon="las la-times"   label="Cancelar" @click="onCancelDialog" />
                <q-btn color="positive" outline no-caps icon="las la-check" label="OK" @click="onOKDialog" />
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
        //CHANGE THIS SECTION TO A COMPOSABLE
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
