const langdata = {
    az : ["Mən Colin Smith'əm","DİZAYNER & FRONTEND PROQRAMÇI"],
    en : ["I'm colin smith","DESIGNER & FRONTEND DEVELOPER"]
}

const langItem = document.querySelectorAll(".item");
const langBtn = document.querySelector("#langBtn");



if(localStorage.getItem("lang")===null && localStorage.getItem("langBtn")){
  localStorage.setItem("lang",langdata.az);
  localStorage.setItem("langBtn","AZ" )
} else{
  langBtn.onclick = ()=>{
    if(langBtn.innerHTML === "AZ"){
           localStorage.setItem("lang", langdata.az);
           localStorage.setItem("langBtn", "EN")
           for(let i in langdata.az){
            langItem[i].innerHTML = langdata.az[i];
           } langBtn.innerHTML = "EN" 
            }
          else{
            localStorage.setItem("lang", langdata.en);
           localStorage.setItem("langBtn", "AZ")
           for(let i in langdata.en){
            langItem[i].innerHTML = langdata.en[i];
           } langBtn.innerHTML = "AZ"
          }


  }
}




for (let i in langdata.az) {
    langItem[i].innerHTML = localStorage.getItem("lang") .split(",")[i];
  }

  document.querySelector("#langbtn").innerHTML =
    localStorage.getItem("langbtn");
id="langBtn"


const mode=()=>{
  if (nav.className === "navbar navbar-expand-lg bg-light navbar-light") {
      nav.className = "navbar navbar-expand-lg bg-dark navbar-dark";
  }else{
      nav.className = "navbar navbar-expand-lg bg-light navbar-light";

  }
}
modeBtn.onclick = mode;