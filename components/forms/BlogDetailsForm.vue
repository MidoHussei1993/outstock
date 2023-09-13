<template>
  <Form :validation-schema="schema" @submit="onSubmit" id="contacts-form" class="conatct-post-form" action="#">
      <div class="row">
          <div class="col-xl-6 col-lg-6 col-md-6">
              <div class="contact-icon p-relative contacts-name">
                  <Field name="name" type="text" placeholder="Name" />
                  <ErrorMessage name="name" class="text-danger" />
              </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6">
              <div class="contact-icon p-relative contacts-name">
                  <Field name="email" type="email" placeholder="Email" />
                  <ErrorMessage name="email" class="text-danger" />
              </div>
          </div>
          <div class="col-xl-12">
              <div class="contact-icon p-relative contacts-email">
                  <Field name="subject" type="text" placeholder="Subject" />
                  <ErrorMessage name="subject" class="text-danger" />
              </div>
          </div>
          <div class="col-xl-12">
              <div class="contact-icon p-relative contacts-message">
                <Field name="msg" v-slot="{ field }">
                    <textarea v-bind="field" name="msg" cols="30" rows="10" placeholder="Comments"></textarea>
                </Field>
                <ErrorMessage name="msg" class="text-danger" />
              </div>
          </div>
          <div class="col-xl-12">
              <button class="os-btn os-btn-black" type="submit">Post comment</button>
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
