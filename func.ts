// this和箭头函数

let desk = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
        return () => {
            let pickedCard: number = Math.floor(Math.random() * 52);
            let pickedSuit: number = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13}
        }
    }
};