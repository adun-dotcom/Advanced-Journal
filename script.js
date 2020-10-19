var extraNote = document.getElementById("main")
var countNote = document.getElementById("count")
var article = document.getElementsByTagName("article")



function extraNoteFunction() {
    var addTitle = prompt("Add title here");
    var addNote = prompt("Add note here");

    if(addTitle === null || addTitle === ""){
        extraNote.innerHTML;
    }

    else {
        extraNote.innerHTML = extraNote.innerHTML + "<article>" + "<h2>" + addTitle + "</h2>" + "<p>" + addNote + "</p>" + "</article>"
    }

    countNoteFunction();
}


function countNoteFunction() {
    var counter = article.length;
    countNote.innerHTML = "You added" + " " + counter + " " + "notes";
}
countNoteFunction();
