// set the array

var lights = []; 

var firstlight = { 
	title: "Edison",
	price: 8,
	descrip: "blahalksdjf;lakjs;dlkff"
}                 

// list some variables

var secondlight = {
	title: "Victorian",
	price: 9,
	descrip: "alsdjf;lakjsdf"
}

var thirdlight = {
	title: "Torch",
	price: 10,
	descrip: "alsjdfl;akjsdf"
}

var fourthlight = {
	title: "Matches",
	price: "4",
	descrip: "alsjdlfalaksjd"
}

// push the variables into the array

lights.push(firstlight);
lights.push(secondlight);
lights.push(thirdlight);
lights.push(fourthlight);

//How many items are in the arrary?
//console.log (lights.length);

for (var i = 0; i < lights.length; i++) {
	
	//Set the looped variable
	var price = lights[i].price;
	var title = lights[i].title;
	var descrip = lights[i].descrip;
	var price = lights[i].price;

	//Is it pulling all the subitems?
	//console.log("Title: " + title + "Description: " + descrip + 
	//	"Price: " + price);
	//	
	//	num.toString();


	// style it up
	var products = document.getElementById('products')
		products = 
		
		"<article>" +

		"<div class='title'>"  + 
		title + "</div>" + 

		"<div class='description'>" + 
		descrip + "</div>" + 

		"<div class='price'>"  + 
		 "$ " + price + "</div>" +

		"</article>";

		//apply to the page
		document.write(products);
}

