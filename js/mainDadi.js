var random1 = Math.floor(Math.random() * 10) + 1;
var random2 = Math.floor(Math.random() * 10) + 1;
console.log(random1);
console.log(random2);
if (random1 > random2) {
    console.log("random1 ha vinto");

} else if (random1 < random2) {
    console.log("random2 ha vinto");

} else {
    console.log("random1 e random2 hanno pareggiato");

}
