<template>
	<h1>数据: {{ form }}</h1>
	<div>
		<formComponent
			ref="formComponentRef"
			v-model="form"
			:formItems="formItems"
			:rules="rules"
		>
		</formComponent>
	</div>
	<el-button @click="submit" type="primary">提交</el-button>
	<el-button @click="reset">重置</el-button>
</template>

<script setup>
import formComponent from "@/views/form/component/FormComponent.vue";
import { Hide } from "@element-plus/icons-vue";
import { reactive, useTemplateRef, ref, computed } from "vue";

// let props = defineProps({});
// let emit = defineEmits([]);

let formComponentRef = ref();
let form = reactive({});

const formItems = computed(() => [
	{
		label: "姓名",
		key: "name",
		type: "el-input",
		placeholder: "请输入姓名",
		props: {
			placeholder: "请输入姓名",
		},
		colProps: {
			span: 6,
		},
	},
	{
		label: "年龄",
		key: "age",
		type: "el-input",
		props: {
			placeholder: "请输入年龄",
		},
		colProps: {
			span: 6,
		},
	},
	{
		label: "性别",
		key: "sex",
		type: "el-select",
		// hidden: true,
		hidden: form.name === "张三",
		props: {
			placeholder: "请选择性别",
			options: [
				{
					label: "男",
					value: 1,
				},
				{
					label: "女",
					value: 2,
				},
			],
		},
		colProps: {
			span: 6,
		},
	},
]);

const rules = {
	name: [
		{ required: true, message: "请输入姓名", trigger: "blur" },
		{ min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" },
	],
	age: [
		{ required: true, message: "请输入年龄", trigger: "blur" },
		{ min: 18, max: 60, message: "请输入18-60岁之间的年龄", trigger: "blur" },
	],
	sex: [{ required: true, message: "请选择性别", trigger: "blur" }],
};

// let formRef = useTemplateRef("formComponentRef");

const submit = async () => {
	let isVale = await formComponentRef.value.validate();
	console.log("🚀 -> submit -> isVale:", isVale);
	// alert("提交成功");
};

const reset = () => {
	formComponentRef.value.resetFields();
};
</script>

<style scoped lang="scss"></style>
