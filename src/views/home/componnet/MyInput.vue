<template>
	<div>
		<el-input v-bind="$attrs">
			<!-- 具名插槽  用户传什么插槽内容  就给组件透传什么内容 -->
			 /**
			  *  template 标签作用是遍历 组件内置插槽 避免一个一个去写
			  *  同样通过用户传递过来的插槽内容  用template 包裹 保证插槽内容是透传的
			  */
			<template v-for="(value, name) in $slots" #[name]="slotData">
				<!-- 作用插槽 也是透传 -->
				<slot :name="name" v-bind="slotData"></slot>
			</template>
		</el-input>
	</div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="less"></style>
