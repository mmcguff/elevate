//elevator class

class Elevator {
    
    constructor(name, floors, currentFloor, ){
        this.name = name;
        this.floors = floors;
        this.maxTrips = 100;  //configurable but hardcoded per the spec

        this.isRunning = true;  
        this.currentFloor = currentFloor; //User can decide where elevator starts.
        this.direction = 'up' //up down or none
        this.isDoorClosed = true // false if door is open. only two states
        this.travelQueue = [];  //array contains values of floors traveling to.
        this.tripCount = 0; //number of complete trips
        this.floorsTravledCount = 0; //number of floors travled    
    }

    set addFloorToTravelQueue(floor){
        
        if(this.tipCount > this.maxTrips){
            this.stop();
            return;
        }
        
        if(floor > this.floors || floor < 1){
            return console.log(`Error: Elevator ${this.name} has recieved a request for a ${floor} that does not exist.`);
        }

        this.travelQueue.push(floor);
        return console.log(`Elevator ${this.name} button pressed to go to floor ${floor}.`);
    }

    restart(){
        //I am reseting these value so the maintenace counter can reset if desired.  
        //Could be changed if needed.
        this.tripCount = 0;
        this.floorsTravledCount = 0;
        this.isRunning = true;
        return console.log(`Elevator ${this.name} has been restarted...`);
    }

    stop(){
        this.isRunning = false;
        return console.log(`Elevator ${this.name} has stopped...`);
    }

    openDoor(){
        if(this.isRunning != false){
            this.isDoorClosed = false;
            return console.log(`Elevator ${this.name} has opened on floor ${this.currentFloor}`);
        }
        else return console.log(`Elevator ${this.name} is not currently running`);
    }
    
    closeDoor(){
        if(this.isRunning != false){
            this.isDoorClosed = false;
            return console.log(`Elevator ${this.name} has opened on floor ${this.currentFloor}`);
        }
        else return console.log(`Elevator ${this.name} is not currently running`);
    }

}
