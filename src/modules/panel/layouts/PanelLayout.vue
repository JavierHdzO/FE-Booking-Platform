<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated>
            <q-toolbar class="bg-secondary">
                <q-btn flat dense round icon="las la-bars" aria-label="Menu" @click="toggleLeftDrawer" />

                <q-toolbar-title>
                    Aitech Glamping
                </q-toolbar-title>

                <div>Hola, <span class="q-mx-sm"> Aitech Admin </span></div>
                <div> Cerrar sesión </div>

            </q-toolbar>
        </q-header>

        <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
            <q-list>
                <q-item-label header>
                    Menú
                </q-item-label>

                <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
            </q-list>
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>
  
<script>
import { defineComponent, ref, defineAsyncComponent } from 'vue'

const linksList = [
    {
        title: 'Dashboard',
        caption: 'Estadisticas e infomración',
        icon: 'las la-chart-line',
        link: 'dashboard'
    },
    {
        title: 'Desarrollo',
        caption: 'Proyectos pertenecientes al desarrollo',
        icon: 'las la-layer-group',
        link: 'development'
    },
    {
        title: 'Proyectos',
        caption: 'Vista de proyectos activos',
        icon: 'las la-building',
        link: 'property-dev'
    },
    {
        title: 'Socios',
        caption: 'Socios activos en aitech glamping',
        icon: 'las la-user-friends',
        link: 'partners'
    },
]

export default defineComponent({
    name: 'MainLayout',

    components: {
        EssentialLink: defineAsyncComponent(() => import('../components/EssencialLink.vue'))
    },

    setup() {
        const leftDrawerOpen = ref(false)

        return {
            essentialLinks: linksList,
            leftDrawerOpen,
            toggleLeftDrawer() {
                leftDrawerOpen.value = !leftDrawerOpen.value
            }
        }
    }
})
</script>