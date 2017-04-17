

console.log("hi");

//var userInput = prompt("Enter a String:");

smalltalk.prompt('Question', 'How old are you?', '10').then(function(value) {
    console.log(value);
}, function() {
    console.log('cancel');
});