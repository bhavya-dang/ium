module.exports.run = async (bot, message, args) => {
    if (!['275831434772742144',].includes(message.author.id)) return message.reply('**You cant shut me down, only the bot developer can!**');
    await message.reply('**Shutting** down...');
    process.exit(0);
  };
