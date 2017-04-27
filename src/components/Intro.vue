<template>

  <transition name="fade">
    <div v-if="hasLocation && !sawIntro">

      <h2 class="subtitle" v-html="$lang.strings.welcome_to_base_knowledge"></h2>

      <h1 class="title is-1">{{ city }}</h1>

      <p class="section" v-html="$lang.strings.search_for_anything"></p>

      <p class="section" v-html="$lang.strings.publish_anything"></p>

      <p class="section" v-html="$lang.strings.find_and_be_found"></p>

      <p class="section" v-html="$lang.strings.with_ease"></p>

      <p class="section">
        {{ $lang.strings.i_am + ' '}}
        <strong>{{$lang.strings.app_name}}</strong>
        {{ $lang.strings.nice_to_meet_you}}
      </p>

      <div class="section"><img id="logo" src="../assets/logo.png"></div>

      <button class="button is-info is-outlined" @click="start">
        {{ $lang.strings.click_here_to_start }}
      </button>

    </div>
  </transition>

</template>

<script>

  import { mapGetters, mapState } from 'vuex'

  export default {

    data() {
      return {
        done: false
      }
    },

    computed: {

      ...mapGetters('location', ['hasLocation']),
      ...mapState('location', ['city']),
      ...mapState('experience', ['sawIntro'])

    },

    methods: {

      start() {

        this.$store.commit('experience/seeIntro')

      }

    }

  }

</script>
