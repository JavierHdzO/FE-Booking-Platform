<template>
  <div class="q-pa-md bg-blue-grey-1 row full-height">
    <q-layout
      view="lHh Lpr lFf"
      container
      class="shadow-2 rounded-borders full height"
    >
      <q-header elevated class="bg-white">
        <q-toolbar class="q-my-md row">
          <q-toolbar-title class="q-mx-lg">
            <span class="text-dark text-h3">Desarrollo</span>
          </q-toolbar-title>

          <q-input rounded outlined bg-color="grey-2" >
            <template v-slot:append>
              <q-icon name="las la-search" color="accent"></q-icon>
            </template>
          </q-input>

        </q-toolbar>

         <q-btn
              @click="onShowModal" 
              class="q-mx-lg q-my-md"
              color="positive" 
              icon="las la-plus-circle" 
              label="Añadir nuevo projecto"
              glossy
              push
               />
      </q-header>

      <q-page-container>
        <q-page padding style="padding-top: 50px">
          <DevelopmenTableLIst />
          <q-page-sticky position="top"> </q-page-sticky>

          <q-page-scroller
            position="bottom-right"
            :scroll-offset="150"
            :offset="[18, 18]"
          >
            <q-btn fab icon="las la-chevron-circle-up" color="accent" />
          </q-page-scroller>
        </q-page>
      </q-page-container>
      <q-footer> </q-footer>
    </q-layout>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue"
import { useQuasar } from "quasar"

export default {
  components: {
    DevelopmenTableLIst: defineAsyncComponent(() => import("../components/DevelopmenTableLIst.vue")),
  },

  setup(){
    const $q = useQuasar()

    return {
      onShowModal:()=>{
        $q.dialog({
              component: defineAsyncComponent(() =>
                import("../components/HomeModal.vue")
              ),
            })
              .onOk(() => {
                console.log("Elemento actualizado");
              })
              .onCancel(() => {
                console.log("Elemento no actualizado");
              })
              .onDismiss(() => {
                console.log("Llamado cuando Ok o Cancel es llamado");
              });
      }
    }

  }
}
</script>

<style scoped>
</style>