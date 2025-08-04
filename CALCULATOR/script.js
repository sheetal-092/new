const display = document.querySelector('.display')
const buttons = document.querySelectorAll('.number')
const equalto = document.querySelector('.equal-btn')
const reset = document.querySelector('.reset-btn')


buttons.forEach((val) => {
    val.addEventListener('click', () => {
        
        display.value += val.innerHTML
    })
})

equalto.addEventListener('click',()=>{
    const solution=eval(display.value)
    display.value=solution
})

reset.addEventListener('click',()=>{
    display.value=''
})