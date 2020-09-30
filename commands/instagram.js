const Discord = require('discord.js')
const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

const fetch = require("node-fetch");

module.exports = {
    name: "insta",
    aliases: ["insta","insta","i"],
    description: "insta komudu",
    usage: "wx!insta",
    ownerOnly: false,
    perm: 0,
    run: async (message,args,client) => {
        const name = args.slice(0).join(' ');

        if (!name) {
            return message.reply("Bir kullanıcı adı girmen gerek !")
                .then(m => m.delete(5000));
        }

        const url = `https://instagram.com/${name}/?__a=1`;
        
        let res;

        try {
            res = await fetch(url).then(url => url.json());
        } catch (e) {
            return message.reply("Bulunamadı... :(")
                .then(m => m.delete(5000));
        }

        const account = res.graphql.user;

        const embed = new RichEmbed()
            .setColor("RANDOM")
            .setTitle(account.full_name)
            .setURL(`https://instagram.com/${name}`)
            .setThumbnail(account.profile_pic_url_hd)
            .addField("Profil Bilgisi", stripIndents`**- Kullanıcı Adı:** ${account.username}
            **- Tam adı:** ${account.full_name}
            **- Biyografi:** ${account.biography.length == 0 ? "bulunmuyor" : account.biography}
            **- Gönderi Sayısı:** ${account.edge_owner_to_timeline_media.count}
            **- Takipçi Sayısı:** ${account.edge_followed_by.count}
            **- Takip Etme Sayısı:** ${account.edge_follow.count}
            **- Özel Hesap Mı?:** ${account.is_private ? "Evet " : "Hayır "}`);

        message.channel.send(embed);
    }

}

