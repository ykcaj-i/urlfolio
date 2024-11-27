

let thisUrl;




    document.getElementById('submit1').onclick = function(){
        thisUrl = document.getElementById('url').value;
        let Stringify = String(thisUrl);
        let isLink = true; 
        let Statement; //empty string

        if((Stringify.indexOf('https://') && Stringify.indexOf('.com') != isLink)){
            Statement = "didn't pass";
            Stringify = "https://" + Stringify + ".com";
            document.getElementById('favoritesUrl').textContent = `${Stringify} + ${Statement}`
        } else {
            Statement = "pass";
            document.getElementById('favoritesUrl').textContent = `${Stringify} + ${Statement}`
        }
        console.log(thisUrl);
        console.log(Stringify);
        
   
       
    }
    



//window.onload = function(){ };

//document.getElementById('url')