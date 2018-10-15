const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let coins = 100;
  let level = 0;
  let xphave = 2;
  let xptogo = 8;
  let xpforlvl = 10;
  let col = "005884";                                                   //1
  let web = "masterbluspark.wixsite.com/blusparkstudio";                //2
  let yt = "youtube.com/c/masterbluspark";                              //3
  let tw = "MasterBLUspark";                                            //4
  let lo = "UK";                                                        //5

  //------------------------------------------------------------------ NONE SET
  if (!args[0]) {
    let picon = message.author.displayAvatarURL;
    let pembed = new Discord.RichEmbed()
    .setTitle(`⚡ ${message.author.username}'s Profile`)
    .setColor("#1fd1c8")
    .setThumbnail(`${picon}`)
    .addField("Money", `${coins}`, false)
    .addField("Level", `${level}`, true)
    .addField("XP", `${xphave}/${xpforlvl}`, true)
    .addBlankField(false)
    .addField("Discord Tag", `${message.author}`);
    return message.channel.send(pembed);
  }
  //------------------------------------------------------------------ 1
  if (args[0] === "1" && !args[1] && !args[2] && !args[3] && !args[4]) {
    let picon = message.author.displayAvatarURL;
    let pembed = new Discord.RichEmbed()
    .setTitle(`⚡ ${message.author.username}'s Profile`)
    .setColor(`#${col}`)
    .setThumbnail(`${picon}`)
    .addField("Money", `${coins}`, false)
    .addField("Level", `${level}`, true)
    .addField("XP", `${xphave}/${xpforlvl}`, true)
    .addBlankField(false)
    .addField("Discord Tag", `${message.author}`);
    return message.channel.send(pembed);
  }
  //------------------------------------------------------------------ 2
  if (args[0] === "2" && !args[1] && !args[2] && !args[3] && !args[4]) {
    let picon = message.author.displayAvatarURL;
    let pembed = new Discord.RichEmbed()
    .setTitle(`⚡ ${message.author.username}'s Profile`)
    .setColor("#1fd1c8")
    .setThumbnail(`${picon}`)
    .addField("Money", `${coins}`, false)
    .addField("Level", `${level}`, true)
    .addField("XP", `${xphave}/${xpforlvl}`, true)
    .addBlankField(false)
    .addField("Discord Tag", `${message.author}`)
    .setFooter(`🌐 ${web}`);
    return message.channel.send(pembed);
  }
  //------------------------------------------------------------------ 2
  if (args[0] === "3" && !args[1] && !args[2] && !args[3] && !args[4]) {
    let picon = message.author.displayAvatarURL;
    let pembed = new Discord.RichEmbed()
    .setTitle(`⚡ ${message.author.username}'s Profile`)
    .setColor("#1fd1c8")
    .setThumbnail(`${picon}`)
    .addField("Money", `${coins}`, false)
    .addField("Level", `${level}`, true)
    .addField("XP", `${xphave}/${xpforlvl}`, true)
    .addBlankField(false)
    .addField("Discord Tag", `${message.author}`, true)
    .setFooter(`📹 ${yt}`);
    return message.channel.send(pembed);
  }
  //------------------------------------------------------------------ 4
  if (args[0] === "4" && !args[1] && !args[2] && !args[3] && !args[4]) {
    let picon = message.author.displayAvatarURL;
    let pembed = new Discord.RichEmbed()
    .setTitle(`⚡ ${message.author.username}'s Profile`)
    .setColor("#1fd1c8")
    .setThumbnail(`${picon}`)
    .addField("Money", `${coins}`, false)
    .addField("Level", `${level}`, true)
    .addField("XP", `${xphave}/${xpforlvl}`, true)
    .addBlankField(false)
    .addField("Discord Tag", `${message.author}`, true)
    .setFooter(`🐦 @${tw}`);
    return message.channel.send(pembed);
  }
  //------------------------------------------------------------------ 5
  if (args[0] === "5" && !args[1] && !args[2] && !args[3] && !args[4]) {
    let picon = message.author.displayAvatarURL;
    let pembed = new Discord.RichEmbed()
    .setTitle(`⚡ ${message.author.username}'s Profile`)
    .setColor("#1fd1c8")
    .setThumbnail(`${picon}`)
    .addField("Money", `${coins}`, false)
    .addField("Level", `${level}`, true)
    .addField("XP", `${xphave}/${xpforlvl}`, true)
    .addBlankField(false)
    .addField("Discord Tag", `${message.author}`, true)
    .setFooter(`🌍 ${lo}`);
    return message.channel.send(pembed);
  }
  if (args[0] === "1" && args[1] === "2" && !args[2] && !args[3] && !args[4]) {
    let picon = message.author.displayAvatarURL;
    let pembed = new Discord.RichEmbed()
    .setTitle(`⚡ ${message.author.username}'s Profile`)
    .setColor(`#${col}`)
    .setThumbnail(`${picon}`)
    .addField("Money", `${coins}`, false)
    .addField("Level", `${level}`, true)
    .addField("XP", `${xphave}/${xpforlvl}`, true)
    .addBlankField(false)
    .addField("Discord Tag", `${message.author}`, true)
    .setFooter(`🌐 ${web} || 📹 ${yt} || 🐦 @${tw} || 🌍 ${lo}`);
    return message.channel.send(pembed);
  }
  if (args[0] === "1" && args[1] === "3" && !args[2] && !args[3] && !args[4]) {
    let picon = message.author.displayAvatarURL;
    let pembed = new Discord.RichEmbed()
    .setTitle(`⚡ ${message.author.username}'s Profile`)
    .setColor(`#${col}`)
    .setThumbnail(`${picon}`)
    .addField("Money", `${coins}`, false)
    .addField("Level", `${level}`, true)
    .addField("XP", `${xphave}/${xpforlvl}`, true)
    .addBlankField(false)
    .addField("Discord Tag", `${message.author}`, true)
    .setFooter(`🌐 ${web} || 📹 ${yt} || 🐦 @${tw} || 🌍 ${lo}`);
    return message.channel.send(pembed);
  }
  if (args[0] === "1" && args[1] === "4" && !args[2] && !args[3] && !args[4]) {
    let picon = message.author.displayAvatarURL;
    let pembed = new Discord.RichEmbed()
    .setTitle(`⚡ ${message.author.username}'s Profile`)
    .setColor(`#${col}`)
    .setThumbnail(`${picon}`)
    .addField("Money", `${coins}`, false)
    .addField("Level", `${level}`, true)
    .addField("XP", `${xphave}/${xpforlvl}`, true)
    .addBlankField(false)
    .addField("Discord Tag", `${message.author}`, true)
    .setFooter(`🌐 ${web} || 📹 ${yt} || 🐦 @${tw} || 🌍 ${lo}`);
    return message.channel.send(pembed);
  }
  if (args[0] === "1" && args[1] === "2" && args[2] === "3" && !args[3] && !args[4]) {
    let picon = message.author.displayAvatarURL;
    let pembed = new Discord.RichEmbed()
    .setTitle(`⚡ ${message.author.username}'s Profile`)
    .setColor(`#${col}`)
    .setThumbnail(`${picon}`)
    .addField("Money", `${coins}`, false)
    .addField("Level", `${level}`, true)
    .addField("XP", `${xphave}/${xpforlvl}`, true)
    .addBlankField(false)
    .addField("Discord Tag", `${message.author}`, true)
    .setFooter(`🌐 ${web} || 📹 ${yt} || 🐦 @${tw} || 🌍 ${lo}`);
    return message.channel.send(pembed);
  }
  if (args[0] === "1" && args[1] === "2" && args[2] === "4" && !args[3] && !args[4]) {
    let picon = message.author.displayAvatarURL;
    let pembed = new Discord.RichEmbed()
    .setTitle(`⚡ ${message.author.username}'s Profile`)
    .setColor(`#${col}`)
    .setThumbnail(`${picon}`)
    .addField("Money", `${coins}`, false)
    .addField("Level", `${level}`, true)
    .addField("XP", `${xphave}/${xpforlvl}`, true)
    .addBlankField(false)
    .addField("Discord Tag", `${message.author}`, true)
    .setFooter(`🌐 ${web} || 📹 ${yt} || 🐦 @${tw} || 🌍 ${lo}`);
    return message.channel.send(pembed);
  }
  if (args[0] === "1" && !args[1] && !args[2] && args[3] === "4" && !args[4]) {
    let picon = message.author.displayAvatarURL;
    let pembed = new Discord.RichEmbed()
    .setTitle(`⚡ ${message.author.username}'s Profile`)
    .setColor(`#${col}`)
    .setThumbnail(`${picon}`)
    .addField("Money", `${coins}`, false)
    .addField("Level", `${level}`, true)
    .addField("XP", `${xphave}/${xpforlvl}`, true)
    .addBlankField(false)
    .addField("Discord Tag", `${message.author}`, true)
    .setFooter(`🌐 ${web} || 📹 ${yt} || 🐦 @${tw} || 🌍 ${lo}`);
    return message.channel.send(pembed);
  }
  if (args[0] === "1" && args[1] === "2" && !args[2] && args[3] === "4" && !args[4]) {
    let picon = message.author.displayAvatarURL;
    let pembed = new Discord.RichEmbed()
    .setTitle(`⚡ ${message.author.username}'s Profile`)
    .setColor(`#${col}`)
    .setThumbnail(`${picon}`)
    .addField("Money", `${coins}`, false)
    .addField("Level", `${level}`, true)
    .addField("XP", `${xphave}/${xpforlvl}`, true)
    .addBlankField(false)
    .addField("Discord Tag", `${message.author}`, true)
    .setFooter(`🌐 ${web} || 📹 ${yt} || 🐦 @${tw} || 🌍 ${lo}`);
    return message.channel.send(pembed);
  }
  if (args[0] === "1" && !args[1] && args[2] === "3" && args[3] === "4" && !args[4]) {
    let picon = message.author.displayAvatarURL;
    let pembed = new Discord.RichEmbed()
    .setTitle(`⚡ ${message.author.username}'s Profile`)
    .setColor(`#${col}`)
    .setThumbnail(`${picon}`)
    .addField("Money", `${coins}`, false)
    .addField("Level", `${level}`, true)
    .addField("XP", `${xphave}/${xpforlvl}`, true)
    .addBlankField(false)
    .addField("Discord Tag", `${message.author}`, true)
    .setFooter(`🌐 ${web} || 📹 ${yt} || 🐦 @${tw} || 🌍 ${lo}`);
    return message.channel.send(pembed);
  }
  if (args[0] === "1" && args[1] === "2" && !args[2] && args[3] === "4" && !args[4]) {
    let picon = message.author.displayAvatarURL;
    let pembed = new Discord.RichEmbed()
    .setTitle(`⚡ ${message.author.username}'s Profile`)
    .setColor(`#${col}`)
    .setThumbnail(`${picon}`)
    .addField("Money", `${coins}`, false)
    .addField("Level", `${level}`, true)
    .addField("XP", `${xphave}/${xpforlvl}`, true)
    .addBlankField(false)
    .addField("Discord Tag", `${message.author}`, true)
    .setFooter(`🌐 ${web} || 📹 ${yt} || 🐦 @${tw} || 🌍 ${lo}`);
    return message.channel.send(pembed);
  }





  if (args[0] === "1" && args[1] === "2" && args[2] === "3" && args[3] === "4" && args[4] === "5") {
    let picon = message.author.displayAvatarURL;
    let pembed = new Discord.RichEmbed()
    .setTitle(`⚡ ${message.author.username}'s Profile`)
    .setColor(`#${col}`)
    .setThumbnail(`${picon}`)
    .addField("Money", `${coins}`, false)
    .addField("Level", `${level}`, true)
    .addField("XP", `${xphave}/${xpforlvl}`, true)
    .addBlankField(false)
    .addField("Discord Tag", `${message.author}`, true)
    .setFooter(`🌐 ${web} || 📹 ${yt} || 🐦 @${tw} || 🌍 ${lo}`);
    return message.channel.send(pembed);
  }
}

module.exports.help = {
  name: "p"
}
