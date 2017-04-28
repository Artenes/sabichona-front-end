<template>
	<div>

		<nav class="nav">

			<span class="nav-toggle" @click="showMenu">
				<span></span>
				<span></span>
				<span></span>
			</span>

			<div class="nav-right nav-menu" :class="{'is-active': isMenuVisible}">

				<a class="nav-item">
				</a>

			</div>

		</nav>
	</div>
</template>

<script>

	export default {

		data(){
			return {
				isMenuVisible: false,
			}
		},

		methods: {
			showMenu(){
				this.isMenuVisible = !this.isMenuVisible
			}
		}

	}

</script>

<style scoped>
	
	a.nav-item {
		margin-right: 1em;
	}

</style>