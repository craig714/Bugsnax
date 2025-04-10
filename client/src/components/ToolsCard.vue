<script setup>
import { Tool } from '@/models/Tool.js';



defineProps({
  toolsProp: { type: Tool, required: true }
})




</script>


<template>
  <RouterLink :to="{ name: 'ToolDetails', params: { toolId: toolsProp.id } }">
    <div class="card mt-3 mb-3">
      <img class="cover-img" :src="toolsProp.picture" alt="">
      <div class="card-body">
        <h5 class="card-title arco-font">{{ toolsProp.name }}</h5>

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