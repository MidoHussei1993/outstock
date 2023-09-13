<template>
  <ul>
    <li
      v-for="(item, index) in menuData"
      :key="index"
      :class="`${
        item.hasDropdown && !item.megamenu
          ? 'active has-dropdown'
          : item.megamenu && 'mega-menu has-dropdown'
      }`"
    >
      <nuxt-link :href="`${item.link}`">{{ item.title }}</nuxt-link>

      <ul
        v-if="item?.hasDropdown && !item.megamenu"
        class="submenu transition-3"
      >
        <li v-for="(menu, index) in item.dropdownItems" :key="index">
          <nuxt-link :href="`${menu.link}`">{{ menu.title }}</nuxt-link>
        </li>
      </ul>

      <ul
        v-if="item.hasDropdown && item.megamenu"
        class="submenu transition-3"
        :style="{ backgroundImage: `url(${bg})` }"
      >
        <li
          v-for="(m_mnu, index) in item.dropdownItems"
          :key="index"
          class="has-dropdown"
        >
          <nuxt-link :href="`${m_mnu.link}`">{{m_mnu.title}}</nuxt-link>
          <ul>
            <li v-for="(m, index) in m_mnu.dropdownMenu" :key="index">
              <nuxt-link :href="`${m.link}`">{{ m.title }}</nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts">
// import menuType from "~~/types/menuType";
import bg from '~/assets/img/bg/mega-menu-bg.jpg';


import { defineComponent } from "vue";
import menuData from "~/mixins/menuData";

export default defineComponent({
  mixins: [menuData],
  data(){
    return {
      bg
    }
  },
  setup () {
    
  }
});
</script>
