const arr = [1, 2, 'str', {}];
arr.splice(1,1); //delete item:(1-from which item we delete, 2-how many items are deleted)


const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][1]);

const newArr = arr.concat(matrix); //addition of arrays
console.log(newArr);

arr.join(''); //converts an array to a string
console.log(arr.join('-'));

arr.push('42');
console.log(arr);

arr.pop();
arr.shift(); //deletes the first item
arr.unshift(); //adds the first element
arr.reverse();
arr.slice(1,2) //cut out