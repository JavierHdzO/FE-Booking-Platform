<template>
  <div class="q-pa-md">
    <q-btn-dropdown
      color="secondary"
      unelevated
      :label="username"
      style="width: 200px"
      dropdown-icon="las la-angle-down"
    >
      <div class="row no-wrap q-pa-md">
        <div class="column">
          <div class="text-h6 q-mb-md">Configuración</div>
          <!-- <q-toggle v-model="mobileData" label="Use Mobile Data" />
          <q-toggle v-model="bluetooth" label="Bluetooth" /> -->
        </div>

        <q-separator vertical inset class="q-mx-lg" />

        <div class="column items-center">
          <q-avatar size="72px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>

          <div class="text-subtitle1 q-mt-md q-mb-xs">{{ username }}</div>

          <q-btn @click="onlogOut"  color="positive" label="Logout" push size="sm" v-close-popup />
        </div>
      </div>
    </q-btn-dropdown>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
import useAuth from '../../auth/composables/useAuth'

export default {
  props: {
    username: {
      required: true,
      type: String,
    },
    
  },

  setup() {
    const $q = useQuasar()
    const router = useRouter()
    const { logOut } = useAuth()
    return {
      onlogOut: () => {
        const { ok, msg } = logOut();

        if (ok) {
          $q.notify({
            message: msg,
            color: "green-14",
            avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
          });
        }
        router.push({ name: "signin" });
      },
    };
  },
};
</script>

