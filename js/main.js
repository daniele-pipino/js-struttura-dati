/*Proviamo a ripetere quanto visto in classe, creando la struttura che riteniamo più adeguata per rappresentare una carta di Magic.
Una volta definita la struttura, stampiamo sulla pagina HTML tutte le informazioni relative alla carta stessa, senza particolare attenzione a dettagli grafici (va bene una lista coi tag UL e LI) */

// --------------------------------------------- Svolgimento -------------------------------------------//

//* Inizializzazzione dell'oggetto
const starterDeck = [
    {
        id: 1,
        nome: 'GinoPaoli',
        cost: ['6', 'R', 'R'],
        tipo: 'Artifact Creatur',
        subtipo: 'Spirit',
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
        forza: 13,
        costituzione: 13,
        bordo: '#12345'
    },
    {
        id: 2,
        nome: 'Sigfried possente dragone',
        cost: ['6', 'B'],
        tipo: 'Artifact Creatur',
        subtipo: 'Spirit',
        espansione: {
            expNumber: 18,
            rarity: 'gold',
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
        forza: 18,
        costituzione: 25,
        bordo: '#12345'
    },
    {
        id: 3,
        nome: 'drago bianco occhi blu',
        cost: ['6', 'W', 'W'],
        tipo: 'Dragon',
        subtipo: 'Spirit',
        espansione: {
            expNumber: 15,
            rarity: 'gold',
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
        forza: 12,
        costituzione: 9,
        bordo: '#12345'
    },
]



// creazione di una funzione per creare la struttura della card
const generateCardstructure = (obj) => {

    // inserimento oggetto in pagina
    const cardStructure =
        `<div class= "d-flex">
        <ul>
        <strong>-----Top card------</strong>
        <li><strong>ID:</strong> ${obj.id}</li>
        <li><strong>Nome:</strong> ${obj.nome}</li>
        <li><strong>Costo:</strong> ${obj.cost.join(', ')}</li>
        <li><strong>Tipo:</strong> ${obj.tipo} - ${obj.specificita}</li>
        <strong>-----Espansione------</strong>
        <li><strong>Espansione:</strong> ${obj.espansione.expNumber}
        <li><strong>Rarità:</strong> ${obj.espansione.rarity}</li>
        <strong>--------Abilità------</strong>
        <li><strong>Costo:</strong> ${obj.abilita.costoAbilita}</li>
        <li><strong>Descrizione:</strong> ${obj.abilita.descrizione}</li>
        <strong>----Flavor-text----</strong> 
        <li><i>${obj.flavorText.testo}</i> </li>
        <li><strong>Autore:</strong> ${obj.flavorText.autore}</li>
        <strong>------Bottom card-------</strong>
        <li><strong>Illustratore</strong> ${obj.illustratore}</li>
        <li><strong>N di collezione</strong> ${obj.numeroCollezione}</li>
        <li><strong>Forza / costituzione</strong> ${obj.forza}/${obj.costituzione}</li>
          </ul>
          </div>` ;

    //   risultato
    return cardStructure;
}


//* ------------------------------------ Parte 2 ----------------------------//
// Completiamo il nostro archivio delle carte aggiungendo i seguenti step:
// Creiamo un mazzo di carte
// Stampiamo tutte  le carte su schermo
// Aggiungiamo un piccolo form in HTML
// Ragioniamo pian pianino sulla logica dei filtri

// creazione di una funzione per la stampa in pagine di deck e carte
const generateDeck = (deck) => {

    // recupero elemento html
    let cardDisplay = document.getElementById('card-display');

    // variabile d'appoggio
    let printingCard = '';

    for (let i = 0; i < deck.length; i++) {
        const currentCard = deck[i];
        printingCard += generateCardstructure(currentCard);
    }

    // stampa card in pagina
    cardDisplay.innerHTML = printingCard;
}

generateDeck(starterDeck);

// ---------------------------------------

// recupero id form html

let select = document.getElementById('Attributes');
let testo = document.getElementById('testo');
const filterButton = document.getElementById('filter-button');

// ------------------------- Inizializzazzione filtro ---------------------------//

// aggiunta evento al click del bottone

filterButton.addEventListener('click', () => {

    // recupero value form
    const selectValue = select.value;
    console.log(selectValue);
    const textValue = testo.value;
    console.log(textValue);
    // se non si effettuano criteri di ricerca

    if (selectValue === 'all') {
        generateDeck(starterDeck);
        return;
    }

    // array con le carte che hanno le specifiche selezionate dall'utente
    const filteredDeck = [];

    // ciclo per il controllo delle card
    for (let i = 0; i < starterDeck.length; i++) {
        const currentCard = starterDeck[i];


        // gestione filtro con diverse casistiche 
        switch (selectValue) {

            // gestione numeri semplici
            case 'id':
            case 'forza':
            case 'costituzione':
                if (currentCard[selectValue] == textValue) {
                    filteredDeck.push(currentCard);
                }
                break;

            // gestione oggetti complessi

            // sezione espansione
            case 'espansione-expNumber':
                if (currentCard.espansione.expNumber == textValue) {
                    filteredDeck.push(currentCard);
                }
                break;
            case 'espansione-rarity':
                if (currentCard.espansione.rarity.includes(textValue)) {
                    filteredDeck.push(currentCard);
                }
                break;
            // sezione abilità
            case 'abilita-cost':
                if (currentCard.abilita.costoAbilita.includes(textValue)) {
                    filteredDeck.push(currentCard);
                }
                break;
            case 'abilita-description':
                if (currentCard.abilita.descrizione == textValue) {
                    filteredDeck.push(currentCard);
                }
                break;
            // sezione flavor text
            case 'flavor-text':
                if (currentCard.flavorText.testo == textValue) {
                    filteredDeck.push(currentCard);
                }
                break;
            case 'flavor-author':
                if (currentCard.flavorText.autore == textValue) {
                    filteredDeck.push(currentCard);
                }

            // gestione stringhe ed array di stringhe
            default:
                if (currentCard[selectValue].includes(textValue)) {
                    filteredDeck.push(currentCard);
                }
        }
    }

    generateDeck(filteredDeck);
});




