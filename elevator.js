const sleep = require('sleep'); //easy library to timeout for simulating elevator movements.
const Building = require('./building');


class Elevator {
    
    constructor(name, floors,currentFloor){
        this.name = name;
        this.floors = floors;
        this.maxTrips = 100;  //configurable but hardcoded per the spec

        this.isRunning = true;  
        this.currentFloor = currentFloor; //User can decide where elevator starts.
        this.direction = 'none' //up down or none
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
        console.log(`Elevator ${this.name} button pressed to go to floor ${floor}.`);
        this.move();
        return; 
    }

    move(){
        if(this.travelQueue[0] > this.currentFloor){
            this.direction = 'up';
            while(this.travelQueue[0] != this.currentFloor){
                this.currentFloor++;
                this.floorsTravledCount++;
                console.log(`Elevator ${this.name} has moved up to ${this.currentFloor} going to ${this.travelQueue[0]}.`);
               // sleep.sleep(1);
            }
        }
        if(this.travelQueue[0] < this.currentFloor){
            this.direction = 'down';
            while(this.travelQueue[0] != this.currentFloor){
                this.currentFloor--;
                this.floorsTravledCount++;
                console.log(`Elevator ${this.name} has moved down to ${this.currentFloor} going to ${this.travelQueue[0]}.`);
                //sleep.sleep(1);
            }
        }
        this.tripCount++;
        this.status();
        this.travelQueue.shift();
        this.direction = 'none';
        this.openDoor();
        if(this.trips > this.maxTrips){
            this.stop();
        } 
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
            console.log(`Elevator ${this.name} has opened on floor ${this.currentFloor}`);
            //sleep.sleep(5);
            this.closeDoor();        
        }
        else return console.log(`Elevator ${this.name} is not currently running`);
    }
    
    closeDoor(){
        if(this.isRunning != false){
            this.isDoorClosed = false;
            return console.log(`Elevator ${this.name} has closed on floor ${this.currentFloor}`);
        }
        else return console.log(`Elevator ${this.name} is not currently running`);
    }

    pressButton(button){
        switch (button) {
            case "stop":
                this.stop();
                break;
            case "openDoor":
                this.openDoor();
                break;
            case "closeDoor":
                this.closeDoor();
                break;
            default:
                this.addFloorToTravelQueue = button;
        }
    }

    status(){
        return console.log({
            name: this.name,
            runningStatus: this.isRunning ? 'running' : 'stopped',
            currentFloor: this.currentFloor,
            doorStatus: this.isDoorClosed ? 'closed' : 'open',
            tripCount: this.tripCount,
            floorsTraveledCount: this.floorsTravledCount,
            travelQueue: this.travelQueue,
            direction: this.direction
        });
    }

}

module.exports = Elevator;
