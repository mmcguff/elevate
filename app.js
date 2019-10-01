//Entry point to my application
const Building = require('./building');

//create a new building instance
const buildingName = 'Kuali Building';
const buildingFloors = 10;
const bldg = new Building(buildingName, buildingFloors);

//create a new instance for each elevator
 const east = bldg.setElevator('East', buildingFloors, 1);
 const west = bldg.setElevator('West', buildingFloors, 3);


function start(){
    console.log('Welcome to Elevate! An app that simulates movements of an elevator.');
    console.log('==================================================================');
    console.log(bldg.getBuildingInfo());
}


start();