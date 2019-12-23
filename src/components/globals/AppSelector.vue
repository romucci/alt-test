<template>
  <!-- App Selector -->
  <v-navigation-drawer
    v-if="$vuetify.breakpoint.mdAndUp"
    mini-variant
    app
    permanent
    class="secondary app-selector"
  >
    <div
      v-for="item in items"
      :key="item.id"
    >
      <div
        class="app-selector--item"
        :class="{ 'app-selector--item--selected': item.isAppSelected }"
      >
        <img
          alt="item.name"
          :src="item.image"
          class="app-selector--image"
        >
      </div>
    </div>

    <div class="app-selector--item app-selector--add">
      <v-icon small>
        fa-plus
      </v-icon>
    </div>
  </v-navigation-drawer>
</template>

<script>
import ChannelImage from '@/assets/img/channel.png'
import AlImage from '@/assets/img/item 2.png'
import MDImage from '@/assets/img/channel + notification.png'

export default {
  name: 'AppSelector',
  data () {
    return {
      items: [
        {
          id: 1,
          name: 'K',
          image: ChannelImage
        },
        {
          id: 2,
          name: 'al+',
          image: AlImage,
          isAppSelected: true
        },
        {
          id: 3,
          name: 'MD',
          image: MDImage
        }
      ]
    }
  }
}
</script>

<style scoped lang="sass">
.app-selector
  padding-top: 10px
  display: flex
  align-items: center
  justify-content: center

  &--item
    display: flex
    align-items: center
    justify-content: center
    height: 53px
    width: 53px
    cursor: pointer
    margin-top: 10px

    &:hover
      border: 1px solid #07A766
      border-radius: 15px

    &--image
      height: 40px
      width: 40px

    &--selected
      border: 3px solid #07A766
      border-radius: 15px

  &--add
    background: #f7f7f7
    display: flex
    justify-content: center
    border-radius: 8px
</style>
