

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

