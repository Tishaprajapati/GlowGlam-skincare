var x=0;
function darkskin(){
    if(x==0){
        document.getElementById("dark").style.height = "300px";
        x=1;
    }
    else if(x==1){
        document.getElementById("dark").style.height = "50px";
        x=0;
    }
    document.getElementById("img1").style.transition= "15s";
    document.getElementById("img1").style.transform= "rotateY(900deg)";

    console.log("clicked");
}
var a=0;
function tanned(){
    if(a==0){
        document.getElementById("tan").style.height = "350px";
        a=1;
    }
    else if(a==1){
        document.getElementById("tan").style.height = "50px";
        a=0;
    }
    document.getElementById("img2").style.transition= "15s";
    document.getElementById("img2").style.transform= "rotateY(900deg)";

  
}
var b=0;
function backhead(){
    if(b==0){
        document.getElementById("black").style.height = "300px";
        b=1;
    }
    else if(b==1){
        document.getElementById("black").style.height = "50px";
        b=0;
    }
    document.getElementById("img3").style.transition= "15s";
    document.getElementById("img3").style.transform= "rotateY(900deg)";

    console.log("clicked");
}
var c=0;
function pig(){
    if(c==0){
        document.getElementById("pig").style.height = "300px";
        c=1;
    }
    else if(c==1){
        document.getElementById("pig").style.height = "50px";
        c=0;
    }
    document.getElementById("img5").style.transition= "15s";
    document.getElementById("img5").style.transform= "rotateY(900deg)";

}
var d=0;
function pimple(){
    if(d==0){
        document.getElementById("pimp").style.height = "300px";
        d=1;
    }
    else if(d==1){
        document.getElementById("pimp").style.height = "50px";
        d=0;
    }
    document.getElementById("img4").style.transition= "15s";
    document.getElementById("img4").style.transform= "rotateY(900deg)";

    console.log("clicked");
}
var e=0;
function darkcircle(){
    if(e==0){
        document.getElementById("darkcircle").style.height = "300px";
        e=1;
    }
    else if(e==1){
        document.getElementById("darkcircle").style.height = "50px";
        e=0;
    }
    document.getElementById("img6").style.transition= "15s";
    document.getElementById("img6").style.transform= "rotateY(900deg)";

    console.log("clicked");
}
function menufun(){
    document.getElementById("menucard").style.display="block";

}