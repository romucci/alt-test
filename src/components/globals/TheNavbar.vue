<template>
  <!-- Invite View -->
  <v-toolbar
    height="110"
    flat
    class="px-5"
  >
    <div class="display-1 font-weight-medium">
      Invite
    </div>

    <v-spacer />

    <!-- Search -->
    <v-btn
      icon
      class="secondary mr-5"
    >
      <v-icon small>
        fa-search
      </v-icon>
    </v-btn>

    <!-- Avatar -->
    <v-avatar>
      <v-img src="../../assets/img/avatar.png" />
    </v-avatar>
  </v-toolbar>
</template>

<script>
export default {
  name: 'TheNavbar'
}
</script>
