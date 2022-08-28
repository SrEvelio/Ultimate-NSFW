### Ultimate-NSFW

Ultimate-NSFW is a package created to make it easy to deploy Not safe to work content/images to your discord bot.

#### Install

```bash
npm install ultimate-nsfw
```
#

#### Usage

```js
const UltimateNSFW = require('ultimate-nsfw');
const nsfw = new UltimateNSFW();

let image = await nsfw.<Method>()
```

#
#### Discord.js Usage

```js
const { EmbedBuilder } = require('discord.js');

const UltimateNSFW = require('ultimate-nsfw');
const nsfw = new UltimateNSFW();

let image = await nsfw.pussy();

let embed = new EmbedBuilder()
    .setTitle('Pussy')
    .setImage(image)
    .setColor('#ff0000')

return message.reply({ embeds: [embed] });
```
#

#### Methods / Categories 

- **Anal (anal)**
- **Ass (ass)** 
- **Boobs (boobs)** 
- **Doujin (doujin)** 
- **Ero (ero)**
- **Ecchi (ecchi)** 
- **Feet (feet)**
- **Female Domination (femdom)** 
- **4k (fourk)** 
- **Gonewild (gonewild)** 
- **Glasses (glasses)** 
- **Hentai (hentai)**
- **Hentai Boobs (hentaiboobs)** 
- **Hentai Ass (hentaiass)**
- **Hentai Thigh (hentaithigh)** 
- **Hmidriff (hmidriff)**
- **Kitsune (kitsune)**
- **Lewd (lewd)** 
- **Lewd Neko (lewdneko)** 
- **Milf (milf)** 
- **Maid (maid)** 
- **Neko (neko)** 
- **Netorare (netorare)** 
- **Neko Gif (nekogif)** 
- **Paizuri (paizuri)** 
- **Panties (panties)**
- **Porn Gif (pgif)** 
- **Random Gifs (rhgif)**
- **Pussy (pussy)**
- **Succubus (succubus)** 
- **Solo (solo)** 
- **School (school)**  
- **Tentacles (tentacles)**
- **Thigh (thigh)** 
- **Waifu (waifu)**  
- **Wallpaper (wallpaper)**
- **Yuri (yuri)** 

#

#### APIs used in the package
- [Akaneko](https://akaneko-api.herokuapp.com/)
- [Nekobot](https://nekobot.xyz/)
- [Nekos.life](https://nekos.life/)
- [Waifu Pics](https://waifu.pics/)
- [Waifu Im](https://waifu.im/)