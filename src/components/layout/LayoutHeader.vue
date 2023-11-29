<script setup>
import GlobalNavigation from '@/components/__common__/GlobalNavigation.vue'
import { ref } from 'vue'
import { useSidebarStore } from '@/stores/sidebar'

const isSticky = ref(false)

window.addEventListener('scroll', () => {
  // If the scrollY is greater than 150px, then set isSticky to true
  // If the scrollY is less than 10px, then set isSticky to false
  isSticky.value = window.scrollY > 150 ? true : window.scrollY < 10 ? false : isSticky.value
})

const sidebar = useSidebarStore()

const toggleSidebar = () => {
  sidebar.toggle()
}
</script>

<template>
  <header :class="{ 'header-sticky': isSticky }">
    <div class="container">
      <!-- Logo -->
      <router-link to="/" class="header-logo">
        <img src="/logo.svg" alt="Site logo" />
      </router-link>

      <!-- Navbar -->
      <div class="navbar">
        <GlobalNavigation />
        <router-link to="/login" class="navbar-btn">Contact Us</router-link>
      </div>

      <!-- Sidebar toggle -->
      <div class="sidebar-toggle" @click="toggleSidebar">
        <i class="fi fi-rr-menu-burger"></i>
      </div>
    </div>
  </header>
</template>

<style>
header {
  height: 6rem;
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  transition:
    all 0.3s ease-in-out,
    height 0s linear;
}

header.header-sticky {
  background-color: white;
  height: 5rem;
  position: fixed;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  animation: fadeInDown 0.5s ease-in-out;
}

header .container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

header .container .navbar {
  display: flex;
  gap: 1rem;
}

header .container .navbar a {
  display: flex;
  align-items: center;
  transition: 0.1s color ease;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  padding: 0.25rem 0.35rem;
  text-transform: uppercase;
}

header .container .navbar .navbar-btn {
  background-color: var(--primary-color);
  color: #fff;
  border-radius: 0.375rem;
  padding: 0.55rem 1.25rem 0.7rem 1.25rem;
  transition: 0.1s background-color ease;
  text-transform: none;
  font-weight: initial;
  margin-left: 1rem;
  font-size: 0.8rem;
  font-weight: 500;
}

header .sidebar-toggle {
  display: none;
  cursor: pointer;
  padding: 10px;
  position: relative;
  right: -5px;
}

@media screen and (max-width: 640px) {
  header .sidebar-toggle {
    display: block;
  }

  header .navbar {
    display: none !important;
  }

  header {
    height: 5rem !important;
  }

  header.header-sticky {
    height: 3.5rem !important;
  }

  header .header-logo img {
    height: 1.25rem;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
