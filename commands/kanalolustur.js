const Discord = require('discord.js')
const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

const fetch = require("node-fetch");

module.exports = {
    name: "kanaloluştur",
    aliases: ["kanaloluştur","kanaloluştur"],
    description: "kanaloluştur komudu",
    usage: "wx!kanaloluştur",
    ownerOnly: false,
    run: async (message,args,client) => {
    let kanal = args.slice(0).join('+');
    let guild = message.guild; 
    if(!kanal) return message.channel.send(':grey_exclamation: Lütfen bir kanal adı giriniz'); 
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(':grey_exclamation: Bu Komutu Kullanabilmek İçin `Kanalları Yönet` Yetkisine Sahip Olman Gerek'); 
    if (kanal.length < 1) return message.reply('Oluşturmak İstediğin Kanalın Adını Yazmalısın'); message.delete(); guild.createChannel(kanal, 'channel'); 
        const embed = new RichEmbed()
        .setColor("RANDOM")
        .setTitle(message.author.username)
        .setThumbnail(message.author.avatarURL)
        .addField("Kanal Komutu Bilgisi", stripIndents`- Oluşturulan kanal:** ${kanal}**

        - Kanalı oluşturan kişi: ${message.author.username}

        - Kanal silmek için > mx!kanalsil (KanalAdı)
        **- Daha fazla bilgi için mx!yardım**`);

    message.channel.send(embed);
}
    }

