//BUBLE SORT

let arr = [64, 34, 25, 12, 22, 11, 90];

let swapped = false;
let temp = null;

for (let i = 0; i < arr.length; i++) {
	for (let j = i + 1; j < arr.length; j++) {
		if (arr[i] > arr[j]) {
			temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
			swapped = true;
		}
	}

	if (!swapped) break;
}

// for (i = 0; i < arr.length - 1; i++) {
// 	let temp;
// 	swapped = false;
// 	for (j = 0; j < arr.length - i - 1; j++) {
// 		if (arr[j] > arr[j + 1]) {
// 			// swap arr[j] and arr[j+1]
// 			temp = arr[j];
// 			arr[j] = arr[j + 1];
// 			arr[j + 1] = temp;
// 			swapped = true;
// 		}
// 	}

// 	// IF no two elements were
// 	// swapped by inner loop, then break
// 	if (swapped == false) break;
// }

console.log(arr);
