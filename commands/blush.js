const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!args[0]) {
    let blshicon = message.author.displayAvatarURL;
    let blshembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor(`${message.author.username} is blushing.`, blshicon)
    .setImage (`https://media.giphy.com/media/HwiHSZ4JdampW/giphy.gif`);
    return message.channel.send(blshembed);
  }
  let rUser = message.mentions.members.first();
  if(args[0] && !rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} is blushing for some reason. Did you think about someone you like or something embarrassing?***`);

  let blshicon = message.author.displayAvatarURL;
  let blshembed = new Discord.RichEmbed()
  .setColor("#1fd1c8")
  .setAuthor("Blush 😳", blshicon)
  .setDescription(`***${rUser.user.username} made ${message.author.username} blush.***\nLol 😏`)
  .setImage (`https://media.giphy.com/media/HwiHSZ4JdampW/giphy.gif`);
  return message.channel.send(blshembed);
}

module.exports.help = {
  name: "blush"
}
