/*
addEventListener("click", function(event){ //prevent page from auto refreshing
    event.preventDefault()
});
*/
var form = document.getElementById("urlForm");  // prevent site from refreshing on url form submission
function submitForm(event) {
    event.preventDefault();
 }
 form.addEventListener('submit', submitForm);


 var form = document.getElementById("categoryForm");    // prevent site from refreshing on category form submission
 function submitForm(event) {
     event.preventDefault();
  }
  form.addEventListener('submit', submitForm);
 


//url submit
document.getElementById('submit1').onclick = function(){ // input form for the URL
    let urlFormInputValue = document.getElementById('url').value;
    let url = String(urlFormInputValue); // covert form input into a string
    let originalUrl = url; // copy of URL to be stored as the href - eg: <a href = "originalUrl">our link</a>
    let templateUrl; // this will be the data we will use to store the url that we will manipulate, both templateUrl and originalUrl will store the same string data type
                     // but templateUrl will be used for manipulation while originalUrl wil be used purely just for the href

    
    if(((url.includes("https://")) || ((url.includes("www.")))) && (url.includes(".com"))){ // if originalUrl has a valid url with proper formatting such as "https:// and .com" then we can pass on the value, and additionally store it into templateUrl for modification  
        console.log("this link was a proper link");
        templateUrl = originalUrl; 
        htmlWrapper(templateUrl, originalUrl);  
    } else {                                               
        console.log("this link was not a proper link"); 
        originalUrl = "https://www." + originalUrl + ".com";
        templateUrl = originalUrl;
        htmlWrapper(templateUrl, originalUrl); 
    }
}

function htmlWrapper(originalUrl, templateUrl){ //add an href to the url
    let wrappedUrl = `<a href = "${originalUrl}" target = "_blank"><br>${templateUrl}<br></a>`;
    console.log("step 1. " +  `${wrappedUrl}`);
    wrappedUrl = `<div class = "wrap">${wrappedUrl}</div>`;
    console.log("step 2. " + `${wrappedUrl}`); //url has been wrapped with html properties making it a clickable link
    returnUrl();
    function returnUrl(){ // function that displays the wrapped url to the user, these will be standalone links
        document.getElementById('mainListUrl').innerHTML += wrappedUrl;
    }
    //document.getElementById('urlList').innterHTML += `${wrappedUrl}`;
}









/*
now we need to create the function to store the category data type. once we get the string from category we have to create an array with it. we should use an object constructor
and treat these categories as an oject, within the category is/are arrays, these arrays will store our url. 
the url will first appear as its own separate entity, eventually we should add a button that asks if the user wants to add the url to either one of the category objects, joining its array
every category box will so far, only be capable of storing a single array, the category id will be the name, and the array will inheret the name of the category box. 
the array will be "cats" and the category container object will be called "Category-cats" so we'll need a name constructor for that too. 
when the url are pushed onto an array with a function pushToArray, they will be stored into the specific corresponding array the users selected them into. then, multiple urls can..
be added onto all active arrays and every single array will be displayed onto every category containers by default. 
there will then be a final function called deployAll where the user can click a button to launch a for loop that will attempt to open every single website in the array/category.
all the links will be stored into the array unwrapped, but it's cousin the wrappedUrl will be stored on the categorycontainer, this is so users can just click on the normal links..
or if they want to automate the whole process, open all the links at the same time. 

let's add some functions

1.
storeUrlToCookies() : save url to local storage
storeUrlToDatabase() : save url to database

2.
categoryObjectConstructor() : object contructor that creates category objects

3.
arrayConstructor() : takes category object's string name and makes an array, make the category object the superset/parent of the array

4. 
pushToArray()
takes url and then pushes it to an array with a click of a button

5.
showCategoryOnHover()
when user hovers over link, shows a small window of the list of categories



*/

/*global variable*/ 
const categoryObject = {};  // object that will store all the category arrays


document.getElementById('submit2').onclick = function(){ // input form for the category
    let categoryFormInputValue = document.getElementById('category').value; //store the value into a variable
    let category = String(categoryFormInputValue); // covert the variable into a string 
    
    console.log("category submitted ✓"); // check that the category has been submitted
    createArray(category); // send the variable category into the function which takes strings and creates an array out of them 

}


function createArray(category){
    console.log("enter createArray function");
    categoryObject[category] = [];
    console.log("show array" + " " + categoryObject.category);
}

/*
function categoryArrayConstructor(category){
    window[category] = category;
    document.getElementById('categoryListContainer').innerHTML += window[category] + "<br>";
}  */   







/*

function categoryObjectConstructor(category){
    console.log(`object-category: ${category}`);
    window[category] = category;
    document.getElementById('categoryListContainer').innerHTML += window[category] + "<br>";
    prototypeMakeAnObjectCategory(category);
}

function prototypeMakeAnObjectCategory(category){
    let prototypeCategory = category;
    console.log(`array-prototype: ${prototypeCategory}` );

   
}

function makeAnObject(){
    let categoryObject = {
        data: []
    };
}

function addayInObject(){
    categoryObject.data.push()
}
*/

/*
array.name = category
    category.urls = [];


the object is the category, therefore the object we're creating is called "reddit-research"
we will create a new object identifying it as an object called redditResearch
redditResearch will have multiple properties, we will give it an array

delete redditResearch if user decides to delete it  

*/ 




