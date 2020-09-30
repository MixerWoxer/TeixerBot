const Discord = require("discord.js");
const google = require("google-tts-api");
var figlet = require('figlet');

module.exports = {
    name: "trollyazı",
    aliases: ["trollyazı","trollyazı","trollyazı"],
    description: "trollyazı komudu",
    usage: "wx!trollyazı",
    ownerOnly: false,
    perm: 0,
    run: async (message,args,client) => {   
        var maxLen = 15
    
        if(args.join(' ').length > maxLen) return message.channel.send(`En fazla **15** karakter yazabilirsin.`)
    
        if(!args[0]) return message.channel.send('Lütfen bir yazı girin...');
    
        figlet(`${args.join(' ')}`, function(err, data) {
            if (err) {
                console.log('Bir hata var...');
                console.dir(err);
                return;
            }
    
            message.channel.send(`${data}`, {code: 'AsciiArt'});
        });
    
    
    }
}