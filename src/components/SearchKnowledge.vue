<template>

  <div id="knowledge" class="section has-text-centered">

    <div class="columns">

      <div class="column is-half is-offset-one-quarter">

        <img src="../assets/logo.png"><br>
        <h1 class="title is-1">Knowmiall.</h1>
        <h2 class="subtitle">Easy to find. Easy to share.</h2>
        <SearchKnowledgeForm @searchingForKnowledge="searchKnowledge">
        </SearchKnowledgeForm>
        <br>
        <div class="columns">
          
          <div class="column is-fullwidth">
            <div class="card has-text-left">
              <div class="card-content">
                <p class="content"><textarea class="textarea" placeholder="Share whatever you want here."></textarea></p>
              </div>
              <div class="card-footer">
                <div class="card-footer-item">
                  <a>Sign-in and Share.</a>
                </div>
              </div>
            </div>
          </div>

        </div>
        <!--<div class="columns">
          <div class="column">
            <button class="button is-info is-outlined is-fullwidth">
              Latest.
            </button>
          </div>
          <div class="column">
            <button class="button is-primary is-outlined is-fullwidth">
              Random.
            </button>
          </div>
          <div class="column">
            <button class="button is-success is-outlined is-fullwidth">
              Popular.
            </button>
          </div>
          <div class="column">
            <button class="button is-danger is-outlined is-fullwidth">
              Show.
            </button>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <button class="button is-outlined is-fullwidth">
              Santarém.
            </button>
          </div>
          <div class="column">
            <button class="button is-outlined is-fullwidth">
              Artenes.
            </button>
          </div>
        </div>-->
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <SearchKnowledgeResults :results="knowledges">
        </SearchKnowledgeResults>
      </div>
    </div>

  </div>

</template>

<script>

  import SearchKnowledgeForm from './SearchKnowledgeForm'
  import SearchKnowledgeResults from './SearchKnowledgeResults'
  import CreateKnowledgeForm from './CreateKnowledgeForm'

  export default {

    name: 'knowledge',

    data () {return {

      msg: 'I know where you were last night.',
      knowledges: []

    }},

    components: {

      SearchKnowledgeForm,
      SearchKnowledgeResults,
      CreateKnowledgeForm

    },

    methods: {

      searchKnowledge(knowledge) {

        this.knowledges = [];

        this.$http.get('http://api.sabichona.dev/api/knowledges?search=' + knowledge)
        .then(response => {

          this.knowledges = response.body.data.knowledges;

        });

      }

    }

  }
</script>