<script setup>
import { RouterView } from 'vue-router'
import LayoutHeader from '@/components/layout/LayoutHeader.vue'
import LayoutFooter from '@/components/layout/LayoutFooter.vue'
import LayoutSidebar from '@/components/layout/LayoutSidebar.vue'
</script>

<template>
  <LayoutHeader />

  <main>
    <RouterView />
  </main>

  <LayoutSidebar />
  <LayoutFooter />
</template>
