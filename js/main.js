// chiedere email --> prompt
//fare check sul fatto che sia una email
// controlla se esiste un email uguale nell'array
// se esiste, scrivi email confermata

// var listaEmail = ["d.n@gmail.com","f.t@gmail.com","w.t@gmail.com","y.u@gmail.com", "r.t@hotmail.it"];
// console.log(listaEmail);
// var emailUtente = prompt('Scrivi la tua email per vedere se è in lista');
// console.log(emailUtente);
// for (var i = 0; i < listaEmail.length; i++) {
//     if (emailUtente == listaEmail[i]) {
//         console.log("La tua email è presente");
//     } else {
//         console.log("La tua email non è presente");
//     }
// }

var email = ["d.n@gmail.com","f.t@gmail.com","w.t@gmail.com","y.u@gmail.com", "r.t@hotmail.it"]
var emailInput = prompt("Scrivi la tua email");
// for (var i = 0; i < email.length; i++) {
//     if (emailInput == listaEmail[i]) {
//         entra = true;
//     } else {
//
//     }

    if (email.includes(emailInput)) {
        console.log("Sei in lista");
    } else {
        console.log("Non sei in lista");
    }
