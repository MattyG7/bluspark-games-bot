const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (args[0] === "halloween") {
    let replies = ["0", "1", "2"];
    let result = Math.floor((Math.random() * replies.length));

    if(result === 0) {
      return message.channel.send(`Happy Halloween ${message.author.username}! 👻`);
    }
    if(result === 1) {
      return message.channel.send(`Happy Halloween ${message.author.username}! 🎃`);
    }
    if(result === 2) {
      return message.channel.send(`Happy Halloween ${message.author.username}! 🍬`);
    }
  }
  if (args[0] === "xmas") {
    let replies = ["0", "1", "2"];
    let result = Math.floor((Math.random() * replies.length));

    if(result === 0) {
      return message.channel.send(`Merry Christmas ${message.author.username}! 🎄`);
    }
    if(result === 1) {
      return message.channel.send(`Merry Christmas ${message.author.username}! 🎅`);
    }
    if(result === 2) {
      return message.channel.send(`Merry Christmas ${message.author.username}! 🎁`);
    }
  }
  if (args[0] === "christmas") {
    let replies = ["0", "1", "2"];
    let result = Math.floor((Math.random() * replies.length));

    if(result === 0) {
      return message.channel.send(`Merry Christmas ${message.author.username}! 🎄`);
    }
    if(result === 1) {
      return message.channel.send(`Merry Christmas ${message.author.username}! 🎅`);
    }
    if(result === 2) {
      return message.channel.send(`Merry Christmas ${message.author.username}! 🎁`);
    }
  }
  if (args[0] === "birthday") {
    return message.channel.send(`It's not my birthday today ${message.author.username}. Is it yours?`);
  }
  if (!args[0]) {
    let replies = ["0", "1", "2", "3", "4"];
    let result = Math.floor((Math.random() * replies.length));

    if(result === 0) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very happy.`, sdicon)
      .setImage (`https://vignette.wikia.nocookie.net/haganai/images/e/e7/Adf2ad4beacdc63e909a4a590d234dab9ed72d72_hq.gif/revision/latest?cb=20160110085710`);
      return message.channel.send(sdembed);
    }
    if(result === 1) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very happy.`, sdicon)
      .setImage (`https://images6.fanpop.com/image/photos/39300000/GIFs-charlotte-anime-39361286-540-304.gif`);
      return message.channel.send(sdembed);
    }
    if(result === 2) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very happy.`, sdicon)
      .setImage (`https://media1.tenor.com/images/a061f79b2f2c6f250bf08f771e0d4a63/tenor.gif?itemid=4948223`);
      return message.channel.send(sdembed);
    }
    if(result === 3) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very happy.`, sdicon)
      .setImage (`https://media1.tenor.com/images/a36b27630304f230c3307ee8a8e1754b/tenor.gif?itemid=10858303`);
      return message.channel.send(sdembed);
    }
    if(result === 4) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very happy.`, sdicon)
      .setImage (`https://media1.tenor.com/images/4a9282975b440f0f27e8bc6284d7f57e/tenor.gif?itemid=12799731`);
      return message.channel.send(sdembed);
    }
  }
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} is very happy right now!***`);

  let replies = ["0", "1", "2", "3", "4"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Happy 😊", sdicon)
    .setDescription(`***${message.author.username} is happy because of ${rUser.user.username}.***\n😄`)
    .setImage (`https://vignette.wikia.nocookie.net/haganai/images/e/e7/Adf2ad4beacdc63e909a4a590d234dab9ed72d72_hq.gif/revision/latest?cb=20160110085710`);
    return message.channel.send(sdembed);
  }
  if(result === 1) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Happy 😊", sdicon)
    .setDescription(`***${message.author.username} is happy because of ${rUser.user.username}.***\n😄`)
    .setImage (`https://images6.fanpop.com/image/photos/39300000/GIFs-charlotte-anime-39361286-540-304.gif`);
    return message.channel.send(sdembed);
  }
  if(result === 2) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Happy 😊", sdicon)
    .setDescription(`***${message.author.username} is happy because of ${rUser.user.username}.***\n😄`)
    .setImage (`https://media1.tenor.com/images/a061f79b2f2c6f250bf08f771e0d4a63/tenor.gif?itemid=4948223`);
    return message.channel.send(sdembed);
  }
  if(result === 3) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Happy 😊", sdicon)
    .setDescription(`***${message.author.username} is happy because of ${rUser.user.username}.***\n😄`)
    .setImage (`https://media1.tenor.com/images/a36b27630304f230c3307ee8a8e1754b/tenor.gif?itemid=10858303`);
    return message.channel.send(sdembed);
  }
  if(result === 4) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Happy 😊", sdicon)
    .setDescription(`***${message.author.username} is happy because of ${rUser.user.username}.***\n😄`)
    .setImage (`https://media1.tenor.com/images/4a9282975b440f0f27e8bc6284d7f57e/tenor.gif?itemid=12799731`);
    return message.channel.send(sdembed);
  }
}

module.exports.help = {
  name: "happy"
}
