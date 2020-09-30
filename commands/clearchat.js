module.exports = {
    name: "sil",
    aliases: ["sil","süpür"],
    description: "Sohbet silme komudu",
    usage: "wx!sil",
    clientPermissions: ['ADMINISTRATOR'],
    ownerOnly: false,
    run: async (message,args,client) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
    if(!args[0]) return message.reply(`**Lütfen geçerli bir miktar yazın !**`);
    message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`**${args[0]}** Adet Mesajı Sildim.`);
    })
    }
}
