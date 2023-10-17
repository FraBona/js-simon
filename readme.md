- Visualizzare 5 numeri casuali
  - creare la variabile array per i numeri
  - fare un ciclo for che cicla 5 volte 
    - dentro creiamo una variabile n in cui andremo a mettere la funzione math random
    - pushiamo la variabile n dentro l'array numeri
  - creiamo un button nell html e lo prendiamo nel javascript
  - facciamo un addEventListener e quando clicchiamo facciamo un alert dell'array number

- creare la funzione searchNumber per confrontare se i numeri inseriti siano uguali all'array di numeri
  - creiamo un altro array di numeri con lo stesso procedimento di prima
  - li confrontiamo con due cicli for

- creiamo un counter = 30
- Creiamo una variabile idInterval dove dentro ci mettiamo setInterval dove dentro mettiamo la funzione onInterval che creiamo successivamente
- creiamo la funzione onInterval per il decremento del counter
  - SE il counter é uguale a 0 
    - facciamo il clearInterval della variabile idInterval
    - poi richiamo la funzione searchNumber
  - ALTRIMENTI stampiamo sempre il counter che decrementa finche non arrivi a 0