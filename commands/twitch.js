module.exports = {
    name: "twitch",
    aliases: ["twitch","twitch"],
    description: "twitch komudu",
    usage: "wx!twitch",
    ownerOnly: false,
    run: async (message,args,client) => {
        const exampleEmbed = {
            color: 0x0099ff,
            title: 'Twitch Hub :D',
            url: `https://images.discordapp.net/avatars/750694500271128617/728431d8644a5e415bfabdda46ced30f.png?size=512`,
            author: {
                name: 'Mixer botun sevdiği bazı yayıncılar',
                icon_url: `https://images.discordapp.net/avatars/750694500271128617/728431d8644a5e415bfabdda46ced30f.png?size=512`,
                url: `https://images.discordapp.net/avatars/750694500271128617/728431d8644a5e415bfabdda46ced30f.png?size=512`,
            },
            description: 'aga batlamış mısır bitti püğğğ',
            thumbnail: {
                url: `https://images.discordapp.net/avatars/750694500271128617/728431d8644a5e415bfabdda46ced30f.png?size=512`,
            },
            fields: [
                {
                    name: 'Melliflluous',
                    value: `https://www.twitch.tv/zatoichiwoxz`,
                },
            ],
            timestamp: new Date(),
            footer: {
                text: 'eeeyy patlamış mısırınu cipsini hazırla',
                icon_url: 'https://media.discordapp.net/attachments/432525353706061834/747206881952399381/image0-1.gif',
            },
        };

        message.channel.send({ embed: exampleEmbed });
        }
      }
