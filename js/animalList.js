// ANIMAL TEMPLATE

// sets variable source to the animalTemplate id in index.html
var source = document.getElementById("animalTemplate").innerHTML;

// Handlebars compiles the above source into a template
var template = Handlebars.compile(source);

// data
var data = {type: "Dog", sound: "woof"};

// data is passed to above template
var output = template(data);

// HTML element with id "animalList" is set to the output above
document.getElementById("animalList").innerHTML = output;

// JQUERY ANIMAL TEMPLATE

// var source = $("#animalTemplate").html();
// var template = Handlebars.compile(source);
// var data = {type: "Dog", sound: "woof"};
// $("#animalList").html(template(data));

