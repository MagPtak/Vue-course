<template>
  <!-- Skrócony zapis: zamiast v-on:click -> @:click -->
  <button @click="onClick()" :style="{ background: color }" class="btn">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    color: String,
  },
  methods: {
    onclick() {
      console.log("click");
    },
  },
};
</script>

