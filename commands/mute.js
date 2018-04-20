const Discord = require("discord.js");
const ms = require("ms");

exports.run = async (bot, message, args) => {

      let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!tomute) return message.channel.send("**User not found.** ium mute <user> <time (optional)>");
      if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**You do not have permission to mute them!**");
      let muterole = message.guild.roles.find(`name`, "muted");
      //start of create role
      if(!muterole){
        try{
          muterole = await message.guild.createRole({
            name: "muted",
            color: "#000000",
            permissions:[]
          })
          message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(muterole, {
              SEND_MESSAGES: false,
              ADD_REACTIONS: false
            });
          });
        }catch(e){
          console.log(e.stack);
        }
      }
      //end of create role
      let mutetime = args[1];
      if(!mutetime){
        message.channel.send("**Specify a time for the user to be muted.**");

        await(tomute.addRole(muterole.id));
        message.send.channel(`<@${tomute.id}> has been muted. (Note: you can set a time for the user to be muted: ium mute <user> <time>)`);
      }

      await(tomute.addRole(muterole.id));
      message.send.channel(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

      setTimeout(function(){
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> has been unmuted!`);
      }, ms(mutetime));


    }

    module.exports.help = {
      name: "mute"
    }
