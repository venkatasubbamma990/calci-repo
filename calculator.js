let bill =document.querySelector("#bill") 
//console.log(bill)
let people = document.querySelector('#people')
let tipamount = document.querySelector("#tip-amount")
//console.log(tipamount)
let total = document.querySelector("#total")
//console.log(total.innerText)

//console.log(total.innerText )
bill.addEventListener('input' ,()=>{
    tipamount.innerText = bill.value
    let billamount = bill.value
    console.log(billamount)
    

})
people.addEventListener('input',(e)=>{
    people.innerText = people.value
    console.log(people.innerText)
})
let buttons = document.querySelectorAll("#buttons")
for(i=0;i<buttons.length;i++){
     buttons[i].addEventListener('click',()=>{
        calculate(buttons[i])
    })
} 
let calculate = (inputvalue)=>{
    tipamount.innerText = eval((tipamount.innerText* inputvalue/100)/people.innerText)
}
total.addEventListener('input',()=>{
    total.innerText = eval((tipamount.innerText* inputvalue/100)/people.innerText)
})




