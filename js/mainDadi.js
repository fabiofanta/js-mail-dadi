var random1 = Math.floor(Math.random() * 10) + 1;
var random2 = Math.floor(Math.random() * 10) + 1;
console.log(random1);
console.log(random2);
document.getElementById('rd-1').innerHTML = "random1= " + random1
document.getElementById('rd-2').innerHTML = "random2= " + random2
if (random1 > random2) {
    console.log("random1 ha vinto");
    document.getElementById('result').innerHTML = "random1 ha vinto"
} else if (random1 < random2) {
    console.log("random2 ha vinto");
    document.getElementById('result').innerHTML = "random2 ha vinto"
} else {
    console.log("random1 e random2 hanno pareggiato");
    document.getElementById('result').innerHTML = "random1 e random2 hanno pareggiato"

}
