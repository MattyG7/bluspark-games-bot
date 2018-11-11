const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***That's kinda weird, ${message.author.username}...***`);

  let replies = ["0", "1", "2", "3"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    let pticon = message.author.displayAvatarURL;
    let ptembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Pat ✋", pticon)
    .setDescription(`***${message.author.username} patted ${rUser.user.username}.***\n😊`)
    .setImage (`https://media.giphy.com/media/M3a51DMeWvYUo/giphy.gif`);
    return message.channel.send(ptembed);
  }
  if(result === 1) {
    let pticon = message.author.displayAvatarURL;
    let ptembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Pat ✋", pticon)
    .setDescription(`***${message.author.username} patted ${rUser.user.username}.***\n😊`)
    .setImage (`https://pa1.narvii.com/5772/a9060d949ffd6b329f947679f9503a6008fb6c6e_hq.gif`);
    return message.channel.send(ptembed);
  }
  if(result === 2) {
    let pticon = message.author.displayAvatarURL;
    let ptembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Pat ✋", pticon)
    .setDescription(`***${message.author.username} patted ${rUser.user.username}.***\n😊`)
    .setImage (`https://media1.tenor.com/images/398c9c832335a13be124914c23e88fdf/tenor.gif`);
    return message.channel.send(ptembed);
  }
  if(result === 3) {
    let pticon = message.author.displayAvatarURL;
    let ptembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Pat ✋", pticon)
    .setDescription(`***${message.author.username} patted ${rUser.user.username}.***\n😊`)
    .setImage (`https://media.tenor.com/images/cb30351bd9094d05fac1b9f0933e4b44/tenor.gif`);
    return message.channel.send(ptembed);
  }
}

module.exports.help = {
  name: "pat"
}
