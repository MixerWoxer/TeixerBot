const Discord = require('discord.js')
const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const moment = require('moment')
const client = new Discord.Client();

const fetch = require("node-fetch");

module.exports = {
    name: "sunucubilgi",
    aliases: ["sunucubilgi","sunucubilgi","sunucubilgi"],
    description: "sunucubilgi komudu",
    usage: "wx!sunucubilgi",
    ownerOnly: false,
    run: async (message,args,client) => {
       var verti = message.guild.verificationLevel;
    const vertific = ['Yok', 'Düşük', 'Orta', 'Yüksek', 'En Yüksek'];
    let kur = {
                "01": "Ocak",
                "02": "Şubat",
                "03": "Mart",
                "04": "Nisan",
                "05": "Mayıs",
                "06": "Haziran",
                "07": "Temmuz",
                "08": "Ağustos",
                "09": "Eylül",
                "10": "Ekim",
                "11": "Kasım",
                "12": "Aralık"
        }
            
        const embed = new RichEmbed()
            .setColor("ORANGE")
            .setTitle(message.author.username)
            .setThumbnail(message.author.displayAvatarURL)
            .addField("Discord Sunucu Bilgisi", stripIndents`
            - Sunucu Sahibi: ${message.guild.owner}
            - Sunucu Kimliği: ${message.guild.id}
            - Sunucu Kanal Sayısı: ${message.guild.channels.size}

            - Sunucu Üye Sayısı: ${message.guild.members.size}
            - Güvenlik Duvarı Derecesi: ${vertific[message.guild.verificationLevel]}
            - Oluşturulma Tarihi: ${moment(message.guild.createdAt).format('DD')} ${kur[moment(message.guild.createdAt).format('MM')]} ${moment(message.guild.createdAt).format('YYYY h:mm:ss')}`);

        message.channel.send(embed);
    }
}
