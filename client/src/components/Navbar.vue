<script setup>
import { ref, watch } from 'vue';
import { loadState, saveState } from '../utils/Store.js';
import Login from './Login.vue';

const theme = ref(loadState('theme') || 'light')

function toggleTheme() {
  theme.value = theme.value == 'light' ? 'dark' : 'light'
}

watch(theme, () => {
  document.documentElement.setAttribute('data-bs-theme', theme.value)
  saveState('theme', theme.value)
}, { immediate: true })

</script>

<template>
  <nav class="navbar navbar-expand-md bg-codeworks border-bottom border-vue arco-font">
    <div class="container gap-2">
      <RouterLink :to="{ name: 'Home' }" class="d-flex align-items-center text-light  ">
        <img alt="logo" src="/src/assets/img/Bugsnax_logo.png" height="35" />

      </RouterLink>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-links"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="mdi mdi-menu text-light"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbar-links">
        <div class="d-flex justify-content-around flex-grow-1">
          <div class="nav-item">
            <RouterLink :to="{ name: 'Bugsnax' }" class="nav-link text-light">
              Bugsnax
            </RouterLink>
          </div>
          <div class="nav-item">
            <RouterLink :to="{ name: 'Grumpuses' }" class="nav-link text-light">
              Grumpuses
            </RouterLink>
          </div>
          <div class="nav-item">
            <RouterLink :to="{ name: 'Tools' }" class="nav-link text-light">
              Tools
            </RouterLink>
          </div>
          <div class="nav-item">
            <RouterLink :to="{ name: 'Sauces' }" class="nav-link text-light">
              Sauces
            </RouterLink>
          </div>
          <div class="nav-item">
            <RouterLink :to="{ name: 'Quests' }" class="nav-link text-light">
              Quests
            </RouterLink>
          </div>
        </div>
        <div class="ms-auto d-flex align-items-center gap-2">
          <button class="btn text-light" @click="toggleTheme"
            :title="`Enable ${theme == 'light' ? 'dark' : 'light'} theme.`">
            <i v-if="theme == 'dark'" class="mdi mdi-weather-sunny"></i>
            <i v-if="theme == 'light'" class="mdi mdi-weather-night"></i>
          </button>
          <Login />
        </div>
      </div>
    </div>
  </nav>
</template>


<!-- <template>
  <nav class="navbar navbar-expand-md bg-codeworks border-bottom border-vue">
    <div class="container gap-2 d-flex justify-content-between">
      <div>
        <RouterLink :to="{ name: 'Home' }" class="d-flex align-items-center text-light">
          <img class="navbar-brand" alt="logo" src="/img/cw-logo.png" height="45" />
          <b class="fs-5">Vue Starter</b>
        </RouterLink>
      </div> -->

<!-- collapse button -->
<!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-links"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="mdi mdi-menu text-light"></span>
      </button> -->
<!-- collapsing menu -->

<!-- <div class="collapse navbar-collapse" id="navbar-links">
      <ul class="navbar-nav">
        <li>
          <RouterLink :to="{ name: 'Map' }">
            Map
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'Bugsnax' }">
            Bugsnax
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'Grumpuses' }">
            Grumpuses
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'Tools' }">
            Tools
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'Sauces' }">
            Sauces
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'Quests' }">
            Quests
          </RouterLink>
        </li>
      </ul> -->
<!-- LOGIN COMPONENT HERE -->
<!-- <div>
          <button class="btn text-light" @click="toggleTheme"
            :title="`Enable ${theme == 'light' ? 'dark' : 'light'} theme.`">
            <i v-if="theme == 'dark'" class="mdi mdi-weather-sunny"></i>
            <i v-if="theme == 'light'" class="mdi mdi-weather-night"></i>
          </button>
          <Login />
        </div>
      </div>
    </div>

  </nav>
</template> -->

<style lang="scss" scoped>
a {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.custom-margin {
  margin-left: 200px;
}
</style>
