function makeAjaxCall (methodtype, url){
    var promiseObj=new Promise(function(resolve,reject){
        
        let xhr=new XMLHttpRequest;
        xhr.open(methodtype,url,true);
        xhr.send();
   
        xhr.onreadystatechange=function(){
            if (xhr.readyState===4){                  //checks the state of the request. 4 means its been treated
                console.log('status is 4');                
                if (xhr.status===200){                // checks the status. 200 means OK (as opposed to 404).
                    var resp=xhr.responseText;        // store the response in a var  
                    var respJSON=JSON.parse(resp);     // convert the text response into JSON
                    console.log(xhr.responseText);  
                    resolve(respJSON);                 // the JSON converted response will be called if the promise resolves 
                }
                else {
                    console.log("status failure")
                    reject(xhr.status);                // the status will be called if the promise is rejected
                }
                
            }
            else {
                console.log("xhr processing going on");      // if readystate !=4 it means the request isn't done processing. The promise can't be resolved or rejected yet.
            }
        }
    });
    return promiseObj;
};

errorHandler=(error)=>{
    console.log("failed with "+error);
}

insertQuote=(quote)=>{
    var author= document.createElement("P");
    var breaq=document.createElement("BR");
    author.innerHTML=quote.author;
    author.setAttribute("id","author");
    document.getElementById("quote").innerHTML=quote.quote;
    document.getElementById("quote").appendChild(breaq);
    document.getElementById("quote").appendChild(author);
}


makeAjaxCall('GET','https://thatsthespir.it/api').then (insertQuote,errorHandler);