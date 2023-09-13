<template>
  <section class="blog__area pt-55">
    <div class="container">
        <div class="row">
            <div class="col-xl-9 col-lg-8">
                <div class="postbox__title mb-55">
                    <h1><a v-html="item.title"></a></h1>
                    <div class="blog__meta">
                        <span>By <a href="#">{{item.author}}</a></span>
                        <span>/ {{item.date}}</span>
                    </div>
                </div>
                <div class="postbox__thumb w-img">
                    <img :src="item.img" alt="">
                </div>
                <div class="postbox__wrapper mb-70">
                    <div class="postbox__text mt-65">
                        <p>Diga, Koma and Torus are three kitchen utensils designed for <span class="highlight theme">Ommo</span>, a new design-oriented brand introduced at the Ambiente show in February 2016. <span class="highlight">Minimalist approach, bright colors, stainless steel and matte plastic</span>, abstract shapes and curved lines are the defining features of these products designed to be extremely functional, user-friendly and fun.</p>
                    </div>
                    <div class="postbox__text">
                        <p>Diga is a two-color melamine salad bowl where vegetables can be washed, drained and served. The disk at the bottom of the bowl can be turned counterclockwise to drain water when washing vegetables and it can be turned clockwise to lock the drain and hold condiments in the bowl when serving.</p>
                    </div>
                    <article class="postbox format-quote mt-45 mb-50">
                        <div class="postbox__quote">
                            <blockquote>
                                <p> <i class="fas fa-quote-right"></i> Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                            </blockquote>
                        </div>
                    </article>
                    <div class="postbox__details-img w-img mb-60">
                        <img src="~/assets/img/blog/blog-details-sm.jpg" alt="">
                    </div>
                    <div class="postbox__text">
                        <p>Koma and Torus are two tea infusers, each with an original design and a concealed function. Koma has a round base and a long stainless steel-trimmed handle which offers a comfortable grip and allows.
                        </p>
                    </div>
                    <div class="postbox__text">
                        <p>And the brushed steel cover opens and closes at the touch of a finger to easily fill and empty the infuser. The perfect way to enjoy brewing tea. Torus is donut-shaped and can      cling to any cup. It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. 
                        </p>
                    </div>
                </div>
                <div class="postbox__share mb-95">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-6">
                            <div class="postbox__social">
                                <span>Share to friends:</span>
                                <ul>
                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fab fa-dribbble"></i></a></li>
                                    <li><a href="#"><i class="fas fa-share-alt"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6">
                            <div class="postbox__tag f-right">
                                <span>Tags :</span>
                                <a href="#">Furniture,</a>
                                <a href="#">Erentheme,</a>
                                <a href="#">Chair, </a>
                                <a href="#">Decor</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="postbox__related-title">
                    <h3>You Might Also Like</h3>
                </div>
                <div class="postbox__related-item">
                    <div class="row">
                        <div v-for="(blog,i) in blogData.slice(0,2)" :key="i" class="col-xl-6 col-lg-6 col-md-6">
                            <blog-item :item="blog" :style_2="true"/>
                        </div>
                    </div>
                </div>
                <div class="postbox__line mt-65"></div>
                <div class="postbox__comments pt-90">
                    <div class="postbox__comment-title mb-30">
                        <h3>Comments (32)</h3>
                    </div>
                    <div class="latest-comments mb-30">
                        <ul>
                            <li>
                                <div class="comments-box">
                                    <div class="comments-avatar">
                                        <img src="~/assets/img/blog/comments/avater-1.png" alt="">
                                    </div>
                                    <div class="comments-text">
                                        <div class="avatar-name">
                                            <h5>Siarhei Dzenisenka</h5>
                                            <span> - 3 months ago </span>
                                            <a class="reply" href="#">Leave Reply</a>
                                        </div>
                                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for <span>“lorem ipsum”</span> will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
                                    </div>
                                </div>
                            </li>
                            <li class="children">
                                <div class="comments-box">
                                    <div class="comments-avatar">
                                        <img src="~/assets/img/blog/comments/avater-2.png" alt="">
                                    </div>
                                    <div class="comments-text">
                                        <div class="avatar-name">
                                            <h5>Julias Roy</h5>
                                            <span> - 6 months ago </span>
                                            <a class="reply" href="#">Leave Reply</a>
                                        </div>
                                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for <span>“lorem ipsum”</span> will uncover many web sites still in their infancy. </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="comments-box">
                                    <div class="comments-avatar">
                                        <img src="~/assets/img/blog/comments/avater-3.png" alt="">       
                                    </div>
                                    <div class="comments-text">
                                        <div class="avatar-name">
                                            <h5>Arista Williamson</h5>
                                            <span> - 6 months ago </span>
                                            <a class="reply" href="#">Leave Reply</a>
                                        </div>
                                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for <span>“lorem ipsum”</span> will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="postbox__line mb-95"></div>
                <div class="post-comments-form mb-100">
                    <div class="post-comments-title mb-30">
                        <h3>Leave A Reply</h3>
                    </div>
                    <!-- form start -->
                    <blog-details-form/>
                    <!-- form end -->
                </div>
            </div>
            <div class="col-xl-3 col-lg-4">
              <!-- sidebar start -->
              <blog-sidebar/>
              <!-- sidebar end -->
            </div>
        </div>
    </div>
</section>
</template>

<script lang="ts">
import { defineComponent,PropType } from 'vue';
import blogData from '~~/mixins/blogData';
import BlogType from '~~/types/blogType';
import BlogItem from '../blogs/BlogItem.vue';
import BlogSidebar from '../common/sidebar/BlogSidebar.vue';
import BlogDetailsForm from '../forms/BlogDetailsForm.vue';

export default defineComponent({
  components: { BlogSidebar, BlogDetailsForm, BlogItem },
  mixins:[blogData],
  props:{
    item: {
      type: Object as PropType<BlogType>,
      default: {},
      required: true,
    },
  },
  setup () {
    return {}
  }
})
</script>
