
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
  //clear input field on button submit
  document.getElementById("url").value = ""; 
  //save a copy of the strigified variable
  let urlCopy = urlString;
}
//code to get the CATEGORY form submit
document.getElementById('submitCategory').onclick = function(){ 
  //let's input the input value into a variable
  let categoryFormInputValue = document.getElementById('category').value;
  //then we will turn that input value into a string 
  let categoryString = String(categoryFormInputValue); 
  //clear input field on button submit
  document.getElementById("category").value = ""; 
  //save a copy of the strigified variable
  let categoryCopy = categoryString;
}

/*
both fields should be cleared once we have grabbed the form input from both the url and category forms
we should create a new function called 

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


