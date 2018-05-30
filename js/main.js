(function () {
	"use strict";
			console.log("file connected");
//single line comment



/*
Multi line

comment

 */

var words = "This is a string";
var num = 1;
console.log(words);
console.log("Your lucky number is "+num);
var teams = ["Knights" ,"Caps" ,"Leafs"]; 
console.log(teams[0]); // 1st position of an array is 0

function i_am_a_function(){
	console.log("From i_am_a_function()");
}

window.addEventListener("load",i_am_a_function,false);
}) ();