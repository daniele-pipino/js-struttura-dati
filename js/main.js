/*Proviamo a ripetere quanto visto in classe, creando la struttura che riteniamo più adeguata per rappresentare una carta di Magic.
Una volta definita la struttura, stampiamo sulla pagina HTML tutte le informazioni relative alla carta stessa, senza particolare attenzione a dettagli grafici (va bene una lista coi tag UL e LI) */

// --------------------------------------------- Svolgimento -------------------------------------------//



//* Inizializzazzione dell'oggetto
const deck = [
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




// creazione di una funzione per creare la struttura della card
const generateCardstructure = (obj) => {

    // inserimento oggetto in pagina
    const cardStructure =
        `<ul>
        <strong>-----Top card------</strong>
        <li><strong>Nome:</strong> ${obj.nome}</li>
        <li><strong>Costo:</strong> ${obj.cost.join(', ')}</li>
        <li><strong>Tipo:</strong> ${obj.tipo} - ${obj.specificita}</li>
        <li><strong>Espansione:</strong> ${obj.espansione.expNumber}
        <li><strong>Rarità:</strong> ${obj.espansione.rarity}</li>
        <strong>--------Abilità------</strong>
        <li><strong>Costo:</strong> ${obj.abilita.costoAbilita}</li>
        <li><strong>Descrizione:</strong> ${obj.abilita.descrizione}</li>
        <strong>----Flavor-text----</strong> 
        <li><i>${obj.flavorText.testo}</i> </li>
        <li><strong>Autore:</strong> ${obj.flavorText.autore}</li>
        <strong>------Bottom obj-------</strong>
        <li><strong>Illustratore</strong> ${obj.illustratore}</li>
        <li><strong>N di collezione</strong> ${obj.numeroCollezione}</li>
        <li><strong>Forza / costituzione</strong> ${obj.forza}/${obj.costituzione}</li>
          </ul>` ;

    //   risultato
    return cardStructure;
}

// Completiamo il nostro archivio delle carte aggiungendo i seguenti step:
// Creiamo un mazzo di carte
// Stampiamo tutte  le carte su schermo
// Aggiungiamo un piccolo form in HTML
// Ragioniamo pian pianino sulla logica dei filtri

// creazione del ciclo for per l'array di carte

// variabile d'appoggio
let printingCard = '';
for (let i = 0; i < deck.length; i++) {
    const currentCard = deck[i];
    printingCard += generateCardstructure(currentCard);
}

// recupero elemento html
let cardDisplay = document.getElementById('card-display');

// stampa card in pagina

cardDisplay.innerHTML = printingCard;
