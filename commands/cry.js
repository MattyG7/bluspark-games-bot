const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!args[0]) {
    let cryicon = message.author.displayAvatarURL;
    let cryembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Cry 😭", cryicon)
    .setDescription(`***${message.author.username} is crying!***\nSomeone, do something! 😭`)
    .setImage (`https://media.giphy.com/media/L95W4wv8nnb9K/giphy.gif`);
    return message.channel.send(cryembed);
  }
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} is crying. Someone, do something! 😭***`);

  let cryicon = message.author.displayAvatarURL;
  let cryembed = new Discord.RichEmbed()
  .setColor("#1fd1c8")
  .setAuthor("Cry 😭", cryicon)
  .setDescription(`***${message.author.username} is crying because of ${rUser.user.username}.***\nThat was mean! 😠`)
  .setImage (`https://media.giphy.com/media/L95W4wv8nnb9K/giphy.gif`);
  return message.channel.send(cryembed);
}

module.exports.help = {
  name: "cry"
}
