import { createBlocks, results, errorCount } from "./experiment.js";

let participantID="";
let currentBlockIndex=0;

function showScreen(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

document.getElementById("startBtn").addEventListener("click",()=>{
  participantID=document.getElementById("participantID").value.trim();

  if(participantID===""){
    alert("참가자 번호 입력!");
    return;
  }

  showScreen("noticeScreen");
});

document.getElementById("noticeBtn").addEventListener("click",()=>{
  showScreen("instructionScreen");
});


console.log("JS 실행됨");

const div = document.createElement("h1");
div.innerText = "실험 시작";
document.body.appendChild(div);
