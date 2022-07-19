//  remove
 let rmvb = document.querySelectorAll('.delete')

 for(let i=0; i< rmvb.length; i++) {
     rmvb[i].addEventListener('click', function(){
         rmvb[i].parentNode.remove()
          totalPrice()
     })
 }

  //like button
 let heart= document.querySelectorAll(".fa-heart")
 for (let i=0; i<heart.length; i++) {
    heart[i].addEventListener('click', function(){
        if (heart[i].style.color =="rgb(158, 158, 158)"){
            heart[i].style.color='red'
         }
     else{
         heart[i].style.color ="rgb(158, 158, 158)"
    
    }})
 }


// + or -


let plusbtn = document.querySelectorAll('.plus-btn');
for (let i=0; i<plusbtn.length; i++){
    plusbtn[i].addEventListener('click',function(){
        plusbtn[i].previousElementSibling.value++
        totalPrice()
    })
} 

let minbtn = document.querySelectorAll('.minus-btn');
for(let i=0; i<minbtn.length; i++) {
    minbtn[i].addEventListener('click',function(){
   if(minbtn[i].nextElementSibling.value>1){
    minbtn[i].nextElementSibling.value--
    totalPrice()

   }

    })
}

// total price
function totalPrice() {
    let quantity = document.querySelectorAll('.QNT')
    let prc = document.querySelectorAll('.price')
    let count = 0
    for (let i=0; i<quantity.length; i++) {
        count=count+quantity[i].value * prc[i].value
    }
   document.querySelector('#finalPrice').value=count 
}

