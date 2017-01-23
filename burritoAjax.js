/*Assignment Information
	David Allen
	Project 2, AJAX Online
	Mar 26, 2015
*/

/*Document Information
	burritoAjax.js is project 2's javascript file.  The goal of project 2 
	is to get information from a form and output it to the user.  They 
	are also allowed to delete items and multiple items and the cost gets 
	adjusted
*/

var burritos = [0];
var receipt = 0;

//cost value is created and outputted to be adjusted dynamically
//adding a burrito is now handled through the addButton's onclick event
function init()
{
	var addButton = document.getElementById("addBurrito");
	var output = document.getElementById("output");
	var totalCost = document.getElementById("totalCost");
	var p = document.createElement("p");
	var cost = document.createTextNode("$"+receipt.toFixed(2));
	p.appendChild(cost);
	totalCost.appendChild(p);
	addButton.onclick = createBurrito;
	console.log("init() run");
}

//burrito class
function Burrito()
{	
	var id;
	var type;
	var rice;
	var beans;
	var salsaPico;
	var salsaCorn;
	var salsaTomatGreen;
	var salsaTomatRed;
	var guacamole;
	var cost;
}

//function used to uniquely identify a burrito
function createId()
{
	var time = new Date().getTime();
	while (time == new Date().getTime());
	return new Date().getTime();
}

function createBurrito()
{
	var newBurrito = new Burrito();

	//Id from createId()
	newBurrito.id = createId();
	//Type of burrito from type dropdown
	newBurrito.type = document.getElementById("typeDropdown").value;
	//Rice from riceRadio
	if(document.getElementById("whiteRiceRadio").checked)
	{
		newBurrito.rice = document.getElementById("whiteRiceRadio").value;
	}
	else if(document.getElementById("brownRiceRadio").checked)
	{
		newBurrito.rice = document.getElementById("brownRiceRadio").value;
	}
	
	//Beans from beansRadio
	if(document.getElementById("pintoBeansRadio").checked)
	{
		newBurrito.beans = document.getElementById("pintoBeansRadio").value;
	}
	else if(document.getElementById("blackBeansRadio").checked)
	{
		newBurrito.beans = document.getElementById("blackBeansRadio").value;
	}
	//Pico salsa is assigned a value
	if(document.getElementById("picoCheckbox").checked)
	{
		newBurrito.salsaPico = document.getElementById("picoCheckbox").value;
	}
	else
	{
		newBurrito.salsaPico = null;
	}
	//Roasted corn is assigned a value
	if(document.getElementById("cornCheckbox").checked)
	{
		newBurrito.salsaCorn = document.getElementById("cornCheckbox").value;
	}
	else
	{
		newBurrito.salsaCorn = null;
	}
	//Green tomatillo is assigned a value
	if(document.getElementById("tomatGreenCheckbox").checked)
	{
		newBurrito.salsaTomatGreen = document.getElementById("tomatGreenCheckbox").value;
	}
	else
	{
		newBurrito.salsaTomatGreen = null;
	}
	//Red tomatillo is assigned a value
	if(document.getElementById("tomatRedCheckbox").checked)
	{
		newBurrito.salsaTomatRed = document.getElementById("tomatRedCheckbox").value;
	}
	else
	{
		newBurrito.salsaTomatRed = null;
	}
	
	newBurrito.guacamole = document.getElementById("guacamoleCheckbox");
	
	//cost is assigned a value
	if(newBurrito.type == "Chicken")
	{
		newBurrito.cost = 6.20;
	}
	else if(newBurrito.type == "Steak")
	{
		newBurrito.cost = 6.75;
	}
	else if(newBurrito.type == "Carnitas")
	{
		newBurrito.cost = 6.60;
	}
	else if(newBurrito.type == "Barbacoa")
	{
		newBurrito.cost = 6.60;
	}
	else if(newBurrito.type == "Vegetarian")
	{
		newBurrito.cost = 6.20;
	}
	if(newBurrito.guacamole.checked)
	{
		newBurrito.cost += 1.40;
	}
	
	console.log("burrito:" + newBurrito.id + " created");
	addBurrito(newBurrito);	
}

function addBurrito(burrito)
{
	burritos.push(burrito.id);
	receipt += burrito.cost;
	var totalCost = document.getElementById("totalCost");
	var p = document.createElement("p");
	var cost = document.createTextNode("$"+receipt.toFixed(2));
	p.appendChild(cost);
	totalCost.replaceChild(p, totalCost.firstChild);
	console.log(burrito);
	outputBurrito(burrito);
}

function deleteBurrito(burrito)
{
	var table = document.getElementById(burrito.id);
	var totalCost = document.getElementById("totalCost");
	var p = document.createElement("p");
	receipt -= burrito.cost;
	var cost = document.createTextNode("$"+receipt.toFixed(2));
	output.removeChild(document.getElementById("burrito"+burrito.id));
	p.appendChild(cost);
	totalCost.replaceChild(p, totalCost.firstChild);
	console.log("burrito:" + burrito.id + " deleted");
}

