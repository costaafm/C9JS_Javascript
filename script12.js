//defining a object structure
var batwing= {
	//propertie
	status:"Ready",
	//Method
	rescueBatman: function(){
		document.write("Locating his transponder...initiating launch...");
	}
}
/*
if (batwing.status==="Ready") {
	batwing.rescueBatman();
}
*/


var utilities={
	
	printAllMembers: function(targetObject) {
		for (i  in targetObject){
			document.write("<br/>" + targetObject[i]);
		}
	}
}

//utilities.printAllMembers(batwing);

/*
// Empty object literal
var i_am_empty ={ };
utilities.printAllMembers(i_am_empty);
*/

var planet ={
	id:34,
	name: "IO",
	faction:{
		factiondId:2,
		name: "Nex",
		notification: function(){
			document.write("Nex alliance...unite!");
		}
	},
	cities: [ 
	{ locationId: 15,name: "gladius"},
		{locationId:16,name:"Chalbys"},
		{locationId:17,name:"Ensis"},
		]	
};

//planet.faction.notification();

//document.write(planet.cities[1].name);
/*
document.write("<br/>"+planet.name);// global variable
planet.name="Vultus";
document.write("<br/>"+planet.name); // local variable
*/

/*
var z=planet;
document.write(z.name);
*/

/*
if (typeof planet.defense==="undefined") {
	planet.defense="Ion Cannon";
}
document.write(planet.defense);
*/

/*
for (member in planet)
{
	document.write("<br/>"+member+"==>"+planet[member]);
}
*/


function car (make,model,year) {
	this.make=make;
	this.model=model;
	this.year=year;
}

var myCar = new car("Eagle","Talon TSi","1994");
var myOtherCar = new car("Dodge","Dart","1976");

alert(myCar.model);
alert(myOtherCar.model);