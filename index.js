const agent = require('superagent')

class NSFW {

    static async anal() {
        const { body } = await agent.get("https://nekobot.xyz/api/image?type=anal");
        return body.message;
    }

    static async ass() {
        const { body } = await agent.get("https://nekobot.xyz/api/image?type=ass");
        return body.message;
    }


    static async boobs() {
        const { body } = await agent.get("https://nekobot.xyz/api/image?type=boobs");
        return body.message;
    }

    static async fourk() {
        const { body } = await agent.get("https://nekobot.xyz/api/image?type=4k")
        return body.message;
    }

    static async gonewild() {
        const { body } = await agent.get("https://nekobot.xyz/api/image?type=gonewild");
        return body.message;
    }

    static async hentaiboobs() {
        const { body } = await agent.get("https://nekobot.xyz/api/image?type=hboobs");
        return body.message;
    }

    static async hentaiass() {
        const { body } = await agent.get("https://nekobot.xyz/api/image?type=hass");
        return body.message;
    }

    static async hentaithigh() {
        const { body } = await agent.get("https://nekobot.xyz/api/image?type=hthigh");
        return body.message;
    }

    static async hentai() {
        const { body } = await agent.get("https://nekobot.xyz/api/image?type=hentai");
        return body.message;
    }

    static async hmidriff() {
        const { body } = await agent.get("https://nekobot.xyz/api/image?type=hmidriff");
        return body.message;
    }

    static async hentaithigh() {
        const { body } = await agent.get("https://nekobot.xyz/api/image?type=hthigh");
        return body.message;
    }

    static async kitsune() {
        const { body } = await agent.get("https://nekos.life/api/v2/img/fox_girl");
        return body.url;
    }

    static async lewd() {
        const { body } = await agent.get("https://nekos.life/api/v2/img/lewd");
        return body.url;
    }

    static async lewdneko() {
        const { body } = await agent.get("https://nekobot.xyz/api/image?type=lewdneko");
        return body.message;
    }

    static async neko() {
        const { body } = await agent.get("https://nekos.life/api/v2/img/neko");
        return body.url;
    }

    static async nekogif() {
        const { body } = await agent.get("https://nekos.life/api/v2/img/ngif");
        return body.url;
    }

    static async pgif() {
        const { body } = await agent.get("https://nekobot.xyz/api/image?type=pgif");
        return body.message;
    }

    static async pussy() {
        const { body } = await agent.get("https://nekobot.xyz/api/image?type=pussy");
        return body.message;
    }

    static async solo() {
        const { body } = await agent.get("https://nekos.life/api/v2/img/solo");
        return body.url;
    }

    static async thigh() {
        const { body } = await agent.get("https://nekobot.xyz/api/image?type=thigh");
        return body.message;
    }

    static async waifu() {
        const { body } = await agent.get("https://nekos.life/api/v2/img/waifu");
        return body.url;
    }

    static async wallpaper() {
        const { body } = await agent.get("https://nekos.life/api/v2/img/wallpaper");
        return body.url;
    }
    
}

module.exports = NSFW;