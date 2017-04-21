<template>

  <div id="knowledge-search">

   <form @submit="searchKnowledge">

   <div class="field has-addons has-addons-centered">
      <p class="control">
        <input class="input" type="text" v-model="knowledgeContent" placeholder="Want to know?">  
      </p>
      <p class="control">
        <input class="button is-info is-outlined" type="submit" value="Yes, I want.">          
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