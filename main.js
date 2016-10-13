var  arrProduct = [];


var b = {
		name: "The Gandalf",
		description: "You shall not pass",
		price: "$101",
		image: "images/b.jpg"
}

var ch = {
		name: "Cheeseburger",
		description: "Rawr!",
		price: "$101",
		image: "images/ch.jpg"
}


var dg = {
		name: "Dog Poop",
		description: "Woof!",
		price: "$101",
		image: "images/dg.jpg"
}


var leglamp  = {
		name: "Leg Lamp",
		description: "Fragile , must be Italian!",
		price: "$1001",
		image: "images/leglamp.jpg"
}


var r2d2 = {
		name: "r2d2.jpg",
		description: "Beep Boop!",
		price: "$101",
		image: "images/r2d2.jpg"
}


var ns = {
		name: "Nose",
		description: "Not A Finger!",
		price: "$101",
		image: "images/ns.jpg"
}


var st = {
		name: "Star Trek",
		description: "Engage!",
		price: "$101",
		image: "images/st.jpg"
}


var tc = {
		name: "Tesla Coil",
		description: "The best source of light!",
		price: "$101",
		image: "srcimages/tc.jpg";
}

// check the array's number of objects 


console.log(arrProduct.length);

// push the classes into the array 

arrProduct.push (b);
arrProduct.push (ch); 
arrProduct.push (dg); 
arrProduct.push (leglamp); 
arrProduct.push (r2d2); 
arrProduct.push (ns); 
arrProduct.push (st); 
arrProduct.push (tc); 

//print the length of the array's contents to confirm what's stored 


console.log (arrProduct.length);

// created div id with a new variable  

for (i= 0; i < arrProduct.length; i++)

{

var name = arrProduct[i].name;
var description = arrProduct[i].description;
var image = arrProduct[i].image;
var price = arrProduct[i].price;
var products = document.getElementById('products')
products = "<div class='proname'>"  + 
		name + "</div>" + "<div class=product>" + 
		image + "</div>" + "<div class='description'>" + 
		description + "</div>" + "<div class='productprice'>" + 
		price + "</div>" ;


document.write('products');
}



