class Worker {
    constructor(name,surName,rate,days) {
        this.name = name;
        this.surName = surName;
        this.rate = rate;
        this.days =days;
    }
    getSalary () {
        return this.rate * this.days;
    }
}
const worker = new Worker('Akbar','Sydykov','777','7')
console.log(worker.name);
console.log(worker.surName);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());

// 2-----------------------------------------------------//

class Worker2 {
    #name;
    #surName;
    #rate;
    #days;
    constructor(name, surName, rate, days) {
        this.#name = name;
        this.#surName = surName;
        this.#rate = rate;
        this.#days = days;
    }
    getName() {
        return this.#name;
    }
    getSurName() {
        return this.#surName;
    }
    getRate() {
        return this.#rate;
    }
    getDays() {
        return this.#days;
    }
    getSalary(rate, days) {
        let salary = this.#rate * this.#days;
        return salary;
    }
}
worker2 = new Worker2('Akbar','Sydykov','777','7');
console.log(worker2.getName());
console.log(worker2.getSurName());
console.log(worker2.getRate());
console.log(worker2.getDays());
console.log(worker2.getSalary());