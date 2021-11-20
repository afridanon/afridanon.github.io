
function fun(){
   var  select = document.getElementById("selectbox");
   value = select.options[select.selectedIndex].value
   var mon = money()
   document.getElementById("charge").value = "₹"+mon+" INR";
}
function money(){
    if(value == 1){
         return 10;
    }else if(value == 2){
        return 10;
   }else if(value == 3){
        return 150;
    }else if(value == 4){
        return 100;
   }else if(value == 5){
        return 100;
    }else if(value == 6){
        return 450;
    }else if(value == 7){
        return 1800;
}
}
function buyorder(){
    var number = "+(518)553-6573";
    var a = "Please WhatsApp To This Number  :  ";
    document.getElementById("WhatsappNumber").innerHTML = a+number;
}