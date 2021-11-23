const leftRotate = (arr, d, n) => {
  for (let i = 0; i < d; i++) {
    leftRotateByOne(arr, n);
  }
};
const leftRotateByOne = (arr, n) => {
  let i,
    temp = arr[0];
  for (i = 0; i < n - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[i] = temp;
};
const printArray = (arr, n) => {
  for (let i = 0; i < n; i++) {
    console.log(arr[i] + " ");
  }
};

let sampleArray = [1, 2, 3, 4, 5];
let numberOfRotations = 4;
console.log(leftRotate(sampleArray, numberOfRotations, sampleArray.length));
console.log(printArray(sampleArray, sampleArray.length));
// const rotationLeft = (arr, rotations) => {
//   const rotatedArray = arr.concat();
//   for (let i = 0; i < rotations.length; i++) {
//     const frontItem = rotatedArray.shift();
//     rotatedArray.push(frontItem);
//   }
//   return rotatedArray;
// };

// const numRotation = 1;
// const sampleArray = [1, 2, 3, 4, 5];

// // const expectedOutput = [5, 1, 2, 3, 4];

// console.log(`Array with roation:`);
// console.log(`Expected output: ${expectedOutput}`);
