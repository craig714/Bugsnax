<script setup>
import { Bugsnax } from '@/models/Bugsnax.js';




defineProps({
  bugsnaxProp: { type: Bugsnax, required: true }
})



</script>


<template>
  <RouterLink :to="{ name: 'BugsnaxDetails', params: { bugsnaxId: bugsnaxProp.id } }">
    <div class="card mt-3 mb-3">
      <img :src="bugsnaxProp.picture" alt="">
      <div class="card-body">
        <h5 class="card-title">{{ bugsnaxProp.name }}</h5>
        <p class="card-text"> {{ bugsnaxProp.description }}</p>
      </div>
    </div>
  </RouterLink>
</template>


<style lang="scss" scoped></style>