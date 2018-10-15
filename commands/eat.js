const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***How do you taste, ${message.author.username}?***`);

  let eticon = message.author.displayAvatarURL;
  let etembed = new Discord.RichEmbed()
  .setColor("#1fd1c8")
  .setAuthor("Eat 🍴", eticon)
  .setDescription(`***${message.author.username} ate ${rUser.user.username}.***\n😦`)
  .setImage (`https://media.giphy.com/media/SasDDqOSRclNu/giphy.gif`);
  return message.channel.send(etembed);
}

module.exports.help = {
  name: "eat"
}
