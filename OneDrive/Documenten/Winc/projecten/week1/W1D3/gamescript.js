let naam = prompt("Welkom! Wat is je naam?", "");
alert(" Hey " + naam);
let getal = prompt(
  "Voer een nummer in van 0 tot 25 om te beginnen met raden...",
  ""
);
alert(); //Hier moet een boodschap komen. negatief indien fout nummer, postiief indien geraden.
//nummer randonmiseren


let getalRandom= Math.floor(Math.random() * 25);
