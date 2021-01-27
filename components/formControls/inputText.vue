<template>
      <div class="form-field">
        <input
          :name="name"
          required
          :type="type"
          :placeholder="placeholder"
          v-model="form[name]"
        >
      </div>
</template>

<script>
export default {
  props:['form', 'type', 'name', 'placeholder'],
  name: "inputText"
}
</script>

<style scoped>

</style>
