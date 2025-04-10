<script setup>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import AdminPage from './AdminPage.vue';
import { Identity } from '@bcwdev/auth0provider-client';

const account = computed(() => AppState.account)
const identity = computed(() => AppState.identity)

</script>

<template>
  <section class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="about text-center arco-font">
          <div v-if="account">
            <h1>Welcome {{ account.name }}</h1>
            <img class="rounded" :src="account.picture" alt="" />
            <p>{{ account.email }}</p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div v-if="identity.permissions.includes('write')">
          <AdminPage />
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped lang="scss">
img {
  max-width: 100px;
}
</style>
