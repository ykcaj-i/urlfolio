

//prevent site from refreshing on url form submission

document.getElementById("urlForm").addEventListener('submit', submitForm);
document.getElementById("categoryForm").addEventListener('submit', submitForm);

function submitForm(event) {
    event.preventDefault();
 }



//input form for the URL
document.getElementById('submitUrl').onclick = function(){ 
    //covert form input into a string
    let urlInput = String(document.getElementById('url').value);
    //clear input box
    document.getElementById("url").value = ""; 
    //add the url input into the array
    addToArray(urlInput);
}
document.getElementById('submitCategory').onclick = function(){ 
    //covert form input into a string
    let catInput = String(document.getElementById('category').value);
    //clear input box
    document.getElementById("category").value = ""; 
    //add the url input into the array
    addToArray(catInput);
}


function isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (err) {
      return false;
    }
  }
//initialize both form input arrays
let URL = [];
let CAT = [];

function addToArray(input){
    //sort whether the input parameter is a category or url
    if((isValidUrl(input)) == true){
    /*input.includes("www.") && input.includes(".com") || 
    input.includes("https://") && (input.includes("www.") && input.includes(".com"))*/
        URL.push(input);
        console.log(URL);
        console.log(" type: url, " + " length: " + URL.length);
    } else {
        CAT.push(input);
        console.log(CAT);
        console.log(" type: category, " + " length: " + CAT.length);
    }
}



/*
 * 
 * function to create a new special set of array called concatenateElements(), where we create an array called const linkArray = []; inside concatenateElements we do as follow
 * add CAT then separate it with a denotion '|' with URL therefore: "google | www.google.com", "robinhood | www.robinhood.com/hood", and "reddit | www.reddit.com"
 * once we are able to create a new variable called let LINK, we push it into the array linkArray.push(LINK) 
 * when console.log(linkArray) we will get ["google | www.google.com", "robinhood | www.robinhood.com/hood", "reddit | www.reddit.com"]
 *                                           element 0                  element 1                             element 2        
 * 
 * let's create a new object called exportToDatabase = {};
 * this object will store methods as functions
 * 0. copyBackupData  //copy and backup data to user's cookies just in case something happens to the database
 * 1. addToArray      //add both the url and cat to separate array 
 * 2. concatenate       //get both the data values from url and cat, and concatenate them to one single string so it can be sent to database
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *  
 */






/*

//initialize the URL object
const URL = new Object();

URL.link = urlInput;
console.log(URL.link);
//Object.keys()
//10 is the limit of links allowed
let objectLength = Object.keys(URL).length;
console.log(objectLength);

if(Object.keys(URL).length == 10){

    for(i = 0;i < objectLength; i++){
        console.log(URL.link);
    }
} 
}
*/


/*

let count = 0;
for(i = 0; i < 10; i++){
  urlInput += " " + count;
  count++;
  URL.link = urlInput;

console.log(URL.link);

}
*/

