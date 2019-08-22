<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="Argon"
      title="Argon"
    >
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'Dashboard',
            icon: 'ni ni-tv-2 text-primary',
            path: '/dashboard'
          }"
        />
        <h6 class="navbar-heading text-muted" style="margin-left:15px">Administración</h6>
        <sidebar-item :link="{name: 'Flotilla', icon: 'ni ni-bus-front-12 text-orange', path: '/flotilla'}"/>
        <sidebar-item :link="{name: 'Choferes', icon: 'ni ni-single-02 text-black', path: '/choferes'}"/>
        <sidebar-item :link="{name: 'Reportes', icon: 'ni ni-bullet-list-67 text-red', path: '/reportes'}"/>
        <h6 class="navbar-heading text-muted" style="margin-left:15px">Revisión</h6>
        <sidebar-item :link="{name: 'Revision', icon: 'ni ni-check-bold text-green', path: '/revision'}"/>
      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>

      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
  import DashboardNavbar from './DashboardNavbar.vue';
  import ContentFooter from './ContentFooter.vue';
  import { FadeTransition } from 'vue2-transitions';

  export default {
    components: {
      DashboardNavbar,
      ContentFooter,
      FadeTransition
    },
    data() {
      return {
        sidebarBackground: 'vue' //vue|blue|orange|green|red|primary
      };
    },
    methods: {
      toggleSidebar() {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false);
        }
      }
    }
  };
</script>
<style lang="scss">
</style>
