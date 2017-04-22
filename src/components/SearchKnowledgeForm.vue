<template>

  <div id="knowledge-search">

   <form @submit="searchKnowledge">

   <div class="field has-addons has-addons-centered">
      <p class="control is-expanded">
        <input class="input" type="text" v-model="knowledgeContent" placeholder="What are you looking for?">  
      </p>
      <p class="control">
        <button class="button is-info is-outlined" type="submit">Search.</button>
      </p>
    </div>

  </form>

</div>

</template>

<script>

  export default {

    name: 'knowledge-search',

    data() {return {

     knowledgeContent: ''

   }},

   methods: {

     searchKnowledge(event) {

      event.preventDefault();

      this.$emit('searchingForKnowledge', this.knowledgeContent);

    }

  }

}

</script>