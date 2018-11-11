const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***You can't do that, ${message.author.username}!***`);

  let replies = ["0", "1", "2"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    let kllicon = message.author.displayAvatarURL;
    let kllembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Kill 👼", kllicon)
    .setDescription(`***${rUser.user.username} got wasted!***\n... 😨`)
    .setImage (`https://media.giphy.com/media/N5PV3ZtZkvFks/giphy.gif`);
    return message.channel.send(kllembed);
  }
  if(result === 1) {
    let kllicon = message.author.displayAvatarURL;
    let kllembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Kill 👼", kllicon)
    .setDescription(`***${rUser.user.username} got wasted!***\n... 😨`)
    .setImage (`http://miss-neko-manga.m.i.pic.centerblog.net/9b893733.gif`);
    return message.channel.send(kllembed);
  }
  if(result === 2) {
    let kllicon = message.author.displayAvatarURL;
    let kllembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Kill 👼", kllicon)
    .setDescription(`***${rUser.user.username} got wasted!***\n... 😨`)
    .setImage (`https://media.giphy.com/media/MuWFiQBEnhsmk/giphy.gif`);
    return message.channel.send(kllembed);
  }
}

module.exports.help = {
  name: "kill"
}
