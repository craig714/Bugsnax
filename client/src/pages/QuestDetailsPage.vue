<script setup>
import { AppState } from '@/AppState.js';
import { grumpusesLocationService } from '@/services/GrumpusLocationsService.js';
import { questsService } from '@/services/QuestsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';



// const grumpusLocations = computed(() => AppState.grumpusLocations)
const activeGrumpusLocation = computed(() => AppState.activeGrumpusLocation)
// const quest = computed(()=> AppState.activeGrumpusLocation.quest)

const route = useRoute()

onMounted(()=>{
  AppState.activeGrumpusLocation = null
  getGrumpusLocationByQuestId()
})

async function getGrumpusLocationByQuestId() {
  try {
    // debugger
    const questId = route.params.questId
    await grumpusesLocationService.getGrumpusLocationByQuestId(questId)

  }
  catch (error) {
    Pop.error(error, 'Could not get GrumpusLocation');
    logger.log('Could not get GrumpusLocation'.toUpperCase(), error)
  }
}

// function setActiveQuest() {
//   try {
    
//   }
//   catch (error) {
//     Pop.error(error, 'Could not set activeQuest');
//     logger.log('Could not set activeQuest'.toUpperCase(), error)
//   }
// }


</script>


<template>
  <div v-if="activeGrumpusLocation" class="container">
    <div class="row">
      <div class="col-12">
        <div class="fw-bold fs-1 d-flex justify-content-center">
          <img :src="activeGrumpusLocation.quest?.picture" :alt="`picture for the ${activeGrumpusLocation.quest?.name} quest`">
          <p>{{ activeGrumpusLocation[0].quest?.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>