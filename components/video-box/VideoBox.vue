<template>
  <div class="video__area-df" :style="{ backgroundImage: `url(${bg})` }">
      <div class="container">
          <div class="video__content text-center">
              <div class="video__button mb-60">
                  <a @click.prevent="handleVideoPopup" href="#">
                    <i class="fas fa-play"></i>
                  </a>
              </div>
              <h5 class="video__title">AWESOME VIDEO LIGHTBOX </h5>
              <p>Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. </p>
          </div>
      </div>
  </div>

  <!-- video modal start -->
  <video-modal
    ref="video_modal"
    video-url="https://www.youtube.com/embed/7e90gBu4pas"
  />
  <!-- video modal end -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import bg from '~/assets/img/bg/bg-video.webp';
import VideoModal from '../common/modals/VideoModal.vue';

interface VideoModal {
  playVideo(): void
}

export default defineComponent({
  components: { VideoModal },
  data() {
    return {
      bg,
    }
  },
  methods: {
    handleVideoPopup() {
     const videoRef = this.$refs.video_modal as VideoModal;
     videoRef.playVideo();
    },
  },
})
</script>
