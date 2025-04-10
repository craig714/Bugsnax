<script setup>
import { Quest } from '@/models/Quest.js';



const props = defineProps({
  questProp: { type: Quest, required: true }
})



</script>


<template>
  <RouterLink :to="{ name: 'QuestDetails', params: { questId: questProp.id } }">
    <div class="card mt-3 mb-3">
      <img class="cover-img" :src="questProp.picture" :alt="`Picture for ${questProp.name}`">
      <div class="card-body">
        <p class="fs-5 card-title arco-font">{{ questProp.name }}</p>
        <p class="card-text bobble-font">{{ questProp.description }}</p>
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