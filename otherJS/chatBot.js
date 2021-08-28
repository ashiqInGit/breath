const btnn=document.querySelector('.btn');
const userInput=document.querySelector('.input');
const speakBtn=document.querySelector('.speak-btn');


const botText=document.querySelector('.bot-text');

function setup(){


    speak();
}







var bot = new RiveScript();

bot.loadFile("../RiveScripts/botBrain.rive").then(loading_done).catch(loading_error);


function loading_done() {
    console.log("Bot has finished loading!");
    // botChat();
    

  }

function loading_error(){
    console.log("Error!");
}



function botChat(message){
    let username = "local-user";
    bot.sortReplies();
   
    bot.reply(username, message).then(function(reply) {
      console.log("The bot says: " + reply);

      botText.innerHTML=reply;
    });
}





btnn.addEventListener('click',()=>{

    let msg=userInput.value;
    botChat(msg);

})

function shit(){
    var foo = new p5.Speech(); // speech synthesis object
    foo.speak(`Helloo this's your boy KSI G D B oluntunji`); // say something
}



function speak(){
    speakBtn.addEventListener('click',shit)
}



