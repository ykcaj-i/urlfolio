
//first let's add some code for both the url and category forms to prevent refresh on submit

var form = document.getElementById("urlForm");
  function submitForm(event) {
    event.preventDefault();
 }
 form.addEventListener('submit', submitForm);

var form = document.getElementById("categoryForm");
  function submitForm(event) {
    event.preventDefault();
  }
  form.addEventListener('submit', submitForm);
 

//first, initialize the object categoryList

const objectCategoryList = {};

/* 
if:
url form -> on submit = https://www.google.com 
category form -> on submit = google

therefore:
url: https://www.google.com 
category: google

if category form is left empty or the category was not submit, 
then we will return the two form inputs as shown instead 

url: "https://www.google.com"
category: ""

therefore it is usually recommended, but not required for users to input both the link and the category

we can write the code:
*/

//code to get the URL form submit
document.getElementById('submitUrl').onclick = function(){ 
  //let's input the input value into a variable
  let urlFormInputValue = document.getElementById('url').value;
  //then we will turn that input value into a string 
  let urlString = String(urlFormInputValue); 
  //save a copy of the strigified variable as well, we're going to need it
  let urlStringCopy = urlString;
  //clear input field on button submit
  document.getElementById("url").value = ""; 
}
//code to get the CATEGORY form submit
document.getElementById('submitCategory').onclick = function(){ 
  //let's input the input value into a variable
  let categoryFormInputValue = document.getElementById('category').value;
  //then we will turn that input value into a string 
  let categoryString = String(categoryFormInputValue); 
  //save a copy of the strigified variable as well, we're going to need it
  let categoryStringCopy = categoryString;
  //clear input field on button submit
  document.getElementById("category").value = ""; 
}

/*
both fields should be cleared once we have grabbed the form input from both the url and category forms

now that we have the values in string format of both the url and the category, we need to find a way to store them in our database
our data will look like this

url, url, url, url, url, url 

category, category, category

*/















/*
// Initialize an empty object to store the arrays
const fruitDataStore = {};

// Get references to form elements
const fruitForm = document.getElementById('fruitForm');
const fruitNameInput = document.getElementById('fruitName');
const fruitDataInput = document.getElementById('fruitData');

// Add an event listener to the form to handle form submissions
fruitForm.addEventListener('submit', function(e) {
  e.preventDefault();

  // Get the values from the form inputs
  const fruitName = fruitNameInput.value.trim();
  const fruitData = fruitDataInput.value.trim();

  // Check if the fruitName property already exists in the object
  if (!fruitDataStore[fruitName]) {
    // If it doesn't exist, initialize it as an empty array
    fruitDataStore[fruitName] = [];
  }

  // Add the fruitData to the corresponding array
  fruitDataStore[fruitName].push(fruitData);

  // Clear the form inputs
  fruitNameInput.value = '';
  fruitDataInput.value = '';

  // Log the updated object to the console (for debugging purposes)
  console.log(fruitDataStore);
});
*/





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

