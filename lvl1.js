
alert("Hello World!");

var name ="Tabassum Mulla";
alert(name);
console.log(name);
document.write(name);

document.write("<br>");
document.write("</br>");

function square(number1){

return number1*number1;

}

document.write(square(2));


document.write("<br>");
document.write("</br>");

function sum(inta,intb,intc){
    return inta + intb +intc;
}

document.write(sum(1,2,3));
document.write("<br>");   

document.write("<br>");              
document.write("<strong>");
document.write("Person 1");
document.write("</strong>");
document.write("</br>");

var person = {name :"Tabs",
              age: 21 , 
              occupation : "Software Engineer"};


document.write(person.name);
document.write("<br>");
document.write(person.age);
document.write("<br>");
document.write(person.occupation);
document.write("</br>");

document.write("<br>");
document.write("<strong>");
document.write("Person 2" );
document.write("</strong>");
document.write("</br>");

var person = {name: "David",
             age: 19,
             occupation: "Student"};

document.write(person.name);
document.write("<br>");
document.write(person.age);
document.write("<br>");
document.write(person.occupation);
document.write("</br>");



function increaseAge(person) {

person.age +=1;
document.getElementById("incage").innerHTML =person.age;
}


function createPerson() {
   
   person.name = document.getElementById("nameInput").value;
   person.age = document.getElementById("ageInput").value;
   person.occupation = document.getElementById("occupationInput").value;

 document.getElementById("obj").innerHTML= "Name : " + person.name + " , Age :" +person.age + " , Occupation :" + person.occupation;

}


    
function convertToCaps() {

var a = "He said 'My name is Elliott'  ";
var cap = a.toUpperCase();
document.getElementById("caps").innerHTML = cap;

}


function conCat() {

var string = "My favourite Number is... ";
var number = 7
var output = string + number;
document.getElementById("cat").innerHTML = output;

}

var arrayone = ["One","Two","Three"];

function printArrayOne(arrayone) {
document.getElementById("parray").innerHTML=arrayone;
}

function addToArray() {
arrayone.push("Four");  
document.getElementById("addarray").innerHTML=arrayone;
return arrayone; 

}


function removeLast(arrayone){
arrayone.pop();
document.getElementById("remove").innerHTML=arrayone;
}

function checkAge(person) {

if (person.age >=20 && person.age <=40 )  {
    document.getElementById("check").innerHTML= "true";
}
else {
           document.getElementById("check").innerHTML= "false";
 }
}



function printForLoop(){
var text = "";
var i;
for(i =0; i<=10; i++){
   text += "Number is:  " + i + "<br>";

}
 document.getElementById("forloop").innerHTML = text;
}

function checkDivTwo(){
var text = "";
var i;
for(i =0; i<=10; i++){
    if( i %2 ==0) {
       text += "Number is:  " + i + "<br>";  
    }
 document.getElementById("divloop").innerHTML = text;
}


}




