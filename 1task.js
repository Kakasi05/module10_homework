const userNumber = +prompt('Введите число')
if (typeof userNumber === "number" && !isNaN(userNumber)) {
    if(userNumber % 2 === 0) {
        console.log('Четное') 
    } else {
        console.log('Нечетное')
    }
} else {
    console.log('Упс, кажется, вы ошиблись')
}//done
