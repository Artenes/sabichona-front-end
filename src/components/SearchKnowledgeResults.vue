<template>

	<div id="knowledge-results">
		
		<div class="columns" v-for="knowledge in results" >
			
			<div class="column is-half is-offset-one-quarter">
				<div class="card has-text-left">
					<div class="card-content">
						<p class="content">{{ knowledge.content }}</p>
						<small >
							{{ knowledge.created_at }}
						</small>
					</div>
				</div>
			</div>

		</div>

	</div>

</template>

<script>

	export default {

		name: 'knowledge-results',

		props: ['results']

	}

</script>