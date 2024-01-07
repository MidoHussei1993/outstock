<template>
  <div>
    <iframe
      v-if="query.url"
      :src="query.url"
      style="min-height: 97vh; min-width: 97vw"
      class="mx-auto mt-4"
    ></iframe>
  </div>
</template>
<script lang="ts" setup>
const { query } = useRoute();
</script>
<style lang="scss" scoped></style>
