// Sort the integers in place!

const nums = [1, 0, -12, 3, -1, 2, 0];

let minIdx;
let j;

for (let i = 0; i < nums.length; i++) {
    minIdx = i;
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] < nums[minIdx]) {
            minIdx = j;
        }
    }

    if (minIdx !== i) {
        let temp = nums[i];
        nums[i] = nums[minIdx];
        nums[minIdx] = temp;
    }
}

console.log(nums);

