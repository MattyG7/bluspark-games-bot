const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let replies = ["Angel Beats", "Clannad + Clannad After Story", "Toradora", "Kanon", "Air", "Sword Art Online", "Charlotte"];
  let result = Math.floor((Math.random() * replies.length));

  if (result === 0) {
    let animembed = new Discord.RichEmbed()
    .setTitle(`📺 ${replies[result]}`)
    .setColor("#1fd1c8")
    .setImage("https://vignette.wikia.nocookie.net/angelbeats/images/a/a3/Sssbattlefrontova.jpg/revision/latest?cb=20110814040417");
    return message.channel.send(animembed);
  }
  if (result === 1) {
    let animembed = new Discord.RichEmbed()
    .setTitle(`📺 ${replies[result]}`)
    .setColor("#1fd1c8")
    .setImage("http://images6.fanpop.com/image/photos/35800000/Clannad-clannad-35871135-1600-900.jpg");
    return message.channel.send(animembed);
  }
  if (result === 2) {
    let animembed = new Discord.RichEmbed()
    .setTitle(`📺 ${replies[result]}`)
    .setColor("#1fd1c8")
    .setImage("https://anime.astronerdboy.com/wp-content/uploads/blogger/_abkMP58OLUA/ScvvINLiWNI/AAAAAAAAMhQ/xAE4ijkaMlk/s1600/x3a+Taiga+Ryuuji+picture.jpg");
    //.setImage("https://anime.astronerdboy.com/wp-content/uploads/blogger/_abkMP58OLUA/ScvvH36DjbI/AAAAAAAAMg4/dcE5GQVZ2hU/s1600/05+Taiga.jpg");
    return message.channel.send(animembed);
  }
  if (result === 3) {
    let animembed = new Discord.RichEmbed()
    .setTitle(`📺 ${replies[result]}`)
    .setColor("#1fd1c8")
    .setImage("https://itadakimasuanime.files.wordpress.com/2014/02/kanon-2006.png");
    return message.channel.send(animembed);
  }
  if (result === 4) {
    let animembed = new Discord.RichEmbed()
    .setTitle(`📺 ${replies[result]}`)
    .setColor("#1fd1c8")
    .setImage("https://2.bp.blogspot.com/-qFkz7Cf5Pq4/WHutyYKR2JI/AAAAAAAAO8I/0Wxf2aMHOy8waCV-HfV7ycijal6iuSdBQCLcB/s1600/air01-05m55s.png");
    return message.channel.send(animembed);
  }
  if (result === 5) {
    let animembed = new Discord.RichEmbed()
    .setTitle(`📺 ${replies[result]}`)
    .setColor("#1fd1c8")
    .setImage("https://vignette.wikia.nocookie.net/swordartonline/images/6/60/Sword_Art_Online_-_06_-_Large_26.png/revision/latest?cb=20140328035614");
    return message.channel.send(animembed);
  }
  if (result === 6) {
    let animembed = new Discord.RichEmbed()
    .setTitle(`📺 ${replies[result]}`)
    .setColor("#1fd1c8")
    .setImage("https://vignette.wikia.nocookie.net/animevice/images/5/5a/Yu_and_Ayumi_%28Charlotte_Ep_05%29.jpg/revision/latest?cb=20150830053332");
    return message.channel.send(animembed);
  }
}

module.exports.help = {
  name: "anime"
}
