// Задание 2.
function checkAttr(str, obj){
    return obj[str] != undefined
}

const obj = {
    name: 'alex',
    age: 8
}
console.log(checkAttr('age', obj))
console.log(checkAttr('mail', obj))