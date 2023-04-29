// Todo. Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// ? The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

function sumArray(array) {
    if(!Array.isArray(array) || array.length <= 2) return 0;
    
    return sortAndSum = array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((sum, num) => sum + num);
}

sumArray(null) // 0
sumArray([ ]) // 0
sumArray([ 3 ]) // 0
sumArray([ 3, 5 ]) // 0
sumArray([ 6, 2, 1, 8, 10 ]) // 16
sumArray([ 0, 1, 6, 10, 10 ]) // 17
sumArray([ -6, -20, -1, -10, -12 ]) // -28
sumArray([ -6, 20, -1, 10, -12 ]) // 3