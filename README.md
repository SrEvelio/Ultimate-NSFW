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

#### Methods

- Anal (anal)
- Ass (ass)
- Boobs (boobs)
- 4k (fourk)
- Gonewild (gonewild)
- Hentai (hentai)
- Hentai Boobs (hentaiboobs)
- Hentai Ass (hentaiass)
- Hentai Thigh (hentaithigh)
- Hmidriff (hmidriff)
- Kitsune (kitsune)
- Lewd (lewd)
- Lewd Neko (lewdneko)
- Neko (neko)
- Neko Gif (nekogif)
- Porn Gif (pgif)
- Pussy (pussy)
- Solo (solo)
- Thigh (thigh)
- Waifu (waifu)
- Wallpaper (wallpaper)