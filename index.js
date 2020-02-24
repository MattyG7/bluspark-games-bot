const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if (jsfile.length <= 0) {
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`)
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});


bot.on("guildMemberAdd", member => {
  console.log(`Someone new has joined the server`);
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("your ~ commands", {type: "LISTENING"});
});


//bot.on("guildMemberAdd", async member => {
//  console.log(`${member.id} joined the server.`);
//  let welcomechannel = member.guild.channels.find(`name`, "welcome");
//  welcomechannel.send(`${member} is back again :/`);
//});
//
//bot.on("guildMemberRemove", async member => {
//  console.log(`${member.id} left the server.`);
//  let welcomechannel = member.guild.channels.find(`name`, "welcome");
//  welcomechannel.send(`${member} is back again :/`);
//});

bot.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = "~";
  let author = "MasterBluspark#0119";
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  //LOAD IN VARIABLES
  //let coins = 100;
  //let level = 0;
  //let xphave = 2;
  //let xptogo = 8;
  //let xpforlvl = 10;
  //-----------------

  if (message.content.startsWith(prefix)) {
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if (commandfile) commandfile.run(bot, message, args, author, messageArray);
  }
  else {
    if (message.channel.name === "rules-and-info") {
      if (message.content.toLowerCase() === "i agree") {
        message.delete()
        console.log(`The new user has agreed to the server's rules and info.`);
        message.member.addRole('New Spark');
        message.author.send("⚡ Welcome to Bluspark Studio's Discord server! I hope you'll find this an enjoyable server to be a member of.\n\n- Master Bluspark");
      }
      else {
        message.channel.send(`Please type **i agree**.`).then(sentMessage => { sentMessage.delete(2000); });
      }
    }
    if (message.content === "Thanks blu" || message.content === "Thank you blu" || message.content === "Thanks bot" || message.content === "Thank you bot") {
      return message.channel.send(`You're welcome.`);
    }
    if (message.content === "Not you" || message.content === "No not you") {
      return message.channel.send(`Oh, sorry! 😅`);
    }
    return;
  }

});
bot.login(process.env.token);
