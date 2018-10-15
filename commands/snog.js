const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username}, that just looks weird...***`);

  let sgicon = message.author.displayAvatarURL;
  let sgembed = new Discord.RichEmbed()
  .setColor("#1fd1c8")
  .setAuthor("Snog 💋", sgicon)
  .setDescription(`***${message.author.username} snogged ${rUser.user.username}.***\nGet a room! 🙈`)
  .setImage (`https://media.giphy.com/media/CE1sk31EVmjNS/giphy.gif`);
  return message.channel.send(sgembed);
}

module.exports.help = {
  name: "snog"
}
