var main = document.getElementById("main")
var countNote = document.getElementById("count")




function addNoteFunction() {
    var addNote = prompt("Add note here");
    
    main.innerHTML = "<article>" + addNote + "</article>" + main.innerHTML;
       
    counterFunction()

    }
    
    function counterFunction() {
        var article = document.getElementsByTagName("article").length;
        countNote.innerHTML = "You have" + " " + article + " " + "notes";
    
        
    } 
    counterFunction()
    