//Entry point to my application
const Building = require('./building');
const Elevator = require('./elevator');


//create a new building instance (nameOfBuilding, numberOfFloorsInBuilding)
const bldg = new Building('Kuali Building', 10);

//create a new instance for each elevator(nameOfElevator, currentFloorToStart)
 const east = new Elevator('East', 10, 1);
 const west = new Elevator('East', 10, 1);


function start(){
    console.log('Welcome to Elevate! An app that simulates movements of an elevator.');
    console.log('==================================================================');
    console.log(bldg.getBuildingInfo());
    runSimulation();
}

function runSimulation(){
    //bldg.pressButtonForElevator(6);
    east.pressButton(6);
}


start();