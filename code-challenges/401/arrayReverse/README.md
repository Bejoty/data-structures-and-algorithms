# Reverse an Array
This solution reverses a given array in O(n) time.

## Challenge
Write a function called reverseArray which takes an array as an argument.
Without utilizing any of the built-in methods available to your language,
return an array with elements in reversed order.

## Approach & Efficiency
When considering an approach for this problem, I immediately considered the
example code challenge from earlier in the week considering if a given string
is a palindrome.  

It became clear that the most efficient way to solve this problem would be to
swap elements from either end, working inward toward the middle of the array.  

Considering the regular case of an array with at least two elements, a simple
for-loop could be used to track the distance from either end of the array, and
using a temporary variable to hold one of the values, we can swap their
positions. Once the middle of the array is reached, all the elements have been
swapped and the array is reversed.  

Returning the array isn't strictly necessary since the original array will be
modified, but this gives extra confirmation of successful reversal. Given an
input of null or undefined, returning the input may serve as fast and silent
error case. An empty array will skip the for-loop and leaves the array
unchanged.

Because this algorithm takes only one pass through the input array, the time
complexity is O(n), and there is no additional space requirement.

## Solution
![](https://lh3.googleusercontent.com/hznw4pl4s8-2DciljoQvCF2zULDdTmfhiai9JPqcYe7sACnRA054NF74MjJZ0nrEXqdc2sfWPzW_LsnXHnPh2bBg336XWXrj6zOBLW3b5fmjjH6-5xOSc8RSs1DPIkEWgxsVBAy5HX_TbyrZ6GuCFkGJpAhpyPNIbLuhXPaPVaHK5IGteaCA_HCWo9Xz2tDJs8VvXNCzfXeo7R8cMMUysTMHs8O2ttHahiW2205xlH_70YRNGagFE702KvFTyRuhH50FK97uG7XtVz5cuV8CSYo89dnl_Wt6iw6-xM_j1mlU2qQAN31itWnNPl7bbroWgHWWUIqN5zRZxHhvXtAbGJ8Wx2fKJInuGx4H28M6j8pav58Ur3CYCVJjSg_s4mFaUAM4gKCIPEbe8Fd31e_D6ftsarKNimLFGLm70iEosMITy_Bm-rOgiCWbEYfA7jZQvZHxF8TxLSkxJHpuaj4ZUq0pxaj58Azm1LTEOKSCYHVL5nQDzbpStsOo0MwyMLeLxmUhUPLdGmw5tYq09itOs2gQVA4tP9f-RjgoAM21LrbsZJKjOtTr2Ut3oKrFKdd5qfhAJSO7Eg9ZFe8Ce3eTdfcPifKMIZZqqR8_-CkCWXrTYVh4tjBKyn8V-Di35hGI_R9Le-Sg8HwEIqG5uYrYKM7AruS-PR9fvVDGqhMeXw0W_Nm_aobxthBIPRcVb6UlOn5hWmhyEDBi_974ZxgHxgK4=w1214-h910-no)
