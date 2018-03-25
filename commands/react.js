const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    try {
        await message.react('🇦');
        await message.react('🇧');
        await message.react('🇨');
    }
    catch(error) {
        
    }
}
