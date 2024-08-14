
// here selected the buttons and inputBox
const urgentImp = document.querySelector(".UrgentImp");
const UrgentNonImp = document.querySelector('.UrgentNonImp');
const NonUrgentImp = document.querySelector('.NonUrgentImp');
const NonUrgentNonImp = document.querySelector('.NonUrgentNonImp');
const inputBox = document.querySelector('#inputBox');

// selected the different different list 

const urgentImpList = document.querySelector('.urgentImpList');
const nonUrgentImpList = document.querySelector('.nonUrgentImpList');
const urgentNonImpList = document.querySelector('.urgentNonImpList');
const nonUrgentNonImpList = document.querySelector('.nonUrgentNonImpList');
// function calling
 const addTodoUrgentImp=()=>{
  const inputText=inputBox.value.trim();
  if(inputText.length <=0){
    alert("Please enter a text");
    return false;
  }
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML=inputText;
    li.appendChild(p);
    urgentImpList.appendChild(li);
    inputBox.value="";
 }

 const addTodoNonUrgentImp =()=>{
   const inputText =inputBox.value.trim();
   if(inputText.length<=0){
      alert("Please enter some valid text");
      return false;
   }
   const li= document.createElement("li");
   const p=document.createElement("p");
   p.innerHTML=inputText;
   li.appendChild(p);

   nonUrgentImpList.appendChild(li);
   inputBox.value="";
   
 }
 

 const addTodoUrgentNONImp =()=>{
  const inputText =inputBox.value.trim();
  if(inputText.length<=0){
     alert("Please enter some valid text");
     return false;
  }
  const li= document.createElement("li");
  const p=document.createElement("p");
  p.innerHTML=inputText;
  li.appendChild(p);

  urgentNonImpList.appendChild(li);
  inputBox.value="";
  
}


const addTodoNonUrgentNonImp =()=>{
  const inputText =inputBox.value.trim();
  if(inputText.length<=0){
     alert("Please enter some valid text");
     return false;
  }
  const li= document.createElement("li");
  const p=document.createElement("p");
  p.innerHTML=inputText;
  li.appendChild(p);

  nonUrgentNonImpList.appendChild(li);
  inputBox.value="";
  
}

// managing after clickling 
urgentImp.addEventListener('click',addTodoUrgentImp);
UrgentNonImp.addEventListener('click',addTodoUrgentNONImp);
NonUrgentImp.addEventListener('click',addTodoNonUrgentImp);
 NonUrgentNonImp.addEventListener('click',addTodoNonUrgentNonImp);