const textDis=document.getElementById('text-to-type');
const userInput=document.getElementById('user-input');
const startBtn = document.getElementById("startBtn");
const result = document.getElementById("result");

let startTime;

startBtn.addEventListener("click",()=>{
    textDis.textContent="The quick brown fox jumps over the lazy dog.";
    userInput.value="";
    result.textContent="";
    startTime=new Date();
    userInput.focus();
})

