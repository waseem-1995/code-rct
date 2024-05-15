class Mobile {
    #unlockpin;
    constructor(model,number,unlockPin){
        this.model=model;
        this.number=number;
        this.#unlockpin=unlockPin;
    }

    get getUnlockPin(){
        return  this.#unlockpin;
    }

    set unlockPin(value){
        this.#unlockpin=value;
    }
}
  
export default Mobile
