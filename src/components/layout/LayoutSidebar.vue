<script setup>
import GlobalNavigation from '@/components/__common__/GlobalNavigation.vue'
import { useSidebarStore } from '@/stores/sidebar'

const sidebar = useSidebarStore()
</script>

<template>
  <div class="sidebar-group">
    <!-- Mobile sidebar -->
    <aside :class="{ sidebar: true, 'sidebar-open': sidebar.isOpen }">
      <button class="sidebar-close-btn" @click="sidebar.close">
        <i class="fi fi-rr-cross"></i>
      </button>

      <div class="sidebar-body">
        <GlobalNavigation />
      </div>

      <div class="sidebar-footer">
        <router-link to="/" class="sidebar-btn">Contact Us</router-link>
      </div>
    </aside>

    <!-- Mobile sidebar overlay -->
    <div class="sidebar-overlay" @click="sidebar.close"></div>
  </div>
</template>

<style>
.sidebar-group {
  position: fixed;
  inset: 0;
  z-index: 100;
  pointer-events: none;
}

.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 15rem;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 100;
  transform: translateX(110%);
  transition: transform 0.3s ease-in-out;
  pointer-events: all;
  display: flex;
  flex-direction: column;
}

.sidebar.sidebar-open {
  transform: translateX(0);
}

.sidebar-overlay {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
}

.sidebar.sidebar-open + .sidebar-overlay {
  opacity: 1;
  pointer-events: all;
  visibility: visible;
}

.sidebar-close-btn {
  padding: 0.625rem;
  position: absolute;
  top: 0.5rem;
  right: 0.75rem;
  border: none;
  background-color: transparent;
  color: #333;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
}

.sidebar-body {
  padding: 1rem;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.sidebar-body a {
  display: flex;
  align-items: center;
  transition: 0.1s color ease;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  padding: 0.675rem 0.45rem;
  text-transform: uppercase;
}

.sidebar-footer {
  padding: 1rem;
  margin-top: auto;
}

.sidebar-btn {
  background-color: var(--primary-color);
  display: block;
  margin-top: auto;
  width: 100%;
  padding: 0.625rem 0 0.875rem 0;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  text-align: center;
  color: #fff !important;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;
}

.sidebar-btn:hover {
  background-color: #eee;
}

.sidebar-btn:active {
  background-color: #ddd;
}

.sidebar-btn:focus {
  outline: none;
}

.sidebar-btn + .sidebar-btn {
  margin-top: 1rem;
}
</style>
