var mybtn=document.getElementsByClassName("ratedec")
var submitting=document.getElementById("submitbuttons")
function handlesubmit() {
    document.getElementById("child").style.display="none"
    document.getElementById("child2").style.display="flex"
    rateselect.innerText="You Selected  " + clickedvalue+ " out of 5"

}
function handleratebutton(e){
    e.target.style.background="hsl(25, 97%, 53%)";
    e.target.style.color="aliceblue";
    clickedvalue=e.target.innerText

}
for (var i = 0; i < mybtn.length; i++) {
    mybtn[i].onclick=handleratebutton
}

mybtn.onclick=handleratebutton
submitting.onclick=handlesubmit
