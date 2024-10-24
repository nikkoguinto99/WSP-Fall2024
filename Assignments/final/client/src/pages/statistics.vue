<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">

</script>

<template>
  <div class="columns">
  <div class="column is-one-third" id="Food Column">
    <div class="box">
      <label for="Title" class="label">Nutrition</label>

    <div class="box">
      <label for="Title" class="label">Calories Consumed</label>
        <progress class="progress is-link" value="15" max="100">
          15%
        </progress>
    </div>

    <div class="box">
      <label for="Title" class="label">Protein</label>
        <progress class="progress is-link" value="30" max="100">
          30%
        </progress>
    </div>

    <div class="box">
      <label for="Title" class="label">Carbohydrates</label>
        <progress class="progress is-link" value="45" max="100">
          45%
        </progress>
    </div>

    <div class="box">
      <label for="Title" class="label">Fat</label>
        <progress class="progress is-link" value="60" max="100">
          60%
        </progress>
    </div>

    <div class="box">
      <label for="Title" class="label">Sugar</label>
        <progress class="progress is-link" value="75" max="100">
          75%
        </progress>
    </div>

  </div>

  </div>
  <div class="column" id="Exercise Column">
    <div class="box">
      <label for="Title" class="label">Exercise</label>

      <div class="box">
        <label for="Title" class="label">Calories Burned</label>
          <progress class="progress is-link" value="15" max="100">
            15%
          </progress>
      </div>

      <div class="box">
        <label for="Title" class="label">Steps Taken</label>
          <progress class="progress is-link" value="30" max="100">
            30%
          </progress>
      </div>

      <div class="box">
        <label for="Title" class="label">Distance Traveled</label>
          <progress class="progress is-link" value="45" max="100">
            45%
          </progress>
      </div>

      <div class="box">
        <label for="Title" class="label">Active Minutes</label>
          <progress class="progress is-link" value="60" max="100">
            60%
          </progress>
      </div>
    </div>
  </div>
  <div class="column" id="Resting Column">
    <div class="box">
      <label for="Title" class="label">Rest</label>

      <div class="box">
        <label for="Title" class="label">Hours Slept</label>
          <progress class="progress is-link" value="15" max="100">
            15%
          </progress>
      </div>

      <div class="box">
        <label for="Title" class="label">Resting Heart Rate</label>
          <progress class="progress is-link" value="30" max="100">
            30%
          </progress>
      </div>

      <div class="box">
        <label for="Title" class="label">Hours Stretched</label>
          <progress class="progress is-link" value="45" max="100">
            45%
          </progress>
      </div>

    </div>

  </div>
  </div>
</template>

<style scoped>

</style>
