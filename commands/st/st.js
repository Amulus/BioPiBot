var fs = require('fs');
var fileName = './starbound.json';
var StarboundServer = require(fileName);



exports.run = (client, message, args) => {
  const modRole = message.guild.roles.find("name", "admin");
  switch(args[0]){
    case 'info':  modsInfo = '';
                  for (var key in StarboundServer.mods) {
                    modsInfo += ('\n\n-['+ key + ']('+StarboundServer.mods[key]+')');
                  }
                  message.channel.send('```Markdown\nAdresse : '+ StarboundServer.adress +'\n'+ 'status : ' +StarboundServer.status +'\n'+ 'mods requis : ' +modsInfo +'```');
        break;
    case 'add': 
                if (!message.member.roles.has(modRole.id)){
                    return message.reply("Tu n'as pas les droits pour utiliser cette commande");
                }
                else if(args.length != 3){
                  return message.reply("nombre d'arguments incompatible");
                }
                else{
                    StarboundServer.mods[args[1]] = args[2];
                    fs.writeFile(fileName, JSON.stringify(StarboundServer, null, 2), function (err) {
                      if (err) return console.log(err);
                      console.log(JSON.stringify(StarboundServer, null, 2));
                      console.log('writing to ' + fileName);
                      return message.reply("mod ajouté !");
                    });
                } 
      break;
    case 'help' : message.channel.send('```Markdown\n-!st info : Affiche toute les informations du serveur\n-!st add <nom> <liens>: ajoute un mod dans la liste des mods\n-!st remove <nom> : supprimer un mod dans la liste des mods\n```');
      break;
    default: message.channel.send('Erreur, paramètre "'+args[0]+'" inconnu !');
  }
}