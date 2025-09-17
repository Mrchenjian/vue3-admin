<template>
	<div>
		<el-form
			ref="formRef"
			label-width="120px"
			:model="modelValue"
			:rules="rules"
			:inline="false"
		>
			<el-row :gutter="20">
				<el-col
					v-for="(item, index) in formItemsComputed"
					v-bind="item.colProps || { span: 24 }"
					:key="index"
				>
					<el-form-item :label="item.label"  :prop="item.key">
						<slot :name="item.key" :scop="modelValue">
							<component
								:is="item.type"
								v-bind="item.props"
								v-model="modelValue[item.key]"
							></component>
						</slot>
					</el-form-item>
				</el-col>
			</el-row>
		</el-form>
	</div>
</template>

<script setup lang="ts">
import { defineModel, defineProps, defineExpose, ref ,computed} from "vue";
import { type FormInstance } from "element-plus";

const modelValue = defineModel<any>();
const props = defineProps(["formItems", "rules"]);

const formRef = ref<FormInstance>();

// item?.hidden 为 true 的不显示
let formItemsComputed = computed(()=> props.formItems.filter((item:any)=> !item?.hidden))

defineExpose({
	validate: () => formRef.value?.validate(),
	resetFields: () => formRef.value?.resetFields(),
});
</script>

<style scoped lang="scss"></style>
