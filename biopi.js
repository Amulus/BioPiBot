const Discord = require("discord.js"); 
 
const client = new Discord.Client(); 
 
const token = "Enter_Key_Here"; 
 
const StarboundServer = "starcookies.verygames.net:21025"; 
 
modsRequired = {EnhancedStorage:"http://community.playstarbound.com/resources/enhanced-storage.2450/", 
         FrackingUniverse: "http://community.playstarbound.com/resources/frackinuniverse.2920/"}; 
 
const prefix = "!"; 
 
 
 
client.on('ready', () => { 
  console.log('I am ready!'); 
}); 
 
client.on('message', message => { 
  if (message.content.startsWith(prefix + "st")) { 
    let args = message.content.split(" ").slice(1); 
    switch(args[0]){ 
      case 'info': 
        info = ""; 
        for (var key in modsRequired) { 
          info += ('\n\n-'+ key + ', '+modsRequired[key]); 
      } 
        message.channel.send('Serveur Biopi : ' + StarboundServer + '\n\n Mods requis : '+info); 
        break; 
      case 'add': 
        if(args.length == 3){ 
          name = args[1]; 
          link = args[2]; 
          modsRequired[name] = link; 
        } 
        else{ 
          message.channel.send('Erreur de format : la syntaxe est !st add <nom> <lien>'); 
        } 
        break; 
      case 'remove': 
        name = args[1]; 
        delete modsRequired[name]; 
        break; 
      default: 
        message.channel.send('Argument inconnu'); 
 
    } 
 
     
  } 
}); 
 
// Log our bot in 
client.login(token);
 \ No newline at end of file 
starbound command