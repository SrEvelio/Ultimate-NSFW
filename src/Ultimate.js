const axios = require('axios').default;

class NSFW {
    constructor() {
        this.categories = [
            "anal",
            "ass",
            "boobs",
            "doujin",
            "ero",
            "ecchi",
            "feet",
            "femdom",
            "fourk",
            "gonewild",
            "glasses",
            "hentaiboobs",
            "hentaiass",
            "hentaithigh",
            "hentai",
            "hmidriff",
            "kitsune",
            "lewd",
            "lewdneko",
            "milf",
            "maid",
            "neko",
            "netorare",
            "nekogif",
            "paizuri",
            "panties",
            "pgif",
            "rhgif",
            "pussy",
            "solo",
            "school",
            "tentacles",
            "thigh",
            "waifu",
            "wallpaper",
            "yuri"
        ]
    }
    async anal() {
        let data = await axios.get("https://nekobot.xyz/api/image?type=anal").then(res => res.data).catch((e) => { return console.error(e) });
        return data.message;
    }

    async ass() {
        let data = await axios.get("https://nekobot.xyz/api/image?type=ass").then(res => res.data).catch((e) => { return console.error(e) });
        return data.message;
    }


    async boobs() {
        let data = await axios.get("https://api.dayabot.ml/img/boobs").then(res => res.data).catch((e) => { return console.error(e) });
        return data.url;
    }

    async doujin() {
        let data = await axios.get("https://akaneko-api.herokuapp.com/api/doujin").then(res => res.data).catch((e) => { return console.error(e) });
        return data.url;
    }

    async ero() {
        let data = await axios.get("https://api.waifu.im/random/?selected_tags=ero").then(res => res.data).catch((e) => { return console.error(e) });
        return data[0].url;
    }

    async ecchi() {
        let data = await axios.get("https://api.waifu.im/random/?selected_tags=ecchi").then(res => res.data).catch((e) => { return console.error(e) });
        return data[0].url;
    }

    async feet() {
        let data = await axios.get("https://akaneko-api.herokuapp.com/api/feet").then(res => res.data).catch((e) => { return console.error(e) });
        return data.url;
    }

    async fourk() {
        let data = await axios.get("https://nekobot.xyz/api/image?type=4k").then(res => res.data).catch((e) => { return console.error(e) });
        return data.message;
    }

    async gonewild() {
        let data = await axios.get("https://nekobot.xyz/api/image?type=gonewild").then(res => res.data).catch((e) => { return console.error(e) });
        return data.message;
    }

    async glasses() {

    }

    async hentaiboobs() {
        let data = await axios.get("https://nekobot.xyz/api/image?type=hboobs").then(res => res.data).catch((e) => { return console.error(e) });
        return data.message;
    }

    async hentaiass() {
        let data = await axios.get("https://api.waifu.im/random/?selected_tags=ass").then(res => res.data).catch((e) => { return console.error(e) });
        return data.images[0].url;
    }

    async hentaithigh() {
        let data = await axios.get("https://nekobot.xyz/api/image?type=hthigh").then(res => res.data).catch((e) => { return console.error(e) });
        return data.message;
    }

    async hentai() {
        let data = await axios.get("https://api.waifu.im/random/?selected_tags=hentai").then(res => res.data).catch((e) => { return console.error(e) });
        return data.images[0].url;
    }

    async hmidriff() {
        let data = await axios.get("https://nekobot.xyz/api/image?type=hmidriff").then(res => res.data).catch((e) => { return console.error(e) });
        return data.message;
    }

    async kitsune() {
        let data = await axios.get("https://nekos.life/api/v2/img/fox_girl").then(res => res.data).catch((e) => { return console.error(e) });
        return data.url;
    }

    async lewd() {
        let data = await axios.get("https://nekos.life/api/v2/img/lewd").then(res => res.data).catch((e) => { return console.error(e) });
        return data.url;
    }

    async lewdneko() {
        let data = await axios.get("https://nekobot.xyz/api/image?type=lewdneko").then(res => res.data).catch((e) => { return console.error(e) });
        return data.message;
    }

    async milf() {
        let data = await axios.get("https://api.waifu.im/random/?selected_tags=milf").then(res => res.data).catch((e) => { return console.error(e) });
        return data[0].url;
    }

    async maid() {
        let data = await axios.get("https://akaneko-api.herokuapp.com/api/maid").then(res => res.data).catch((e) => { return console.error(e) });
        return data.url;
    }

    async neko() {
        let data = await axios.get("https://api.waifu.pics/nsfw/neko").then(res => res.data).catch((e) => { return console.error(e) });
        return data.url;
    }

    async netorare() {
        let data = await axios.get("https://akaneko-api.herokuapp.com/api/netorare").then(res => res.data).catch((e) => { return console.error(e) });
        return data.url;
    }

    async nekogif() {
        let data = await axios.get("https://nekos.life/api/v2/img/ngif").then(res => res.data).catch((e) => { return console.error(e) });
        return data.url;
    }

    async panties() {
        let data = await axios.get("https://akaneko-api.herokuapp.com/api/panties").then(res => res.data).catch((e) => { return console.error(e) });
        return data.url;
    }

    async paizuri() {
        let data = await axios.get("https://api.waifu.im/random/?selected_tags=paizuri").then(res => res.data).catch((e) => { return console.error(e) });
        return data[0].url;
    }

    async pgif() {
        let data = await axios.get("https://nekobot.xyz/api/image?type=pgif").then(res => res.data).catch((e) => { return console.error(e) });
        return data.message;
    }

    async rhgif() {
        let data = await axios.get("https://akaneko-api.herokuapp.com/api/gif").then(res => res.data).catch((e) => { return console.error(e) });
        return data.url;
    }

    async pussy() {
        let data = await axios.get("https://api.dayabot.ml/img/pussy").then(res => res.data).catch((e) => { return console.error(e) });
        return data.url;
    }

    async succubus() {
        let data = await axios.get("https://akaneko-api.herokuapp.com/api/succubus").then(res => res.data).catch((e) => { return console.error(e) });
        return data.url;
    }

    async solo() {
        let data = await axios.get("https://nekos.life/api/v2/img/solo").then(res => res.data).catch((e) => { return console.error(e) });
        return data.url;
    }

    async school() {
        let data = await axios.get("https://akaneko-api.herokuapp.com/api/school").then(res => res.data).catch((e) => { return console.error(e) });
        return data.url;
    }

    async thigh() {
        let data = await axios.get("https://nekobot.xyz/api/image?type=thigh").then(res => res.data).catch((e) => { return console.error(e) });
        return data.message;
    }

    async waifu() {
        let data = await axios.get("https://api.waifu.pics/nsfw/waifu").then(res => res.data).catch((e) => { return console.error(e) });
        return data.url;
    }

    async wallpaper() {
        let data = await axios.get("https://nekos.life/api/v2/img/wallpaper").then(res => res.data).catch((e) => { return console.error(e) });
        return data.url;
    }

    async yuri() {
        let data = await axios.get("https://akaneko-api.herokuapp.com/api/yuri").then(res => res.data).catch((e) => { return console.error(e) });
        return data.url;
    }

}

module.exports = NSFW;