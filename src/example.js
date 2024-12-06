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
    let thisLink = Result;
    thisLink.href = linkBeforeModification;
    thisLink.target = '_blank';
    let tagHREF = `<a href = ${linkBeforeModification} target = "_blank">${linkBeforeModification}</a>`; //added an <a> href tag
    let fullyPaddedLink = `<div class = "wrap">${tagHREF}<br><br></div>`; //now the wrapped <a> href link has a div with a wrap class for styling effect
    console.log(fullyPaddedLink + " = fullyPaddedLink pass");

    document.getElementById('mainListUrl').innerHTML += `<div class = "wrap">result=${Result} linkBeforeModification=<br> 
    ${linkBeforeModification}<br><br> thisLink=${thisLink}fullyPaddedLink=${fullyPaddedLink}<br><br></div>`;

    /*
    let thisLink = Result;
    thisLink.href = 'linkBeforeModification';
    thisLink.target = '_blank';
    let linkDestination = document.getElementById('demo');

   
        */
}




function createArray(thisLink){
    let temp = thisLink;
    const linkArray = [];
    linkArray.push(thisLink);
}	

function pushArray(){

}







