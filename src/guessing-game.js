class GuessingGame {
    constructor() {
        this.min;
        this.max;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        const number = Math.round((this.max + this.min)/2);
        return number;
         
    }

    lower() {
        this.max = Math.round((this.max + this.min)/2);
    }

    greater() {
        this.min = Math.round((this.max + this.min)/2);
    }
}

module.exports = GuessingGame;
