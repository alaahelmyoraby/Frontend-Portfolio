//doubles clicks will hide the cartbox
var Mycartbutton=document.getElementById("CartImg")
var Mycartpopup=document.getElementById("CartBox")

function showpopup(e){
    e.stopPropagation()  //exclude crt from propagatino
    if (Mycartpopup.getAttribute("CurrentState")=="DisplayNone") {
        Mycartpopup.style.display="flex"
        Mycartpopup.setAttribute("CurrentState","DisplayFlex")
    } else {
        Mycartpopup.style.display="none"
        Mycartpopup.setAttribute("CurrentState","DisplayNone")
    }
}
Mycartbutton.onclick=showpopup

//stop propagastion when click on anywhere on the page the cart will be hidden
function hidecart(e){
    e.stopPropagation()
    Mycartpopup.style.display="none"
    Mycartpopup.setAttribute("CurrentState","DisplayNone")
}
document.onclick=hidecart

//stop propagation onthe cartrtbox

function donnot_hide_onclicking_cartbox(e) {
    e.stopPropagation()
}
Mycartpopup.onclick=donnot_hide_onclicking_cartbox


var plusbutton =document.getElementById("PlusWrapper")
var minusbutton =document.getElementById("MinusWrapper")
var countlabel =document.getElementById("itemcountlabel")

function Add(){
    var MYNEWVALUE= Number(countlabel.innerText)+1
    countlabel.innerText=MYNEWVALUE
}
function minus(){
    var CurrentVALUE= Number(countlabel.innerText)
    if (CurrentVALUE >0) {
        var MYNEWVALUE= Number(countlabel.innerText)-1

    } else {
        var MYNEWVALUE=0
    }
    countlabel.innerText=MYNEWVALUE
}

plusbutton.onclick =Add
minusbutton.onclick=minus

var deleteicon =document.getElementById("DeleteIcon")

function Removeitem() {
    document.getElementById("ItemCard").remove()

}
deleteicon.onclick=Removeitem

var Menuburger =document.getElementById("MenuIcon")

function showsidebar (){
    document.getElementById("SideBar").style.display="flex"
    document.getElementById("overlay").style.display="flex"

}
Menuburger.onclick =showsidebar

var closebtn =document.getElementById("CloseBtn")

function Hideslidebar(){
    document.getElementById("overlay").style.display="none"
    document.getElementById("SideBar").style.display="none"

}
closebtn.onclick=Hideslidebar
//////////////////////////////////////
var firstthumbnails=document.getElementById("firstthumbnail")
function showsfirstimage() {
    document.getElementById("MainProduct").src="./images/image-product-1.jpg"
    firstthumbnails.style.opacity="0.4"
    document.getElementById("fourththumbnail").style.opacity="1"
    document.getElementById("secondthumbnail").style.opacity="1"
    document.getElementById("thirdthumbnail").style.opacity="1"
}
firstthumbnails.onclick=showsfirstimage
///////////////////////////////////////
var secondthumbnails =document.getElementById("secondthumbnail")
function showsecondimage() {
    document.getElementById("MainProduct").src="./images/image-product-2.jpg"
    secondthumbnails.style.opacity="0.4"
    document.getElementById("firstthumbnail").style.opacity="1"
    document.getElementById("thirdthumbnail").style.opacity="1"
    document.getElementById("fourththumbnail").style.opacity="1"
}   
secondthumbnails.onclick=showsecondimage
///////////////////////////////////////
var thirdthumbnails=document.getElementById("thirdthumbnail")
function showthirdimage() {
    document.getElementById("MainProduct").src="./images/image-product-3.jpg"
    thirdthumbnails.style.opacity="0.4";
    document.getElementById("firstthumbnail").style.opacity="1"
    document.getElementById("secondthumbnail").style.opacity="1"
    document.getElementById("fourththumbnail").style.opacity="1"
}
thirdthumbnails.onclick=showthirdimage
///////////////////////////////////////
var fourhtthumbnails=document.getElementById("fourththumbnail")
function showfourthimage() {
    document.getElementById("MainProduct").src="./images/image-product-4.jpg"
    fourhtthumbnails.style.opacity="0.4";
    document.getElementById("firstthumbnail").style.opacity="1"
    document.getElementById("secondthumbnail").style.opacity="1"
    document.getElementById("thirdthumbnail").style.opacity="1"
}
fourhtthumbnails.onclick=showfourthimage
///////////////////////////////////////
var index=0
var newarray = [
    "./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./images/image-product-3.jpg",
    "./images/image-product-4.jpg"
]
function NextImage(){
    var newindex=index+1
    index=newindex
    if (newindex<4) {
        var newsrc=newarray[newindex]
    } else {
        newindex=0
        index=0
        var newsrc=newarray[newindex]
    }
    document.getElementById("MainProduct").src=newsrc
}
document.getElementById("NextBTn").onclick=NextImage
/////////////////////////////////////////////////
var index1=4
var newarray1 = [
    "./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./images/image-product-3.jpg",
    "./images/image-product-4.jpg"
]
function PreviuosImage(){
    var newindex1=index1-1
    index1=newindex1
    if (newindex1>0) {
        var newsrc1=newarray1[newindex1]
    } else {
        newindex1=3
        index1=3
        var newsrc1=newarray1[newindex1]
    }
    document.getElementById("MainProduct").src=newsrc1
}
document.getElementById("PreviousBtn").onclick=PreviuosImage
