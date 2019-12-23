<template>
  <!-- Navigation Drawer -->
  <v-navigation-drawer
    v-if="$vuetify.breakpoint.lgAndUp"
    app
    style="margin-left: 80px"
    width="340"
    class="pa-5"
    flat
  >
    <!-- Toolbar -->
    <v-toolbar flat>
      <img
        alt="Logo"
        src="../../assets/img/logo.png"
      >

      <v-spacer />

      <v-app-bar-nav-icon class="black--text" />
    </v-toolbar>

    <!-- Items List -->
    <div class="headline my-5 pb-5 px-3">
      alt group
    </div>

    <!-- Item -->
    <v-layout
      v-for="item in items"
      :key="item.id"
      class="my-4 flex align-center px-3"
    >
      <v-flex xs2>
        <img
          alt="Icon"
          :src="item.icon"
          class="mt-2"
        >
      </v-flex>

      <v-flex
        xs7
        class="font-weight-bold body-2"
      >
        {{ item.title }}
      </v-flex>

      <v-flex
        v-if="item.notifications"
        xs1
        class="body-2 font-weight-bold"
      >
        <span class="navigation-drawer--notifications">{{ item.notifications }}</span>
      </v-flex>

      <v-spacer />

      <v-flex class="text-right">
        <v-btn
          icon
          small
        >
          <v-icon small>
            fa-plus
          </v-icon>
        </v-btn>
      </v-flex>
    </v-layout>

    <!-- Logout -->
    <template v-slot:append>
      <v-btn text>
        <v-icon class="mr-3 secondary--text">
          fa-sign-out
        </v-icon>
        Logout
      </v-btn>
    </template>
  </v-navigation-drawer>
</template>

<script>
import ConversationsIcon from '@/assets/icons/icon-Conversations.png'
import GroupIcon from '@/assets/icons/icon-Group.png'
import OperatorIcon from '@/assets/icons/icon-Operator.png'
import SalesPartnerIcon from '@/assets/icons/icon_Salespartner.png'
import AdminIcon from '@/assets/icons/icon_admin.png'

export default {
  name: 'NavigationDrawer',
  data () {
    return {
      items: [
        {
          id: 1,
          title: 'Conversations',
          icon: ConversationsIcon
        },
        {
          id: 2,
          title: 'Group',
          icon: GroupIcon
        },
        {
          id: 3,
          title: 'Operator',
          icon: OperatorIcon,
          notifications: 2
        },
        {
          id: 4,
          title: 'Salespartner',
          icon: SalesPartnerIcon,
          notifications: 7
        },
        {
          id: 54,
          title: 'alt admiin',
          icon: AdminIcon,
          notifications: 4
        }
      ]
    }
  }
}
</script>

<style scoped lang="sass">
.navigation-drawer
  &--notifications
    background: #07A766
    border-radius: 12px
    height: 30px
    width: 30px
    display: flex
    justify-content: center
    align-items: center
    color: white
    font-weight: 600
</style>
