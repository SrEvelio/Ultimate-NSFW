const axios = require('axios').default;
class NSFW {

    static async anal() {
        let data = await axios.get("https://nekobot.xyz/api/image?type=anal").then(res => res.data);
        return data.message;
    }

    static async ass() {
        let data = await axios.get("https://nekobot.xyz/api/image?type=ass").then(res => res.data);
        return data.message;
    }


    static async boobs() {
        let data = await axios.get("https://api.dayabot.ml/img/boobs").then(res => res.data);
        return data.url;
    }

    static async fourk() { 
        let data = await axios.get("https://nekobot.xyz/api/image?type=4k").then(res => res.data);
        return data.message;
    }

    static async gonewild() {
        let data = await axios.get("https://nekobot.xyz/api/image?type=gonewild").then(res => res.data);
        return data.message;
    }

    static async hentaiboobs() {
        let data = await axios.get("https://nekobot.xyz/api/image?type=hboobs").then(res => res.data);
        return data.message;
    }

    static async hentaiass() {
        let data = await axios.get("https://nekobot.xyz/api/image?type=hass").then(res => res.data);s
        return data.message;
    }

    static async hentaithigh() {
        let data = await axios.get("https://nekobot.xyz/api/image?type=hthigh").then(res => res.data);
        return data.message;
    }

    static async hentai() {
        let data = await axios.get("https://nekobot.xyz/api/image?type=hentai").then(res => res.data);
        return data.message;
    }

    static async hmidriff() {
        let data = await axios.get("https://nekobot.xyz/api/image?type=hmidriff").then(res => res.data);
        return data.message;
    }

    static async hentaithigh() {
        let data = await axios.get("https://nekobot.xyz/api/image?type=hthigh").then(res => res.data);
        return data.message;
    }

    static async kitsune() {
        let data = await axios.get("https://nekos.life/api/v2/img/fox_girl").then(res => res.data);
        return data.url;
    }

    static async lewd() {
        let data = await axios.get("https://nekos.life/api/v2/img/lewd").then(res => res.data);
        return data.url;
    }

    static async lewdneko() {
        let data = await axios.get("https://nekobot.xyz/api/image?type=lewdneko").then(res => res.data);
        return data.message;
    }

    static async neko() {
        let data = await axios.get("https://nekos.life/api/v2/img/neko").then(res => res.data);
        return data.url;
    }

    static async nekogif() {
        let data = await axios.get("https://nekos.life/api/v2/img/ngif").then(res => res.data);
        return data.url;
    }

    static async pgif() {
        let data = await axios.get("https://nekobot.xyz/api/image?type=pgif").then(res => res.data);
        return data.message;
    }

    static async pussy() {
        let data = await axios.get("https://api.dayabot.ml/img/pussy").then(res => res.data);
        return data.url;
    }

    static async solo() {
        let data = await axios.get("https://nekos.life/api/v2/img/solo").then(res => res.data);
        return data.url;
    }

    static async thigh() {
        let data = await axios.get("https://nekobot.xyz/api/image?type=thigh").then(res => res.data);
        return data.message;
    }

    static async waifu() {
        let data = await axios.get("https://nekos.life/api/v2/img/waifu").then(res => res.data);
        return data.url;
    }

    static async wallpaper() {
        let data = await axios.get("https://nekos.life/api/v2/img/wallpaper").then(res => res.data);
        return data.url;
    }
    
}

module.exports = NSFW;