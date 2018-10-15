const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***Do you find yourself tasty, ${message.author.username}?***`);

  let lkicon = message.author.displayAvatarURL;
  let lkembed = new Discord.RichEmbed()
  .setColor("#1fd1c8")
  .setAuthor("Lick 😛", lkicon)
  .setDescription(`***${message.author.username} licked ${rUser.user.username}.***\nYum. 😋`)
  .setImage (`https://media.giphy.com/media/l1AsAMOkYjwteLRkc/giphy.gif`);
  return message.channel.send(lkembed);
}

module.exports.help = {
  name: "lick"
}
