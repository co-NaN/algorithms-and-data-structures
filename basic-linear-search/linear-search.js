// What's the index of the first number which is over 190?

const nums = [1, 2, 56, 191, 193, -3, 10];
let i = 0;

while (i < nums.length && nums[i] <= 190) {
    i++;
}

if (i < nums.length) {
    console.log(i);
} else {
    console.log(-1);
}
