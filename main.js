let xhr=new XMLHttpRequest;
xhr.onload=function(){
    if (this.status===200){
        console.log(JSON.parse(this.responseText));
    }
    else {
        alert("error");
    }
}
xhr.open('GET','https://thatsthespir.it/api',true);

xhr.send();

