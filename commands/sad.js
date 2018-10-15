const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!args[0]) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Sad 😔", sdicon)
    .setDescription(`***${message.author.username} is very sad.***\nSomeone, cheer them up! 😔`)
    .setImage (`https://media.giphy.com/media/a9xhxAxaqOfQs/giphy.gif`);
    return message.channel.send(sdembed);
  }
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} is very sad. Someone, cheer them up! 😔***`);

  let sdicon = message.author.displayAvatarURL;
  let sdembed = new Discord.RichEmbed()
  .setColor("#1fd1c8")
  .setAuthor("Sad 😔", sdicon)
  .setDescription(`***${message.author.username} is sad because of ${rUser.user.username}.***\nWhat did you do? 😟`)
  .setImage (`https://media.giphy.com/media/a9xhxAxaqOfQs/giphy.gif`);
  return message.channel.send(sdembed);
}

module.exports.help = {
  name: "sad"
}
