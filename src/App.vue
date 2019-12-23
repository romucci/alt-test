<template>
  <!-- App -->
  <v-app>
    <!-- App Selector -->
    <AppSelector />

    <!-- Navigation Drawer -->
    <NavigationDrawer />

    <v-content class="white">
      <!-- The Navbar -->
      <TheNavbar />

      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import TheNavbar from './components/globals/TheNavbar'
export default {
  name: 'App',
  components: {
    TheNavbar,
    AppSelector: () => import('@/components/globals/AppSelector'),
    NavigationDrawer: () => import('@/components/globals/NavigationDrawer')
  }
}
</script>
