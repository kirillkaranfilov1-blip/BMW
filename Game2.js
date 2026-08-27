const ScoreHTML=document.querySelector(".Score")
const TimeHTML=document.querySelector(".Time")
const Start=document.querySelector(".Start")
const Gamefild=document.querySelector(".Game-fild")
const square=document.querySelector(".square")
const recordHTML=document.querySelector(".record")
 let record=Number(localStorage.getItem("record"))||0
 recordHTML.textContent=record
  let score=0
let time=5
let timer=null
 function Move(){
  const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "black",
  "white",
  "brown"
];
const bg=colors[Math.floor(Math.random()*colors.length)]
 square.style.background=bg
  const size=Math.floor(Math.random()*51)+30 
  square.style.width=`${size}px`
  square.style.height=`${size}px`
   const maxx=Gamefild.clientWidth-square.offsetWidth
   const maxY=Gamefild.clientHeight-square.offsetHeight
   const randomX=Math.floor(Math.random()*maxx)
      const randomY=Math.floor(Math.random()*maxY)
      square.style.left=`${randomX}px`
        square.style.top=`${randomY}px`
}
   square.addEventListener("click",()=>{
    score+=1
    ScoreHTML.textContent=score   
    Move()
   })
   function startGame(){
    score=0
    time=5
    ScoreHTML.textContent=score  
    TimeHTML.textContent=time
    square.style.display="block"
    Move()
    Start.disabled=true
    timer=setInterval(()=>{
      time--
       TimeHTML.textContent=time
       if (time===0){
        overGame()
       }
    },1000)
   }
   Start.addEventListener("click",startGame)
   function overGame(){
    clearInterval(timer)
    timer=null
    Start.disabled=false
      square.style.display="none"
    if (score>record){
      record=score
      localStorage.setItem("record",record)
        recordHTML.textContent=record
    }
   }
   
    