const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} is laughing at themself. Everyone, back away slowly...***`);

  let tngicon = message.author.displayAvatarURL;
  let tngembed = new Discord.RichEmbed()
  .setColor("#1fd1c8")
  .setAuthor("Laugh 😂", tngicon)
  .setDescription(`***${message.author.username} is laughing at ${rUser.user.username}.***\nWhat's so funny? 😅`)
  .setImage (`https://media1.tenor.com/images/b3e0ecd965e324aa328a0137c38a44f1/tenor.gif`);
  return message.channel.send(tngembed);
}

module.exports.help = {
  name: "laugh"
}
