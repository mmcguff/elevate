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
        
    }
}

module.exports = Building;