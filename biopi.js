
const Discord = require("discord.js");

const client = new Discord.Client();

const config = require("./config.json");

const CommandList = {
  st : undefined,
  help : undefined,
  ping : undefined
};
  
client.on('ready', () => {

  console.log('I am ready!');

});

client.on('message', message => {
  if (message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command in CommandList){
    try {
      console.log('try\n');
      let cFile = require(`./commands/${command}/${command}.js`);
      cFile.run(client, message, args);
    } catch (err) {
      console.error(err);
    }
  }
  else{
    message.reply('Commande inconnue');
  }

});

// Log our bot in
client.login(config.token);