/*
>>> You are given an integer array height of length n.
    There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

    Find two lines that together with the x-axis form a container, such that the container contains the most water.

    Return the maximum amount of water a container can store.

    Notice that you may not slant the container.

>>> Example 1:
    Input: height = [1,8,6,2,5,4,8,3,7]
    Output: 49
    Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

>>> Example 2:
    Input: height = [1,1]
    Output: 1
*/

const maxArea = height => {
    let area = 0,
        minHeight = 0,
        i = 0,
        j = height.length - 1;

    while (i < j) {
        // the height of container = lowest of two sides
        minHeight = Math.min(height[i], height[j])

        // chose max of prev area and new area for i,j
        area = Math.max(area, minHeight * (j - i))

        height[i] <= height[j] ? i++ : j--
    }
    return area
};

let h;

h = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(maxArea(h))

h = [1, 1]
console.log(maxArea(h))