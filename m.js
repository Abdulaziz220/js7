// const number = [2, 4, 6, 8, 10]

// const doubled = number.map(function(item){
//     return item / 2
// });
// console.log(doubled);


// const number = ["Abdulaziz","Ali","Aziz","saidamir","Bunyod"]

// const doubled = number.map(function (item) {
//     return item + "jon"
// });
// console.log(doubled);

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const filterednumber = number.filter(function (item) {
// if (item % 2) {
//     return item;
//     // console.log(number);
// }
// });
// console.log(number);

// let fruits = ["Apple","banan","cherry"]

// fruits . forEach(function (item,index,array) {
//     console.log(item, 'at index', index);
// })



let a = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50]

let numbersDiv = document.getElementById("numbers")

a.map(num => {
    const numberElement = document.createElement("div")
    numberElement.className = 'number';
    numberElement.textContent = num;
    if (num > 50) {
        numberElement.classList.add('green')
    } else {
        numberElement.classList.add('red')
    }
    numbersDiv.appendChild(numberElement)
});

