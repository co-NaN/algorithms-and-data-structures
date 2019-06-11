// Find the min and max element in an array of ints!

let nums = [-1, 20, 40, -12, 223];

let min = 0;
let max = 0;

for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[min]) {
        min = i;
    } else if (nums[i] > nums[max]) {
        max = i;
    }
}

console.log(nums[min]);
console.log(nums[max]);
