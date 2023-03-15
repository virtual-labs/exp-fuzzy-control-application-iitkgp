var autoclaving1,autoclaving2,autoclaving3;
var annealing1,annealing2,annealing3;
var sintering1,sintering,sintering3;
var transport1,transport2,transport3;

autoclaving1   = ((parseFloat(pweight) * parseFloat(phh1) + parseFloat(tweight) * parseFloat(thh1) + parseFloat(fweight) *parseFloat(fzh1))/1).toPrecision(3) ;
annealing1     = ((parseFloat(pweight) * parseFloat(phh1) + parseFloat(tweight) * parseFloat(tlh1) + parseFloat(fweight) * parseFloat(fzh1))/1).toPrecision(3) ;
sintering1     = ((parseFloat(pweight) * parseFloat(plh1) + parseFloat(tweight) * parseFloat(tzh1)+ parseFloat(fweight) * parseFloat(flh1))/1).toPrecision(3) ;
transport1     = ((parseFloat(pweight) * parseFloat(pzh1) + parseFloat(tweight) * parseFloat(tzh1) + parseFloat(fweight) * parseFloat(fhh1))/1).toPrecision(3) ;
var val1       = [autoclaving1, annealing1, sintering1, transport1];
fuzzydecision1 = Math.max.apply(null,val1);
		
autoclaving2   = ((parseFloat(pweight) * parseFloat(phh2) + parseFloat(tweight) * parseFloat(thh2) + parseFloat(fweight) *parseFloat(fzh2))/1).toPrecision(3) ;
annealing2     = ((parseFloat(pweight) * parseFloat(phh2) + parseFloat(tweight) * parseFloat(tlh2) + parseFloat(fweight) * parseFloat(fzh2))/1).toPrecision(3) ;
sintering2     = ((parseFloat(pweight) * parseFloat(plh2) + parseFloat(tweight) * parseFloat(tzh2)+ parseFloat(fweight) * parseFloat(flh2))/1).toPrecision(3) ;
transport2     = ((parseFloat(pweight) * parseFloat(pzh2) + parseFloat(tweight) * parseFloat(tzh2) + parseFloat(fweight) * parseFloat(fhh2))/1).toPrecision(3) ;
var val2       = [autoclaving2, annealing2, sintering2, transport2];
fuzzydecision2 = Math.max.apply(null,val2);
			 
