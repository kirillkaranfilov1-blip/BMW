const Numebers=document.querySelector(".Numbers")
const Enter=document.querySelector(".Enter")
const Try=document.querySelector(".Try")
const Clue=document.querySelector(".Clue")
const Randomnumber=Math.floor(Math.random()*10)
let lives=3
function chechknumber(){
let inputvalue=Numebers.value
if (lives<=0){
    Clue.textContent="Вы проиграли!("
    Enter.disabled=true
    return
}
if (inputvalue>Randomnumber){
 Clue.textContent="Загадоннае число меньше введеного" 
 lives--
 Try.textContent=lives
  return
}
if (inputvalue<Randomnumber){
    Clue.textContent="Загадоное число больше введеного"
    lives--
    Try.textContent=lives
    return
}
if (inputvalue==Randomnumber){
    Clue.textContent="Вы выиграли!"
    return
}
}
Enter.addEventListener("click",chechknumber)