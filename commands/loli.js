const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!args[0]) {
    let replies = ["0", "1", "2", "3"];
    let result = Math.floor((Math.random() * replies.length));

    if(result === 0) {
      let loliicon = message.author.displayAvatarURL;
      let loliembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      //.setAuthor(`A loli a day keps the doctor away`, loliicon)
      .setImage (`https://media1.tenor.com/images/b8b977f770edc982432779a0e4774bf9/tenor.gif?itemid=5102525`);
      return message.channel.send(loliembed);
    }
    if(result === 1) {
      let loliicon = message.author.displayAvatarURL;
      let loliembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      //.setAuthor(`A loli a day keps the doctor away`, loliicon)
      .setImage (`https://media1.tenor.com/images/ae6d71cdb35082ac7a77afe20aad28c4/tenor.gif?itemid=5600129`);
      return message.channel.send(loliembed);
    }
    if(result === 2) {
      let loliicon = message.author.displayAvatarURL;
      let loliembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      //.setAuthor(`A loli a day keps the doctor away`, loliicon)
      .setImage (`https://media.tenor.com/images/567dbf3ec761c007d8ff3049b357b65c/tenor.gif`);
      return message.channel.send(loliembed);
    }
    if(result === 3) {
      let loliicon = message.author.displayAvatarURL;
      let loliembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      //.setAuthor(`A loli a day keps the doctor away`, loliicon)
      .setImage (`https://media1.tenor.com/images/a4b811e15881205ca2244abd91c42014/tenor.gif?itemid=7426168`);
      return message.channel.send(loliembed);
    }
  }
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} likes lolis. Well, they are cute aren't they.***`);

  let replies = ["0", "1", "2", "3", "4", "5", "6", "7"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    let loliicon = message.author.displayAvatarURL;
    let loliembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Loli 👧", loliicon)
    .setDescription(`***${message.author.username} says that ${rUser.user.username} likes lolis.***\n❤`)
    .setImage (`https://media1.tenor.com/images/b8b977f770edc982432779a0e4774bf9/tenor.gif?itemid=5102525`);
    return message.channel.send(loliembed);
  }
  if(result === 1) {
    let loliicon = message.author.displayAvatarURL;
    let loliembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Loli 👧", loliicon)
    .setDescription(`***${message.author.username} says that ${rUser.user.username} likes lolis.***\nGo sit with her. ❤`)
    .setImage (`https://media1.tenor.com/images/ae6d71cdb35082ac7a77afe20aad28c4/tenor.gif?itemid=5600129`);
    return message.channel.send(loliembed);
  }
  if(result === 2) {
    let loliicon = message.author.displayAvatarURL;
    let loliembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Loli 👧", loliicon)
    .setDescription(`***${message.author.username} says that ${rUser.user.username} likes lolis.***\nNom nom. ❤`)
    .setImage (`https://media.tenor.com/images/567dbf3ec761c007d8ff3049b357b65c/tenor.gif`);
    return message.channel.send(loliembed);
  }
  if(result === 3) {
    let loliicon = message.author.displayAvatarURL;
    let loliembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Loli 👧", loliicon)
    .setDescription(`***${message.author.username} says that ${rUser.user.username} likes lolis.***\n❤`)
    .setImage (`https://media1.tenor.com/images/a4b811e15881205ca2244abd91c42014/tenor.gif?itemid=7426168`);
    return message.channel.send(loliembed);
  }
  if(result === 4) {
    let loliicon = message.author.displayAvatarURL;
    let loliembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Loli 👧", loliicon)
    .setDescription(`***${rUser.user.username} is a loli.***\n😜`)
    .setImage (`https://media1.tenor.com/images/b8b977f770edc982432779a0e4774bf9/tenor.gif?itemid=5102525`);
    return message.channel.send(loliembed);
  }
  if(result === 5) {
    let loliicon = message.author.displayAvatarURL;
    let loliembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Loli 👧", loliicon)
    .setDescription(`***${rUser.user.username} is a loli.***\n😜`)
    .setImage (`https://media1.tenor.com/images/ae6d71cdb35082ac7a77afe20aad28c4/tenor.gif?itemid=5600129`);
    return message.channel.send(loliembed);
  }
  if(result === 6) {
    let loliicon = message.author.displayAvatarURL;
    let loliembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Loli 👧", loliicon)
    .setDescription(`***${rUser.user.username} is a loli.***\n😜`)
    .setImage (`https://media.tenor.com/images/567dbf3ec761c007d8ff3049b357b65c/tenor.gif`);
    return message.channel.send(loliembed);
  }
  if(result === 7) {
    let loliicon = message.author.displayAvatarURL;
    let loliembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Loli 👧", loliicon)
    .setDescription(`***${rUser.user.username} is a loli.***\n😜`)
    .setImage (`https://media1.tenor.com/images/a4b811e15881205ca2244abd91c42014/tenor.gif?itemid=7426168`);
    return message.channel.send(loliembed);
  }
}

module.exports.help = {
  name: "loli"
}
