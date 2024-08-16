valore = 0;

function piu1(){
    valore++;
    document.getElementById('numero').innerHTML = valore;
}
function piu10(){
    valore += 10;
    document.getElementById('numero').innerHTML = valore;
}
function meno1(){
    valore--;
    document.getElementById('numero').innerHTML = valore;
}
function meno10(){
    valore -= 10;
    document.getElementById('numero').innerHTML = valore;
}
function reset(){
    valore = 0;
    document.getElementById('numero').innerHTML = valore;
}