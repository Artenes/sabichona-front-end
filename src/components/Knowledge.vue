<template>

  <div v-show="hasLocation && sawIntro">
    
    <Navigation
      @changeLocation="changeLocation"
    />

    <img id="logo" src="../assets/logo.png">
    <h1 class="title">{{ $lang.strings.app_name }}</h1>
    <h2 class="subtitle">{{ $lang.strings.app_description }}</h2>
    <LocationForm/>
    
    <Search
      @found="found"
      @nothing="nothing"
      @random="random"
      @first="first"
    />

    <Notification ref="notification"/>

    <Results :knowledges="knowledges" :pagination="pagination" @more="more"/>

  </div>

</template>

<script>

  import Navigation from '@/components/Navigation'
  import Search from '@/components/Search'
  import LocationForm from '@/components/LocationForm'
  import Results from '@/components/Results'
  import Notification from '@/components/Notification'
  import { mapState, mapGetters } from 'vuex'

  export default {

    data(){
      return {
        isChangingLocation: false,
        knowledges: [],
        pagination: {}
      }
    },

    components: { Notification, Navigation, Search, LocationForm, Results},

    computed: {

      ...mapState('location', ['label']),
      ...mapGetters('location', ['hasLocation']),
      ...mapState('experience', ['sawIntro'])

    },

    methods: {

      changeLocation(){
        this.isChangingLocation = !this.isChangingLocation;
      },
      found(result){
        this.$refs.notification.hide();
        this.knowledges = result.knowledges;
        this.pagination = result;
      },
      random(knowledge){
        this.$refs.notification.hide();
        this.$refs.notification.flashSuccess(this.$lang.errors.i_dont_know_what_you_want, 4);
        this.knowledges = [knowledge];
        this.pagination = {};
      },
      first(){
        this.$refs.notification.hide();
        this.$refs.notification.flashSuccess(this.$lang.errors.this_is_the_first_time, 30);
        this.knowledges = [];
        this.pagination = {};
      },
      nothing(search){
        this.$refs.notification.hide();
        let message = this.$lang.errors.couldnt_find_something + ' <strong>' + search + '</strong>?';
        this.$refs.notification.flashSuccess(message, 6);
        this.knowledges = [];
        this.pagination = {};
      },
      more(knowledges, pagination){
        this.knowledges = this.knowledges.concat(knowledges);
        this.pagination = pagination;
      }

    }

  }

</script>

<style scoped>
  
  #location {

    margin-bottom: 2em;

  }

</style>