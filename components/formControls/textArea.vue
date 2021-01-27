<template>
  <div class="form-field">
    <textarea
      :name="name"
      required
      :placeholder="placeholder"
      rows="10"
      cols="50"
      v-model="form[name]"
    >
    </textarea>
  </div>
</template>

<script>
export default {
  props:['form', 'name', 'placeholder'],
  name: "textArea"
}
</script>

<style scoped>
  textarea {
    margin: 0;
    max-width: 738px;
    height: 255px;
    resize:none
  }
</style>
