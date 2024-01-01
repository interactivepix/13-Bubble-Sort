    // return array sorted with bubble sort, from least to greatest
    // of passes: array.length - 1 passes

function bubbleSort(array) {
    for (var i = array.length; i > 0; i--) {
        for (var j = 0; j < i; j++) {
            if (array[j] > array[j +1]) {
                var temp = array[j];
                array[j] = array [j + 1 ];
                array[j + 1] = temp
            }        
        }
    }

    return array;
}

bubbleSort([5, 3, 8, 2, 1, 4]);

// Result
// (6) [1, 2, 3, 4, 5, 8]



// // What if?

// bubbleSort([20, 20, 31, 56, 1, 12, 12]);

// Result
// (7) [1, 12, 12, 20, 20, 31, 56]

