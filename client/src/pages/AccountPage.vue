<script setup>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import AdminPage from './AdminPage.vue';

const account = computed(() => AppState.account)

</script>

<template>
  <div class="about text-center arco-font">
    <div v-if="account">
      <h1>Welcome {{ account.name }}</h1>
      <img class="rounded" :src="account.picture" alt="" />
      <p>{{ account.email }}</p>
      <div>
        <AdminPage />
      </div>

    </div>
    <div v-else>
      <h1>Loading... <i class="mdi mdi-loading mdi-spin"></i></h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
img {
  max-width: 100px;
}
</style>
