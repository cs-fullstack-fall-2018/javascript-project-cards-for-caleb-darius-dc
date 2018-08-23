const cards = [
    { cardNumber: 6, type: 'h' },
    { cardNumber: 9, type: 'd' },
    { cardNumber: 2, type: 'h' },
    { cardNumber: 9, type: 'h' },
    { cardNumber: 14, type: 'h' },
    { cardNumber: 6, type: 'c' },
    { cardNumber: 2, type: 'd' },
    { cardNumber: 9, type: 's' },
    { cardNumber: 12, type: 'h' },
    { cardNumber: 10, type: 'c' },
    { cardNumber: 14, type: 'c' },
    { cardNumber: 7, type: 'd' },
    { cardNumber: 3, type: 's' },
    { cardNumber: 8, type: 'd' },
    { cardNumber: 12, type: 's' },
    { cardNumber: 7, type: 's' },
    { cardNumber: 7, type: 'c' },
    { cardNumber: 14, type: 'd' },
    { cardNumber: 11, type: 'c' },
    { cardNumber: 10, type: 's' },
    { cardNumber: 11, type: 'd' },
    { cardNumber: 4, type: 'd' },
    { cardNumber: 2, type: 's' },
    { cardNumber: 7, type: 'h' },
    { cardNumber: 14, type: 's' },
    { cardNumber: 10, type: 'h' },
    { cardNumber: 5, type: 'c' },
    { cardNumber: 12, type: 'c' },
    { cardNumber: 6, type: 's' },
    { cardNumber: 5, type: 's' },
    { cardNumber: 12, type: 'd' },
    { cardNumber: 4, type: 'h' },
    { cardNumber: 11, type: 'h' },
    { cardNumber: 13, type: 'c' },
    { cardNumber: 5, type: 'h' },
    { cardNumber: 6, type: 'd' },
    { cardNumber: 13, type: 's' },
    { cardNumber: 13, type: 'd' },
    { cardNumber: 8, type: 'c' },
    { cardNumber: 4, type: 's' },
    { cardNumber: 13, type: 'h' },
    { cardNumber: 2, type: 'c' },
    { cardNumber: 8, type: 's' },
    { cardNumber: 10, type: 'd' },
    { cardNumber: 3, type: 'c' },
    { cardNumber: 3, type: 'h' },
    { cardNumber: 11, type: 's' },
    { cardNumber: 8, type: 'h' },
    { cardNumber: 9, type: 'c' },
    { cardNumber: 5, type: 'd' },
    { cardNumber: 3, type: 'd' },
    { cardNumber: 4, type: 'c' } ];

var player1Deck = [];
var player2Deck = [];

player1Deck = cards.slice();
player2Deck = player1Deck.splice(1, 26);

console.log(player1Deck);
console.log("Player Two Deck Below");
console.log(player2Deck);
console.log(" Randomized cards below");
function shuffleCards(array) {
    var currentIndex = array.length, tempValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        tempValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = tempValue;

    }
    return array;

}

randomCards = shuffleCards(cards);
console.log(randomCards);
//console.log( " Player 1 Random Deck");
//player1Deck= cards.slice(randomCards);
//console.log(player1Deck)
//console.log("Player 2 Random Deck");
//player2Deck= player1Deck.splice(1,26);

var randomCards1 = shuffleCards(player1Deck);
var randomCards2 = shuffleCards(player2Deck);

console.log(" This  player one random deck" , randomCards1);
console.log("This player two random deck", randomCards2);
