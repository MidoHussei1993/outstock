<template>
 <form id="contacts-form" class="conatct-post-form" @submit.prevent="handleSubmit">
    <div class="row">
        <div class="col-xl-6 col-lg-6 col-md-6">
            <div class="contact-icon p-relative contacts-name">
                <input type="text" placeholder="Name">
            </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6">
            <div class="contact-icon p-relative contacts-name">
                <input type="email" placeholder="Email">
            </div>
        </div>
        <div class="col-xl-12">
            <div class="contact-icon p-relative contacts-email">
                <input type="text" placeholder="Subject">
            </div>
        </div>
        <div class="col-xl-12">
            <div class="contact-icon p-relative contacts-message">
                <textarea name="comments" id="comments" cols="30" rows="10"
                    placeholder="Comments"></textarea>
            </div>
        </div>
        <div class="col-xl-12">
            <button class="os-btn os-btn-black" type="submit">Post comment</button>
        </div>
    </div>
 </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    handleSubmit(){
      console.log('submitted')
    }
  },
  setup () {
    return {}
  }
})
</script>

