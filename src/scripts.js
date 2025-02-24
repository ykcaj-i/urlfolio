

//prevent site from refreshing on url form submission
var form = document.getElementById("urlForm");
function submitForm(event) {
    event.preventDefault();
 }
 form.addEventListener('submit', submitForm);


//input form for the URL
document.getElementById('submitUrl').onclick = function(){ 
    //covert form input into a string
    let urlInput = String(document.getElementById('url').value);
    //clear input box
    document.getElementById("url").value = ""; 


//initialize the URL object
const URL = new Object();

URL.link = urlInput;

//Object.keys()
//10 is the limit of links allowed
let objectLength = Object.keys(URL).length;
console.log(objectLength);

if(Object.keys(URL).length == 10){

    for(/*let*/i = 0; /*while */ i < objectLength; i++){
        console.log(URL.link);
    }
} 

}
/*

let count = 0;
for(i = 0; i < 10; i++){
  urlInput += " " + count;
  count++;
  URL.link = urlInput;

console.log(URL.link);

}
*/

