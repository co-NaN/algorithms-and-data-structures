// Sort the integers in place!

const nums = [1, 0, -12, 3, -1, 2, 0];

for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] < nums[i]) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
    }
}

console.log(nums);
