
var timer = 6;  
var nhit =0; 
var score =0;

function getNewHit()
{
   nhit = Math.floor(Math.random()*10); 
   document.querySelector("#hitval").textContent=nhit;

}
 
function makeBubble()
{
    var clutter ="";
    for(var i=1; i<154; i++)
    {   var ans= Math.floor(Math.random()*10);
        clutter+=`<div class="bubble">${ans}</div>`
    } 
    document.querySelector('.hero').innerHTML=clutter; 
}  


function Timer()
{var ival= setInterval(function() { 
    if(timer>0) 
    {timer--; 
    document.querySelector("#timeInt").textContent=timer;
    }
    else { 
        clearInterval(ival);  
        document.querySelector(".hero").innerHTML =`<div class="over"><h1>Game Over</h1><h2> Score: ${score}</h2> <div>`;
        
    }
    
},1000);
}  

function IncreseScore()
{
     score+=10;
     document.querySelector("#scoreval").textContent=score;
}
document.querySelector(".hero").addEventListener('click',function(dets)
{  var clicked = Number(dets.target.textContent);
    if(clicked===nhit)
    {
        IncreseScore();
        getNewHit();
        makeBubble();
    }
})

makeBubble();  
Timer(); 
getNewHit();
IncreseScore();
