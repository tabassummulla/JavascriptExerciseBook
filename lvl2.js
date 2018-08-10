'use strict';

var max = 100;
var ifDivisibleByThree = "Fizz";
var ifDivisibleByFive = "Buzz";

function fizzBuzz(max, ifDivisibleByFive,ifDivisibleByThree){

var text = "";
var i;

for(i=1; i<=max; i++){

if(i%5==0 && i%3==0){
     text += ifDivisibleByThree + ifDivisibleByFive   + "<br>";
}
else if(i%3==0) {
     text += ifDivisibleByThree + "<br>";
    }
else if(i%5==0){
     text += ifDivisibleByFive + "<br>";
}
else {
    text+= "Number is :" + i + "<br>";
}
document.getElementById("fizzbuzz").innerHTML = text;
}
}


var number =0;
var text = "";

function iterationFour(number){

number = document.getElementById("number").value;


        if(number%3==0) {
    
        text += "Number divided by 3 is =" + number / 3 + "<br>";
}
        else {
        number ++;

        if(number%3==0) {

        text += "Number is now " +number + " and this divided by 3 is " + number / 3 + "<br>"; 


         } else {
    
          number = number - 2;  

         if(number%3==0) {
    
        text += "Number is now " +number + " and this divided by 3 is " + number / 3 + "<br>"; 
    }
}

}

document.getElementById("numb").innerHTML = text;
} 




function countTriple(){

var str = document.getElementById("st").value;
var triple = 0;
var txt = "";

for(i =0;i<str.length;i++){


if (str.charAt(i) == str.charAt(i+1) && str.charAt(i+1) == str.charAt(i+2)){

    triple++;
txt =  triple + "<br>";
} 

} 

document.getElementById("trip").innerHTML = txt;
}




var par;
var element;

function createPtag() {

par = document.createElement("p");

par.id = "paragraphtag";

element = document.getElementById("paragraph");

element.appendChild(par);


}



function addText(par){

var text = document.getElementById("paratxt").value;
var txt = document.createTextNode(text);

par.appendChild(txt);


}


function delPara() {

var p = document.getElementById("paragraph");
var deltag = document.getElementsByName("par");
var deltxt = document.getElementById("paragraphtag");

p.removeChild(deltxt);
p.removeAttribute(deltag);

}


let request = new XMLHttpRequest();

function getJSONObjectOne(){

let requestURL ="https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json";
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {

let requestData = request.response;
let myjson = JSON.stringify( requestData, null, 7);

document.getElementById("json").innerHTML = "<pre>" + myjson + "</pre>";
}

}

let requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json";

function getJSONObjectTwo() {

request.open('GET', requestURL);
request.responseType ='json';
request.send();

request.onload = function (){

    let requestData = request.response;
    let myjson = JSON.stringify(requestData, null, 7);
    document.getElementById("json2").innerHTML = "<pre>" + myjson + "</pre>";
}









}


// function searchKings() {

// request.open('GET', requestURL);
// request.responseType ='json';
// request.send();

// request.onload = function (){

//     let requestData = request.response;
//     let myjson = JSON.stringify(requestData, null, 7);

//     var input =  document.getElementById("search").value;

//     var json = [JSON.parse(myjson)];
//     var results = [];

//      for(i =0; i<json.length; i++){

//         if(input)


     






