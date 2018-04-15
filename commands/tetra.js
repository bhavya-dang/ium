

const Discord = require("discord.js");
const ms = require("ms");

exports.run = async (bot, message, args) => {

      //!tempmute @user 1s/m/h/d

      let role = message.guild.roles.find("name", "bots");

      // Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
      let member = message.mentions.members.first();

      // or the person who made the command: let member = message.member;

      // Add the role!
      member.addRole(role).catch(console.error);

      // Remove a role!
      member.removeRole(role).catch(console.error);


    //end of module
    }

    module.exports.help = {
      name: "mute"
    }
