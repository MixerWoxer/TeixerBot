const { orange } = require("color-name");
const Discord = require('discord.js')
const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const moment = require('moment')
const client = new Discord.Client();

const fetch = require("node-fetch");

module.exports = {
    name: "at",
    aliases: ["at","kick","uçurbeni"],
    description: "at komudu",
    usage: "wx!at",
    ownerOnly: false,
    run: async (message,args,client) => {
    
    let banlanacakkisi = args.slice(0).join(' ');
    let banlanmanedeni = args.slice(1).join(' ');
    
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply(':x: Bu Komutu Kullanabilmek İçin `KICK_MEMBERS` Yetkisine Sahip Olman Gerek'); 

    if(!banlanacakkisi) {
        message.reply('Senimi atayım ? Bir isim gir !');
    }
    if(banlanacakkisi) {
    var mem = message.mentions.members.first();
    var mc = args.slice(0).join(' ');
    mem.kick(mc);
    

    const embed = new RichEmbed()
    .setColor("ORANGE")
    .setTitle(message.author.username)
    .setThumbnail(message.author.displayAvatarURL)
    .addField("Atılma Bilgisi", stripIndents`
    - ${args.slice(0).join(' ')} Adlı Kullanıcı Atıldı,
    
    - Kullanıcıyı atan yetkili: ${message.author.username}
    `);

    message.channel.send(embed);
    }
}
}