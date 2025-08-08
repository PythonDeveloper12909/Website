let temp=document.getElementById('textarea');
let value=document.getElementById('value');
let radiobutton1=document.getElementById('radio1');
let submit=document.getElementById('submit');
let radiobutton2=document.getElementById('radio2');
let cel_to_fahr_calc;
let fahr_to_cel_calc;
submit.onclick=function(){
    if(radiobutton1.checked){
        
        value.textContent=Math.round((temp.value*9/5)+32) + '°F';
    }
    else if(radiobutton2.checked){
        value.textContent=Math.round((temp.value-32)*5/9) + '°C';
    }
   else{
        value.textContent='Select';
    }
}
