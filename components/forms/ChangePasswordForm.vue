<template>
  <form action="#">
      <div class="password__input">
        <p>Old Password</p>
        <input type="password" placeholder="Enter Old Password">
      </div>
      <div class="password__input">
        <p>New Password</p>
        <input type="password" placeholder="Enter New Password">
      </div>
      <div class="password__input">
        <p>Confirm Password</p>
        <input type="password" placeholder="Confirm Password">
      </div>
      <div class="password__input">
        <button type="submit" class="os-btn os-btn-black">Update password</button>
      </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup () {
    return {}
  }
})
</script>
