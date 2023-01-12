const button = document.querySelectorAll('button')
const current = document.querySelector('#display-2')
const previous = document.querySelector('#display-1')
const deleteButton = document.querySelector('#delete')
let  operator = ""
let currentNum = ""
let prevNum = ""
button.forEach((button)=>{
button.addEventListener("click",(event)=>{
    if(event.target.classList.contains('num')){
        currentNum += event.target.innerText
        current.innerHTML = currentNum
    }else if(event.target.classList.contains('operator')){
        operator = event.target.innerHTML
        console.log(operator)
        prevNum = currentNum
        previous.innerHTML =  prevNum + operator
        current.innerHTML = ''
        currentNum  =''
        
        
    }else if (event.target.id === "equals"){
        currentNum = eval(prevNum + operator + currentNum)
        current.innerHTML = currentNum
        previous.innerHTML = ''
        currentNum = ''
    }else if(event.target.id === "clear"){
        currentNum = ''
        prevNum=''
        current.innerHTML = ''
        previous.innerHTML  = ''
    }
})
})
deleteButton.addEventListener('click',()=>{
    currentNum = currentNum.slice(0,-1)
    current.innerHTML  = currentNum
})
