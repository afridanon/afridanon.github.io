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