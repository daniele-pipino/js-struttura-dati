/*Proviamo a ripetere quanto visto in classe, creando la struttura che riteniamo più adeguata per rappresentare una carta di Magic.
Una volta definita la struttura, stampiamo sulla pagina HTML tutte le informazioni relative alla carta stessa, senza particolare attenzione a dettagli grafici (va bene una lista coi tag UL e LI) */

// --------------------------------------------- Svolgimento -------------------------------------------//

// recupero elemento html
let cardDisplay = document.getElementById('card-display');

//* Inizializzazzione dell'oggetto
const card = {
    nome: '',
    cost: ['6', 'R', 'R'],
    tipo: 'Creatura',
    specificita: 'Ninja',
    espansione: {
        expNumber: 12,
        rarity: 'silver',
    },
    abilita: {
        costoAbilita: ['R', 'T'],
        descrizione: 'Descrizione carta',
    },
    flavorText: {
        testo: 'Lorem....',
        autore: 'Ddhcbcibe'
    },
    autore: 'ciaociao',
    numeroCollezione: '127/350',
    forza: '13',
    costituzione: '13',
    bordo: '#12345'
}