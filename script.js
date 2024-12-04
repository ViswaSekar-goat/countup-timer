const hr = document.querySelector(".hr");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const button = document.querySelector(".button");

button.addEventListener("click",()=>{
  setInterval(countdown,1000);
})

function countdown(){
  sec.innerHTML = parseInt(sec.innerHTML) + 1;
  if(sec.innerHTML==60){
    min.innerHTML = parseInt(min.innerHTML) + 1;
    sec.innerHTML = 0;
  }
  if(min.innerHTML == 60){
    min.innerHTML = 0;
    hr.innerHTML = parseInt(hr.innerHTML) + 1;
  }
}