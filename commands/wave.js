exports.run = async (bot, message, args) => {
    let waveMessage = await message.channel.send('o/');
    waveMessage.edit(`o>`);
    waveMessage.edit(`o/`);
    waveMessage.edit(`o>`);
    waveMessage.edit(`o/`);
    waveMessage.edit(`o>`);
    waveMessage.edit(`o/`);
    message.channel.send(waveMessage);
 }