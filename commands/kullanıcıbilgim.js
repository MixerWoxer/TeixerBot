const Discord = require('discord.js')
const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const moment = require('moment')
const client = new Discord.Client();

const fetch = require("node-fetch");

module.exports = {
    name: "bilgim",
    aliases: ["bilgim","bilgim","bilgim"],
    description: "bilgim komudu",
    usage: "wx!bilgim",
    ownerOnly: false,
    perm: 0,
    run: async (message,args,client) => {
        var Durum = message.author.presence.status;
        var Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
        var durm = (Durum == "online" ? ("Çevrimiçi") : (Durum == "offline" ? ("Çevrimdışı") : (Durum == "idle" ? ("Boşta") : (Durum == "dnd" ? ("Rahatsız Etmeyin") : ("Bilinmiyor/bulunamadı.")))))
        let simdikitarih = moment.utc(message.createdAt).format('DD MM YYYY');

        let user = message.mentions.users.first() || message.author;

        let userinfo = {};
        userinfo.avatar= user.displayAvatarURL;
        userinfo.id = user.id;
        userinfo.od1 = message.guild.members.get(user.id).user.presence.game || "Oynadığı bir oyun yok"
        userinfo.status = user.presence.status.toString()
        .replace("dnd", `Rahatsız Etmeyin`)
        .replace("online", `Çevrimiçi`)
        .replace("idle", `Boşta`)
        .replace("offline", `Çevrimdışı`)
        userinfo.bot = user.bot.toString()
        .replace("false", `Hayır`)
        .replace("true", `Evet`)
        userinfo.sonmesaj = user.lastMessage || "Son yazılan mesaj bulunamadı." || "Son yazılan mesaj gösterilemedi."

        userinfo.dctarih = moment.utc(message.guild.members.get(user.id).user.createdAt).format('**YYYY** [Yılında] MMMM [Ayında] dddd [Gününde] (**DD/MM/YYYY**)')

        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)
        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`)
        userinfo.dctarihkatilma = moment.utc(message.guild.members.get(user.id).joinedAt).format('**YYYY** [Yılında] MMMM [Ayında] dddd [Gününde] (**DD/MM/YYYY**)')
        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)
        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`)
        const embed = new RichEmbed()
            .setColor("ORANGE")
            .setTitle(message.author.username)
            .setThumbnail(message.author.displayAvatarURL)
            .addField("Discord Profil Bilgisi", stripIndents`
            - ID: #${message.author.discriminator}
            - Açıklaması: ${durm}
            - Botmu: ${message.author.bot ? '\n Evet' : 'Hayır'}

            - Yaptığı Etkinlik Ne: ${message.author.presence.game ? message.author.presence.game.name : 'Boşta, Bir etkinlik yapmıyor'}
            - Kayıt Tarihi (Sunucu): ${userinfo.dctarihkatilma}
            - Kayıt Tarihi (Discord): ${userinfo.dctarih}

            - Rolleri: ${message.guild.members.get(user.id).roles.filter(r => r.name !== "@everyone").map(r => r).join(' **|** ') || "**Bu kullanıcıda hiçbir rol bulunmuyor**"}
            - Gönderilen Son Mesaj: ${userinfo.sonmesaj}`);

        message.channel.send(embed);
    }
}

