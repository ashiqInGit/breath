

// THE BUTTONS ++++++++++++++++++++++++++++++++++++++++++++++



const startConvoBtn=document.querySelector('.start-convo-btn');
const speakBtn=document.querySelector('.speak-btn');
const stoConvoBtn=document.querySelector('.stop-convo-btn');



const startConvoBtnCont=document.querySelector('.start-convo-btn-cont');
const otherBtnCont=document.querySelector('.other-btn-cont');

const userSpeech=document.querySelector('.user-speech');



stoConvoBtn.addEventListener('click',()=>{
    startConvoBtnCont.style.display="block";

    speakBtn.style.display="none";
    stoConvoBtn.style.display="none";

    userSpeech.innerHTML=" ";
    
})


speakBtn.addEventListener('click',listenUser);


// ++++++++++++++++++++++++++++++++ P5 JS SETUP FOR SPEECH REGOGNITION



    
var speech = new p5.Speech();

var listenSpeech=new p5.SpeechRec('en-US');

function setup(){
    noCanvas();
    startSpeaking();
    
}



function welcome(){


    speech.speak(`Hello my friend im happy you're here`); 

}


function startSpeaking(){


    startConvoBtn.addEventListener('click',()=>{
        startConvoBtnCont.style.display="none";
    
        speakBtn.style.display="block";
        stoConvoBtn.style.display="block";

        
        welcome();
    })

}



// //////////////////////// RIVE SCRIPT SETUP ////////////////

var bot = new RiveScript();

bot.loadFile("../RiveScripts/botBrain.rive").then(loading_done).catch(loading_error);


function loading_done() {

    console.log("Bot has finished loading!");
    bot.sortReplies();

}

function loading_error(){
    console.log("Error!");

    speech.speak("I think some Error occured");
}



function listenUser(){

    listenSpeech.start(false,true);
    listenSpeech.onResult=startListen;
   
    listenSpeech.onStart=start;
    listenSpeech.onEnd=end;

    function startListen(){

        userSpeech.innerHTML=listenSpeech.resultString;

    }
 

}


function botReplay(message){
    
    let username = "local-user";

    // ////////// BOT REPLIES //////

    bot.reply(username, message).then(function(reply) {

        speech.speak(reply); 

    });
}



// +++++++++++ Listening text ++++++


const listenText=document.querySelector('.listening-text');


function start(){
    listenText.classList.add("show-text");
    userSpeech.innerHTML=" ";
}

function end(){
    listenText.classList.remove("show-text");



    ///////// FEEDING INPUT TO BOT //////////

    if(listenSpeech.resultValue){

        let userInteraction=listenSpeech.resultString;
        botReplay(userInteraction);
    }
}