export default class sketchState {

    state: [any?] = [];
    maxStates = 10;
    stateIndex = -1;
    stateCount = 0;

    constructor() {}
    addState(image: any) {
        if(this.stateIndex == this.maxStates-1) {
            this.shiftState();
            this.state[this.stateIndex] = image;
            this.stateCount = this.maxStates-1;
        } else {
            this.stateIndex++;
            this.state[this.stateIndex] = image;
            this.stateCount = this.stateIndex;
        }
    }

    preState() {
        if (this.stateIndex == 0) {
            return null;
        }
        let img = this.state[this.stateIndex-1];
        this.stateIndex --;
        return img;
    }

    nextState() {
        if (this.stateIndex < this.stateCount){
            this.stateIndex = this.stateIndex + 1;
            return this.state[this.stateIndex];
        }
        return null;
    }

    shiftState() {
        for(let i=0; i<this.maxStates-1; i++) {
            this.state[i] = this.state[i+1]
        }
    }



}