<template>
  <div class="sidebar">
    <div class="sidebar-backdrop" @click="closeSidebarPanel" v-if="isPanelOpen"></div>
    <transition name="slide">
      <div v-if="isPanelOpen" class="sidebar-panel">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
import { store, mutations } from '~/store.js'

export default {
  computed: {
    isPanelOpen() {
      return store.isNavOpen
    }
  },
  methods: {
    closeSidebarPanel: mutations.toggleNav
  },
  destroyed() {
    document.documentElement.style.overflow = 'auto'
    document.ontouchmove = (e) => {true}
  },
  watch: {
    isPanelOpen: function() {
      if(store.isNavOpen){
        document.documentElement.style.overflow = 'hidden'
        // document.documentElement.style.position = 'fixed'
        document.ontouchmove = (e) => {e.preventDefault();}
        return
      }

      document.documentElement.style.overflow = 'auto'
      document.ontouchmove = (e) => {true}
    }
  }
};
</script>
<style lang="scss">
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(100%);
  transition: all 150ms ease-in 0s;
}

.sidebar-backdrop {
  // background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
  z-index: 10;
}

.sidebar-panel {
  overflow-y: auto;
  background-color: theme('colors.colorPrimary');
  position: fixed;
  left: 0;
  top: 72px;
  height: calc(100vh - 72px);
  z-index: 999;
  padding: 3rem 20px 2rem 20px;
  width: 100vw;
}
</style>