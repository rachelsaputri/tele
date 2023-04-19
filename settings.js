const fs = require("fs");
const {
   indonesia
} = require("./language");

// Website Api (jgn di ganti biar gk eror)
global.APIs = {
   alfa: 'https://api.zeeoneofc.my.id', //apabila link api eror, segera laporkan ke owner
}

//buy apikey premium 0887435047326
// Free apikey (silahkan login terus ganti Your Key dgn apikey lu)
global.APIKeys = {
   'https://api.zeeoneofc.my.id': 'Apikey Costum', // 👉 login https://api.zeeoneofc.my.id to get apikey
}

//language 
global.language = indonesia //change indonesia to english if you don't understand the language used by the bot

global.BOT_TOKEN = "6037312439:AAGBZuKJTTsYLLHdcN_MohNhy104JS5r3TM" //create bot here https://t.me/BotFather and get the bot token
global.BOT_NAME = "BOTCAHX" //your bot name
global.OWNER_NAME = "TioXd" //your name
global.OWNER_NUMBER = "6282221792667" //your telegram number
global.OWNER = ["https://t.me/wtffry", "https://t.me/wtffry"] // pastikan username sudah sesuai agar fitur khusus owner bisa di pakai
global.THUMBNAIL = "./image/logo.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.DONASI = "./image/logo.jpg" // foto donasi di folder image
global.lang = language //don't change
