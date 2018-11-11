const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!args[0]) {
    let replies = ["0", "1", "2", "3", "4"];
    let result = Math.floor((Math.random() * replies.length));

    if(result === 0) {
      let chricon = message.author.displayAvatarURL;
      let chrembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is cheering!`, chricon)
      .setImage (`http://images6.fanpop.com/image/photos/40900000/charlotte-ayumi-otosaka-charlotte-anime-40994003-540-304.gif`);
      return message.channel.send(chrembed);
    }
    if(result === 1) {
      let chricon = message.author.displayAvatarURL;
      let chrembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is cheering!`, chricon)
      .setImage (`https://data.whicdn.com/images/217035852/original.gif`);
      return message.channel.send(chrembed);
    }
    if(result === 2) {
      let chricon = message.author.displayAvatarURL;
      let chrembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is cheering!`, chricon)
      .setImage (`https://media1.tenor.com/images/ee3db779e9badce9be497e5a4b7773b9/tenor.gif?itemid=9586002`);
      return message.channel.send(chrembed);
    }
    if(result === 3) {
      let chricon = message.author.displayAvatarURL;
      let chrembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is cheering!`, chricon)
      .setImage (`https://media.giphy.com/media/VgClqfxi2w1KU/giphy.gif`);
      return message.channel.send(chrembed);
    }
    if(result === 4) {
      let chricon = message.author.displayAvatarURL;
      let chrembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is cheering!`, chricon)
      .setImage (`https://media.giphy.com/media/DosBpXRDhrpDi/giphy.gif`);
      return message.channel.send(chrembed);
    }
  }
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} is cheering about something really good they've just done! ☺️***`);

  let replies = ["0", "1", "2", "3", "4"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    let chricon = message.author.displayAvatarURL;
    let chrembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Cheer 🙌", chricon)
    .setDescription(`***${message.author.username} is cheering for ${rUser.user.username}.***\n🎉`)
    .setImage (`http://images6.fanpop.com/image/photos/40900000/charlotte-ayumi-otosaka-charlotte-anime-40994003-540-304.gif`);
    return message.channel.send(chrembed);
  }
  if(result === 1) {
    let chricon = message.author.displayAvatarURL;
    let chrembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Cheer 🙌", chricon)
    .setDescription(`***${message.author.username} is cheering for ${rUser.user.username}.***\n🎉`)
    .setImage (`https://data.whicdn.com/images/217035852/original.gif`);
    return message.channel.send(chrembed);
  }
  if(result === 2) {
    let chricon = message.author.displayAvatarURL;
    let chrembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Cheer 🙌", chricon)
    .setDescription(`***${message.author.username} is cheering for ${rUser.user.username}.***\n🎉`)
    .setImage (`https://media1.tenor.com/images/ee3db779e9badce9be497e5a4b7773b9/tenor.gif?itemid=9586002`);
    return message.channel.send(chrembed);
  }
  if(result === 3) {
    let chricon = message.author.displayAvatarURL;
    let chrembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Cheer 🙌", chricon)
    .setDescription(`***${message.author.username} is cheering for ${rUser.user.username}.***\n🎉`)
    .setImage (`https://media.giphy.com/media/VgClqfxi2w1KU/giphy.gif`);
    return message.channel.send(chrembed);
  }
  if(result === 4) {
    let chricon = message.author.displayAvatarURL;
    let chrembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Cheer 🙌", chricon)
    .setDescription(`***${message.author.username} is cheering for ${rUser.user.username}.***\n🎉`)
    .setImage (`https://media.giphy.com/media/DosBpXRDhrpDi/giphy.gif`);
    return message.channel.send(chrembed);
  }
}

module.exports.help = {
  name: "cheer"
}
