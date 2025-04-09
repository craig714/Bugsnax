<script setup>
import { ref } from 'vue';
import BugsnaxForm from '@/components/BugsnaxForm.vue';
import GrumpusForm from '@/components/GrumpusForm.vue';
import SauceForm from '@/components/SauceForm.vue';
import ToolsForm from '@/components/ToolsForm.vue';

const activeComp = ref(BugsnaxForm);
</script>

<template>
  <div class="bobble-font">
    <p>Choose which form you want to access:</p>
    <button class="arco-font btn btn-danger text-dark" @click="activeComp = BugsnaxForm">Bugsnax</button>
    <button class="arco-font btn btn-secondary " @click="activeComp = GrumpusForm">Grumpus</button>
    <button class="arco-font btn btn-success text-dark" @click="activeComp = SauceForm">Sauces</button>
    <button class="arco-font btn btn-primary" @click="activeComp = ToolsForm">Tools</button>

    <div>
      <component :is="activeComp" />
    </div>
  </div>
</template>


<style lang="scss" scoped></style>