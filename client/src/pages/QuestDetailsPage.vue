<script setup>
import { AppState } from '@/AppState.js';
import QuestStepsCard from '@/components/QuestStepsCard.vue';
import { grumpusesLocationService } from '@/services/GrumpusLocationsService.js';
import { questsService } from '@/services/QuestsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';



// const grumpusLocations = computed(() => AppState.grumpusLocations)
const activeGrumpusLocation = computed(() => AppState.activeGrumpusLocation)
// const quest = computed(()=> AppState.activeGrumpusLocation.quest)
// const something = computed(()=> AppState.bugsnax)

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
          <p>{{ activeGrumpusLocation[0].quest.name }}</p>
        </div>
        <div class="fw-bold fs-1 d-flex justify-content-center">
          <img class="cover-img" :src="activeGrumpusLocation[0].quest?.picture" :alt="`picture for the ${activeGrumpusLocation[0].quest?.name} quest`">
        </div>
        <div class="mt-3 fs-4">
          <p class="fw-bold arco-font">Quest Giver:</p>
          <img class="img-fluid quest-giver-img rounded" :src="activeGrumpusLocation[0].grumpus?.picture" :alt="`Picture of ${activeGrumpusLocation[0].grumpus?.name}`">
          <p class="fw-bold bobble-font">{{ activeGrumpusLocation[0].grumpus?.name }}</p>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="bobble-font">
              <p class="arco-font">Description:</p>
              <p class="bobble-font">{{ activeGrumpusLocation[0].quest?.description }}</p>
            </div>
            <div v-for="questStep in activeGrumpusLocation[0].quest?.steps" :key="questStep.title" >
              <QuestStepsCard :questProp="questStep" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.cover-img {
  width: 100%;
  max-height: 600px;
  object-fit: cover;
  border-radius: 10px;
}

.quest-giver-img{
  max-height: 20dvh;
}

</style>