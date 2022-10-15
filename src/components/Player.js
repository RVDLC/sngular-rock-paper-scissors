class Player {
    constructor(name) {
        this.name = name;
        this.winCount = 0;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getWinCount() {
        return this.winCount;
    }

    setWinCount(winCount) {
        this.winCount = winCount;
    }

    gameWin() {
        this.winCount++;
    }
}
export default Player;