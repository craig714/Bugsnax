<script setup>
import { Grumpus } from '@/models/Grumpus.js';




defineProps({
  grumpusProp: { type: Grumpus, required: true }
})




</script>


<template>

  <RouterLink :to="{ name: 'GrumpusDetails', params: { grumpusId: grumpusProp.id } }">
    <div class="card mt-3 mb-3">
      <img class="cover-img" :src="grumpusProp.picture" alt="">
      <div class="card-body">
        <h5 class="card-title">{{ grumpusProp.name }}</h5>
        <p class="card-text"> {{ grumpusProp.description }}</p>
      </div>
    </div>
  </RouterLink>
</template>


<style lang="scss" scoped>
.cover-img {
  width: 100%;
  max-height: 300px;
  min-height: 300px;
  object-fit: cover;

}
</style>