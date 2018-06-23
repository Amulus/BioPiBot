var StarboundServer = {
    adress: "starcookies.verygames.net:21025",
    status: "OFF",
    mods: {
      EnhancedStorage:"http://community.playstarbound.com/resources/enhanced-storage.2450/",
      FrackingUniverse: "http://community.playstarbound.com/resources/frackinuniverse.2920/"
    },
    commands:["info","add","remove"],
    displayInfo: function(message){
      modsInfo = '';
      for (var key in this.mods) {
       modsInfo += ('\n\n-['+ key + ']('+this.mods[key]+')');
      }
      message.channel.send('```Markdown\nAdresse : '+ this.adress +'\n'+ 'status : ' +this.status +'\n'+ 'mods requis : ' +modsInfo +'```')
    },
    executeCommand: function(message, args){
      switch(args[0]){
        case 'info': this.displayInfo(message);
          break;
        case 'add': 
                    if (!message.member.roles.has(modRole.id)){
                        return message.reply("Tu n'as pas les droits pour utiliser cette commande");
                    }
                    
                    else{
                        this.mods[args[1]] = args[2];
                        return message.reply("mod ajouté !");
                    } 
          break;
        case 'help' : message.channel.send('```Markdown\n-!st info : Affiche toute les informations du serveur\n-!st add <nom> <liens>: ajoute un mod dans la liste des mods\n-!st remove <nom> : supprimer un mod dans la liste des mods\n```');
          break;
        default: message.channel.send('Erreur, paramètre "'+args[0]+'" inconnu !');
      }
    } 
  }

exports.run = (client, message, args) => {
    const modRole = message.guild.roles.find("name", "admin");
    StarboundServer.executeCommand(message, args);
}