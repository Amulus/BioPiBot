const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let helpEmbed = new Discord.RichEmbed()
  .setDescription("Commands List")
  .setColor("#7eb7b4")
  .setThumbnail(bicon)
  .addField("Help", "To know all of the bot commands | b!help")
  .addField("Starbound", "Toutes les commandes a propos de Starbound | b!st")
  .addField("Ping Pong", "b!ping");
  return message.channel.send(helpEmbed);
}
