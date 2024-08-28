const userNumber = [
    4, 2, 8, 0, 1, 5, 2
]

let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;

    for (let i = 0; i<userNumber.length; i++){
        if (typeof userNumber[i] === "number") {
            if (userNumber[i] === 0){
             zeroCount = zeroCount+1;
            }else if(userNumber[i] % 2 === 0) {
                evenCount = evenCount+1;
            } else {
                oddCount = oddCount+1;
            }
        }
    }
    console.log(`Чётных элементов: ${evenCount}`);
    console.log(`Нечётных элементов: ${oddCount}`);
    console.log(`Нулевых элементов: ${zeroCount}`);