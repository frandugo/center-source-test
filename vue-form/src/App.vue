<template>
  <div>
    <h2>Form</h2>
    <form class="form" @submit.prevent="handleSubmit">
      <fieldset class="form__field">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" />
        <span class="error" v-if="errors.name">{{ errors.name }}</span>
      </fieldset>

      <fieldset class="form__field">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" />
        <span class="error" v-if="errors.email">{{ errors.email }}</span>
      </fieldset>

      <fieldset class="form__field">
        <label for="phone">Phone:</label>
        <input type="text" id="phone" v-model="form.phoneNumber" />
        <span class="error" v-if="errors.phoneNumber">{{ errors.phoneNumber }}</span>
      </fieldset>

      <button class="form__button" type="submit">Submit</button>
    </form>

    <div v-if="submittedData">
      <h2>Form Data:</h2>
      <p><strong>Name:</strong> {{ submittedData.name }}</p>
      <p><strong>Email:</strong> {{ submittedData.email }}</p>
      <p><strong>Phone:</strong> {{ submittedData.phoneNumber }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  phoneNumber: ''
});

const errors = ref({
  name: '',
  email: '',
  phoneNumber: ''
});

const submittedData = ref(null);

const validate = () => {
  errors.value = {};

  if (form.value.name.length < 3) {
    errors.value.name = 'Name must be at least 3 characters long.';
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(form.value.email)) {
    errors.value.email = 'Email must be valid.';
  }

  const phonePattern = /^\d+$/;
  if (!phonePattern.test(form.value.phoneNumber)) {
    errors.value.phoneNumber = 'Phone number must contain only digits.';
  }

  return Object.keys(errors.value).length === 0;
};

const handleSubmit = () => {
  if (validate()) {
    submittedData.value = { ...form.value };
    form.value = { name: '', email: '', phone: '' }; // Clear the form after submission
  }
};
</script>

<style lang="scss" scoped>
.form {
  background: #333333;
  padding: 40px;
  &__field {
    border: 0;
    margin-bottom: 1em;
    label {
      display: block;
      font-size: 12px;
      text-align: left;
    }
    input {
      border: 4px;
      padding: 10px;
      outline: none;
      width: 100%;
    }
  }
  .error {
    color: tomato;
    display: block;
    font-size: 12px;
    text-align: left;
  }
}
</style>
