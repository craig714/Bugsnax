<script setup>

import { Sauce } from '@/models/Sauce.js';




defineProps({
  sauceProp: { type: Sauce, required: true }
})



</script>


<template>
  <RouterLink :to="{ name: 'SauceDetails', params: { sauceId: sauceProp.id } }">
    <div class="card mt-3 mb-3">
      <img class="cover-img" :src="sauceProp.picture" alt="">
      <div class="card-body">
        <h5 class="card-title arco-font">{{ sauceProp.name }}</h5>
        <p class="card-text bobble-font"> {{ sauceProp.description }}</p>
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