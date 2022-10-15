const getRandomMachine = () => {
    const result = Math.floor(Math.random(100)*5) 
    return result;
};

export const getResult = (userInput) => {
    const aiInput = getRandomMachine()
    const checkEven = (userInput + aiInput) % 2;
    const checkBigger = userInput < aiInput;
    let result;

    if(((checkEven === 1) && checkBigger) || ((checkEven === 0) && !checkBigger)) result = 0;
    if(((checkEven === 1) && !checkBigger) || ((checkEven === 0) && checkBigger)) result = 1;
    if(userInput === aiInput) result = 2;
    
    return [result, aiInput];
}