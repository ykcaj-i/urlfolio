document.getElementById('submit1').onclick = function(){
    thisUrl = document.getElementById('url').value;
    let Stringify = String(thisUrl);
    let isLink = true; 
    let Result;
    let Statement; //empty string
    let linkBeforeModification;
    const blankSpace = " ";

    if((Stringify.indexOf('https://') && Stringify.indexOf('.com') != isLink)){
            console.log("added a link");
        Stringify = "https://" + Stringify + ".com";
        Result =  `<div class = "wrap">${Stringify}<br><br></div>`;
        linkBeforeModification = Stringify;
        createHREF(Result, linkBeforeModification, Stringify);
    } else {
            console.log("didn't add a link");
        Result =  `<div class = "wrap">${Stringify}<br><br></div>`;
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

    /*document.getElementById('mainListUrl').innerHTML += `<div class = "wrap">result=${Result} linkBeforeModification=<br> 
    ${linkBeforeModification}<br><br> thisLink=${thisLink}fullyPaddedLink=${fullyPaddedLink}<br><br></div>`;*/
        console.log(`this is the link we pass ${thisLink} and ${arrayLink}`);
    createArray(arrayLink);
    document.getElementById('mainListUrl').innerHTML += `<div class = "wrap">${fullyPaddedLink}</div>`;
    
    /*
    let thisLink = Result;
    thisLink.href = 'linkBeforeModification';
    thisLink.target = '_blank';
    let linkDestination = document.getElementById('demo');

   
        */
}


function createArray(arrayLink){
    console.log("--function createArray---");
    const linkArray = [];
    let link = arrayLink;
    let count = 0;
    linkArray.push(link);
    for(let i = 0; i < linkArray.length; i++){
        console.log(`${linkArray} is in this array`);
       
    count++
    }
    
    printArray(linkArray);
}	

function printArray(linkArray){
    let printThisArray = linkArray;
    console.log("--function printArray---");
    console.log(printThisArray);
    document.getElementById('mainListArray').innerHTML += `<div class = "wrap">${linkArray}</div>`;   
}


function pushArray(){
     
}







