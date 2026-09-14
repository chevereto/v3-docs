<template>
  <ParentLayout>
    <template #sidebar-top>
      <div class="custom-sidebar-top">
        <a href="https://cloud.chevereto.com" target="_blank" rel="noopener noreferrer">
          <img :src="$withBase('/products/cloud/social-preview.png')" style="max-width: 419px; width: 100%;">
        </a>
      </div>
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'

export default {
  name: 'Layout',
  components: { ParentLayout }
}
</script>
