<script setup>
import { ref } from 'vue';


const editableLocationsData = ref({

})
</script>


<template>
  <section class="container">
    <div class="row">
      <div class="col-md-6">
        <section>
          <h2>Location Form</h2>
          <form @submit.prevent="">
            <div>
              <label for=""></label>
              <input type="text">
            </div>
          </form>
        </section>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped></style>