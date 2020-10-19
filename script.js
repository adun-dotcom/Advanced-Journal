var extraNote = document.getElementById("main")
var countNote = document.getElementById("count")

var article = document.getElementsByTagName("article")



function createNoteFunction() {
  var dt = new Date();

let year  = dt.getFullYear().toString().substr(-2);
let month = (dt.getMonth() + 1).toString().padStart(2, "0");
let day   = dt.getDate().toString().padStart(2, "0");

  
  var addTitle = prompt("Write title here");
  var addNote = prompt("Write note here");
  
  if (addTitle === null || addTitle === "") {
    extraNote.innerHTML;
  }
  else {
    extraNote.innerHTML =  "<article>" +"<h2>" + day + "/" + month + "/" + year + ":" + " " +  addTitle + "</h2>" +  "<p>" + addNote + "</p>" + "</article>"  + extraNote.innerHTML ;
  }
  
  counterFunction()

    }
    
function counterFunction() {

  var counter  =  article.length;
  countNote.innerHTML = "You have" + " " + counter + " " + "notes";
  
}
counterFunction()    




