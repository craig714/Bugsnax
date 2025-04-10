<script setup>
import { AppState } from '@/AppState.js';
import ToolsCard from '@/components/ToolsCard.vue';
import { toolsService } from '@/services/ToolsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';



const tools = computed(() => AppState.tools)

onMounted(() => {
  getAllTools()
})

async function getAllTools() {
  try {
    await toolsService.getAllTools()
  }
  catch (error) {
    Pop.error(error, 'Could not get tools!');
    logger.error('Could not get tools!', error); Pop.error(error);
  }
}



</script>


<template>
  <div class="container">
    <div class="row">
      <div v-for="tool in tools" :key="tool.id" class="col-12 col-md-3">
        <ToolsCard :toolsProp="tool" />
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>