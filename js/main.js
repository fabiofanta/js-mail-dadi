// chiedere email --> prompt
//fare check sul fatto che sia una email
// controlla se esiste un email uguale nell'array
// se esiste, scrivi email confermata

var email = ["d.n@gmail.com","f.t@gmail.com","w.t@gmail.com","y.u@gmail.com", "r.t@hotmail.it"]
var emailInput = prompt("Scrivi la tua email");
for (var i = 0; i < email.length; i++) {
    var emailCheck = emailInput == email[i];
    console.log(emailCheck);
}
