    var pweight=0.50;
	var tweight=0.25;
	var fweight=0.25;
    var autoclaving;
	var annealing;
	var sintering;
	var transport;
   var fuzzydecision1=new Number();
   var fuzzydecision2=new Number();
   var fuzzydecision3=new Number();

function Decision1()
{
	autoclaving1= ((parseFloat(pweight) * parseFloat(phh1) + parseFloat(tweight) * parseFloat(thh1) + parseFloat(fweight) *parseFloat(fzh1))/1).toPrecision(3) ;
	annealing1=((parseFloat(pweight) * parseFloat(phh1) + parseFloat(tweight) * parseFloat(tlh1) + parseFloat(fweight) * parseFloat(fzh1))/1).toPrecision(3) ;
	sintering1=((parseFloat(pweight) * parseFloat(plh1) + parseFloat(tweight) * parseFloat(tzh1)+ parseFloat(fweight) * parseFloat(flh1))/1).toPrecision(3);
	transport1=((parseFloat(pweight) * parseFloat(pzh1) + parseFloat(tweight) * parseFloat(tzh1) + parseFloat(fweight) * parseFloat(fhh1))/1).toPrecision(3) ;
            var val1 = [autoclaving1, annealing1, sintering1, transport1];
		      fuzzydecision1=Math.max.apply(null,val1);
				if(fuzzydecision1==autoclaving1 && fuzzydecision1 !=0) {
					Autoclaving();
				} else if(fuzzydecision1==annealing1 && fuzzydecision1 !=0) {
					Annealing();
				} else if(fuzzydecision1==sintering1 && fuzzydecision1 !=0) {
					Sintering();
				} else if(fuzzydecision1==transport1 && fuzzydecision1 !=0) {
					Transport();
				}
		document.getElementById("how").disabled=false;
}

function Decision2()
{
	autoclaving2= ((parseFloat(pweight) * parseFloat(phh2) + parseFloat(tweight) * parseFloat(thh2) + parseFloat(fweight) * parseFloat(fzh2))/1).toPrecision(3) ;
	annealing2=((parseFloat(pweight) *parseFloat(phh2) + parseFloat(tweight) * parseFloat(tlh2) + parseFloat(fweight) * parseFloat(fzh2))/1).toPrecision(3) ;
	sintering2=((parseFloat(pweight) * parseFloat(plh2) + parseFloat(tweight) * parseFloat(tzh2)+ parseFloat(fweight) * parseFloat(flh2))/1).toPrecision(3) ;
	transport2=((parseFloat(pweight) * parseFloat(pzh2) + parseFloat(tweight) * parseFloat(tzh2) + parseFloat(fweight) * parseFloat(fhh2))/1).toPrecision(3) ;
		var val2= [autoclaving2, annealing2, sintering2, transport2];
		
		fuzzydecision2=Math.max.apply(null, val2);
				if(fuzzydecision2==autoclaving2 && fuzzydecision2 !=0){
						Autoclaving();
					} else if(fuzzydecision2==annealing2 && fuzzydecision2 !=0){
					    Annealing();
					} else if(fuzzydecision2==sintering2 && fuzzydecision2 !=0){
						Sintering();
					} else if(fuzzydecision2==transport2 && fuzzydecision2 !=0){
						Transport();
					}
		document.getElementById("how").disabled=false;
}

function Decision3()
{
	autoclaving3= ((parseFloat(pweight) * parseFloat(phh3) + parseFloat(tweight) * parseFloat(thh3) + parseFloat(fweight) * parseFloat(fzh3))/1).toPrecision(3) ;
	annealing3=((parseFloat(pweight) * parseFloat(phh3) + parseFloat(tweight) *parseFloat(tlh3) + parseFloat(fweight) *parseFloat(fzh3))/1).toPrecision(3) ;
	sintering3=((parseFloat(pweight) * parseFloat(plh3) + parseFloat(tweight) * parseFloat(tzh3)+ parseFloat(fweight)* parseFloat(flh3))/1).toPrecision(3) ;
	transport3=((parseFloat(pweight) * parseFloat(pzh3) + parseFloat(tweight) * parseFloat(tzh3)+ parseFloat(fweight) * parseFloat(fhh3))/1).toPrecision(3) ;
	
		var val3 = [autoclaving3, annealing3, sintering3, transport3];
		fuzzydecision3=Math.max.apply(null,val3);
				if(fuzzydecision3==autoclaving3 && fuzzydecision3 !=0){
						Autoclaving();
					} else if(fuzzydecision3==annealing3 && fuzzydecision3 !=0){
						Annealing();
					} else if(fuzzydecision3==sintering3 && fuzzydecision3 !=0){
						Sintering();
					} else if(fuzzydecision3==transport3 && fuzzydecision3 !=0){
						Transport();
					}
		document.getElementById("how").disabled=false;
}
