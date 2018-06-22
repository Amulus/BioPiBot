
const Discord = require("discord.js");

const client = new Discord.Client();

const config = require("./config.json");

const commandList = {
  starbound: "st",
  help:"help",

  afficherCommande:function(){
    message.channel.send('')
  }
}

var StarboundServer = {
  adress: "starcookies.verygames.net:21025",
  status: "OFF",
  mods: {
    EnhancedStorage:"http://community.playstarbound.com/resources/enhanced-storage.2450/",
    FrackingUniverse: "http://community.playstarbound.com/resources/frackinuniverse.2920/"
  },
  commands:["info","add","remove"],
  afficherInfo: function(message){
    modsInfo = '';
    for (var key in this.mods) {
     modsInfo += ('\n\n-['+ key + ']('+this.mods[key]+')');
    }
    message.channel.send('```Markdown\nAdresse : '+ this.adress +'\n'+ 'status : ' +this.status +'\n'+ 'mods requis : ' +modsInfo +'```')
  },
  executeCommand: function(message){
    args = message.content.split(" ").slice(1);
    console.log(args[0]);
    switch(args[0]){
      case 'info': this.afficherInfo(message);
        break;
      case 'add': mods[args[1]] = args[2];
        break;
      default: message.channel.send('Erreur, paramètre "'+args[0]+'" inconnu !');
    }
  } 
}

function executeCommand(message){
  if(message.content.startsWith(config.prefix + commandList.starbound)){
    StarboundServer.executeCommand(message)
  }
  else if(message.content.startsWith(config.prefix + commandList.help)){
    message.channel.send('En construction');
  }
}


client.on('ready', () => {

  console.log('I am ready!');

});

client.on('message', message => {
  executeCommand(message);
});

// Log our bot in
client.login(config.token);