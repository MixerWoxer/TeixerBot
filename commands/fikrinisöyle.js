module.exports = {
    name: "soru",
    aliases: ["soru","soru","soru"],
    description: "soru komudu",
    usage: "wx!soru",
    ownerOnly: false,
    run: async (message,args,client) => {
        let arg = args.slice(0).join(' ');
    message.reply('Bekle bi yüklüyom.').then(message => {
    var espriler = ['Hayır', 'Evet', 'Kesinlikle'];
    var espri = espriler[Math.floor(Math.random() * espriler.length)];
    if(arg === 0) {
        message.channel.send('Bir soru girmen gerekmezmi ?')
    }
    if(arg) {
        message.channel.send('Sorduğun soru: ' + `${arg}`)
        message.channel.send('Cevabım: ' + `${espri}`)
    }
    });
    }
}
