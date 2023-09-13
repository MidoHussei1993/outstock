<template>
    <div id="video-overlay" class="video-overlay" @click="closeVideo">
      <a class="video-overlay-close" @click.prevent="closeVideo">×</a>
    </div>
</template>

<script>
export default {
  props: {
    videoUrl: {
      type:String,
      default:'https://www.youtube.com/embed/EW4ZYb3mCZk',
      required:true,
    },
  },
  methods: {
    playVideo() {
      const videoOverlay = document.querySelector("#video-overlay");
      let iframeElement = document.createElement("iframe");

      iframeElement.setAttribute("src", this.videoUrl);
      iframeElement.style.width = "60%";
      iframeElement.style.height = "80%";

      videoOverlay?.classList.add("open");
      videoOverlay.appendChild(iframeElement);
    },
    closeVideo() {
      const videoOverlay = document.querySelector("#video-overlay.open"),
        iframeElement = document.querySelector("#video-overlay.open iframe");

      videoOverlay?.classList.remove("open");
      iframeElement?.remove();
    },
  },
};
</script>
