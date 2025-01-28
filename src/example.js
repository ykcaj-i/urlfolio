//url submit
document.getElementById('submit1').onclick = function(){
    thisUrl = document.getElementById('url').value;
    let Stringify = String(thisUrl);
    let isLink = true; 
    let Result;
    let linkBeforeModification;

    if((Stringify.indexOf('https://') && Stringify.indexOf('.com') != isLink)){ //if the 1st and 2nd condition is not equal to true
        console.log("added a link");                                        //we must give it https and .com
        Stringify = "https://" + Stringify + ".com";                            //stringify is our url, we then update it by wrapping it with html tags
        Result =  `<div class = "wrap">${Stringify}<br><br></div>`;
        linkBeforeModification = Stringify;
        createHREF(Result, linkBeforeModification, Stringify);                  
    } else {                                                                    //else we just let it go 
        console.log("didn't add a link");       
        Result =  `<div class = "wrap">${Stringify}<br><br></div>`;             //wrap it in html tags
        linkBeforeModification = Stringify;
        createHREF(Result, linkBeforeModification, Stringify);
    }
}

function createHREF(Result, linkBeforeModification, Stringify){ //check
    console.log(Stringify + " = Stringify pass");
    console.log(Result + " = Result pass");
    console.log(linkBeforeModification + " = linkBeforeModification pass");
    console.log("successful");

    let arrayLink = Stringify;
    let thisLink = Result;
    thisLink.href = linkBeforeModification;
    thisLink.target = '_blank';
    let tagHREF = `<a href = ${linkBeforeModification} target = "_blank">${linkBeforeModification}</a>`; //added an <a> href tag
    
    let fullyPaddedLink = `<div class = "wrap">${tagHREF}<br><br></div>`; //now the wrapped <a> href link has a div with a wrap class for styling effect
    console.log(fullyPaddedLink + " = fullyPaddedLink pass");


    console.log(`this is the link we pass ${thisLink} and ${arrayLink}`);
    createArray(arrayLink);
    document.getElementById('mainListUrl').innerHTML += `<div class = "wrap">${fullyPaddedLink}</div>`;
    
}

function createArray(arrayLink){
    console.log("--function createArray---");
    const linkArray = [];
    let link = arrayLink;
    let count = 0;
    linkArray.push(link);
    for(let i = 0; i < linkArray.length; i++){
    console.log(`${linkArray} is in this array`);    
    count++;
    }
    printArray(linkArray);
    createClassBox(linkArray);
}	

function printArray(linkArray){
    let printThisArray = linkArray;
    console.log("--function printArray---");
    document.getElementById('mainListArray').innerHTML += `<div class = "wrap">${linkArray}</div>`;   
}


function pushArray(){
     
}

//category submit
document.getElementById('submit2').onclick = function(){
    thisCategory = document.getElementById('category').value;
    let stringCategory = String(thisCategory);
    let categoryName = stringCategory;
    console.log(stringCategory);
    createClassBox(stringCategory, categoryName);
    
}


function createClassBox(stringCategory, categoryName, linkArray){
    let category = stringCategory;
    let thisBox;
    console.log(`this is ${category}`);
    console.log(`this is ${categoryName}`);
    thisBox =  `<div class = "categoryContainer"><h1>${category}<br></h1></div>`;
    console.log(thisBox);
    document.getElementById('categoryListContainer').innerHTML += thisBox;
}


function parseForm(){
}

