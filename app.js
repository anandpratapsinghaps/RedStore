var Menuitems= document.getElementById("Menuitems");
Menuitems.style.maxHeight="0px"
function menutoggle(){
    if(Menuitems.style.maxHeight=="0px"){
        Menuitems.style.maxHeight="200px";
    }
    else{
        Menuitems.style.maxHeight="0px";
    }
}

// for product

var ProductImg=document.getElementById("ProductImg");
var smallimg=document.getElementsByClassName("smallimg");

    smallimg[0].onclick=function()
    {
        ProductImg.src=smallimg[0].src;
    }
    smallimg[1].onclick = function()
    {
        ProductImg.src=smallimg[1].src;
    }
    smallimg[2].onclick=function()
    {
        ProductImg.src=smallimg[2].src;
    }
    smallimg[3].onclick=function()
    {
        ProductImg.src=smallimg[3].src;
    }

    // for account form

function register() {
    document.getElementById('registerform').style.transform = 'translateX(0px)';
    document.getElementById('loginform').style.transform = 'translateX(0px)';
    document.getElementById('indicator').style.transform = 'translateX(150px)';
}

function login() {
    document.getElementById('registerform').style.transform = 'translateX(300px)';
    document.getElementById('loginform').style.transform = 'translateX(300px)';
    document.getElementById('indicator').style.transform = 'translateX(50px)';
}
