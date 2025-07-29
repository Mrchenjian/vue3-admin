<template>
  <!-- <div>
    <input type="file" ref="inputRef" />
    <img
      ref="imgRef"
      style="width: 200px; height: 200px; border: 1px solid red"
      src=""
      alt=""
    />
  </div> -->
  <div>
    <el-button type="primary" @click="exportExcel">导出EXcel</el-button>
    <el-button type="primary" @click="getFile">选择文件</el-button>
  </div>
  <div>
    <el-table :data="arrayOfObjects" style="width: 100%">
      <el-table-column prop="id" label="id" width="180" />
      <el-table-column prop="name" label="姓名" width="180" />
      <el-table-column prop="age" label="年龄" />
      <el-table-column prop="email" label="邮箱" />
      <el-table-column prop="gender" label="性别" />
      <el-table-column prop="isVerified" label="isVerified" />
      <el-table-column prop="balance" label="balance" />
      <el-table-column prop="joinDate" label="joinDate" />
    </el-table>
  </div>
</template>

<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { nextTick, onMounted, ref } from "vue";

const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];

let exportExcel = () => {
  try {
    // 表头
    const excelData = [
      ["id", "姓名", "年龄", "邮箱", "性别", "isVerified", "joinDate"],
    ];

    // 添加数据行
    arrayOfObjects.forEach((item) => {
      excelData.push([
        item.id,
        item.name,
        item.age,
        item.email,
        item.sex,
        item.isVerified,
        item.joinDate,
      ]);
    });

    // 创建工作簿
    let workbook = XLSX.utils.book_new();

    //创建工作表
    let worksheet = XLSX.utils.aoa_to_sheet(excelData);

    //将工作表填加到工作簿
    XLSX.utils.book_append_sheet(workbook, worksheet, "员工数据");

    //生成Excel文件并保存
    const wbout = XLSX.write(workbook, { bookType: "xlsx", type: "array" });

    // 使用FileSaver保存文件
    const blob = new Blob([wbout], { type: "application/octet-stream" });

    saveAs(blob, "员工数据.xlsx");
    ElMessage.success("Excel文件导出成功！");
  } catch (e) {
    console.log("🚀 ~ exportExcel ~ e:", e);
    ElMessage.error("导出失败: " + error.message);
  }
};

function generateRandomObject() {
  const firstName = ["Alice", "Bob", "Charlie", "David", "Eve"];
  const lastName = ["Smith", "Johnson", "Williams", "Brown", "Davis"];
  const genders = ["Male", "Female"];

  return {
    id: Math.random().toString(36).substr(2, 9),
    name: `${firstName[Math.floor(Math.random() * firstName.length)]} ${
      lastName[Math.floor(Math.random() * lastName.length)]
    }`,
    age: Math.floor(Math.random() * 80) + 18,
    email: `${Math.random().toString(36).substr(2, 8)}@example.com`,
    gender: genders[Math.floor(Math.random() * genders.length)],
    isVerified: Math.random() > 0.5,
    balance: (Math.random() * 10000).toFixed(2),
    joinDate: new Date(Math.random() * (Date.now() - 31536000000))
      .toISOString()
      .split("T")[0],
  };
}

const arrayOfObjects = Array.from({ length: 100 }, () =>
  generateRandomObject()
);

console.log(arrayOfObjects);

// const exportExcel = () => {
//           try {
//             // 创建工作簿
//             const wb = XLSX.utils.book_new();

//             // 准备数据 - 添加表头
//             const excelData = [
//               ['时间', '姓名', '地址']
//             ];

//             // 添加数据行
//             filteredData.value.forEach(item => {
//               excelData.push([
//                 item.id,
//                 item.name,
//                 item.department,
//                 item.position,
//                 item.salary,
//                 item.joinDate,
//                 item.performance
//               ]);
//             });

//             // 创建工作表
//             const ws = XLSX.utils.aoa_to_sheet(excelData);

//             // 将工作表添加到工作簿
//             XLSX.utils.book_append_sheet(wb, ws, '员工数据');

//             // 生成Excel文件并保存
//             const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
//             saveAs(new Blob([wbout], { type: 'application/octet-stream' }), '员工数据表.xlsx');

//             ElMessage.success('Excel文件导出成功！');
//           } catch (error) {
//             console.error('导出失败:', error);
//             ElMessage.error('导出失败: ' + error.message);
//           }
//         };

let imgRef = ref(null);
let inputRef = ref(null);
onMounted(() => {});

function getFile() {
  console.log("🚀 ~ imgRef:", imgRef.value);
  inputRef.value.click();
}
function setImgSrc(f) {
  var reader = new FileReader();
  reader.onload = function (e) {
    // document.createElement("img").src = e.target.result;
    imgRef.value.src = e.target.result;
  };
  reader.readAsDataURL(f);
}

nextTick(() => {
  inputRef.value?.addEventListener("change", function (e) {
    console.log("🚀 ~ e:------------>addEventListener");
    setImgSrc(e.target.files[0]);
  });
});
</script>

<style scoped></style>
