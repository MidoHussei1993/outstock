<template>
  <div class="sidebar__widget mb-55">
    <div class="sidebar__widget-title mb-25">
      <h3>Product Categories</h3>
    </div>
    <div class="sidebar__widget-content">
      <div class="categories">
        <div id="accordion">
          <div
            class="card"
            v-for="(item, i) in [
              ...new Set(
                categoryData.filter(
                  (arr, index, self) =>
                    index ===
                    self.findIndex((t) => t.parentTitle === arr.parentTitle)
                )
              ),
            ]"
            :key="item.id"
          >
            <div class="card-header white-bg" id="cloth">
              <h5 class="mb-0">
                <button
                  @click="state.handleParentCategory(item.parentTitle)"
                  :class="`shop-accordion-btn collapsed text-capitalize ${
                    state.activeCls === item.parentTitle
                      ? 'active'
                      : ''
                  }`"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#collapse-${i}`"
                  aria-expanded="false"
                  :aria-controls="`collapse-${i}`"
                >
                  {{ item.parentTitle.toLowerCase() }}
                </button>
              </h5>
            </div>
            <div
              :id="`collapse-${i}`"
              class="collapse"
              aria-labelledby="cloth"
              data-bs-parent="#accordion"
            >
              <div class="card-body">
                <div class="categories__list">
                  <ul>
                    <li v-for="(list, i) in item.children" :key="i">
                      <a
                        @click.prevent="state.handleCategory(list)"
                        href="#"
                        :class="`text-capitalize ${
                          state.activeCls === list ? 'active' : ''
                        }`"
                      >
                        {{ list.toLowerCase() }}
                      </a>
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
</template>

<script lang="ts">
import { defineComponent } from "vue";
import categoryData from "~~/mixins/categoryData";
import { useProductsStore } from "~~/store/useProducts";

export default defineComponent({
  mixins: [categoryData],
  setup() {
    const state = useProductsStore();
    return { state };
  },
});
</script>
