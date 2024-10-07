<script setup lang="ts">

</script>

<template>
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

  <button class="button is-primary">Sign in</button>
  <p>Forgot Password</p>
  <p>New? <RouterLink to="./signup">Click Here</RouterLink> to sign up</p>
</form>
    </div>
    </div>
    </div>
</template>

<style scoped>

</style>