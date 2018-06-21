function shellSort(arr) {
    let increment = arr.length / 2; 
    while(increment >= 1) {
        for(let startIndex = 0; startIndex < increment; startIndex++) {
            insertionSort(arr, startIndex, increment);
        }

        increment = Math.floor(increment / 2);
    }
}

function insertionSort(arr, startIndex, increment) {
    for(let i = startIndex; i < increment; i++) {
        let sortedListLastIndex = i;
        for(let j = i + increment; j < arr.length; j += increment){
            const current = arr[j];
            let currentIndex = j;
            let swapIndex = sortedListLastIndex;
            while(current < arr[swapIndex] && swapIndex >= 0) {
                swap(arr, currentIndex, swapIndex);
                currentIndex -= increment;
                swapIndex -= increment;
            }
            sortedListLastIndex += increment;
        }
    }
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
module.exports=shellSort;