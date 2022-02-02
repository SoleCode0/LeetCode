/*
>>> Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
    such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

    Notice that the solution set must not contain duplicate triplets.

>>> Example 1:
    Input: nums = [-1,0,1,2,-1,-4]
    Output: [[-1,-1,2],[-1,0,1]]

>>> Example 2:
    Input: nums = []
    Output: []

>>> Example 3:
    Input: nums = [0]
    Output: []
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
    // If less than 3 numbers, 3Sum not POssible
    if (nums.length < 3) return []
    const output = []

    // Sort array in descending order.
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length - 2; i++) {
        // skip numbers we've already seen
        if (i > 0 && nums[i] === nums[i - 1]) continue

        let left = i + 1, right = nums.length - 1

        while (left < right) {
            // Get current sum with with number at i and numbers at the left and right pointers
            const sum = nums[i] + nums[right] + nums[left]
            // If 0, we add all numbers to output and move our left and right
            if (sum === 0) {
                output.push([nums[i], nums[left], nums[right]])
                // We will move the pointers until we find a number
                // that is not equal to each pointers current number
                while (nums[left] === nums[left + 1]) left++
                while (nums[right] === nums[right + 1]) right--
                left++
                right--
            }
            else if (sum > 0) right--
            else left++
        }
    }
    return output
};

let nums = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(nums))

nums = []
console.log(threeSum(nums))

nums = [0]
console.log(threeSum(nums))