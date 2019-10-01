# Elevator Simulator

## Programming Challenge
*Below is the stated challenge*

You’re designing the software that simulates elevators in a building.
Design a set of objects that will manage elevator movement and interaction between the
elevators. The elevator simulation should support these features:
1. Initialize the elevator simulation with the desired number of elevators, and the desired
number of floors. Assume ground/min of 1.
2. Each elevator will report as is moves from floor to floor.
3. Each elevator will report when it opens or closes its doors.
4. An elevator cannot proceed above the top floor.
5. An elevator cannot proceed below the ground floor (assume 1 as the min)
6. An elevator request can be made at any floor, to go to any other floor.
7. When an elevator request is made, the unoccupied elevator closest to it will answer the
call, unless an occupied elevator is moving and will pass that floor on its way. The
exception is that if an unoccupied elevator is already stopped at that floor, then it will
always have the highest priority answering that call.
8. The elevator should keep track of how many trips it has made, and how many floors it
has passed. The elevator should go into maintenance mode after 100 trips, and stop
functioning until serviced, therefore not be available for elevator calls.
Some things to think about in this design:
1. Should you take an approach using an elevator controller, or have the elevators
communicate amongst themselves to find an optimal solution?
2. How will your solution scale up and down, from 1 elevator, to a reasonably large number,
like 10?


## My design

My initial reaction to the requirements is leading me toward taking an object oriented approach toward solving this problem.  I will design a solution with two classes the I will illstrate in pesudo code below:

1. building.js

A Building contains floors and elevators that according to requirement 1 need to be initalized at the start of the elevator simulation. Make sense as these are difficult to change.  As I think about the relationship between building an elevator I am realizing that most floors will have a control which allows people to request an elevator going up or going down.  I am anticipating that one of the more involved logic problems with this simulation will be to figure out how to determine which elevator should be sent to answer the button pressed on a particular floor.    


2.  elevator.js

The elevator has several pieces of state that need to tracked.  I am thinking right now this will include:

* name
* current Floor
* trip count
* floor traveled count
* Running state (Since the elevator has to not be available for maintenance after 100 trips)
* travel Queue (an array containing all the floors requested by a user once in the elevator)
* direction of travel (up,down, none) Thinking this piece of information needful in determining what elevator should respond to to floor request. 

3. app.js

The entry point of my application app.js will contain code to initilize one building and all the elevators will be needed to run the simmulation.  At first will shooting to create strict node console application.  The simulation will basically call the different methods in building and elevator to simulate the movements.  Most importantly I will shoot to demostrate the the logic of selecting the best elevator(the elevator the is best available to respond to floor request).  Once this is achieved I will shoot for making this more visual in the console or even possibly adding routes into the objects so an API can be created that frontend could connect to demostrate the application. 

I see the simulation having two possible modes.  An interactive mode that allows one to select the action they want to take on each floor and a automatic mode that will just run a plan sequence of events simulating the action of an elevator.  The interactive will be more difficult so my first goal will be the automtic followed by interactive.  

Here we go!  My first commmit!  