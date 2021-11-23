const rotationLeft = (arr, rotations) => {
  const rotatedArray = arr.concat();
  for (let i = 0; i < rotations.length; i++) {
    const frontItem = rotatedArray.shift();
    rotatedArray.push(frontItem);
  }
  return rotatedArray;
};

const numRotation = 4;
const sampleArray = [1, 2, 3, 4, 5];

const expectedOutput = [5, 1, 2, 3, 4];

console.log(`Array with roation: ${rotationLeft(sampleArray, numRotation)}`);
console.log(`Expected output: ${expectedOutput}`);
