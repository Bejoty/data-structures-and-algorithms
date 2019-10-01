# Left Join
Implement a simplified LEFT JOIN for 2 Hashmaps.

## Challenge
- Write a function that LEFT JOINs two hashmaps into a single data structure.
- The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
- The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
- Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
- LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row. If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.
- The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic.
- Avoid utilizing any of the library methods available to your language.

## Approach & Efficiency
The solution involves a simple loop through the key-value pairs of `mapA`, populating an entry of the solution array with the key and value, as well as the value for the current key in `mapB`, even if that value is undefined.

Time Complexity: O(A) - Where A is the input size of `mapA`. We loop the entirety of the first map's entries.

Space Complexity: O(A) - Likewise, the storage used in the multi-dimensional results array scales proportionally to the size of `mapA`.

## Solution
![](assets/left-join.jpg)
