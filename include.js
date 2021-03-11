function includeHTML(){
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

function flipcard(obj,id_con){
  var obj;
  var id_con;
  var rowOpen='<div class="col-lg-4 col-md-6 card-container">';
  var cardflip='<div class="card card-flip">';
  var br='<br><br><br><br></p>'; 
  var Close='</div>';
  for(var i=0; i<obj.length; i+=1){
    var frontflip='<div class="front card-block"><span class="card-img-top fa" style="font-size: 4em">'+obj[i].title+'</span>';
    var core='<h4 class="card-title"><br>'+obj[i].type+'</h4><br><i style="font-size:50px" class="fas fa-hand-pointer" aria-hidden="true"></i> <br> touch me';
    var link='<a target="__blank" href="'+obj[i].link+'" class="btn btn-outline-primary">Link</a></div>';
    var backflip='<div class="back card-block"<p>'+obj[i].name+'<br>'+obj[i].date+'<br><br><br>'+obj[i].desc;
      document.getElementById(id_con).innerHTML += rowOpen+cardflip+frontflip+core+Close+backflip+br+link+Close+Close+Close;
      }       
  }

