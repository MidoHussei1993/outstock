<template>
  <Form :validation-schema="schema" @submit="onSubmit" id="contact-form">
    <div class="row">
      <div class="col-xl-6 col-lg-6">
        <div class="contact__input mb-20">
          <label>Name <span class="required">*</span></label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" class="text-danger" />
        </div>
      </div>
      <div class="col-xl-6 col-lg-6">
        <div class="contact__input mb-20">
          <label>Email <span class="required">*</span></label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" class="text-danger" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-12">
        <div class="contact__input mb-20">
          <label>Subject <span class="required">*</span></label>
          <Field name="subject" type="text" />
          <ErrorMessage name="subject" class="text-danger" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-12">
        <div class="contact__input mb-45">
          <label>Message</label>
          <Field name="msg" v-slot="{ field }">
            <textarea v-bind="field" name="msg" cols="30" rows="10"></textarea>
          </Field>
          <ErrorMessage name="msg" class="text-danger" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-12">
        <div class="contact__submit">
          <button type="submit" class="os-btn os-btn-black">
            Send Message
          </button>
        </div>
      </div>
    </div>
  </Form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Field, Form, ErrorMessage, } from "vee-validate";
import * as yup from "yup";

export default defineComponent({
  components: { Field, Form, ErrorMessage },
  setup() {
    const schema = yup.object({
      name: yup.string().required().label("Name"),
      email: yup.string().required().email().label("Email"),
      subject: yup.string().required().min(10).label("Subject"),
      msg: yup.string().required().min(20).label("Message"),
    });

    function onSubmit(values: object,{resetForm}: {resetForm: () => void}) {
      alert(JSON.stringify(values, null, 2));
      resetForm()
    }
    return { schema, onSubmit };
  },
});
</script>
