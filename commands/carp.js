module.exports = {
    name: "çarp",
    aliases: ["çarp","carp","thor"],
    description: "çarp komudu",
    usage: "wx!çarp",
    ownerOnly: false,
    run: async (message,args,client) => {
      let öp = args[0];
          if (!öp) {
          message.channel.send("`Dostum isim girmedin, mecburen sana çarpıcaz :D`")
          message.channel.send("https://tenor.com/view/thor-fat-thor-god-godof-thunder-avengers-gif-14020681");
         }
          if (öp === '@everyone', '@here') {
            message.channel.send("Bi akıllı sensin demi aptal.")
          }
          else if (öp) {
            message.channel.send("Çarpıldı " + args[0])
            message.channel.send("Çarpan kişi" + " **" + message.member.user.tag + "**");
            message.channel.send("https://tenor.com/view/thor-lightning-chris-hemsworth-hammer-gif-7918242");
          }
      }
    }
