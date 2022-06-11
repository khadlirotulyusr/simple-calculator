let prevNumber=''
let calculationOperator=''
let percentOperator=''
let currentNumber = '0'

const numbers = document.querySelectorAll(".number")
const operators=document.querySelectorAll(".operator")
const percents = document.querySelectorAll(".percentage")

console.log(numbers, 'numbers')

const calculatorScreen = document.querySelector('.calculator-screen')
const inputNumber = (number) => {
    if(currentNumber==='0'){
        currentNumber=number
    }else{
        currentNumber+=number
    }
    console.log(currentNumber, 'currentNum')
    
}

const inputPercent = (persen) => {
    if(calculationOperator===''){
        prevNumber=currentNumber
    }
    calculationOperator=persen
    currentNumber='0'

}

const inputOperator = (operator) => {

    if(calculationOperator===''){
        prevNumber=currentNumber
    }
    calculationOperator=operator
    currentNumber='0'
}

const updateScreen = (number) => {
    calculatorScreen.value=number
    console.log(calculatorScreen.value, 'calculatorScreen')
}


numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})


operators.forEach((operator, number)=>{
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
        console.log(event.target.value, 'operator')
        //updateScreen(currentNumber+=event.target.value)
        
    })
})

percents.forEach((persen) => {
    persen.addEventListener("click", (event) => {
        inputPercent(event.target.value)
        console.log(event.target.value, 'persen')
        evaluatePersen()
        
    })

})


const calculate = () => {

    
    console.log(prevNumber,'prevNumber')
    console.log(currentNumber,'currentNumber')
    let result=''
    switch(calculationOperator){
        case '+':
            result=parseFloat(prevNumber)+parseFloat(currentNumber)
            break
        case '-':
            result=parseFloat(prevNumber)-parseFloat(currentNumber)
            break
        case '*':
            result=parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case '/':
            result=parseFloat(prevNumber)/parseFloat(currentNumber)
            break
                     
    }
    currentNumber=result
    //calculationOperator=''
    console.log(result, 'hasil calc')
    console.log(calculationOperator, 'calculationOperator')
}

const evaluatePersen = () => {
    let result=''
    switch(calculationOperator){
        case '%':
            
            result=parseFloat(prevNumber)/100
            console.log(result, 'tess')
            updateScreen(result)
            break
            
        default:
            break   

    }
    prevNumber=result
    

}

const equalSign = document.querySelector('.equal-sign')


equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})


//clear button
const clearAll = () => {
    prevNumber=''
    calculationOperator=''
    currentNumber='0'
}

const clear = () => {
    // prevNumber=''
    // calculationOperator=''
    // currentNumber='0'

    currentNumber=Math.floor(parseFloat(currentNumber)/10)
}

const clearBtn= document.querySelector('.all-clear')
const clearbutton=document.querySelector(".clear")

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

clearbutton.addEventListener('click', () => {

    clear()
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return
    }
    currentNumber+=dot
    console.log(currentNumber)
}

const decimal=document.querySelector('.decimal')
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
    console.log(event.target.value, 'inputdecimal')
})

