// ANIMAL TEMPLATE

var source = document.getElementById("animalTemplate").innerHTML;
var template = Handlebars.compile(source);
var context = {type: "Dog", sound: "woof"};
var output = template(context);
document.getElementById("animalList").innerHTML = output;


