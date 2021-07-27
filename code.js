/**
 * Oregon Trail-----------------------------------------------------------
 * Test Code is in tests.js
 */

// Create your Objects here.

function Traveler(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
}
Traveler.prototype.hunt = function(){
    return this.food += 2
}
Traveler.prototype.eat = function(){
    if(this.food <= 0){
        this.isHealthy = false
        return this.food
    }
    return this.food -= 1 
}

function Wagon(capacity){
    this.capacity = capacity;
    this.passengers = [];
}
Wagon.prototype.join = function(Traveler){
    if(this.getAvailableSeatCount()>0) {
        this.passengers.push(Traveler)
        console.log(`${Traveler.name} is climbing on the wagon!`)
    } else {
        console.log("The wagon will be overencumbered!")
    }
}
Wagon.prototype.shouldQuarantine = function (){
    for(let i = 0; i < this.passengers.length; i++){
        let Traveler = this.passengers[1]
        if(Traveler.isHealthy === false){
            return true
        }
    }
    return false
}
Wagon.prototype.totalFood = function (){
    let foodTotal = 0
    for (let i = 0; i < this.passengers.length; i++){
        let traveler = this.passengers[i].food
        return foodTotal += traveler
    }
}