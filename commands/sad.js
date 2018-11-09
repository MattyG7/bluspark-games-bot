const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!args[0]) {
    let replies = ["0", "1", "2"];
    let result = Math.floor((Math.random() * replies.length));

    if(result === 0) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very sad.`, sdicon)
      .setImage (`https://media.giphy.com/media/a9xhxAxaqOfQs/giphy.gif`);
      return message.channel.send(sdembed);
    }
    if(result === 1) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very sad.`, sdicon)
      .setImage (`https://steamusercontent-a.akamaihd.net/ugc/928172409326612353/26A4EE5ED3B71F421CF33D8BDA711D5178857918/`);
      return message.channel.send(sdembed);
    }
    if(result === 2) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very sad.`, sdicon)
      .setImage (`https://pa1.narvii.com/6151/f2d1776ccaaf706f6ccc8abf5d6ca8b269786403_hq.gif`);
      return message.channel.send(sdembed);
    }
  }
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} is very sad. Someone, cheer them up! 😔***`);

  let replies = ["0", "1", "2"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Sad 😔", sdicon)
    .setDescription(`***${message.author.username} is sad because of ${rUser.user.username}.***\nWhat did you do? 😟`)
    .setImage (`https://media.giphy.com/media/a9xhxAxaqOfQs/giphy.gif`);
    return message.channel.send(sdembed);
  }
  if(result === 1) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Sad 😔", sdicon)
    .setDescription(`***${message.author.username} is sad because of ${rUser.user.username}.***\nWhat did you do? 😟`)
    .setImage (`https://steamusercontent-a.akamaihd.net/ugc/928172409326612353/26A4EE5ED3B71F421CF33D8BDA711D5178857918/`);
    return message.channel.send(sdembed);
  }
  if(result === 2) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Sad 😔", sdicon)
    .setDescription(`***${message.author.username} is sad because of ${rUser.user.username}.***\nWhat did you do? 😟`)
    .setImage (`https://pa1.narvii.com/6151/f2d1776ccaaf706f6ccc8abf5d6ca8b269786403_hq.gif`);
    return message.channel.send(sdembed);
  }
}

module.exports.help = {
  name: "sad"
}
