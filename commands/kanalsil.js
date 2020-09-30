const Discord = require('discord.js')
const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

const fetch = require("node-fetch");

module.exports = {
    name: "kanalsil",
    aliases: ["kanalsil","kanalsil"],
    description: "kanalsil komudu",
    usage: "wx!kanalsil",
    ownerOnly: false,
    run: async (message,args,client) => {
    const fetchedChannel = message.guild.channels.find(r => r.name === args.join(' '));
    let kanal = args.slice(0).join('+');
    let guild = message.guild; 
    if(!kanal) return message.channel.send(':grey_exclamation: Lütfen bir kanal adı giriniz'); 
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(':grey_exclamation: Bu Komutu Kullanabilmek İçin `Kanalları Yönet` Yetkisine Sahip Olman Gerek'); 
    if(!fetchedChannel) return message.reply('Geçersiz kanal adı !');
    if (kanal.length < 1) return message.reply(':grey_exclamation: Lütfen geçerli bir kanal adı giriniz'); message.delete(); fetchedChannel.delete(); 
        const embed = new RichEmbed()
        .setColor("RANDOM")
        .setTitle(message.author.username)
        .setThumbnail(message.author.avatarURL)
        .addField("Kanal Komutu Bilgisi", stripIndents`- Silinen kanal:** ${kanal}**

        - Kanalı silen kişi: ${message.author.username}

        - Kanal oluşturmak için > mx!kanaloluştur (KanalAdı)
        **- Daha fazla bilgi için mx!yardım**`);

    message.channel.send(embed);
    }
    }