function outputBurrito(burrito)
{
	var burritoTable = document.createElement("table");
	var burritoRow = document.createElement("tr");
	var burritoData = document.createElement("td");
	var p = document.createElement("p")
	var data = document.createTextNode("");

	//creates the table
	
	burritoTable.id =  "burrito" + burrito.id;
	burritoTable.className = "addedBurrito";
	output.appendChild(burritoTable);
	
	//add the type row
	burritoRow = document.createElement("tr");
	burritoData = document.createElement("td");
	burritoTable.appendChild(burritoRow);
	burritoRow.appendChild(burritoData);
	
	p = document.createElement("p");
	data = document.createTextNode("Burrito choice: ");
	burritoData.appendChild(p);
	p.appendChild(data);
	
	burritoData = document.createElement("td");
	burritoRow.appendChild(burritoData);
	
	p = document.createElement("p");
	data = document.createTextNode(burrito.type);
	p.appendChild(data);
	burritoData.appendChild(p);
	
	//add the rice row
	burritoRow = document.createElement("tr");
	burritoData = document.createElement("td");
	burritoTable.appendChild(burritoRow);
	burritoRow.appendChild(burritoData);
	
	p = document.createElement("p");
	data = document.createTextNode("Rice selection: ");
	burritoData.appendChild(p)
	p.appendChild(data);
	
	p = document.createElement("p");
	data = document.createTextNode(burrito.rice);
	p.appendChild(data);
	burritoRow.appendChild(p);
	
	//add the beans row
	burritoRow = document.createElement("tr");
	burritoData = document.createElement("td");
	burritoTable.appendChild(burritoRow);
	burritoRow.appendChild(burritoData);
	
	p = document.createElement("p");
	data = document.createTextNode("Bean selection: ");
	p.appendChild(data);
	burritoData.appendChild(p)
	
	p = document.createElement("p");
	data = document.createTextNode(burrito.beans);
	p.appendChild(data);
	burritoRow.appendChild(p);
	
	burritoTable.appendChild(burritoRow);
	
	//add the salsa row
	burritoRow = document.createElement("tr");
	burritoData = document.createElement("td");
	burritoTable.appendChild(burritoRow);
	burritoRow.appendChild(burritoData);
	
	p = document.createElement("p");
	data = document.createTextNode("Salsa selection: ");
	burritoData.appendChild(p)
	p.appendChild(data);
	
	if(!burrito.salsaPico && !burrito.salsaCorn && !burrito.salsaTomatGreen && !burrito.salsaTomatRed)
	{
		burritoData = document.createElement("td");
		p = document.createElement("p");
		data = document.createTextNode("No salsa added");
		p.appendChild(data);
		burritoData.appendChild(p);
	}
	else
	{
		burritoData = document.createElement("td");
		if(burrito.salsaPico)
		{
			p = document.createElement("p");
			data = document.createTextNode(burrito.salsaPico);
			p.appendChild(data);
			burritoData.appendChild(p);
		}
		if(burrito.salsaCorn)
		{
			p = document.createElement("p");
			data = document.createTextNode(burrito.salsaCorn);
			p.appendChild(data);
			burritoData.appendChild(p);
		}
		if(burrito.salsaTomatGreen)
		{
			p = document.createElement("p");
			data = document.createTextNode(burrito.salsaTomatGreen);
			p.appendChild(data);
			burritoData.appendChild(p);
		}
		if(burrito.salsaTomatRed)
		{
			p = document.createElement("p");
			data = document.createTextNode(burrito.salsaTomatRed);
			p.appendChild(data);
			burritoData.appendChild(p);
		}
	}
	burritoRow.appendChild(burritoData);
	burritoTable.appendChild(burritoRow);
	
	//add the guacamole row
	
	burritoRow = document.createElement("tr");
	burritoData = document.createElement("td");
	burritoTable.appendChild(burritoRow);
	burritoRow.appendChild(burritoData);
	
	p = document.createElement("p");
	data = document.createTextNode("Guacamole: ");
	burritoData.appendChild(p)
	p.appendChild(data);
	
	burritoData = document.createElement("td");
	burritoRow.appendChild(burritoData);
	p = document.createElement("p");
	if(burrito.guacamole.checked)
	{
		data = document.createTextNode("Guacamole added");
		p.appendChild(data);
		burritoData.appendChild(p);
	}
	else
	{
		data = document.createTextNode("No guacamole added");
		p.appendChild(data);
		burritoData.appendChild(p);
	}
	burritoRow.appendChild(burritoData)
	//add the cost and delete row
	burritoRow = document.createElement("tr");
	burritoData = document.createElement("td");
	burritoTable.appendChild(burritoRow);
	burritoRow.appendChild(burritoData);
	
	p = document.createElement("p");
	data = document.createTextNode("Cost: $" + burrito.cost.toFixed(2));
	burritoData.appendChild(p);
	p.appendChild(data);
	
	burritoData = document.createElement("td");
	burritoRow.appendChild(burritoData);
	
	var deleteBtn = document.createElement("input")
	deleteBtn.type = "button";
	deleteBtn.value = "delete burrito";
	deleteBtn.onclick = function() {
		deleteBurrito(burrito)
	};
	burritoData.appendChild(deleteBtn);
}