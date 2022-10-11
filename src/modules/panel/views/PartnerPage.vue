<template>
  <div class="q-pa-md bg-blue-grey-1 row full-height">
    <q-layout
      view="lHh Lpr lFf"
      container
      class="shadow-2 rounded-borders full height"
    >
      <q-header elevated class="bg-white">
        <q-toolbar class="q-my-lg">
          <q-toolbar-title class="q-mx-lg">
            <span class="text-dark text-h3">Socios</span>
          </q-toolbar-title>

          <q-input rounded outlined bg-color="grey-2" v-model="text">
            <template v-slot:append>
              <q-icon name="las la-search" color="accent"></q-icon>
            </template>
          </q-input>
        </q-toolbar>
      </q-header>

      <q-page-container>
        <q-page padding style="padding-top: 50px">
          <partner-table-list></partner-table-list>
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
import { defineAsyncComponent } from "vue";

export default {
  components: {
    PartnerTableList: defineAsyncComponent(() =>
      import("../components/PartnerTableList.vue")
    ),
  },
};
</script>

<style scoped>
</style>