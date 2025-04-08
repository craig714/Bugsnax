<script setup>
import { ref } from 'vue';
import BugsnaxForm from '@/components/BugsnaxForm.vue';
import GrumpusForm from '@/components/GrumpusForm.vue';
import LocationsForm from '@/components/LocationsForm.vue';
import SauceForm from '@/components/SauceForm.vue';

const activeComp = ref(BugsnaxForm);
</script>

<template>
  <div class="bobble-font">
    <p>Choose which form you want to access:</p>
    <button class="arco-font btn btn-danger text-dark" @click="activeComp = BugsnaxForm">Bugsnax</button>
    <button class="arco-font btn btn-secondary " @click="activeComp = GrumpusForm">Grumpus</button>
    <button class="arco-font btn btn-primary" @click="activeComp = LocationsForm">Locations</button>
    <button class="arco-font btn btn-success text-dark" @click="activeComp = SauceForm">Sauces</button>

    <div>
      <component :is="activeComp" />
    </div>
  </div>
</template>


<style lang="scss" scoped></style>