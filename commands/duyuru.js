const Discord = require('discord.js');

module.exports = {
    name: "duyuru",
    aliases: ["duyuru","duyuru","duyuru"],
    description: "duyuru komudu",
    usage: "wx!duyuru",
    ownerOnly: false,
    run: async (message,args,client) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Bir şey yazmadınız.');
    message.delete();
    const exampleEmbed = {
        color: 0x0099ff,
        title: '**Mixer bot**',
        author: {
            name: '>_<',
            icon_url: `https://images.discordapp.net/avatars/750694500271128617/728431d8644a5e415bfabdda46ced30f.png?size=512`,
            url: `https://images.discordapp.net/avatars/750694500271128617/728431d8644a5e415bfabdda46ced30f.png?size=512`,
        },
        fields: [
            {
                name: 'Duyuru',
                value: `${mesaj}`,
            },
        ],
    };

    message.channel.send('@everyone');
    return message.channel.send({ embed: exampleEmbed });
 }
}