//Snack2 Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. (Utilizzate le arrow function). Infine usando la destrutturazione creiamo un nuovo array i cui elementi sono sempre degli oggetti che contengono solo nomi e falli subiti. Stampiamo tutto in console.

const arraySquadre = [
    {
        nome: 'Juventus',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Milan',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Roma',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Parma',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Inter',
        punti: 0,
        falli: 0
    }
]


/* var randomPunti;
var randomFalli;

var random = (num1) => Math.floor(Math.random() * num1 + 1);

for (let i = 0; i < arraySquadre.length; i++) {
    arraySquadre[i].punti = random(8);
    arraySquadre[i].falli = random(40);
}

for (let key in arraySquadre) {
    console.log(arraySquadre[key]);
} */

const randNum = (min, max) => Math.floor(Math.random()*(max-min+1)+min);
const nArray = [];

for (let i = 0; i < arraySquadre.length; i++){
    let {nome, falli} = arraySquadre[i];
    let punti = randNum(10,30);
    arraySquadre[i].punti = punti;
    falli = randNum(15,50);
    arraySquadre[i].falli = falli;
    const elem = {nome:nome, falliSubiti:falli};
    nArray.push(elem);
}

console.log(squadre);
console.log(nArray);