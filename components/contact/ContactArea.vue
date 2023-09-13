<template>
  <section class="contact__area pb-100 pt-95">
    <div class="container">
        <div class="row">
            <div class="col-xl-6 col-lg-6">
                <div class="contact__info">
                    <h3>Find us here.</h3>
                    <ul class="mb-55">
                        <li v-for="(item,i) in contactInfo" :key="i" class="d-flex mb-35">
                            <div class="contact__info-icon mr-20">
                                <i :class="item.icon"></i>
                            </div>
                            <div class="contact__info-content">
                                <h6>{{item.title}}:</h6>
                                <span>{{item.subtitle}}</span>
                            </div>
                        </li>
                    </ul>
                    <p>Outstock is a premium Templates theme with advanced admin module. It’s extremely customizable, easy to use and fully responsive and retina ready. Vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>

                    <div class="contact__social">
                        <ul>
                            <social/>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-lg-6">
                <div class="contact__form">
                    <h3>Contact Us.</h3>
                    <!-- form start -->
                    <contact-form/>
                    <!-- form end -->
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContactForm from '../forms/ContactForm.vue';
import Social from '../social/Social.vue';

// info type
type InfoData = {
  icon:string,
  title:string,
  subtitle:string,
}

export default defineComponent({
  components: { Social, ContactForm },
  setup () {
    const contactInfo = [
        {
          icon: 'fal fa-map-marker-alt',
          title: 'Address',
          subtitle: '1234 Heaven Stress, Beverly Hill, Melbourne, USA.'
        },
        {
          icon: 'fal fa-envelope-open-text',
          title: 'Email',
          subtitle: 'Contact@erentheme.com'
        },
        {
          icon: 'fal fa-phone-alt',
          title: 'Number Phone',
          subtitle: '(800) 123 456 789, (800) 987 654 321'
        },
     ] as InfoData[]
    return {contactInfo}
  }
})
</script>
