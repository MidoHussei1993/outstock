<template>
  <li v-for="(item, i) in social_links" :key="i">
    <a
      :href="item.link"
      :target="item.target"
    >
      <i :class="item.icon"></i>
    </a>
  </li>
</template>

<script>
export default {
  data() {
    return {
      social_links: [
        {
          link: "http://facebook.com",
          target: "_blank",
          icon: "fab fa-facebook-f",
          name: "Facebook",
        },
        {
          link: "http://twitter.com",
          target: "_blank",
          icon: "fab fa-twitter",
          name: "Twitter",
        },
        {
          link: "https://www.behance.net/",
          target: "_blank",
          icon: "fab fa-behance",
          name: "Behance",
        },
        {
          link: "https://dribbble.com/",
          target: "_blank",
          icon: "fab fa-dribbble",
          name: "Dribbble",
        },
      ],
    };
  },
};
</script>
