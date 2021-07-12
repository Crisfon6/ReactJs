class Observable { //parent class
    constructor() {
        this.observers = []; //list of objects observed
    }
    subscribe(notifyingClass) {
        this.observers.push(notifyingClass); //add objects for do observeds
    }
    unsubscribe(notifyingClass) {
        this.observers = this.observers.filter(observer => observer instanceof notifyingClass !== true); //remove objects for do observeds
    }
    notifyObservable(event) {
        this.observers.forEach(observer => {
            observer.notify(event); //notify to the childres about anyone change
        });
    }
}
class NumberExample extends Observable {
    constructor() {
        super();
        this.value = 0;
    }
    increment() { // function anyone the process here is not important only important ***
        this.value++;
        this.notifyObservable(this); //*** only line important because report about change
    }
}

class NumberExampleSpanish {
    notify(model) { //manager of notifications
        console.log(`El nuevo numero es : ${model.value}`);
    }
}

class NumberExampleEnglish {
    notify(model) {
        console.log(`The new number is : ${model.value}`);
    }
}

let numberExample = new NumberExample(); //instance thaat allows objects to be observed

numberExample.subscribe(new NumberExampleSpanish()); // push objects for do observeds
numberExample.subscribe(new NumberExampleEnglish());

numberExample.increment(); //execute method and emit changes
numberExample.increment();