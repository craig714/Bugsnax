<script setup>
import { AppState } from '@/AppState.js';
import BugsnaxCard from '@/components/BugsnaxCard.vue';
import GrumpusesCard from '@/components/GrumpusesCard.vue';
import QuestCard from '@/components/QuestCard.vue';
import SaucesCard from '@/components/SaucesCard.vue';
import ToolsCard from '@/components/ToolsCard.vue';
import { bugsnaxLocationService } from '@/services/BugsnaxLocationsService.js';
import { grumpusesLocationService } from '@/services/GrumpusLocationsService.js';
import { locationsService } from '@/services/LocationsService.js';
import { sauceLocationsService } from '@/services/SauceLocationsService.js';
import { toolsService } from '@/services/ToolsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';



const location = computed(() => AppState.activeLocation)
const bugsnax = computed(() => AppState.bugsnax)
// const bugsnaxLocations = computed(() => AppState.bugsnaxLocations)
const grumpuses = computed(() => AppState.grumpuses)
const sauces = computed(() => AppState.sauces)
const tools = computed(() => AppState.tools)
const quests = computed(() => AppState.quests)


const route = useRoute()

onMounted(() => {
  AppState.activeLocation = null
  AppState.bugsnax = []
  AppState.grumpuses = []
  AppState.sauces = []
  AppState.tools = []
  AppState.quests = []

  getAllLocations()
})

async function getAllLocations() {
  try {
    await locationsService.getAllLocations()
    setActiveLocation()
    getBugsnaxForThisLocation()
    getGrumpusesForThisLocation()
    getToolsForThisLocation()
    getSaucesForThisLocation()
  }
  catch (error) {
    Pop.error(error, 'Could not get all locations');
    logger.log('Could not get all locations'.toUpperCase(), error)
  }
}

function setActiveLocation() {
  try {
    const locationName = route.name
    locationsService.setActiveLocation(locationName)
  }
  catch (error) {
    Pop.error(error, 'Could not Set activeLocation');
    logger.log('Could not Set activeLocation'.toUpperCase(), error)
  }
}

async function getBugsnaxForThisLocation() {
  try {
    const locationId = location.value.id
    await bugsnaxLocationService.getBugsnaxLocationsByLocationId(locationId)
  }
  catch (error) {
    Pop.error(error, 'Could not get bugsnaxLocations for this location');
    logger.log('Could not get bugsnaxLocations for this location'.toUpperCase(), error)
  }
}

async function getGrumpusesForThisLocation() {
  try {
    const locationId = location.value.id
    await grumpusesLocationService.getGrumpusLocationsByLocationId(locationId)
    if (grumpuses.value.length > 0) {
      findQuestsForThisLocation()
    }
  }
  catch (error) {
    Pop.error(error, 'Could not get grumpusesLocations for this location');
    logger.log('Could not get grumpusesLocations for this location'.toUpperCase(), error)
  }
}

async function getToolsForThisLocation() {
  try {
    const locationId = location.value.id
    await toolsService.getToolsByLocationId(locationId)
  }
  catch (error) {
    Pop.error(error, 'Could not get tools for this location');
    logger.log('Could not get tools for this location'.toUpperCase(), error)
  }
}

async function getSaucesForThisLocation() {
  try {
    const locationId = location.value.id
    await sauceLocationsService.getSaucesByLocationId(locationId)
  }
  catch (error) {
    Pop.error(error, 'Could not get Sauces for this location');
    logger.log('Could not get Sauces for this location'.toUpperCase(), error)
  }
}

function findQuestsForThisLocation() {
  try {
    // debugger
    const locationId = location.value.id
    grumpusesLocationService.findQuestsForThisLocation(locationId)
  }
  catch (error) {
    Pop.error(error, 'Could not get Sauces for this location');
    logger.log('Could not get Sauces for this location'.toUpperCase(), error)
  }
}


</script>


<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="fw-bold fs-1 d-flex justify-content-center">
          <p>{{ location?.name }}</p>
        </div>
        <div>
          <img class="cover-img mt-4" :src="location?.picture" :alt="`Picture of ${location?.name}`">
        </div>
        <div class="mt-3 fs-4">
          <div v-if="bugsnax.length > 0">
            <div class="row">
              <p class="fw-bold">Bugsnax:</p>
              <div v-for="bugsnak in bugsnax" :key="bugsnak?.id" class="col-md-2">
                <BugsnaxCard :bugsnaxProp="bugsnak" />
              </div>
            </div>
          </div>
          <div v-if="grumpuses.length > 0">
            <div class="row">
              <p class="fw-bold">Grumpuses:</p>
              <div v-for="grumpus in grumpuses" :key="grumpus.id" class="col-md-3">
                <GrumpusesCard :grumpusProp="grumpus" />
              </div>
            </div>
          </div>
          <div v-if="tools.length > 0">
            <div class="row">
              <p class="fw-bold">Tools:</p>
              <div v-for="tool in tools" :key="tool.id" class="col-md-3">
                <ToolsCard :toolsProp="tool" />
              </div>
            </div>
          </div>
          <div v-if="sauces.length > 0">
            <div class="row">
              <p class="fw-bold">Sauces:</p>
              <div v-for="sauce in sauces" :key="sauce.id" class="row col-md-3">
                <SaucesCard :sauceProp="sauce" />
              </div>
            </div>
          </div>
          <div v-if="quests.length > 0">
            <div class="row">
              <p class="fw-bold">Quests:</p>
              <div v-for="quest in quests" :key="quest.id" class="row col-md-3">
                <QuestCard :questProp="quest" />
              </div>
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
  max-height: 80dvh;
  object-fit: cover;
  border-radius: 10px;
  border: 3px solid #ffffff
}
</style>