

let thisUrl;




    document.getElementById('submit1').onclick = function(){
        thisUrl = document.getElementById('url').value;
        let Stringify = String(thisUrl);
        let isLink = true; 
        let Statement; //empty string
        let storage = document.cookie;
        const blankSpace = " ";

        if((Stringify.indexOf('https://') && Stringify.indexOf('.com') != isLink)){
            Statement = "added a link";
            Stringify = "https://" + Stringify + ".com";
            document.getElementById('mainListUrl').innerHTML += `<div class = "wrap">${Stringify} + ${Statement}<br><br></div>` 
            storage = `<div class = "wrap">${Stringify} + ${Statement}<br><br></div>`; 
        } else {
            Statement = "didn't need to add link";
            document.getElementById('mainListUrl').innerHTML += `<div class = "wrap">${Stringify} + ${Statement}<br><br></div>` 
            storage = `<div class = "wrap">${Stringify} + ${Statement}<br><br></div>`; 
        }

        console.log(thisUrl);
        console.log(Stringify);
        
   
       
    }
    



//window.onload = function(){ };

//document.getElementById('url')