// set the array

var lights = []; 

// uh, this code doesn't work. we tried it.
//var myImage = new Image();
//myImage.src = "images/dg.jpg";
//console.log(myImage);

// list some variables

var firstlight = { 
	img: "images/st.jpg",
	title: "Star Trek Lamp",
	price: 8,
	descrip: "Engage!"
}                 

var secondlight = {
	img: "images/ns.jpg",
	title: "The Nose",
	price: 9,
	descrip: "That's kinda gross"
}

var thirdlight = {
	img: "images/r2d2.jpg",
	title: "R2D2",
	price: 10,
	descrip: "Beep Boop"
}

var fourthlight = {
	img: "images/tc.jpg",
	title: "Tesla Coil",
	price: 14,
	descrip: "Well, whatever"
}

var fifthlight = {
	img: "images/dg.jpg",
	title: "What's up, Dog",
	price: 1,
	descrip: "Dog poop"
}

var sixthlight = {
	img: "images/ch.jpg",
	title: "Cheeseburger",
	price: 2000,
	descrip: "i can haz cheezeburger"
}

var seventhlight = {
	img: "images/b.jpg",
	title: "The White Tree of Gondor",
	price: 15,
	descrip: "You shall not pass"
}

var eighthlight = {
	img: "images/ufolamp.jpg",
	title: "UFO Lamp",
	price: 100,
	descrip: "We come in peace"
}

// push the variables into the array

lights.push(firstlight);
lights.push(secondlight);
lights.push(thirdlight);
lights.push(fourthlight);
lights.push(fifthlight);
lights.push(sixthlight);
lights.push(seventhlight);
lights.push(eighthlight);


//How many items are in the arrary?
//console.log (lights.length);

for (var i = 0; i < lights.length; i++) {
	
	//Set the looped variable
	var price = lights[i].price;
	var title = lights[i].title;
	var descrip = lights[i].descrip;
	var img = lights[i].img;

	//Is it pulling all the subitems?
	//console.log("Title: " + title + "Description: " + descrip + 
	//	"Price: " + price);
	//	
	//	num.toString();


	// style it up
	var products = document.getElementById('products')
		products = 
		
		"<article>" +

		'<img src="'+/* myImage.src */ img +'">' +

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

