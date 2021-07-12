class Observable {
    constructor() {
        this.observers = [];
    }
    subscribe(notifyingClass) {
        this.observers.push(notifyingClass);
    }
    unsubscribe(notifyingClass) {
        this.observers = this.observers.filter(observer => observer instanceof notifyingClass !== true);
    }
    notifyObservable(event) {
        this.observers.forEach(observer => {
            observer.notify(event);
        });
    }
}
class NumberExample extends Observable {
    constructor() {
        super();
        this.value = '';
    }
    saludar(name) {
        this.value = name;
        this.notifyObservable(this);
    }
}

class NumberExampleSpanish {
    notify(model) {
        console.log(`Hola : ${model.value}`);
    }
}

class NumberExampleEnglish {
    notify(model) {
        console.log(`Hello : ${model.value}`);
    }
}

let numberExample = new NumberExample();

numberExample.subscribe(new NumberExampleSpanish());
numberExample.subscribe(new NumberExampleEnglish());

numberExample.saludar('Mr Jhonson');
numberExample.saludar('Mr Xavier');