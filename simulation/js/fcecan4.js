var ctx4 = null;
var canvas4,v4=0;
	var x4,y4,xCo4,yCo4;
	
function canvas44() {
	canvas4=document.getElementById("mycanvas4"),
	ctx4 = canvas4.getContext('2d'),
	canvas4.onmousemove = function(e) {
	var pos = getMousePos4(canvas4, e);
	}
	drawGrid4('deep gray', 50,50);
	linedraw4();
	}
<!--------------end of axis translation----------->
$(document).ready(function(){
	$("#mycanvas4").click(function(e){
		getPosition4(e);
	});
});
function getPosition4(event){
     var rect = canvas4.getBoundingClientRect();
     var x4 = event.clientX - rect.left;
     var y4 = event.clientY - rect.top ;
}
function getMousePos4(canvas4, evt) {
    var rect = canvas4.getBoundingClientRect();
	xCo4 = (evt.clientX - rect.left);
	yCo4 = (evt.clientY - rect.top);
    return {
    x4: evt.clientX - (rect.left) ,
    y4: evt.clientY - rect.top 
    };
}
<!--------------end of mousepos---------------------->
function drawGrid4(color, stepx, stepy) {
   ctx4.fillStyle = "white";
   

   ctx4.lineWidth = 0.5;
   ctx4.strokeStyle = color;

   for (var i =0; i <canvas4.width; i += stepx) {
   ctx4.beginPath();
   ctx4.moveTo(i, 0);
   ctx4.lineTo(i, canvas4.height);
   ctx4.stroke();
   }
   for (var i = 0; i < canvas4.height; i += stepy) {
   ctx4.beginPath();
   ctx4.moveTo(0, i);
   ctx4.lineTo(canvas4.width, i);
   ctx4.stroke();
  }
}
function linedraw4(){
        ctx4.beginPath();
		ctx4.moveTo(0,150);
		ctx4.lineTo(50,0);
		ctx4.lineTo(100,150);
		ctx4.lineTo(150,0);
		ctx4.lineTo(200,150);
		ctx4.lineTo(250,0);
		ctx4.lineTo(300,150);
		ctx4.lineTo(350,0);
		ctx4.lineTo(400,150);
        ctx4.lineWidth=1.5;
		ctx4.strokeStyle="black";
		ctx4.stroke();
  }
  document.getElementById('clr').addEventListener('click', function() {
        ctx4.clearRect(0, 0, mycanvas4.width, mycanvas4.height);
		 drawGrid4('deep gray', 50,50);
		 linedraw4();
  }, false);

  function clearCanvas4() {
	    ctx4.clearRect(0,0,mycanvas4.width,mycanvas4.height); 
	    drawGrid4('deep gray', 50,50);
		linedraw4();
  }	
function Autoclaving()
{
        ctx4.beginPath();
		ctx4.moveTo(0,150);
		ctx4.lineTo(50, 0);
		ctx4.lineTo(100, 150);
		ctx4.closePath();
		ctx4.lineWidth = 2;
		ctx3.strokeStyle = 'black';
		ctx4.stroke();
		ctx4.fillStyle='red';
		ctx4.fill();
  }
  
function Annealing()
{
	    ctx4.beginPath();
		ctx4.moveTo(100,150);
		ctx4.lineTo(150,0);
		ctx4.lineTo(200, 150);
		ctx4.closePath();
		ctx4.lineWidth = 2;
		ctx4.strokeStyle = 'black';
		ctx4.stroke();
	    ctx4.fillStyle='red';
        ctx4.fill();
}
function Sintering()
   {
		ctx4.beginPath();
		ctx4.moveTo(200,150);
		ctx4.lineTo(250,0);
		ctx4.lineTo(300,150);
		ctx4.closePath();
		ctx4.lineWidth = 2;
		ctx3.strokeStyle = 'black';
		ctx4.stroke();
		ctx4.fillStyle='red';
		ctx4.fill();
    }
function Transport()
	{
		ctx4.beginPath();
		ctx4.moveTo(300,150);
		ctx4.lineTo(350,0);
		ctx4.lineTo(400,150);
		ctx4.closePath();
		ctx4.lineWidth = 2;
		ctx4.strokeStyle = 'black';
		ctx4.stroke();
		ctx4.fillStyle='red';
		ctx4.fill();
    }
