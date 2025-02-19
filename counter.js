document.addEventListener('DOMContentLoaded', function() {
    const countElement = document.getElementById('count');

    // Carica il conteggio salvato all'avvio della pagina
    let count = localStorage.getItem('count');
    if (count === null) {
        count = 0; // Inizializza se non c'è un valore salvato
    } else {
        count = parseInt(count);
    }

    // Incrementa il conteggio ad ogni visualizzazione
    count++;

    // Aggiorna il display con il nuovo conteggio
    countElement.innerText = count;

    // Salva il nuovo conteggio in localStorage
    localStorage.setItem('count', count);
});

// in head <link rel="stylesheet" href="counter.css">
// e footer <script src="counter.js"></script> <!-- Includi il JavaScript del componente -->


// HTML <!-- INIZIO: Inserisci qui il componente contatore -->
 //   <div id="counter-container">
 //       <div id="counter">Visite: <span id="count">0</span></div>
 //   </div>
