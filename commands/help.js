const Discord = require('discord.js')
const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const moment = require('moment')
const client = new Discord.Client();

const fetch = require("node-fetch");

module.exports = {
    name: "help",
    aliases: ["help","yardım","yardımet"],
    description: "yardım komudu",
    usage: "wx!yardım",
    ownerOnly: false,
    run: async (message,args,client) => {
      let arg = args[0];
      if(!arg) {
        message.channel.send('mx!help 1-2-3');
      }
      if(arg === '1') {
        const embed = new RichEmbed()
            .setColor("ORANGE")
            .setTitle(message.author.username)
            .setThumbnail('https://cdn.discordapp.com/avatars/526355594303504394/a_c2f39049d59e5d02fee2eb89b595fb61.gif')
            .addField("Yardım Komutları", stripIndents`
            ↳ mx!ban (KullanıcıEtiketi) - Etiketlenen oyuncuyu banlar.

            ↳ mx!kick (KullanıcıEtiketi) - Etiketlenen oyuncuyu atar.

            ↳ mx!kanal - Kanal hakkında bilgi ve komutları gösterir.

            ↳ mx!sunucubilgi - Bulunan sunucunun bilgilerini gösterir.

            ↳ mx!bilgim - Kendi discord bilgini gösterir.

            ↳ mx!rololuştur (Adı) | (Renk - İngilizce) - Seçilen rol adı ve rengini oluşturur.

            ↳ mx!sahip - Bot sahibi hakkında bilgi verir.

            ↳ mx!i (İnstagramKullanıcıAdı) - İnstagram verilerini discorda mesaj olarak aktarır.

            ↳ mx!hava (BölgeAdı) - Seçilen bölgenin hava durumunu gösterir.

            ↳ mx!sil (Silinecek miktar | MAX 100) - Sohbeti gerekli/gereksiz mesajları siler.

            ↳ mx!botdavet - Botun davet linkini gösterir.
            
            ↳ mx!çarp (KullanıcıEtiketi) - Etiketlenen kullanıcıyı çarpar.
            
            ↳ mx!joker - Benim en sevdiğim joker müziğini çalar :D.

            `)
            message.channel.send(embed);
                              
      }
      if(arg === '2') {
        const embed = new RichEmbed()
            .setColor("ORANGE")
            .setTitle(message.author.username)
            .setThumbnail('https://cdn.discordapp.com/avatars/526355594303504394/a_c2f39049d59e5d02fee2eb89b595fb61.gif')
            .addField("Yardım Komutları", stripIndents`
            ↳ mx!başarım (Yazı) - Seçilen yazıyı minecraft başarımına çevirir.
            
            ↳ mx!kategorioluştur (KategoriAdı) - Bir kategori oluşturur.

            ↳ mx!stres - Stres çarkı çevirirsiniz.

            ↳ mx!özelodakur - 2 Kişilik özel oda sistemini kurar.

            ↳ mx!şifre - Sizin için rastgele şifre oluşturur.

            ↳ mx!destek - Destek bilgisini verir.

            ↳ mx!twitch - Twitch kanalını gösterir.

            ↳ mx!afk - Afk modunu açar.

            ↳ mx!unafk - Afk modunu kapatır.

            ↳ mx!youtube (Yazı) - Youtube üzerinden arama yapar.

            ↳ mx!google (Yazı) - Google üzerinden arama yapar.

            ↳ mx!twitter (Yazı) - Twitter üzerinden arama yapar.
            
            ↳ mx!github (Yazı) - Github üzerinden arama yapar.

            `)
            message.channel.send(embed);
      }
      if(arg === '3') {
        const embed = new RichEmbed()
            .setColor("ORANGE")
            .setTitle(message.author.username)
            .setThumbnail('https://cdn.discordapp.com/avatars/526355594303504394/a_c2f39049d59e5d02fee2eb89b595fb61.gif')
            .addField("Yardım Komutları", stripIndents`
            ↳ mx!botbilgi - Botun bilgisini gösterir.

            ↳ mx!botsite - Botun sitesini gösterir.

            ↳ mx!espiriyap - Mixer bot espiri yapar.

            ↳ mx!gözyanlıması - Göz yanılması giflerini atar.

            ↳ mx!patlamixer - Mixer delirir (Bir sesli sohbetde olman gerekir !).

            ↳ mx!Duyuru (Mesaj) - Seçilen mesajı komutu yazılan kanalda duyuru yapar.

            ↳ mx!moderasyon - Moderasyon komutlarını özetler.

            ↳ mx!konuşmixer - Mixeri konuşturursunuz.

            ↳ mx!saat - Saati gösterir.

            ↳ mx!sor - Mixer bota soru sorarsınız.

            ↳ mx!avatar - Avatarını gösterir.

            ↳ mx!trollyazı - Ascii kodlama ile troll yazı gösterir.

            ↳ mx!açılım (GG-AFK-GL) - Gibi kısaltılmış yabancı kelimleri türkçelerini gösterir.                        
            `);

        message.channel.send(embed);
      }
    }
}
