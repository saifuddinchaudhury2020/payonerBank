//this area use for login mangaement systme
const subMitButton = document.getElementById('subMitButton');
subMitButton.addEventListener("click", function(){
const full_login= document.getElementById('full_login');
full_login.style.display= "none";
const transation_area = document.getElementById("transation_area");
transation_area.style.display = "block";
});
//this part is deposte part start
const depositButton =document.getElementById("depositButton");
depositButton.addEventListener("click", function(){
//const depositeAmount =document.getElementById('depositeAmount').value;
//const deposeiteNumber =parseFloat(depositeAmount);
const   deposeiteNumber=inPutUpdate("depositeAmount");
spanUpdate("currentDeposite",deposeiteNumber);
spanUpdate("currentblance",deposeiteNumber);
document.getElementById('depositeAmount').value="";
});
//this part is widthrowarea partStart
const  WithDrowBtn = document.getElementById("WithDrowBtn");
WithDrowBtn.addEventListener("click", function(){
   const  widthRowNumber =inPutUpdate("widthRowAmonunt");
   spanUpdate("whidrowSpan", widthRowNumber);
   spanUpdate("currentblance",-1*widthRowNumber);
   document.getElementById('widthRowAmonunt').value="";
});
//this is whithdrowfunction in j
function inPutUpdate(id){
  const widthRowAmonunt = document.getElementById(id).value;
  const widthRowNumber =parseFloat(widthRowAmonunt);
return  widthRowNumber;
}
//now this function use fortoalat amonunt number
function spanUpdate(id, deposeiteNumber){
  const currentblance= document.getElementById(id).innerText;
  const currentBlanceNumber = parseFloat(currentblance);
  const totalBlance =deposeiteNumber+currentBlanceNumber;
  document.getElementById(id).innerText=totalBlance;
}
