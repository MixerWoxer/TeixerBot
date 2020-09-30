const Discord = require('discord.js');

module.exports = {
    name: "afk",
    aliases: ["afk","awayfromkeyboard","aktifdeğil"],
    description: "afk komudu",
    usage: "wx!afk",
    ownerOnly: false,
    run: async (message,client) => {
        const exampleEmbed = {
            color: 0x0099ff,
            title: 'Away From Keyboard',
            fields: [
            ],
            timestamp: new Date(),
            footer: {
                text: 'Afk modu aktif edildi',
                icon_url: 'https://scontent.fist1-2.fna.fbcdn.net/v/t31.0-8/28947133_1398477380257648_1932676609578107393_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=xoa8qSu9WY4AX8AnGqb&_nc_oc=AQmUEKaj3wQT-J43WYSNUSp3QXKMqLui8dxYcDg99OaE9UQBovWzFT6jiAoRWGLZVys&_nc_ht=scontent.fist1-2.fna&oh=c87079e6874ca9f887cf596feb7a7ef1&oe=5F7BCF16',
            },
        };
        
        message.channel.send({ embed: exampleEmbed });
    }
}