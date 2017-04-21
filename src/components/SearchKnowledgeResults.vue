<template>

	<div id="knowledge-results">
		
		<div v-for="knowledge in results" class="card">
		  <div class="card-content">
		    <p class="content">{{ knowledge.excerpt }}</p>
		  </div>
		  <footer class="card-footer">
		    <p class="card-footer-item">
		      <span><a :href="knowledge.url">See knowledge</a></span>
		    </p>
		  </footer>
		</div>

	</div>

</template>

<script>

export default {

  name: 'knowledge-results',

  props: ['results']
  
}

</script>