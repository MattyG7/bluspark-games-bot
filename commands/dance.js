const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!args[0]) {
    let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
    let result = Math.floor((Math.random() * replies.length));

    if(result === 0) {
      let dncicon = message.author.displayAvatarURL;
      let dncembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is dancing!`, dncicon)
      .setImage (`https://media1.tenor.com/images/e87bc763c55a4a39272926007126961e/tenor.gif?itemid=10596689`);
      return message.channel.send(dncembed);
    }
    if(result === 1) {
      let dncicon = message.author.displayAvatarURL;
      let dncembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is dancing!`, dncicon)
      .setImage (`https://media.giphy.com/media/11lxCeKo6cHkJy/giphy.gif`);
      return message.channel.send(dncembed);
    }
    if(result === 2) {
      let dncicon = message.author.displayAvatarURL;
      let dncembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is dancing...with guns?!`, dncicon)
      .setImage (`https://media.giphy.com/media/YvFgC6XIFwtrO/giphy.gif`);
      return message.channel.send(dncembed);
    }
    if(result === 3) {
      let dncicon = message.author.displayAvatarURL;
      let dncembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is dancing!`, dncicon)
      .setImage (`https://media.giphy.com/media/aRjlzL31lrWDe/giphy.gif`);
      return message.channel.send(dncembed);
    }
    if(result === 4) {
      let dncicon = message.author.displayAvatarURL;
      let dncembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is quite a cute dancer!`, dncicon)
      .setImage (`https://media.giphy.com/media/vSvRjXnAVRNHG/giphy.gif`);
      return message.channel.send(dncembed);
    }
    if(result === 5) {
      let dncicon = message.author.displayAvatarURL;
      let dncembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is dancing!`, dncicon)
      .setImage (`https://media.giphy.com/media/1jgLDGD1Bn27e/giphy.gif`);
      return message.channel.send(dncembed);
    }
    if(result === 6) {
      let dncicon = message.author.displayAvatarURL;
      let dncembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is dancing!`, dncicon)
      .setImage (`https://media1.tenor.com/images/766599022416cc0b7b7b1bd2040eb2db/tenor.gif?itemid=12039886`);
      return message.channel.send(dncembed);
    }
    if(result === 7) {
      let dncicon = message.author.displayAvatarURL;
      let dncembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is dancing!`, dncicon)
      .setImage (`https://tenor.com/view/anime-dance-cute-girl-gif-11983564`);
      return message.channel.send(dncembed);
    }
    if(result === 8) {
      let dncicon = message.author.displayAvatarURL;
      let dncembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is dancing!`, dncicon)
      .setImage (`https://media1.tenor.com/images/0884bb89a026d49791aa404008843108/tenor.gif?itemid=12793536`);
      return message.channel.send(dncembed);
    }
  }
  let rUser = message.mentions.members.first();
  if(args[0] && !rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} is laughing at themself. Everyone, back away slowly...***`);

  let replies = ["0", "1", "2", "3", "4", "5"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    let dncicon = message.author.displayAvatarURL;
    let dncembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Dance 💃", dncicon)
    .setDescription(`***${message.author.username} is dancing with ${rUser.user.username}.***\nGreat moves! 👏`)
    .setImage (`https://media.giphy.com/media/3JZ6Y8LxAr1Cn6Hutt/giphy.gif`);
    return message.channel.send(dncembed);
  }
  if(result === 1) {
    let dncicon = message.author.displayAvatarURL;
    let dncembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Dance 💃", dncicon)
    .setDescription(`***${message.author.username} is caramell dancing with ${rUser.user.username}.***\nGreat moves! 👏`)
    .setImage (`https://media.giphy.com/media/euMGM3uD3NHva/giphy.gif`);
    return message.channel.send(dncembed);
  }
  if(result === 2) {
    let dncicon = message.author.displayAvatarURL;
    let dncembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Dance 💃", dncicon)
    .setDescription(`***${message.author.username} is caramell dancing with ${rUser.user.username}.***\nGreat moves! 👏`)
    .setImage (`https://media.giphy.com/media/4MdNUZqf4ez28/giphy.gif`);
    return message.channel.send(dncembed);
  }
  if(result === 3) {
    let dncicon = message.author.displayAvatarURL;
    let dncembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Dance 💃", dncicon)
    .setDescription(`***${message.author.username} is dancing with ${rUser.user.username}.***\nGreat moves! 👏`)
    .setImage (`https://media.giphy.com/media/PYOrLJ8no4Mhy/giphy.gif`);
    return message.channel.send(dncembed);
  }
  if(result === 4) {
    let dncicon = message.author.displayAvatarURL;
    let dncembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Dance 💃", dncicon)
    .setDescription(`***${message.author.username} is dancing with ${rUser.user.username}.***\nGreat moves! 👏`)
    .setImage (`https://media.giphy.com/media/10GINnQzE6bTqg/giphy.gif`);
    return message.channel.send(dncembed);
  }
  if(result === 5) {
    let dncicon = message.author.displayAvatarURL;
    let dncembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Dance 💃", dncicon)
    .setDescription(`***${message.author.username} is dancing with ${rUser.user.username}.***\nGreat moves! 👏`)
    .setImage (`https://media.giphy.com/media/BxOoraoIwYdG/giphy.gif`);
    return message.channel.send(dncembed);
  }
}

module.exports.help = {
  name: "dance"
}
