const textDis=document.getElementById('textToType');
const userInput=document.getElementById('userInput');
const startBtn = document.getElementById("startBtn");
const result = document.getElementById("result");

let startTime;

startBtn.addEventListener("click",()=>{
    textDis.textContent="The quick brown fox jumps over the lazy dog.";
    userInput.value="";
    result.textContent="";
    startTime=new Date();
    userInput.focus();
console.log(result.textContent)

})

userInput.addEventListener("blur",()=>{
const endTime=new Date();
const totalTime=(endTime-startTime)/1000;
const originalText=textDis.textContent.trim();
const typedText=userInput.value.trim();
const wordsTyped=typedText.split(/\s+/).length;
const speed=Math.round((wordsTyped/totalTime)*60);

let correctChars=0;
for(let i=0;i<typedText.length && i<originalText.length;i++){
    if(typedText[i]===originalText[i]){
        correctChars++;
    }
}
const accuracy=Math.round((correctChars/originalText.length)*100);
result.textContent=`Speed: ${speed}WPM || Accuracy: ${accuracy}%`;

})

