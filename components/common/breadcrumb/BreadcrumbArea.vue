<template>
  <section
    class="page__title p-relative d-flex align-items-center"
    :style="{ backgroundImage: `url(${background.length ? background : bg})` }"
  >
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="page__title-inner text-center custom-bg">
            <h1 class="text-dark">{{ title }}</h1>
            <div class="page__title-breadcrumb">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center">
                  <li class="">
                    <nuxt-link href="/" class="text-dark">
                      {{ $t("config.home") }}
                    </nuxt-link>
                  </li>
                  <li class="mx-2">/</li>
                  <li class="active text-dark" aria-current="page">
                    {{ subtitle }}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import bg1 from "~/assets/img/page-title/page-title-1.jpg";
import bg2 from "~/assets/img/pexels-castorly-stock-3682240.jpg";
import bg3 from "~/assets/img/pexels-cottonbro-studio-3171066.jpg";
import bg4 from "~/assets/img/pexels-malidate-van-833046 (1).jpg";
import bg5 from "~/assets/img/pexels-burst-545012.jpg";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    imageNamber: {
      type: String,
      required: true,
      default: "bg1",
    },
    background: {
      type: String,
      required: false,
      default: "",
    },
  },
  data() {
    return {
      bg1,
      bg2,
      bg3,
      bg4,
      bg5,
      bg: null,
    };
  },
  mounted() {
    this.bg = this[this.$props.imageNamber];
  },
});
</script>
<style lang="scss" scoped>
.custom-bg {
  background: rgba(255, 255, 255, 0.26);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.9px);
  -webkit-backdrop-filter: blur(3.9px);
  border: 1px solid rgba(255, 255, 255, 0.47);
  width: fit-content;
  margin: 0 auto;
  padding: 35px;
  padding-inline: 60px;
}
</style>
