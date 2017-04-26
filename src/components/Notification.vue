<template>

  <div v-show="isVisible">
  <transition name="fade">
      <div class="notification is-outlined">
        {{ content }}
      </div>
    </transition>
  </div>

</template>

<script>

  import { mapState } from 'vuex'

  export default {

    mounted() {

      //this.random()

    },

    data() {

      return {

        thought: ''

      }

    },

    computed: {

      ...mapState('notification', ['isError', 'isVisible', 'content']),

    },

    methods: {

      random() {

        let setences = this.$lang.setences.items
        this.thought = setences[Math.floor(Math.random()*setences.length)];
        setTimeout(this.random, 4000);

      }

    }

  }

</script>

<style scoped>

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }

</style>