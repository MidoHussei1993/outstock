<template>
  <div class="sidebar__wrapper">
    <div class="sidebar__widget mb-55">
      <div class="widget__search p-relative">
        <form action="#">
          <input type="text" placeholder="Search..." />
          <button type="submit"><i class="far fa-search"></i></button>
        </form>
      </div>
    </div>
    <div class="sidebar__widget mb-55">
      <div class="sidebar__widget-title mb-25">
        <h3>Product Categories</h3>
      </div>
      <div class="sidebar__widget-content">
        <div class="categories">
          <div id="accordion">
            <div
              v-for="(category, index) in categoryData"
              :key="index"
              class="card"
            >
              <div class="card-header white-bg" id="{category.id}">
                <h5 class="mb-0">
                  <button
                    :class="`shop-accordion-btn ${
                      category.show ? '' : 'collapsed'
                    }`"
                    data-bs-toggle="collapse"
                    :data-bs-target="`#${category.target}`"
                    :aria-expanded="category.expanded ? 'true' : 'false'"
                    :aria-controls="`${category.target}`"
                  >
                    {{ category.title }}
                  </button>
                </h5>
              </div>

              <div
                :id="category.target"
                :class="`collapse ${category.show ? 'show' : ''}`"
                :aria-labelledby="category.id"
                data-bs-parent="#accordion"
              >
                <div class="card-body">
                  <div class="categories__list">
                    <ul>
                      <li
                        v-for="(list, index) in category.category_list"
                        :key="index"
                      >
                        <a href="#">{{ list.list }}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sidebar__widget mb-55">
      <div class="sidebar__widget-title mb-25">
        <h3>Latest Posts</h3>
      </div>
      <div class="sidebar__widget-content">
        <div class="rc__post-wrapper">
          <ul>
            <li
              v-for="(blog, i) in blogData.slice(3, 6)"
              :key="i"
              class="d-flex"
            >
              <div class="rc__post-thumb mr-20">
                <nuxt-link :href="`/blog-details/${blog.id}`">
                  <img :src="blog.img" alt="blog-1" style="width:70px;height: 70px;object-fit: cover;"/>
                </nuxt-link>
              </div>
              <div class="rc__post-content">
                <h6>
                  <nuxt-link :href="`/blog-details/${blog.id}`">
                    <span v-html="blog.title.slice(0,20)"></span>
                  </nuxt-link>
                </h6>
                <div class="rc__meta">
                  <span>{{ blog.date }}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="sidebar__widget mb-55">
      <div class="sidebar__widget-title mb-25">
        <h3>Recent Comments</h3>
      </div>
      <div class="sidebar__widget-content">
        <div class="rc__comments">
          <ul>
            <li class="d-flex mb-20">
              <div class="rc__comments-avater mr-15">
                <img src="~/assets/img/blog/comments/avater-3.png" alt="" />
              </div>
              <div class="rc__comments-content">
                <h6>Salim Rana</h6>
                <p>Hi, this is a comment....</p>
                <span
                  >on <span class="highlight comment"> Hello world!</span></span
                >
              </div>
            </li>
            <li class="d-flex mb-20">
              <div class="rc__comments-avater mr-15">
                <img src="~/assets/img/blog/comments/avater-3.png" alt="" />
              </div>
              <div class="rc__comments-content">
                <h6>Shahnewaz Sakil</h6>
                <p>Hi, this is a comment....</p>
                <span
                  >on <span class="highlight comment"> Hello world!</span></span
                >
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="sidebar__widget mb-55">
      <div class="sidebar__widget-title mb-25">
        <h3>Archives</h3>
      </div>
      <div class="sidebar__widget-content">
        <div class="sidebar__links">
          <ul>
            <li><a href="#">December 2013</a></li>
            <li><a href="#"> November 2013</a></li>
            <li><a href="#"> September 2013</a></li>
            <li><a href="#">November 2012</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="sidebar__widget mb-55">
      <div class="sidebar__widget-title mb-25">
        <h3>Meta</h3>
      </div>
      <div class="sidebar__widget-content">
        <div class="sidebar__links">
          <ul>
            <li><a href="#">Log in</a></li>
            <li><a href="#"> Entries RSS</a></li>
            <li><a href="#"> Comments RSS</a></li>
            <li><a href="#">WordPress.org</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import blogData from "~~/mixins/blogData";

// categoryType
type categoryType = {
  id: string;
  title: string;
  target: string;
  expanded?: boolean;
  show?: boolean;
  category_list: { list: string }[];
};

export default defineComponent({
  mixins: [blogData],
  setup() {
    const categoryData = [
      {
        id: "accessories",
        title: "Accessories",
        target: "collapseAccessories",
        expanded: true,
        show: true,
        category_list: [
          { list: "Catagories 1" },
          { list: "Catagories 2" },
          { list: "Catagories 3" },
        ],
      },
      {
        id: "cloth",
        target: "collapsecloth",
        title: "Clothing",
        category_list: [
          { list: "Catagories 1" },
          { list: "Catagories 2" },
          { list: "Catagories 3" },
        ],
      },
      {
        id: "men",
        target: "collapsemen",
        title: "Men's",
        category_list: [
          { list: "Catagories 1" },
          { list: "Catagories 2" },
          { list: "Catagories 3" },
        ],
      },
      {
        id: "music",
        target: "collapsemusic",
        title: "Music",
        category_list: [
          { list: "Catagories 1" },
          { list: "Catagories 2" },
          { list: "Catagories 3" },
        ],
      },
    ] as categoryType[];
    return { categoryData };
  },
});
</script>
