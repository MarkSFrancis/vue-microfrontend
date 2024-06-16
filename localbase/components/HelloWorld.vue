<script setup lang="ts">
const { myLayer } = useAppConfig()
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div>
    <slot />
    <pre>{{ myLayer }}</pre>
  </div>
</template>
