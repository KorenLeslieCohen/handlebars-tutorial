// CUSTOM HELPERS

Handlebars.registerHelper("helper", function(){
  return "This is the output of your helper method.";
});

Handlebars.registerHelper("multiply", function(a, b){
  return a * b;
});