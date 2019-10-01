//Entry point to my application
const Building = require('./building');

//create a new building instance
const bldg = new Building('Kuali Building', 10);

//create a new instance for each elevator 


function start(){
    console.log('Welcome to Elevate! An app that simulates movements of an elevator.');
    console.log('==================================================================');
    console.log(bldg.getBuildingInfo());
}


start();