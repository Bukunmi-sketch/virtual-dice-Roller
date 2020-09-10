<!DOCTYPE html>
<html>
<head>
<title>Virtual Dice roller</title>
<meta charset="utf-8">

<style type="text/css">

input[type=text1]{
background-color:#ffffff;
height:90px;
width:90px;
color:#000000;
border-radius:10px;
font-size:80px;
text-align:center;
margin-left:20px;
border:3px solid black;
margin:10px;
}

input[type=text2]{
background-color:#ffffff;
float:right;
height:90px;
width:90px;
border-radius:10px;
color:#000000;
font-size:80px;
text-align:center;
border:3px solid black;
margin-right:20px;
margin:10px;}

input[type=text3]{
background-color:#000000;
height:40px;
width:100px;
float:right;
border-radius:8px;
color:#66ff99;
border:3px solid gray;
font-size:24px;
font-family:"Times New Roman";}

button{
height:100px;
width:100px;
border-radius:50%;
background-color:#000000;
color:#ffffff;
margin:35px;
border:10px solid #000133;
font-family:"Times New Roman";
font-size:25px;}
     
    

h3{
color:#040138;
border-radius:3px;}

#gee{
height:410px;
width:260px;
border-radius:20px;
border:10px solid black;
}

#back{border:5px double black;
border-radius:25px;
width:280px;}

#yale{
background-color:#0E4D92;
height:410px;
border-radius:10px;
}
   </style>

</head>


<body>

<div id="back">
<div id="gee">
  <div id="yale">

<h3 style="margin:0px;
text-align:center;
background-color:black;
color:grey;
font-variant:small-caps;">Bucz virtual dice roller</h3>

<input type="text3" id="time" onclick="time()"disabled><br>

<input type="text1" id="screen" disabled>

<input type="text2" id="res"disabled><br>

 
 
 
 
  
  <p align="center"><button type="button" onclick="rand()">roll a dice</button></p>
   
   </div>
      </div>
         </div>
 
<script type="text/javascript">
let arrdot=[".","..","...","::",":·:",":::"];
                                     

function rand(){
let x= document.getElementById("screen").value=arrdot[Math.floor(Math.random()*arrdot.length)];
let y=document.getElementById("res").value=arrdot[Math.floor(Math.random()*arrdot.length)];
   }

function time(){
let d=new Date();
let hrs=d.getHours();
let mins=d.getMinutes();
let secs=d.getSeconds();
ampm="AM";

if(hrs==0){hrs=12}
if(hrs>=12){ampm="PM";}
if(hrs>12){hrs=hrs-12;}
if(hrs<10){hrs="0"+hrs;}

if(mins<10){mins="0"+mins}


document.getElementById("time").value=hrs+":"+mins+ampm;
 }
setInterval(time,500);
   

</script>
</body>
</html>  
