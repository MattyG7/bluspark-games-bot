const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} now has a sore red hand mark...***`);

  let slpicon = message.author.displayAvatarURL;
  let slpembed = new Discord.RichEmbed()
  .setColor("#1fd1c8")
  .setAuthor("Slap ✋", slpicon)
  .setDescription(`***${message.author.username} slapped ${rUser.user.username}.***\nOoh, that looks sore. 😶`)
  .setImage (`https://media.giphy.com/media/qNtqBSTTwXyuI/giphy.gif`);
  return message.channel.send(slpembed);
}

module.exports.help = {
  name: "slap"
}
