$('#green').click(backgroundGreen);
$('#red').click(backgroundRed);
$('#yellow').click(backgroundYellow);
$('#violet').click(backgroundViolet);
$('#brown').click(backgroundBrown);

var x = document.getElementById("background");

function backgroundGreen(){
    x.style.background="green";
}

function backgroundRed(){
    x.style.background="red";
}

function backgroundYellow(){
    x.style.background="yellow";
}

function backgroundViolet(){
    x.style.background="violet";
}

function backgroundBrown(){
    x.style.background="brown";
}