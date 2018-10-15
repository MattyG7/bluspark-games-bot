const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} poked themself, lol.***`);

  let pkicon = message.author.displayAvatarURL;
  let pkembed = new Discord.RichEmbed()
  .setColor("#1fd1c8")
  .setAuthor("Poke 👉", pkicon)
  .setDescription(`***${message.author.username} poked ${rUser.user.username}.***\nDid that tickle? 😆`)
  .setImage (`https://media.giphy.com/media/3x5nIjlszTBQs/giphy.gif`);
  return message.channel.send(pkembed);
}

module.exports.help = {
  name: "poke"
}
