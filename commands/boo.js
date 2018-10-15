const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} just scared themself. Feel free to laugh.***`);

  let booicon = message.author.displayAvatarURL;
  let booembed = new Discord.RichEmbed()
  .setColor("#1fd1c8")
  .setAuthor("Boo 👻", booicon)
  .setDescription(`***${message.author.username} made ${rUser.user.username} jump!***\n**Scream** 😱`)
  .setImage (`https://media.giphy.com/media/ztL00UZOuenpC/giphy.gif`);
  return message.channel.send(booembed);
}

module.exports.help = {
  name: "boo"
}
