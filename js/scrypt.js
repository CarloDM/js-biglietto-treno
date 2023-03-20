const eta = prompt('inserire l età?');

const nChilometri = prompt('inserire i chilometri');

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

let prezzoArrotondato = prezzoSconto.toFixed(2)

console.log('prezzoscontato e arrotondato',prezzoArrotondato)

document.getElementById('price').innerHTML = prezzoArrotondato + ' &euro;'

