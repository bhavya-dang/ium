const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!addrole <@user> <Role> 
  //if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("You don't have premmsions to do that!");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  rMember.addRole('bots');
}