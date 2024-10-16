<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
<div class="modal" :class="{ 'is-active': isOpen }">
  <div class="modal-background"></div>

  <div class="modal-content">
    <div class="box">
      <!-- Your content -->
      <p> Please contact your gym's IT administrator to reset your password. </p>
    </div>
  </div>


  <button class="modal-close is-large" aria-label="close"
    @click="isOpen = false"></button>

</div>

    <div class="level-item">
        <div class="column is-half">
        <div class="container is-fluid">
        <form class="box">
  <div class="field">
    <label class="label">Email</label>
    <div class="control">
      <input class="input" type="email" placeholder="Email" />
    </div>
  </div>

  <div class="field">
    <label class="label">Password</label>
    <div class="control">
      <input class="input" type="password" placeholder="********" />
    </div>
  </div>

  <br>
  <button class="button is-primary">Sign in</button>
  <br><br>
  <button class="js-modal-trigger"
    :class="{ 'is-active': isOpen }" @click.prevent="isOpen = !isOpen">
  Forgot Password
</button>
  <p>New? <RouterLink to="./signup">Click Here</RouterLink> to sign up</p>
</form>
    </div>
    </div>
    </div>
</template>

<style scoped>

</style>
