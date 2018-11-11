const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!args[0]) {
    let replies = ["0", "1", "2", "3", "4", "5"];
    let result = Math.floor((Math.random() * replies.length));

    if(result === 0) {
      let brdicon = message.author.displayAvatarURL;
      let brdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is bored.`, brdicon)
      .setImage (`https://media.tenor.com/images/fe42bcedb6118731aaf056e493556d3f/tenor.gif`);
      return message.channel.send(brdembed);
    }
    if(result === 1) {
      let brdicon = message.author.displayAvatarURL;
      let brdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is bored.`, brdicon)
      .setImage (`https://media.tenor.com/images/17041af42b27ba6a8e27d9377fb5f874/tenor.gif`);
      return message.channel.send(brdembed);
    }
    if(result === 2) {
      let brdicon = message.author.displayAvatarURL;
      let brdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is bored.`, brdicon)
      .setImage (`https://media1.tenor.com/images/9874a8b8dfaa4131dadce066842fc006/tenor.gif?itemid=8053555`);
      return message.channel.send(brdembed);
    }
    if(result === 3) {
      let brdicon = message.author.displayAvatarURL;
      let brdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is bored.`, brdicon)
      .setImage (`https://66.media.tumblr.com/c501c83f8b23b56d0c8ed817bf28313e/tumblr_ob0xuy30P51ufdoz0o1_500.gif`);
      return message.channel.send(brdembed);
    }
    if(result === 4) {
      let brdicon = message.author.displayAvatarURL;
      let brdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is bored.`, brdicon)
      .setImage (`https://66.media.tumblr.com/fdd80d8a03b7c618504dbf58ac283a64/tumblr_p7dc5qzkVF1wft4qpo1_500.gif`);
      return message.channel.send(brdembed);
    }
    if(result === 5) {
      let brdicon = message.author.displayAvatarURL;
      let brdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is bored.`, brdicon)
      .setImage (`https://nerdultlife.files.wordpress.com/2015/06/anigif_optimized-9448-1422918502-1.gif?w=408`);
      return message.channel.send(brdembed);
    }
  }
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} is bored. Someone, talk. 💬***`);

  let replies = ["0", "1", "2", "3", "4", "5"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    let brdicon = message.author.displayAvatarURL;
    let brdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Bored 😴", brdicon)
    .setDescription(`***${rUser.user.username} is boring ${message.author.username}.***\n💤`)
    .setImage (`https://media.tenor.com/images/fe42bcedb6118731aaf056e493556d3f/tenor.gif`);
    return message.channel.send(brdembed);
  }
  if(result === 1) {
    let brdicon = message.author.displayAvatarURL;
    let brdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Bored 😴", brdicon)
    .setDescription(`***${rUser.user.username} is boring ${message.author.username}.***\n💤`)
    .setImage (`https://media.tenor.com/images/17041af42b27ba6a8e27d9377fb5f874/tenor.gif`);
    return message.channel.send(brdembed);
  }
  if(result === 2) {
    let brdicon = message.author.displayAvatarURL;
    let brdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Bored 😴", brdicon)
    .setDescription(`***${rUser.user.username} is boring ${message.author.username}.***\n💤`)
    .setImage (`https://media1.tenor.com/images/9874a8b8dfaa4131dadce066842fc006/tenor.gif?itemid=8053555`);
    return message.channel.send(brdembed);
  }
  if(result === 3) {
    let brdicon = message.author.displayAvatarURL;
    let brdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Bored 😴", brdicon)
    .setDescription(`***${rUser.user.username} is boring ${message.author.username}.***\n💤`)
    .setImage (`https://66.media.tumblr.com/c501c83f8b23b56d0c8ed817bf28313e/tumblr_ob0xuy30P51ufdoz0o1_500.gif`);
    return message.channel.send(brdembed);
  }
  if(result === 4) {
    let brdicon = message.author.displayAvatarURL;
    let brdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Bored 😴", brdicon)
    .setDescription(`***${rUser.user.username} is boring ${message.author.username}.***\n💤`)
    .setImage (`https://66.media.tumblr.com/fdd80d8a03b7c618504dbf58ac283a64/tumblr_p7dc5qzkVF1wft4qpo1_500.gif`);
    return message.channel.send(brdembed);
  }
  if(result === 5) {
    let brdicon = message.author.displayAvatarURL;
    let brdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Bored 😴", brdicon)
    .setDescription(`***${rUser.user.username} is boring ${message.author.username}.***\n💤`)
    .setImage (`https://nerdultlife.files.wordpress.com/2015/06/anigif_optimized-9448-1422918502-1.gif?w=408`);
    return message.channel.send(brdembed);
  }
}

module.exports.help = {
  name: "bored"
}
