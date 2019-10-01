//building class
const Elevator = require('./elevator');

class Building {

    constructor(name, floors){
        this.name = name; //name of the building
        this.floors = floors; //number of floors in the building
        this.elevators = []; //array of elevators (will need to import this)
    }

    //Getter retruning inof about an initilized building
    getBuildingInfo(){
        return {
            buildingName: this.name,
            floors: this.floors,
            elevators: this.elevators
        }; 
    }

    //Adding an elevator to the building by name
    setElevator(elevatorName, currentFloor){
        this.elevators.push(new Elevator(elevatorName, this.floors, currentFloor));
    }

    //The request of elevator including the floor the request was made and up or down
    pressButtonForElevator(floor, direction){
        let elevator = this.elevators;

        //filter out any elevators where isRunning is false
        elevator = elevator.filter((elevator) => {
            elevator.isRunning != true;
        });

        //filter any elevators where trip queue is moving away from floor
        //select the closest elevator
        //If more than one is left then closest elevator with smallest countTrips
        //If tied then randomly select

    }
}

module.exports = Building;