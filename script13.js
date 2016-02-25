window.onload = function(){
//var clickMeButton=document.getElementById('ClickMe');
//clickMeButton.onclick=runTheExample;

document.getElementById('ClickMe').onclick = runTheExample;
	
}
/*
function runTheExample(){
alert('running the example...');
}
*/

function runTheExample(){
	var myElement = document.getElementById('second');
	var myNodeName = myElement.nodeName;

/*	
   // alert('myNodeName...');

if (myElement!= null){
	alert(myElement.innerHTML);
}
*/


//document.getElementById('second').innerHTML="See how i set the text here? ";

var listOfParagraphs = document.getElementsByTagName('p');

alert(listOfParagraphs.length);

var secondParagraph = listOfParagraphs[1];
alert(secondParagraph.innerHTML);
}