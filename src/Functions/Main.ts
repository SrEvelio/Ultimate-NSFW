import fetcher from "./Fetcher";

let nekoapi = "https://nekobot.xyz/api/image";
let nekoslife = "https://nekos.life/api/v2/img";
let waifuim = "https://api.waifu.im/search?is_nsfw=true";
// Mapas de categorías a sus respectivas APIs
const apiMap: { [key: string]: string } = {
  ero: `${waifuim}&included_tags=ero`,
  hass: `${waifuim}&included_tags=ass`,
  hentai: `${waifuim}&included_tags=hentai`,
  milf: `${waifuim}&included_tags=milf`,
  oral: `${waifuim}&included_tags=oral`,
  paizuri: `${waifuim}&included_tags=paizuri`,
  ecchi: `${waifuim}&included_tags=ecchi`,
  anal: `${nekoapi}?type=anal`,
  neko: `${nekoslife}/neko`,
  boobs: `${nekoapi}?type=boobs`,
  wallpaper: `${nekoslife}/wallpaper`,
  ngif: `${nekoslife}/ngif`,
  tickle: `${nekoslife}/tickle`,
  feed: `${nekoslife}/feed`,
  gecg: `${nekoslife}/gecg`,
  gasm: `${nekoslife}/gasm`,
  slap: `${nekoslife}/slap`,
  avatar: `${nekoslife}/avatar`,
  waifu: `${nekoslife}/waifu`,
  pat: `${nekoslife}/pat`,
  spank: `${nekoslife}/spank`,
  fox_girl: `${nekoslife}/fox_girl`,
  smug: `${nekoslife}/smug`,
  goose: `${nekoslife}/goose`,
  woof: `${nekoslife}/woof`,
  cosplay: `${nekoapi}?type=cosplay`,
  hentai2: `${nekoapi}?type=hentai`,
  pgif: `${nekoapi}?type=pgif`,
  swimsuit: `${nekoapi}?type=swimsuit`,
  thigh: `${nekoapi}?type=thigh`,
  hass2: `${nekoapi}?type=hass`,
  hboobs: `${nekoapi}?type=hboobs`,
  pussy: `${nekoapi}?type=pussy`,
  paizuri2: `${nekoapi}?type=paizuri`,
  pantsu: `${nekoapi}?type=pantsu`,
  lewdneko: `${nekoapi}?type=lewdneko`,
  feet: `${nekoapi}?type=feet`,
  hyuri: `${nekoapi}?type=hyuri`,
  hthigh: `${nekoapi}?type=hthigh`,
  hmidriff: `${nekoapi}?type=hmidriff`,
  ass: `${nekoapi}?type=ass`,
  nakadashi: `${nekoapi}?type=nakadashi`,
  blowjob: `${nekoapi}?type=blowjob`,
  gonewild: `${nekoapi}?type=gonewild`,
  hkitsune: `${nekoapi}?type=hkitsune`,
  tentacle: `${nekoapi}?type=tentacle`,
  fourk: `${nekoapi}?type=4k`,
  kanna: `${nekoapi}?type=kanna`,
  hentai_anal: `${nekoapi}?type=hentai_anal`,
  food: `${nekoapi}?type=food`,
  neko2: `${nekoapi}?type=neko`,
  holo: `${nekoapi}?type=holo`,
  pee: `${nekoapi}?type=pee`,
  kemonomimi: `${nekoapi}?type=kemonomimi`,
  coffee: `${nekoapi}?type=coffee`,
  yaoi: `${nekoapi}?type=yaoi`,
  futa: `${nekoapi}?type=futa`,
  gah: `${nekoapi}?type=gah`,
};

interface FetchResponse {
  success: boolean;
  url: string;
}

type Category = keyof typeof apiMap;

class Ultimate {
  async fetch(category: Category): Promise<FetchResponse> {
    const apiUrl = apiMap[category];

    if (!apiUrl) {
      throw new Error(`Category "${category}" does not exist`);
    }

    try {
      const response = await fetcher(apiUrl);
      return {
        success: response.success !== undefined ? response.success : true,
        url: response.message || response.url || response.images[0].url,
      };
    } catch (error) {
      console.error(`Error fetching from ${category}:`, error);
      throw error;
    }
  }
}

export default Ultimate;
