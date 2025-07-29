import { read } from "xlsx"

// 设置延迟函数
export function  delay(interval = 0) {
	return new Promise((resolve) => {
		let timer = setTimeout(() => {
			clearTimeout(timer);
			resolve();
		}, interval);
	});
}
 
//  把文件按照而精致进行读取
export function readFile(file) { 

	return new Promise((resolve, reject) => { 
		
		let reader = new FileReader();
		// readAsBinaryString
		reader.readAsArrayBuffer(file);
		reader.onload = function (e) { 
			resolve(e.target.result);
		};
	});
}