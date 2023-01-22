"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ultimate = void 0;
const axios_1 = __importDefault(require("axios"));
class Ultimate {
    anal() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield axios_1.default.get("https://nekobot.xyz/api/image?type=anal").then(res => res.data).catch(console.error);
            if (!data)
                data = { message: "https://cdn.discordapp.com/attachments/1002605769872646164/1017880037258698862/Error-404.jpg" };
            return data.message;
        });
    }
    ass() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield axios_1.default.get("https://nekobot.xyz/api/image?type=ass").then(res => res.data).catch(console.error);
            if (!data)
                data = { message: "https://cdn.discordapp.com/attachments/1002605769872646164/1017880037258698862/Error-404.jpg" };
            return data.message;
        });
    }
    boobs() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield axios_1.default.get('https://dayabot.ml/api/nsfw/boobs').then(x => x.data);
            if (!data)
                data = { url: "https://cdn.discordapp.com/attachments/1002605769872646164/1017880037258698862/Error-404.jpg" };
            return data.url;
        });
    }
    doujin() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield axios_1.default.get("https://akaneko-api.herokuapp.com/api/doujin").then(res => res.data).catch(console.error);
            if (!data)
                data = { url: "https://cdn.discordapp.com/attachments/1002605769872646164/1017880037258698862/Error-404.jpg" };
            return data.url;
        });
    }
    ero() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield axios_1.default.get("https://api.waifu.im/random/?selected_tags=ero").then(res => res.data).catch(console.error);
            if (!data)
                data = [{ url: "https://cdn.discordapp.com/attachments/1002605769872646164/1017880037258698862/Error-404.jpg" }];
            return data[0].url;
        });
    }
    ecchi() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield axios_1.default.get("https://api.waifu.im/random/?selected_tags=ecchi").then(res => res.data).catch(console.error);
            if (!data)
                data = [{ url: "https://cdn.discordapp.com/attachments/1002605769872646164/1017880037258698862/Error-404.jpg" }];
            return data[0].url;
        });
    }
    feet() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield axios_1.default.get("https://akaneko-api.herokuapp.com/api/feet").then(res => res.data).catch(console.error);
            if (!data)
                data = { url: "https://cdn.discordapp.com/attachments/1002605769872646164/1017880037258698862/Error-404.jpg" };
            return data.url;
        });
    }
    fourk() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield axios_1.default.get("https://nekobot.xyz/api/image?type=4k").then(res => res.data).catch(console.error);
            if (!data)
                data = { message: "https://cdn.discordapp.com/attachments/1002605769872646164/1017880037258698862/Error-404.jpg" };
            return data.message;
        });
    }
    gonewild() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield axios_1.default.get("https://nekobot.xyz/api/image?type=gonewild").then(res => res.data).catch(console.error);
            if (!data)
                data = { message: "https://cdn.discordapp.com/attachments/1002605769872646164/1017880037258698862/Error-404.jpg" };
            return data.message;
        });
    }
    glasses() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield axios_1.default.get("https://akaneko-api.herokuapp.com/api/glasses").then(res => res.data).catch(console.error);
            if (!data)
                data = { url: "https://cdn.discordapp.com/attachments/1002605769872646164/1017880037258698862/Error-404.jpg" };
            return data.url;
        });
    }
    hentaiboobs() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield axios_1.default.get("https://nekobot.xyz/api/image?type=hboobs").then(res => res.data).catch(console.error);
            if (!data)
                data = { message: "https://cdn.discordapp.com/attachments/1002605769872646164/1017880037258698862/Error-404.jpg" };
            return data.message;
        });
    }
    hentaiass() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield axios_1.default.get("https://api.waifu.im/random/?selected_tags=ass").then(res => res.data).catch(console.error);
            if (!data)
                data = { images: [{ url: "https://cdn.discordapp.com/attachments/1002605769872646164/1017880037258698862/Error-404.jpg" }] };
            return data.images[0].url;
        });
    }
    hentaithigh() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield axios_1.default.get("https://nekobot.xyz/api/image?type=hthigh").then(res => res.data).catch(console.error);
            if (!data)
                data = { message: "https://cdn.discordapp.com/attachments/1002605769872646164/1017880037258698862/Error-404.jpg" };
            return data.message;
        });
    }
    hentai() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield axios_1.default.get("https://api.waifu.im/random/?selected_tags=hentai").then(res => res.data).catch(console.error);
            if (!data)
                data = { images: [{ url: "https://cdn.discordapp.com/attachments/1002605769872646164/1017880037258698862/Error-404.jpg" }] };
            return data.images[0].url;
        });
    }
    hmidriff() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield axios_1.default.get("https://nekobot.xyz/api/image?type=hmidriff").then(res => res.data).catch(console.error);
            if (!data)
                data = { message: "https://cdn.discordapp.com/attachments/1002605769872646164/1017880037258698862/Error-404.jpg" };
            return data.message;
        });
    }
    kitsune() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield axios_1.default.get("https://nekos.life/api/v2/img/fox_girl").then(res => res.data).catch(console.error);
            if (!data)
                data = { url: "https://cdn.discordapp.com/attachments/1002605769872646164/1017880037258698862/Error-404.jpg" };
            return data.url;
        });
    }
    lewd() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield axios_1.default.get("https://nekos.life/api/v2/img/lewd").then(res => res.data).catch(console.error);
            if (!data)
                data = { url: "https://cdn.discordapp.com/attachments/1002605769872646164/1017880037258698862/Error-404.jpg" };
            return data.url;
        });
    }
    lewdneko() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield axios_1.default.get("https://nekobot.xyz/api/image?type=lewdneko").then(res => res.data).catch(console.error);
            if (!data)
                data = { message: "https://cdn.discordapp.com/attachments/1002605769872646164/1017880037258698862/Error-404.jpg" };
            return data.message;
        });
    }
    milf() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield axios_1.default.get("https://api.waifu.im/random/?selected_tags=milf").then(res => res.data).catch(console.error);
            if (!data)
                data = { images: [{ url: "https://cdn.discordapp.com/attachments/1002605769872646164/1017880037258698862/Error-404.jpg" }] };
            return data.images[0].url;
        });
    }
    maid() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield axios_1.default.get("https://akaneko-api.herokuapp.com/api/maid").then(res => res.data).catch(console.error);
            if (!data)
                data = { url: "https://cdn.discordapp.com/attachments/1002605769872646164/1017880037258698862/Error-404.jpg" };
            return data.url;
        });
    }
    neko() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield axios_1.default.get("https://api.waifu.pics/nsfw/neko").then(res => res.data).catch(console.error);
            if (!data)
                data = { url: "https://cdn.discordapp.com/attachments/1002605769872646164/1017880037258698862/Error-404.jpg" };
            return data.url;
        });
    }
    netorare() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield axios_1.default.get("https://akaneko-api.herokuapp.com/api/netorare").then(res => res.data).catch(console.error);
            if (!data)
                data = { url: "https://cdn.discordapp.com/attachments/1002605769872646164/1017880037258698862/Error-404.jpg" };
            return data.url;
        });
    }
    nekogif() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield axios_1.default.get("https://nekos.life/api/v2/img/ngif").then(res => res.data).catch(console.error);
            if (!data)
                data = { url: "https://cdn.discordapp.com/attachments/1002605769872646164/1017880037258698862/Error-404.jpg" };
            return data.url;
        });
    }
    panties() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield axios_1.default.get("https://akaneko-api.herokuapp.com/api/panties").then(res => res.data).catch(console.error);
            if (!data)
                data = { url: "https://cdn.discordapp.com/attachments/1002605769872646164/1017880037258698862/Error-404.jpg" };
            return data.url;
        });
    }
    paizuri() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield axios_1.default.get("https://api.waifu.im/random/?selected_tags=paizuri").then(res => res.data).catch(console.error);
            if (!data)
                data = { images: [{ url: "https://cdn.discordapp.com/attachments/1002605769872646164/1017880037258698862/Error-404.jpg" }] };
            return data.images[0].url;
        });
    }
    pgif() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield axios_1.default.get("https://nekobot.xyz/api/image?type=pgif").then(res => res.data).catch(console.error);
            if (!data)
                data = { message: "https://cdn.discordapp.com/attachments/1002605769872646164/1017880037258698862/Error-404.jpg" };
            return data.message;
        });
    }
    rhgif() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield axios_1.default.get("https://akaneko-api.herokuapp.com/api/gif").then(res => res.data).catch(console.error);
            if (!data)
                data = { url: "https://cdn.discordapp.com/attachments/1002605769872646164/1017880037258698862/Error-404.jpg" };
            return data.url;
        });
    }
    pussy() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield axios_1.default.get("https://dayabot.ml/api/nsfw/pussy").then(res => res.data).catch(console.error);
            if (!data)
                data = { url: "https://cdn.discordapp.com/attachments/1002605769872646164/1017880037258698862/Error-404.jpg" };
            return data.url;
        });
    }
    succubus() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield axios_1.default.get("https://akaneko-api.herokuapp.com/api/succubus").then(res => res.data).catch(console.error);
            if (!data)
                data = { url: "https://cdn.discordapp.com/attachments/1002605769872646164/1017880037258698862/Error-404.jpg" };
            return data.url;
        });
    }
    solo() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield axios_1.default.get("https://nekos.life/api/v2/img/solo").then(res => res.data).catch(console.error);
            if (!data)
                data = { url: "https://cdn.discordapp.com/attachments/1002605769872646164/1017880037258698862/Error-404.jpg" };
            return data.url;
        });
    }
    school() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield axios_1.default.get("https://akaneko-api.herokuapp.com/api/school").then(res => res.data).catch(console.error);
            if (!data)
                data = { url: "https://cdn.discordapp.com/attachments/1002605769872646164/1017880037258698862/Error-404.jpg" };
            return data.url;
        });
    }
    thigh() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield axios_1.default.get("https://nekobot.xyz/api/image?type=thigh").then(res => res.data).catch(console.error);
            if (!data)
                data = { message: "https://cdn.discordapp.com/attachments/1002605769872646164/1017880037258698862/Error-404.jpg" };
            return data.message;
        });
    }
    waifu() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield axios_1.default.get("https://api.waifu.pics/nsfw/waifu").then(res => res.data).catch(console.error);
            if (!data)
                data = { url: "https://cdn.discordapp.com/attachments/1002605769872646164/1017880037258698862/Error-404.jpg" };
            return data.url;
        });
    }
    wallpaper() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield axios_1.default.get("https://nekos.life/api/v2/img/wallpaper").then(res => res.data).catch(console.error);
            if (!data)
                data = { url: "https://cdn.discordapp.com/attachments/1002605769872646164/1017880037258698862/Error-404.jpg" };
            return data.url;
        });
    }
    yuri() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield axios_1.default.get("https://akaneko-api.herokuapp.com/api/yuri").then(res => res.data).catch(console.error);
            if (!data)
                data = { url: "https://cdn.discordapp.com/attachments/1002605769872646164/1017880037258698862/Error-404.jpg" };
            return data.url;
        });
    }
}
exports.Ultimate = Ultimate;
