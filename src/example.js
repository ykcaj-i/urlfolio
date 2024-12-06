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
        createHREF(Result, linkBeforeModification);
    } else {
        console.log("didn't add a link");
        Result =  `<div class = "wrap">${Stringify}<br><br></div>`;
        linkBeforeModification = Stringify;
        createHREF(Result, linkBeforeModification);
    }
}

function createHREF(Result, linkBeforeModification){
    console.log(Result + " = Result pass");
    console.log(linkBeforeModification + " = linkBeforeModification pass");
    console.log("successful");
    let thisLink = Result;
    thisLink.href = linkBeforeModification;
    thisLink.target = '_blank';
    let tagHREF = `<a href = ${linkBeforeModification}></a>`;
    document.getElementById('mainListUrl').innerHTML += `<div class = "wrap">"result: "${Result} + "linkBeforeModification: " + ${linkBeforeModification}<br><br> + "thisLink:" +  ${thisLink}<br><br></div>`;
    /*
    let thisLink = Result;
    thisLink.href = 'linkBeforeModification';
    thisLink.target = '_blank';
    let linkDestination = document.getElementById('demo');

    function createArray(thisLink){
        let temp = thisLink;
        const linkArray = [];
        linkArray.push(thisLink);
    }	
        */
}


function pushArray(){

}







