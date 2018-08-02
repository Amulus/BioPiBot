var fs = require('fs');
var fileName = './bots.json';

exports.run = (client, message, args) => {
	switch(args[0]){
		case 'list':
				var listbots;
				fs.readFile(fileName,'utf8', (err, data) => {
  					if (err) throw err;
  					console.log(data);
  					listbots = JSON.parse(data);
				});
				console.log("entered <list> subfunction")
    			botsInfo = '';
    			for (var key in listbots) {
                    botsInfo += ('\n\n-['+ key + ']('+ listbots[key]+')');
                }
    			message.channel.send('```Markdown\nVoic la liste des bots du serveur : ' +botsInfo +'```');
    			break;
    	case 'add': 
    			var listbots2 = require(fileName);
    			if(args.length < 3){
                  return message.reply("nombre d'arguments incompatible");
                }
                else {
                	var valeurBot = args.slice(2, args.length);
                	var resultat = '';
                	var compteur = 0;
                	while(compteur < valeurBot.length){
                		resultat += valeurBot[compteur];
                		resultat += ' ';
                		compteur++;
                	}
                	listbots2[args[1]] = resultat;
                	fs.write(fileName, JSON.stringify(listbots2), (err) => {
                      			if (err) return console.error(err);
                      			console.log(JSON.stringify(listbots2, null, 2));
                      			console.log('writing to ' + fileName);
                      			return message.reply("bot ajouté !");
                    });
                }
                break;
        default: message.channel.send('Erreur, paramètre "'+ args[0]+'" inconnu !');
    }
}