const Discord = require ("discord.js");
const fs = require("fs");
const botconfig = require("../botconfig.json");
let version = botconfig.version;
let inline = true

module.exports.run = (bot, message, args) => {

  const modCommands = fs.readFileSync("./moderation.txt", "utf8");
  const infoCommands = fs.readFileSync("./info.txt", "utf8");
  const utilsCommands = fs.readFileSync("./utils.txt", "utf8");
  const funCommands = fs.readFileSync("./fun.txt", "utf8");
  const economyCommands = fs.readFileSync("./economy.txt", "utf8");
  const mathCommands = fs.readFileSync("./math.txt", "utf8");

    const user = message.guild.members.get(args[0]) || message.member;

    let mEmbed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setTitle("Moderation Commands")
    .setDescription(modCommands)

    user.send(mEmbed);

    let iEmbed = new Discord.RichEmbed()
    .setColor("FFFFFF")
    .setTitle("Info Commands")
    .setDescription(infoCommands)

    user.send(iEmbed);

    let uEmbed = new Discord.RichEmbed()
    .setColor("FFFFFF")
    .setTitle("Utils Commands")
    .setDescription(utilsCommands)

    user.send(uEmbed);

    let fEmbed = new Discord.RichEmbed()
    .setColor("FFFFFF")
    .setTitle("Fun Commands")
    .setDescription(funCommands)

    user.send(fEmbed);

    let eEmbed = new Discord.RichEmbed()
    .setColor("FFFFFF")
    .setTitle("Economy Commands")
    .setDescription(economyCommands)

    user.send(eEmbed);

    let mathEmbed = new Discord.RichEmbed()
    .setColor("FFFFFF")
    .setTitle("Math Commands")
    .setDescription(mathCommands)

    user.send(mathEmbed);

    let botAvatar = bot.user.displayAvatarURL;
    let botEmbed = new Discord.RichEmbed()
    .setAuthor("ium", "https://ium-bot.github.io/ium.jpg")
    .setColor('#000000')
    .setThumbnail(botAvatar)
    .setDescription("**Developer**: Tetra#4616 | **Version:** " + botconfig.version + " | **Library:** discord.js\nium is an aesthetic, simple, multi-purpose discord bot that has many commands, ranging from moderation commands to fun commands.")
    .addField("Website", "https://ium-bot.github.io", inline)
    .addField("Invite", "https://ium-bot.github.io/invite", inline)
    .addField("Server", "https://discord.gg/Ac8HYtD", inline)
    .addField("Patreon", "https://www.patreon.com/ium", inline)
    .addField("Links", "[Trello](https://trello.com/b/3kvrAbIV/ium) | [Github](https://github.com/tetra-dev/ium) | [Issues](https://github.com/tetra-dev/ium/issues)");


    user.send(botEmbed);

    message.reply("Sent you a dm with my commands!")

 }

 module.exports.help = {
     name: "help"
 }
