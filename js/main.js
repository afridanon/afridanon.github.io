function opennav() {
    
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("sidenav");
    if (checkBox.checked == true){
      text.style.display = "none";
      document.getElementById("menuicon").className = "fa fa-bars";
    } else {
       text.style.display = "block";
       document.getElementById("menuicon").className = "fa fa-times";
    }
}
function chamyimg(){
    var text = document.getElementById("myimg").src="../images/my.jpg";
}
function closenav(){
    document.getElementById("sidenav").style.display = "none";
}




