// fibonacci with iteration
function fibs(n) {
    let fibonacci = [];

    for (let i = 0; i < n; i++) {
        if (i == 0) {
            fibonacci.push(0);
        } else if (fibonacci.length == 1) {
            fibonacci.push(1);
        } else {
            const nextDigit =
                fibonacci[fibonacci.length - 2] +
                fibonacci[fibonacci.length - 1];
            fibonacci.push(nextDigit);
        }
    }
    console.log(fibonacci);
}

//fibonacci with recursion
function fibsRec(n) {
    let fibonacci = [];

    function recursion(i) {
        if (i >= n) {
            console.log(fibonacci);
        } else {
            if (fibonacci.length == 0) {
                fibonacci.push(0);
                recursion(i + 1);
            } else if (fibonacci.length == 1) {
                fibonacci.push(1);
                recursion(i + 1);
            } else {
                const nextDigit =
                    fibonacci[fibonacci.length - 2] +
                    fibonacci[fibonacci.length - 1];
                fibonacci.push(nextDigit);
                recursion(i + 1);
            }
        }
    }
    recursion(0);
}

//fibonacci with recursion simplified
function fibRec(n) {
    if (n < 2) {
        return [0, 1];
    }
    let arr = fibRec(n - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
}

//merge sort algorithms 
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        const middle = Math.floor(arr.length / 2);
        const leftArr = arr.slice(0, middle);
        const rightArr = arr.slice(middle);
        return merge(mergeSort(leftArr), mergeSort(rightArr));
    }
}

function merge(leftArr, rightArr) {
    const sortedArr = [];
    while (leftArr.length > 0 && rightArr.length > 0) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift());
        } else {
            sortedArr.push(rightArr.shift());
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr];
}
