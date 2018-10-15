const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***No! Don't hurt yourself, ${message.author.username}.***`);

  let pnchicon = message.author.displayAvatarURL;
  let pnchembed = new Discord.RichEmbed()
  .setColor("#1fd1c8")
  .setAuthor("Punch 👊", pnchicon)
  .setDescription(`***${message.author.username} punched ${rUser.user.username}!***\nOuch...I bet that hurt. 😬`)
  .setImage (`https://vignette.wikia.nocookie.net/simpsons/images/4/4c/Lisa_eyed_punch.gif`);
  return message.channel.send(pnchembed);
}

module.exports.help = {
  name: "punch"
}
