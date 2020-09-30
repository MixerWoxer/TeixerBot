const Discord = require('discord.js');

module.exports = {
    name: "yılanol",
    aliases: ["yılanol","yılanol","yılanol"],
    description: "yılanol komudu",
    usage: "wx!yılanol",
    ownerOnly: false,
    run: async (message,client) => {
        message.channel.send('https://media.tenor.com/images/134bed648027eef15a3088c6a41341b0/tenor.gif');
    }
}
