/*
>>> TASK
    You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
    You may assume the two numbers do not contain any leading zero, except the number 0 itself.

>>> Example 1
    [2]->[4]->[3]
   +[5]->[4]->[6]
    ______________
    [7]->[0]->[8]
    Explanation: 342 + 465 = 807.

    Input: l1 = [2,4,3], l2 = [5,6,4]
    Output: [7,0,8]
    Explanation: 342 + 465 = 807.

>>> Example 2:
    Input: l1 = [0], l2 = [0]
    Output: [0]

>>> Example 3:
    Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
    Output: [8,9,9,9,0,0,0,1]
*/

var addTwoNumbers = function (l1, l2) {
    let head = null, tmp = null, carry = 0
    while (l1 != null || l2 != null) {
        let sum = carry

        if (l1 != null) {
            sum += l1.val
            l1 = l1.next
        }

        if (l2 != null) {
            sum += l2.val
            l2 = l2.next
        }

        let node = new ListNode(Math.floor(sum) % 10)
        carry = Math.floor(sum / 10)

        if (tmp == null) tmp = head = node
        else {
            tmp.next = node
            tmp = tmp.next
        }
    }

    if (carry > 0) tmp.next = new ListNode(carry)

    return head
}