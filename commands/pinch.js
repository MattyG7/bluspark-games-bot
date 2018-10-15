const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***You're not in a dream, ${message.author.username}.***`);

  let pchicon = message.author.displayAvatarURL;
  let pchembed = new Discord.RichEmbed()
  .setColor("#1fd1c8")
  .setAuthor("Pinch 👌", pchicon)
  .setDescription(`***${message.author.username} pinched ${rUser.user.username}.***\nOuchee! 😱`)
  .setImage (`https://media.tenor.com/images/9ac82f2f47772a941c21ea4916946aa4/tenor.gif`);
  return message.channel.send(pchembed);
}

module.exports.help = {
  name: "pinch"
}
