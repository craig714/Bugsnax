<script setup>
import { ref, watch } from 'vue';
import { loadState, saveState } from '../utils/Store.js';
import Login from './Login.vue';

const theme = ref(loadState('theme') || 'light');

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
}

watch(
  theme,
  () => {
    document.documentElement.setAttribute('data-bs-theme', theme.value);
    saveState('theme', theme.value);
  },
  { immediate: true }
);
</script>

<template>
  <nav class="navbar navbar-expand-md nav-bg arco-font">
    <div class="container gap-2">
      <RouterLink :to="{ name: 'Home' }" class="d-flex align-items-center text-light">
        <img alt="logo" src="/src/assets/img/Bugsnax_logo.png" height="35" />
      </RouterLink>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-links"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="mdi mdi-menu text-light"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbar-links">
        <div class="d-flex justify-content-around flex-grow-1">
          <div class="nav-item d-flex align-items-center">
            <RouterLink :to="{ name: 'Bugsnax' }" class="nav-link bugsnax-color">
              Bugsnax
            </RouterLink>
          </div>
          <div class="nav-item d-flex align-items-center">
            <RouterLink :to="{ name: 'Grumpuses' }" class="nav-link grumpus-color">
              Grumpuses
            </RouterLink>
          </div>
          <div class="nav-item d-flex align-items-center">
            <RouterLink :to="{ name: 'Tools' }" class="nav-link tools-color">
              Tools
            </RouterLink>
          </div>
          <div class="nav-item d-flex align-items-center">
            <RouterLink :to="{ name: 'Sauces' }" class="nav-link sauce-color">
              Sauces
            </RouterLink>
          </div>
          <div class="nav-item d-flex align-items-center">
            <RouterLink :to="{ name: 'Quests' }" class="nav-link quest-color">
              Quests
            </RouterLink>
          </div>
        </div>
        <div class="ms-auto d-flex align-items-center gap-2">
          <button class="btn text-light" @click="toggleTheme"
            :title="`Enable ${theme === 'light' ? 'dark' : 'light'} theme.`">
            <i v-if="theme === 'dark'" class="mdi mdi-weather-sunny"></i>
            <i v-if="theme === 'light'" class="mdi mdi-weather-night"></i>
          </button>
          <Login />
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
  padding: 8px 12px;
  font-size: 1rem;
  display: inline-block;
  transition: transform 0.3s ease, font-weight 0.3s ease;
}

.nav-item {
  display: flex;
  align-items: center;
}


.nav-link.router-link-exact-active {
  transform: scale(1.4);
  font-weight: bold;
  color: rgb(243, 245, 247) !important;
  border-bottom: 2px solid var(--bs-primary);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>