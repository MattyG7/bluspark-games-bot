const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***You need a gf or bf, ${message.author.username}.***`);

  let kssicon = message.author.displayAvatarURL;
  let kssembed = new Discord.RichEmbed()
  .setColor("#1fd1c8")
  .setAuthor("Kiss 😚", kssicon)
  .setDescription(`***${message.author.username} kissed ${rUser.user.username}.***\nOoooh. 😏`)
  .setImage (`https://media.giphy.com/media/v4JbTGe4KJjKo/giphy.gif`);
  return message.channel.send(kssembed);
}

module.exports.help = {
  name: "kiss"
}
