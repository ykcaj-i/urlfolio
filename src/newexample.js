
//url submit
document.getElementById('submit1').onclick = function(){
    let urlFormValue = document.getElementById('url').value;
    let url = String(urlFormValue);


    let originalUrl = url; //this is contains the url that we will use to make the link reference eg - href = "x.com"
    let wrappedUrl; //this is the url that will be wrapped by the div - <div>x.com</div>
    let newUrl;
    
    console.log(`${originalUrl}`);
    //check
    if((url.indexOf('https://') == true) && (url.indexOf('.com') == true)){
        //wrappedUrl = `<div class = "wrap"><br>${originalUrl}<br></div>`; //if this form has a proper link with https  and com, we wrap it and pass it off to the next function
        wrapper(originalUrl);  //now that we have both a. originalUrl"https://google.com" and b. "`<div class = "wrap"><br>https://google.com<br></div>`" we send it to createHREF
    } else {                                                    // else we we append the url with the proper format and then wrap afterwards
        originalUrl = "https://" + originalUrl + ".com";
        //wrappedUrl = `<div class = "wrap"><br>${originalUrl}<br></div>`;
        wrapper(originalUrl);
    }
}

function wrapper(wrappedUrl, originalUrl){ //add an href to the wrapped url
    //let giftWrappedUrl = wrappedUrl;
    //giftWrappedUrl.href = originalUrl; 
    //giftWrappedUrl.target = "_blank";
    let giftWrappedUrl;
    let hrefWrap = `<a href = ${originalUrl} target = "_blank"><br>${originalUrl}<br></a>`
    let divWrap =  `<div class = "wrap">${hrefWrap}</div>`

}

function createObject(){ //create an object with the div wrapped url and the copy of url
    
}
















