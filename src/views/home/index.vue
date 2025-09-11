<template>
	<div>
		<h1>组件的二次封装</h1>
		<p>1、属性透传</p>
		<p>2、事件透传</p>
		<p>3、插槽透传</p>
		<MyInput v-model="input" style="width: 400px" placeholder="Please input">
			<template #prepend>
				<el-select v-model="select" placeholder="Select" style="width: 115px">
					<el-option label="Restaurant" value="1" />
					<el-option label="Order No." value="2" />
					<el-option label="Tel" value="3" />
				</el-select>
			</template>
			<template #append>
				<el-button :icon="Search" />
			</template>
		</MyInput>
	</div>
</template>

<script setup>
import MyInput from "./componnet/MyInput.vue";
import { Search } from '@element-plus/icons-vue'
defineOptions({
	name: "",
});
</script>

<style lang="scss" scoped></style>
