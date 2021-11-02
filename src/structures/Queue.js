const { Track } = require('yasha');

module.exports = class Queue extends Array {
    constructor() {
        super();
        this.current = null;
        this.previous = [];
    }

    add(track, index) {
        if (!this.current) {
            this.current = track;
            console.log(this.current);
        }
        else if (typeof index === 'undefined' && typeof index !== 'number') {
            this.push(track);
        }
        else {
            this.splice(index, 0, track);
        }
    }

    remove(index) {
        this.splice(index, 1);
    }

    clear() {
        this.splice(0);
    }

    shuffle() {
        for (let i = this.length - 1; i > 0; i--) {
            const n = Math.floor(Math.random() * (i + 1));
            [this[i], this[n]] = [this[n], this[i]];
        }
    }

    totalSize() {
        return this.length + (this.current ? 1 : 0);
    }
};