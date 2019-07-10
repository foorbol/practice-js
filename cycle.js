/*for (initialization; test; increment or decrement) {
    cycle body
}*/

let i;
for (i = 0; i < 10; i++) {
    console.log(i);
}

const arr = [1, 2, 3, 4]
for (i = 0; i <arr.length; i++) {
    console.log(arr[i]);
}

//Цикл for in
const obj = {
    vel : 'cat',
    velSecond : 'dog'
};
let prop;

for (prop in obj) {
    if (obj.hasOwnProperty(prop)) { //ownership check
        console.log(prop + ' : ' + obj[prop]);
    }
}

//Цикл while

let k = 0;
while (k < 10) {
    console.log(k++);
}

//Цикл do while

let h = 0;
do {
    console.log(h++);
} while (h < 10);