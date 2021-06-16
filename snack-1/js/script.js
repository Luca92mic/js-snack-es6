//Snack 1 Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

var arrayBiciclette = [
    {
        nome: 'bici1',
        peso: 20
    },
    {
        nome: 'bici2',
        peso: 11
    },
    {
        nome: 'bici3',
        peso: 16
    },
    {
        nome: 'bici4',
        peso: 14
    },
    {
        nome: 'bici5',
        peso: 12
    }
]

var biciLeggera = arrayBiciclette[0];

for (let i = 0; i < arrayBiciclette.length; i++) {
    if (arrayBiciclette[i].peso < biciLeggera.peso) {
        biciLeggera = arrayBiciclette[i];
    }
}

console.log(biciLeggera);