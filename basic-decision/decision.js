// Is there a number over 190 in an array of integers?

const nums = [1, 2, 56, 192, 7, -3, 10];
let i = 0;

while (i < nums.length && nums[i] <= 190) {
    i++;
}

console.log(i < nums.length);
