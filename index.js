function alertbox(){
    var first_name = document.getElementById('fname').value;
    var last_name = document.getElementById('lname').value;
    // alert(first_name + " " +last_name);

    var str = capitalize(first_name + " " +last_name);

    function capitalize(input) {  
        var words = input.split(' ');  
        var CapitalizedWords = [];  
        words.forEach(element => {  
            CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));  
        });  
        return CapitalizedWords.join(' ');  
    } 

    alert(str);

    
}
function pageredirect(){
    window.open("reg.html", "_blank");
}

