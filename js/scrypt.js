const nChilometri = 10;

const eta = 66;

const prezzo = nChilometri * 0.21 

console.log('prezzo',prezzo)

let prezzoSconto = 0

if (eta < 18) { 
  prezzoSconto = prezzo - (prezzo * 0.2);
}

else if (eta > 64) {
  prezzoSconto = prezzo - (prezzo * 0.4);
}

else {
  prezzoSconto = prezzo;
}

console.log('prezzoscontato',prezzoSconto)





