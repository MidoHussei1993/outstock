<template>
  <div class="scroll-top" id="scroll" style="display: none;">
    <a href="#"><i class="fas fa-level-up-alt"></i></a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  mounted() {
    const result = document.querySelector<HTMLElement>(".scroll-top");
    if (result) {
      document.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
          result.style.display = "block";
        } else {
          result.style.display = "none";
        }
      });
      result.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  },
});
</script>
