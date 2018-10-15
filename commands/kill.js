const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***You can't do that, ${message.author.username}!***`);

  let kllicon = message.author.displayAvatarURL;
  let kllembed = new Discord.RichEmbed()
  .setColor("#1fd1c8")
  .setAuthor("Kill 👼", kllicon)
  .setDescription(`***${rUser.user.username} got wasted!***\n... 😨`)
  .setImage (`https://media.giphy.com/media/N5PV3ZtZkvFks/giphy.gif`);
  return message.channel.send(kllembed);
}

module.exports.help = {
  name: "kill"
}
