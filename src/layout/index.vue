<template>
	<div class="container">
		<div class="sider-container">侧边栏</div>
		<div class="main-container">
			<div class="header">
				<div class="navbar">导航条-1</div>
				<div class="tags-view">导航条-2</div>
			</div>
			<div class="app-main">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script setup>
let props = defineProps({});
let emit = defineEmits([]);
</script>

<style scoped lang="scss">
.container {
	@apply flex w-full h-full   text-black;

	.sider-container {
		@apply bg-red  w-[var(--sidbar-width)];
	}

	.main-container {
		@apply flex flex-col  flex-1;

		.header {
			@apply h-84px;
			.navbar {
				@apply h-[var(--navbar-height)] bg-yellow;
			}
			.tags-view {
				@apply h-[var(--tagview-height)] bg-green;
			}
		}

		.app-main {
			@apply bg-cyan;
			min-height: calc(100vh - var(--navbar-height) - var(--tagview-height));
		}
	}
}
</style>
