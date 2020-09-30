const Discord = require('discord.js');
const client = new Discord.Client();
var randomstring = require('randomstring');

module.exports = {
    name: "şifreoluştur",
    aliases: ["şifreoluştur","şifreoluştur"],
    description: "şifre oluşturma komudu",
    usage: "wx!şifreoluştur",
    ownerOnly: false,
    run: async (message,args,client) => {
    if(message.channel.type == "dm")  return;
       message.reply("Oluşturulan şifre; ");
       message.channel.send(
              randomstring.generate({
              length: 15,
              charset: 'alphabetic'
}))
}
}
