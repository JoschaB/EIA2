var MemoryEvents;
(function (MemoryEvents) {
    document.addEventListener("DOMContentLoaded", main);
    // Variablen deklarieren
    let cardText = ["Hund", "Panda", "Seepferdchen", "Wolf", "Reh", "Tiger", "Koala", "Affe", "Jaguar", "Luchs"];
    let cardsArray = [];
    let numCardPairs;
    let numPlayers;
    let playerInfo;
    let gameBoard;
    let numCardsOpen = 0;
    // Hauptfunktion
    function main() {
        // Anzahl Kartenpaare
        numCardPairs = parseInt(prompt("Wie viele Kartenpaare soll es geben?", "Bitte eine Zahl zwischen 5 und 10 eingeben"), 10);
        if (numCardPairs < 5 || numCardPairs > 10) {
            numCardPairs = 8;
        }
        // Anzahl Spieler
        numPlayers = parseInt(prompt("Wie viele Spieler gibt es?", "Bitte eine Zahl zwischen 1 und 4 eingeben"), 10);
        if (numPlayers < 1 || numPlayers > 4) {
            numPlayers = 2;
        }
        // DOM abh�ngige Variablen initialisieren
        playerInfo = document.getElementById("game-info");
        gameBoard = document.getElementById("card-container");
        // Karten erzeugen
        for (let i = 0; i < numCardPairs; i++) {
            createCards(cardText[i]);
        }
        // Karten mischen
        shuffleArray(cardsArray);
        // Karten anzeigen
        for (let i = 0; i < cardsArray.length; i++) {
            gameBoard.appendChild(cardsArray[i]);
        }
        // Spieler Anzeige generieren
        for (let i = 1; i < numPlayers; i++) {
            createPlayer("" + (i + 1));
        }
        // Funkiton - Karten erzeugen
        function createCards(_cardContent) {
            for (let i = 0; i < 2; i++) {
                let card = document.createElement("div");
                card.innerHTML = "<span>" + _cardContent + "</span>";
                card.setAttribute("class", "card hidden");
                cardsArray.push(card);
            }
            return cardsArray;
        }
        // Funktion - Spieler erzeugen
        function createPlayer(_name) {
            let player = document.createElement("div");
            player.innerHTML = `
            <span class="player-name">Spieler: ${_name}</span>
            <span class="player-score">Punkte: 0</span>`;
            playerInfo.appendChild(player);
        }
        // Shuffle Array: Fisher-Yates Algorhitmus
        function shuffleArray(_array) {
            for (let i = _array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [_array[i], _array[j]] = [_array[j], _array[i]];
            }
            return _array;
        }
        // Karte aufdecken
        function showCards(_event) {
            numCardsOpen++;
            if (numCardsOpen < 2) {
                let target = _event.target;
                if (target.classList.contains("hidden")) {
                    target.classList.remove("hidden");
                    target.classList.add("visible");
                }
            }
            if (numCardsOpen == 2) {
                setTimeout(compareCards, 2000);
            }
        }
        // Cards Array filtern und neues Array zur�ckgeben
        function filterCardsBy(_filter) {
            let array = [];
            let cardsArray;
            for (let i = 0; i < cardsArray.lenght; i++) {
                if (cardsArray[i].classList.contains(_filter)) {
                    array.push(cardsArray[i]);
                }
            }
            return array;
        }
        // Funktion - Karten vergleichen
        function compareCards() {
            let openCards = filterCardsBy("visible");
            if (openCards[0].children[0].innerHTML == openCards[1].children[0].innerHTML) {
                for (let i = 0; i < openCards.length; i++) {
                    openCards[i].classList.remove("visible");
                    openCards[i].classList.add("taken");
                }
            }
            else {
                for (let i = 0; i < openCards.length; i++) {
                    openCards[i].classList.remove("visible");
                    openCards[i].classList.add("hidden");
                }
            }
            checkCardArray();
            openCards = [];
            numCardsOpen = 0;
        }
        function checkCardArray() {
            let takenCards = filterCardsBy("hidden");
            if (takenCards.length == 0) {
                alert("Gewonnen!");
            }
            takenCards = [];
        }
        // Spielmechanik
        gameBoard.addEventListener("click", showCards);
    }
})(MemoryEvents || (MemoryEvents = {}));
//# sourceMappingURL=Aufgabe_03.js.map