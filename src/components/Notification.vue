<template>

  <transition name="fade">
    <div v-show="isVisible">
      <div id="notification" class="notification is-info">
        <span v-html="content"></span>
      </div>
    </div>
  </transition>

</template>

<script>

  export default {

    data() {

      return {

        isVisible: false,
        type: 'default',
        content: ''

      }

    },

    methods: {

      show(content, type, seconds = 3) {

        this.content = content
        this.type = type

        this.isVisible = true

        if (seconds > 0)
          setTimeout(function() { this.hide() }.bind(this), (seconds * 1000));

      },

      flashError(content, seconds = 3) {

        this.show(content, 'danger', seconds)

      },

      flashSuccess(content, seconds = 3) {

        this.show(content, 'success', seconds)

      },

      showMessage(content) {

        this.show(content, 'info', 0)

      },

      hide() {

        this.isVisible = false

      }

    }

  }

</script>

<style scoped>

  #notification {
    margin-top: 1em;
    margin-bottom: 1em;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  
  .fade-enter, .fade-leave-to {
    opacity: 0
  }

</style>