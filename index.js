var mylead=[];
var inputEl=document.getElementById("input-el");
var ulel=document.getElementById("ul-el");
var deleteBtn=document.getElementById("delete-btn"); 
var tabBtn=document.getElementById("save-btn");


function render(leads){
  var listiteam="";
  for(var i=0;i<leads.length;i++){
  //   listiteam+="<li><a target='_blank' href='"+ mylead[i] + "'>" + mylead[i] + "</a></li>";
    listiteam+=`<li>
    <a target='_blank' href='${leads[i]}'>
    ${leads[i]}</a>
    </li>`;

  }
  
  ulel.innerHTML=listiteam;
}


var leadsfromlocalstroge=JSON.parse(localStorage.getItem("mylead"));
if(leadsfromlocalstroge){
  mylead=leadsfromlocalstroge;
  render(mylead);
}

deleteBtn.addEventListener("dblclick",function(){
  localStorage.clear();
  mylead=[];
  render(mylead);
})

var inputBtn=document.getElementById("input-btn");
inputBtn.addEventListener("click",function(){
mylead.push(inputEl.value);
inputEl.value="";
localStorage.setItem("mylead",JSON.stringify(mylead));

render(mylead);
});


tabBtn.addEventListener("click",function(){
  chrome.tabs.query({active: true,currentWindow: true},function(tabs){
    mylead.push(tabs[0].url);
    localStorage.setItem("mylead",JSON.stringify(mylead));
    render(mylead);
  })
})