autoclaving3   = ((parseFloat(pweight) * parseFloat(phh3) + parseFloat(tweight) * parseFloat(thh3) + parseFloat(fweight) *parseFloat(fzh3))/1).toPrecision(3) ;
annealing3     = ((parseFloat(pweight) * parseFloat(phh3) + parseFloat(tweight) * parseFloat(tlh3) + parseFloat(fweight) * parseFloat(fzh3))/1).toPrecision(3) ;
sintering3     = ((parseFloat(pweight) * parseFloat(plh3) + parseFloat(tweight) * parseFloat(tzh3)+ parseFloat(fweight) * parseFloat(flh3))/1).toPrecision(3) ;
transport3     = ((parseFloat(pweight) * parseFloat(pzh3) + parseFloat(tweight) * parseFloat(tzh3) + parseFloat(fweight) * parseFloat(fhh3))/1).toPrecision(3) ;
var val3       = [autoclaving3, annealing3, sintering3, transport3];
fuzzydecision3 = Math.max.apply(null,val3);
			 
			 
function how()
{

/*alert("Fuzzydecision1 = "+fuzzydecision1+"    Fuzzydecision2 = "+fuzzydecision2+"      Fuzzydecision3 = "+fuzzydecision3+"    autoclaving1 = "+autoclaving1 +"   autoclaving2 = "+autoclaving2  +"   autoclaving3 = "+autoclaving3); 
alert("Fuzzydecision1 = "+fuzzydecision1+"    Fuzzydecision2 = "+fuzzydecision2+"      Fuzzydecision3 = "+fuzzydecision3+"    annealing1 = "+annealing1 +"   annealing2 = "+annealing2  +"   annealing13 = "+annealing3); 
alert("Fuzzydecision1 = "+fuzzydecision1+"    Fuzzydecision2 = "+fuzzydecision2+"      Fuzzydecision3 = "+fuzzydecision3+"    sintering1 = "+sintering1 +"   sintering2 = "+sintering2  +"   sintering3 = "+sintering3); 
alert("Fuzzydecision1 = "+fuzzydecision1+"    Fuzzydecision2 = "+fuzzydecision2+"      Fuzzydecision3 = "+fuzzydecision3+"    transport1 = "+transport1 +"   transport2 = "+transport2  +"   transport3 = "+transport3); 
*/
$html = "";
 if((fuzzydecision1==autoclaving1 || fuzzydecision1==annealing1 || fuzzydecision1==sintering1 || fuzzydecision1==transport1) && fuzzydecision1!=0){
     html = "Autoclaving = " +(String(pweight) + "*" + String(phh1) + " + " + String(tweight) + "*" +String(thh1) + " + " + String(fweight) + "*" + String(fzh1) )+"/" + "1=<span class='"+(fuzzydecision1==autoclaving1 ? "active" : "")+"'>" +autoclaving1+"</span><br>";
	 html += "Annealing = " +(String(pweight) + "*" + String(phh1) + " + " + String(tweight) + "*" +String(tlh1) + " + " + String(fweight) + "*" + String(fzh1) )+"/" + "1=<span class='"+(fuzzydecision1==annealing1 ? "active" : "")+"'>" +annealing1+"</span><br>";
	 html += "Sintering =" +(String(pweight) + "*" + String(plh1) + " + " + String(tweight) + "*" +String(tzh1) + " + " + String(fweight) + "*" + String(flh1))+"/" + "1=<span class='"+(fuzzydecision1==sintering1 ? "active" : "")+"'>" +sintering1+"</span><br>";
	 html += "Transport =" +(String(pweight) + "*" + String(pzh1) + " + " + String(tweight) + "*" +String(tzh1) + " + " + String(fweight) + "*" + String(fhh1))+"/" + "1=<span class='"+(fuzzydecision1==transport1 ? "active" : "")+"'>" +transport1+"</span>";
	 
} else if((fuzzydecision2==autoclaving2 || fuzzydecision2==annealing2 || fuzzydecision2==sintering2 || fuzzydecision2==transport2) && fuzzydecision2!=0){
     html = "Autoclaving = " +(String(pweight) + "*" + String(phh2) + " + " + String(tweight) + "*" +String(thh2) + " + " + String(fweight) + "*" + String(fzh2) )+"/" + "1=<span class='"+(fuzzydecision2==autoclaving2 ? "active" : "")+"'>" +autoclaving2+"</span><br>";
	 html += "Annealing = " +(String(pweight) + "*" + String(phh2) + " + " + String(tweight) + "*" +String(tlh2) + " + " + String(fweight) + "*" + String(fzh2) )+"/" + "1=<span class='"+(fuzzydecision2==annealing2 ? "active" : "")+"'>" +annealing2+"</span><br>";
	 html += "Sintering =" +(String(pweight) + "*" + String(plh2) + " + " + String(tweight) + "*" +String(tzh2) + " + " + String(fweight) + "*" + String(flh2))+"/" + "1=<span class='"+(fuzzydecision2==sintering2 ? "active" : "")+"'>" +sintering2+"</span><br>";
	 html += "Transport =" +(String(pweight) + "*" + String(pzh2) + " + " + String(tweight) + "*" +String(tzh2) + " + " + String(fweight) + "*" + String(fhh2))+"/" + "1=<span class='"+(fuzzydecision2==transport2 ? "active" : "")+"'>" +transport2+"</span>";
	 
} else if((fuzzydecisio3==autoclaving3 || fuzzydecision3==annealing3 || fuzzydecision3==sintering3 || fuzzydecision3==transport3) && fuzzydecision3!=0){
     html = "Autoclaving = " +(String(pweight) + "*" + String(phh3) + " + " + String(tweight) + "*" +String(thh3) + " + " + String(fweight) + "*" + String(fzh3) )+"/" + "1=<span class='"+(fuzzydecision3==autoclaving3 ? "active" : "")+"'>" +autoclaving3+"</span><br>";
	 html += "Annealing = " +(String(pweight) + "*" + String(phh3) + " + " + String(tweight) + "*" +String(tlh3) + " + " + String(fweight) + "*" + String(fzh3) )+"/" + "1=<span class='"+(fuzzydecision3==annealing3 ? "active" : "")+"'>" +annealing3+"</span><br>";
	 html += "Sintering =" +(String(pweight) + "*" + String(plh3) + " + " + String(tweight) + "*" +String(tzh3) + " + " + String(fweight) + "*" + String(flh3))+"/" + "1=<span class='"+(fuzzydecision3==sintering3 ? "active" : "")+"'>" +sintering3+"</span><br>";
	 html += "Transport =" +(String(pweight) + "*" + String(pzh3) + " + " + String(tweight) + "*" +String(tzh3) + " + " + String(fweight) + "*" + String(fhh3))+"/" + "1=<span class='"+(fuzzydecision3==transport3 ? "active" : "")+"'>" +transport3+"</span>";
	 
}
	$(".lowerrightlowerSection .howDiv").html(html);
}

document.getElementById('clr').addEventListener('click', function() {
        ctx4.clearRect(0, 0, mycanvas4.width, mycanvas4.height);
		 drawGrid4('deep gray', 50,50);
		 linedraw4();
	$(".lowerrightlowerSection .howDiv").html("");
 }, false);
							 
							 
						
						
						
						
						
						