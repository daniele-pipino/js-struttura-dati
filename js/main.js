/*Proviamo a ripetere quanto visto in classe, creando la struttura che riteniamo più adeguata per rappresentare una carta di Magic.
Una volta definita la struttura, stampiamo sulla pagina HTML tutte le informazioni relative alla carta stessa, senza particolare attenzione a dettagli grafici (va bene una lista coi tag UL e LI) */

// --------------------------------------------- Svolgimento -------------------------------------------//

// recupero elemento html
let cardDisplay = document.getElementById('card-display');

//* Inizializzazzione dell'oggetto
const card = {
    nome: 'GinoPaoli',
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

// inserimento oggetto in pagina

const printingCard = `<ul>
<li><strong>Nome:</strong> ${card.nome}</li>
<li><strong>Costo:</strong> ${card.cost.join(', ')}</li>
<li><strong>Tipo:</strong> ${card.tipo} -${card.specificita}</li>
<li><strong>Espansione:</strong> ${card.espansione.expNumber}
<li><strong>Rarità:</strong> ${card.espansione.rarity}</li>
<li><strong>--------Abilità------</strong></li>
</ul>`

cardDisplay.innerHTML = printingCard;