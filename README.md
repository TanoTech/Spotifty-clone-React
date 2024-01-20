## AlbumDetail
Pagina dettagli album.
 Funzionalità principali includono:

1 - Recupero dei dettagli dell'album.
2 - Visualizzazione dell'immagine dell'album, del titolo e dell'artista.
3 - Elenca le canzoni dell'album con anteprime e possibilità di aggiungerle ai preferiti.

## AlbumSection
Sezione di canzoni divise per genere nella pagina principale. 
Funzionalità principali includono:

1 - Mostra una lista di canzoni con immagini, titoli e nomi degli artisti.
2 - Le canzoni vengono riprodotte appena cliccate.

## Favourites

Pagina dei preferiti. 
Funzionalità principali includono:

1 - Visualizza la lista delle canzoni preferite.
2 - Permette di rimuovere le canzoni dai preferiti cliccando su un pulsante "X".

## GenresPage
Mstra sezioni di album per diversi generi musicali. 
Funzionalità principali includono:

1 - Recupero di album per vari generi musicali.
2 - Utilizza il componente AlbumSection per visualizzare le sezioni di album per ciascun genere.

## Home
Pagina principale dell'app. 
Funzionalità principali includono:

1 - Utilizza il componente SearchResults per visualizzare i risultati della ricerca.
2 - Utilizza il componente GenresPage per visualizzare le sezioni di album per generi musicali.

## Player
Player audio nel footer. 
Funzionalità principali includono:

1 - Riproduzione e pausa delle anteprime delle canzoni.
2 - Utilizza l'URL della canzone passato come prop per la riproduzione audio.

## Search
Barra di ricerca. 
Funzionalità principali includono:

1 - Consente agli utenti di inserire un termine di ricerca.
2 - Esegue una ricerca quando viene cliccato il pulsante "Cerca".

## SearchResults
Risultati della ricerca. 
Funzionalità principali includono:

1 - Visualizza i risultati della ricerca come card con immagini degli album, titoli e nomi degli artisti.
2 - Ogni card è un collegamento che reindirizza alla pagina dei dettagli dell'album quando viene cliccato.

## Sidebar
Barra laterale nella parte sinistra dell'app.
Funzionalità principali includono:

1 - Mostra collegamenti per le sezioni principali dell'app come "Home" e "Your Library".
2 - Contiene anche la barra di ricerca utilizzando il componente Search.

## App
Gestisce il routing e la gestione dello stato globale. 
Funzionalità principali includono:

1 - Utilizza il componente Sidebar per la navigazione.
2 - Utilizza il componente Home per la visualizzazione della pagina principale.
3 - Gestisce lo stato delle canzoni preferite e il player audio.

## REDUCERS

Ho definito tre azioni - ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, e SET_CURRENT_SONG. 

Il favouritesReducer gestisce l'aggiunta e la rimozione di canzoni dai preferiti.

Il songReducer gestisce lo stato della canzone corrente.

## NPM INSTALLATI

npm install react-router-dom 
npm install react-bootstrap bootstrap
npm install sass 
npm install react-bootstrap-icons 
npm install @reduxjs/toolkit react-redux
npm install @reduxjs/toolkit react-redux
npm install music-metadata-browser
