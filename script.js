"use strict";


let kaina = prompt("Įveskite prekės kainą?");
console.log(kaina);

let sutikimas = prompt("Ar reikalingas pristatymas į namus (taip/ne)?");
console.log(sutikimas);

let miestas = "Vilnius";

kaina = Number(kaina);

if (sutikimas == "ne") {
    alert("Prekės kaina: " + kaina + " €." + " Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a");
  } else {
    miestas = prompt("Į kurį miestą pristatyti?");
    console.log(miestas);

    if (miestas == "Vilnius" || kaina >= 50) {
        alert("Prekės kaina: " + kaina + " €." + " Prekę nemokamai pristatysime į " + miestas + " per 1-3 dienas.");
      } else {
          alert("Prekės kaina: " + kaina + " €." + " Pristatymas: " + 20 + " €." + " Iš viso: " + (kaina + 20) + " €." + " Prekę pristatysime į " + miestas + " per 1-3 dienas.");
        }
  }