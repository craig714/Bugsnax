<script setup>
import { ref } from 'vue';


const editableSauceData = ref({

})
</script>


<template>
  <section class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <section>
          <h2>Sauce Form</h2>
          <form @submit.prevent="">
            <div>
              <label for="name">Name</label>
              <input id="name" type="text">
            </div>
            <div>
              <label for="picture">Picture</label>
              <input id="picture" type="text">
            </div>
            <div>
              <label for="descriptionBox">Description</label>
              <textarea name="description" id="descriptionBox"></textarea>
            </div>
          </form>
        </section>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped></style>