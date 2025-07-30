const inBtn = document.querySelector(".btn1")
const reBtn = document.querySelector(".btn2")
const deBtn = document.querySelector(".btn3")
const show = document.querySelector(".show")
let count =0
inBtn.addEventListener("click",()=>{
    count ++;
    show.textContent = count
})

reBtn.addEventListener("click",()=>{
    count = 0
    show.textContent = count
})

deBtn.addEventListener("click",()=>{
    if(count>0){
        count --;
        show.textContent = count
    }

})


