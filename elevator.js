//elevator class

class Elevator {
    
    constructor(name, currentFloor){
        this.name = name;
        this.maxTrips = 100;  //configurable but hardcoded per the spec

        this.isRunning = true;  
        this.currentFloor = currentFloor; //User can decide where elevator starts.
        this.direction = 'up' //up down or none
        this.isDoorClosed = true // false if door is open. only two states
        this.travelQueue = [];  //array contains values of floors traveling to.
        this.tripCount = 0; //number of complete trips
        this.floorsTravledCount = 0; //number of floors travled    
    }

    
}
