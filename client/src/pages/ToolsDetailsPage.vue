<script setup>
import { AppState } from '@/AppState.js';
import { toolsService } from '@/services/ToolsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
// @ts-ignore
import toolsImg from '@/assets/img/thumb-1920-523671.jpg'



const tool = computed(() => AppState.activeTool)
const route = useRoute()


onMounted(() => {
  AppState.activeTool = null
  getToolById()
})

async function getToolById() {
  try {
    const toolId = route.params.toolId
    await toolsService.getToolById(toolId)
  }
  catch (error) {
    Pop.error(error, 'Could not get tool by Id');
    logger.error('Could not get tool by Id', error)
  }
}


</script>


<template>

  <body class="arco-font arco-font-shadow" :style="{ backgroundImage: `url(${toolsImg})` }">
    <div v-if="tool" class="container">
      <div class="row">
        <div class="col-12">
          <div class="fw-bold fs-1 d-flex justify-content-center">
            {{ tool.name }}
          </div>
          <img class="cover-img" :src="tool.picture" alt="">
        </div>
        <div class="mt-5 fs-4">
          <p class="fw-bold">Description:</p> <span>{{ tool.description }}</span>
        </div>
      </div>
    </div>
  </body>
</template>


<style lang="scss" scoped>
.cover-img {
  width: 100%;
  max-height: 80dvh;
  object-fit: cover;
  border-radius: 10px;
  border: 3px solid #ffffff
  
}
body {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100dvh;
  padding: 2rem;
}
</style>