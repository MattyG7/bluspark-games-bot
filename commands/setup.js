const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  //let col =
  //let cntry =
  //let tw =
  //let yt =


  if(!args[0]) {
    let col = "*[6charhexcolour]*";
    let web = "*[websiteurl]*";
    let yt = "*[youtubechannelurl]*";
    let tw = "*[twitterusername]*";
    let lo = "*[country]*";
    let setupicon = message.author.displayAvatarURL;
    let setupembed = new Discord.RichEmbed()
    .setAuthor(`Profile Setup`, setupicon)
    .setColor("#1fd1c8")
    .addField("Profile Colour (use hex codes only and don't include the #)", `~setup col ${col}`)
    .addField("Website (remove 'https://www.' from the url)", `~setup web ${web}`)
    .addField("YouTube Channel (remove 'https://www.' from the url)", `~setup yt ${yt}`)
    .addField("Twitter (don't include the @)", `~setup tw ${tw}`)
    .addField("Location (country)", `~setup lo ${lo}`);
    return message.channel.send(setupembed);
  }
  let words = args.slice(0).join(" ");



}

module.exports.help = {
  name: "setup"
}
