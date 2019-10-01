//Entry point to my application
const Building = require('./building');
const Elevator = require('./elevator');


//create a new building instance 
const buildingName = 'Kuali Building';
const buildingFloors = 10;
const bldg = new Building(buildingName, buildingFloors);

//create new instances for each elevator(nameOfElevator, currentFloorToStart)
const east = new Elevator('East', buildingFloors, 1);
const west = new Elevator('West', buildingFloors, 1);

function start(){
    console.log('Welcome to Elevate! An app that simulates movements of an elevator.');
    console.log('==================================================================');
    console.log(bldg.getBuildingInfo());
    runEast();
    runWest();

}

function runEast(){
    east.pressButton(5); //Tracking going up to floor
    east.pressButton(buildingFloors + 1); //Error should thorw for invalid floor above
    east.pressButton(0); //Error should thorw for invalid floor below
    east.pressButton(3); //Tracking going down to floor
    east.status();
}

function runWest(){
    west.pressButton(3);
    west.pressButton(5)
    west.pressButton(-1);
    west.status();
}

start();