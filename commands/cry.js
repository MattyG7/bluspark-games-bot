const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!args[0]) {
    let replies = ["0", "1", "2", "3", "4", "5"];
    let result = Math.floor((Math.random() * replies.length));

    if(result === 0) {
      let cryicon = message.author.displayAvatarURL;
      let cryembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is crying!`, cryicon)
      .setImage (`https://media.giphy.com/media/L95W4wv8nnb9K/giphy.gif`);
      return message.channel.send(cryembed);
    }
    if(result === 1) {
      let cryicon = message.author.displayAvatarURL;
      let cryembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is crying!`, cryicon)
      .setImage (`https://media1.tenor.com/images/3e5ebd2280435f134390c6813ba10bb1/tenor.gif?itemid=11933952`);
      return message.channel.send(cryembed);
    }
    if(result === 2) {
      let cryicon = message.author.displayAvatarURL;
      let cryembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is crying!`, cryicon)
      .setImage (`https://media1.tenor.com/images/44d764c6ffe09bd165643aae33aa98f9/tenor.gif?itemid=7329079`);
      return message.channel.send(cryembed);
    }
    if(result === 3) {
      let cryicon = message.author.displayAvatarURL;
      let cryembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is crying!`, cryicon)
      .setImage (`https://nerdultlife.files.wordpress.com/2015/08/tumblr_mdaindozzf1ryvbtl.gif?w=300&h=225`);
      return message.channel.send(cryembed);
    }
    if(result === 4) {
      let cryicon = message.author.displayAvatarURL;
      let cryembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is crying!`, cryicon)
      .setImage (`https://media.giphy.com/media/s4Yncppaxw95m/giphy.gif`);
      return message.channel.send(cryembed);
    }
    if(result === 5) {
      let cryicon = message.author.displayAvatarURL;
      let cryembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is crying!`, cryicon)
      .setImage (`https://media.giphy.com/media/fUzjkBgLsEnza/giphy.gif`);
      return message.channel.send(cryembed);
    }
  }
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} is crying. Someone, do something! 😭***`);

  let replies = ["0", "1", "2", "3", "4", "5"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    let cryicon = message.author.displayAvatarURL;
    let cryembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Cry 😭", cryicon)
    .setDescription(`***${message.author.username} is crying because of ${rUser.user.username}.***\nThat was mean! 😠`)
    .setImage (`https://media.giphy.com/media/L95W4wv8nnb9K/giphy.gif`);
    return message.channel.send(cryembed);
  }
  if(result === 1) {
    let cryicon = message.author.displayAvatarURL;
    let cryembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Cry 😭", cryicon)
    .setDescription(`***${message.author.username} is crying because of ${rUser.user.username}.***\nThat was mean! 😠`)
    .setImage (`https://media1.tenor.com/images/3e5ebd2280435f134390c6813ba10bb1/tenor.gif?itemid=11933952`);
    return message.channel.send(cryembed);
  }
  if(result === 2) {
    let cryicon = message.author.displayAvatarURL;
    let cryembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Cry 😭", cryicon)
    .setDescription(`***${message.author.username} is crying because of ${rUser.user.username}.***\nThat was mean! 😠`)
    .setImage (`https://media1.tenor.com/images/44d764c6ffe09bd165643aae33aa98f9/tenor.gif?itemid=7329079`);
    return message.channel.send(cryembed);
  }
  if(result === 3) {
    let cryicon = message.author.displayAvatarURL;
    let cryembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Cry 😭", cryicon)
    .setDescription(`***${message.author.username} is crying because of ${rUser.user.username}.***\nThat was mean! 😠`)
    .setImage (`https://nerdultlife.files.wordpress.com/2015/08/tumblr_mdaindozzf1ryvbtl.gif?w=300&h=225`);
    return message.channel.send(cryembed);
  }
  if(result === 4) {
    let cryicon = message.author.displayAvatarURL;
    let cryembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Cry 😭", cryicon)
    .setDescription(`***${message.author.username} is crying because of ${rUser.user.username}.***\nThat was mean! 😠`)
    .setImage (`https://media.giphy.com/media/s4Yncppaxw95m/giphy.gif`);
    return message.channel.send(cryembed);
  }
  if(result === 5) {
    let cryicon = message.author.displayAvatarURL;
    let cryembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Cry 😭", cryicon)
    .setDescription(`***${message.author.username} is crying because of ${rUser.user.username}.***\nThat was mean! 😠`)
    .setImage (`https://media.giphy.com/media/fUzjkBgLsEnza/giphy.gif`);
    return message.channel.send(cryembed);
  }
}

module.exports.help = {
  name: "cry"
}
