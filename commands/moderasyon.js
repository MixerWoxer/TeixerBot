module.exports = {
    name: "moderasyon",
    aliases: ["moderasyon","moderasyon","moderasyon"],
    description: "moderasyon komudu",
    usage: "wx!moderasyon",
    ownerOnly: false,
    run: async (message,args,client) => {
        const exampleEmbed = {
          color: 0x0099ff,
          title: '**Moderasyon Komutları**',
          author: {
            name: 'Mixer bot',
            icon_url: `https://images.discordapp.net/avatars/750694500271128617/728431d8644a5e415bfabdda46ced30f.png?size=512`,
            url: `https://images.discordapp.net/avatars/750694500271128617/728431d8644a5e415bfabdda46ced30f.png?size=512`,
        },
          fields: [
            {
              name: 'Kanal oluşturmak için',
              value: 'mx!kanal (Kanaladı)',
            },
            {
              name: 'Kategori oluşturmak için',
              value: 'mx!kategori (Kategoriadı)',
            },
            {
              name: 'Rol oluşturmak için',
              value: 'mx!rololuştur (Roladı)',
            },
            {
                name: 'Duyuru yapmak istiyorsanız',
                value: 'mx!duyuru (Mesaj)',
            },
            {
              name: 'Oyuncuyu yasaklamak için',
              value: 'mx!ban (Oyuncuadı)',
            },
            {
                name: 'Oyuncuyu atmak için',
                value: 'mx!kick (Oyuncuadı)',
              },
          ],
        };
      message.channel.send({ embed: exampleEmbed });
      }
    }
