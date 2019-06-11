// find the sum of even numbers in an array of integers

const nums = [1, 2, 56, 7, -3, 10];
let sum = 0;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        sum += nums[i];
    }
}

console.log(sum);
