var extraNote = document.getElementById("main")

var countNote = document.getElementById("count")

var article = document.getElementsByTagName("article")



function createNoteFunction() {
  var addTitle = prompt("Write title here");
  var addNote = prompt("Write note here");
  
  if (addTitle === null || addTitle === "") {
    extraNote.innerHTML;
  }
  else {
    extraNote.innerHTML = extraNote.innerHTML + "<article>" + "<h2>" + addTitle + "</h2>" + "<p>" + addNote + "</p>" + "</article>"   ;
  }
  
  counterFunction()

    }
    
function counterFunction() {

  var counter  =  article.length;
  countNote.innerHTML = "You have" + " " + counter + " " + "notes";
  
}
counterFunction()    
