const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***Aw. Do you need a hug, ${message.author.username}?***`);

  let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    let hgicon = message.author.displayAvatarURL;
    let hgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hug 🤗", hgicon)
    .setDescription(`***${message.author.username} hugged ${rUser.user.username}.***\nAww. ☺️`)
    .setImage (`https://media.giphy.com/media/y7lqoOlWLbf8Y/giphy.gif`);
    return message.channel.send(hgembed);
  }
  if(result === 1) {
    let hgicon = message.author.displayAvatarURL;
    let hgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hug 🤗", hgicon)
    .setDescription(`***${message.author.username} hugged ${rUser.user.username}.***\nAww. ☺️`)
    .setImage (`https://i.imgur.com/wOmoeF8.gif`);
    return message.channel.send(hgembed);
  }
  if(result === 2) {
    let hgicon = message.author.displayAvatarURL;
    let hgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hug 🤗", hgicon)
    .setDescription(`***${message.author.username} hugged ${rUser.user.username}.***\nAww. ☺️`)
    .setImage (`https://i.imgur.com/r9aU2xv.gif`);
    return message.channel.send(hgembed);
  }
  if(result === 3) {
    let hgicon = message.author.displayAvatarURL;
    let hgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hug 🤗", hgicon)
    .setDescription(`***${message.author.username} hugged ${rUser.user.username}.***\nAww. ☺️`)
    .setImage (`https://i.imgur.com/ntqYLGl.gif`);
    return message.channel.send(hgembed);
  }
  if(result === 4) {
    let hgicon = message.author.displayAvatarURL;
    let hgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hug 🤗", hgicon)
    .setDescription(`***${message.author.username} hugged ${rUser.user.username}.***\nAww. ☺️`)
    .setImage (`https://i.imgur.com/4oLIrwj.gif`);
    return message.channel.send(hgembed);
  }
  if(result === 5) {
    let hgicon = message.author.displayAvatarURL;
    let hgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hug 🤗", hgicon)
    .setDescription(`***${message.author.username} hugged ${rUser.user.username}.***\nAww. ☺️`)
    .setImage (`https://i.imgur.com/6qYOUQF.gif`);
    return message.channel.send(hgembed);
  }
  if(result === 6) {
    let hgicon = message.author.displayAvatarURL;
    let hgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hug 🤗", hgicon)
    .setDescription(`***${message.author.username} hugged ${rUser.user.username}.***\nAww. ☺️`)
    .setImage (`https://media1.tenor.com/images/0aced4890b86b4f78206dd7fa16dc198/tenor.gif?itemid=5404693`);
    return message.channel.send(hgembed);
  }
  if(result === 7) {
    let hgicon = message.author.displayAvatarURL;
    let hgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hug 🤗", hgicon)
    .setDescription(`***${message.author.username} hugged ${rUser.user.username}.***\nAww. ☺️`)
    .setImage (`https://media1.tenor.com/images/3d62384321435408f50823ae6f5ca033/tenor.gif?itemid=12270770`);
    return message.channel.send(hgembed);
  }
  if(result === 8) {
    let hgicon = message.author.displayAvatarURL;
    let hgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hug 🤗", hgicon)
    .setDescription(`***${message.author.username} hugged ${rUser.user.username}.***\nAww. ☺️`)
    .setImage (`https://media1.tenor.com/images/4d89d7f963b41a416ec8a55230dab31b/tenor.gif?itemid=5166500`);
    return message.channel.send(hgembed);
  }
  if(result === 9) {
    let hgicon = message.author.displayAvatarURL;
    let hgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hug 🤗", hgicon)
    .setDescription(`***${message.author.username} hugged ${rUser.user.username}.***\nAww. ☺️`)
    .setImage (`https://media1.tenor.com/images/f77657e4f9d454de399b7c8acb1b8735/tenor.gif?itemid=7939501`);
    return message.channel.send(hgembed);
  }
  if(result === 10) {
    let hgicon = message.author.displayAvatarURL;
    let hgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hug 🤗", hgicon)
    .setDescription(`***${message.author.username} hugged ${rUser.user.username}.***\nAww. ☺️`)
    .setImage (`https://media1.tenor.com/images/24ac13447f9409d41c1aecb923aedf81/tenor.gif?itemid=5026057`);
    return message.channel.send(hgembed);
  }
  if(result === 11) {
    let hgicon = message.author.displayAvatarURL;
    let hgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hug 🤗", hgicon)
    .setDescription(`***${message.author.username} hugged ${rUser.user.username}.***\nAww. ☺️`)
    .setImage (`https://media1.tenor.com/images/6beb6a29603bb0769408c8ff32e035ab/tenor.gif?itemid=5525930`);
    return message.channel.send(hgembed);
  }
  if(result === 12) {
    let hgicon = message.author.displayAvatarURL;
    let hgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hug 🤗", hgicon)
    .setDescription(`***${message.author.username} hugged ${rUser.user.username}.***\nAww. ☺️`)
    .setImage (`https://media1.tenor.com/images/e58eb2794ff1a12315665c28d5bc3f5e/tenor.gif?itemid=10195705`);
    return message.channel.send(hgembed);
  }
  if(result === 13) {
    let hgicon = message.author.displayAvatarURL;
    let hgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hug 🤗", hgicon)
    .setDescription(`***${message.author.username} hugged ${rUser.user.username}.***\nAww. ☺️`)
    .setImage (`https://media1.tenor.com/images/6d73b0a9cadef5310be4b6160d2f959a/tenor.gif?itemid=12099823`);
    return message.channel.send(hgembed);
  }
}

module.exports.help = {
  name: "hug"
}
