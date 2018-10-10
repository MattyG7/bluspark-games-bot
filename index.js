const botconfig = require("botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  //bot.user.setGame("games on Discord");
  //bot.user.setActivity("games on Discord", {type: "PLAYING"});
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

  let prefix = botconfig.prefix;
  let author = "MasterBluspark#0119";
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let coins = 100;
  let level = 0;
  let xphave = 2;
  let xptogo = 8;
  let xpforlvl = 10;

  //CLEAR--------------------------------------------------------
  if (cmd === `${prefix}clear`) {
    if (message.member.user.tag !== author) return message.channel.send("🚫 You're not allowed to use this command!");
    if (message.member.user.tag === author) {
      if (args[0] === "1") {
        message.channel.bulkDelete(args[0]).then(() => {
          return message.channel.send(`${args[0]} message cleared.`);
        });
      }
      else {
        message.channel.bulkDelete(args[0]).then(() => {
          return message.channel.send(`${args[0]} messages cleared.`);
        });
      }
    }
  }
  //-------------------------------------------------------------

  //STEAL--------------------------------------------------------
  if (cmd === `${prefix}steal`) {
    if (message.member.user.tag !== author) return message.channel.send("🚫 You're not allowed to use this command!");
    if(messageArray.length === 1) return message.channel.send("Please state a person you'd like to steal from and define an amount you'd like to steal.");
    let rUser = message.mentions.members.first();
    if(!rUser) return message.channel.send(`User not found! 😕`);
    if(rUser.id === message.author.id) return message.channel.send("🚫 You can't steal money from yourself!");
    if(messageArray.length < 3) return message.channel.send("Please define an amount you'd like to steal.");
    if(isNaN(args[2])) return message.channel.send("Please use a number!");
    if (message.member.user.tag === author) {
      let sicon = message.author.displayAvatarURL;
      let stlembed = new Discord.RichEmbed()
      .setAuthor("Steal 💸", sicon)
      .setColor("#1fd1c8")
      .setDescription(`${message.author.username} stole ${args[1]} SparkCoins from ${args[0]}.`);
      message.channel.send(stlembed);
    }
    //if (message.mentions.channels.first()) return message.channel.send("🚫 You can't steal money from yourself!");
  }
  //-------------------------------------------------------------

  //BOT INFO-----------------------------------------------------
  if (cmd === `${prefix}botinfo`) {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("**Bot Info:**")
    .setColor("#1fd1c8")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Date Created", bot.user.createdAt)
    .addField("Created By", author);
    return message.channel.send(botembed);
  }
  //-------------------------------------------------------------

  //SERVER INFO--------------------------------------------------
  if (cmd === `${prefix}serverinfo`) {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("**Server Info:**")
    .setColor("#1fd1c8")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Date Created", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);
    return message.channel.send(serverembed);
  }
  //-------------------------------------------------------------

  //HELP---------------------------------------------------------
  if (cmd === `${prefix}oldhelp`) {
    return message.channel.send("You want help? lol... Tough! :P");
  }
  if (cmd === `${prefix}help`) {
    let helpembed = new Discord.RichEmbed()
    .setDescription("**Commands:**")
    .setColor("#1fd1c8")
    .addField("Profile Stuff", "`profile, wallet, level`", )
    .addField("Greets", "`hello, hi, hey, goodbye, bye, goodnight, night`")
    .addField("Other Phrases", "`ilikeyou, iloveyou, ihateyou`")
    .addField("Actions", "`poke, punch, kill, greet, slap, lick, pinch, pat, hug, kiss, snog, eat, stickouttongue, sad, cry, laugh`")
    .addField("Games", "`flip, roll, bowl, penalty`")
    .addField("Fun", "`8ball, flip, roll, bowl, penalty, say, sing`")
    .addField("Admin Only", "`clear, steal`")
    .addField("------------------", "------------------")
    .addField("***For examples***", "*type ~helpx*");
    return message.channel.send(helpembed);
  }
  if (cmd === `${prefix}helpx`) {
    let helpxembed = new Discord.RichEmbed()
    .setDescription("**Command Examples:**")
    .setColor("#1fd1c8")
    .addField("Profile Stuff", "~profile")
    .addField("Greets", "~hello")
    .addField("Other Phrases", "~ilikeyou")
    .addField("Actions", "~hug @*INSERTNAMEHERE*")
    .addField("Games", "~flip heads 20 | ~roll 6 20 (please note that the order is Dice Number and then Money Amount) | ~bowl 20 | ~penalty 20")
    .addField("Fun", "~8ball is grass green | ~flip | ~roll | ~bowl | ~penalty | ~say words go here | ~sing")
    .addField("Admin Only", "~clear 1 | ~steal @*INSERTNAMEHERE* 100");
    return message.channel.send(helpxembed);
  }
  //-------------------------------------------------------------

  //:pkc:
  //PROFILE--------------------------------------------------------------------
  if (cmd === `${prefix}profile` || cmd === `${prefix}p`) {
    let picon = message.author.displayAvatarURL;
    let pembed = new Discord.RichEmbed()
    .setTitle(`⚡ ${message.author.username}'s Profile`)
    .setColor("#1fd1c8")
    .setThumbnail(`${picon}`)
    .addField("Money", `${coins}`)
    .addField("Level", `${level} (${xphave}/${xpforlvl})`)
    .addField("Discord Tag", `${message.author}`);
    return message.channel.send(pembed);
  }
  //-------------------------------------------------------------
  //WALLET-------------------------------------------------------
  if (cmd === `${prefix}wallet` || cmd === `${prefix}money` || cmd === `${prefix}credit` || cmd === `${prefix}w` || cmd === `${prefix}m` || cmd === `${prefix}c`) {
    //let wicon = message.author.avatarURL;
    let wlltembed = new Discord.RichEmbed()
    .setTitle(`💳 ${message.author.username}'s Wallet`)
    .setColor("#1fd1c8")
    //.setThumbnail(wicon)
    .setDescription(`You have ${coins} SparkCoins.`);
    return message.channel.send(wlltembed);
  }
  //-------------------------------------------------------------
  //LEVEL--------------------------------------------------------
  if (cmd === `${prefix}level` || cmd === `${prefix}lvl` || cmd === `${prefix}xp` || cmd === `${prefix}exp`) {
    //let xpicon = message.author.avatarURL;
    let wlltembed = new Discord.RichEmbed()
    .setTitle(`🎮 ${message.author.username}'s Level`)
    .setColor("#1fd1c8")
    //.setThumbnail(xpicon)
    .setDescription(`You are Level ${level} and have ${xptogo}XP to go until you level up!`);
    return message.channel.send(wlltembed);
  }
  //---------------------------------------------------------------------------

  //GREETS-------------------------------------------------------
  if (cmd === `${prefix}hello`) {
    return message.channel.send(`Hello ${message.author.username}`);
  }
  if (cmd === `${prefix}hi`) {
    return message.channel.send(`Hi ${message.author.username}`);
  }
  if (cmd === `${prefix}hey`) {
    return message.channel.send(`Hey ${message.author.username}`);
  }
  if (cmd === `${prefix}goodbye`) {
    return message.channel.send(`Goodbye ${message.author.username}`);
  }
  if (cmd === `${prefix}bye`) {
    return message.channel.send(`Bye ${message.author.username}`);
  }
  if (cmd === `${prefix}goodnight`) {
    return message.channel.send(`Goodnight ${message.author.username}. I hope you have nightmares. ;)`);
  }
  if (cmd === `${prefix}night`) {
    return message.channel.send(`Night ${message.author.username}. zZzZ`);
  }
  if (cmd === `${prefix}ilikeyou`) {
    return message.channel.send("I like you too...I think.");
  }
  if (cmd === `${prefix}iloveyou`) {
    return message.channel.send("I'm just a bot though...");
  }
  if (cmd === `${prefix}ihateyou`) {
    return message.channel.send("What have I done?!");
  }
  //-------------------------------------------------------------


  //ACTIONS------------------------------------------------------////////////////
  //POKE---------------------------------------------------------
  //let pokeuser = message.mentions.members.first()
  //if (messageArray[2] === message.mentions.members) {
  if (cmd === `${prefix}poke`) {
    //let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let rUser = message.mentions.members.first();
    if(!rUser) return message.channel.send(`User not found! 😕`);
    if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} poked themself, lol.***`);

    let pkicon = message.author.displayAvatarURL;
    let pkembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Poke 👉", pkicon)
    .setDescription(`***${message.author.username} poked ${rUser.user.username}.***\nDid that tickle? 😆`)
    //.addField(`*${message.author} poked ${rUser}!*`, aicon)
    .setImage (`https://media.giphy.com/media/3x5nIjlszTBQs/giphy.gif`);
    //.setDescription(`${message.guild.username} poked ${rUser}.\nlolz`);
    //return message.channel.send(`${message.member.username} poked ${rUser}.\nlolz`);
    return message.channel.send(pkembed);
  }
  //-------------------------------------------------------------
  //PUNCH---------------------------------------------------------
  if (cmd === `${prefix}punch`) {
    let rUser = message.mentions.members.first();
    if(!rUser) return message.channel.send(`User not found! 😕`);
    if(rUser.id === message.author.id) return message.channel.send(`***No! Don't hurt yourself, ${message.author.username}.***`);

    let pnchicon = message.author.displayAvatarURL;
    let pnchembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Punch 👊", pnchicon)
    .setDescription(`***${message.author.username} punched ${rUser.user.username}!***\nOuch...I bet that hurt. 😬`)
    .setImage (`https://vignette.wikia.nocookie.net/simpsons/images/4/4c/Lisa_eyed_punch.gif`);
    return message.channel.send(pnchembed);
  }
  //-------------------------------------------------------------
  //KILL---------------------------------------------------------
  if (cmd === `${prefix}kill`) {
    let rUser = message.mentions.members.first();
    if(!rUser) return message.channel.send(`User not found! 😕`);
    if(rUser.id === message.author.id) return message.channel.send(`***You can't do that, ${message.author.username}!***`);

    let kllicon = message.author.displayAvatarURL;
    let kllembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Kill 👼", kllicon)
    //.setDescription(`***${rUser} got wasted!***\n... 😧`)
    .setDescription(`***${rUser.user.username} got wasted!***\n... 😨`)
    .setImage (`https://media.giphy.com/media/N5PV3ZtZkvFks/giphy.gif`);
    return message.channel.send(kllembed);
  }
  //-------------------------------------------------------------
  //GREET--------------------------------------------------------
  if (cmd === `${prefix}greet`) {
    let rUser = message.mentions.members.first();
    if(!rUser) return message.channel.send(`User not found! 😕`);
    if(rUser.id === message.author.id) return message.channel.send(`***Aww. Are you alone, ${message.author.username}?***`);

    let grticon = message.author.displayAvatarURL;
    let grtembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Greet 👋", grticon)
    .setDescription(`***${message.author.username} greeted ${rUser.user.username}.***\n😄`)
    .setImage (`https://media.giphy.com/media/fGHjOa7MC2J56/giphy.gif`);
    return message.channel.send(grtembed);
  }
  //-------------------------------------------------------------
  //SLAP---------------------------------------------------------
  if (cmd === `${prefix}slap`) {
    let rUser = message.mentions.members.first();
    if(!rUser) return message.channel.send(`User not found! 😕`);
    if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} now has a sore red hand mark...***`);

    let slpicon = message.author.displayAvatarURL;
    let slpembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Slap ✋", slpicon)
    .setDescription(`***${message.author.username} slapped ${rUser.user.username}.***\nOoh, that looks sore. 😶`)
    .setImage (`https://media.giphy.com/media/qNtqBSTTwXyuI/giphy.gif`);
    return message.channel.send(slpembed);
  }
  //-------------------------------------------------------------
  //LICK---------------------------------------------------------
  if (cmd === `${prefix}lick`) {
    let rUser = message.mentions.members.first();
    if(!rUser) return message.channel.send(`User not found! 😕`);
    if(rUser.id === message.author.id) return message.channel.send(`***Do you find yourself tasty, ${message.author.username}?***`);

    let lkicon = message.author.displayAvatarURL;
    let lkembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Lick 😛", lkicon)
    .setDescription(`***${message.author.username} licked ${rUser.user.username}.***\nYum. 😋`)
    .setImage (`https://media.giphy.com/media/l1AsAMOkYjwteLRkc/giphy.gif`);
    return message.channel.send(lkembed);
  }
  //-------------------------------------------------------------
  //PINCH--------------------------------------------------------
  if (cmd === `${prefix}pinch`) {
    let rUser = message.mentions.members.first();
    if(!rUser) return message.channel.send(`User not found! 😕`);
    if(rUser.id === message.author.id) return message.channel.send(`***You're not in a dream, ${message.author.username}.***`);

    let pchicon = message.author.displayAvatarURL;
    let pchembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Pinch 👌", pchicon)
    .setDescription(`***${message.author.username} pinched ${rUser.user.username}.***\nOuchee! 😱`)
    .setImage (`https://media.tenor.com/images/9ac82f2f47772a941c21ea4916946aa4/tenor.gif`);
    return message.channel.send(pchembed);
  }
  //-------------------------------------------------------------
  //PAT----------------------------------------------------------
  if (cmd === `${prefix}pat`) {
    let rUser = message.mentions.members.first();
    if(!rUser) return message.channel.send(`User not found! 😕`);
    if(rUser.id === message.author.id) return message.channel.send(`***That's kinda weird, ${message.author.username}...***`);

    let pticon = message.author.displayAvatarURL;
    let ptembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Pat ✋", pticon)
    .setDescription(`***${message.author.username} patted ${rUser.user.username}.***\n😊`)
    .setImage (`https://media.giphy.com/media/M3a51DMeWvYUo/giphy.gif`);
    return message.channel.send(ptembed);
  }
  //-------------------------------------------------------------
  //HUG----------------------------------------------------------
  if (cmd === `${prefix}hug`) {
    let rUser = message.mentions.members.first();
    if(!rUser) return message.channel.send(`User not found! 😕`);
    if(rUser.id === message.author.id) return message.channel.send(`***Aw. Do you need a hug, ${message.author.username}?***`);

    let hgicon = message.author.displayAvatarURL;
    let hgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hug 🤗", hgicon)
    .setDescription(`***${message.author.username} hugged ${rUser.user.username}.***\nAww. ☺️`)
    .setImage (`https://media.giphy.com/media/y7lqoOlWLbf8Y/giphy.gif`);
    return message.channel.send(hgembed);
  }
  //-------------------------------------------------------------
  //KISS---------------------------------------------------------
  if (cmd === `${prefix}kiss`) {
    let rUser = message.mentions.members.first();
    if(!rUser) return message.channel.send(`User not found! 😕`);
    if(rUser.id === message.author.id) return message.channel.send(`***You need a gf or bf, ${message.author.username}.***`);

    let kssicon = message.author.displayAvatarURL;
    let kssembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Kiss ", kssicon)
    .setDescription(`***${message.author.username} kissed ${rUser.user.username}.***\nOoooh. 😏`)
    .setImage (`https://media.giphy.com/media/v4JbTGe4KJjKo/giphy.gif`);
    return message.channel.send(kssembed);
  }
  //-------------------------------------------------------------
  //SNOG---------------------------------------------------------
  if (cmd === `${prefix}snog`) {
    let rUser = message.mentions.members.first();
    if(!rUser) return message.channel.send(`User not found! 😕`);
    if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username}, that just looks weird...***`);

    let sgicon = message.author.displayAvatarURL;
    let sgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Snog", sgicon)
    .setDescription(`***${message.author.username} snogged ${rUser.user.username}.***\nGet a room! 🙈`)
    .setImage (`https://media.giphy.com/media/CE1sk31EVmjNS/giphy.gif`);
    return message.channel.send(sgembed);
  }
  //-------------------------------------------------------------
  //EAT----------------------------------------------------------
  if (cmd === `${prefix}eat`) {
    let rUser = message.mentions.members.first();
    if(!rUser) return message.channel.send(`User not found! 😕`);
    if(rUser.id === message.author.id) return message.channel.send(`***How do you taste, ${message.author.username}?***`);

    let eticon = message.author.displayAvatarURL;
    let etembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Eat 🍴", eticon)
    .setDescription(`***${message.author.username} ate ${rUser.user.username}.***\n😦`)
    .setImage (`https://media.giphy.com/media/SasDDqOSRclNu/giphy.gif`);
    return message.channel.send(etembed);
  }
  //-------------------------------------------------------------
  //STICK-OUT-TONGUE---------------------------------------------
  if (cmd === `${prefix}stickouttongue`) {
    let rUser = message.mentions.members.first();
    if(!rUser) return message.channel.send(`User not found! 😕`);
    if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} stood infront of a mirror and stuck their tongue out at their reflection. Why?***`);

    let tngicon = message.author.displayAvatarURL;
    let tngembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Stick Out Tongue 👅", tngicon)
    .setDescription(`***${message.author.username} stuck out their tongue at ${rUser.user.username}.***\nNnmmm. 😝`)
    .setImage (`https://media.giphy.com/media/13kZCZHYwlpues/giphy.gif`);
    return message.channel.send(tngembed);
  }
  //-------------------------------------------------------------
  //SAD----------------------------------------------------------
  if (cmd === `${prefix}sad`) {
    let rUser = message.mentions.members.first();
    if(!rUser) return message.channel.send(`User not found! 😕`);
    if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} is very sad. Someone cheer them up! 😔***`);

    let tngicon = message.author.displayAvatarURL;
    let tngembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Sad 😔", tngicon)
    .setDescription(`***${message.author.username} is sad because of ${rUser.user.username}.***\nWhat did you do? 😟`)
    .setImage (`https://media.giphy.com/media/a9xhxAxaqOfQs/giphy.gif`);
    return message.channel.send(tngembed);
  }
  //-------------------------------------------------------------
  //CRY----------------------------------------------------------
  if (cmd === `${prefix}cry`) {
    let rUser = message.mentions.members.first();
    if(!rUser) return message.channel.send(`User not found! 😕`);
    if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} is crying. Someone, do something! 😭***`);

    let tngicon = message.author.displayAvatarURL;
    let tngembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Cry 😭", tngicon)
    .setDescription(`***${message.author.username} is crying because of ${rUser.user.username}.***\nThat was mean! 😠`)
    .setImage (`https://media.giphy.com/media/L95W4wv8nnb9K/giphy.gif`);
    return message.channel.send(tngembed);
  }
  //-------------------------------------------------------------
  //LAUGH--------------------------------------------------------
  if (cmd === `${prefix}laugh`) {
    let rUser = message.mentions.members.first();
    if(!rUser) return message.channel.send(`User not found! 😕`);
    if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} is laughing at themself. Everyone, back away slowly...***`);

    let tngicon = message.author.displayAvatarURL;
    let tngembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Laugh 😂", tngicon)
    .setDescription(`***${message.author.username} is laughing at ${rUser.user.username}.***\nWhat's so funny? 😅`)
    .setImage (`https://media1.tenor.com/images/b3e0ecd965e324aa328a0137c38a44f1/tenor.gif`);
    return message.channel.send(tngembed);
  }
  //-------------------------------------------------------------
  //-------------------------------------------------------------////////////////

  //8BALL--------------------------------------------------------
  if (cmd === `${prefix}8ball`) {
    if(!args[2]) return message.channel.send(`${message.author.username}, please ask a full question.`);
    let replies = ["**Yes**", "**No**", "**Maybe**", "**Definitely**", "**Definitely not**", "**I don't know**", "**Let me think about it**", "**Ask someone else, I'm busy right now**"];

    let result = Math.floor((Math.random() * replies.length));

    let bllembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setTitle(`*8ball*`)
    .setDescription(replies[result]);
    return message.channel.send(bllembed);
  }
  //-------------------------------------------------------------

  //FLIP---------------------------------------------------------
  if (cmd === `${prefix}flip`) {
    let cnsd = `**coinside**`;
    let mnyamnt = `**moneyamount**`;
    if (messageArray.length < 2) {
      let replies = ["**Heads**", "**Tails**"];
      let result = Math.floor((Math.random() * replies.length));

      let fflpembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setTitle(`Coin Flip (no prize) 💰`)
      .setDescription(`The coin landed on ${replies[result]}!`);
      return message.channel.send(fflpembed);
    }
    if(messageArray.length != 3) return message.channel.send(`Please use the correct format: ~flip ${cnsd} ${mnyamnt}.`);
    if(args[0] != "heads" && args[0] != "tails") return message.channel.send(`Please use the correct format: ~flip ${cnsd} ${mnyamnt}.`);
    if(isNaN(args[1])) return message.channel.send(`Please use a money amount.`);
    let replies = ["heads", "tails"];
    let result = Math.floor((Math.random() * replies.length));

    let win = `*You win ${args[1]} SparkCoins!*`;
    let lose = `*You lose ${args[1]} SparkCoins.*`;
    let frmtresult = "None";
    if (args[0] === replies[result]) {
      if (replies[result] === "heads") {frmtresult = "**Heads**";}
      if (replies[result] === "tails") {frmtresult = "**Tails**";}
      coins = coins + args[1];
      let flpembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setTitle(`Coin Flip 💰`)
      .setDescription(`The coin landed on ${frmtresult}! ${win}`);
      return message.channel.send(flpembed);
    }
    if (args[0] !== replies[result]) {
      if (replies[result] === "heads") {frmtresult = "**Heads**";}
      if (replies[result] === "tails") {frmtresult = "**Tails**";}
      coins = coins - args[1];
      let flpembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setTitle(`Coin Flip 💰`)
      .setDescription(`The coin landed on ${frmtresult}! ${lose}`);
      return message.channel.send(flpembed);
    }
  }
  //-------------------------------------------------------------

  //ROLL---------------------------------------------------------
  if (cmd === `${prefix}roll`) {
    let dcnum = `**dicenumber**`;
    let mnyamnt = `**moneyamount**`;
    if (messageArray.length < 2) {
      let replies = ["**1**", "**2**", "**3**", "**4**", "**5**", "**6**"];
      let result = Math.floor((Math.random() * replies.length));

      let frllembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setTitle(`Dice Roll (no prize) 🎲`)
      .setDescription(`You rolled a ${replies[result]}!`);
      return message.channel.send(frllembed);
    }
    if(messageArray.length != 3) return message.channel.send(`Please use the correct format: ~roll ${dcnum} ${mnyamnt}.`);
    if(isNaN(args[0]) && isNaN(args[1])) return message.channel.send(`Please use numbers! The correct format is: ~roll ${dcnum} ${mnyamnt}.`);
    if(args[0] != 1 && args[0] != 2 && args[0] != 3 && args[0] != 4 && args[0] != 5 && args[0] != 6) return message.channel.send(`${message.author.username}, please use a number from 1 to 6.`);
    if(isNaN(args[1])) return message.channel.send(`${message.author.username}, please use a money amount.`);
    let replies = ["1", "2", "3", "4", "5", "6"];
    let result = Math.floor((Math.random() * replies.length));

    let win = `*You win ${args[1]} SparkCoins!*`;
    let lose = `*You lose ${args[1]} SparkCoins.*`;
    let frmtresult = "None";
    if (args[0] === replies[result]) {
      if (replies[result] === "1") {frmtresult = "**1**";}
      if (replies[result] === "2") {frmtresult = "**2**";}
      if (replies[result] === "3") {frmtresult = "**3**";}
      if (replies[result] === "4") {frmtresult = "**4**";}
      if (replies[result] === "5") {frmtresult = "**5**";}
      if (replies[result] === "6") {frmtresult = "**6**";}
      coins = coins + args[1];
      let flpembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setTitle(`Dice Roll 🎲`)
      .setDescription(`You rolled a ${frmtresult}! ${win}`);
      return message.channel.send(flpembed);
    }
    if (args[0] !== replies[result]) {
      if (replies[result] === "1") {frmtresult = "**1**";}
      if (replies[result] === "2") {frmtresult = "**2**";}
      if (replies[result] === "3") {frmtresult = "**3**";}
      if (replies[result] === "4") {frmtresult = "**4**";}
      if (replies[result] === "5") {frmtresult = "**5**";}
      if (replies[result] === "6") {frmtresult = "**6**";}
      coins = coins - args[1];
      let flpembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setTitle(`Dice Roll 🎲`)
      .setDescription(`You rolled a ${frmtresult}! ${lose}`);
      return message.channel.send(flpembed);
    }
  }
  //-------------------------------------------------------------

  //BOWL---------------------------------------------------------
  if (cmd === `${prefix}bowl`) {
    //let pnsamnt = `**pinknockdownamount**`;
    let mnyamnt = `**moneyamount**`;
    let allpns = "*Strike*";
    if (messageArray.length < 2) {
      let replies = ["**0 pins**", "**1 pin**", "**2 pins**", "**3 pins**", "**4 pins**", "**5 pins**", "**6 pins**", "**7 pins**", "**8 pins**", "**9 pins**", "**10 pins**"];
      let result = Math.floor((Math.random() * replies.length));

      if (result === 0) {
        let fbwlembed = new Discord.RichEmbed()
        .setColor("#1fd1c8")
        .setTitle(`Bowling (no prize) 🎳`)
        .setDescription(`You picked up a bowling ball, threw it down the lane and...`);
        message.channel.send(fbwlembed);
        setTimeout(() => {
          let fbwllembed = new Discord.RichEmbed()
          .setColor("#1fd1c8")
          .setDescription(`Knocked down ${replies[result]}. Ouch...`);
          return message.channel.send(fbwllembed);
        }, 4000);
      }
      if (result === 1 || result === 2 || result === 3) {
        let fbwlembed = new Discord.RichEmbed()
        .setColor("#1fd1c8")
        .setTitle(`Bowling (no prize) 🎳`)
        .setDescription(`You picked up a bowling ball, threw it down the lane and...`);
        message.channel.send(fbwlembed);
        setTimeout(() => {
          let fbwllembed = new Discord.RichEmbed()
          .setColor("#1fd1c8")
          .setDescription(`Knocked down ${replies[result]}. Unlucky, better luck next time.`);
          return message.channel.send(fbwllembed);
        }, 4000);
      }
      if (result === 4 || result === 5 || result === 6) {
        let fbwlembed = new Discord.RichEmbed()
        .setColor("#1fd1c8")
        .setTitle(`Bowling (no prize) 🎳`)
        .setDescription(`You picked up a bowling ball, threw it down the lane and...`);
        message.channel.send(fbwlembed);
        setTimeout(() => {
          let fbwllembed = new Discord.RichEmbed()
          .setColor("#1fd1c8")
          .setDescription(`Knocked down ${replies[result]}. Eh, not bad.`);
          return message.channel.send(fbwllembed);
        }, 4000);
      }
      if (result === 7 || result === 8 || result === 9) {
        let fbwlembed = new Discord.RichEmbed()
        .setColor("#1fd1c8")
        .setTitle(`Bowling (no prize) 🎳`)
        .setDescription(`You picked up a bowling ball, threw it down the lane and...`);
        message.channel.send(fbwlembed);
        setTimeout(() => {
          let fbwllembed = new Discord.RichEmbed()
          .setColor("#1fd1c8")
          .setDescription(`Knocked down ${replies[result]}. Nice.`);
          return message.channel.send(fbwllembed);
        }, 4000);
      }
      if (result === 10) {
        let fbwlembed = new Discord.RichEmbed()
        .setColor("#1fd1c8")
        .setTitle(`Bowling (no prize) 🎳`)
        .setDescription(`You picked up a bowling ball, threw it down the lane and...`);
        message.channel.send(fbwlembed);
        setTimeout(() => {
          let fbwllembed = new Discord.RichEmbed()
          .setColor("#1fd1c8")
          .setDescription(`Knocked down ${replies[result]}. You got a ${allpns}!`);
          return message.channel.send(fbwllembed);
        }, 4000);
      }
    }
    if(messageArray.length > 2) return message.channel.send(`${message.author.username}, please use the correct format: ~bowl ${mnyamnt}.`);
    if(messageArray.length === 2) {
      if(isNaN(args[0])) return message.channel.send(`${message.author.username}, please use a money amount.`);
      let replies = ["**0 pins**", "**1 pin**", "**2 pins**", "**3 pins**", "**4 pins**", "**5 pins**", "**6 pins**", "**7 pins**", "**8 pins**", "**9 pins**", "**10 pins**"];
      let result = Math.floor((Math.random() * replies.length));

      let wnngs = args[0] * result;
      let bns = `*You win ${wnngs} SparkCoins + a bonus ${result} SparkCoins!*`;
      let win = `*You win ${wnngs} SparkCoins!*`;
      let nthng = `*You didn't win any SparkCoins. Try again later.*`;
      let lose = `*You lose ${wnngs} SparkCoins. Try again later.*`;
      if (result === 0) {
        let fbwlembed = new Discord.RichEmbed()
        .setColor("#1fd1c8")
        .setTitle(`Bowling 🎳`)
        .setDescription(`You picked up a bowling ball, threw it down the lane and...`);
        message.channel.send(fbwlembed);
        setTimeout(() => {
          let fbwllembed = new Discord.RichEmbed()
          .setColor("#1fd1c8")
          .setDescription(`Knocked down ${replies[result]}. ${lose}`);
          return message.channel.send(fbwllembed);
        }, 4000);
      }
      if (result === 1) {
        let fbwlembed = new Discord.RichEmbed()
        .setColor("#1fd1c8")
        .setTitle(`Bowling 🎳`)
        .setDescription(`You picked up a bowling ball, threw it down the lane and...`);
        message.channel.send(fbwlembed);
        setTimeout(() => {
          let fbwllembed = new Discord.RichEmbed()
          .setColor("#1fd1c8")
          .setDescription(`Knocked down ${replies[result]}. ${nthng}`);
          return message.channel.send(fbwllembed);
        }, 4000);
      }
      if (result > 1 && result < 10) {
        let fbwlembed = new Discord.RichEmbed()
        .setColor("#1fd1c8")
        .setTitle(`Bowling 🎳`)
        .setDescription(`You picked up a bowling ball, threw it down the lane and...`);
        message.channel.send(fbwlembed);
        setTimeout(() => {
          let fbwllembed = new Discord.RichEmbed()
          .setColor("#1fd1c8")
          .setDescription(`Knocked down ${replies[result]}. ${win}`);
          return message.channel.send(fbwllembed);
        }, 4000);
      }
      if (result === 10) {
        let fbwlembed = new Discord.RichEmbed()
        .setColor("#1fd1c8")
        .setTitle(`Bowling 🎳`)
        .setDescription(`You picked up a bowling ball, threw it down the lane and...`);
        message.channel.send(fbwlembed);
        setTimeout(() => {
          let fbwllembed = new Discord.RichEmbed()
          .setColor("#1fd1c8")
          .setDescription(`Knocked down ${replies[result]}. You got a ${allpns}! ${bns}`);
          return message.channel.send(fbwllembed);
        }, 4000);
      }
    }
  }
  //-------------------------------------------------------------

  //PENALTY------------------------------------------------------
  if (cmd === `${prefix}penalty`) {
    let gl = `**GOAL!**`;
    let mnyamnt = `**moneyamount**`;
    if (messageArray.length < 2) {
      let replies = [`${gl} You scored!`, "Missed! Better luck next time.", "The keeper saved it! Unlucky.", "Skied it! 😐"];
      let result = Math.floor((Math.random() * replies.length));

      let fpnltyembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setTitle(`Penalty (no prize) ⚽`)
      .setDescription(`You run up, kick the ball and...`);
       message.channel.send(fpnltyembed);
      setTimeout(() => {
        let fpnltyyembed = new Discord.RichEmbed()
        .setColor("#1fd1c8")
        .setDescription(`${replies[result]}`);
        return message.channel.send(fpnltyyembed);
      }, 3000);
    }
    if(messageArray.length > 2) return message.channel.send(`${message.author.username}, please use the correct format: ~penalty ${mnyamnt}.`);
    if(messageArray.length === 2) {
      if(isNaN(args[0])) return message.channel.send(`${message.author.username}, please use numbers! The correct format is: ~penalty ${mnyamnt}.`);
      let replies = [`${gl} You scored!`, "Missed! Better luck next time.", "The keeper saved it! Unlucky.", "Skied it! 😐"];
      let result = Math.floor((Math.random() * replies.length));

      let win = `*You win ${args[0]} SparkCoins!*`;
      let lose = `*You lose ${args[0]} SparkCoins.*`;
      //let frmtresult = "None";
      if (result === 0) {
        coins = coins + args[0];
        let fpnltyembed = new Discord.RichEmbed()
        .setColor("#1fd1c8")
        .setTitle(`Penalty ⚽`)
        .setDescription(`You run up, kick the ball and...`);
        message.channel.send(fpnltyembed);
        setTimeout(() => {
          let fpnltyyembed = new Discord.RichEmbed()
          .setColor("#1fd1c8")
          .setDescription(`${replies[result]} ${win}`);
          return message.channel.send(fpnltyyembed);
        }, 3000);
      }
      if (result === 1 || result === 2 || result === 3) {
        coins = coins - args[0];
        let pnltyembed = new Discord.RichEmbed()
        .setColor("#1fd1c8")
        .setTitle(`Penalty ⚽`)
        .setDescription(`You run up, kick the ball and...`);
        message.channel.send(pnltyembed);
        setTimeout(() => {
          let pnltyyembed = new Discord.RichEmbed()
          .setColor("#1fd1c8")
          .setDescription(`${replies[result]} ${lose}`);
          return message.channel.send(pnltyyembed);
        }, 3000);
      }
    }
  }
  //-------------------------------------------------------------

  //SAY----------------------------------------------------------
  if (cmd === `${prefix}say`) {
    if(messageArray.length < 2) return message.channel.send(`I can't say nothing, ${message.author.username}!`);
    let words = args.slice(0).join(" ");

    let syembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setDescription(words);
    return message.channel.send(syembed);
  }
  //if (cmd === `${prefix}ssay`) {
    //if(messageArray.length < 2) return message.channel.send(`I can't say nothing, ${message.author.username}!`);
    //let words = args.slice(0).join(" ");
    //return message.channel.send(words);
  //}
  //-------------------------------------------------------------

  //SING---------------------------------------------------------//////
  if (cmd === `${prefix}sing`) {
    let replies = [
      `**Happy Birthday To You**\n\nHappy Birthday to you\nHappy Birthday to you\nHappy Birthday to someone\nHappy Birthday to you\n🎂`,
      "**Pokemon Theme 1**\n\nI wanna be the very best\nLike no one ever was\nTo catch them is my real test\nTo train them is my cause**",
      "**Random Singing To Self**\n\nLa la la laaa la la laaaa",
      "**In My Place**\n\nYeah, how long must you wait for it?\nYeah, how long must you pay for it?\nYeah, how long must you wait for it?",
      "**Yellow**\n\nLook at the stars\nLook how they shine for you\nAnd everything you do\nThey were all yellow",
      "**November Rain**\n\nNothin' lasts forever\nAnd we both know hearts can change\nAnd it's hard to hold a candle\nIn the cold November rain",
      "**Now that it's all said and done\nI can't believe you were the one\nTo build me up and tear me down\nLike an old abandoned house\nWhat you said when you left\nJust left me cold and out of breath\nI felt as if I was in way to deep\nGuess I let you get the best of me",
      "**You Belong With Me**\n\nYou're on the phone with your girlfriend\nShe's upset\nShe's going off about something that you said\n'Cause she doesn't get your humour like I do\nI'm in my room\nIt's a typical Tuesday night\nI'm listening to the kind of music she doesn't like\nAnd she'll never know your story like I do'",
      "**We Are One**\n\nIf there's so much I must be, can I still just be me the way I am?\nCan I trust in my own heart or am I just one part of some big plan?",
      "**Dry Your Eyes**\n\nDry your eyes mate\nI know it's hard to take but her mind has been made up\nThere's plenty more fish in the sea\nDry your eyes mate\nI know you want to make her see how much this pain hurts but you've got to walk away now, it's over.",
      "**I don't Wanna Miss A Thing**\n\nDon't wanna close my eyes\nI don't wanna fall asleep\n'Cause I'd miss you babe\nAnd I don't wanna miss a thing\n'Cause even when I dream of you\nThe sweetest dream will never do\nI'd still miss you babe\nAnd I don't wanna miss a thing",
      "**Payphone**\n\nI'm at a payphone trying to call home\nAll of my change I spent on you\nWhere have the times gone, baby it's all wrong\nWhere are the plans we made for two",
      "**What About Now**\n\nWhat about now?\nWhat about today?\nWhat if you're making me all that I was meant to be?\nWhat if our love never went away?\nWhat if it's lost behind words we could never find?\nBaby, before it's too late,\nWhat about now?",
      "**Hear You Me**\n\nThere's no one in town I know\nYou gave us some place to go\nI never said thank you for that\nI thought I might get one more chance\nWhat would you think of me now\nSo lucky, So strong, So proud?\nI never said thank you for that\nNow I'll never have a chance",
      "**Give Yourself A Try**\n\nYou learn a couple things when you get to my age\nLike friends don't lie and it all tastes the same in the dark\nWhen your vinyl and your coffee collection is a sign of the times\nYou're getting spiritually enlightened at 29\nSo just give yourself a try",
      "**A Million Dreams**\n\nI close my eyes and I can see\nThe world that's waiting up for me\nThat I call my own\nThrough the dark, through the door\nThrough where no one's been before\nBut it feels like home",
      "**A Million Dreams**\n\n'Cause every night I lie in bed\nThe brightest colors fill my head\nA million dreams are keeping me awake\nI think of what the world could be\nA vision of the one I see\nA million dreams is all it's gonna take\nA million dreams for the world we're gonna make",
      "**A Million Dreams**\n\nThere's a house we can build\nEvery room inside is filled\nWith things from far away\nSpecial things I compile\nEach one there to make you smile\nOn a rainy day",
      "**The Scientist**\n\nCome up to meet you\nTell you I'm sorry\nYou don't know how lovely you are\nI had to find you\nTell you I need you\nTell you I set you apart",
      "**Can You Feel The Love Tonight (Movie Version)**\n\nI can see what's happening\nWhat?\nAnd they don't have a clue\nWho?\nThey'll fall in love and here's the bottom line, our trios down to two\nOh\nThe sweet caress of twilight, there's magic everywhere\nAnd with all this romantic atmosphere disaster's in the air",
      "**Forever Young**\n\nLet's dance in style, let's dance for a while\nHeaven can wait we're only watching the skies\nHoping for the best, but expecting the worst\nAre you gonna drop the bomb or not?",
      "**Disco 2000**\n\nAnd I said let's all meet up in the year 2000\nWon't it be strange when we're all fully grown\nBe there 2 o'clock by the fountain down the road\nI never knew that you'd get married\nI would be living down here on my own\nOn that damp and lonely Thursday years ago",
      "**Always**\n\nNow I can't sing a love song\nLike the way it's meant to be\nWell I guess I'm not that good anymore\nBut baby, that's just me\nYeah, I will love you baby\nAlways and I'll be there\nForever and a day, always\nI'll be there till the stars don't shine\n'Til the heavens burst and the words don't rhyme\nI know when I die you'll be on my mind\nAnd I'll love you, always",
      "**Angels**\n\nAnd through it all she offers me protection\nA lot of love and affection\nWhether I'm right or wrong\nAnd down the waterfall\nWherever it may take me\nI know that life won't break me\nWhen I come to call, she won't forsake me\nI'm loving angels instead",
      "**Torn**\n\nI'm all out of faith\nThis is how I feel, I'm cold and I am shamed\nLying naked on the floor\nIllusion never changed\nInto something real\nWide awake and I can see the perfect sky is torn\nYou're a little late\nI'm already torn",
      "**Chasing Cars**\n\n",
      "**When You Say Nothing At All**\n\nThe smile on your face let's me know that you need me\nThere's a truth in your eyes saying you'll never leave me\nThe touch of your hand says you'll catch me if wherever I fall\nYou say it best when you say nothing at all",
      "**A Little Respect**\n\nI try to discover\nA little something to make me sweeter\nOh baby refrain from breaking my heart\nI'm so in love with you\nI'll be forever blue\nThat you gimme no reason\nWhy you make me work so hard\nThat you gimme no\nThat you gimme no\nThat you gimme no\nThat you gimme no\nSoul, I hear you calling\nOh baby please give a little respect to me"];

    let result = Math.floor((Math.random() * replies.length));
    //let question = args.slice(1).join(" ");

    let sngembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setTitle(`🎵`)
    .setDescription(replies[result]);
    return message.channel.send(sngembed);
  }
  //-------------------------------------------------------------//////

  //MATHS--------------------------------------------------------
  if (cmd === `${prefix}maths`) {
    let mthembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setTitle(`**Maths**`)
    //.setDescription("*Type one of the mathematical symbols below and press 'Enter'.*")
    .setDescription("*Type in this format: 1+1*")
    .addField("Add", "`+`")
    .addField("Subtract", "`-`")
    .addField("Multiply", "`x`")
    .addField("Divide", "`/`");
    return message.channel.send(mthembed);

    if (cmd.includes("+")) {
      if(messageArray.length != 3) return message.channel.send(`Try again, ${message.author.username}.`);
      let num1 = messageArray[0];
      let num2 = messageArray[2];
      let sum = num1 * num2;

      let mthembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setDescription(`${cmd} = ${sum}`);
      return message.channel.send(mthembed);
    }


    //if (cmd === "+") {
      //return message.channel.send("Type your first number.");
      //if(isNaN(cmd)) return message.channel.send(`That is not a number, ${message.author.username}!`);
      //let num1 = cmd;
      //return message.channel.send("Type your second number.");
      //if(isNaN(cmd)) return message.channel.send(`That is not a number, ${message.author.username}!`);
      //let num2 = cmd;
    //}

    //if(messageArray.length = 0) return message.channel.send(`I can't say nothing, ${message.author.username}!`);
    //let words = args.slice(0).join(" ");
  }
  //-------------------------------------------------------------

  //MORE---------------------------------------------------------

  //-------------------------------------------------------------


});
bot.login(botconfig.token);
