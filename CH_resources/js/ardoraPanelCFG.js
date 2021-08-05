//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=0;
var successes=0; successesMax=12; attempts=0; attemptsMax=3;
var score=0; scoreMax=12; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Inicio";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#FFA8D3"; colorText="#000000"; colorSele="#82FBCA";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=3; messageOk="Bien hecho!"; messageTime="Acabó tu tiempo!"; messageError="Fallaste."; messageAttempts="No tienes más intentos."; isShowMessage=false;
var urlOk="https://c.tenor.com/6B-Jw3LhNpMAAAAM/felicidades-congratulations.gif"; urlTime="https://media1.tenor.com/images/c2f688edee78eeea2231cb2f778ad346/tenor.gif?itemid=12877354"; urlError=""; urlAttempts="https://media0.giphy.com/media/jRtGjzkm8JbRC/200.gif";
var goURLOk="_self"; goURLTime="_blank"; goURLAttempts="_self"; goURLError="_self"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var texSel=0; var doneA=["0","0","0","0","0","0","0","0","0","0","0","0"];
var posX=[412,174,487,409,531,427,478,49,147,87,56,139]; var posY=[60,65,123,187,231,279,368,343,318,235,160,146];
var coorx=["NDA3", "MTY5", "NDgy", "NDA0", "NTI2", "NDIy", "NDcz", "NDQ=", "MTQy", "ODI=", "NTE=", "MTM0"]; var coory=["NjA=", "NjU=", "MTIz", "MTg3", "MjMx", "Mjc5", "MzY4", "MzQz", "MzE4", "MjM1", "MTYw", "MTQ2"]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var al1=["VISTA", "", "", "", "", "", "", "", "", "", "", ""]; var al2=["", "", "", "", "", "", "", "", "", "", "", ""]; var al3=["", "", "", "", "", "", "", "", "", "", "", ""]; var al4=["", "", "", "", "", "", "", "", "", "", "", ""]; answers=["OJO", "CEREBRO", "CORAZÓN", "PANCREAS", "ESTÓMAGO", "RIÑON", "INTESTINO DELGADO", "INTESTINO GRUESO", "VEJIGA", "HÍGADO", "BILIS", "PULMONES"];indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="Q0g="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
