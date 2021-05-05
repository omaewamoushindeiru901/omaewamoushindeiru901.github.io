let xhhtp =  new XMLHttpRequest();

let a = 0

xhhtp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        myFunction(this.responseText)
    }
}

xhhtp.open("GET"," http://127.0.0.1:5000/user/0")
xhhtp.send()

function myFunction(data){
    console.log(data);
}