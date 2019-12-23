<template>
  <div class="invite-view">
    <!-- Invite Friend Message -->
    <v-layout
      wrap
      class="align-center justify-center"
    >
      <v-flex
        md6
        xs12
        class="text-center"
      >
        <img
          alt="Illustration"
          src="../assets/img/illustration.png"
        >
      </v-flex>

      <v-flex
        xs10
        md6
      >
        <div class="headline font-weight-bold mb-5">
          Invite your friends to enjoy the following benefits:
        </div>

        <!-- Free Plan Users -->
        <p>For Free Plan Users</p>

        <p class="body-2">
          Free trial of standard plan for one month
        </p>

        <!-- Standard Business Plan Users -->
        <p class="font-weight-bold">
          For Standard Business Plan Users
        </p>

        <!-- Additional Recording Time -->
        <p>
          Additional recording time:
          <span class="primary--text font-weight-medium">{{ additionalRecordingTime }}</span>
        </p>

        <!-- Characters in Translated Documents -->
        <p>
          Additional number of characters in the translated document:
          <span class="primary--text font-weight-medium"> {{ charactersInTranslatedDocuments }}</span>
        </p>

        <!-- Additional Storage -->
        <p>
          Additional storage:
          <span class="primary--text font-weight-medium">{{ additionalStorage }}</span>
        </p>
      </v-flex>
    </v-layout>

    <!-- Share Via Email -->
    <div class="mt-5">
      <h4>Share via Email</h4>
      <div>Multiple names can be entered with space key or comma</div>

      <v-layout
        wrap
        class="my-3"
      >
        <v-flex
          xs12
          md8
        >
          <v-combobox
            outlined
            chips
            multiple
            deletable-chips
            primary
          />
        </v-flex>

        <v-flex
          xs12
          md3
        >
          <v-btn
            class="primary mt-3 ml-4"
            large
            block
          >
            Send Invites
          </v-btn>
        </v-flex>
      </v-layout>

      <!-- Social Links -->
      <v-layout class="flex flex-wrap justify-space-between px-5 pb-5 mx-5">
        <button
          class="social-button"
        >
          <v-icon class="primary--text">
            fa-facebook
          </v-icon>
          <span class="ml-3">Share via Facebook</span>
        </button>

        <button
          class="social-button"
        >
          <v-icon class="primary--text">
            fa-twitter
          </v-icon>
          <span class="ml-3">Share via Twitter</span>
        </button>

        <button
          class="social-button"
        >
          <v-icon class="primary--text">
            fa-linkedin
          </v-icon>
          <span class="ml-3">Share via Linkedin</span>
        </button>
      </v-layout>
    </div>

    <!-- Share Referral Link -->
    <div class="mt-5">
      <h4>Share your referral link</h4>

      <div class="referral-link mt-3">
        <v-icon>fa-link</v-icon>

        <input
          v-model="referralLink"
          class="ml-4"
          disabled
        >

        <v-spacer />

        <v-btn
          v-clipboard:copy="referralLink"
          v-clipboard:success="copied = true"
          text
          class="font-weight-medium primary--text"
        >
          Copy Link
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InviteView',
  data () {
    return {
      additionalRecordingTime: '60 minutes / person',
      charactersInTranslatedDocuments: '10,000 characters / person',
      additionalStorage: '100MB / person',
      referralLink: 'https://otter.ai/referrals/9CBGLZLS',
      copied: false
    }
  }
}
</script>

<style scoped lang="sass">
$primary: #07A766

.invite-view
  margin: 20px
  font-family: 'Avenir Next', sans-serif

  @media (min-width: 700px)
    margin: 30px 200px

.social-button
  color: $primary
  margin: 10px auto
  min-width: 230px
  padding: 10px 20px
  border-radius: 10px
  font-weight: 500
  font-size: 16px
  background: rgba(226, 222, 222, 0.26)
  border: 1px solid transparent

  &:hover
    border: 1px solid $primary
    background: transparent

.referral-link
  display: flex
  align-items: center
  height: 60px
  border-radius: 10px
  background: rgba(226, 222, 222, 0.26)
  padding: 0 25px
  border: 0.5px solid rgba(128, 128, 128, 0.5)
</style>
