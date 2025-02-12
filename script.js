function calculatePopulation(){
	
	let inPop = parseFloat(prompt("Enter the initial population: "));
	let growRate = parseFloat(prompt("Enter the growth rate (as a decimal: "));
	let time = parseFloat(prompt("Enter the time (in Hours): "));
	
	let finPop = Math.round(inPop * Math.pow(Math.E,growRate * time));
	
	let region = prompt("Enter the region/location of the moster: ");
	let monsterName = prompt("Enter the name of the monster: ");
	
	let fullName = (region + " " + monsterName).toUpperCase();
	
	document.getElementById("result").innerHTML = 'After ' + time + ' hours, the population of ' + monsterName + ' has risen to ' + finPop;
}