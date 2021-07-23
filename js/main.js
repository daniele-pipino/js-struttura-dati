/*Proviamo a ripetere quanto visto in classe, creando la struttura che riteniamo più adeguata per rappresentare una carta di Magic.
Una volta definita la struttura, stampiamo sulla pagina HTML tutte le informazioni relative alla carta stessa, senza particolare attenzione a dettagli grafici (va bene una lista coi tag UL e LI) */

// --------------------------------------------- Svolgimento -------------------------------------------//

// recupero elemento html
let cardDisplay = document.getElementById('card-display');

//* Inizializzazzione dell'oggetto
const card = [
    {
        id: 1,
        nome: 'GinoPaoli',
        cost: ['6', 'R', 'R'],
        tipo: 'Artifact Creatur',
        specificita: 'Spirit',
        espansione: {
            expNumber: 12,
            rarity: 'silver',
        },
        abilita: {
            costoAbilita: ['R', 'T'],
            descrizione: 'Descrizione carta',
        },
        flavorText: {
            testo: 'Lorem ipsum dokjbwhjcbcbxbwcbhbhwbcb',
            autore: 'Ddhcbcibe'
        },
        illustratore: 'ciaociao',
        numeroCollezione: '127/350',
        forza: '13',
        costituzione: '13',
        bordo: '#12345'
    },
    {
        id: 2,
        nome: 'GinoPaoli',
        cost: ['6', 'R', 'R'],
        tipo: 'Artifact Creatur',
        specificita: 'Spirit',
        espansione: {
            expNumber: 12,
            rarity: 'silver',
        },
        abilita: {
            costoAbilita: ['R', 'T'],
            descrizione: 'Descrizione carta',
        },
        flavorText: {
            testo: 'Lorem ipsum dokjbwhjcbcbxbwcbhbhwbcb',
            autore: 'Ddhcbcibe'
        },
        illustratore: 'ciaociao',
        numeroCollezione: '127/350',
        forza: '13',
        costituzione: '13',
        bordo: '#12345'
    },
    {
        id: 3,
        nome: 'GinoPaoli',
        cost: ['6', 'R', 'R'],
        tipo: 'Artifact Creatur',
        specificita: 'Spirit',
        espansione: {
            expNumber: 12,
            rarity: 'silver',
        },
        abilita: {
            costoAbilita: ['R', 'T'],
            descrizione: 'Descrizione carta',
        },
        flavorText: {
            testo: 'Lorem ipsum dokjbwhjcbcbxbwcbhbhwbcb',
            autore: 'Ddhcbcibe'
        },
        illustratore: 'ciaociao',
        numeroCollezione: '127/350',
        forza: '13',
        costituzione: '13',
        bordo: '#12345'
    },
]

// inserimento oggetto in pagina

const printingCard =
    `<ul>
<strong>-----Top card------</strong>
<li><strong>Nome:</strong> ${card.nome}</li>
<li><strong>Costo:</strong> ${card.cost.join(', ')}</li>
<li><strong>Tipo:</strong> ${card.tipo} - ${card.specificita}</li>
<li><strong>Espansione:</strong> ${card.espansione.expNumber}
<li><strong>Rarità:</strong> ${card.espansione.rarity}</li>
<strong>--------Abilità------</strong>
<li><strong>Costo:</strong> ${card.abilita.costoAbilita}</li>
<li><strong>Descrizione:</strong> ${card.abilita.descrizione}</li>
<strong>----Flavor-text----</strong> 
<li><i>${card.flavorText.testo}</i> </li>
<li><strong>Autore:</strong> ${card.flavorText.autore}</li>
<strong>------Bottom card-------</strong>
<li><strong>Illustratore</strong> ${card.illustratore}</li>
<li><strong>N di collezione</strong> ${card.numeroCollezione}</li>
<li><strong>Forza / costituzione</strong> ${card.forza}/${card.costituzione}</li>
</ul>`

cardDisplay.innerHTML = printingCard;

// prova funzione  per stampare la card

// Completiamo il nostro archivio delle carte aggiungendo i seguenti step:
// Creiamo un mazzo di carte
// Stampiamo tutte  le carte su schermo
// Aggiungiamo un piccolo form in HTML
// Ragioniamo pian pianino sulla logica dei filtri
