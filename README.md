### Ultimate-NSFW

Ultimate-NSFW is a package created to make it easy to deploy Not safe to work content/images to your discord bot.

#### Install

```bash
npm install ultimate-nsfw
```
#

#### Usage 
```js
// Commonjs
const Ultimate = require("ultimate-nsfw").default;
let image = await Ultimate.fetch("<Method>");
// returns { success: boolean, url: string }

// ESM
import { Ultimate } from "ultimate-nsfw";
let image = await Ultimate.fetch("<Method>");
// returns { success: boolean, url: string }
```

#
#### Discord.js Usage

```js
const { EmbedBuilder } = require('discord.js');

const Ultimate = require("ultimate-nsfw");
const nsfw = Ultimate.default;

let image = await nsfw.fetch("waifu");

message.reply({
    embeds: [
        new EmbedBuilder()
            .setTitle('A beautiful Waifu')
            .setImage(image.url)
            .setColor('#ff0000')
    ]
});
```
#

#### APIs used in the package
- [Nekobot](https://nekobot.xyz/)
- [Nekos.life](https://nekos.life/)
- [Waifu Im](https://waifu.im/)

#

#### Methods / Categories 

- **Anal (anal)**
- **Ass (ass)** 
- **Boobs (boobs)** 
- **Doujin (doujin)** 
- **Ero (ero)**
- **Ecchi (ecchi)** 
- **Feet (feet)**
- **4k (fourk)** 
- **Gonewild (gonewild)** 
- **Hentai (hentai)**
- **Hentai Boobs (hboobs)** 
- **Hentai Ass (hass)**
- **Hentai Thigh (hthigh)** 
- **Hmidriff (hmidriff)**
- **Kitsune (kitsune)**
- **Lewd (lewd)** 
- **Lewd Neko (lewdneko)** 
- **Milf (milf)** 
- **Neko (neko)** 
- **Paizuri (paizuri)** 
- **Pussy (pussy)**
- **Tentacles (tentacle)**
- **Thigh (thigh)** 
- **Waifu (waifu)**  
- **Wallpaper (wallpaper)**
- **Yuri (yuri)** 
- **And other stuff**