addEventListener("click", function(event){ //prevent page from auto refreshing
    event.preventDefault()
});



//url submit
document.getElementById('submit1').onclick = function(){ // input form for the URL
    let urlFormInputValue = document.getElementById('url').value;
    let url = String(urlFormInputValue); // covert form input into a string
    let originalUrl = url; // copy of URL to be stored as the href - eg: <a href = "originalUrl">our link</a>
    let templateUrl; // this will be the data we will use to store the url that we will manipulate, both templateUrl and originalUrl will store the same string data type
                     // but templateUrl will be used for manipulation while originalUrl wil be used purely just for the href

    
    if((url.includes("https://")) && (url.includes(".com"))){ // if originalUrl has a valid url with proper formatting such as "https:// and .com" then we can pass on the value, and additionally store it into templateUrl for modification  
        console.log("is a proper link");
        templateUrl = originalUrl; 
        htmlWrapper(templateUrl, originalUrl);  
    } else {                                               
        console.log("is not a proper link"); 
        originalUrl = "https://" + originalUrl + ".com";
        templateUrl = originalUrl;
        htmlWrapper(templateUrl, originalUrl); 
    }
}

function htmlWrapper(originalUrl, templateUrl){ //add an href to the url
    let wrappedUrl = `<a href = "${originalUrl}" target = "_blank"><br>"${templateUrl}"<br></a>`;
    console.log("step 1. " +  `${wrappedUrl}`);
    wrappedUrl = `<div class = "wrap">"${wrappedUrl}"</div>`;
    console.log("step 2. " + `${wrappedUrl}`); //url has been wrapped with html properties making it a clickable link

    //document.getElementById('urlList').innterHTML += `${wrappedUrl}`;
}



function createObject(){ //create an object with the div wrapped url and the copy of url
    
}
















