<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-secondary">
        <q-btn
          flat
          dense
          round
          icon="las la-bars"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="row justify-start items-center">
          <q-avatar size="70px">
            <img src="AitechGlampingLogo.png" alt="Aitech Glamping Logo" />
            <!-- <img src="AitechGlampingBlack.png" alt="Aitech Glamping Logo" /> -->
          </q-avatar>
          <h1 class="text-h5 text-weight-bolder">Aitech Glamping</h1>
        </q-toolbar-title>

        <div class="row justify-start items-center hiden">
          <p class="q-mx-sm text-h6 max-content">Hola, <span> usuario </span></p>
          <q-btn
            icon="las la-sign-out-alt"
            size="1.5rem"            right
            fab
            label="sign out"
            color="white-icon"
          ></q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-layout>
        <q-header class="neutral">
          <q-list>
            <q-item-label header> Menú </q-item-label>

            <EssentialLink
              v-for="link in essentialLinks"
              :key="link.title"
              v-bind="link"
            />
          </q-list>
        </q-header>

        <q-footer class="bg-secondary">
          <div class="row justify-start items-center content-center" >
            <q-avatar>
              <img src="AitechGlampingLogo.png" alt="Aitech Glamping Logo" />
            </q-avatar>
            <div class="row max-content items-center">
                <p class=" text-subtitle1 ">Hola, Usuario</p>
            </div>
          </div>
        </q-footer>
      </q-layout>
    </q-drawer>

    <q-page-container class="full-display">
      <router-view />
    </q-page-container>
  </q-layout>
</template>
  
<script>
import { defineComponent, ref, defineAsyncComponent } from "vue";

const linksList = [
  {
    title: "Dashboard",
    caption: "Estadisticas e infomración",
    icon: "las la-chart-line",
    link: "dashboard",
  },
  {
    title: "Desarrollo",
    caption: "Proyectos pertenecientes al desarrollo",
    icon: "las la-layer-group",
    link: "development",
  },
  {
    title: "Proyectos",
    caption: "Vista de proyectos activos",
    icon: "las la-building",
    link: "property-dev",
  },
  {
    title: "Socios",
    caption: "Socios activos en aitech glamping",
    icon: "las la-user-friends",
    link: "partners",
  },
];

export default defineComponent({
  name: "PartnerLayout",

  components: {
    EssentialLink: defineAsyncComponent(() =>
      import("../components/EssencialLink.vue")
    ),
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style scoped>
.max-content {
  height: 16px;
}

.hidden {
  display: flex;
}

.neutral {
  background: none;
}

@media (max-width: 600px) {
  .hiden {
    display: none;
  }
}

.full-display {
  height: 100vh;;
}
</style>