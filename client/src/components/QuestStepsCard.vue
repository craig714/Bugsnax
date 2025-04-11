<script setup>
import { Quest } from '@/models/Quest.js';



const props = defineProps({
  questProp: { type: Object, required: true }
})



</script>


<template>

  <div class="card mt-3 mb-3 arco-font-shadow">
    <details>
      <summary class="ms-3">
        <p class=" d-inline">{{ questProp.title }}</p>
      </summary>
      <p class="ms-4 bg-yellow rounded-pill">- {{ questProp.body }}</p>
    </details>
  </div>

</template>


<style lang="scss" scoped>
.cover-img {
  width: 100%;
  max-height: 300px;
  min-height: 300px;
  object-fit: cover;

}
</style>