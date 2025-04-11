<script setup>
import { AppState } from '@/AppState.js';
import ToolsCard from '@/components/ToolsCard.vue';
import { toolsService } from '@/services/ToolsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
// @ts-ignore
import toolsImg from '@/assets/img/thumb-1920-523671.jpg'


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

  <body :style="{ backgroundImage: `url(${toolsImg})` }">
 <div class="container">
      <div class="row">
        <div v-for="tool in tools" :key="tool.id" class="col-12 col-md-3">
          <ToolsCard :toolsProp="tool" />
        </div>
      </div>
    </div>
  </body>
</template>


<style lang="scss" scoped>
body {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100dvh;
  padding: 2rem;
}
</style>