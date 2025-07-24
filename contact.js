var cnt=0;
function menufun(){
    if(cnt==0){
        document.getElementById("menucard").style.display="block";
    document.getElementById("contact").style.display="none"
    document.getElementById("container").style.display="none"
    cnt=1;
    }
    else if(cnt==1){
           document.getElementById("menucard").style.display="none";
    document.getElementById("contact").style.display="block"
    document.getElementById("container").style.display="block"
    cnt=0;
    }

    
}